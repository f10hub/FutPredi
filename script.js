// --- 1. BASE DE DATOS (DATA) ---
const teams = ["Real Madrid CF", "FC Barcelona", "RCD Espanyol", "Manchester City", "PSG", "Bayern Múnich"];

const players = [
    { id: 1, name: "Kylian Mbappé", team: "Real Madrid CF", pos: "DEL" },
    { id: 2, name: "Vinícius Jr", team: "Real Madrid CF", pos: "EXT" },
    { id: 3, name: "Jude Bellingham", team: "Real Madrid CF", pos: "MED" },
    { id: 4, name: "Lamine Yamal", team: "FC Barcelona", pos: "EXT" },
    { id: 5, name: "Javi Puado", team: "RCD Espanyol", pos: "DEL" },
    { id: 6, name: "Jofre Carreras", team: "RCD Espanyol", pos: "EXT" },
    { id: 7, name: "Erling Haaland", team: "Manchester City", pos: "DEL" }
];

const matches = [
    { id: "m1", home: "RCD Espanyol", away: "Real Madrid CF", date: "22/08/2026" },
    { id: "m2", home: "FC Barcelona", away: "Bayern Múnich", date: "25/09/2026" }
];

const competitions = [
    { id: "laliga", name: "LaLiga (España)" },
    { id: "premier", name: "Premier League (Inglaterra)" },
    { id: "ligue1", name: "Ligue 1 (Francia)" },
    { id: "bundesliga", name: "Bundesliga (Alemania)" },
    { id: "seriea", name: "Serie A (Italia)" },
    { id: "ucl", name: "Champions League (UCL)" }
];

const friends = [
    { name: "Juan (Tú)", points: 1450 },
    { name: "Carlos99", points: 1230 },
    { name: "Marta_Ftbl", points: 1560 },
    { name: "AlexPro", points: 890 }
];


// --- 2. NAVEGACIÓN SPA ---
// --- 2. NAVEGACIÓN SPA ---
function openView(viewId) {
    // 1. Ocultamos todas las vistas
    document.querySelectorAll('.view').forEach(v => {
        v.classList.remove('active');
        v.classList.add('hidden');
    });
    
    // 2. Mostramos la vista seleccionada
    const targetView = document.getElementById(viewId);
    targetView.classList.remove('hidden');
    targetView.classList.add('active');
    
    // 3. Gestionamos el botón de volver al menú
    const btnBack = document.getElementById('btn-back');
    if (viewId === 'view-home') {
        btnBack.classList.add('hidden');
    } else {
        btnBack.classList.remove('hidden');
    }

    // 4. Cargamos los datos solo si entramos a esa vista
    if (viewId === 'view-match') initMatches();
    if (viewId === 'view-ratings') initRatings();
    if (viewId === 'view-leagues') initLeagues();
    if (viewId === 'view-leaderboard') renderLeaderboard();
}

// Función exclusiva para el botón de volver
function goHome() {
    openView('view-home');
}

// --- 3. MODO 1: PARTIDOS ---
function initMatches() {
    const select = document.getElementById('match-selector');
    select.innerHTML = '<option value="">-- Selecciona un partido --</option>';
    matches.forEach(m => {
        select.innerHTML += `<option value="${m.id}">${m.home} vs ${m.away} (${m.date})</option>`;
    });
}

function loadMatchData() {
    const matchId = document.getElementById('match-selector').value;
    if (!matchId) return;
    
    const match = matches.find(m => m.id === matchId);
    document.getElementById('match-home').innerText = match.home;
    document.getElementById('match-away').innerText = match.away;
    document.getElementById('score-home').value = '';
    document.getElementById('score-away').value = '';
    document.getElementById('goal-diff').innerText = '-';

    // Filtrar jugadores de esos equipos
    const matchPlayers = players.filter(p => p.team === match.home || p.team === match.away);
    const scorersSelect = document.getElementById('match-scorers');
    const assistersSelect = document.getElementById('match-assisters');
    
    let options = '';
    matchPlayers.forEach(p => options += `<option value="${p.id}">${p.name} (${p.team})</option>`);
    scorersSelect.innerHTML = options;
    assistersSelect.innerHTML = options;
}

function calcDifference() {
    const home = parseInt(document.getElementById('score-home').value);
    const away = parseInt(document.getElementById('score-away').value);
    const diffBox = document.getElementById('goal-diff');
    
    if (!isNaN(home) && !isNaN(away)) {
        const diff = Math.abs(home - away);
        if (home === away) diffBox.innerText = "Empate (0)";
        else diffBox.innerText = diff + (home > away ? ` a favor de Local` : ` a favor de Visitante`);
    }
}

