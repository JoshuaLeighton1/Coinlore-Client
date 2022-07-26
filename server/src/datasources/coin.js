const { RESTDataSource } = require('apollo-datasource-rest');
// our CoinAPI class that contains all methods required
class CoinAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.coinlore.net/api/"
    }
    async getAllCoins() {
        const response = await this.get('tickers');
        const data = response.data;
        return Array.isArray(data)
            ? data.map((data) => this.coinReducer(data))
            : [];
    }
    //reducer function to split the data into a way that the schema will accept
    coinReducer(coins) {    
        return {
        id: coins.id,
        symbol: coins.symbol,
        name: coins.name,
        nameid: coins.nameid,
        rank: coins.rank,
        price_usd: coins.price_usd,
        percent_change_24h: coins.percent_change_24h,
        percent_change_1h: coins.percent_change_1h,
        percent_change_7d: coins.percent_change_7d,
        price_btc: coins.price_btc,
        market_cap_usd: coins.market_cap_usd,
        volume24: coins.volume24,
        volume24a: coins.volume24a,
        csupply: coins.csupply,
        tsupply: coins.tsupply,
        msupply: coins.msupply,
    };
  }
}

module.exports = CoinAPI;