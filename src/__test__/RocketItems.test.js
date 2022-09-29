import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import RocketsItems from '../components/RocketsItems';

it('Renders RocketsItems component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsItems />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
