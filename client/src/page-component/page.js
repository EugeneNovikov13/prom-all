import { useSelector } from 'react-redux';
import styled from 'styled-components';

const PageContainer = ({ className, children }) => {
	const { fixedHeader: isFixed } = useSelector(state => state.appReducer);

	return (
		<div className={isFixed ? `${className} header__fixed` : className}>
			{children}
		</div>
	);
};

export const Page = styled(PageContainer)`
	width: 100%;
	min-height: 60vh;
	padding: 112px 0 0;

	@media screen and (max-width: 1020px) {
		padding: 209px 0 0;
	}

	@media screen and (max-width: 450px) {
		padding: 261px 0 0;
	}

	@media screen and (max-device-height: 1000px) {
		padding: 0;
	}

	&.header__fixed {
		@media screen and (max-device-height: 1000px) {
			padding: 313px 0 0;
		}
	}
`;
