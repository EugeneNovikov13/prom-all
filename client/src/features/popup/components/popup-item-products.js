import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useFetchProductBySectionQuery } from '../../../store/services';
import { Button } from '../../button/button';
import { Loader } from '../../../components';
import styled from 'styled-components';

const PopupItemProductsContainer = ({ className, onPopupSectionClick, listVariants }) => {
	const selectedSubcategoryId = useSelector(
		state => state.catalogReducer.breadcrumbs.subcategory.selectedId,
	);
	const selectedTypeId = useSelector(
		state => state.catalogReducer.breadcrumbs.type.selectedId,
	);
	const selectedSectionId = selectedTypeId || selectedSubcategoryId;

	const { data: products, isLoading } =
		useFetchProductBySectionQuery(selectedSectionId);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{products &&
						products.map(({ id, title }, index) => (
							<motion.div
								className={className}
								key={id}
								variants={listVariants}
								initial="hidden"
								animate="visible"
								custom={index}
							>
								<Button
									link={`/catalog/product/${id}`}
									justifyContent="flex-start"
									width="100%"
									height="40px"
									borderRadius="0"
									fontSize="14px"
									color={'#E6E0E9'}
									background={'transparent'}
									onClick={() =>
										onPopupSectionClick(id, title, 'product')
									}
								>
									<span>{title}</span>
								</Button>
							</motion.div>
						))}
				</>
			)}
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
