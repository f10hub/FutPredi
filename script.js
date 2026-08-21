// --- 1. CONFIGURACIÓN Y DATOS ---
const players = [
    { id: 1, name: "Kylian Mbappé", team: "Real Madrid", position: "DEL", emoji: "⚡" },
    { id: 2, name: "Lamine Yamal", team: "FC Barcelona", position: "EXT", emoji: "💎" },
    { id: 3, name: "Erling Haaland", team: "Man. City", position: "DEL", emoji: "🤖" },
    { id: 4, name: "Jude Bellingham", team: "Real Madrid", position: "MED", emoji: "🌟" }
];

// --- 2. LÓGICA DE INTERFAZ ---
document.addEventListener('DOMContentLoaded', renderPlayers);

function getRatingData(value) {
    if (value <= 3) return { text: "Temporada decepcionante 📉", color: "#ef4444" }; // Rojo
    if (value <= 6) return { text: "Temporada normal 😐", color: "#f59e0b" }; // Naranja
    if (value <= 8) return { text: "Gran temporada 🚀", color: "#3b82f6" }; // Azul
    return { text: "Nivel Balón de Oro 👑", color: "#10b981" }; // Verde esmeralda
}

function renderPlayers() {
    const container = document.getElementById('players-container');
    container.innerHTML = '';

    players.forEach(player => {
        const savedValue = localStorage.getItem(`futpredi_${player.id}`);
        const currentVal = savedValue !== null ? parseInt(savedValue) : 5;
        const statusClass = savedValue !== null ? "saved" : "pending";
        const statusText = savedValue !== null ? "Guardado" : "Pendiente";
        const rating = getRatingData(currentVal);

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="player-header">
                <div class="player-info">
                    <h3>${player.emoji} ${player.name}</h3>
                    <div class="meta">${player.team} • ${player.position}</div>
                </div>
                <span class="status ${statusClass}" id="status-${player.id}">${statusText}</span>
            </div>
            
            <div class="slider-wrapper">
                <div class="slider-value" id="val-${player.id}" style="color: ${rating.color}">${currentVal}</div>
                <div class="slider-desc" id="desc-${player.id}" style="color: ${rating.color}">${rating.text}</div>
                <input type="range" min="0" max="10" value="${currentVal}" id="slider-${player.id}" 
                       oninput="updateSlider(${player.id})" onchange="markModified(${player.id})">
            </div>

            <div class="actions">
                <button class="btn btn-save" onclick="savePrediction(${player.id})">💾 Guardar</button>
                <button class="btn btn-share" onclick="sharePrediction(${player.id}, '${player.name}')">↗️ Compartir</button>
            </div>
        `;
        container.appendChild(card);
        
        // Colorear el "pulgar" del slider con el color actual
        document.getElementById(`slider-${player.id}`).style.setProperty('--accent', rating.color);
    });
}

function updateSlider(id) {
    const slider = document.getElementById(`slider-${id}`);
    const valDisplay = document.getElementById(`val-${id}`);
    const descDisplay = document.getElementById(`desc-${id}`);
    
    const rating = getRatingData(slider.value);
    
    valDisplay.innerText = slider.value;
    valDisplay.style.color = rating.color;
    descDisplay.innerText = rating.text;
    descDisplay.style.color = rating.color;
    slider.style.setProperty('--accent', rating.color);
}

function markModified(id) {
    const statusBadge = document.getElementById(`status-${id}`);
    statusBadge.className = "status modified";
    statusBadge.innerText = "Sin guardar";
}

// --- 3. GUARDADO Y COMPARTIR ---
function savePrediction(id) {
    const slider = document.getElementById(`slider-${id}`);
    localStorage.setItem(`futpredi_${id}`, slider.value);
    
    const statusBadge = document.getElementById(`status-${id}`);
    statusBadge.className = "status saved";
    statusBadge.innerText = "Guardado";
    
    showToast("Predicción guardada con éxito ✅");
}

async function sharePrediction(id, name) {
    const savedValue = localStorage.getItem(`futpredi_${id}`);
    if (!savedValue) {
        showToast("⚠️ Primero debes guardar la predicción");
        return;
    }

    const text = `En FutPredi creo que ${name} hará una temporada de ${savedValue}/10 🔥. ¿Qué opinas tú?`;
    
    if (navigator.share) {
        try { await navigator.share({ title: 'Mi Predicción', text: text }); } 
        catch (err) { console.log('Cancelado o error', err); }
    } else {
        navigator.clipboard.writeText(text);
        showToast("Texto copiado para compartir 📋");
    }
}

// --- 4. SISTEMA DE NOTIFICACIONES (TOASTS) ---
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    
    container.appendChild(toast);
    
    // Eliminar del DOM después de la animación (3 segundos)
    setTimeout(() => { toast.remove(); }, 3000);
}
