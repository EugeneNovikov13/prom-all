import { useSelector } from 'react-redux';
import { selectFixedHeader } from '../store/reducers';
import styled from 'styled-components';

const PageContainer = ({ className, children }) => {
	const isFixed = useSelector(selectFixedHeader);

	return (
		<div className={isFixed ? `${className} header__fixed` : className}>
			{children}
		</div>
	);
};

export const Page = styled(PageContainer)`
	width: 100%;
	min-height: 60vh;
	padding: 113px 0 0;

	@media screen and (max-width: 950px) {
		padding: 164px 0 0;
	}

	@media screen and (max-width: 630px) {
		padding: 216px 0 0;
	}

	@media screen and (max-device-width: 599px), (max-device-height: 599px) {
		padding: 0;
	}

	&.header__fixed {
		@media screen and (max-device-width: 599px) {
			padding: 216px 0 0;
		}

		@media screen and (max-device-height: 599px) {
			padding: 164px 0 0;
		}
	}
`;
