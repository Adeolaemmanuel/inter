import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w3-bar w3-padding-16 w3-top w3-white">
      <div className="w3-bar-item w3-btn w3-black w3-round w3-margin-left">
        <Link href="/">Home</Link>
      </div>
    </nav>
  );
};

export default Nav;
