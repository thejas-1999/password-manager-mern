const Footer = () => {
  return (
    <div className="bg-slate-400 text-white flex flex-col justify-center items-center">
      <div className="logo font-bold px-4 h-14 text-white text-xl">
        <span className="text-purple-700">&lt;</span>
        Pass<span className="text-purple-700">OP</span>
        <span className="text-purple-700">/&gt;</span>
      </div>
      <div>
        <div className="logo  px-4 h-14 text-white text-sm">
          <span>Created With </span>
          <span className="text-purple-900">&lt;</span>
          <span className="text-purple-900">TK</span>
          <span className="text-purple-900">/&gt; </span>
          <span>By Thejas.K</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
