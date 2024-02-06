import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAsync } from '../../../../store/services';
import { changeLoading, setUser } from '../../../../store/reducers';
import { Button } from '../../../../features';
import { InfoSection } from './components/info-section';
import { Img } from '../../../../components';
import { ReactComponent as Account } from '../../assets/account.svg';
import { informationMenu } from '../../constants/information-menu';
import styled from 'styled-components';

const InfoContainerContainer = ({ className }) => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		dispatch(changeLoading(true));

		fetchUserAsync()
			.then(res => {
				if (res.data) {
					dispatch(setUser(res.data));
				}
				dispatch(changeLoading(false));
			})
			.catch((e) => {
				console.error(e);
				dispatch(changeLoading(false));
			});
	}, [dispatch]);

	const currentUserData = useSelector(state => state.appReducer.user);

	return (
		<div className={className}>
			{informationMenu.map(({ name, text, title, iconURL, href }, ind) => (
				<InfoSection
					key={ind}
					name={name}
					text={text}
					title={title}
					iconURL={iconURL}
					href={href}
				/>
			))}
			<Button
				link={currentUserData.id ? '/account' : '/authorization'}
				width="130px"
				height="48px"
				justifyContent="space-evenly"
				fontSize="20px"
				background={'var(--brand-orange)'}
				hoverBoxShadow={true}
				activeBackground={'var(--active-orange)'}
			>
				{currentUserData.id ? (
					<>
						<Img SvgIconComponent={Account} maxWidth="20px" />
						<span>Кабинет</span>
					</>
				) : (
					<span>Войти</span>
				)}
			</Button>
		</div>
	);
};

export const InfoContainer = styled(InfoContainerContainer)`
	display: flex;
	align-items: center;
	gap: 0;

	@media (max-width: 1000px) {
		gap: 8px;
	}
`;
