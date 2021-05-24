import React from 'react';
import { shallow } from 'enzyme';
import Stats from './';

const statsStub = [
  {
    label: 'Eggs used',
    value: 3,
    icon: '/egg.svg'
  },
  {
    label: 'Recipes made',
    value: 18,
    icon: '/recipe.svg'
  },
  {
    label: 'Grease fires',
    value: 6,
    icon: '/fire.svg'
  },
  {
    label: 'Yumminess',
    value: '45.00',
    histogram: []
  }
];

test('renders the stat icon images', () => {
  const stats = shallow(<Stats stats={statsStub} />);

  expect(stats.find('.Stat__value img').length).toBe(3);
});

test('wraps each stat in a live region', () => {
  const stats = shallow(<Stats stats={statsStub} />);

  expect(stats.find('[aria-live][aria-relevant][aria-atomic]').length).toBe(
    statsStub.length
  );
});
