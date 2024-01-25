import { Link } from 'react-router-dom';
import { NavigationFooterMenu } from './components/navigation-footer-menu';
import { Information } from './components/information';
import { Logo } from '../../components';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
	return (
		<footer className={className}>
			<div className="footer-body">
				<div className='footer-body-container'>
					<div className='logo'>
						<Link to='/'>
							<Logo />
						</Link>
					</div>
					<div className='navigation'>
						<NavigationFooterMenu />
					</div>
					<div className='info'>
						<Information />
					</div>
				</div>
			</div>
			<div className="footer-label">
				<div className="label-wrapper">
					<p>© 2008 - {new Date().getFullYear()} «Промышленный Альянс»</p>
				</div>
			</div>
		</footer>
	);
};

export const Footer = styled(FooterContainer)`
	width: 100%;
	padding: 80px 10px 0;
	display: flex;
	flex-direction: column;
	gap: 40px;
	background: var(--dark);

	& div.footer-body {
		min-height: 240px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 24px;

		@media (max-width: 450px) {
			padding: 0 10px;
		}

		& div.footer-body-container {
			max-width: 1200px;
			display: flex;
			flex-wrap: wrap;
			flex: 1 0 0;
			justify-content: center;
			padding: 0 36px;

			& div.logo {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 10px;
				padding-top: 12px;

				@media (max-width: 450px) {
					align-items: center;
				}
			}

			& div.navigation {
				flex: 1;
			}

			& div.info {
				min-width: 250px;
				flex: 1;
			}
		}
	}

	& div.footer-label {
		display: flex;
		justify-content: center;
		align-items: center;

		& div.label-wrapper {
			max-width: 1200px;
			flex: 1 0 0;
			padding: 16px 36px;
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
