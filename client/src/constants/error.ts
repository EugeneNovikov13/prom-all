/**
 * Список нормальных ошибок
 */
export enum ERROR {
	ACCESS_DENIED = 'Доступ запрещён',
	PAGE_NOT_EXIST = 'Такая страница не существует',
	REQUEST_ERROR = 'Не удалось отправить запрос. Попробуйте снова или свяжитесь с нами по телефону.',
	SHOULD_LOGIN = 'Необходимо авторизоваться, чтобы войти',
	UNKNOWN_AUTH_ERROR = 'Неизвестная ошибка. Не удалось авторизоваться.',
	UNKNOWN_REG_ERROR = 'Неизвестная ошибка. Не удалось зарегистрироваться.',
	UNKNOWN_UPDATE_USER_ERROR = 'Неизвестная ошибка. Не удалось обновить данные.',
	UNKNOWN_LOGOUT_ERROR = 'Неизвестная ошибка. Не удалось выйти из профиля.',
}
