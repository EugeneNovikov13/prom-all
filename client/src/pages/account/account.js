import { useSelector } from 'react-redux';
import { AccountForm } from './components/account-form';
import styled from 'styled-components';

const AccountContainer = ({ className }) => {
	const user = useSelector(state => state.appReducer.user);

	return (
		<div className={className}>
			{user.id && (
				<section className="account-layout">
					<AccountForm user={user} />
				</section>
			)}
		</div>
	);
};

export const Account = styled(AccountContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;

	& section.account-layout {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 10px;
	}
`;
