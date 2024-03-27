import React from 'react';

/**
 * Преимущества, заявленные компанией
 */
export interface IAdvantage {
	/**
	 * id преимущества
	 */
	id: string;
	/**
	 * Название преимущества
	 */
	title: string;
	/**
	 * Иконка преимущества
	 */
	image: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	/**
	 * Описание преимущества
	 */
	text: string;
}
