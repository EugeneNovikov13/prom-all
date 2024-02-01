import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	countSections: 1,
	breadcrumbs: {
		category: {
			selectedId: '',
			selectedTitle: 'Категория',
		},
		subcategory: {
			selectedId: '',
			selectedTitle: 'Подкатегория',
		},
		type: {
			selectedId: '',
			selectedTitle: 'Тип',
		},
		product: {
			selectedId: '',
			selectedTitle: 'Товар',
		},
	},
	productCards: [],
};

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCategory(state, action) {
			state.breadcrumbs.category = action.payload;
			state.breadcrumbs.subcategory = initialState.breadcrumbs.subcategory;
			state.breadcrumbs.type = initialState.breadcrumbs.type;
			state.breadcrumbs.product = initialState.breadcrumbs.product;
			state.countSections = 2;
		},
		setSubcategory(state, action) {
			state.breadcrumbs.subcategory = action.payload;
			state.breadcrumbs.type = initialState.breadcrumbs.type;
			state.breadcrumbs.product = initialState.breadcrumbs.product;
			state.countSections = 3;
		},
		setType(state, action) {
			state.breadcrumbs.type = action.payload;
			state.breadcrumbs.product = initialState.breadcrumbs.product;
			state.countSections = 4;
		},
		setProduct(state, action) {
			state.breadcrumbs.product = action.payload;
		},
		resetBreadcrumbs() {
			return initialState;
		},
		setProductCards(state, action) {
			state.productCards = action.payload;
		},
		resetProductCards(state) {
			state.productCards = initialState.productCards;
		},
	},
});

export const { resetBreadcrumbs, resetProductCards, setProduct, setProductCards } =
	catalogSlice.actions;

export default catalogSlice.reducer;
