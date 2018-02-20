import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Notification from '../../../resources/assets/js/components/Notification.vue';
import NotificationModule from '../../../resources/assets/js/store/modules/notification.js';
import expect from 'expect';

const localVue = createLocalVue();

describe ('Notification', () => {
	let wrapper;
	let store;

	beforeEach (() => {
		store = new Vuex.Store({
			state: {},
			modules: {
				notification: NotificationModule
			}
		});		

		wrapper = shallow(Notification, { 
			store, 
			localVue
		});
	});

	it ('does not show the notification', () => {
		wrapper.vm.update(this.exampleMessage);

		wrapper.update();

		wrapper.vm.update('');

		wrapper.update();

		expect(wrapper.html()).not.toContain(this.exampleMessage);
	});

	it ('shows the notification', () => {
		wrapper.vm.update(this.exampleMessage);

		wrapper.update();

		expect(wrapper.html()).toContain(this.exampleMessage);
	});	

	afterEach (() => {

	});

	let exampleMessage = 'Example message';
});