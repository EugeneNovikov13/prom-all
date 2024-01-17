import { Categories, Promotions, QuickApplication } from '../../features';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<main className={className}>
			<Promotions />
			<Categories />
			<QuickApplication />
		</main>
	);
};

export const Main = styled(MainContainer)`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