function saveMatch() {
    showToast("Predicción del partido guardada ✅");
}

function shareMatch() {
    const match = document.getElementById('match-selector').options[document.getElementById('match-selector').selectedIndex].text;
    const h = document.getElementById('score-home').value;
    const a = document.getElementById('score-away').value;
    if(!h || !a) return showToast("⚠️ Pon un resultado primero");
    
    copyToClip(`Predicción FutPredi ⚽\n${match}\nResultado: ${h} - ${a}\n¡Supera mi predicción!`);
}

// --- 4. MODO 2: RATINGS ---
function initRatings() {
    const select = document.getElementById('team-filter');
    select.innerHTML = '<option value="all">Todos los equipos</option>';
    teams.forEach(t => select.innerHTML += `<option value="${t}">${t}</option>`);
    renderPlayers();
}

function renderPlayers() {
    const teamFilter = document.getElementById('team-filter').value;
    const container = document.getElementById('players-container');
    container.innerHTML = '';

    const filtered = teamFilter === 'all' ? players : players.filter(p => p.team === teamFilter);

    filtered.forEach(player => {
        const currentVal = localStorage.getItem(`futpredi_r_${player.id}`) || 5;
        container.innerHTML += `
            <div class="card">
                <div class="player-header">
                    <div class="player-info">
                        <h3>${player.name}</h3>
                        <div class="meta">${player.team}</div>
                    </div>
                </div>
                <div class="slider-wrapper">
                    <div class="slider-value" id="val-${player.id}">${currentVal}</div>
                    <input type="range" min="0" max="10" value="${currentVal}" id="slider-${player.id}" oninput="updateSlider(${player.id})">
                </div>
                <button class="btn btn-save" onclick="saveRating(${player.id})">Guardar</button>
            </div>
        `;
    });
}

function updateSlider(id) {
    document.getElementById(`val-${id}`).innerText = document.getElementById(`slider-${id}`).value;
}
function saveRating(id) {
    localStorage.setItem(`futpredi_r_${id}`, document.getElementById(`slider-${id}`).value);
    showToast("Valoración guardada ✅");
}

// --- 5. MODO 3: LIGAS Y PREMIOS ---
function initLeagues() {
    const container = document.getElementById('leagues-container');
    if (container.innerHTML !== '') return; // Ya generado

    let html = '';
    competitions.forEach(comp => {
        html += `
        <div class="card">
            <h3 style="margin-bottom: 15px;">${comp.name}</h3>
            <div class="form-group">
                <label>Ganador de la competición</label>
                <select class="input-modern"><option>Seleccionar equipo...</option>${teams.map(t=>`<option>${t}</option>`).join('')}</select>
            </div>
            <div class="form-group">
                <label>Máximo Goleador (Pichichi)</label>
                <select class="input-modern"><option>Seleccionar jugador...</option>${players.map(p=>`<option>${p.name}</option>`).join('')}</select>
            </div>
        </div>`;
    });

    // Balón de Oro (Extra)
    html += `
    <div class="card" style="border-color: #fbbf24; background: #fffbeb;">
        <h3 style="margin-bottom: 15px;">🌟 Próximo Balón de Oro</h3>
        <select class="input-modern"><option>Seleccionar jugador...</option>${players.map(p=>`<option>${p.name}</option>`).join('')}</select>
    </div>`;

    container.innerHTML = html;
}

function saveLeagues() {
    showToast("Predicciones de temporada guardadas 🏆");
}

// --- 6. MODO 4: CLASIFICACIÓN (LEADERBOARD) ---
function renderLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    // Ordenar por puntos
    const sorted = [...friends].sort((a, b) => b.points - a.points);
    
    let html = '';
    sorted.forEach((f, index) => {
        let rankIcon = index + 1;
        if (index === 0) rankIcon = '🥇';
        if (index === 1) rankIcon = '🥈';
        if (index === 2) rankIcon = '🥉';

        html += `
            <div class="leaderboard-row">
                <div class="rank">${rankIcon}</div>
                <div class="lb-name">${f.name}</div>
                <div class="lb-points">${f.points} pts</div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --- 7. UTILIDADES ---
function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3000);
}

function copyToClip(text) {
    if (navigator.share) {
        navigator.share({ title: 'FutPredi', text: text }).catch(e => console.log(e));
    } else {
        navigator.clipboard.writeText(text);
        showToast("Texto copiado al portapapeles 📋");
    }
}
