import { Button } from '../../../features';
import { Img } from '../../../components';
import { ReactComponent as Selected } from '../assets/selected.svg';
import styled from 'styled-components';
import { FC } from 'react';

interface BreadcrumbsFirstItemProps {
	className?: string;
}

const BreadcrumbsFieldContainer: FC<BreadcrumbsFirstItemProps> = ({ className }) => {
	return (
		<li className={className}>
			<div className="breadcrumbs-first-item-container">
				<Button
					link="/catalog"
					width="128px"
					height="40px"
					borderRadius="100px 0px 0px 100px"
					border="1px solid #938F99"
					fontSize="14px"
					color={'#E8DEF8'}
					background={'#584E44'}
					hoverBackground={'rgba(232, 222, 248, 0.08)'}
					activeBackground={'rgba(232, 222, 248, 0.12)'}
				>
					<Img
						maxWidth="28px"
						maxHeight="28px"
						SvgIconComponent={Selected}
						iconClassName="breadcrumbs-first-item-icon"
						hoverStrokeColor='transparent'
					/>
					Каталог
				</Button>
			</div>
		</li>
	);
};

export const BreadcrumbsFirstItem = styled(BreadcrumbsFieldContainer)`
	height: 40px;
	flex: 1 0 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;

	& div.breadcrumbs-first-item-container {
		display: flex;
		justify-content: center;
		align-items: center;

		& svg.breadcrumbs-first-item-icon {
			margin-right: 8px;
		}
	}
`;
