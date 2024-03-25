import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert(`Show the password`);
    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/hidden.png";
    }
  };

  const savePassword = () => {
    setPasswordArray([form]); // Set the password array with only the new entry
    localStorage.setItem("passwords", JSON.stringify([form])); // Store only the new entry in localStorage
    console.log([form]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="  myContainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-purple-700">&lt;</span>
          Pass<span className="text-purple-700">OP</span>
          <span className="text-purple-700">/&gt;</span>
        </h1>
        <p className="text-purple-900 text-lg text-center">
          Your own Password Manager
        </p>

        <div className=" flex flex-col p-4 text-black gap-3 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            className="rounded-full border border-purple-500 w-full p-4 py-1"
            type=""
            name="site"
            placeholder="Enter Website URL..."
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type=""
              name="username"
              placeholder="Enter Username..."
            />
            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-purple-500 w-full p-4 py-1"
                type=""
                name="password"
                placeholder="Enter Password..."
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="py-1"
                  width={20}
                  src="icons/hidden.png"
                  alt=""
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex gap-2 justify-center items-center bg-purple-500 rounded-full px-4 py-2 w-fit hover:bg-purple-300 border-2 border-purple-700"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};
export default Manager;
