import { AccountForm } from './components/account-form';
import styled from 'styled-components';
import { FC } from 'react';

interface AccountProps {
	className?: string;
}

const AccountContainer: FC<AccountProps> = ({ className }) => {
	return (
		<div className={className}>
			<section className="account-layout">
				<AccountForm />
			</section>
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
