import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const LogoContainer = ({ className }) => {
	return (
		<div className={className}>
			<img src={logo} alt="logo" />
		</div>
	);
};

export const Logo = styled(LogoContainer)`
	height: 60px;

	& :hover {
		cursor: pointer;
	}
`;
