import { shallowMount } from '@vue/test-utils';
import liText from '@/components/shared/li-text.vue';

describe('liText', () => {
  it('test slot', () => {
    const wrapper = shallowMount(liText, {
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.html()).toContain('test');
  });

  it('size-sm', () => {
    const wrapper = shallowMount(liText, {
      props: {
        size: 'sm',
      },
    });

    expect(wrapper.props().size).toContain('sm');
  });

  it('size-md', () => {
    const wrapper = shallowMount(liText, {
      props: {
        size: 'md',
      },
    });

    expect(wrapper.props().size).toContain('md');
  });

  it('size-lg', () => {
    const wrapper = shallowMount(liText, {
      props: {
        size: 'lg',
      },
    });

    expect(wrapper.props().size).toContain('lg');
  });

  it('color', () => {
    const wrapper = shallowMount(liText, {
      props: {
        color: 'black',
      },
    });

    expect(wrapper.props().color).toContain('black');
  });

  it('click-event', async () => {
    const wrapper = shallowMount(liText, async () => {
      const text = wrapper.find('span');
      await text.trigger('click');

      expect(text).toHaveBeenCalled();
    });
  });
});
