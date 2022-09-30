import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Mission from '../components/mission';

it('mission component test', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Mission />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
