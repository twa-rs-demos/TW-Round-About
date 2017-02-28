import {combineReducers} from 'redux';
import breadcrumb from './breadcrumb';
import layout from './layout';

const rootReducer = combineReducers({
  breadcrumb,
  layout
});

export default rootReducer;
