import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Counter from "./components/Counter";

import { userLogin, userLogout } from "./redux/actions/user";

import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const currentUser = useSelector((state) => state.user.data || "");
  const isLoading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  const handleChangeInputUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin(username));
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };

  return (
    <div className="App">
      <h1>Redux Thunk</h1>
      <h2>User</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChangeInputUsername}
        />
        <button type="submit">Login</button>
      </form>

      <h2>Current user</h2>
      <p>{isLoading ? "loading..." : currentUser}</p>

      <button onClick={handleLogout}>Logout</button>

      <Counter />
    </div>
  );
}
