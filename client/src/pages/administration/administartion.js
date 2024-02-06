import { useSelector } from 'react-redux';
import { Error, H1 } from '../../components';
import { ERROR, ROLE_ID } from '../../constants';
import styled from 'styled-components';

const AdministrationContainer = ({ className }) => {
	const user = useSelector(state => state.appReducer.user);

	const isAdminRightsConfirm = user.isActivated && user.roleId === ROLE_ID.ADMIN;

	return (
		<>
			{isAdminRightsConfirm ? (
				<div className={className}>Здесь должна быть админ-панель</div>
			) : (
				<Error>
					<H1 color={'var(--brand-orange)'}>{ERROR.ACCESS_DENIED}</H1>
				</Error>
			)}
		</>
	);
};

export const Administration = styled(AdministrationContainer)`
	color: var(--white);
	font-size: 30px;
`;
