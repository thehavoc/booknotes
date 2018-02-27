import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Notes from '../../../resources/assets/js/components/Notes.vue';
import notesModule from '../../../resources/assets/js/store/modules/notes.js';
import moxios from 'moxios';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';
import { exampleNotes } from '../utilities.js';

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
				notes: notesModule
			}
		});		

		wrapper = shallow(Notes, { 
			store, 
			localVue
		});
	});

	it ('does not shows notes', (done) => {
		moxios.stubRequest(apiRoutes.getUrl('notes'), {
			status: 200,
			response: []
		});

		moxios.wait(() => {
			expect(wrapper.html()).toContain('There are no added notes.');
			done();
		});
	});

	it ('shows notes', (done) => {
		moxios.stubRequest(apiRoutes.getUrl('notes'), {
			status: 200,
			response: exampleNotes
		});

		moxios.wait(() => {
			expect(wrapper.vm.notes).toHaveLength(exampleNotes.length);
			done();
		});
	});

	afterEach (() => {
		moxios.uninstall();
	});
});