import React, { useState } from "react";

import "../styles/game.css";

import Header from "./header";
import Footer from "./footer";
import GameCircle from "./GameCircle";

import { isDraw, isWinner, getComputerMoves } from "../utils/helper";

import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  NO_CIRCLES,
} from "../Constants";

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(
    Array(NO_CIRCLES).fill(NO_PLAYER)
  );
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(NO_PLAYER);
  const [score, setScore] = useState({ player1: 0, player2: 0 });

  const initGame = () => {
    setGameBoard(Array(NO_CIRCLES).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_1);
    setGameState(GAME_STATE_PLAYING);
    setWinPlayer(NO_PLAYER);
  };

  const circleClicked = (id) => {
    if (gameBoard[id] !== NO_PLAYER) return;
    if (gameState !== GAME_STATE_PLAYING) return;

    // Create updated board
    const newBoard = gameBoard.map((circle, pos) =>
      pos === id ? currentPlayer : circle
    );

    setGameBoard(newBoard);

    // Check winner
    if (isWinner(newBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);

      setScore((prev) =>
        currentPlayer === PLAYER_1
          ? { ...prev, player1: prev.player1 + 1 }
          : { ...prev, player2: prev.player2 + 1 }
      );

      return;
    }

    // Check draw
    if (isDraw(newBoard)) {
      setGameState(GAME_STATE_DRAW);
      return;
    }

    // Switch player
    setCurrentPlayer(
      currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1
    );
  };

  const suggestMove = () => {
    const suggestedMove = getComputerMoves(gameBoard);
    if (suggestedMove !== null && suggestedMove !== undefined) {
      circleClicked(suggestedMove);
    }
  };

  const renderCircle = (id) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  return (
    <>
      <Header
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />

      <div className="scoreBoard">
        <h3>Player 1: {score.player1}</h3>
        <h3>Player 2: {score.player2}</h3>
      </div>

      <div className="gameBoard">{initBoard()}</div>

      <Footer
        onNewGameClick={initGame}
        onSuggestClick={suggestMove}
        gameState={gameState}
      />
    </>
  );
};

export default GameBoard;
