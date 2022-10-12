import { mount } from '@vue/test-utils';
import Stats from '@/components/home/stats.vue';

const data = [{ title: 'name', statistics: 'number' }];

jest.mock('@/services/StatService', () => ({
  getStats: () =>
    Promise.resolve({
      data,
    }),
}));

describe('stats', () => {
  let wrapper: any = null;

  it('if local variables exist', async () => {
    wrapper = mount(Stats);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.stats.length).toBe(1);
    });
  });
});
