import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../components';
import searchLoup from './assets/search-loup.svg';
import styled from 'styled-components';

const SearchContainer = ({ className }) => {
	const inputRef = useRef(null);

	const navigate = useNavigate();

	const [value, setValue] = useState('');

	const onKeyDown = (e, text) => {
		if (e.key === 'Enter') {
			onSearchHandler(e, text);
		}
	};

	const onSearchHandler = (e, text) => {
		if (text) {
			navigate(`/catalog/search?title=${text}`);
			setValue('');
			inputRef.current.blur();
		}
	};

	return (
		<search className={className}>
			<input
				ref={inputRef}
				type="search"
				name="product_search"
				placeholder="Поиск"
				autoComplete="off"
				value={value}
				onChange={({ target }) => setValue(target.value)}
				onKeyDown={e => onKeyDown(e, value)}
			/>
			<Icon width="24px" iconSrc={searchLoup}></Icon>
		</search>
	);
};

export const Search = styled(SearchContainer)`
	position: relative;
	max-width: 340px;
	min-height: 47px;
	flex: 1 0 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid rgba(23, 23, 23, 0);
	border-radius: 23px;
	transition:
		flex 0.5s ease-out,
		width 0.5s ease-out;

	&:hover {
		background: #2b2930;
		flex: 2 0 0;
		cursor: pointer;
	}

	@media screen and (max-width: 950px) {
		width: 190px;
		margin: auto;

		&:hover {
			flex: 1 0 0;
			width: 340px;
		}
	}

	& input {
		width: 100%;
		height: 45px;
		padding: 0 50px 1px;
		border-radius: 23px;
		outline: none;
		border: none;
		background: transparent;
		font-family: Inter, sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		color: #cac4d0;
		transition: width 0.5s ease-out;

		@media (max-width: 1150px) and (min-width: 950px) {
			padding: 0 1vw 1px 50px;
		}

		&::-webkit-input-placeholder {
			text-indent: 0;
			transition: text-indent 0.5s ease;
		}

		&::-moz-placeholder {
			text-indent: 0;
			transition: text-indent 0.5s ease;
		}

		&:-moz-placeholder {
			text-indent: 0;
			transition: text-indent 0.5s ease;
		}

		&:-ms-input-placeholder {
			text-indent: 0;
			transition: text-indent 0.5s ease;
		}

		&:focus::-webkit-input-placeholder {
			text-indent: -350px;
			transition: text-indent 0.5s ease;
		}

		&:focus::-moz-placeholder {
			text-indent: -350px;
			transition: text-indent 0.5s ease;
		}

		&:focus:-moz-placeholder {
			text-indent: -350px;
			transition: text-indent 0.5s ease;
		}

		&:focus:-ms-input-placeholder {
			text-indent: -350px;
			transition: text-indent 0.5s ease;
		}

		&:hover {
			background: #2b2930;
		}

		&::placeholder {
			text-align: center;
			color: #cac4d0;
		}

		&:focus {
			width: max-content;
			color: var(--light);
			padding: 0 50px 1px 30px;
			background: #2b2930;

			& ~ img {
				left: 290px;
			}
		}

		&::-webkit-search-cancel-button {
			cursor: pointer;
		}
	}

	& img {
		position: absolute;
		left: 25px;
		transition: left 0.5s ease-out;
	}
`;
