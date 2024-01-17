import { useRef, useState } from 'react';
import { useDebounce } from '../../hooks';
import { H1 } from '../../components';
import { Button, ProductCard } from '../../features';
import { SETTINGS } from '../../settings';
import { catalog } from './constants/catalog';
import styled from 'styled-components';

const CategoriesContainer = ({ className }) => {
	const [openCardTitle, setOpenCardTitle] = useState('');

	let refDebounceTimeout = useRef(null);

	const onClick = (ref, title) => {
		clearTimeout(ref.current);
		setOpenCardTitle(title);
	};

	const onMouseEnter = (ref, title) => {
		if (openCardTitle === title) {
			clearTimeout(ref.current);
		}
	};

	const onMouseLeave = title => {
		setOpenCardTitle('');
	};

	const debouncedOnMouseLeave = useDebounce(
		refDebounceTimeout,
		onMouseLeave,
		SETTINGS.CATEGORY_CARD_CLOSE_DELAY,
	);

	return (
		<section className={className}>
			<div className="categories-container">
				<div className="categories-header">
					<H1>Каталог товаров</H1>
				</div>
				<div className="categories-body">
					{catalog.map(({ id, title, image, subcategories }) => (
						<ProductCard
							key={id}
							title={title}
							SvgIconComponent={image}
							subcategories={subcategories}
							isOpen={openCardTitle === title}
							onClick={() => onClick(refDebounceTimeout, title)}
							onMouseEnter={() => onMouseEnter(refDebounceTimeout, title)}
							onMouseLeave={() => debouncedOnMouseLeave(title)}
						/>
					))}
				</div>
				<div className="categories-footer">
					<Button
						link="/catalog"
						width="360px"
						height="56px"
						border="2px solid var(--dark, #111)"
						activeBackground="#79747E"
					>
						Подробнее
					</Button>
				</div>
			</div>
		</section>
	);
};

export const Categories = styled(CategoriesContainer)`
	display: flex;
	max-width: 100%;
	min-height: 1198px;
	padding: 140px 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--beige);

	& div.categories-container {
		display: flex;
		max-width: 1200px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 40px;

		& div.categories-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			align-self: stretch;
			margin: 0 36px;
		}

		& div.categories-body {
			display: flex;
			justify-content: center;
			align-items: center;
			align-content: center;
			gap: 10px;
			flex-wrap: wrap;
		}

		& div.categories-footer {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
`;
