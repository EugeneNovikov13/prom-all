import { ReactComponent as home } from '../assets/home.svg';
import { ReactComponent as catalog } from '../assets/catalog.svg';
import { ReactComponent as documents } from '../assets/documents.svg';
import { ReactComponent as about_us } from '../assets/about_us.svg';
import { ReactComponent as cell } from '../assets/cell.svg';
import React from 'react';

interface IMenuList {
	title: string;
	link: string;
	iconURL: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const menuList: IMenuList[] = [
	{ title: 'Главная', link: '/', iconURL: home },
	{ title: 'Каталог', link: '/catalog', iconURL: catalog },
	{ title: 'Документы', link: '/documents', iconURL: documents },
	{ title: 'О нас', link: '/about', iconURL: about_us },
	{ title: 'Контакты', link: '/contacts', iconURL: cell },
];
