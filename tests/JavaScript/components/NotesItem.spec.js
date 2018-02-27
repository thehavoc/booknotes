import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import NotesItem from '../../../resources/assets/js/components/NotesItem.vue';
import notesModule from '../../../resources/assets/js/store/modules/notes.js';
import notificationModule from '../../../resources/assets/js/store/modules/notification.js';
import moxios from 'moxios';
import sinon from 'sinon';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';
import Vuetify from 'vuetify';
import { exampleNote, click } from '../utilities.js';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

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
				notes: notesModule,
				notification: notificationModule
			}
		});		

		wrapper = mount(NotesItem, { 
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

	it ('deletes the note', (done) => {
		expect(wrapper.html()).toContain(exampleNote.content);

		sinon.stub(window, 'confirm').returns(true);

		moxios.stubRequest(apiRoutes.getUrl('deleteNote') + exampleNote.id, {
			status: 200,
			response: true
		});

		click('#remove-note', wrapper);
		
		moxios.wait(() => {
			expect(notificationModule.state.message).toBe('The note has been deleted.');
			done();
		});			

	});

	afterEach (() => {
		moxios.uninstall();
	});	
});