import { mount } from '@vue/test-utils';
import Card from '@/components/home/cards/card.vue';
import  liText from '@/components/shared/li-text.vue';
import  liBtn from '@/components/shared/li-btn.vue';

describe('card', () => {
  let wrapper: any = null;

  wrapper = mount(Card, {
    props: {
      item: {
        userName: 'test1',
        userImage: 'userIMG',
        userDiscordLink: 'some link',
        userYoutubeLink: 'youtube link',
        itemImage: 'itemIMG',
        itemName: 'M9 Bayonet',
        skinName: 'Lore',
        itemPrice: '2500.05',
        daysRemaining: '20',
        condition: 'hot', 
      }
    }
  });

  it('checks existence of shared components', () => {
    // Assert
    expect(wrapper.findComponent(liText).exists()).toBe(true);
    expect(wrapper.findComponent(liBtn).exists()).toBe(true);
  });

  it('checks if props are defined', () => {
    expect(wrapper.props().item.userName).not.toBeUndefined();
    expect(wrapper.props().item.userImage).not.toBeUndefined();
    expect(wrapper.props().item.userDiscordLink).not.toBeUndefined();
    expect(wrapper.props().item.userYoutubeLink).not.toBeUndefined();
    expect(wrapper.props().item.itemImage).not.toBeUndefined();
    expect(wrapper.props().item.itemName).not.toBeUndefined();
    expect(wrapper.props().item.skinName).not.toBeUndefined();
    expect(wrapper.props().item.itemPrice).not.toBeUndefined();
    expect(wrapper.props().item.daysRemaining).not.toBeUndefined();
    expect(wrapper.props().item.condition).not.toBeUndefined();
  });
});
