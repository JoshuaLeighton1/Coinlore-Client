import React, { useState } from "react";
import { Box, Spacer, Badge, Center } from "@chakra-ui/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
  //declaring props for DisplayCard function
  type DisplayCardProps = {
    symbol:string
    name: string
    price_usd:string
    price_btc:string
    percent_change_24h:string
    market_cap_usd:string
    isVisible:boolean
  }
 
   // pass props into the function and render if boolean is set to true
   const DisplayCard:React.FC<DisplayCardProps> = ({symbol, name, price_usd,price_btc,percent_change_24h,market_cap_usd,isVisible}) => {
   
    return isVisible?(<Center alignItems="center">
     <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
        m={3}
      >
       <Box p="3">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {symbol}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              USD:{price_usd} &bull; BTC{price_btc} 
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {name}
          </Box>

          <Box>
            {percent_change_24h}
            <Box
             as="span" 
             color="gray.600" 
             fontSize="sm"
             >
              / 24h Change
            </Box>
          </Box>

          <Box as="span" ml="2" color="gray.600" fontSize="sm">
          Market Cap: {market_cap_usd} 
          </Box>
        </Box>
      </Box>
      </Center>
    ):(<></>);
   }
   


export default DisplayCard;