import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetProductsAsync } from '../hooks';
import { useFetchProductBySectionQuery } from 'store/services';
import { AnimatePresence, motion } from 'framer-motion';
import { selectBreadcrumbs } from 'store/reducers';
import { Button } from 'features';
import { Icon } from 'components';
import { TypeSection } from './type-section';
import { animationVariants } from '../config/animation-variants';
import { buttonStyleProps } from '../config/button-style-props';
import { ReactComponent as BigCircle } from '../assets/big-circle.svg';
import styled from 'styled-components';
import { IType } from 'types';

interface SubcategorySectionProps {
	className?: string;
	id: string,
	title: string,
	types: IType[] | undefined,
	isActiveSubcategory: boolean,
	index: number,
}

const SubcategorySectionContainer: FC<SubcategorySectionProps> = ({
	className,
	id,
	title,
	types,
	isActiveSubcategory,
	index,
}) => {
	const currentTypeTitle = useSelector(selectBreadcrumbs).type.selectedTitle;

	const { data } = useFetchProductBySectionQuery(id);
	const { getProducts } = useGetProductsAsync();

	useEffect(() => {
		if (isActiveSubcategory && !types) {
			getProducts(id);
		}
	}, [id, isActiveSubcategory, types]);

	return (
		<motion.li
			className={className}
			variants={animationVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
			custom={index}
		>
			<Button
				{...buttonStyleProps}
				background={isActiveSubcategory ? '#FFD4BC' : 'transparent'}
				link={`/catalog/section/${id}#catalog-header`}
				smooth={true}
			>
				<div className="subcategory-button-content">
					<Icon iconSrc={BigCircle} width="24px" isActive={true} />
					<span className="subcategory-title">{title}</span>
					{/*бек-энд возвращает data.counter, если эта подкатегория содержит типы, а не товары*/}
					{data && (
						<span className="subcategory-product-counter">
							{'counter' in data ? data.counter : data.length}
						</span>
					)}
				</div>
			</Button>
			<AnimatePresence>
				{isActiveSubcategory && types && (
					<ul className="types-container">
						{types.map(({ id: typeId, title: typeTitle }, typeIndex) => (
							<TypeSection
								key={typeId}
								id={typeId}
								title={typeTitle}
								isActiveType={typeTitle === currentTypeTitle}
								index={typeIndex}
							/>
						))}
					</ul>
				)}
			</AnimatePresence>
		</motion.li>
	);
};

export const SubcategorySection = styled(SubcategorySectionContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1px;
	align-self: stretch;
	border-radius: 28px;
	margin: 0 0 1px 0;
	padding: 0;
	overflow: hidden;

	& div.subcategory-button-content {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1 0 0;
		font-weight: 600;
		line-height: 20px;
		letter-spacing: 0.1px;

		& span.subcategory-title {
			hyphens: auto;
			flex: 1 0 0;
			text-align: left;
		}

		& span.subcategory-product-counter {
			text-align: right;
		}
	}

	& ul.types-container {
		width: 100%;
		margin: 0;
		padding: 0;

		& a {
			width: 100%;
		}
	}
`;
