import { useMemo, useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const users = [
    "Shukumar Ghosh",
    "Arif Hossain",
    "Tamim Iqbal",
    "Nasrin Jahan",
    "Ayesha Akter",
    "Rasel Miah",
  ];

  const filterUsers = useMemo(() => {
    return users?.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
  }, [search]);
  console.log(filterUsers);

  return (
    <div className="">
      <h1>Users</h1>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      {filterUsers?.map((user) => {
        return <p key={user}>{user}</p>;
      })}
    </div>
  );
}

export default App;
