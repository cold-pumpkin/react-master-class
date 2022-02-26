import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

/*
interface IRouterProps {  // App 에서 toggleDark를 props로 보내려면 인터페이스 필요
  toggleDark: () => void;
}
*/
//function Router({toggleDark}: IRouterProps) {
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin/>}></Route>
        <Route path="/" element={<Coins/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;