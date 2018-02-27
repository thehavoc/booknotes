let exampleNotes = [
	{
		id: 1,
		content: 'Test note',
		book: 'Book name',
	},
	{
		id: 2,
		content: 'Test note 2',
		book: 'Book name 2',				
	}
];

let exampleNote = {
	id: 2,
	content: 'Test note 2',
	book: 'Book name 2',
	created_at: '2018-02-17 00:00:00'			
}

let type = (selector, text, wrapper) => {

	let input = wrapper.find(selector);

	input.element.value = text;
	input.trigger('input');
}

let click = (selector, wrapper) => {
	wrapper.find(selector).trigger('click');
}

export { exampleNote, click, type, exampleNotes }