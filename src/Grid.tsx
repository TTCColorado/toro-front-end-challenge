import './grid.css'

interface IProps {
	grid: string[]

	onSelect(i: number): void
}

function Grid(props: IProps) {
	return (
		<div className="grid">
			{props.grid.map((tile, i) => {
				const isUsed = tile !== '-'

				return (
					<div key={i} className={`tile ${isUsed ? 'tile-used' : ''}`} onClick={() => props.onSelect(i)}>
						<span className="label">{tile}</span>
					</div>
				)
			})}
		</div>
	)
}

export default Grid
