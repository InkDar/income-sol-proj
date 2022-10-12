import { mount } from '@vue/test-utils';
import CardSection from '@/components/home/cards/index.vue';

const data = [
  {
    userName: 'USERNAME1',
    userImage: 'image',
    userDiscordLink: 'some link',
    userYoutubeLink: 'youtube link',
    itemImage: 'itemImage',
    itemName: 'M9 Bayonet',
    skinName: 'Lore',
    itemPrice: '2500.05',
    daysRemaining: '20',
    condition: 'hot',
  },
  {
    userName: 'USERNAME2',
    userImage: 'image',
    userDiscordLink: 'some link',
    userYoutubeLink: 'youtube link',
    itemImage: 'itemImage',
    itemName: 'M9 Bayonet',
    skinName: 'Lore',
    itemPrice: '2500.05',
    daysRemaining: '20',
    condition: 'new',
  },
  {
    userName: 'USERNAME3',
    userImage: 'image',
    userDiscordLink: 'some link',
    userYoutubeLink: 'youtube link',
    itemImage: 'itemImage',
    itemName: 'M9 Bayonet',
    skinName: 'Lore',
    itemPrice: '2500.05',
    daysRemaining: '20',
    condition: 'ex',
  },
];

jest.mock('@/services/GiveawayService', () => ({
  getGiveaways: () =>
    Promise.resolve({
      data,
    }),
}));

describe('card-section', () => {
  let wrapper: any = null;

  it('checks existence and definiteness of card section local variables', async () => {
    wrapper = mount(CardSection);
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.giveaways.length).toBe(3);
      expect(wrapper.vm.hotGivvies.length).toBe(1);
      expect(wrapper.vm.newGivvies.length).toBe(1);
      expect(wrapper.vm.exclusiveGivvies.length).toBe(1);
    });
  });
});
