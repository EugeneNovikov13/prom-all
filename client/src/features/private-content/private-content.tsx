import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/reducers';
import { Error, H1 } from 'components';
import { ERROR, ROLE_ID } from '../../constants';

interface PrivateContentProps {
	children: ReactNode;
	serverError?: string | null;
}

export const PrivateContent: FC<PrivateContentProps> = ({ children, serverError = null }) => {
	const user = useSelector(selectUser);

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
