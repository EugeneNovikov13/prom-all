import { ReactComponent as Select } from '../assets/down-arrow.svg';
import { Img } from '../../../components';
import { Button, Popup } from '../../../features';
import styled from 'styled-components';
import { crumbButtonStyleProps } from '../config/crumb-button-style-props';
import { FC } from 'react';

interface CrumbProps {
	className?: string;
	section: string;
	selectedId: string;
	selectedTitle: string;
	isOpen: boolean;
	onPopupToggle: (section: string) => void;
	onMouseEnter: (isOpenedCrumb: boolean) => void;
	onMouseLeave: () => void;
}

const CrumbContainer: FC<CrumbProps> = ({
	className,
	section,
	selectedId,
	selectedTitle,
	isOpen,
	onPopupToggle,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<li
			className={className}
			onMouseEnter={() => onMouseEnter(isOpen)}
			onMouseLeave={onMouseLeave}
		>
			<div className="crumb-container">
				<Img SvgIconComponent={Select} onClick={() => onPopupToggle(section)} />

				<Button
					{...crumbButtonStyleProps}
					isDisable={!selectedId}
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
