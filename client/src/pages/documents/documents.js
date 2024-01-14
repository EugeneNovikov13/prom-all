import styled from 'styled-components';
import { Loader } from '../../widgets';

const DocumentsContainer = ({ className }) => {
	return (
		<div className={className}>
			<Loader></Loader>
		</div>
	);
};

export const Documents = styled(DocumentsContainer)``;
