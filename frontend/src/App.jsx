import "./App.css";
import Header from "./components/Header";
import TickerSearch from "./components/TickerSearch/TickerSearch";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <TickerSearch />
      </QueryClientProvider>
    </>
  );
}

export default App;
