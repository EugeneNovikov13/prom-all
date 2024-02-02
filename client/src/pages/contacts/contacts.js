import { ContactsLayout, ContactsQuickOrderLayout } from './layout';
import styled from 'styled-components';

const ContactsContainer = ({ className }) => {
	return (
		<main className={className}>
			<ContactsLayout />
			<ContactsQuickOrderLayout />
		</main>
	);
};

export const Contacts = styled(ContactsContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
