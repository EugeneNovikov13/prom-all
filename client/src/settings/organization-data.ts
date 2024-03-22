/**
 * Данные организации
 */
export type OrganizationData = {
	/**
	 * Номер телефона
	 */
	phone: string;
	/**
	 * Адрес электронной почты
	 */
	email: string[];
	/**
	 * Адрес офиса
	 */
	officeAddress: string;
	/**
	 * Адрес склада
	 */
	stockAddress: string;
	/**
	 * Почтовый адрес
	 */
	mailAddress: string;
	/**
	 * Время работы
	 */
	workTime: string;
	/**
	 * Год основания
	 */
	foundationYear: number;
};

/**
 * Основные данные организации
 */
export const organizationData: OrganizationData = {
	phone: '+7 (473) 247-00-80',
	email: ['info@prom-all.com', 'info@prom-all.ru', 'office@prom-all.ru'],
	officeAddress: 'Россия, г. Воронеж, ул. Красных Зорь, 38',
	stockAddress: 'Россия, г. Воронеж, ул. Электросигнальная, 19в',
	mailAddress: '394019, Россия, г. Воронеж, а/я 5, «Промышленный Альянс»',
	workTime: 'Пн-Пт 8:00-17:00',
	foundationYear: 2008,
};
