import { useRef, useState } from 'react';
import { useDebounce } from '../../hooks';
import { ProductCard } from '../../features';
import { SETTINGS } from '../../settings';
import { catalogList } from '../../constants';
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

	const onMouseLeave = () => {
		setOpenCardTitle('');
	};

	const debouncedOnMouseLeave = useDebounce(
		refDebounceTimeout,
		onMouseLeave,
		SETTINGS.CATEGORY_CARD_CLOSE_DELAY,
	);

	return (
		<div className={className}>
			{catalogList.map(({ id, title, image, subcategories }) => (
				<ProductCard
					key={id}
					id={id}
					title={title}
					SvgIconComponent={image}
					subcategories={subcategories}
					openCardTitle={openCardTitle}
					onClick={() => onClick(refDebounceTimeout, title)}
					onMouseEnter={() => onMouseEnter(refDebounceTimeout, title)}
					onMouseLeave={() => debouncedOnMouseLeave(title)}
				/>
			))}
		</div>
	);
};

export const Categories = styled(CategoriesContainer)`
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	gap: 10px;
	flex-wrap: wrap;
`;
