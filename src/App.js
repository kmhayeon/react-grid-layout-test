import {ChartjsDetailView} from "./ChartjsDetailView";
import './App.css';
import RechartsDetailView from "./RechartsDetailView";
import RechartsDetailTest from "./RechartsDetailTest";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <RecoilRoot>
      {/*<ChartjsDetailView/>*/}
      {/*<RechartsDetailView/>*/}
      <RechartsDetailTest/>
    </RecoilRoot>
  );
}

export default App;
