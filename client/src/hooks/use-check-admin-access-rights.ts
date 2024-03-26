import { useSelector } from 'react-redux';
import { selectUser } from '../store/reducers';
import { ROLE_ID } from '../constants';

export function useCheckAdminAccessRights() {
	const user = useSelector(selectUser);

	return user.isActivated && user.roleId === ROLE_ID.ADMIN;
}
