import { useState } from "react";
import Square from "./Square";

export default function gameBoard() {
  const [boardPieces, setBoardPieces] = useState(Array(64).fill(null));
  const [highlightedSquare, setHighlightedSquare] = useState(
    Array(64).fill(false)
  );
  const [stagedPiece, setStagedPiece] = useState(null);
  const [formerLocation, setFormerLocation] = useState(null);
  const [playerTurn, setPlayerTurn] = useState("white");

  const whitePawn = {
    pieceType: "white pawn",
    pieceName: "p",
    pieceColor: "white",
    firstMove: true,
    movePool: [],
  };

  const blackPawn = {
    pieceType: "black pawn",
    pieceName: "p",
    pieceColor: "black",
    firstMove: true,
    movePool: [],
  };

  function canMove(i) {
    const currentPiece = boardPieces[i];
    return currentPiece?.pieceColor === playerTurn;
  }

  function setOtherPlayer() {
    if (playerTurn === "white") {
      return "black";
    }
    return "white";
  }

  function isLegealMove(i) {
    const currentPiece = stagedPiece.pieceType;
    const nextPosition = i;
    console.log("legal move", formerLocation + 8);
    console.log("move attempt", nextPosition);
    console.log(currentPiece);
    console.log(currentPiece === "pawn");
    if (currentPiece === "white pawn") {
      return formerLocation + 8 === nextPosition;
    } else if (currentPiece === "black pawn") {
      return formerLocation - 8 === nextPosition;
    }
  }

  function handleMovePiece(i) {
    if (boardPieces[i] && canMove(i)) {
      setStagedPiece(boardPieces[i]);
      setFormerLocation(i);
    } else if (stagedPiece && !boardPieces[i] && isLegealMove(i)) {
      boardPieces[i] = stagedPiece;
      boardPieces[formerLocation] = null;
      setBoardPieces([...boardPieces]);
      setStagedPiece(null);
      setPlayerTurn(setOtherPlayer());
    }
  }

  function initBoard() {
    boardPieces[0] = whitePawn;
    boardPieces[63] = blackPawn;
    setBoardPieces([...boardPieces]);
  }

  // TODO: use Map or some iteration return Squares to make the board
  return (
    <>
      <div>
        <button onClick={initBoard}>Set Pieces</button>
      </div>
      <div>
        <h2>Player turn: {playerTurn}</h2>
      </div>
      <div className="board-row">
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(0)}
          chessPiece={boardPieces[0]}
          highlightedMoved={highlightedSquare[0]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(1)}
          chessPiece={boardPieces[1]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(2)}
          chessPiece={boardPieces[2]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(3)}
          chessPiece={boardPieces[3]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(4)}
          chessPiece={boardPieces[4]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(5)}
          chessPiece={boardPieces[5]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(6)}
          chessPiece={boardPieces[6]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(7)}
          chessPiece={boardPieces[7]}
        />
      </div>
      <div className="board-row">
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(8)}
          chessPiece={boardPieces[8]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(9)}
          chessPiece={boardPieces[9]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(10)}
          chessPiece={boardPieces[10]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(11)}
          chessPiece={boardPieces[11]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(12)}
          chessPiece={boardPieces[12]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(13)}
          chessPiece={boardPieces[13]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(14)}
          chessPiece={boardPieces[14]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(15)}
          chessPiece={boardPieces[15]}
        />
      </div>
      <div className="board-row">
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(16)}
          chessPiece={boardPieces[16]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(17)}
          chessPiece={boardPieces[17]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(18)}
          chessPiece={boardPieces[18]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(19)}
          chessPiece={boardPieces[19]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(20)}
          chessPiece={boardPieces[20]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(21)}
          chessPiece={boardPieces[21]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(22)}
          chessPiece={boardPieces[22]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(23)}
          chessPiece={boardPieces[23]}
        />
      </div>
      <div className="board-row">
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(24)}
          chessPiece={boardPieces[24]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(25)}
          chessPiece={boardPieces[25]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(26)}
          chessPiece={boardPieces[26]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(27)}
          chessPiece={boardPieces[27]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(28)}
          chessPiece={boardPieces[28]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(29)}
          chessPiece={boardPieces[29]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(30)}
          chessPiece={boardPieces[30]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(31)}
          chessPiece={boardPieces[31]}
        />
      </div>
      <div className="board-row">
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(32)}
          chessPiece={boardPieces[32]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(33)}
          chessPiece={boardPieces[33]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(34)}
          chessPiece={boardPieces[34]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(35)}
          chessPiece={boardPieces[35]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(36)}
          chessPiece={boardPieces[36]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(37)}
          chessPiece={boardPieces[37]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(38)}
          chessPiece={boardPieces[38]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(39)}
          chessPiece={boardPieces[39]}
        />
      </div>
      <div className="board-row">
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(40)}
          chessPiece={boardPieces[40]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(41)}
          chessPiece={boardPieces[41]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(42)}
          chessPiece={boardPieces[42]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(43)}
          chessPiece={boardPieces[43]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(44)}
          chessPiece={boardPieces[44]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(45)}
          chessPiece={boardPieces[45]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(46)}
          chessPiece={boardPieces[46]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(47)}
          chessPiece={boardPieces[47]}
        />
      </div>
      <div className="board-row">
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(48)}
          chessPiece={boardPieces[48]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(49)}
          chessPiece={boardPieces[49]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(50)}
          chessPiece={boardPieces[50]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(51)}
          chessPiece={boardPieces[51]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(52)}
          chessPiece={boardPieces[52]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(53)}
          chessPiece={boardPieces[53]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(54)}
          chessPiece={boardPieces[54]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(55)}
          chessPiece={boardPieces[55]}
        />
      </div>
      <div className="board-row">
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(56)}
          chessPiece={boardPieces[56]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(57)}
          chessPiece={boardPieces[57]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(58)}
          chessPiece={boardPieces[58]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(59)}
          chessPiece={boardPieces[59]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(60)}
          chessPiece={boardPieces[60]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(61)}
          chessPiece={boardPieces[61]}
        />
        <Square
          className="black-square"
          onPieceClick={() => handleMovePiece(62)}
          chessPiece={boardPieces[62]}
        />
        <Square
          className="white-square"
          onPieceClick={() => handleMovePiece(63)}
          chessPiece={boardPieces[63]}
        />
      </div>
    </>
  );
}
