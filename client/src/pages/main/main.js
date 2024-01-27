import { Advantages, Brands, Promotions } from '../../widgets';
import { CategoriesLayout, QuickOrderLayout } from './layouts';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	return (
		<main className={className}>
			<Promotions />
			<CategoriesLayout />
			<Advantages />
			<Brands />
			<QuickOrderLayout />
		</main>
	);
};

export const Main = styled(MainContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
