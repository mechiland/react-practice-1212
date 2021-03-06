import React from "react";
import { useDispatch } from 'react-redux';
import { Provider, useSelector } from "react-redux";

import { addUser } from "./reducers/usersSlice";
import store from "./store";

const team = [
  { id: "xqzhou", name: "周晓强", email: "xqzhou@hipacloud.com" },
  { id: "mchen", name: "陈金洲", email: "xqzhou@hipacloud.com" },
  { id: "yzhuang", name: "黄一钊", email: "xqzhou@hipacloud.com" },
  { id: "byliu", name: "刘丙乙", email: "xqzhou@hipacloud.com" }
];

console.log(store.getState().users.all);

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.all)

  const handleAddUser = (event) => {
    dispatch(addUser({ id: 'React', name: 'React', email: "react@example.com" }));
  }

  return (
    <>
      <ul>
        {users.map(u => {
          return <li>{u.name}</li>;
        })}
      </ul>
      <button onClick={handleAddUser}>add user</button>
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>团队列表</h1>
        <Users />
      </div>
    </Provider>
  );
}

export default App;
