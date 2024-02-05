import { QuickOrder } from '../../../widgets';
import styled from 'styled-components';

const ContactsQuickOrderLayoutContainer = ({ className }) => {
	return (
		<section className={className}>
			<QuickOrder />
		</section>
	);
};

export const ContactsQuickOrderLayout = styled(ContactsQuickOrderLayoutContainer)`
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 80px 10px;
`;
