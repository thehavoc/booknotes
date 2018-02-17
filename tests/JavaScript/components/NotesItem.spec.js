import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NotesItem from '../../../resources/assets/js/components/NotesItem.vue';
import NotesModule from '../../../resources/assets/js/store/modules/notes.js';
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
				notes: NotesModule
			}
		});		

		wrapper = shallow(NotesItem, { 
			store, 
			localVue
		});
	});

	it ('shows the note', () => {
		expect(wrapper.html()).toContain(exampleNote.description);
	});

	afterEach (() => {
		moxios.uninstall();
	});

	let exampleNote = {
		id: 2,
		description: 'Test note 2',
		book: 'Book name 2',				
	}	
});