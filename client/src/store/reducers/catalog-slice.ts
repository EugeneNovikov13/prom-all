import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Breadcrumbs, IProduct, ISection, SectionName } from 'types';

interface ICatalogState {
	/**
	 * Количество "крошек" в списке
	 */
	countSections: number;
	/**
	 * "Крошки" (возможные значения)
	 */
	breadcrumbs: Breadcrumbs;
	/**
	 * Список товаров
	 */
	productList: IProduct[];
}

const initialState: ICatalogState = {
	countSections: 1,
	breadcrumbs: {
		[SectionName.Category]: {
			selectedId: '',
			selectedTitle: 'Категория',
		},
		[SectionName.Subcategory]: {
			selectedId: '',
			selectedTitle: 'Подкатегория',
		},
		[SectionName.Type]: {
			selectedId: '',
			selectedTitle: 'Тип',
		},
		[SectionName.Product]: {
			selectedId: '',
			selectedTitle: 'Товар',
		},
	},
	productList: [],
};

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<ISection>) {
			state.breadcrumbs.category = action.payload;
			state.breadcrumbs.subcategory = initialState.breadcrumbs.subcategory;
			state.breadcrumbs.type = initialState.breadcrumbs.type;
			state.breadcrumbs.product = initialState.breadcrumbs.product;
			state.countSections = 2;
		},
		setSubcategory(state, action: PayloadAction<ISection>) {
			state.breadcrumbs.subcategory = action.payload;
			state.breadcrumbs.type = initialState.breadcrumbs.type;
			state.breadcrumbs.product = initialState.breadcrumbs.product;
			state.countSections = 3;
		},
		setType(state, action: PayloadAction<ISection>) {
			state.breadcrumbs.type = action.payload;
			state.breadcrumbs.product = initialState.breadcrumbs.product;
			state.countSections = 4;
		},
		setProduct(state, action: PayloadAction<ISection>) {
			state.breadcrumbs.product = action.payload;
		},
		resetBreadcrumbs() {
			return initialState;
		},
		setProductList(state, action: PayloadAction<IProduct[]>) {
			state.productList = action.payload;
		},
		resetProductList(state) {
			state.productList = initialState.productList;
		},
	},
	selectors: {
		selectCountSections: state => state.countSections,
		selectBreadcrumbs: state => state.breadcrumbs,
		selectProductList: state => state.productList,
	},
});

export const {
	/**
	 * Сбросить "крошки"
	 */
	resetBreadcrumbs,
	/**
	 * Очистить список товаров
	 */
	resetProductList,
	/**
	 * Установить данные товара в "крошки"
	 */
	setProduct,
	/**
	 * Установить список товаров
	 */
	setProductList
} =	catalogSlice.actions;

export const {
	/**
	 * Количество "крошек" в списке
	 */
	selectCountSections,
	/**
	 * "Крошки" (возможные значения)
	 */
	selectBreadcrumbs,
	/**
	 * Список товаров
	 */
	selectProductList,
} = catalogSlice.selectors;

export default catalogSlice.reducer;
