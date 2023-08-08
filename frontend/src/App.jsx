import { Flex } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import TickerSearch from "./components/TickerSearch/TickerSearch";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Flex
          direction={["column", "column", "row"]}
          justify={["center", "center", "space-around"]}
          align={"center"}
          mt={8}
        >
          <TickerSearch />
          <Portfolio />
        </Flex>
      </QueryClientProvider>
    </>
  );
}

export default App;
