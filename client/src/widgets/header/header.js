import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFixedHeader, setFixedHeader } from '../../store/reducers';
import { InfoContainer, NavigationMenuHoc } from './components';
import { Search } from '../../features';
import { Logo } from '../../components';
import styled from 'styled-components';

const HeaderContainer = ({ className }) => {
	const isFixed = useSelector(selectFixedHeader);

	const firstLineRef = useRef(null);
	const searchRef = useRef(null);
	const dispatch = useDispatch();

	const handleScroll = () => {
		if (
			window.scrollY >=
			firstLineRef.current.offsetHeight + searchRef.current.offsetHeight
		) {
			dispatch(setFixedHeader(true));
			return;
		}
		dispatch(setFixedHeader(false));
	};

	window.addEventListener('scroll', handleScroll);

	return (
		<header className={isFixed ? `${className} header__fixed` : className}>
			<div className="first-line" ref={firstLineRef}>
				<div className="header-top-wrapper">
					<Link to="/">
						<Logo />
					</Link>
					<InfoContainer />
				</div>
			</div>
			<div className="second-line">
				<div className="header-bottom-wrapper">
					<NavigationMenuHoc/>
					<Search ref={searchRef} />
				</div>
			</div>
		</header>
	);
};

export const Header = styled(HeaderContainer)`
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
	color: var(--white);
	backdrop-filter: blur(2px);
	z-index: 100;

	@media screen and (max-device-width: 599px), (max-device-height: 599px) {
		position: relative;
	}

	&.header__fixed {
		@media screen and (max-device-width: 599px), (max-device-height: 599px) {
			position: fixed;
			top: -113px;
		}
	}

	& div.first-line {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
		border-top: 1px solid #686868;
		background: rgba(23, 23, 23, 0.8);

		//&:before {
		//	content: ' ';
		//	display: block;
		//	position: absolute;
		//	left: 0;
		//	top: 0;
		//	width: 100%;
		//	height: 100%;
		//	opacity: 0.8;
		//	background: var(--main-background-color);
		//	z-index: 100;
		//}

		& div.header-top-wrapper {
			max-width: 1200px;
			padding: 0 36px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex: 1 0 0;
			z-index: 101;

			@media screen and (max-width: 450px) {
				padding: 0 10px;
			}

			& img.title {
				@media (max-width: 600px) {
					display: none;
				}
			}
		}
	}

	& div.second-line {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: stretch;
		border-top: 1px solid #686868;
		background: rgba(23, 23, 23, 0.8);

		//&:before {
		//	content: ' ';
		//	display: block;
		//	position: absolute;
		//	left: 0;
		//	top: 0;
		//	width: 100%;
		//	height: 100%;
		//	opacity: 0.8;
		//	background: var(--main-background-color);
		//	z-index: 100;
		//}

		& div.header-bottom-wrapper {
			max-width: 1200px;
			padding: 0 36px;
			display: flex;
			justify-content: center;
			gap: 5px;
			flex: 1 0 0;
			z-index: 101;

			@media screen and (max-width: 950px) {
				display: flex;
				flex-direction: column-reverse;
			}

			@media screen and (max-width: 450px) {
				padding: 0 10px;
			}
		}
	}
`;
