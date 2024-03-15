import * as yup from 'yup';
/**
 * yup-схема формы авторизации
 */
export const authorizationFormSchema = yup.object().shape({
    login: yup.string()
        .required('Заполните логин'),
    password: yup
        .string()
        .required('Заполните пароль')
});
