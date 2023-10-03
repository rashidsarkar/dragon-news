import Marquee from "react-fast-marquee";
function BrakingNews() {
  return (
    <div className="flex">
      <button className="btn btn-success">Latest</button>
      <Marquee pauseOnHover>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}

export default BrakingNews;
