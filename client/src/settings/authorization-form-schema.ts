import * as yup from 'yup';
import { FormSchema, IAuthorizationForm } from '../types';

/**
 * yup-схема формы авторизации
 */
export const authorizationFormSchema = yup.object().shape<FormSchema<IAuthorizationForm>>({
	login: yup.string()
		.required('Заполните логин'),
	password: yup
		.string()
		.required('Заполните пароль')
});
