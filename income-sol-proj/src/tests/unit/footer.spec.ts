import Footer from '@/components/layout/footer.vue';
import { shallowMount } from '@vue/test-utils';
import liText from '@/components/shared/li-text.vue';
import liLink from '@/components/shared/li-link.vue';

describe('footer', () => {
  it('cheks if liText and liLink exists', () => {
    const wrapper = shallowMount(Footer);

    expect(wrapper.findComponent(liText).exists()).toBe(true);
    expect(wrapper.findComponent(liLink).exists()).toBe(true);
  });

  it('Check if the rights icon and social links(all 4) images exists', () => {
    const wrapper = shallowMount(Footer);

    const socialImg = wrapper.findAll('.social-links');
    const img = wrapper.findAll('.footer-logo');

    expect(socialImg.length).toBe(4);
    expect(img.length).toBe(1);
  });

  it('checks does scroll to top function has been called on the icon', async () => {
    const wrapper = shallowMount(Footer, async () => {
      const scrollToTop = wrapper.find('router-link');
      await scrollToTop.trigger('click');

      expect(scrollToTop).toHaveBeenCalled();
    });
  });
});
