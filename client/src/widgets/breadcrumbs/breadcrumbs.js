import styled from 'styled-components';
import { Button } from '../../features';
import { ReactComponent as Selected } from './assets/selected.svg';
import { Img } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { Crumb } from './components/crumb';
import { useState } from 'react';
import { catalogSlice } from '../../store/reducers';

const BreadcrumbsContainer = ({ className }) => {
	const [openedCrumb, setOpenedCrumb] = useState('');
	const dispatch = useDispatch();

	const onPopupToggle = openedSection => {
		setOpenedCrumb(openedSection);
	};

	const { countSections, breadcrumbs } = useSelector(state => state.catalogReducer);

	const currentBreadcrumbs = Object.entries(breadcrumbs).slice(0, countSections);

	const onCatalogButtonClick = () => {
		//TODO почему не сбрасывается?
		dispatch(catalogSlice.actions.resetBreadcrumbs());
		setOpenedCrumb('');
	};

	return (
		<ol className={className}>
			<li className="breadcrumbs-item">
				<div className="breadcrumbs-first-item-container">
					<Button
						link="/catalog"
						width="128px"
						height="40px"
						borderRadius="100px 0px 0px 100px"
						border="1px solid #938F99"
						fontSize="14px"
						color={'#E8DEF8'}
						background={'#584E44'}
						hoverBackground={'rgba(232, 222, 248, 0.08)'}
						activeBackground={'rgba(232, 222, 248, 0.12)'}
						onClick={onCatalogButtonClick}
					>
						<Img
							maxWidth="28px"
							maxHeight="28px"
							SvgIconComponent={Selected}
							iconClassName="breadcrumbs-first-item-icon"
						/>
						Каталог
					</Button>
				</div>
			</li>
			<li className="breadcrumbs-item">
				{currentBreadcrumbs.map(
					([section, { selectedId, selectedTitle }], index) => (
						<Crumb
							key={index}
							section={section}
							selectedId={selectedId}
							selectedTitle={selectedTitle}
							isOpen={openedCrumb === section}
							setOpenedCrumb={setOpenedCrumb}
							onPopupToggle={onPopupToggle}
						/>
					),
				)}
			</li>
		</ol>
	);
};

export const Breadcrumbs = styled(BreadcrumbsContainer)`
	max-width: 1128px;
	height: 40px;
	display: flex;
	align-items: center;
	align-self: stretch;
	margin: 0;
	padding: 0;
	user-select: none;

	& li.breadcrumbs-item {
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0;

		& div.breadcrumbs-first-item-container {
			width: 128px;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: 1 0 0;

			& svg.breadcrumbs-first-item-icon {
				margin-right: 8px;
			}
		}
	}
`;
