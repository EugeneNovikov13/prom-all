import styled from 'styled-components';
import { Button } from '../../button/button';
import { ReactComponent as Arrow } from '../assets/north_east.svg';

const SubcategoriesCardContainer = ({ className, SvgIconComponent, subcategories }) => {
	const firstFiveSubcategories = subcategories.slice(0, 5);

	const isMoreThenFiveSubcategories = subcategories.length > 5;

	return (
		<div className={className}>
			<div className="image">
				<SvgIconComponent className="icon" />
			</div>
			<ul className="sections-list">
				{firstFiveSubcategories.map(({ id, title, shortTitle }) => (
					<li key={id} className="section-button">
						<Button
							width='calc(100% + 24px)'
							height="48px"
							fontSize="20px"
							color="var(--white)"
							background="transparent"
							activeBackground='rgba(208, 188, 255, 0.08)'
						>
							{shortTitle ? shortTitle : title}
						</Button>
					</li>
				))}
			</ul>
			{isMoreThenFiveSubcategories && (
				<Button
					width='277px'
					height='48px'
					border='1px solid #938F99'
					fontSize="20px"
					color="#FFD4BC"
					background="transparent"
					activeBackground=''
				>
					<Arrow style={{position: 'relative', top: '2px', marginRight: '8px' }} />
					Все товары
				</Button>
			)}
		</div>
	);
};

export const SubcategoriesCard = styled(SubcategoriesCardContainer)`
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	padding: 0 8px 12px 8px;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	flex-shrink: 0;
	border-radius: 8px;
	background: var(--brand-blue);

	& div.image {
		position: absolute;
		top: -80px;
		left: 50px;
		display: flex;
		max-width: 219px;
		max-height: 150px;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;
		flex-shrink: 0;

		& svg.icon * {
			stroke: var(--brand-orange);
		}
	}

	& ul.sections-list {
		display: flex;
		height: 240px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
		margin: 0;
		padding: 0;

		& li.section-button {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 100px;
			padding: 0 12px;
			z-index: 10;

			&:hover {
				background-color: rgba(208, 188, 255, 0.08);
			}

			&:active {
				background-color: rgba(208, 188, 255, 0.12);
			}
		}
	}
`;
