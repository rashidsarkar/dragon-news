import moment from "moment";

function Header() {
  return (
    <div className="text-center">
      <img className="mx-auto" src="./assets/logo.png" alt="" />
      <p className="text-lg">Journalism Without Fear or Favour</p>
      <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
}

export default Header;
