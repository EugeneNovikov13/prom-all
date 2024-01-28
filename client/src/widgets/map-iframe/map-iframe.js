import styled from 'styled-components';

const MapIFrameContainer = ({ className, title, width, height, src }) => {
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
