import { motion } from 'framer-motion';
import { Button } from '../../button/button';
import styled from 'styled-components';

const PopupItemSectionsContainer = ({
	className,
	id,
	title,
	index,
	section,
	onPopupSectionClick,
	listVariants,
}) => {
	return (
		<motion.div
			className={className}
			variants={listVariants}
			initial="hidden"
			animate="visible"
			custom={index}
		>
			<Button
				link={`/catalog/section/${id}`}
				justifyContent="flex-start"
				width="100%"
				height="40px"
				borderRadius="0"
				fontSize="14px"
				color={'#E6E0E9'}
				background={'transparent'}
				onClick={() => onPopupSectionClick(id, title, section)}
			>
				<span>{title}</span>
			</Button>
		</motion.div>
	);
};

export const PopupItemSections = styled(PopupItemSectionsContainer)`
	width: 100%;
	height: 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0;

	&:not(:last-of-type) {
		border-bottom: 1px solid #f8eede;
	}

	&:last-of-type {
		border-radius: 0 0 20px 20px;
	}

	&:hover {
		background: rgba(232, 222, 248, 0.08);
	}

	&:active {
		background: rgba(232, 222, 248, 0.12);
	}

	& a {
		width: 100%;
	}

	& span {
		padding: 0 10px;
		text-align: left;
	}
`;
