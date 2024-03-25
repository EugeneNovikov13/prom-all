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
import { ObjectSchema } from 'yup';
import { IAccountForm, IAuthorizationForm, IQuickOrderForm, IRegistrationForm } from '../types';

/**
 * Настройки приложения
 */
interface ISettings {
	/**
	 * Базовый URL
	 */
	API_URL: string;
	/**
	 * Данные организации
	 */
	ORGANIZATION_DATA: OrganizationData;
	/**
	 * Таймаут закрытия карточки после наступления события mouseleave
	 */
	CATEGORY_CARD_CLOSE_DELAY: number;
	/**
	 * Таймаут закрытия popup-меню в breadcrumbs
	 */
	BREADCRUMBS_MENU_CLOSE_DELAY: number;
	/**
	 * URL карты местоположения офиса
	 */
	OFFICE_MAP_SRC: string;
	/**
	 * URL карты местоположения склада
	 */
	STOCK_MAP_SRC: string;
	/**
	 * Настройки слайдера партнёров
	 */
	BRAND_SLIDER_CONFIG: Options;
	/**
	 *	Настройки слайдера карт
	 */
	MAP_SLIDER_CONFIG: Options;
	/**
	 * Настройки слайдера фотографий товара
	 */
	PRODUCT_SLIDER_CONFIG: Options;
	/**
	 * Настройки слайдера промо-акций
	 */
	PROMO_SLIDER_CONFIG: Options;
	/**
	 * Схема формы быстрого заказа
	 */
	QUICK_ORDER_FORM_SCHEMA: ObjectSchema<IQuickOrderForm>;
	/**
	 * Схема формы авторизации
	 */
	AUTHORIZATION_FORM_SCHEMA: ObjectSchema<IAuthorizationForm>;
	/**
	 * Схема формы регистрации
	 */
	REGISTRATION_FORM_SCHEMA: ObjectSchema<IRegistrationForm>;
	/**
	 * Схема формы изменения данных аккаунта
	 */
	ACCOUNT_FORM_SCHEMA: ObjectSchema<IAccountForm>;
}

export const SETTINGS: ISettings = {
	API_URL: '',
	ORGANIZATION_DATA: organizationData,
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
