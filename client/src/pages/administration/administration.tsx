import { FC } from 'react';
import { PrivateContent } from 'features';
import styled from 'styled-components';

interface AdministrationProps {
	className?: string;
}

const AdministrationContainer: FC<AdministrationProps> = ({ className }) => {
	return (
		<div className={className}>
			<div className="administration-layout">
				<PrivateContent>
					<section className="admin-panel">
						Здесь должна быть админ-панель
					</section>
				</PrivateContent>
			</div>
		</div>
	);
};

export const Administration = styled(AdministrationContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;

	& div.administration-layout {
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 10px;

		& section.admin-panel {
			max-width: 1200px;
			flex: 1 0 0;
			display: flex;
			flex-direction: column;
			gap: 24px;
			padding: 0 32px;
			color: var(--white);
			font-size: 30px;
		}
	}
`;
