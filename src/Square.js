import { useState } from "react";

export default function Square({className, onPieceClick, chessPiece = ""}) {
    return (
        <button className={className} onClick={onPieceClick}>
            <div className={chessPiece?.pieceColor === "white" ? "white-piece" : "black-piece"}>
                {chessPiece?.pieceName}
            </div>
        </button>
    );
}
