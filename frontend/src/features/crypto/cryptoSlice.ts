import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CryptoEntity } from '../../entities/TokenEntity';
import { RootState } from '../../store/store';

export interface UserState {
  pseudo: string;
  address: string;
  myAssets: CryptoEntity[];
}

const initialState: UserState = {
  pseudo: "Max",
  address: "0x0CEBcbc9FC1B8683a04c9bccFa78C406624aab67",
  myAssets:[
    {name:"Avalanche",
    ticker:"AVAX",
    coingeckoId:"avalanche-2"}
  ]
};


export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCrypto: (state: UserState, action: PayloadAction<CryptoEntity>) => {
      return {
        ...state,
        myAssets:[...state.myAssets, action.payload]
      }

    },
    removeCrypto: (state:any, action: PayloadAction<string>) => {
      state.myAssets = state.myAssets.filter((crypto:CryptoEntity) => crypto.name === action.payload);
    },
  }
});

// ACTIONS 
export const { addCrypto, removeCrypto } = cryptoSlice.actions;

// SELECTOR
export const selectorPseudo = (state: RootState) => state.crypto.pseudo;
export const selectorAddress = (state: RootState) => state.crypto.address;
export const selectorCrypto = (state: RootState) => state.crypto.myAssets;

export default cryptoSlice.reducer;
