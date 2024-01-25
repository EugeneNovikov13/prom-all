import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../utils/get-products';
import { AnimatePresence, motion } from 'framer-motion';
import { changeLoading, setCards } from '../../../store/reducers';
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
	isOpen,
	index,
}) => {
	const [openedType, setOpenedType] = useState('');

	const currentTypeTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.type.selectedTitle,
	);

	const dispatch = useDispatch();

	//TODO разкомментировать, когда появятся товары во всех категориях

	//Для предотвращения ошибки можно на бек-энде создать массив допустимых id разделов, содержащих типы
	//и возвращать data с полем counter, значение которого выводить в span с количеством.
	//Туда же можно общее количество товаров в типе выводить.
	// const {data} = useFetchProductBySectionQuery(id);

	useEffect(() => {
		if (isOpen && types) {
			const payload = {
				isProductCards: false,
				data: types,
			};
			dispatch(setCards(payload));
			return;
		}
		if (isOpen) {
			getProducts(id, dispatch, changeLoading);
		}
	}, [currentTypeTitle, dispatch, id, isOpen, types]);

	useEffect(() => {
		setOpenedType(currentTypeTitle);
	}, [currentTypeTitle]);

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
				background={isOpen ? '#FFD4BC' : 'transparent'}
				link={`/catalog/section/${id}`}
			>
				<div className="subcategory-button-content">
					<Img SvgIconComponent={BigCircle} maxWidth="24px" maxHeight="24px" />
					<span className="subcategory-title">{shortTitle || title}</span>
					{/*TODO доделать получение количества товаров в категории*/}
					{/*<span className="subcategory-product-counter">{data?.counter || data.length}</span>*/}
					<span className="subcategory-product-counter">100+</span>
				</div>
			</Button>
			<AnimatePresence>
				{isOpen && types && (
					<ul className="types-container">
						{types.map(({ id: typeId, title: typeTitle }, typeIndex) => (
							<TypeSection
								key={typeId}
								id={typeId}
								title={typeTitle}
								isOpen={typeTitle === openedType}
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
