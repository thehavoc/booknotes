import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import AddNote from '../../../resources/assets/js/components/AddNote.vue';
import notesModule from '../../../resources/assets/js/store/modules/notes.js';
import notificationModule from '../../../resources/assets/js/store/modules/notification.js';
import sourcesModule from '../../../resources/assets/js/store/modules/sources.js';
import moxios from 'moxios';
import expect from 'expect';
import sinon from 'sinon';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';
import { type, click } from '../utilities.js';

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
				notification: notificationModule,
				sources: sourcesModule
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

		wrapper.setData({
			valid: true
		});

		click('#submit', wrapper);

		moxios.wait(() => {
			expect(notificationModule.state.message).toBe('A new note has been added.');
			done();
		});		
	});

	it ('does not create a note', () => {
		click('#submit', wrapper);
		
		expect(wrapper.vm.valid).toBe(false);
	});

	afterEach (() => {
		moxios.uninstall();
	});

	let typeForm = () => {
		let fields = [
			{
				selector: 'textarea[name="content"]',
				value: 'Test content',
			}
		];

		fields.map((field) => {
			type(field.selector, field.value, wrapper);
		});
	}		
});