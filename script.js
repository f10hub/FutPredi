// --- 1. BASE DE DATOS (DATA) ---
const teams = ["Real Madrid CF", "FC Barcelona", "RCD Espanyol", "Manchester City", "PSG", "Bayern Múnich"];

const players = [
    // --- REAL MADRID CF ---
    { id: 1, name: "Courtois", team: "Real Madrid CF" },
    { id: 2, name: "Lunin", team: "Real Madrid CF" },
    { id: 3, name: "Militao", team: "Real Madrid CF" },
    { id: 4, name: "Konate", team: "Real Madrid CF" },
    { id: 5, name: "Rudiger", team: "Real Madrid CF" },
    { id: 6, name: "Fran Garcia", team: "Real Madrid CF" },
    { id: 7, name: "Mendy", team: "Real Madrid CF" },
    { id: 8, name: "Cucurella", team: "Real Madrid CF" },
    { id: 9, name: "Alexander-Arnold", team: "Real Madrid CF" },
    { id: 10, name: "Huijsen", team: "Real Madrid CF" },
    { id: 11, name: "Asencio", team: "Real Madrid CF" },
    { id: 12, name: "Carreras", team: "Real Madrid CF" },
    { id: 13, name: "Bellingham", team: "Real Madrid CF" },
    { id: 14, name: "Camavinga", team: "Real Madrid CF" },
    { id: 15, name: "Valverde", team: "Real Madrid CF" },
    { id: 16, name: "Thiago Pitarch", team: "Real Madrid CF" },
    { id: 17, name: "Tchouameni", team: "Real Madrid CF" },
    { id: 18, name: "Arda Guler", team: "Real Madrid CF" },
    { id: 19, name: "Bernardo Silva", team: "Real Madrid CF" },
    { id: 20, name: "Mastantuono", team: "Real Madrid CF" },
    { id: 21, name: "Vinicius", team: "Real Madrid CF" },
    { id: 22, name: "Mbappe", team: "Real Madrid CF" },
    { id: 23, name: "Rodrygo", team: "Real Madrid CF" },
    { id: 24, name: "Brahim Diaz", team: "Real Madrid CF" },
    { id: 25, name: "Endrick", team: "Real Madrid CF" },
    { id: 26, name: "Gonzalo Garcia", team: "Real Madrid CF" },

    // --- FC BARCELONA ---
    { id: 27, name: "Joan Garcia", team: "FC Barcelona" },
    { id: 28, name: "Ter Stegen", team: "FC Barcelona" },
    { id: 29, name: "Szczesny", team: "FC Barcelona" },
    { id: 30, name: "Cubarsi", team: "FC Barcelona" },
    { id: 31, name: "Eric Garcia", team: "FC Barcelona" },
    { id: 32, name: "Araujo", team: "FC Barcelona" },
    { id: 33, name: "Christensen", team: "FC Barcelona" },
    { id: 34, name: "Balde", team: "FC Barcelona" },
    { id: 35, name: "Gerard Martin", team: "FC Barcelona" },
    { id: 36, name: "Kounde", team: "FC Barcelona" },
    { id: 37, name: "Joao Cancelo", team: "FC Barcelona" },
    { id: 38, name: "Hector Fort", team: "FC Barcelona" },
    { id: 39, name: "Marc Bernal", team: "FC Barcelona" },
    { id: 40, name: "Casado", team: "FC Barcelona" },
    { id: 41, name: "Pedri", team: "FC Barcelona" },
    { id: 42, name: "De Jong", team: "FC Barcelona" },
    { id: 43, name: "Gavi", team: "FC Barcelona" },
    { id: 44, name: "Fermin Lopez", team: "FC Barcelona" },
    { id: 45, name: "Dani Olmo", team: "FC Barcelona" },
    { id: 46, name: "Raphinha", team: "FC Barcelona" },
    { id: 47, name: "Lamine Yamal", team: "FC Barcelona" },
    { id: 48, name: "Bardghji", team: "FC Barcelona" },
    { id: 49, name: "Anthony Gordon", team: "FC Barcelona" },
    { id: 50, name: "Ferran Torres", team: "FC Barcelona" },

    // --- ATLÉTICO DE MADRID ---
    { id: 51, name: "Oblak", team: "Atlético de Madrid" },
    { id: 52, name: "Musso", team: "Atlético de Madrid" },
    { id: 53, name: "Hancko", team: "Atlético de Madrid" },
    { id: 54, name: "Pubill", team: "Atlético de Madrid" },
    { id: 55, name: "Le Normand", team: "Atlético de Madrid" },
    { id: 56, name: "Gimenez", team: "Atlético de Madrid" },
    { id: 57, name: "Ruggeri", team: "Atlético de Madrid" },
    { id: 58, name: "Grimaldo", team: "Atlético de Madrid" },
    { id: 59, name: "Marcos Llorente", team: "Atlético de Madrid" },
    { id: 60, name: "Nahuel Molina", team: "Atlético de Madrid" },
    { id: 61, name: "Pablo Barrios", team: "Atlético de Madrid" },
    { id: 62, name: "Johnny Cardoso", team: "Atlético de Madrid" },
    { id: 63, name: "Koke", team: "Atlético de Madrid" },
    { id: 64, name: "Obed Vargas", team: "Atlético de Madrid" },
    { id: 65, name: "Rodri Mendoza", team: "Atlético de Madrid" },
    { id: 66, name: "Alex Baena", team: "Atlético de Madrid" },
    { id: 67, name: "Nico Gonzalez", team: "Atlético de Madrid" },
    { id: 68, name: "Thiago Almada", team: "Atlético de Madrid" },
    { id: 69, name: "Giuliano Simeone", team: "Atlético de Madrid" },
    { id: 70, name: "Lookman", team: "Atlético de Madrid" },
    { id: 71, name: "Julian Alvarez", team: "Atlético de Madrid" },
    { id: 72, name: "Sorloth", team: "Atlético de Madrid" }
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
    { name: "lacacipzz", points: 1450 },
    { name: "Mario", points: 1230 },
    { name: "Pablo Gómez", points: 1560 },
    { name: "Teclas", points: 890 }
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
