import { combineReducers } from 'redux';

import launch from './launch/reducer';
import rocket from './rocket/reducer';

export default combineReducers({
  launch,
  rocket,
});
