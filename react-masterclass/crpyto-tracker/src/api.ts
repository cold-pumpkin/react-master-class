const BASE_URL = `https://api.coinpaprika.com/v1`;
export async function fetchCoins() {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}

/*
export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins")
    .then(response => response.json());
}
*/

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => 
    response.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) => 
    response.json());
}