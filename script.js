// Estructura de datos
const gameState = {
    currentView: 'main-menu',
    currentGame: null,
    games: ['ping pong', 'futbolin', 'sapo', 'argollas'],
    players: [
        { id: 1, name: "Isabella", active: true },
        { id: 2, name: "Nicolás", active: true },
        { id: 3, name: "Mateo", active: true },
        { id: 4, name: "Pablo", active: true },
        { id: 5, name: "Fabiana", active: true },
        { id: 6, name: "Kendra", active: true },
        { id: 7, name: "Eduardo", active: true },
        { id: 8, name: "Rodrigo", active: true },
        { id: 9, name: "Mario Marcelo", active: true },
        { id: 10, name: "María Jesús", active: true },
        { id: 11, name: "Chiqui", active: true },
        { id: 12, name: "Ana Paola", active: true },
        { id: 13, name: "Mauricio", active: true },
        { id: 14, name: "Adolfo", active: true }
    ],
    scores: {
        'ping pong': {
            type: 'matrix',
            data: {
                1: { 2: 0, 3: 0, 4: 0, 8: 0, 9: 1, 10: 1, 11: 0, 12: 0, 13: 1, 14: 1 },
                2: { 1: 1, 3: 1, 4: 0, 6: 1, 7: 1, 8: 0, 9: 0, 10: 1, 11: 0, 12: 1, 13: 1, 14: 1 },
                3: { 1: 1, 2: 0, 4: 0, 6: 1, 7: 1, 8: 0, 9: 1, 10: 1, 11: 0, 12: 1, 13: 1, 14: 1 },
                4: { 1: 1, 2: 1, 3: 1, 5: 0, 6: 0, 7: 1, 9: 1, 11: 0, 14: 1 },
                5: { 4: 1, 14: 1 },
                6: { 2: 0, 3: 0, 4: 1, 7: 1 },
                7: { 2: 0, 3: 0, 4: 0, 6: 0, 11: 0 },
                8: { 1: 1, 2: 1, 3: 1 },
                9: { 1: 0, 2: 1, 3: 0, 4: 0, 11: 0 },
                10: { 1: 0, 2: 0, 3: 0 },
                11: { 1: 1, 2: 1, 3: 1, 4: 1, 7: 1, 9: 1, 12: 1, 14: 1 },
                12: { 1: 1, 2: 0, 3: 0, 11: 0 },
                13: { 1: 0, 2: 0, 3: 0 },
                14: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 11: 0 }
            }
        },
        'futbolin': {
            type: 'matrix',
            data: {
                1: { 2: 0, 3: 1, 4: 0, 7: 0, 9: 0, 10: 1, 11: 0, 12: 1, 14: 1 },
                2: { 1: 1, 3: 1, 4: 0, 7: 1, 9: 0, 10: 1, 11: 0, 13: 0, 14: 1 },
                3: { 1: 0, 2: 0, 4: 1, 7: 1, 10: 1, 11: 1, 14: 1 },
                4: { 1: 1, 2: 1, 3: 0, 5: 1, 6: 1, 7: 1, 10: 1, 11: 0 },
                5: { 4: 0, 6: 1},
                6: { 4: 0, 5: 0 },
                7: { 1: 1, 2: 0, 3: 0, 4: 0, 10: 1, 12: 1, 13: 0 },
                8: { },
                9: { 1: 1, 2: 1, 11: 0 },
                10: { 1: 0, 2: 0, 3: 0, 4: 0, 7: 0, 11: 0 },
                11: { 1: 1, 2: 1, 3: 0, 4: 1, 9: 1, 10: 1 },
                12: { 1: 0, 7: 0 },
                13: { 2: 1, 7: 1},
                14: { 1: 0, 2: 0, 3: 0 }
            }
        },
        'sapo': {
            type: 'shots',
            data: [
                { playerId: 1, shots: [1500, 1900, 2500], total: 5900 },
                { playerId: 2, shots: [1500, 3400, 5700], total: 10600 },
                { playerId: 3, shots: [1400, 3700, 1600], total: 6700 },
                { playerId: 4, shots: [5400, 4700, 2500], total: 12600 },
                { playerId: 5, shots: [3600, 4500, 0], total: 8100 },
                { playerId: 6, shots: [3000, 1500, 1700], total: 6200 },
                { playerId: 7, shots: [5800, 1900, 1000], total: 8700 },
                { playerId: 8, shots: [3400, 2200, 2000], total: 7600 },
                { playerId: 9, shots: [6100, 800, 3000], total: 9900 },
                { playerId: 10, shots: [6500, 2100, 6800], total: 15400 },
                { playerId: 11, shots: [4300, 4100, 3800], total: 12200 },
                { playerId: 12, shots: [3800, 5300, 2900], total: 12000 },
                { playerId: 13, shots: [4300, 5900, 3000], total: 13200 },
                { playerId: 14, shots: [2900, 2200, 1200], total: 6300 }
            ]
        },
        'argollas': {
            type: 'shots2',
            data: [
                { playerId: 1, shots: [] },
                { playerId: 2, shots: [] },
                { playerId: 3, shots: [] },
                { playerId: 4, shots: [2] },
                { playerId: 5, shots: [0] },
                { playerId: 6, shots: [4] },
                { playerId: 7, shots: [4] },
                { playerId: 8, shots: [] },
                { playerId: 9, shots: [] },
                { playerId: 10, shots: [] },
                { playerId: 11, shots: [] },
                { playerId: 12, shots: [] },
                { playerId: 13, shots: [] },
                { playerId: 14, shots: [1] }
            ]
        }
    }
};

