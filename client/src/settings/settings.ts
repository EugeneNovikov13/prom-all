import { brandSliderConfig } from './brand-slider-config';
import { mapsSliderConfig } from './maps-slider-config';
import { OrganizationData, organizationData } from './organization-data';
import { productSliderConfig } from './product-slider-config';
import { promoSliderConfig } from './promo-slider-config';
import { quickOrderFormSchema } from './quick-order-form-schema';
import { registrationFormSchema } from './registration-form-schema';
import { authorizationFormSchema } from './authorization-form-schema';
import { accountFormSchema } from './account-form-schema';
import { Options } from '@splidejs/react-splide';
import { Schema } from 'yup';

interface ISettings {
	API_URL: string;
	ORGANIZATION_DATA: OrganizationData;
	TIMEOUT_AFTER_QUICK_ORDER_SENDING: number;
	CATEGORY_CARD_CLOSE_DELAY: number;
	BREADCRUMBS_MENU_CLOSE_DELAY: number;
	OFFICE_MAP_SRC: string;
	STOCK_MAP_SRC: string;
	BRAND_SLIDER_CONFIG: Options;
	MAP_SLIDER_CONFIG: Options;
	PRODUCT_SLIDER_CONFIG: Options;
	PROMO_SLIDER_CONFIG: Options;
	QUICK_ORDER_FORM_SCHEMA: Schema;
	AUTHORIZATION_FORM_SCHEMA: Schema;
	REGISTRATION_FORM_SCHEMA: Schema;
	ACCOUNT_FORM_SCHEMA: Schema;
}

export const SETTINGS: ISettings = {
	API_URL: '',
	ORGANIZATION_DATA: organizationData,
	TIMEOUT_AFTER_QUICK_ORDER_SENDING: 3000,
	CATEGORY_CARD_CLOSE_DELAY: 500,
	BREADCRUMBS_MENU_CLOSE_DELAY: 300,
	OFFICE_MAP_SRC:
		'https://yandex.ru/map-widget/v1/?um=constructor%3A8a9b50811b19fb9391d41d4c3a5d9ea59b21581b3430f479f4aece1be009e37c&amp;source=constructor',
	STOCK_MAP_SRC:
		'https://yandex.ru/map-widget/v1/?um=constructor%3A0cd3a50c5d9541db526c314763c3f3a5f6458ccf3211a767f70d46ff48f9a850&amp;source=constructor',
	BRAND_SLIDER_CONFIG: brandSliderConfig,
	MAP_SLIDER_CONFIG: mapsSliderConfig,
	PRODUCT_SLIDER_CONFIG: productSliderConfig,
	PROMO_SLIDER_CONFIG: promoSliderConfig,
	QUICK_ORDER_FORM_SCHEMA: quickOrderFormSchema,
	AUTHORIZATION_FORM_SCHEMA: authorizationFormSchema,
	REGISTRATION_FORM_SCHEMA: registrationFormSchema,
	ACCOUNT_FORM_SCHEMA: accountFormSchema,
};