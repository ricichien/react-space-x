import { all } from 'redux-saga/effects';

import launch from './launch/sagas';
import rocket from './rocket/sagas';

export default function* rootSaga():any {
  return yield all([launch, rocket]);
}

