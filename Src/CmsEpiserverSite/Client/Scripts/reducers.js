import { combineReducers } from 'redux';
import { quickSearch } from './Reducers/QuickSearch.reducer';

const app = combineReducers({
    quickSearch,
});

export default app;
