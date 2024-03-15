import * as yup from 'yup';
import { FormSchema, IAccountForm } from '../types';

/**
 * yup-схема формы на странице Аккаунт
 */
export const accountFormSchema = yup.object().shape<FormSchema<IAccountForm>>({
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
