import React , {useState} from "react";
import './App.css';
import UserForm from './Components/Users/UserForm';
import UsersList from './Components/Users/UsersList';
import Card from "./Components/UI/Card";

function App() {
  const [newData , setNewData] = useState([]);

  const dataUser = (uName, uAge)=>{
    
      setNewData((prevUser)=>{
        return [...prevUser,{name: uName, age: uAge, id:Math.random().toString()}];});
  };
  return (
    <React.Fragment>
      <Card>ADMIN</Card>
      <UserForm onAddUser={dataUser} />
      <UsersList users ={newData}/>
    </React.Fragment>
  );
}

export default App;
