
require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const coinAPI = require('./datasources/coin');
const marketAPI = require('./datasources/market');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    coinAPI: new coinAPI(),
    marketAPI: new marketAPI(),
  })
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});