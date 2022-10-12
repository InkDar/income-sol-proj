import { shallowMount } from '@vue/test-utils';
import liLink from '@/components/shared/li-link.vue';

describe('li-link', () => {
  it('renders prop.size(lg) and prop.color(black) when passed in, checks link rout and slots', () => {
    const size = 'lg';
    const color = 'black';
    const path = '/';
    const wrapper = shallowMount(liLink, {
      props: {
        size,
        color,
        path,
      },
      slots: {
        default: 'Hello World',
      },
    });

    expect(wrapper.props().size).toContain('lg');
    expect(wrapper.props().color).toContain('black');
    expect(wrapper.props().path).toContain('/');
    expect(wrapper.html()).toContain('Hello World');
  });
});
