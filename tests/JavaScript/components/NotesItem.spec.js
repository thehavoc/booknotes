import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NotesItem from '../../../resources/assets/js/components/NotesItem.vue';
import notesModule from '../../../resources/assets/js/store/modules/notes.js';
import moxios from 'moxios';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';

const localVue = createLocalVue();

localVue.use(Vuex);

describe ('NotesItem', () => {
	let wrapper;
	let store;
	let apiRoutes;

	beforeEach (() => {
		moxios.install();

		apiRoutes = new ApiRoutes();

		store = new Vuex.Store({
			state: {},
			modules: {
				notes: notesModule
			}
		});		

		wrapper = shallow(NotesItem, { 
			store, 
			localVue,
			propsData: {
				note: exampleNote
			}
		});
	});

	it ('shows the note', () => {
		expect(wrapper.html()).toContain(exampleNote.content);
	});

	afterEach (() => {
		moxios.uninstall();
	});

	let exampleNote = {
		id: 2,
		content: 'Test note 2',
		book: 'Book name 2',
		created_at: '2018-02-17 00:00:00'			
	}	
});