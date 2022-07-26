const { RESTDataSource } = require('apollo-datasource-rest');
//marketAPI that allows for market data to be queried
class marketAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.coinlore.net/api/coin/markets/"
    }
    async getMarketData() {
        const response = await this.get('?id=90');
        return Array.isArray(response)
            ?  response.map( (response) => this.marketReducer(response))
            : [];
    }
    //Reducer function that allows for a format the schema requires
    marketReducer(markets) {    

        return {
            name: markets.name,
            base: markets.base,
            quote: markets.quote,
            price: markets.price,
            price_usd: markets.price_usd,
            volume: markets.volume,
            volume_usd: markets.volume_usd,
            time: markets.time,
    };
}
} 

module.exports = marketAPI;