import React from 'react';


class Latihan8 extends React.Component{
    

    state = {
        angka : 0
    }
    tambah = ()=>{
        this.setState({
            angka: this.state.angka + 10
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.angka}</p>
                <button type = "submit" onClick = {this.tambah}>Submit</button>
            </div>
        )
    }
}

export default Latihan8;