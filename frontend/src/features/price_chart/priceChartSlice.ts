import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppleStock, CoingeckoMarketChart } from '../../entities/PriceChartEntity';
import { RootState,store } from '../../store/store';
import axios  from 'axios';

export interface PriceChartsState {
   isLoading:boolean;
   priceCharts: CoingeckoMarketChart[];

}

const initialState: PriceChartsState = {
    priceCharts: [],
    isLoading:false
};



export const priceChartSlice = createSlice({
  name: 'priceChart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initQuery : (state:PriceChartsState) => {
      return {
        ...state,
        isLoading: true
      }
    },

    receiveRequestMarketChart : (state:PriceChartsState, action: PayloadAction<CoingeckoMarketChart>) => {
        return  {
            ...state,
            priceCharts:[...state.priceCharts, action.payload]
        }
    },
    receiverErrorMarketChart: (state:any, action: PayloadAction<string>) => {
       
      },
  }
});

// ACTIONS 
export const {  receiveRequestMarketChart, receiverErrorMarketChart,initQuery } = priceChartSlice.actions;

// SELECTOR
export const selectorData = (state: RootState) =>   state.priceChart.priceCharts;
export function selectDataFormatted(state:RootState) {
  const stocks : AppleStock[]=[]
  state.priceChart.priceCharts[0].prices.forEach(data => {
    stocks.push({"date": new Date(data[0] * 1000).toString(),"close":data[1]})
  })
  return stocks;
}
export const selectorIsLoading = (state: RootState) => state.priceChart.isLoading;

export default priceChartSlice.reducer;

