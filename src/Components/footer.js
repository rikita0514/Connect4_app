import React from "react";
import { GAME_STATE_PLAYING } from "../Constants";

const Footer = ({ onNewGameClick, onSuggestClick, gameState }) => {
  const isPlaying = gameState === GAME_STATE_PLAYING;

  return (
    <div className="panel footer">
      {isPlaying ? (
        <button type="button" onClick={onSuggestClick}>
          Suggest
        </button>
      ) : (
        <button type="button" onClick={onNewGameClick}>
          New Game
        </button>
      )}
    </div>
  );
};

export default Footer;
