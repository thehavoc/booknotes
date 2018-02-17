import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import AddNote from '../../../resources/assets/js/components/AddNote.vue';
import NotesModule from '../../../resources/assets/js/store/modules/notes.js';
import moxios from 'moxios';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';

const localVue = createLocalVue();

localVue.use(Vuex);

describe ('AddNote', () => {
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

		wrapper = mount(AddNote, { 
			store, 
			localVue
		});
	});

	it ('creates a note', (done) => {
		typeForm();

		moxios.stubRequest(apiRoutes.getUrl('addNote'), {
			status: 200,
			response: wrapper.vm.note
		});

		click('#submit');

		moxios.wait(() => {
			expect(wrapper.html()).toContain('The note has been added');
			done();
		});		
	});

	it ('does not create a note', (done) => {
		typeForm(false);

		moxios.stubRequest(apiRoutes.getUrl('addNote'), {
			status: 200,
			response: wrapper.vm.note
		});

		click('#submit');

		moxios.wait(() => {
			expect(wrapper.html()).toContain('The description field is required');
			done();
		});

	});

	afterEach (() => {
		moxios.uninstall();
	});

	let typeForm = (withValue = true) => {
		let fields = [
			{
				selector: 'textarea[name="description"]',
				value: withValue ? 'Test description' : '',
			}
		];

		fields.map((field) => {
			type(field.selector, field.value);
		});
	}	

	let type = (selector, text) => {
		let input = wrapper.find(selector);

		input.element.value = text;
		input.trigger('input');
	}

	let click = (selector) => {
		wrapper.find(selector).trigger('click');
	}		
});