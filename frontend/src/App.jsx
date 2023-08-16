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
          direction={["column", "column", "column", "column", "row"]}
          justify={["center", "center", "center", "center", "space-between"]}
          align={["center", "center", "center", "center", "flex-start"]}
          mt={8}
          px={[4, 4, 48]}
        >
          <TickerSearch />
          <Portfolio />
        </Flex>
      </QueryClientProvider>
    </>
  );
}

export default App;
