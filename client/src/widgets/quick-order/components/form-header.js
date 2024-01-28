import { useMatch } from 'react-router-dom';
import { H1, P } from '../../../components';
import styled from 'styled-components';

const FormHeaderContainer = ({ className }) => {
	const isContactsPage = useMatch('/contacts');

	return (
		<div className={className}>
			<H1 color="var(--white)">
				{isContactsPage ? 'Напишите нам' : 'Быстрая заявка'}
			</H1>
			<P>Заполните форму, ответим на все вопросы</P>
		</div>
	);
};

export const FormHeader = styled(FormHeaderContainer)`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
