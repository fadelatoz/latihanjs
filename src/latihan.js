import React, { Component } from 'react';
import './CSS/latihanjs.scss';
import foto from './Fadel Foto.jpg'

function Greeting(props){
return <h1>Curiculum Vitae{props.name}umurnya adalah {props.age}</h1>
}



class Latihan extends Component{
    render(){
      return(
        <div class="container">
        <h1>Curiculum Vitae</h1>
            <div class = "biodata">
            <img src = {foto} className = "foto"></img>


            <h4>Jalan Raya Bogor Rt.05/10 no.28
                Kramat Jati,Jakarta Timur
                Cell+(62)-838-94535352
                E-MAIL fadelalatas81@gmail.com</h4>
                </div>


            <div class ="summary">
            <h4>Summary : </h4>
            <p>A highly motivated and dedicated computer science graduate from a prestigious university in
Indonesia and a certified engineer in database management system . Currently, actively looking for an
opportunity to expand my knowledge and skills in any industry that needs for young talent in
information or operation technologies.</p>

            <h4>Education : </h4>

            <ul>
            <li>Bachelor Degree of Computer Science from Gunadarma University – Jakarta ,Indonesia(graduated on Dec 15th, 2019)</li>
            <li>Budi Warman 1 Senior High School – East Jakarta, DKI Jakarta, Indonesia (graduated in
April 2015)</li></ul>

<h4>Training and Certificate : </h4>     



<ul>
    <li>Sql Server Project</li>
    <li>Oracle for Intermediate</li>
    <li>Sql Server for intermediate</li>
</ul>
<h4>Skills : </h4>
<ul>
<li>Mysql</li>
<li>Python</li>
<li>Oracle</li>
<li>Microsot Office</li>

</ul>

<h4>Project :</h4>
<p>Making E-Commerce Website Computer Tools Using Php and
Mysql.( Submitted to complete some of the requirements in achieving
a bachelor's degree equivalent.)</p>


            </div>
        
        </div>
      )
    }
  }
  
  
  
  export default Latihan;