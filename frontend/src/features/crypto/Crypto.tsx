import React from 'react';

import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {
	addCrypto,
	removeCrypto,
	selectorAddress,
	selectorCrypto,
	selectorPseudo,
} from './cryptoSlice';
import styles from './Crypto.module.css';
import { Autocomplete, TextField } from '@mui/material';
import { CryptoEntity } from '../../entities/TokenEntity';
import { CardCrypto } from './CardCrypto';
import { store } from '../../store/store';

export function Crypto() {
	const dispatch = useAppDispatch();
	const address = useAppSelector(selectorAddress);
	const pseudo = useAppSelector(selectorPseudo);
	const crypto = useAppSelector(selectorCrypto);

	// Autocomplete
	/* #region   */
	const myAssets: CryptoEntity[] = [
		{ name: 'Avalanche', ticker: 'AVAX', coingeckoId: 'avalanche-2' },
		{ name: 'Time', ticker: 'TIME', coingeckoId: 'wonderland' },
		{ name: 'gOhm', ticker: 'gOHM', coingeckoId: 'governance-ohm' },
	];
	/* #endregion */
	const cryptoToAdd: CryptoEntity = {
		name: 'ad',
		ticker: 'azd',
		imageUrl: 'zd',
		coingeckoId: 'zd',
	};

	const inputChangedHandler = (event: any) => {
		cryptoToAdd.name = event.target.value;
	};

	return (
		<div>
			<div className={styles.row}>
				{[...myAssets].map((x, i) => (
					<CardCrypto
						name={x.name}
						ticker={x.ticker}
						coingeckoId={x.coingeckoId}
					/>
				))}
				<Autocomplete
					id='combo-box-demo'
					options={myAssets}
					getOptionLabel={(option) => option.name || ''}
					isOptionEqualToValue={(option, value) => option.name === value.name}
					style={{ width: 300 }}
					renderInput={(params) => (
						<TextField
							{...params}
							label='Combo box'
							variant='outlined'
							fullWidth
						/>
					)}
				/>
				<button
					className={styles.button}
					aria-label='ADD CRYPTO'
					onClick={() =>
						dispatch(
							addCrypto({
								name: 'ad',
								ticker: 'azd',
								imageUrl: 'zd',
								coingeckoId: 'dz',
							})
						)
					}
				>
					-
				</button>
			</div>
			<div className={styles.row}>
				<span className={styles.value}>{address}</span>
				<button
					className={styles.button}
					aria-label='Increment value'
					onClick={() => dispatch(removeCrypto('ad'))}
				>
					+
				</button>
			</div>
			<div className={styles.row}>
				<input
					className={styles.textbox}
					aria-label='Set increment amount'
					placeholder='name'
					onChange={(event) => inputChangedHandler(event)}
				/>
				<button
					className={styles.button}
					onClick={() => dispatch(addCrypto(cryptoToAdd))}
				>
					Add Amount
				</button>
			</div>
		</div>
	);
}
