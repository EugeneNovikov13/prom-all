import { FC } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'features';
import { ReactComponent as Arrow } from '../assets/north_east.svg';
import styled from 'styled-components';
import { ISubcategory } from 'types';

interface SubcategoriesCardProps {
	className?: string;
	subcategories: ISubcategory[];
	id: string;
}

const SubcategoriesCardContainer: FC<SubcategoriesCardProps> = ({
	className,
	subcategories,
	id,
}) => {
	const firstFiveSubcategories = subcategories.slice(0, 5);

	return (
		<div className={className}>
			<ul className="sections-list">
				{firstFiveSubcategories.map(({ id: subId, title, shortTitle }) => (
					<li key={subId} className="section-button">
						<Button
							link={`/catalog/section/${subId}#catalog-header`}
							height="48px"
							padding="0 12px"
							fontSize="20px"
							color="var(--white)"
							background={'transparent'}
							activeBackground="rgba(208, 188, 255, 0.08)"
						>
							{shortTitle ? shortTitle : title}
						</Button>
					</li>
				))}
			</ul>
			<div className="category-link">
				<HashLink to={`/catalog/section/${id}#catalog-header`}>
					<Button
						width="210px"
						height="48px"
						border="1px solid #938F99"
						fontSize="20px"
						color="#FFD4BC"
						background={'transparent'}
						activeBackground="rgba(208, 188, 255, 0.08)"
					>
						<Arrow style={{ marginRight: '8px' }} />
						Все товары
					</Button>
				</HashLink>
			</div>
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
			z-index: 10;

			&:hover {
				background-color: rgba(208, 188, 255, 0.08);
			}

			&:active {
				background-color: rgba(208, 188, 255, 0.12);
			}
		}
	}

	& div.category-link {
		border-radius: 100px;

		&:hover {
			background-color: rgba(208, 188, 255, 0.08);
		}

		&:active {
			background-color: rgba(208, 188, 255, 0.12);
		}
	}
`;
