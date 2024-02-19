import { useSelector } from 'react-redux';
import { selectUser } from '../../../../store/reducers';
import { Button } from '../../../../features';
import { ROLE_ID } from '../../../../constants';
import styled from 'styled-components';

const AccountFormFooterContainer = ({
	className,
	formError,
	isDirty,
	onCancel,
	onLogout,
}) => {
	const user = useSelector(selectUser);

	const isAdminRightsConfirm = user.isActivated && user.roleId === ROLE_ID.ADMIN;

	return (
		<div className={className}>
			<Button
				width="100%"
				height="60px"
				background={'var(--brand-orange)'}
				type="submit"
				isDisable={!!formError || !isDirty}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				Сохранить
			</Button>
			<Button
				width="100%"
				height="60px"
				background={'var(--brand-orange)'}
				isDisable={!isDirty}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
				onClick={e => onCancel(e)}
			>
				Отменить
			</Button>
			{isAdminRightsConfirm && (
				<Button
					link={'/administration'}
					width="100%"
					height="60px"
					background={'var(--brand-orange)'}
					hoverBoxShadow={true}
					activeBackground={'var(--active-orange)'}
				>
					Зайти в админ-панель
				</Button>
			)}
			<Button
				width="100%"
				height="60px"
				background={'var(--brand-orange)'}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
				onClick={e => onLogout(e)}
			>
				Выйти из аккаунта
			</Button>
		</div>
	);
};

export const AccountFormFooter = styled(AccountFormFooterContainer)`
	display: flex;
	flex-direction: column;
	gap: 24px;
	align-self: stretch;

	span {
		color: var(--white, #fff);
		font-family: Inter, sans-serif;
		font-size: 16px;
		opacity: 0.7;

		& a {
			opacity: 1;
			text-decoration: underline;
			cursor: pointer;

			&:hover {
				color: var(--brand-orange);
			}
		}
	}
`;
