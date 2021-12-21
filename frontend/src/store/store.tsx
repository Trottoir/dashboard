import {
	ThunkAction,
	Action,
	combineReducers,
	createStore,
	applyMiddleware,
	compose,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import cryptoReducer from '../features/crypto/cryptoSlice';
import priceChartReducer from '../features/price_chart/priceChartSlice';

import apiMiddleware from '../features/price_chart/priceChartMiddleware';

const middlewares = [apiMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const reducer = combineReducers({
	priceChart: priceChartReducer,
	crypto: cryptoReducer,
});
// create a redux store from our reducers and middleware
export const store = createStore(reducer, composedEnhancers);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
