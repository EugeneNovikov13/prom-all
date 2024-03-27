import { FC, useRef, useState } from 'react';
import { useDebounce } from 'hooks';
import { ProductCard } from 'features';
import { Img } from 'components';
import { SubcategoriesCard } from 'features/product-card/components/subcategories-card';
import { ProductCardContent } from 'features/product-card/components/product-card-content';
import { SETTINGS } from 'settings';
import { catalogList } from '../../constants';
import styled from 'styled-components';

interface CategoriesProps {
	className?: string;
}

const CategoriesContainer: FC<CategoriesProps> = ({ className }) => {
	const [openCardTitle, setOpenCardTitle] = useState<string>('');

	let refDebounceTimeout = useRef<NodeJS.Timeout>();

	const onClick = (title: string) => {
		clearTimeout(refDebounceTimeout.current);
		setOpenCardTitle(title);
	};

	const onMouseEnter = (title: string) => {
		if (openCardTitle === title) {
			clearTimeout(refDebounceTimeout.current);
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
					onClick={() => onClick(title)}
					onMouseEnter={() => onMouseEnter(title)}
					onMouseLeave={debouncedOnMouseLeave}
					isOpen={openCardTitle === title}
					openCardTitle={openCardTitle}
				>
					<Img
						iconClassName="product-card-icon"
						SvgIconComponent={image}
						maxWidth="217px"
						maxHeight="150px"
						position={openCardTitle === title ? 'absolute' : 'relative'}
						top={openCardTitle === title ? '-80px' : '0'}
						strokeColor={openCardTitle === title ? 'var(--brand-orange)' : ''}
						hoverStrokeColor={'var(--brand-orange)'}
					/>
					{openCardTitle === title ? (
						<SubcategoriesCard subcategories={subcategories} id={id} />
					) : (
						<ProductCardContent title={title} />
					)}
				</ProductCard>
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

	& svg.product-card-icon {
		z-index: 1;
	}

	& svg.product-card-icon * {
		transition: 0.3s;
	}
`;
