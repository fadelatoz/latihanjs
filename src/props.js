import React from 'react';
import Latihan8 from './jsonlatihan';

class Latihan14 extends React.Component{
    state = {
        nama: "mamat",
        mobil: "fortuner",
    }

    handlechange = e=>{
        this.setState ({
     [e.target.name] : e.target.value

        })
    }
    render(){
        return (
            <div>
                <p>nama anda adalah {this.state.nama}</p>
                <input type = "text" name = "nama " 
                value = {this.state.nama}
                onChange = {this.handlechange}></input>

<               div>
                <p>mobil saya adalah {this.state.mobil}</p>
                <select name = "mobil" value = {this.state.mobil} 
                onChange = {this.handlechange}>
                    <option value = "fortuner">fortuner</option>
                    <option value = "kijang">kijang</option>
                    <option value = "xenia">xenia</option>
                    <option value = "doyok">doyok</option>
                    <option value = "ferarri">ferarri</option>

                </select>
                </div>
            </div>
        )
    }

    
}
export default  Latihan14;