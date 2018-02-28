import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import AddSource from '../../../resources/assets/js/components/AddSource.vue';
import sourcesModule from '../../../resources/assets/js/store/modules/sources.js';
import notificationModule from '../../../resources/assets/js/store/modules/notification.js';
import moxios from 'moxios';
import expect from 'expect';
import ApiRoutes from '../../../resources/assets/js/api/routes.js';
import { type, click } from '../utilities.js';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(Vuetify);

describe ('AddSource', () => {
	let wrapper;
	let store;
	let apiRoutes;

	beforeEach (() => {
		moxios.install();

		apiRoutes = new ApiRoutes();

		store = new Vuex.Store({
			state: {},
			modules: {
				sources: sourcesModule,
				notification: notificationModule
			}
		});		

		wrapper = mount(AddSource, { 
			store, 
			localVue
		});
	});

	it ('creates a source', (done) => {
		typeForm();

		moxios.stubRequest(apiRoutes.getUrl('addSource'), {
			status: 200,
			response: wrapper.vm.source
		});

		wrapper.setData({
			valid: true
		});

		click('#submit', wrapper);

		moxios.wait(() => {
			expect(notificationModule.state.message).toBe('A new source has been added.');
			done();
		});		
	});

	it ('does not create a source', () => {
		click('#submit', wrapper);

		expect(wrapper.vm.valid).toBe(false);
	});

	afterEach (() => {
		moxios.uninstall();
	});

	let typeForm = () => {
		let fields = [
			{
				selector: 'input[name="title"]',
				value: 'Test source'
			},		
			{
				selector: 'input[name="url"]',
				value: 'http://example.com'
			},
		];

		fields.map((field) => {
			type(field.selector, field.value, wrapper);
		});
	}		
});