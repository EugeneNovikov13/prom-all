import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetProducts } from '../utils/async-get-products';
import { useFetchProductBySectionQuery } from '../../../store/services';
import { AnimatePresence, motion } from 'framer-motion';
import { changeLoading } from '../../../store/reducers';
import { Button } from '../../../features';
import { Img } from '../../../components';
import { TypeSection } from './type-section';
import { ReactComponent as BigCircle } from '../assets/big-circle.svg';
import { animationVariants } from '../constants/animation-variants';
import { buttonStyleProps } from '../constants/button-style-props';
import styled from 'styled-components';

const SubcategorySectionContainer = ({
	className,
	id,
	shortTitle,
	title,
	types,
	isActiveSubcategory,
	index,
}) => {
	const currentTypeTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.type.selectedTitle,
	);

	const dispatch = useDispatch();

	const { data } = useFetchProductBySectionQuery(id);

	useEffect(() => {
		if (isActiveSubcategory && !types) {
			asyncGetProducts(id, dispatch, changeLoading);
		}
	}, [dispatch, id, isActiveSubcategory, types]);

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
					<Img SvgIconComponent={BigCircle} maxWidth="24px" maxHeight="24px" />
					<span className="subcategory-title">{shortTitle || title}</span>
					{/*бек-энд возвращает data.counter, если эта подкатегория содержит типы, а не товары*/}
					{data && (
						<span className="subcategory-product-counter">
							{data.counter ? data.counter : data.length}
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
