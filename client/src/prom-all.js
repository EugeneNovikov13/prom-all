import { Route, Routes } from 'react-router-dom';
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
import { Error, Modal } from './components';
import { Footer, Header } from './widgets';
import { ERROR } from './constants';
import styled from 'styled-components';

const AppColumn = styled.div`
	width: 100%;
	min-height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding-bottom: 16px;
	background-color: #1a1d22;
	overflow: hidden;
`;

const Page = styled.div`
	width: 100%;
	min-height: 60vh;
	padding: 112px 0 0;

	@media screen and (max-width: 1020px) {
		padding: 209px 0 0;
	}

	@media screen and (max-width: 450px) {
		padding: 261px 0 0;
	}

	@media screen and (max-device-height: 1000px) {
		padding: 0;
	}
`;

export const PromAll = () => {
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
