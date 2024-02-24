import Buttonbar2 from "../Components/Buttonbar2";
import MainCard from "../Components/MainCard";
import Card1 from "../RightComponents/Card1";
import PerfCard2 from "../Components/PerfCard2";
import Card2 from "../RightComponents/Card2";
import Team from "../Components/Team";
const Contain = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div style={{ width: "75%" }} className="px-3 mx-4 ">
        <MainCard />
        <br></br>
        <Buttonbar2 />
        <br></br>
        <PerfCard2></PerfCard2>
        <br></br>
        <Team></Team>
      </div>
      <div style={{ width: "25%" }} className="mr-10 !important">
        <Card1></Card1>
        <br></br>
        <Card2></Card2>
      </div>
    </div>
  );
};
export default Contain;
