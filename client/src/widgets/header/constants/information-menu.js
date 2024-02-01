import { isTouchDevice } from '../../../utils';
import accessTime from '../assets/access_time.svg';
import email from '../assets/email.svg';
import cell from '../assets/cell.svg';
import { SETTINGS } from '../../../settings';

export const informationMenu = [
	{
		name: 'accessTime',
		text: SETTINGS.ORGANIZATION_DATA.workTime,
		title: 'Время работы (Москва)',
		iconURL: accessTime,
		href: '#top',
	},
	{
		name: 'contacts',
		text: SETTINGS.ORGANIZATION_DATA.email[0],
		title: 'Электронная почта',
		iconURL: email,
		href: `mailto:${SETTINGS.ORGANIZATION_DATA.email}`,
	},
	{
		name: 'contacts',
		text: SETTINGS.ORGANIZATION_DATA.phone,
		title: 'Контактный телефон',
		iconURL: cell,
		href: isTouchDevice ? `tel:${SETTINGS.ORGANIZATION_DATA.phone}` : '#top',
	},
];
