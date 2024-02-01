import { Route, Routes } from 'react-router-dom';
import { Page } from './page-component/page';
import {
	About,
	Administration,
	Authorization,
	Catalog,
	Contacts,
	Documents,
	FoundProducts,
	Main,
	Product,
	Registration,
	Sections,
} from './pages';
import { Error, Loader, Modal } from './components';
import { Footer, Header } from './widgets';
import { ERROR } from './constants';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const AppColumn = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding-bottom: 16px;
	background-color: #1a1d22;
	overflow: hidden;
`;

export const PromAll = () => {
	const isLoading = useSelector(state => state.appReducer.isLoading);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/catalog" element={<Catalog />}>
						<Route path="section/:id" element={<Sections />}></Route>
						<Route path="product/:id" element={<Product />}></Route>
						<Route path="search" element={<FoundProducts />}></Route>
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
			{isLoading && <Loader />}
		</AppColumn>
	);
};