// Utilidades
const utils = {
    calculatePlayerStats(playerId) {
        const stats = {
            pingPongWins: 0,
            futbolinWins: 0,
            wins: 0,
            totalScore: 0,
            sapoTScore: 0,
            argollasTScore: 0
        };

        // Calcular estadísticas para Ping Pong
        if (gameState.scores['ping pong']) {
            const pingPongScores = gameState.scores['ping pong'].data[playerId] || {};
            stats.totalGames += Object.keys(pingPongScores).length;
            stats.pingPongWins = Object.values(pingPongScores).filter(score => score === 1).length;
            stats.wins += stats.pingPongWins;
        }
    
        // Calcular estadísticas para Futbolín
        if (gameState.scores['futbolin']) {
            const futbolinScores = gameState.scores['futbolin'].data[playerId] || {};
            stats.totalGames += Object.keys(futbolinScores).length;
            stats.futbolinWins = Object.values(futbolinScores).filter(score => score === 1).length;
            stats.wins += stats.futbolinWins;
        }

        // Calcular estadísticas para Sapo
        if (gameState.scores['sapo']) {
            const sapoScores = gameState.scores['sapo'].data[playerId-1] || {};
            stats.sapoTScore = sapoScores.total;
        }

        // Calcular estadísticas para Argollas
        if (gameState.scores['argollas']) {
            const argollasScores = gameState.scores['argollas'].data[playerId-1] || {};
            stats.argollasTScore = argollasScores.shots;
        }

        return stats;
    },

    getPlayerName(playerId) {
        const player = gameState.players.find(p => p.id === playerId);
        return player ? player.name : 'Desconocido';
    }
};

