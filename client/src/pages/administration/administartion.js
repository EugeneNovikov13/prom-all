import { useFetchUserQuery } from '../../store/services';
import styled from 'styled-components';

const AdministrationContainer = ({ className }) => {
	//так получаем данные авторизации администратора после перезагрузки приложения
	//проверяется наличие и проверка токена
	useFetchUserQuery();

	return <></>;
};

export const Administration = styled(AdministrationContainer)``;
