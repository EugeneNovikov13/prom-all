import styled from 'styled-components';
import { FC } from 'react';

interface AboutProps {
	className?: string;
}

const AboutContainer: FC<AboutProps> = ({ className }) => {
	return <main className={className}></main>;
};

export const About = styled(AboutContainer)``;
