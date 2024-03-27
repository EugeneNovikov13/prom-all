import { HashLink } from 'react-router-hash-link';
import { Button } from 'features';
import styled from 'styled-components';
import { FC } from 'react';

interface AuthorizationFormFooterProps {
	className?: string;
	formError: string | undefined;
	captchaToken: string;
}

const AuthorizationFormFooterContainer: FC<AuthorizationFormFooterProps> = ({ className, formError, captchaToken }) => {
	return (
		<div className={className}>
			<Button
				width="100%"
				height="60px"
				background={'var(--brand-orange)'}
				type="submit"
				isDisable={!!formError || !captchaToken}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				Отправить
			</Button>
			<span>Если у вас нет аккаунта {<HashLink to={'/registration#top'}>зарегистрируйтесь</HashLink>}</span>
		</div>
	);
};

export const AuthorizationFormFooter = styled(AuthorizationFormFooterContainer)`
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
