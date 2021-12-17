import './status.css'

interface IProps {
	turn: string

	onReset(): void
}

function Status(props: IProps) {
	return (
		<div className="status">
			<div className="turn">
				<b>{props.turn}</b>'s turn
			</div>
			<div className="divider" />
			<button onClick={props.onReset}>Reset</button>
		</div>
	)
}

export default Status
