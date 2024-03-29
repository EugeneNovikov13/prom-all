import * as yup from 'yup';
import { FormSchema, IRegistrationForm } from '../types';

/**
 * yup-схема формы регистрации
 */
export const registrationFormSchema = yup.object().shape<FormSchema<IRegistrationForm>>({
	login: yup.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверный логин. Минимум 3 символа')
		.max(30, 'Неверный логин. Максимум 30 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w@$^&#%!"№;:?*()_'`~.,|<>=]+$/,
			'Допускаются только латинские буквы, цифры и символы @$^&#%!"№;:?*()_\'`~.,|<>=',
		)
		.min(6, 'Неверный пароль. Минимум 6 символов')
		.max(30, 'Неверный пароль. Максимум 30 символов'),
	passwordConfirm: yup
		.string()
		.required('Заполните пароль')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
	name: yup
		.string()
		.required('Заполните имя')
		.matches(/^[A-Za-zА-Яа-я ]+$/, 'Допускаются только буквы и пробел')
		.max(50, 'Максимум 50 символов'),
	organization: yup.string()
		.required('Заполните название организации')
		.max(50, 'Максимум 50 символов'),
	email: yup
		.string()
		.required('Заполните адрес электронной почты')
		.email('Должен быть правильный адрес электронной почты'),
	phone: yup
		.string()
		.required('Введите контактный номер телефона')
		.matches(/^[0-9()\-+, ]+$/, 'Допускаются только цифры, пробел и знаки ( ) , - +')
		.min(6, 'Минимум 6 символов')
		.max(30, 'Максимум 30 символов'),
});
