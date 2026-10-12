import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Index />
    <Toaster
      theme="dark"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#1a1710",
          border: "1px solid rgba(196,160,80,0.3)",
          color: "hsl(40 15% 88%)",
          fontFamily: "'Space Grotesk', system-ui, sans-serif",
        },
      }}
    />
  </QueryClientProvider>
);

export default App;
