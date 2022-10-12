import { mount } from '@vue/test-utils';
import  hero from '@/components/home/hero.vue';
import  liText from '@/components/shared/li-text.vue';
import  liBtn from '@/components/shared/li-btn.vue';
import { createI18n } from 'vue-i18n';

describe('hero', () => {
  let wrapper: any = null;
  const i18n = createI18n({
    inheritLocale: true,
    useScope: 'global',
  });
  wrapper = beforeEach(() => {
    wrapper = mount(hero, {
      global: {
        plugins: [i18n],
      },
    });
  });
  
  it('if shared components exist', () => {
    expect(wrapper.findComponent(liText).exists()).toBe(true);
    expect(wrapper.findComponent(liBtn).exists()).toBe(true);
  });
});
