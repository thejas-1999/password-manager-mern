import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Table from "./Table";

const Manager = () => {
  const ref = useRef();
  const passwordref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    fetchPasswords();
  }, []); // Run only once on component mount

  const fetchPasswords = () => {
    axios
      .get("http://localhost:5000/api/pass")
      .then((response) => {
        setPasswordArray(response.data);
      })
      .catch((error) => {
        console.error("Error fetching passwords:", error);
        // Handle error, show message, etc.
      });
  };

  const handlePass = () => {
    const data = form;
    axios
      .post(`http://localhost:5000/api/pass`, data)
      .then((response) => {
        console.log("Password added successfully:", response.data);
        // Update passwordArray state with the new password
        setPasswordArray([...passwordArray, response.data]);
        // Optionally, you can also reset the form after adding the password
        setForm({ site: "", username: "", password: "" });
      })
      .catch((error) => {
        console.error("Error adding password:", error);
        // Handle error, show message, etc.
      });
  };

  const showPassword = () => {
    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
      passwordref.current.type = "text";
    } else {
      ref.current.src = "icons/hidden.png";
      passwordref.current.type = "password";
    }
  };

  const editPassword = (id) => {
    console.log(`Editing Password with id ${id}`);

    const passwordToEdit = passwordArray.find((password) => password.id === id);
    setForm(passwordToEdit);
    const updatedPasswords = passwordArray.filter(
      (password) => password.id !== id
    );
    setPasswordArray(updatedPasswords);
  };

  const deletePassword = (id) => {
    console.log(`Deleting Password with id ${id}`);
    axios
      .delete(`http://localhost:5000/api/pass/${id}`)
      .then((response) => {
        console.log("Password deleted successfully:", response.data);
        // Optionally, update state or perform any necessary actions after deleting password
        // Here you can refetch passwords to update the list
        fetchPasswords();
      })
      .catch((error) => {
        console.error("Error deleting password:", error);
        // Handle error, show message, etc.
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="px-2 md:px-0 md: myContainer">
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
            type="site"
            name="site"
            placeholder="Enter Website URL..."
          />
          <div className="flex w-full justify-between gap-8">
            <input
              value={form.username}
              onChange={handleChange}
              className="rounded-full border border-purple-500 w-full p-4 py-1"
              type="username"
              name="username"
              placeholder="Enter Username..."
            />
            <div className="relative">
              <input
                ref={passwordref}
                value={form.password}
                onChange={handleChange}
                className="rounded-full border border-purple-500 w-full p-4 py-1"
                type="password"
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
            onClick={handlePass} // Corrected onClick function call
            className="flex gap-2 justify-center items-center bg-purple-500 rounded-full px-4 py-2 w-fit hover:bg-purple-300 border-2 border-purple-700 ring"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
          </button>
        </div>
        <Table
          passwordArray={passwordArray}
          deletePassword={deletePassword}
          editPassword={editPassword}
        />
      </div>
    </>
  );
};
export default Manager;
