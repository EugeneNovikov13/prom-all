import { ReactComponent as Select } from '../assets/down-arrow.svg';
import { Img } from '../../../components';
import { Button, Popup } from '../../../features';
import styled from 'styled-components';

const CrumbContainer = ({
	className,
	section,
	selectedId,
	selectedTitle,
	isOpen,
	onPopupToggle,
	onMouseEnter,
	onMouseLeave,
}) => {
	const crumbButtonStyleProps = {
		isDisable: !selectedId,
		width: '100%',
		height: '32px',
		padding: '0 10px',
		borderRadius: '100px',
		fontSize: '14px',
		color: '#E6E0E9',
		background: 'transparent',
		hoverBackground: 'rgba(232, 222, 248, 0.08)',
		activeBackground: 'rgba(232, 222, 248, 0.12)',
	};

	return (
		<li
			className={className}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className="crumb-container">
				<Img SvgIconComponent={Select} onClick={() => onPopupToggle(section)} />

				<Button
					{...crumbButtonStyleProps}
					link={selectedId ? `/catalog/section/${selectedId}` : ''}
				>
					{selectedTitle}
				</Button>

				{isOpen && (
					<Popup
						section={section}
					/>
				)}
			</div>
		</li>
	);
};

export const Crumb = styled(CrumbContainer)`
	height: 40px;
	flex: 1 1 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	border: 1px solid #938f99;

	&:last-of-type {
		border-radius: 0 100px 100px 0;
	}

	& div.crumb-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		padding: ${({ selectedId }) => (selectedId ? '0 24px 0 12px' : '0 12px')};

		& svg {
			width: 18px;
			height: 18px;

			&:hover {
				cursor: pointer;
			}

			@media screen and (max-width: 1200px) {
				display: none;
			}
		}
	}
`;
