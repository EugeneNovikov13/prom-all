import styled from 'styled-components';

const CounterContainer = ({ className, counter, onCounterChange }) => {
	return (
		<div className={className}>
			<div className="counter-container">
				<span className="counter-signs" onClick={() => onCounterChange(-1)}>
					&minus;
				</span>
				<span className="counter-value">{counter}</span>
				<span className="counter-signs" onClick={() => onCounterChange(1)}>
					+
				</span>
			</div>
		</div>
	);
};

export const Counter = styled(CounterContainer)`
	width: 144px;
	height: 48px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 100px;
	border: 2px solid var(--dark);

	@media (max-width: 450px) {
		align-self: end;
	}

	&:hover {
		border: 2px solid var(--brand-orange);
	}

	& div.counter-container {
		width: 147px;
		flex: 1 0 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 16px;

		& span {
			color: var(--dark);
			text-align: center;
			font-family: Inter, sans-serif;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 20px;
			letter-spacing: 0.1px;
			user-select: none;
		}

		& span.counter-signs {
			transform: scale(1.5);
			cursor: pointer;

			&:hover {
				color: var(--brand-orange);
			}
		}

		& span.counter-value {
			transform: translateY(1px);
		}
	}
`;
