import {Component} from 'react';
import './Homepage.css';
import landscape from '../../assets/horus1.png';
import lifecross from '../../assets/lifecross.png';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
      <div className="Homepage">
       <Link className="backtohome" to="/"> <img className="lifecross" src={lifecross}></img></Link>
        <img className="backgroundimg" src={landscape} alt="background"></img>
        <div className="homepageContainer">
          <h1 className="title1">ILAHI</h1>
          <Link className="buttonjoin" to="/FunctionCard"> 
           Discover your Gods
          </Link>
        </div>
      </div>
    );
  }
  
  export default Homepage;
  