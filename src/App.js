import React from "react";
// import {Listitem} from "./components/Listitem"
// import {Category} from "./components/Category"
import {Join} from "./components/JoinUs"
import {Login} from "./components/Login"
import {Search} from "./components/Search"
import {Home} from "./components/Home"
import {Settings} from "./components/Settings"
import {Contact} from "./components/Contact"
import {Help} from "./components/Help"
import {Download} from "./components/Download"
import "./components/Menu.css"
import { Button } from "./components/Button";
//functional component
function App() {
 const data1=[{color: '#1ba7d0',name: 'JOIN US'},{color: '',name: 'LOGIN'},{color: '',name: 'SEARCH'},{color: '',name: 'HOME'},]
 const data2=[{color: '',name: 'SETTING'},{color: '',name: 'CONTACT US'},{color: '',name: 'HELP'},{color: '',name: 'DOWNLOADS'}]
  return (
    <>
    <div className="wrap">
    <div className="col-1">
      <Join/>
      <Login/>
      <Search/>
      <Home/>
    </div>
    <div className="col-2">
     <Settings/>
     <Contact/>
     <Help/>
     <Download/>
    </div>
    </div>
    <div className="wrap">
    <div>
      {data1.map((el)=>(<Button name={el.name}/>))}
    </div>
    <div>
     {data2.map((el)=>(<Button name={el.name}/>))}
    </div>
    </div>
  </>
  );
}

export default App;


// function App() {
//   const data=[{url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",title:"Top Offers"},
//   {url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",title:"Grocery"},
//   {url:"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",title:"Electronic"}]

//   return (

//     <div>
//      {data.map((el)=>(<Category imageUrl={el.url} title={el.title}  />))}
//     </div>
  

//   );
// }