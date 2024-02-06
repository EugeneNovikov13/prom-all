import { Img } from '../../components';
import {ReactComponent as Image404} from './assets/404.svg';
import { ERROR } from '../../constants';
import styled from 'styled-components';

const Page404Container = ({ className }) => {
	console.error(ERROR.PAGE_NOT_EXIST);

	return (
		<div className={className}>
			<Img SvgIconComponent={Image404} iconClassName='background-svg' position='relative' maxWidth='100%'></Img>
		</div>
	);
};

export const Page404 = styled(Page404Container)`
	width: 100%;
	display: flex;
	justify-content: center;

	& svg.background-svg {
		width: 100%;
		height: fit-content;
	}
`;
