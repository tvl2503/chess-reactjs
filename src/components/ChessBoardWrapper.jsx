import React, { useEffect } from 'react'
import { Chessboard } from "react-chessboard" 

const ChessBoardWrapper = ({  fen, handlePieceDrop,}) => {
	return (
		<div className="chess-board-wrapper">
			<Chessboard 
				id="BasicBoard" 
				position={fen}
				onPieceDrop={handlePieceDrop} //either true or false is returned
				showBoardNotation={true}
				animationDuration={0}
				areArrowsAllowed={true}
			/>
		</div>
	)
}

export default React.memo(ChessBoardWrapper)