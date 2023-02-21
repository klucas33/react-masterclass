import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const BASENAME = "https://klucas33.github.io/react-masterclass";

function Router() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
