import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
function RightSideNav() {
  return (
    <div>
      <div className="p-4 mb-6 space-y-3">
        <h2>Login With</h2>
        <button className="w-full btn btn-outline">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="w-full btn btn-outline">
          <FaGithub></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4 mb-6 ">
        <h2 className="mb-4">Find us on</h2>
        <a
          className="flex items-center p-4 text-xl border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a className="flex items-center p-4 text-xl border-x " href="">
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          className="flex items-center p-4 text-xl border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>
      {/* queZoone */}
      <div className="p-4 mb-6 space-y-3">
        <h2>Q Zone</h2>
        <img src="./assets/qZone1.png" />
        <img src="./assets/qZone2.png" />
        <img src="./assets/qZone3.png" />
      </div>
    </div>
  );
}

export default RightSideNav;
