import ReCAPTCHA from "react-google-recaptcha";
import styled from 'styled-components';

const CaptchaContainer = ({ className, onChange, onErrored, onExpired }) => {
	return (
		<div className={className}>
			<ReCAPTCHA
				sitekey="6LfJh1ApAAAAAOJOqDiV5l-_mGI7YwXOsLP8Nqa_"
				onChange={onChange}
				// onErrored={onErrored}
				// onExpired={onExpired}
				hl='ru'
			/>
		</div>
	);
};

export const Captcha = styled(CaptchaContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.5);
	transition: all 0.5s;
	opacity: 1;
	display: ${({isVisible}) => isVisible ? 'flex' : 'none'};
`;
