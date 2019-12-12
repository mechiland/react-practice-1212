import React from 'react';
import logo from './logo.svg';
import './App.css';

const team = [
  { id: 'xqzhou', name: "周晓强", email: "xqzhou@hipacloud.com"},
  { id: 'mchen', name: "陈金洲", email: "xqzhou@hipacloud.com"},
  { id: 'yzhuang', name: "黄一钊", email: "xqzhou@hipacloud.com"},
  { id: 'byliu', name: "刘丙乙", email: "xqzhou@hipacloud.com"},
]

const Users = ({users}) => {

  return <ul>
    {users.forEach(u => {
      return <li>{u.name}</li>
    })}
  </ul>
}

function App() {
  return (
    <div className="App">
      <h1>团队列表</h1>
      <Users users={team}/>
    </div>
  );
}

export default App;
