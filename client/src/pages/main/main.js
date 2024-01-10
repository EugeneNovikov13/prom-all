import styled from 'styled-components';

const MainContainer = ({ className }) => {

	return (
		<div className={className}>
		</div>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
`;
