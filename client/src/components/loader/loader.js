import styled from 'styled-components';

const LoaderContainer = ({ className }) => {
	return (
		<div className={className}>
			<svg viewBox="-2000 -1000 4000 2000">
				<path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
				<use xlinkHref="#inf" strokeDasharray="1570 5143" strokeDashoffset="6713px"></use>
			</svg>
		</div>
	);
};

export const Loader = styled(LoaderContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 10000;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.5);
	transition: all 0.5s;
	opacity: 1;

	& svg {
		max-width: 200px;
		border-radius: 3px;
		fill: none;
		stroke: var(--brand-blue);
		stroke-linecap: round;
		stroke-width: 12%
	}
	& use {
		stroke: var(--brand-orange);
		animation: preloader-3-a 2s linear infinite
	}
	@keyframes preloader-3-a {
		to {
			stroke-dashoffset: 0
		}
	}
`;