// Controladores de vista
const viewControllers = {
    showMainMenu() {
        gameState.currentView = 'main-menu';
        gameState.currentGame = null;
        document.getElementById('main-menu').style.display = 'block';
        document.getElementById('game-view').style.display = 'none';
        document.querySelector('header').classList.remove('header-small');
    },

    showGame(game) {
        const gameTitles = {
            'ping pong': 'PING PONG',
            'futbolin': 'FUTBOLÍN',
            'sapo': 'SAPO',
            'argollas': 'ARGOLLAS',
            'jugadores': 'JUGADORES'
        };
    
        const gameTitleElement = document.getElementById('game-title');
        gameTitleElement.textContent = gameTitles[game];
    
        // Remove any existing game title classes
        gameTitleElement.className = 'subtitle game-title-style';
    
        // Add the specific game title class
        gameTitleElement.classList.add(`${game.replace(' ', '-')}-title`);
    
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-view').style.display = 'block';
        document.querySelector('header').classList.add('header-small');
        document.body.classList.remove('no-scroll');
        
        if (game === 'jugadores') {
            this.renderPlayerStats();
        } else {
            this.renderGameTable(game);
        }
    },

    renderPlayerStats() {
        const container = document.getElementById('game-table');
        const statsContainer = document.createElement('div');
        statsContainer.className = 'player-stats';

        // Obtener las posiciones
        const pingPongRankings = this.calculatePingPongRankings();
        const futbolinRankings = this.calculateFutbolinRankings();
        const sapoRankings = this.calculateSapoRankings();
        const argollasRankings = this.calculateArgollasRankings();

        gameState.players.forEach(player => {
            const stats = utils.calculatePlayerStats(player.id);
            const pingPongPosition = pingPongRankings[player.id];
            const futbolinPosition = futbolinRankings[player.id];
            const sapoPosition = sapoRankings[player.id];
            const argollasPosition = argollasRankings[player.id];

            const playerCard = document.createElement('div');
            playerCard.className = 'player-card';
            playerCard.innerHTML = `
                <div class="player-name">${player.name}</div>
                <div class="player-info">
                    <p>Victorias Ping Pong: <span>${stats.pingPongWins} (${pingPongPosition}º)</span></p>
                    <p>Victorias Futbolín: <span>${stats.futbolinWins} (${futbolinPosition}º)</span></p>
                    <p>Puntaje Sapo: <span>${stats.sapoTScore} (${sapoPosition}º)</span></p>
                    <p>Puntaje Argollas: <span>${stats.argollasTScore} (${argollasPosition}º)</span></p>
                </div>
                <div class="player-total">Total: &nbsp;<span> ${60-pingPongPosition-futbolinPosition-sapoPosition-argollasPosition}</span></div>
            `;
            
            statsContainer.appendChild(playerCard);
        });

        container.innerHTML = '';
        container.appendChild(statsContainer);
    },

    calculatePingPongRankings() {
        // Calcular victorias para cada jugador
        const pingPongScores = gameState.players.map(player => {
            const stats = utils.calculatePlayerStats(player.id);
            return {
                playerId: player.id,
                wins: stats.pingPongWins
            };
        });

        // Agrupar jugadores por número de victorias
        const scoreGroups = {};
        pingPongScores.forEach(score => {
            if (!scoreGroups[score.wins]) {
                scoreGroups[score.wins] = [];
            }
            scoreGroups[score.wins].push(score.playerId);
        });

        // Ordenar las victorias de mayor a menor
        const sortedWins = Object.keys(scoreGroups)
            .map(Number)
            .sort((a, b) => b - a);

        // Asignar posiciones
        const rankings = {};
        let currentPosition = 1;

        sortedWins.forEach(wins => {
            // Asignar la misma posición a todos los jugadores con el mismo número de victorias
            scoreGroups[wins].forEach(playerId => {
                rankings[playerId] = currentPosition;
            });
            // La siguiente posición será el siguiente número después del actual
            currentPosition++;
        });

        return rankings;
    },

    calculateFutbolinRankings() {
        // Calcular victorias para cada jugador
        const futbolinScores = gameState.players.map(player => {
            const stats = utils.calculatePlayerStats(player.id);
            return {
                playerId: player.id,
                wins: stats.futbolinWins
            };
        });

        // Agrupar jugadores por número de victorias
        const scoreGroups = {};
        futbolinScores.forEach(score => {
            if (!scoreGroups[score.wins]) {
                scoreGroups[score.wins] = [];
            }
            scoreGroups[score.wins].push(score.playerId);
        });

        // Ordenar las victorias de mayor a menor
        const sortedWins = Object.keys(scoreGroups)
            .map(Number)
            .sort((a, b) => b - a);

        // Asignar posiciones
        const rankings = {};
        let currentPosition = 1;

        sortedWins.forEach(wins => {
            // Asignar la misma posición a todos los jugadores con el mismo número de victorias
            scoreGroups[wins].forEach(playerId => {
                rankings[playerId] = currentPosition;
            });
            // La siguiente posición será el siguiente número después del actual
            currentPosition++;
        });

        return rankings;
    },

    calculateSapoRankings() {
        // Obtener scores de sapo y ordenarlos
        const sapoScores = gameState.scores['sapo'].data
            .map(score => ({
                playerId: score.playerId,
                total: score.total
            }))
            .sort((a, b) => b.total - a.total); // Ordenar de mayor a menor

        // Crear objeto con playerId: posición
        const rankings = {};
        let currentPosition = 1;
        let previousScore = null;
        let samePositionCount = 0;

        sapoScores.forEach((score, index) => {
            // Si el puntaje es igual al anterior, mantener la misma posición
            if (previousScore === score.total) {
                samePositionCount++;
            } else {
                currentPosition = index + 1;
                samePositionCount = 0;
            }
            
            rankings[score.playerId] = currentPosition;
            previousScore = score.total;
        });

        return rankings;
    },

    calculateArgollasRankings() {
        // Calcular victorias para cada jugador
        const argollasScores = gameState.players.map(player => {
            const playerData = gameState.scores['argollas'].data.find(d => d.playerId === player.id);
            return {
                playerId: player.id,
                score: playerData && playerData.shots.length > 0 ? playerData.shots[0] || 0 : 0
            };
        });

        // Agrupar jugadores por puntaje
        const scoreGroups = {};
        argollasScores.forEach(score => {
            if (!scoreGroups[score.score]) {
                scoreGroups[score.score] = [];
            }
            scoreGroups[score.score].push(score.playerId);
        });

        // Ordenar los puntajes de mayor a menor
        const sortedScores = Object.keys(scoreGroups)
            .map(Number)
            .sort((a, b) => b - a);

        // Asignar posiciones
        const rankings = {};
        let currentPosition = 1;

        sortedScores.forEach(score => {
            // Asignar la misma posición a todos los jugadores con el mismo puntaje
            scoreGroups[score].forEach(playerId => {
                rankings[playerId] = currentPosition;
            });
            // La siguiente posición será el siguiente número después del actual
            currentPosition++;
        });

        return rankings;
    },

    renderGameTable(gameName) {
        const container = document.getElementById('game-table');
        const table = document.createElement('table');

        if (gameName === 'argollas') {
            table.classList.add('argollas-table');
        }
        
        // Crear encabezados
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        if (gameState.scores[gameName].type === 'matrix') {
            headerRow.innerHTML = `
                <th>JUGADORES</th>
                ${gameState.players.map(p => `<th>${p.id}</th>`).join('')}
                <th>TOTAL</th>
            `;
        } else if (gameState.scores[gameName].type === 'shots') {
            headerRow.innerHTML = `
                <th>JUGADORES</th>
                <th>TIRO 1</th>
                <th>TIRO 2</th>
                <th>TIRO 3</th>
                <th>TOTAL</th>
            `;
        } else {
            headerRow.innerHTML = `
                <th>JUGADORES</th>
                <th>TIRO</th>
            `;
        }
        
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Crear cuerpo de la tabla
        const tbody = document.createElement('tbody');
        
        if (gameState.scores[gameName].type === 'matrix') {
            gameState.players.forEach((player, playerIndex) => {
                const row = document.createElement('tr');
                const playerScores = gameState.scores[gameName].data[player.id] || {};
                
                let total = 0;
                const scoreCells = gameState.players.map((opponent, opponentIndex) => {
                    const score = playerScores[opponent.id];
                    if (score === 1 || score === 0) total += score;
                    
                    const displayScore = (score === 0 || score === 1) ? score : '';
                    
                    // Agregar clase diagonal cuando el jugador y oponente son el mismo
                    const isDiagonal = playerIndex === opponentIndex;
                    
                    return `<td class="score-cell ${score === 1 ? 'win' : score === 0 ? 'loss' : ''} ${isDiagonal ? 'diagonal' : ''}">${displayScore}</td>`;
                }).join('');
                
                row.innerHTML = `
                    <td>${playerIndex + 1}. ${player.name}</td>
                    ${scoreCells}
                    <td class="score-cell total">${total}</td>
                `;
                tbody.appendChild(row);
            });
        } else if (gameState.scores[gameName].type === 'shots') {
            gameState.scores[gameName].data.forEach(score => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${utils.getPlayerName(score.playerId)}</td>
                    <td class="score-cell">${score.shots[0]}</td>
                    <td class="score-cell">${score.shots[1]}</td>
                    <td class="score-cell">${score.shots[2]}</td>
                    <td class="score-cell">${score.total}</td>
                `;
                tbody.appendChild(row);
            });
        } else {
            gameState.scores[gameName].data.forEach(score => {
                const row = document.createElement('tr');
                
                if (score.shots) {
                    row.innerHTML = `
                    <td>${utils.getPlayerName(score.playerId)}</td>
                    <td class="score-cell">${score.shots[0] || ''}</td>
                `;
                } else {
                    row.innerHTML = `
                    <td>${utils.getPlayerName(score.playerId)}</td>
                    <td class="score-cell"></td>
                `;
                }

                tbody.appendChild(row);
            });
        }
        
        table.appendChild(tbody);
        container.innerHTML = '';
        container.appendChild(table);
    }
};

// Event listeners y inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar los datos de matriz para ping-pong y futbolín
    ['ping pong', 'futbolin'].forEach(game => {
        if (!gameState.scores[game].data) {
            gameState.scores[game].data = {};
        }
        
        gameState.players.forEach(player => {
            if (!gameState.scores[game].data[player.id]) {
                gameState.scores[game].data[player.id] = {};
            }
            
            // Asegurarse de que cada jugador tenga una entrada para todos los demás jugadores
            gameState.players.forEach(opponent => {
                if (player.id !== opponent.id && gameState.scores[game].data[player.id][opponent.id] === undefined) {
                    gameState.scores[game].data[player.id][opponent.id] = '-';
                }
            });
        });
    });

    // Vincular funciones a window para uso en HTML
    window.showGame = gameName => viewControllers.showGame(gameName);
    window.showMainMenu = () => viewControllers.showMainMenu();
});
