import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import AddNote from '../../../resources/assets/js/components/AddNote.vue';
import notesModule from '../../../resources/assets/js/store/modules/notes.js';
import notificationModule from '../../../resources/assets/js/store/modules/notification.js';
import moxios from 'moxios';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

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
				notes: notesModule,
				notification: notificationModule
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
			expect(notificationModule.state.message).toBe('A new note has been added.');
			done();
		});		
	});

	it ('does not create a note', () => {
		click('#submit');
		
		expect(wrapper.vm.valid).toBe(false);
	});

	afterEach (() => {
		moxios.uninstall();
	});

	let typeForm = (withValue = true) => {
		let fields = [
			{
				selector: 'textarea',
				value: withValue ? 'Test content' : '',
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