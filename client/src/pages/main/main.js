import {
	Advantages,
	Brands,
	Categories,
	Promotions,
	QuickApplication,
} from '../../widgets';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<main className={className}>
			<Promotions />
			<Categories />
			<Advantages />
			<Brands />
			<QuickApplication />
		</main>
	);
};

export const Main = styled(MainContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
