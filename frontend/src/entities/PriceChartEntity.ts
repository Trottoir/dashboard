export interface CoingeckoMarketChart {
    tokenId:string;
    prices: number[][];
    market_caps: number[][];
    total_volumes: number[][];
}
export interface AppleStock {
  date: string;
  close: number;
}
declare const appleStock: AppleStock[];
export default appleStock;