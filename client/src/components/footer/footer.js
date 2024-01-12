import { Logo } from '../logo/logo';
import { NavigationFooterMenu } from './components/navigation-footer-menu';
import { Information } from './components/information';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<div className="footer-body">
				<div className="logo">
					<Link to="/">
						<Logo />
					</Link>
				</div>
				<div className="navigation">
					<NavigationFooterMenu />
				</div>
				<div className="info">
					<Information />
				</div>
			</div>
			<div className="footer-label">
				<div className="label-wrapper">
					<p>© 2008 - 2024 «Промышленный Альянс»</p>
				</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	width: 100%;
	padding-top: 80px;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-content: center;
	gap: 40px;
	background: var(--dark);

	& div.footer-body {
		min-height: 240px;
		max-width: 1200px;
		padding: 0 36px;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 24px;
		align-self: stretch;

		& div.logo {
			min-width: 360px;
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
		}

		& div.navigation {
			min-width: 360px;
			flex: 1;
		}

		& div.info {
			min-width: 360px;
			flex: 1;
		}
	}

	& div.footer-label {
		display: flex;
		max-width: 1200px;
		padding: 0 36px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
		align-self: stretch;

		& div.label-wrapper {
			display: flex;
			max-width: 1200px;
			padding: 16px 0;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 16px;
			align-self: stretch;
			border-top: 1px solid var(--white);

			& p {
				height: 21px;
				align-self: stretch;
				color: var(--white);
				text-align: center;
				font-family: Inter, sans-serif;
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: 20px;
				opacity: 0.6;
			}
		}
	}
`;
