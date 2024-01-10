import { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from './store/reducers';
import {
	About,
	Administration,
	Authorization,
	Catalog,
	Contacts,
	Documents,
	Main,
	Product,
	Registration,
	Sections,
} from './pages';
import { Error, Footer, Header, Modal } from './components';
import { ERROR } from './constants';
import styled from 'styled-components';
import axios from 'axios';
import { selectUserData } from './store/selectors';

const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 1920px;
	min-height: 100%;
	margin: 0 auto;
	background-color: #fff;
`;

const Page = styled.div``;

export const PromAll = () => {
	const dispatch = useDispatch();

	const admin = useSelector(selectUserData);
	console.log(admin);

	useLayoutEffect(() => {
		const getAdmin = async () => {
			try {
				const response = await axios.get(`/users`);

				if (response.data.error) {
					dispatch(userSlice.actions.userFetchingError(response.data.error));
					return;
				}
				dispatch(userSlice.actions.userFetchingSuccess(response.data));
			} catch (e) {
				dispatch(userSlice.actions.userFetchingError(e.response.data));
			}
		};
		getAdmin();
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/catalog" element={<Catalog />}>
						<Route path="section/:id" element={<Sections />}></Route>
						<Route path="product/:id" element={<Product />}></Route>
					</Route>
					<Route path="/documents" element={<Documents />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/contacts" element={<Contacts />}></Route>
					<Route path="/registartion" element={<Registration />}></Route>
					<Route path="/authorization" element={<Authorization />}></Route>
					<Route path="/administration" element={<Administration />}></Route>
					<Route
						path="*"
						element={<Error error={ERROR.PAGE_NOT_EXIST} />}
					></Route>
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
