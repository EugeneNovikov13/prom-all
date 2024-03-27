import { FC } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectBreadcrumbs } from 'store/reducers';
import { useFetchProductBySectionQuery } from 'store/services';
import { Button } from '../../button/button';
import styled from 'styled-components';
import { buttonStyleProps, listVariants } from '../config';

interface PopupItemProductsProps {
	className?: string;
}

const PopupItemProductsContainer: FC<PopupItemProductsProps> = ({ className }) => {
	//ищем id последнего открытого раздела (подкатегория или тип), чтобы запустить поиск товаров по этому id
	const selectedSubcategoryId = useSelector(selectBreadcrumbs).subcategory.selectedId;
	const selectedTypeId = useSelector(selectBreadcrumbs).type.selectedId;
	const lastSelectedSectionId = selectedTypeId || selectedSubcategoryId;

	//может возвращать количество товаров в разделе
	const { data: products } = useFetchProductBySectionQuery(lastSelectedSectionId);

	if (!products || 'counter' in products) return null;

	return (
		<>
			{products.map(({ id, title }, index) => (
				<motion.div
					className={className}
					key={id}
					variants={listVariants}
					initial="hidden"
					animate="visible"
					custom={index}
				>
					<Button {...buttonStyleProps} link={`/catalog/product/${id}`}>
						<span>{title}</span>
					</Button>
				</motion.div>
			))}
		</>
	);
};

export const PopupItemProducts = styled(PopupItemProductsContainer)`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0;

	&:not(:last-of-type) {
		border-bottom: 1px solid #f8eede;
	}

	&:last-of-type {
		border-radius: 0 0 20px 20px;
	}

	&:hover {
		background: rgba(232, 222, 248, 0.08);
	}

	&:active {
		background: rgba(232, 222, 248, 0.12);
	}

	& a {
		width: 100%;
	}

	& span {
		padding: 0 10px;
		text-align: left;
	}
`;
