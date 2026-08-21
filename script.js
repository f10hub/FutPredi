const players = [
    { id: 1, name: "Kylian Mbappé", team: "Real Madrid", position: "DEL", emoji: "⚡" },
    { id: 2, name: "Lamine Yamal", team: "FC Barcelona", position: "EXT", emoji: "💎" },
    { id: 3, name: "Erling Haaland", team: "Manchester City", position: "DEL", emoji: "🤖" }
];

const scoring = {
    exactScore: 5,
    goalDifference: 2,
    scorers: 7
};

// js/app.js
document.addEventListener('DOMContentLoaded', () => {
    renderPlayers();
});

function getRatingDescription(value) {
    if (value <= 3) return "Temporada pésima 📉";
    if (value <= 6) return "Temporada normal 😐";
    if (value <= 8) return "Muy buena temporada 🚀";
    return "Temporada excepcional 🌟";
}

function renderPlayers() {
    const container = document.getElementById('players-container');
    container.innerHTML = '';

    players.forEach(player => {
        // Recuperar predicción guardada si existe
        const savedValue = localStorage.getItem(`pred_season_${player.id}`);
        const currentValue = savedValue !== null ? savedValue : 5;
        const statusText = savedValue !== null ? "Guardado ✅" : "Pendiente ⏳";

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="player-header">
                <div class="player-info">
                    <h3>${player.emoji} ${player.name}</h3>
                    <p class="meta">${player.team} • ${player.position}</p>
                </div>
                <span class="status-badge" id="status-${player.id}">${statusText}</span>
            </div>
            
            <div class="prediction-area">
                <label>¿Qué temporada crees que hará?</label>
                <div class="slider-container">
                    <input type="range" min="0" max="10" value="${currentValue}" class="slider" id="slider-${player.id}" oninput="updateSliderUI(${player.id})">
                    <div class="slider-value" id="val-${player.id}">${currentValue}/10</div>
                </div>
                <p class="description" id="desc-${player.id}">${getRatingDescription(currentValue)}</p>
            </div>

            <div class="actions">
                <button class="btn btn-primary" onclick="savePrediction(${player.id}, '${player.name}')">Guardar</button>
                <button class="btn btn-secondary" onclick="sharePrediction('${player.name}', ${player.id})">Compartir</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function updateSliderUI(id) {
    const slider = document.getElementById(`slider-${id}`);
    const valDisplay = document.getElementById(`val-${id}`);
    const descDisplay = document.getElementById(`desc-${id}`);
    
    valDisplay.innerText = `${slider.value}/10`;
    descDisplay.innerText = getRatingDescription(slider.value);
    
    // Cambiar estado a pendiente al modificar
    const statusBadge = document.getElementById(`status-${id}`);
    statusBadge.innerText = "Modificado 🔄";
    statusBadge.style.background = "#fef3c7";
    statusBadge.style.color = "#d97706";
}

function savePrediction(id, name) {
    const slider = document.getElementById(`slider-${id}`);
    localStorage.setItem(`pred_season_${id}`, slider.value);
    
    const statusBadge = document.getElementById(`status-${id}`);
    statusBadge.innerText = "Guardado ✅";
    statusBadge.style.background = "#dcfce7";
    statusBadge.style.color = "#166534";
}

async function sharePrediction(name, id) {
    const savedValue = localStorage.getItem(`pred_season_${id}`);
    if (!savedValue) {
        alert("¡Guarda tu predicción primero!");
        return;
    }

    const text = `Creo que ${name} hará una temporada ${savedValue}/10 🔥 en FutbolPredictions. ¿Tú qué opinas?`;
    
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Mi Predicción',
                text: text
            });
        } catch (err) {
            console.log('Error compartiendo', err);
        }
    } else {
        navigator.clipboard.writeText(text);
        alert("¡Copiado al portapapeles! 📋");
    }
}
