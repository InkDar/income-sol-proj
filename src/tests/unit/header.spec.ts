import { shallowMount } from '@vue/test-utils';
import Header from '@/components/layout/header.vue';
import liText from '@/components/shared/li-text.vue';
import liLink from '@/components/shared/li-link.vue';
import liBtn from '@/components/shared/li-btn.vue';
import { createI18n } from 'vue-i18n';

// Tests Here
describe('home header', () => {
  let wrapper: any = null;
  const i18n = createI18n({
    inheritLocale: true,
    useScope: 'global',
  });
  wrapper = beforeEach(() => {
    wrapper = shallowMount(Header, {
      global: {
        plugins: [i18n],
      },
    });
  });

  it('if shared components exists', () => {
    // Assert
    expect(wrapper.findComponent(liText).exists()).toBe(true);
    expect(wrapper.findComponent(liLink).exists()).toBe(true);
    expect(wrapper.findComponent(liBtn).exists()).toBe(true);
  });

  it('toggle the languages', async () => {
    // Act
    const liTextComp = wrapper.findComponent(liText);
    await liTextComp.trigger('click');

    // Assert
    expect(wrapper.html());
  });
});
