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
          <li className="flex gap-4">
            <a className="hover font-bold" href="#">
              Home
            </a>
            <a className="hover font-bold" href="#">
              About
            </a>
            <a className="hover font-bold" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
