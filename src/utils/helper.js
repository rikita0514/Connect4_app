export const isWinner = (board) => {
  const winLines = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  return winLines.some(([a, b, c, d]) =>
    board[a] !== 0 &&
    board[a] === board[b] &&
    board[b] === board[c] &&
    board[c] === board[d]
  );
};

export const isDraw = (board) => {
  return board.every(cell => cell !== 0);
};

const getRandomComputerMove = (board) => {
  const validMoves = board
    .map((cell, index) => (cell === 0 ? index : null))
    .filter(val => val !== null);

  if (validMoves.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * validMoves.length);
  return validMoves[randomIndex];
};

const getPosition = (board, moveChecks) => {
  for (let check = 0; check < moveChecks.length; check++) {
    for (
      let i = 0;
      i < moveChecks[check].max;
      i += moveChecks[check].step
    ) {
      const series =
        board[i + moveChecks[check].indexes[0]].toString() +
        board[i + moveChecks[check].indexes[1]].toString() +
        board[i + moveChecks[check].indexes[2]].toString() +
        board[i + moveChecks[check].indexes[3]].toString();

      switch (series) {
        case "1110":
        case "2220":
          return i + moveChecks[check].indexes[3];
        case "1101":
        case "2202":
          return i + moveChecks[check].indexes[2];
        case "1011":
        case "2022":
          return i + moveChecks[check].indexes[1];
        case "0111":
        case "0222":
          return i + moveChecks[check].indexes[0];
        default:
      }
    }
  }
  return -1;
};

export const getComputerMoves = (board) => {
  const moveChecks = [
    { indexes: [0, 4, 8, 12], max: 4, step: 1 },
    { indexes: [0, 1, 2, 3], max: 16, step: 4 },
    { indexes: [0, 5, 10, 15], max: 16, step: 16 },
    { indexes: [3, 6, 9, 12], max: 16, step: 16 },
  ];

  const position = getPosition(board, moveChecks);
  if (position > -1) return position;

  return getRandomComputerMove(board);
};
