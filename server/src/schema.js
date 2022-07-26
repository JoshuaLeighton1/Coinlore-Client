const {gql} = require('apollo-server');

const typeDefs = gql`

" These are the Query options for the user "

  type Query {
    coins: [Coin]
    coin(name: String): Coin
    markets: [MarketData]
  }

"These are the Coin fields available for query by the user "

  type Coin {
    id: String
    symbol: String
    name: String
    nameid: String
    rank: Int
    price_usd: String
    percent_change_24h: String
    percent_change_1h: String
    percent_change_7d: String
    price_btc: String
    market_cap_usd: String
    volume24: Float
    volume24a: Float
    csupply: String
    tsupply: String
    msupply: String
  }

"These are the queryable marketdata fields"

  type MarketData {
    name: String
    base: String
    quote: String
    price: Float
    price_usd: Float
    volume: Float
    volume_usd: Float
    time: Int
  }
`;

module.exports = typeDefs;