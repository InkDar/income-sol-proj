import { mount } from '@vue/test-utils';
import subscriptionPopup from '@/components/dialog/subscription.vue';
import liText from '@/components/shared/li-text.vue';

jest.useFakeTimers();
describe('subscriptionPopup', () => {
  let wrapper: any;
  wrapper = beforeEach(() => {
    wrapper = mount(subscriptionPopup);
  });

  it('if shared component exists', () => {
    expect(wrapper.findComponent(liText).exists()).toBe(true);
  });

  it('if reminder closes the subscriptionPopup', () => {
    expect(wrapper.vm.show).toBe(false);
    wrapper.vm.$nextTick(() => {
      jest.runTimersToTime(500);
      expect(wrapper.vm.show).toBe(true);
    });
    wrapper.vm.closePopup();
    expect(wrapper.vm.show).toBe(false);
  });
});
