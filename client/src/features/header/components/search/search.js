import { Icon } from '../../../../components';
import searchLoup from './assets/search-loup.svg';
import styled from 'styled-components';

const SearchContainer = ({ className }) => {
	return (
		<search className={className}>
			<Icon width="24px" iconSrc={searchLoup}></Icon>
			<span>Поиск</span>
		</search>
	);
};

export const Search = styled(SearchContainer)`
	max-width: 300px;
	height: 47px;
	flex: 1 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid rgba(23, 23, 23, 1);
	border-radius: 23px;
	color: #cac4d0;
	transition: flex 0.5s ease-out;

	&:hover {
		background: #2b2930;
		flex: 2 0 0;
		cursor: pointer;
		transition: flex 0.5s ease-out;
	}
`;
