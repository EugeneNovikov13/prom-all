import { Advantages, Categories, Promotions, QuickApplication } from '../../widgets';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<main className={className}>
			<Promotions />
			<Categories />
			<Advantages />
			<QuickApplication />
		</main>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
