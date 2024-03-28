import { FC, useEffect } from 'react';
import { useGetProductsAsync } from '../hooks';
import { useFetchProductBySectionQuery } from 'store/services';
import { motion } from 'framer-motion';
import { Img } from 'components';
import { Button } from 'features';
import { animationVariants } from '../config/animation-variants';
import { buttonStyleProps } from '../config/button-style-props';
import { ReactComponent as BigCircle } from '../assets/big-circle.svg';
import styled from 'styled-components';

interface TypeSectionProps {
	className?: string;
	id: string;
	title: string;
	isActiveType: boolean;
	index: number;
}

const TypeSectionContainer: FC<TypeSectionProps> = ({
	className,
	id,
	title,
	isActiveType,
	index,
}) => {
	const { data } = useFetchProductBySectionQuery(id);
	const { getProducts } = useGetProductsAsync();

	useEffect(() => {
		if (isActiveType) {
			getProducts(id);
		}
	}, [id, isActiveType]);


	return (
		<motion.li
			className={className}
			variants={animationVariants}
			initial={'hidden'}
			animate="visible"
			exit="hidden"
			custom={index}
		>
			<Button
				{...buttonStyleProps}
				background={isActiveType ? '#FFD4BC' : 'transparent'}
				padding={'6px 16px 6px 24px'}
				link={`/catalog/section/${id}#catalog-header`}
				smooth={true}
			>
				<div className="type-button-content">
					<Img
						SvgIconComponent={BigCircle}
						maxWidth="16px"
						maxHeight="16px"
						fill={'#FF7F00'}
						hoverStrokeColor={'transparent'}
					/>
					<span className="type-title">{title}</span>
					<span className="subcategory-product-counter">
						{data && !('counter' in data) && data.length}
					</span>
				</div>
			</Button>
		</motion.li>
	);
};

export const TypeSection = styled(TypeSectionContainer)`
	width: 100%;
	display: flex;
	align-items: center;
	align-self: stretch;
	border-radius: 100px;
	margin: 0 0 1px 0;
	padding: 0;

	& div.type-button-content {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1 0 0;

		& span.type-title {
			flex: 1 0 0;
			text-align: left;
		}
	}
`;
