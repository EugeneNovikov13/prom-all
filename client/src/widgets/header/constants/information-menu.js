import accessTime from '../assets/access_time.svg';
import email from '../assets/email.svg';
import cell from '../assets/cell.svg';
import { SETTINGS } from '../../../settings';

export const informationMenu = [
	{
		text: SETTINGS.ORGANIZATION_DATA.workTime,
		title: 'Время работы (Москва). ',
		iconURL: accessTime,
	},
	{
		text: SETTINGS.ORGANIZATION_DATA.email[0],
		title: 'Электронная почта. ',
		iconURL: email,
	},
	{
		text: SETTINGS.ORGANIZATION_DATA.phone,
		title: 'Контактный телефон. ',
		iconURL: cell,
	},
];
