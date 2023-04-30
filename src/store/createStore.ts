import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { LaunchAction, LaunchState } from './modules/launch/types';
import { RocketsAction, RocketsState } from './modules/rocket/types';

export interface StoreState {
  launch: LaunchState;
  rocket: RocketsState;
}

export type StoreAction = LaunchAction | RocketsAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
