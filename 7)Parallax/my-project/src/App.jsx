import Navbar from "./MyComponents/Navbar/Navbar";
import bg from "./Images/bg.jpg";
import left_mountain from "./Images/left-mountain.png";
import moon from "./Images/moon.png";
import mountain from "./Images/mountain.png";
import right_mountain from "./Images/right-mountain.png";
import sky from "./Images/sky.png";
import tele from "./Images/tele.png";
import { useEffect, useRef } from "react";

export default function App() {


  // create ref for each img
  const refleft_mountain = useRef(null);
  const refmoon = useRef(null);
  const refmountain = useRef(null);
  const refright_mountain = useRef(null);
  const refsky = useRef(null);
  const reftele = useRef(null);


  const handleScroll=()=>{
    const scrollPosition = window.scrollY;

    refsky.current.style.top = scrollPosition * 1.5 + 'px';
    refright_mountain.current.style.left = scrollPosition *2.5 + 'px'
    refmountain.current.style.right = scrollPosition *1 +'px';
    refmoon.current.style.left = scrollPosition * 1 + 'px';
    reftele.current.style.top = scrollPosition * 1.4 + 'px';
    reftele.current.style.left = scrollPosition * 2 + 'px';
    refleft_mountain.current.style.left = scrollPosition * -1.5 + 'px';
    
  }
    useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <img src={bg} alt="" className="w-full h-screen " />
      <section >
        <img className="absolute top-0 left-0 h-screen w-full pointer-events-none z-0" src={sky} ref={refsky} alt="" />
        <img className="absolute top-0 left-0 h-screen w-full pointer-events-none" src={right_mountain} ref={refright_mountain} alt="" />
        <img className="absolute top-0 left-0 h-screen w-full pointer-events-none" src={mountain} ref={refmountain} alt="" />
        <img className="absolute top-0 left-0 h-screen w-full pointer-events-none" src={moon} ref={refmoon} alt="" />
        <img className="absolute top-0 left-0 h-screen w-full pointer-events-none" src={tele} alt="" ref={reftele} />
        <img className="absolute top-0 left-0 h-screen w-full pointer-events-none" src={left_mountain} ref={refleft_mountain} alt="" />
      </section>


      <p className="bg-[#0c446c] text-white p-20 z-50 relative">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatibus fugit nobis maxime repudiandae. Temporibus quis eius omnis eum aliquid optio veritatis, alias molestiae sunt quae ipsam amet animi vero?
      </p>
    </div>
  );
}
