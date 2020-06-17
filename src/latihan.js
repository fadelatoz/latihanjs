import React from 'react';


class Foo extends React.Component{
  constructor(props){
    super(props)
    this.shoot = this.shoot.bind(this)
  }
  shoot(a){
    alert(a)
  }

  render(){
    return(
      <button type = "submit" onClick = { ()=> this.shoot('goll')} >tessss</button>
    )
  }
}

export default Foo;