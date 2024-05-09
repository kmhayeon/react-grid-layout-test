import {ChartjsDetailView} from "./ChartjsDetailView";
import './App.css';
import RechartsDetailView from "./RechartsDetailView";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      {/*<ChartjsDetailView/>*/}
      <RechartsDetailView/>
    </RecoilRoot>
  );
}

export default App;
