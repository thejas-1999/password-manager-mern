const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="  bg-slate-50 myContainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-purple-700">&lt;</span>
          Pass<span className="text-purple-700">OP</span>
          <span className="text-purple-700">/&gt;</span>
        </h1>
        <p className="text-purple-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className=" flex flex-col p-4 text-black gap-3">
          <input
            className="rounded-full border border-purple-500 w-full p-4 py-1"
            type=""
          />
          <div className="flex w-full justify-between gap-8">
            <input
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type=""
            />
            <input
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type=""
            />
          </div>
          <button>Add Password</button>
        </div>
      </div>
    </>
  );
};
export default Manager;
