import { QuickApplication } from '../../../widgets';
import styled from 'styled-components';

const QuickApplicationLayoutContainer = ({ className }) => {
	return (
		<section className={className} id="quick_application_section">
			<QuickApplication />
		</section>
	);
};

export const QuickApplicationLayout = styled(QuickApplicationLayoutContainer)`
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 160px 10px;
	background: var(--dark);
`;
