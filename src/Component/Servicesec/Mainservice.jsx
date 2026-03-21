import React from 'react'
import './Mainservice.css';
import { Link } from 'react-router-dom';
import Maincard from '../Commonsec/Mainservicecard';
import steelimg from '../../Assets/steel welding.jpg';
import metalimg from '../../Assets/metal welding.png';
import pipeimg from '../../Assets/pipe welding.jpg';
import manufactimg from '../../Assets/manufacturing.png';
import aluminumimg from '../../Assets/Aluminum system.jpg';
import fabriimg from "../../Assets/img3.jpg";
// import cutoming from "../../Assets/custom welding.png";

export default function Mainservice() {
  const cardData =[
    {
      id: 1,
      img: steelimg,
      title: "STEEL WELDING",
      description: "Our steel welding service ensures strong and precise metal connections. We provide high-quality welding for buildings and machinery.",
      button:"READ MORE"
    },
    {
      id: 2,
      img: metalimg,
      title: "METAL WELDING",
      description:"Our metal welding services ensure strong and precise metal joints. We provide reliable solutions for industrial and structural metal works.",
      button:"READ MORE",
    },
    {
      id: 3,
      img: pipeimg,
      title: "PIPE WELDING",
      description:"Pipe welding creates strong and reliable pipe structures. It helps maintain safe and efficient fluid or gas flow systems.",
      button:"READ MORE",
    },
    {
      id: 4,
      img: manufactimg,
      title: "MANUFACTURING",
      description: "Manufacturing welding plays an important role in building strong metal components. It improves the quality and strength of industrial products.",
      button:"READ MORE",
    },
    {
      id: 5,
      img: aluminumimg,
      title: "ALUMINUM SYSTEM",
      description: "Aluminum system welding helps create strong and corrosion-resistant metal structures. It is widely used in modern fabrication and manufacturing projects.",
      button: "READ MORE",
    },
    {
      id: 6,
      img: fabriimg,
      title: "FABRICATION",
      description: "Fabrication welding is used to create strong metal structures and components. It is widely used in construction, machinery, and industrial projects.",
      button: "READ MORE",
    },
    // {
    //   id: 7,
    //   img: cutoming,
    //   title:"CUSTOM WELDING",
    //   description: "Our custom welding services provide tailored solutions for different metal projects. We ensure precision, strength, and high-quality workmanship.",
    //   button: "READ MORE",
    // }
  ];
  return (
    <section>
      <div className="mainpage">
        <div className="mainservice">
          <h4>EXPERT WELDING SERVICES </h4>
        </div>
      </div>

      <div className="mainservicebox">
        {cardData.map(({id,img,title,description,button})=>(
          <Maincard
          key={id}
          img={img}
          title={title}
          description={description}
          button={button}
          />
        ))}
      </div>
    </section>
  )
}