import { useDispatch, useSelector } from 'react-redux';
import { appSlice } from '../../redux/reducers';
import styled from 'styled-components';

const MainContainer = ({ className }) => {
	const { wasLogin } = useSelector(state => state.appReducer);
	const { setUser } = appSlice.actions;
	const dispatch = useDispatch();

	return (
		<>
			<button onClick={() => dispatch(setUser())}>login</button>
			<p>{wasLogin ? 'Зарегистрирован' : 'Не зарегистрирован'}</p>
		</>
	);
};

export const Main = styled(MainContainer)``;
