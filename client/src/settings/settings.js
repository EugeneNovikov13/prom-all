import { promoSliderConfig } from './promo-slider-config';
import { quickOrderFormSchema } from './quick-order-form-schema';
import { brandSliderConfig } from './brand-slider-config';
import { productSliderConfig } from './product-slider-config';
import { organizationData } from './organization-data';

export const SETTINGS = {
	ORGANIZATION_DATA: organizationData,
	CATEGORY_CARD_CLOSE_DELAY: 500,
	BREADCRUMBS_MENU_CLOSE_DELAY: 300,
	OFFICE_MAP_SRC:
		'https://yandex.ru/map-widget/v1/?um=constructor%3A8a9b50811b19fb9391d41d4c3a5d9ea59b21581b3430f479f4aece1be009e37c&amp;source=constructor',
	BRAND_SLIDER_CONFIG: brandSliderConfig,
	PROMO_SLIDER_CONFIG: promoSliderConfig,
	PRODUCT_SLIDER_CONFIG: productSliderConfig,
	QUICK_ORDER_FROM_SCHEMA: quickOrderFormSchema,
};
