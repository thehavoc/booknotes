import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Notification from '../../../resources/assets/js/components/Notification.vue';
import notificationModule from '../../../resources/assets/js/store/modules/notification.js';
import expect from 'expect';

const localVue = createLocalVue();

localVue.use(Vuex);

describe ('Notification', () => {
	let wrapper;
	let store;

	beforeEach (() => {
		store = new Vuex.Store({
			state: {},
			modules: {
				notification: notificationModule
			}
		});		

		wrapper = shallow(Notification, { 
			store, 
			localVue
		});
	});

	it ('does not show the notification', () => {
		wrapper.vm.update(exampleMessage);

		wrapper.update();

		wrapper.vm.update('');

		wrapper.update();

		expect(wrapper.html()).not.toContain(exampleMessage);
	});

	it ('shows the notification', () => {
		wrapper.vm.update(exampleMessage);

		wrapper.update();

		expect(wrapper.html()).toContain(exampleMessage);
	});	

	let exampleMessage = 'Example message';
});