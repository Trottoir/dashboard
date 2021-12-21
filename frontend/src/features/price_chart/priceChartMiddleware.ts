import axios from 'axios';
import { CoingeckoMarketChart } from '../../entities/PriceChartEntity';

  const apiMiddleware = (store:any) => (next:any) => (action:any) => {

    switch(action.type) {
      // only catch a specific action
      case 'callApi':
        store.dispatch({type:'priceChart/initQuery'});
        next(action);
        axios.get<CoingeckoMarketChart>(`https://api.coingecko.com/api/v3/coins/avalanche-2/market_chart?vs_currency=usd&days=max&interval=daily`)
            .then(response => {
                store.dispatch({type:'priceChart/receiveRequestMarketChart', payload : response.data});
            })
            .catch(err => {
                store.dispatch({type: 'SET_MOVIE_DATA_ERROR',payload: { error: err }});
            });
                break;
      default: 
        next(action);
    }
  };
   
  export default apiMiddleware;