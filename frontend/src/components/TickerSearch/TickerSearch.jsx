import { Box, Flex } from "@chakra-ui/react";
import AddStocks from "./AddStocks";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import StockSelect from "./StockSelect";
import CountrySelector from "./CountrySelector";

const TickerSearch = () => {
  const [stock, setStock] = useState("");
  const [country, setCountry] = useState("");
  const config = {
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_TWELVE_API_KEY,
      "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
    },
  };
  const url = `https://twelve-data1.p.rapidapi.com/stocks?&format=json`;

  const { data, isLoading, isError, isSuccess } = useQuery(["stocks"], () =>
    axios.get(url, config)
  );

  if (isLoading) {
    return <Box textAlign={"center"}>Loading</Box>;
  } else if (isError) {
    return <Box>There was an error loading the data</Box>;
  } else if (isSuccess) {
    return (
      <Box w={"fit-content"} mx={"auto"}>
        <Flex direction={"row"} gap={2} justify={"center"}>
          <Flex direction={"column"} align={"flex-start"}>
            <AddStocks stock={stock} setStock={setStock} />
            <StockSelect data={data} stock={stock} country={country} />
          </Flex>
          <CountrySelector setCountry={setCountry} />
        </Flex>
      </Box>
    );
  }
};

export default TickerSearch;
