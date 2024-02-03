import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsAsync } from '../utils/get-products-async';
import { useFetchProductBySectionQuery } from '../../../store/services';
import { motion } from 'framer-motion';
import { changeLoading } from '../../../store/reducers';
import { Img } from '../../../components';
import { Button } from '../../../features';
import { ReactComponent as BigCircle } from '../assets/big-circle.svg';
import { animationVariants } from '../constants/animation-variants';
import { buttonStyleProps } from '../constants/button-style-props';
import styled from 'styled-components';

const TypeSectionContainer = ({ className, id, title, isActiveType, index }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (isActiveType) {
			getProductsAsync(id, dispatch, changeLoading);
		}
	}, [dispatch, id, isActiveType]);

	const { data } = useFetchProductBySectionQuery(id);

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
					/>
					<span className="type-title">{title}</span>
					<span className="subcategory-product-counter">
						{data && data.length}
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
