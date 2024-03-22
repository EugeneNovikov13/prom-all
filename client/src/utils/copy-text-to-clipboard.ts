/**
 * Копировать текст в буфер обмена
 * @param text копируемый текст
 */
export const copyTextToClipboard = (text: string): void => {
	navigator.clipboard.writeText(text)
		.then(() => {
			console.log('Текст скопирован в буфер обмена');
		})
		.catch(err => {
			console.error('Ошибка при копировании текста: ', err);
		});
}
