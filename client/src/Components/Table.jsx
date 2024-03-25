const Table = ({ passwordArray }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <div className="passwords">
      <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
      {passwordArray.length === 0 && <div>No Password To Show</div>}
      {passwordArray.length !== 0 && (
        <table className="table-auto w-full rounded-md overflow-hidden">
          <thead className="bg-purple-800 text-white">
            <tr>
              <th className="py-2">Site</th>
              <th className="py-2">Username</th>
              <th className="py-2">Password</th>
            </tr>
          </thead>
          <tbody className="bg-purple-100">
            {passwordArray.map((item, index) => (
              <tr key={index}>
                <td className="py-2 border border-white text-center w-32 file:">
                  <div className="flex items-center justify-center gap-3">
                    <a href={item.site}>{item.site}</a>
                    <div
                      className="cursor-pointer"
                      onClick={() => copyText(item.site)}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                      ></lord-icon>
                    </div>
                  </div>
                </td>
                <td className="py-2 border border-white text-center w-32">
                  <div className="flex items-center justify-center gap-3">
                    {item.username}
                    <div
                      className="cursor-pointer"
                      onClick={() => copyText(item.username)}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                      ></lord-icon>
                    </div>
                  </div>
                </td>
                <td className="py-2 border border-white text-center w-32">
                  <div className="flex items-center justify-center gap-3">
                    {item.password}
                    <div
                      className="cursor-pointer"
                      onClick={() => copyText(item.password)}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                      ></lord-icon>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default Table;
