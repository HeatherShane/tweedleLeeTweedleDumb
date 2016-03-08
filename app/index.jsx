import style from './styles/';

import React from 'react';
import ReactDOM from 'react-dom';

class MessageInput extends React.Component{
  constructor(){
    super();
    this.state = {

    array: [
    {
      text: "hey",
      time: 12:00,
      user: "Charles"
    },
    {
      text: "lololol",
      time: 6:66,
      user: "RuPaul"
    };
  ]
};
render(){
  var messages =this.state.array.map(function(obj){
    return (<ul>
    <li key={obj}>{text}</li>
    <li key={obj}>{time}</li>
    <li key={obj}>{user}</li>
  </ul>)
  })

  return(
    <div>
    {messages}
    </div>

  )
  // var currentUser =
  };
};
};
 var mountpoint = document.querySelector("#app")
ReactDOM.render(<MessageInput/>, mountpoint)
