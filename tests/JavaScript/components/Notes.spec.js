import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Notes from '../../../resources/assets/js/components/Notes.vue';
import notesModule from '../../../resources/assets/js/store/modules/notes.js';
import moxios from 'moxios';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';

const localVue = createLocalVue();

localVue.use(Vuex);

describe ('Notes', () => {
	let wrapper;
	let store;
	let apiRoutes;

	beforeEach (() => {
		moxios.install();

		apiRoutes = new ApiRoutes();

		store = new Vuex.Store({
			state: {},
			modules: {
				notesModule
			}
		});		

		wrapper = shallow(Notes, { 
			store, 
			localVue
		});
	});


	it ('shows notes', (done) => {
		moxios.stubRequest(apiRoutes.getUrl('notes'), {
			status: 200,
			response: getNotes()
		});

		moxios.wait(() => {
			expect(wrapper.vm.notes).toHaveLength(getNotes().length);
			done();
		});
	});

	afterEach (() => {
		moxios.uninstall();
	});

	let getNotes = () => {
		return [
			{
				id: 1,
				title: 'Test note',
				book: 'Book name',
			},
			{
				id: 2,
				title: 'Test note 2',
				book: 'Book name 2',				
			}			
		];
	}
});