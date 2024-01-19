import { HelpSection } from '../../widgets/help-section/help-section';
import styled from 'styled-components';

const CatalogContainer = ({ className }) => {
	return (
		<div className={className}>
			<HelpSection />
		</div>
	);
};

export const Catalog = styled(CatalogContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
`;
