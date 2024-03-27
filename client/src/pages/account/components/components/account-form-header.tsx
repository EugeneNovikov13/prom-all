import { useSelector } from 'react-redux';
import { selectUser } from 'store/reducers';
import { H1, P } from 'components';
import styled from 'styled-components';
import { FC } from 'react';

interface AccountFormHeaderProps {
	className?: string;
}

const AccountFormHeaderContainer: FC<AccountFormHeaderProps> = ({ className }) => {
	const userEmailIsActivated = useSelector(selectUser).isActivated;

	return (
		<div className={className}>
			<H1 color="var(--white)">Личный кабинет</H1>
			{!userEmailIsActivated &&
				<P color={'var(--brand-orange)'} fontSize="12px">
					* Активируйте аккаунт по ссылке, отправленной на Вашу электронную
					почту, пожалуйста
				</P>
			}
		</div>
	);
};

export const AccountFormHeader = styled(AccountFormHeaderContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
