import * as yup from 'yup';

export const quickOrderFormSchema = yup.object().shape({
	name: yup
		.string()
		.required('Заполните имя')
		.matches(/^[A-Za-zА-Яа-я ]+$/, 'Допускаются только буквы и пробел')
		.max(30, 'Максимум 50 символов'),
	organization: yup.string().required('Заполните название организации'),
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
	order: yup.string().required('Заполните текст заявки'),
});
