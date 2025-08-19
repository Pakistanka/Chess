const wrapper = document.querySelector('.wrapper');
const table = document.createElement('table');
wrapper.appendChild(table);

const boardSize = 8;
const letters = 'ABCDEFGH'.split('');

// Initial game state
const gameState = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
  ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
];

const pieceIcons = {
  wK: '&#9812;', wQ: '&#9813;', wR: '&#9814;', wB: '&#9815;', wN: '&#9816;', wP: '&#9817;',
  bK: '&#9818;', bQ: '&#9819;', bR: '&#9820;', bB: '&#9821;', bN: '&#9822;', bP: '&#9823;',
};

// Render board
function renderBoard() {
  table.innerHTML = '';

  for (let i = 0; i <= boardSize + 1; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j <= boardSize + 1; j++) {
      const cell = document.createElement('td');

      // Labels
      if ((i === 0 || i === 9) && j > 0 && j < 9) {
        cell.textContent = letters[j - 1];
        cell.classList.add('label');
      } else if ((j === 0 || j === 9) && i > 0 && i < 9) {
        cell.textContent = 9 - i;
        cell.classList.add('label');
      }

      // Playable cells
      if (i > 0 && i < 9 && j > 0 && j < 9) {
        const y = i - 1;
        const x = j - 1;
        const isBlack = (i + j) % 2 === 0;
        cell.classList.add(isBlack ? 'black' : 'white');
        cell.dataset.x = x;
        cell.dataset.y = y;

        // Enable drop target
        cell.addEventListener('dragover', (e) => e.preventDefault());
        cell.addEventListener('drop', (e) => {
          e.preventDefault();
          const fromX = Number(e.dataTransfer.getData('fromX'));
          const fromY = Number(e.dataTransfer.getData('fromY'));
          const toX = Number(cell.dataset.x);
          const toY = Number(cell.dataset.y);
          movePiece(fromX, fromY, toX, toY);
        });

        // Add piece if exists
        const piece = gameState[y][x];
        if (piece) {
          const pieceDiv = document.createElement('div');
          pieceDiv.innerHTML = pieceIcons[piece];
          pieceDiv.classList.add('piece');
          pieceDiv.draggable = true;
          pieceDiv.dataset.x = x;
          pieceDiv.dataset.y = y;

          pieceDiv.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('fromX', e.target.dataset.x);
            e.dataTransfer.setData('fromY', e.target.dataset.y);
          });

          cell.appendChild(pieceDiv);
        }
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

function movePiece(fromX, fromY, toX, toY) {
  const piece = gameState[fromY][fromX];
  if (!piece) return;
  gameState[toY][toX] = piece;
  gameState[fromY][fromX] = null;
  renderBoard();
}

// Initial render
renderBoard();
