import { IApiCoins, ICoins } from "./product.models"

export const transformProduct = (apiCoinResponse: IApiCoins[]) => {
    apiCoinResponse.map((mapedCoins) => ({
        id: mapedCoins.id,
        name: mapedCoins.name,
        symbol: mapedCoins.symbol,
        current_price: mapedCoins.current_price,
        market_cap: mapedCoins.market_cap,
        price_change_percentage_24h: mapedCoins.price_change_percentage_24h,
        image: mapedCoins.image,
        favorite: false
      }))
}