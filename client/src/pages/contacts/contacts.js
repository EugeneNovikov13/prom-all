import { ContactsLayout, ContactsQuickOrderLayout } from './layout';
import styled from 'styled-components';

const ContactsContainer = ({ className }) => {
	return (
		<div className={className}>
			<ContactsLayout />
			<ContactsQuickOrderLayout />
		</div>
	);
};

export const Contacts = styled(ContactsContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
