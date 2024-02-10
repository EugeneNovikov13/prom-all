import { ReactComponent as Heaters } from './assets/calorifer.svg';
import { ReactComponent as Crane } from './assets/crane-equipment.svg';
import { ReactComponent as Motors } from './assets/electro-motors.svg';
import { ReactComponent as Fittings } from './assets/fittings.svg';
import { ReactComponent as Gpo } from './assets/gpo.svg';
import { ReactComponent as High } from './assets/high-voltage.svg';
import { ReactComponent as Nva } from './assets/nva.svg';
import { ReactComponent as Pumps } from './assets/pumps.svg';
import { ReactComponent as Gears } from './assets/reductors.svg';
import { ReactComponent as Fans } from './assets/ventilators.svg';

export const catalogList = [
	{
		id: '658aa910cd634ef7ce80f1c6',
		title: 'Электрощитовое оборудование',
		image: High,
		subcategories: [
			{
				id: '658aa910cd634ef7ce80f1c7',
				title: 'Вводно-распределительные устройства ВРУ',
				shortTitle: 'ВРУ',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электрощитовое оборудование/Вводно-распределительные устройства ВРУ.jpg',
			},
			{
				id: '658aa910cd634ef7ce80f1c8',
				title: 'Панели',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электрощитовое оборудование/Панели серии ЩО-70-1.jpg',
			},
			{
				id: '658aa910cd634ef7ce80f1c9',
				title: 'Пульты',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электрощитовое оборудование/Пульты управления серии ПУ.jpg',
			},
			{
				id: '658aa910cd634ef7ce80f1ca',
				title: 'Шкафы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электрощитовое оборудование/Шкафы распределительные ПР8501.jpg',
			},
			{
				id: '658aa910cd634ef7ce80f1cb',
				title: 'Щиты',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электрощитовое оборудование/Щитки осветительные серии ОЩ.jpg',
			},
			{
				id: '658aa910cd634ef7ce80f1cc',
				title: 'Ящики управления',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электрощитовое оборудование/Ящики управления Я5000.jpg',
			},
		],
	},
	{
		id: '658aac81cd634ef7ce80f1ce',
		title: 'Низковольтная аппаратура',
		image: Nva,
		subcategories: [
			{
				id: '658aac81cd634ef7ce80f1cf',
				title: 'Контакторы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Контакторы/Kонтакторы электромагнитные КТ 6600.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1d0',
				title: 'Автоматические выключатели',
				shortTitle: 'Авт. выключатели',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Автоматы/ВА57-35, ВА57Ф35 на токи 16…250 А.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1d2',
				title: 'Посты кнопочные, кнопки',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Посты/ВЫКЛЮЧАТЕЛИ КНОПОЧНЫЕ СЕРИИ КЕ.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1dc',
				title: 'Пускатели электромагнитные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Пускатели/Магнитные пускатели серии ПМЕ.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1d3',
				title: 'Реле',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле указательное/Реле электромагнитные промежуточно-указательные РЭПУ-12М.jpg',
				types: [
					{
						id: '658aac81cd634ef7ce80f1d4',
						title: 'Реле времени',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле времени/Реле времени многофункциональное ВЛ-70Н1.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1d5',
						title: 'Реле контроля скорости',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле контроля скорости/РЕЛЕ КОНТРОЛЯ СКОРОСТИ РКС-М.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1d6',
						title: 'Реле контроля фаз',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле контроля фаз/РЕЛЕ КОНТРОЛЯ ТРЕХФАЗНОГО НАПРЯЖЕНИЯ ЕЛ-11Е, ЕЛ-12Е, ЕЛ-13Е.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1d7',
						title: 'Реле напряжения',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле напряжения/РЕЛЕ НАПРЯЖЕНИЯ РЭВ-821, РЭВ-825.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1d8',
						title: 'Фотореле',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Фотореле/ФОТОРЕЛЕ ФР-7Е, ФР-7Н.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1d9',
						title: 'Реле промежуточные',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле промежуточное/РЕЛЕ ПРОМЕЖУТОЧНЫЕ СЕРИИ РЭП34.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1da',
						title: 'Реле тока',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле тока/РЕЛЕ РЭО-401.jpg',
					},
					{
						id: '658aac81cd634ef7ce80f1db',
						title: 'Реле указательные',
						image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Реле/Реле указательное/РЕЛЕ УКАЗАТЕЛЬНОЕ РУ-21.jpg',
					},
				],
			},
			{
				id: '658aac81cd634ef7ce80f1d1',
				title: 'Выключатели конечные (путевые)',
				shortTitle: 'Выключатели конечные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Выключатели/ВК-200, ВК300.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1dd',
				title: 'Пакетные выключатели',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Пакетные выключатели/ПАКЕТНЫЕ ВЫКЛЮЧАТЕЛИ И ПЕРЕКЛЮЧАТЕЛИ СЕРИИ ПВ, ПП.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1de',
				title: 'Датчики, выключатели бесконтактные',
				shortTitle: 'Датчики',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Датчики/ДАТЧИК БЕСКОНТАКТНЫЙ БВК-421 … БВК-424, БВК-451.jpg',
			},
			{
				id: '658aac81cd634ef7ce80f1df',
				title: 'Светосигнальная арматура',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Низковольтная аппаратура/Светосигнальная арматура/СИГНАЛЬНАЯ АРМАТУРА АЕ И АМЕ.jpg',
			},
		],
	},
	{
		id: '658aad8ecd634ef7ce80f1e1',
		title: 'Редукторы',
		image: Gears,
		subcategories: [
			{
				id: '658aad8ecd634ef7ce80f1e2',
				title: 'Мотор редукторы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Редукторы/Мотор-редукторы/Мотор-редукторы 3МП.jpg',
			},
			{
				id: '658aad8ecd634ef7ce80f1e3',
				title: 'Редукторы UNITdrive',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Редукторы/Редукторы UNITdrive/NMRV.jpg',
			},
			{
				id: '658aad8ecd634ef7ce80f1e4',
				title: 'Редукторы цилиндрические',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Редукторы/Редукторы цилиндрические/Редукторы типа 1Ц2У.jpg',
			},
			{
				id: '658aad8ecd634ef7ce80f1e5',
				title: 'Редукторы червячные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Редукторы/Редукторы червячные/Редуктор червячный Ч-160.jpg',
			},
		],
	},
	{
		id: '658aaf54cd634ef7ce80f1e7',
		title: 'Запорная арматура',
		image: Fittings,
		subcategories: [
			{
				id: '658aaf54cd634ef7ce80f1e8',
				title: 'Вентили, задвижки',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Запорная арматура/Вентили, задвижки/Задвижки.jpg',
			},
			{
				id: '658aaf54cd634ef7ce80f1e9',
				title: 'Запорные устройства указателей уровня',
				shortTitle: 'Запорные устройства',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Запорная арматура/Запорные устройства/Запорные устройства указателей уровня.jpg',
			},
			{
				id: '658aaf54cd634ef7ce80f1ea',
				title: 'Клапаны',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Запорная арматура/Клапаны/Клапаны предохранительные.jpg',
			},
			{
				id: '658aaf54cd634ef7ce80f1eb',
				title: 'Конденсатоотводчики',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Запорная арматура/Конденсатоотводчики/Конденсатоотводчики.jpg',
			},
			{
				id: '658aaf54cd634ef7ce80f1ec',
				title: 'Краны',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Запорная арматура/Краны/Краны шаровые.jpg',
			},
		],
	},
	{
		id: '658ab0abcd634ef7ce80f1ee',
		title: 'Насосы',
		image: Pumps,
		subcategories: [
			{
				id: '658ab0abcd634ef7ce80f1ef',
				title: 'Насосы консольные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы консольные.jpg',
			},
			{
				id: '658ab0abcd634ef7ce80f1f5',
				title: 'Насосы сточно-массовые',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы сточно-массовые.jpg',
			},
			{
				id: '658ab0abcd634ef7ce80f1f1',
				title: 'Насосы горизонтальные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы горизонтальные.jpg',
			},
			{
				id: '658ab0abcd634ef7ce80f1f2',
				title: 'Насосы шестерёнчатые',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы шестерёнчатые.jpg',
			},
			{
				id: '658ab0abcd634ef7ce80f1f3',
				title: 'Насосы вихревые',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы вихревые.jpg',
			},
			{
				id: '658ab0abcd634ef7ce80f1f4',
				title: 'Центробежно-вихревые',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы центробежно-вихревые.jpg',
			},
			{
				id: '658ab0abcd634ef7ce80f1f0',
				title: 'Консольно-моноблочные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Насосы/Насосы консольно-моноблочные.jpg',
			},
		],
	},
	{
		id: '658ab118cd634ef7ce80f1f7',
		title: 'Электродвигатели',
		image: Motors,
		subcategories: [
			{
				id: '658ab118cd634ef7ce80f1f8',
				title: 'Электродвигатель АИР',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электродвигатели/Электродвигатель АИР.jpg',
			},
			{
				id: '658ab118cd634ef7ce80f1f9',
				title: 'Электродвигатели крановые серии МTF, MTH',
				shortTitle: 'Крановые серии МTF, MTH',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электродвигатели/Электродвигатели крановые серии МTF, MTH.jpg',
			},
			{
				id: '658ab118cd634ef7ce80f1fa',
				title: 'Взрывозащищённые АИМ',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Электродвигатели/Электродвигатель АИМ.jpg',
			},
		],
	},
	{
		id: '658ab195411e16f5136ee8bd',
		title: 'Вентиляционное оборудование',
		image: Fans,
		subcategories: [
			{
				id: '6589b0067d4f83f1dfcaa231',
				title: 'Крышные вентиляторы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Вентиляторы/ВКР N 4-12,5.jpg',
			},
			{
				id: '6589b0067d4f83f1dfcaa232',
				title: 'Осевые вентиляторы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Вентиляторы/ВО-06-300.jpg',
			},
			{
				id: '6589b0067d4f83f1dfcaa233',
				title: 'Пылевые вентиляторы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Вентиляторы/ВРП115-45 N 5-8.jpg',
			},
			{
				id: '6589b0067d4f83f1dfcaa234',
				title: 'Радиальные вентиляторы',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Вентиляторы/В-Ц14-46 NN2-8.jpg',
			},
		],
	},
	{
		id: '658ab1e8cd634ef7ce80f1fc',
		title: 'Калориферы и воздухонагреватели',
		image: Heaters,
		subcategories: [
			{
				id: '658ab1e8cd634ef7ce80f1fd',
				title: 'Калориферы КСК',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Калориферы/Калориферы КСк.jpg',
			},
		],
	},
	{
		id: '658ab25ccd634ef7ce80f1ff',
		title: 'Грузоподьемное оборудование',
		image: Gpo,
		subcategories: [
			{
				id: '658ab25ccd634ef7ce80f200',
				title: 'Тали ручные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Грузоподъёмное оборудование/Тали ручные/ТРЧС.jpg',
			},
			{
				id: '658ab25ccd634ef7ce80f201',
				title: 'Тали электрические',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Грузоподъёмное оборудование/Тали электрические/ТЭ-200 гп 2 т.jpg',
			},
		],
	},
	{
		id: '658ab3b3cd634ef7ce80f203',
		title: 'Крановое оборудование',
		image: Crane,
		subcategories: [
			{
				id: '658ab3b3cd634ef7ce80f204',
				title: 'Толкатели электрогидравлические',
				shortTitle: 'Электрогидротолкатели',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Крановое оборудование/Толкатели электрогидравлические типов ТЭ-30, ТЭ-50, ТЭ-80.jpg',
			},
			{
				id: '658ab3b3cd634ef7ce80f205',
				title: 'Тормоза колодочные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Крановое оборудование/Тормоз колодочный ТК.jpg',
			},
			{
				id: '658ab3b3cd634ef7ce80f206',
				title: 'Электромагниты тормозные',
				image: 'https://s3.timeweb.cloud/b6e41a5d-f8863768-24e5-49bd-8209-4eaa7b7b6962/Крановое оборудование/Электромагниты тормозные переменного тока серии МО.jpg',
			},
		],
	},
];
