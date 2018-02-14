import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import notes from '../../../resources/assets/js/store/modules/notes.js';
import moxios from 'moxios';
import expect from 'expect';
import apiRoutes from '../../../resources/assets/js/api/routes.js';

const localVue = createLocalVue();

localVue.use(Vuex);

describe ('Notes', () => {
	let wrapper;
	let store;
	let route;

	beforeEach (() => {
		moxios.install();

		store = new Vuex.Store({
			state: {},
			modules: {
				notes
			}
		});		

		wrapper = shallow(UserTasks, { 
			store, 
			localVue
		});
	});


	it ('shows notes', () => {
		maxios.stubRequest(apiRoutes.get('notes'), (done) => {
			status: 200,
			response: getNotes()
		});

		moxios.wait(() => {
			expect(wrapper.vm.notes).not.toBeNull();
			done();
		});
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