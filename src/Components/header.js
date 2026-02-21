import React from "react";
import {
  GAME_STATE_DRAW,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
} from "../Constants";

const Header = ({ gameState, currentPlayer, winPlayer }) => {
  let message = "";

  switch (gameState) {
    case GAME_STATE_PLAYING:
      message = `Player ${currentPlayer}'s Turn`;
      break;

    case GAME_STATE_WIN:
      message = `Player ${winPlayer} Wins!`;
      break;

    case GAME_STATE_DRAW:
      message = "Game is a Draw!";
      break;

    default:
      message = "";
  }

  return (
    <div className="panel header">
      <div className="header_text">{message}</div>
    </div>
  );
};

export default Header;
