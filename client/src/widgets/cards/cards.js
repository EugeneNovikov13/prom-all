import styled from 'styled-components';

const CardsContainer = ({ className }) => {
	return <section className={className}></section>;
};

export const Cards = styled(CardsContainer)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex: 1 0 0;
	align-self: stretch;
	overflow: visible;
`;
