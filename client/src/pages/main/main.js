import { Advantages, Brands, Promotions } from '../../widgets';
import { CategoriesLayout, QuickApplicationLayout } from './layouts';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<main className={className}>
			<Promotions />
			<CategoriesLayout />
			<Advantages />
			<Brands />
			<QuickApplicationLayout />
		</main>
	);
};

export const Main = styled(MainContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
