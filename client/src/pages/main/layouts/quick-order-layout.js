import { QuickOrder } from '../../../widgets';
import styled from 'styled-components';

const QuickOrderLayoutContainer = ({ className }) => {
	return (
		<section className={className} id="quick_order_section">
			<QuickOrder />
		</section>
	);
};

export const QuickOrderLayout = styled(QuickOrderLayoutContainer)`
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 160px 10px;
`;
