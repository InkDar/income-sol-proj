import { mount } from '@vue/test-utils';
import HowItWorks from '@/components/home/how-it-works.vue';
import liText from '@/components/shared/li-text.vue';
import liBtn from '@/components/shared/li-btn.vue';
import { createI18n } from 'vue-i18n';

// Tests Here
describe('home header', () => {
  let wrapper: any = null;
  const i18n = createI18n({
    inheritLocale: true,
    useScope: 'global',
  });

  wrapper = mount(HowItWorks, {
    global: {
      plugins: [i18n],
    },
  });

  it('checks existence of shared components', () => {
    // Assert
    expect(wrapper.findComponent(liText).exists()).toBe(true);
    expect(wrapper.findComponent(liBtn).exists()).toBe(true);
  });
});
