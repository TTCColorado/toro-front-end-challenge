import { useState } from 'react'
import Grid from './Grid'
import Status from './Status'
import './tic-tac-toe.css'

function TicTacToe() {
	const [turn, setTurn] = useState('X')
	const [grid, setGrid] = useState(() => Array<string>(9).fill('-'))

	const onReset = () => {
		setGrid(Array<string>(9).fill('-'))
	}

	const onSelect = (i: number) => {
		// Ignore if the tile isn't empty
		if (grid[i] !== '-') {
			return
		}

		const nextGrid = [...grid]
		if (turn === 'X') {
			nextGrid[i] = 'X'
			setTurn('O')
		} else {
			nextGrid[i] = 'O'
			setTurn('X')
		}
		setGrid(nextGrid)
	}

	return (
		<div className="tic-tac-toe">
			<div>
				<Status turn="somebody" onReset={onReset} />
				<Grid grid={grid} onSelect={onSelect} />
			</div>
		</div>
	)
}

export default TicTacToe
