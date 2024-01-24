import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../../../store/reducers';
import { fetchProductsBySectionId } from '../../../utils';
import { Button } from '../../../features';
import { Img } from '../../../components';
import { TypeSection } from './type-section';
import { ReactComponent as BigCircle } from '../assets/big-circle.svg';
import styled from 'styled-components';

const SubcategorySectionContainer = ({
	className,
	id,
	shortTitle,
	title,
	types,
	isOpen,
	buttonStyleProps,
}) => {
	const [openedType, setOpenedType] = useState('');

	const currentTypeTitle = useSelector(
		state => state.catalogReducer.breadcrumbs.type.selectedTitle,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		setOpenedType(currentTypeTitle);
		if (isOpen && types) {
			dispatch(setCards(types));
			return;
		}
		if (isOpen) {
			dispatch(setCards([]));
			fetchProductsBySectionId(id)
				.then(({ data }) => {
					dispatch(setCards(data));
				})
				.catch(e => {
					//TODO обработать ошибку
					console.log(e.response.data);
				});
		}
	}, [currentTypeTitle, dispatch, id, isOpen, types]);

	return (
		<li className={className}>
			<Button
				{...buttonStyleProps}
				background={isOpen ? '#FFD4BC' : 'transparent'}
				link={`/catalog/section/${id}`}
			>
				<div className="subcategory-button-content">
					<Img SvgIconComponent={BigCircle} maxWidth="24px" maxHeight="24px" />
					<span className="subcategory-title">{shortTitle || title}</span>
					{/*TODO доделать получение количества товаров в категории*/}
					<span>100+</span>
				</div>
			</Button>
			{isOpen && types && (
				<ul className="types-container">
					{types.map(({ id, title }) => (
						<TypeSection
							key={id}
							id={id}
							title={title}
							isOpen={title === openedType}
							buttonStyleProps={buttonStyleProps}
						/>
					))}
				</ul>
			)}
		</li>
	);
};

export const SubcategorySection = styled(SubcategorySectionContainer)`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1px;
	align-self: stretch;
	border-radius: 100px;
	margin: 0 0 1px 0;
	padding: 0;

	& div.subcategory-button-content {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1 0 0;

		& span.subcategory-title {
			flex: 1 0 0;
			text-align: left;
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
