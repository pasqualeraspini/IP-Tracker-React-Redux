import { combineReducers } from 'redux';
import { addressReducer } from './addressReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducers = combineReducers({
    addressReducer,
    form: formReducer
});

export default rootReducers