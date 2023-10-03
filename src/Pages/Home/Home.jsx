import RightSideNav from "../../Components/RightSideNav/RightSideNav";
import Header from "../../Components/Shared/Header/Header";
import Navbar from "../../Components/Shared/Header/Navbar";
import LeftSideNav from "../../Components/Shared/LeftSideNav/LeftSideNav";

function Home() {
  return (
    <div className="font-poppins">
      <Header></Header>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border md:col-span-2">
          <h2>Mid News Comming soon</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
}

export default Home;
