import styled from 'styled-components';
import { FC } from 'react';

interface MapIFrameProps {
	className?: string;
	title: string;
	width: string;
	height: string;
	src: string;
}

const MapIFrameContainer: FC<MapIFrameProps> = ({
	className,
	title,
	width,
	height,
	src,
}) => {
	return (
		<div className={className}>
			<iframe
				title={title}
				width={width}
				height={height}
				src={src}
				allowFullScreen
			></iframe>
		</div>
	);
};

export const MapIFrame = styled(MapIFrameContainer)`
	min-width: 340px;

	& iframe {
		border: none;
		border-radius: 20px;
	}
`;
