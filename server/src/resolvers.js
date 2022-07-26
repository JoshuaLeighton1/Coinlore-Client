//Resolvers

module.exports = {
    Query: {
      coins: (_, __, {dataSources}) => dataSources.coinAPI.getAllCoins(),
      markets: (_, __, {dataSources}) => dataSources.marketAPI.getMarketData()
    }
  };

