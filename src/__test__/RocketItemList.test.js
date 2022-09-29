import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import RocketsItemList from '../components/RocketsItemList';

it('Renders RocketsItems component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <RocketsItemList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
