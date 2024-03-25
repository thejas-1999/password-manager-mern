const NavBar = () => {
  return (
    <nav className="bg-slate-400 text-white ">
      <div className="mycontainer flex  justify-between items-center px-4 py-5">
        <div className="logo font-bold px-4 h-14 text-white text-2xl">
          <span className="text-purple-700">&lt;</span>
          Pass<span className="text-purple-700">OP</span>
          <span className="text-purple-700">/&gt;</span>
        </div>
        <ul>
          {/*  <li className="flex gap-4">
            <a className="hover font-bold" href="#">
              Home
            </a>
            <a className="hover font-bold" href="#">
              About
            </a>
            <a className="hover font-bold" href="#">
              Contact
            </a>
          </li> */}
        </ul>
        <a href="https://github.com/thejas-1999/password-manager-mern">
          <button className="text-white my-5 rounded-full bg-purple-500  flex gap-2 justify-between items-center">
            <img
              className=" p-1 w-10 rounded-full "
              src="icons/github.png"
              alt="github logo "
            />
            <span className="font-bold px-2">GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
