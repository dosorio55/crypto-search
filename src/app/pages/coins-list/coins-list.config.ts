export interface ICoins {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation?: number | null;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number | null;
    max_supply?: number | null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi?: {} | null;
    last_updated: string;
  }

export const coins: ICoins[]  = [
    {
      "id": "bitcoin",
      "symbol": "btc",
      "name": "Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      "current_price": 28722,
      "market_cap": 543229761336,
      "market_cap_rank": 1,
      "fully_diluted_valuation": 599136720867,
      "total_volume": 22554182183,
      "high_24h": 29148,
      "low_24h": 27553,
      "price_change_24h": 543.54,
      "price_change_percentage_24h": 1.9289,
      "market_cap_change_24h": 6274694781,
      "market_cap_change_percentage_24h": 1.16857,
      "circulating_supply": 19040437,
      "total_supply": 21000000,
      "max_supply": 21000000,
      "ath": 59717,
      "ath_change_percentage": -52.28361,
      "ath_date": "2021-11-10T14:24:11.849Z",
      "atl": 51.3,
      "atl_change_percentage": 55446.97394,
      "atl_date": "2013-07-05T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:46.023Z"
    },
    {
      "id": "ethereum",
      "symbol": "eth",
      "name": "Ethereum",
      "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      "current_price": 1973.91,
      "market_cap": 235960287599,
      "market_cap_rank": 2,
      "fully_diluted_valuation": null,
      "total_volume": 12660347847,
      "high_24h": 1995.75,
      "low_24h": 1875.57,
      "price_change_24h": 38.58,
      "price_change_percentage_24h": 1.99322,
      "market_cap_change_24h": 938346068,
      "market_cap_change_percentage_24h": 0.39926,
      "circulating_supply": 120786684.3115,
      "total_supply": null,
      "max_supply": null,
      "ath": 4228.93,
      "ath_change_percentage": -53.82852,
      "ath_date": "2021-12-01T08:38:24.623Z",
      "atl": 0.381455,
      "atl_change_percentage": 511771.05448,
      "atl_date": "2015-10-20T00:00:00.000Z",
      "roi": {
        "times": 90.90371417289937,
        "currency": "btc",
        "percentage": 9090.371417289936
      },
      "last_updated": "2022-05-15T10:59:37.150Z"
    },
    {
      "id": "tether",
      "symbol": "usdt",
      "name": "Tether",
      "image": "https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707",
      "current_price": 0.962372,
      "market_cap": 72781695755,
      "market_cap_rank": 3,
      "fully_diluted_valuation": null,
      "total_volume": 48793836542,
      "high_24h": 0.967255,
      "low_24h": 0.956352,
      "price_change_24h": 0.00145604,
      "price_change_percentage_24h": 0.15153,
      "market_cap_change_24h": -811882791.1434479,
      "market_cap_change_percentage_24h": -1.1032,
      "circulating_supply": 75752120650.9874,
      "total_supply": 75752120650.9874,
      "max_supply": null,
      "ath": 1.13,
      "ath_change_percentage": -14.97491,
      "ath_date": "2018-07-24T00:00:00.000Z",
      "atl": 0.533096,
      "atl_change_percentage": 80.4824,
      "atl_date": "2015-03-02T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:57:14.129Z"
    },
    {
      "id": "usd-coin",
      "symbol": "usdc",
      "name": "USD Coin",
      "image": "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389",
      "current_price": 0.963385,
      "market_cap": 49087219557,
      "market_cap_rank": 4,
      "fully_diluted_valuation": null,
      "total_volume": 8527842517,
      "high_24h": 0.968271,
      "low_24h": 0.95512,
      "price_change_24h": -0.000440360939230944,
      "price_change_percentage_24h": -0.04569,
      "market_cap_change_24h": 79178263,
      "market_cap_change_percentage_24h": 0.16156,
      "circulating_supply": 51087088268.6283,
      "total_supply": 51087083603.915,
      "max_supply": null,
      "ath": 1.048,
      "ath_change_percentage": -8.05304,
      "ath_date": "2019-05-08T00:40:28.300Z",
      "atl": 0.730265,
      "atl_change_percentage": 31.93433,
      "atl_date": "2021-05-19T13:14:05.611Z",
      "roi": null,
      "last_updated": "2022-05-15T10:59:22.488Z"
    },
    {
      "id": "binancecoin",
      "symbol": "bnb",
      "name": "BNB",
      "image": "https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850",
      "current_price": 283.88,
      "market_cap": 47348490171,
      "market_cap_rank": 5,
      "fully_diluted_valuation": 47348490171,
      "total_volume": 1787990137,
      "high_24h": 287.7,
      "low_24h": 261.66,
      "price_change_24h": 12.54,
      "price_change_percentage_24h": 4.62194,
      "market_cap_change_24h": 1617496468,
      "market_cap_change_percentage_24h": 3.53698,
      "circulating_supply": 168137035.9,
      "total_supply": 168137035.9,
      "max_supply": 168137035.9,
      "ath": 583.17,
      "ath_change_percentage": -51.69487,
      "ath_date": "2021-11-26T02:58:28.000Z",
      "atl": 0.03359941,
      "atl_change_percentage": 838316.36099,
      "atl_date": "2017-10-19T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:59:11.697Z"
    },
    {
      "id": "ripple",
      "symbol": "xrp",
      "name": "XRP",
      "image": "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
      "current_price": 0.407974,
      "market_cap": 19637768054,
      "market_cap_rank": 6,
      "fully_diluted_valuation": 40621655558,
      "total_volume": 2199690366,
      "high_24h": 0.415159,
      "low_24h": 0.381936,
      "price_change_24h": 0.00765994,
      "price_change_percentage_24h": 1.91348,
      "market_cap_change_24h": 79695814,
      "market_cap_change_percentage_24h": 0.40748,
      "circulating_supply": 48343101197,
      "total_supply": 100000000000,
      "max_supply": 100000000000,
      "ath": 2.82,
      "ath_change_percentage": -85.64656,
      "ath_date": "2018-01-07T00:00:00.000Z",
      "atl": 0.00194619,
      "atl_change_percentage": 20720.21937,
      "atl_date": "2013-08-16T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:18.455Z"
    },
    {
      "id": "cardano",
      "symbol": "ada",
      "name": "Cardano",
      "image": "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
      "current_price": 0.523091,
      "market_cap": 17520797860,
      "market_cap_rank": 7,
      "fully_diluted_valuation": 23312530548,
      "total_volume": 814013747,
      "high_24h": 0.52609,
      "low_24h": 0.471925,
      "price_change_24h": 0.02981868,
      "price_change_percentage_24h": 6.04507,
      "market_cap_change_24h": 698003303,
      "market_cap_change_percentage_24h": 4.14915,
      "circulating_supply": 33820262543.95,
      "total_supply": 45000000000,
      "max_supply": 45000000000,
      "ath": 2.61,
      "ath_change_percentage": -80.07141,
      "ath_date": "2021-09-02T06:00:10.474Z",
      "atl": 0.01722339,
      "atl_change_percentage": 2916.07057,
      "atl_date": "2020-03-13T02:22:55.044Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:15.709Z"
    },
    {
      "id": "binance-usd",
      "symbol": "busd",
      "name": "Binance USD",
      "image": "https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766",
      "current_price": 0.966712,
      "market_cap": 17075082522,
      "market_cap_rank": 8,
      "fully_diluted_valuation": null,
      "total_volume": 11323466045,
      "high_24h": 0.968929,
      "low_24h": 0.957663,
      "price_change_24h": 0.00654245,
      "price_change_percentage_24h": 0.68138,
      "market_cap_change_24h": 249453142,
      "market_cap_change_percentage_24h": 1.48258,
      "circulating_supply": 17735417602.14,
      "total_supply": 17735417602.14,
      "max_supply": null,
      "ath": 1.032,
      "ath_change_percentage": -6.73508,
      "ath_date": "2020-03-13T02:35:42.953Z",
      "atl": 0.73816,
      "atl_change_percentage": 30.40018,
      "atl_date": "2021-05-19T13:04:37.445Z",
      "roi": null,
      "last_updated": "2022-05-15T10:59:19.844Z"
    },
    {
      "id": "solana",
      "symbol": "sol",
      "name": "Solana",
      "image": "https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422",
      "current_price": 50.31,
      "market_cap": 16697673216,
      "market_cap_rank": 9,
      "fully_diluted_valuation": null,
      "total_volume": 1294576463,
      "high_24h": 50.49,
      "low_24h": 44.48,
      "price_change_24h": 3.61,
      "price_change_percentage_24h": 7.73188,
      "market_cap_change_24h": 793726767,
      "market_cap_change_percentage_24h": 4.99075,
      "circulating_supply": 337328584.070961,
      "total_supply": 508180963.57,
      "max_supply": null,
      "ath": 225.04,
      "ath_change_percentage": -77.98822,
      "ath_date": "2021-11-06T21:54:35.825Z",
      "atl": 0.46316,
      "atl_change_percentage": 10595.24515,
      "atl_date": "2020-05-11T19:35:23.449Z",
      "roi": null,
      "last_updated": "2022-05-15T10:59:36.071Z"
    },
    {
      "id": "polkadot",
      "symbol": "dot",
      "name": "Polkadot",
      "image": "https://assets.coingecko.com/coins/images/12171/large/polkadot.png?1639712644",
      "current_price": 10.63,
      "market_cap": 11731440013,
      "market_cap_rank": 10,
      "fully_diluted_valuation": null,
      "total_volume": 910544621,
      "high_24h": 11.05,
      "low_24h": 9.46,
      "price_change_24h": 0.80605,
      "price_change_percentage_24h": 8.20304,
      "market_cap_change_24h": 664361186,
      "market_cap_change_percentage_24h": 6.00304,
      "circulating_supply": 1112298322.27283,
      "total_supply": 1193247455.12493,
      "max_supply": null,
      "ath": 47.6,
      "ath_change_percentage": -77.87075,
      "ath_date": "2021-11-04T14:10:09.301Z",
      "atl": 2.27,
      "atl_change_percentage": 364.1652,
      "atl_date": "2020-08-19T03:44:11.556Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:45.175Z"
    },
    {
      "id": "dogecoin",
      "symbol": "doge",
      "name": "Dogecoin",
      "image": "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
      "current_price": 0.0854,
      "market_cap": 11261497982,
      "market_cap_rank": 11,
      "fully_diluted_valuation": null,
      "total_volume": 570116345,
      "high_24h": 0.087259,
      "low_24h": 0.081074,
      "price_change_24h": 0.00012222,
      "price_change_percentage_24h": 0.14332,
      "market_cap_change_24h": -119855564.67492867,
      "market_cap_change_percentage_24h": -1.05309,
      "circulating_supply": 132670764299.894,
      "total_supply": null,
      "max_supply": null,
      "ath": 0.601466,
      "ath_change_percentage": -85.90029,
      "ath_date": "2021-05-08T05:08:23.458Z",
      "atl": 0.00007662,
      "atl_change_percentage": 110587.7424,
      "atl_date": "2015-05-06T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:33.357Z"
    },
    {
      "id": "avalanche-2",
      "symbol": "avax",
      "name": "Avalanche",
      "image": "https://assets.coingecko.com/coins/images/12559/large/coin-round-red.png?1604021818",
      "current_price": 32.85,
      "market_cap": 8674483312,
      "market_cap_rank": 12,
      "fully_diluted_valuation": 23222643641,
      "total_volume": 613808073,
      "high_24h": 33,
      "low_24h": 28.29,
      "price_change_24h": 2.66,
      "price_change_percentage_24h": 8.80817,
      "market_cap_change_24h": 487418873,
      "market_cap_change_percentage_24h": 5.95352,
      "circulating_supply": 268945606.764072,
      "total_supply": 377752194.4695483,
      "max_supply": 720000000,
      "ath": 128.43,
      "ath_change_percentage": -74.84185,
      "ath_date": "2021-11-21T14:18:56.538Z",
      "atl": 2.28,
      "atl_change_percentage": 1315.72652,
      "atl_date": "2020-12-31T13:15:21.540Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:59.554Z"
    },
    {
      "id": "wrapped-bitcoin",
      "symbol": "wbtc",
      "name": "Wrapped Bitcoin",
      "image": "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744",
      "current_price": 28640,
      "market_cap": 8109896519,
      "market_cap_rank": 13,
      "fully_diluted_valuation": 8109896519,
      "total_volume": 305413651,
      "high_24h": 29135,
      "low_24h": 27555,
      "price_change_24h": 510.1,
      "price_change_percentage_24h": 1.81335,
      "market_cap_change_24h": 75222125,
      "market_cap_change_percentage_24h": 0.93622,
      "circulating_supply": 284504.04000022,
      "total_supply": 284504.04000022,
      "max_supply": 284504.04000022,
      "ath": 61044,
      "ath_change_percentage": -53.33529,
      "ath_date": "2021-11-10T14:40:19.650Z",
      "atl": 2801.21,
      "atl_change_percentage": 916.91706,
      "atl_date": "2019-04-02T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:05.819Z"
    },
    {
      "id": "staked-ether",
      "symbol": "steth",
      "name": "Lido Staked Ether",
      "image": "https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546",
      "current_price": 1928.62,
      "market_cap": 8002736694,
      "market_cap_rank": 14,
      "fully_diluted_valuation": 8002736694,
      "total_volume": 24293725,
      "high_24h": 1956.11,
      "low_24h": 1835.39,
      "price_change_24h": 37.86,
      "price_change_percentage_24h": 2.00253,
      "market_cap_change_24h": 49710180,
      "market_cap_change_percentage_24h": 0.62505,
      "circulating_supply": 4186773.94860867,
      "total_supply": 4186793.84416997,
      "max_supply": 4186793.84416997,
      "ath": 4188.52,
      "ath_change_percentage": -54.42127,
      "ath_date": "2021-11-12T02:16:02.325Z",
      "atl": 394.87,
      "atl_change_percentage": 383.47443,
      "atl_date": "2020-12-22T04:08:21.854Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:30.285Z"
    },
    {
      "id": "shiba-inu",
      "symbol": "shib",
      "name": "Shiba Inu",
      "image": "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
      "current_price": 0.00001194,
      "market_cap": 6512908999,
      "market_cap_rank": 15,
      "fully_diluted_valuation": null,
      "total_volume": 690685282,
      "high_24h": 0.0000121,
      "low_24h": 0.00001107,
      "price_change_24h": 5.50783e-7,
      "price_change_percentage_24h": 4.83745,
      "market_cap_change_24h": 218290099,
      "market_cap_change_percentage_24h": 3.46788,
      "circulating_supply": 549146987315505.4,
      "total_supply": 1000000000000000,
      "max_supply": null,
      "ath": 0.00007424,
      "ath_change_percentage": -84.08796,
      "ath_date": "2021-10-28T03:54:55.568Z",
      "atl": 4.6962e-11,
      "atl_change_percentage": 25155275.27919,
      "atl_date": "2020-12-11T05:57:22.476Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:41.154Z"
    },
    {
      "id": "tron",
      "symbol": "trx",
      "name": "TRON",
      "image": "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
      "current_price": 0.066276,
      "market_cap": 6454529956,
      "market_cap_rank": 16,
      "fully_diluted_valuation": null,
      "total_volume": 903560653,
      "high_24h": 0.071379,
      "low_24h": 0.065614,
      "price_change_24h": -0.004669349262799397,
      "price_change_percentage_24h": -6.58163,
      "market_cap_change_24h": -531640207.72922516,
      "market_cap_change_percentage_24h": -7.60989,
      "circulating_supply": 98175456173.606,
      "total_supply": 101900409184.273,
      "max_supply": null,
      "ath": 0.192595,
      "ath_change_percentage": -65.83902,
      "ath_date": "2018-01-05T00:00:00.000Z",
      "atl": 0.00154713,
      "atl_change_percentage": 4152.55594,
      "atl_date": "2017-11-12T00:00:00.000Z",
      "roi": {
        "times": 35.31879507172385,
        "currency": "usd",
        "percentage": 3531.879507172385
      },
      "last_updated": "2022-05-15T10:59:17.235Z"
    },
    {
      "id": "dai",
      "symbol": "dai",
      "name": "Dai",
      "image": "https://assets.coingecko.com/coins/images/9956/large/4943.png?1636636734",
      "current_price": 0.962376,
      "market_cap": 5778144719,
      "market_cap_rank": 17,
      "fully_diluted_valuation": 5778144719,
      "total_volume": 594103749,
      "high_24h": 0.967062,
      "low_24h": 0.955919,
      "price_change_24h": -0.000149327762585028,
      "price_change_percentage_24h": -0.01551,
      "market_cap_change_24h": 17837485,
      "market_cap_change_percentage_24h": 0.30966,
      "circulating_supply": 6013873420.9628,
      "total_supply": 6014831803.49812,
      "max_supply": 6014831803.49812,
      "ath": 1.088,
      "ath_change_percentage": -11.58118,
      "ath_date": "2020-03-13T03:02:50.373Z",
      "atl": 0.759326,
      "atl_change_percentage": 26.64848,
      "atl_date": "2021-05-19T13:05:49.822Z",
      "roi": null,
      "last_updated": "2022-05-15T10:57:16.671Z"
    },
    {
      "id": "litecoin",
      "symbol": "ltc",
      "name": "Litecoin",
      "image": "https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580",
      "current_price": 66.11,
      "market_cap": 4607096130,
      "market_cap_rank": 18,
      "fully_diluted_valuation": 5505796416,
      "total_volume": 644488741,
      "high_24h": 66.67,
      "low_24h": 61.7,
      "price_change_24h": 2.95,
      "price_change_percentage_24h": 4.66345,
      "market_cap_change_24h": 111919117,
      "market_cap_change_percentage_24h": 2.48976,
      "circulating_supply": 70288845.7334713,
      "total_supply": 84000000,
      "max_supply": 84000000,
      "ath": 337.56,
      "ath_change_percentage": -80.58582,
      "ath_date": "2021-05-10T03:13:07.904Z",
      "atl": 0.981314,
      "atl_change_percentage": 6578.32826,
      "atl_date": "2015-01-14T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:57:44.488Z"
    },
    {
      "id": "crypto-com-chain",
      "symbol": "cro",
      "name": "Cronos",
      "image": "https://assets.coingecko.com/coins/images/7310/large/oCw2s3GI_400x400.jpeg?1645172042",
      "current_price": 0.181208,
      "market_cap": 4549100757,
      "market_cap_rank": 19,
      "fully_diluted_valuation": null,
      "total_volume": 75748722,
      "high_24h": 0.184241,
      "low_24h": 0.168731,
      "price_change_24h": 0.00846501,
      "price_change_percentage_24h": 4.90034,
      "market_cap_change_24h": 171217242,
      "market_cap_change_percentage_24h": 3.91096,
      "circulating_supply": 25263013692,
      "total_supply": 30263013692,
      "max_supply": null,
      "ath": 0.862048,
      "ath_change_percentage": -79.1841,
      "ath_date": "2021-11-24T15:53:54.855Z",
      "atl": 0.01068892,
      "atl_change_percentage": 1578.77673,
      "atl_date": "2019-02-08T00:00:00.000Z",
      "roi": null,
      "last_updated": "2022-05-15T10:59:26.884Z"
    },
    {
      "id": "leo-token",
      "symbol": "leo",
      "name": "LEO Token",
      "image": "https://assets.coingecko.com/coins/images/8418/large/leo-token.png?1558326215",
      "current_price": 4.77,
      "market_cap": 4459881075,
      "market_cap_rank": 20,
      "fully_diluted_valuation": null,
      "total_volume": 2474924,
      "high_24h": 4.86,
      "low_24h": 4.71,
      "price_change_24h": -0.020296754646532023,
      "price_change_percentage_24h": -0.42362,
      "market_cap_change_24h": -32655028.851743698,
      "market_cap_change_percentage_24h": -0.72687,
      "circulating_supply": 936121673.9,
      "total_supply": 985239504,
      "max_supply": null,
      "ath": 7.12,
      "ath_change_percentage": -33.0487,
      "ath_date": "2022-02-08T17:40:10.285Z",
      "atl": 0.715663,
      "atl_change_percentage": 566.34848,
      "atl_date": "2019-12-31T12:19:48.870Z",
      "roi": null,
      "last_updated": "2022-05-15T10:58:28.334Z"
    }
  ]

