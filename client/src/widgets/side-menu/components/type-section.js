import { Img } from '../../../components';
import { Button } from '../../../features';
import { ReactComponent as BigCircle } from '../assets/big-circle.svg';
import styled from 'styled-components';

const TypeSectionContainer = ({ className, id, title, isOpen, buttonStyleProps }) => {
	return (
		<li className={className}>
			<Button
				{...buttonStyleProps}
				background={isOpen ? '#FFD4BC' : 'transparent'}
				padding={'6px 16px 6px 24px'}
				isDisable={isOpen}
				link={`/catalog/section/${id}`}
			>
				<div className="type-button-content">
					<Img
						SvgIconComponent={BigCircle}
						maxWidth="16px"
						maxHeight="16px"
						fill={'#FF7F00'}
					/>
					<span className="type-title">{title}</span>
					{/*TODO доделать получение количества товаров в категории*/}
					<span>100+</span>
				</div>
			</Button>
		</li>
	);
};

export const TypeSection = styled(TypeSectionContainer)`
	width: 100%;
	display: flex;
	align-items: center;
	align-self: stretch;
	border-radius: 100px;
	margin: 0 0 1px 0;
	padding: 0;

	& div.type-button-content {
		display: flex;
		align-items: center;
		gap: 8px;
		flex: 1 0 0;

		& span.type-title {
			flex: 1 0 0;
			text-align: left;
		}
	}

	& button {
		filter: none;
	}
`;
