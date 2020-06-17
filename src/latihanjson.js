import React from 'react';

class Latihan8 extends React.Component{
    state = {
        angka: 200
    };
    render(){
        return(
            <div>
                <p>{this.state.angka}</p>
                <button>Tambah</button>
            </div>
        )
    }
}

export default Latihan8;
