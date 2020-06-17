import React from 'react';
import './CSS/tambahform.scss'


class Latihan8 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            jadwal : [
                {hari:"senin", mapel:"b.indo",guru:"subagio"},
            ],   
            
            jadwalselasa : [
                {hari : "selasa",mapel : "b.ingg",guru : "mamat"}
            ],

            jadwalrabu : [
                {hari : "rabu", mapel: "agama", guru:"handoko"}
            ] 
        
        }

    }

    render(){
        return(
     <div>
         <ol className = "senin">
             {this.state.jadwal.map(items => 
               <div>
               <p key = {items.hari}>Hari :{items.hari}</p>
                <p> Mata pelajaran : {items.mapel}</p>
                <p>Guru : {items.guru}</p>
                </div>)
                }
                </ol>

<div>
    <ol>
        {this.state.jadwalselasa.map(items2=>
        <div>
            <p>hari : {items2.hari}</p>
            <p>Mata Pelajaran : {items2.mapel}</p>
            <p>Guru : {items2.guru}</p>
            <button type="submit" onClick = {items2}>Submit</button>
            </div>)}
    </ol>
</div>

<div>
    <ol>
        {this.state.jadwalrabu.map(items3 =>
            <div>
                <p>hari : {items3.hari}</p>
                <p>Mata pelajaran : {items3.mapel}</p>
                <p>guru : {items3.guru}</p>
            </div>)}
    </ol>
</div>
                
         
     </div>

    
           
        )
    }
}

export default Latihan8;