export const copyTextToClipboard = (text) => {
	navigator.clipboard.writeText(text)
		.then(() => {
			console.log('Текст скопирован в буфер обмена');
		})
		.catch(err => {
			console.error('Ошибка при копировании текста: ', err);
		});
}
