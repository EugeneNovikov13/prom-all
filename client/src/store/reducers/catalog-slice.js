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
	isProductCards: false,
	cards: [],
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
		setCards(state, action) {
			state.cards = action.payload.data;
			state.isProductCards = action.payload.isProductCards;
		},
		resetCards(state) {
			state.cards = initialState.cards;
			state.isProductCards = initialState.isProductCards;
		},
		resetBreadcrumbs() {
			return initialState;
		},
	},
});

export const { resetBreadcrumbs, resetCards, setProduct, setCards } =
	catalogSlice.actions;

export default catalogSlice.reducer;
