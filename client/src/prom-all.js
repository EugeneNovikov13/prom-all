import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoading } from './store/reducers';
import { Page } from './page-component/page';
import {
	About,
	Account,
	Administration,
	Authorization,
	AuthorizationSecondStep,
	Catalog,
	Contacts,
	Documents,
	FoundProducts,
	Main,
	Page404,
	Product,
	Registration,
	Sections,
} from './pages';
import { Loader } from './components';
import { Footer, Header } from './widgets';
import styled from 'styled-components';

const AppColumn = styled.div`
	position: relative;
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	padding-bottom: 16px;
	background-color: var(--main-background-color);
	overflow: hidden;
`;

export const PromAll = () => {
	const isLoading = useSelector(selectIsLoading);

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
					<Route path="/registration" element={<Registration />}></Route>
					<Route path="/authorization" element={<Authorization />}></Route>
					<Route
						path="/authorization-second-step"
						element={<AuthorizationSecondStep />}
					></Route>
					<Route path="/account" element={<Account />}></Route>
					<Route path="/administration" element={<Administration />}></Route>
					<Route
						path="*"
						element={<Page404 />}
					></Route>
				</Routes>
			</Page>
			<Footer />
			{isLoading && <Loader />}
		</AppColumn>
	);
};
