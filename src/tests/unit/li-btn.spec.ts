import { shallowMount } from '@vue/test-utils';
import liBtn from '@/components/shared/li-btn.vue';

describe('li-btn', () => {
  it('renders text, and size that is passed', () => {
    const text = 'Example text';
    const size = 'sm';
    const wrapper = shallowMount(liBtn, {
      props: {
        text,
        size,
      },
    });

    expect(wrapper.html()).toContain('Example text');
    expect(wrapper.props().size).toContain('sm');
  });
});
