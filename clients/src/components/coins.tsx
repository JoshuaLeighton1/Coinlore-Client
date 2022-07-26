import React, { useEffect, useState } from "react";
import { Button, Heading, Box, Spacer, Wrap, Grid} from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import DisplayCard from "./info";
import { isVisible } from "@testing-library/user-event/dist/utils";

//Creating a query
const CoinList = () => {

  const COINS = gql`
    query coins {
      coins {
        id
        symbol
        name
        price_usd
        price_btc
        percent_change_24h
        market_cap_usd
        rank
      }
    }
  `;

const STORAGE_KEY = "hiddenItemsKey";
var storedIds = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

const { loading, error, data } = useQuery(COINS);
const [infoVisible,setInfoVisible] = useState(false);
const [hiddenItems, setHiddenItems] = useState<Array<number>>(storedIds)

//defining functions for display or making data invisible
const handleShowButton = () =>{
  setInfoVisible(true)

}

const handleHideButton = () =>{
  setInfoVisible(false)
}

const handleHideRow = (id: number) =>{
  setHiddenItems([...hiddenItems, id]); 
}
const handleShowRow = () => {
  setHiddenItems([]);
}
//useEffect to persist data to local storage
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(hiddenItems));
}, [hiddenItems])

// Try to avoide declaring a component inside another component or container.
// Reason for this is that the component will be 'recreated' every time the wrapping component is rendered.

//LoadCoins function responsible for displaying all the Coins queried
const LoadCoins = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    return data.coins.map(
      ({id, symbol, name, price_usd, rank, price_btc, percent_change_24h, market_cap_usd}: { id: number; symbol: string; name: string, price_usd:string, rank: number,price_btc:string,  percent_change_24h:string,market_cap_usd:string}) => {
        if(!hiddenItems.includes(id)) {
            
            return (
              <div key={id}>
                <Wrap>
                  <Box
                    bg="dark"
                    w="100%"
                    p={5}
                    color="white"
                    borderWidth="1px"
                    borderRadius="lg"
                    display="flex"
                    mt="2"
                    justifyContent="center"
                    >
                    <Grid>
                    <p>
                      {symbol}: {name}
                    </p>
                    {<Box display="flex" alignItems="center" pl= "1">
                      <DisplayCard isVisible= {infoVisible} name={name} symbol = {symbol} price_btc = {price_btc} price_usd= {price_usd} percent_change_24h={percent_change_24h} market_cap_usd={market_cap_usd}/>
                    </Box>}
                    <Spacer />
                    <Box display="box">
                      <Button onClick={handleShowButton}colorScheme="red" mt="2" ml="2">
                        Info
                      </Button>
                      <Button onClick={handleHideButton} colorScheme="yellow" mt="2" ml="2">
                        Hide-info
                      </Button>
                      <Button onClick={() => handleHideRow(id)} colorScheme="yellow" mt="2" ml="2">
                        Hide Row
                      </Button>
                    </Box>
                    </Grid>
                  </Box>
                </Wrap>
              </div>
            )
        }
      } 
    );
  };
  
  return (
    <div>
      <Heading p={7} >Graduate Crypto Loader</Heading>
      <Spacer />
      {!loading && <Box><Button colorScheme="red" mb= "3" ml="2" onClick={handleShowRow}>Show hidden coins</Button></Box>}
      {LoadCoins()}
    </div>
  );
};

export default CoinList;
