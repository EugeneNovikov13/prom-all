import { useSelector } from 'react-redux';
import { ERROR, ROLE_ID } from '../../constants';
import { Error, H1 } from '../../components';

export const PrivateContent = ({ children, serverError = null }) => {
	const user = useSelector(state => state.appReducer.user);

	const isAdminRightsConfirm = user.isActivated && user.roleId === ROLE_ID.ADMIN;

	const accessError = isAdminRightsConfirm ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? (
		<Error>
			<H1 color={'var(--brand-orange)'}>{error}</H1>
		</Error>
	) : (
		children
	);
};
