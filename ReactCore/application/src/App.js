import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyForm from "./Form/MyForm";
import SubmitButton from "./Form/SubmitButton";

const App = () => {
  const [data, changeData] = useState("");

  const changeValue = (e) => {
    console.log(e.target.value);
    changeData({ ...data, [e.target.name]: e.target.value });
  };

  const submitChange = (e) => {
    e.preventDefault();
    console.log("the value is : ", data);
  };

  return (
    <>
      <div className="container">
        <form
          action=""
          className="form form-control w-50 m-auto mt-1 card p-4 shadow-lg"
        >
          <h2>Registration Form</h2>
          <hr />
          <MyForm
            label="Enter Your username : "
            placeholder="Enter Your Name "
            ty="text"
            propValue={data.username}
            changeValue={changeValue}
            name="username"
          />
          <br />
          {/* <MyForm label="Enter Your Father Name : " placeholder='Enter Your Father Name ' ty="text" propValue={data.fathername}  changeValue={changeValue}  name="fathername" /> <br /> */}
          <MyForm
            label="Enter Your Address : "
            placeholder="Enter Your Address "
            ty="text"
            propValue={data.address}
            changeValue={changeValue}
            name="address"
          />
          <br />
          <MyForm
            label="Enter Your Contact : "
            placeholder="Enter Your Contact "
            ty="number"
            propValue={data.contact}
            changeValue={changeValue}
            name="contact"
          />
          <br />
          <MyForm
            label="Enter Your Email : "
            placeholder="Enter Your Email "
            ty="email"
            propValue={data.email}
            changeValue={changeValue}
            name="email"
          />
          <br />
          <MyForm
            label="Enter Your password : "
            placeholder="Enter Your password "
            ty="password"
            propValue={data.password}
            changeValue={changeValue}
            name="password"
          />
          <br />
          <SubmitButton submitChange={submitChange} />
        </form>
        
      </div>
    </>
  );
};

export default App;









































// import MyStydent from "./MyComponents/MyStudent";

// const App = () => {
//   const [value, changeValue] = useState(0);
//   const [second, secondvalue] = useState(0);
//   const [ third, changethird] = useState(0);

//   const increment = (n) =>{
//     changeValue((pre)=>pre + n
//     )}

//   const secIncrement= (n) => {
//     secondvalue(second + n)
//   }

//   const thirdINcrement = n => changethird(third + n)

//   return (
//     <>

//       <MyStydent  value={value} increment={increment}  argument={3} />
//       <MyStydent  value={second} increment={secIncrement}  argument={7} />
//       <MyStydent  value={third} increment={thirdINcrement}  argument={10}  />

//     </>
//   );
// }

// export default App;

// import {Nav, HeroSection,Card} from './MyComponents/Nav';
// import {Footer,Gallery,ProductCarousel} from './MyComponents/Footer';
// import {FeatureSection,KeyFeatures,OurSolutions} from './MyComponents/FeatureSection';
// import {Sidebar,RecentPosts,UsefulLinks} from './MyComponents/Sidebar';
// import {PricingPlan,BasicPlan,StandardPlan,PremiumPlan} from './MyComponents/PricingPlan';
// import SFirst from "./AssignmentsComponents/SFirst";
// import M from "./AssignmentsComponents/M";
// import A from "./AssignmentsComponents/A";
// import R from "./AssignmentsComponents/R";
// import T from "./AssignmentsComponents/T";

//     {/* <Button variant="primary">Primary</Button> */}

//     {/* <div style={{display:'flex', justifyContent:'space-around',width:'60%',margin:'auto',height:"100vh",alignItems:'center'}}>

//     <SFirst s="S" lorem="Lorem ipsum is a place holder text commonly used to demon strate the visual form of a docu ment or a type face without relying of the on meaningful the in content of " />

//     <M m="M" lorem="Lorem ipsum is a place holder text commonly used to demon strate the visual form of a docu ment or a type face without relying of the on meaningful the in content of " />

//     <A a="A" lorem="Lorem ipsum is a place holder text commonly used to demon strate the visual form of a docu ment or a type face without relying of the on meaningful the in content of " />

//     <R r="R" lorem="Lorem ipsum is a place holder text commonly used to demon strate the visual form of a docu ment or a type face without relying of the on meaningful the in content of " />

//     <T t="T" lorem="Lorem ipsum is a place holder text commonly used to demon strate the visual form of a docu ment or a type face without relying of the on meaningful the in content of " />

//     </div>*/}

//       {/* Nav*/}
//       {/* <Nav />
//       <HeroSection />
//       <Card />
//       <hr></hr> */}

//       {/* Footer*/}
//       {/* <Footer />
//       <Gallery />
//       <ProductCarousel />
//       <hr></hr> */}

//       {/* FeatureSection*/}
//       {/* <FeatureSection />
//       <KeyFeatures />
//       <OurSolutions />

//       <hr></hr>*/}

//       {/* Sidebar*/}
//       {/* <Sidebar />
//       <RecentPosts />
//       <UsefulLinks />

//       <hr></hr> */}

//       {/* PricingPlan*/}
//       {/* <PricingPlan />
//       <BasicPlan />
//       <StandardPlan />
//       <PremiumPlan />
//       <hr></hr> */}

// </>
//  const h1Style = {
//     backgroundColor:"black",
//     color:"white",
//     width:"50%",
//     marginTop:"40px",
//     margin:"auto",
//     textAlign:"center",
//     padding:"10px"
//   }

//   // const [value, changevalue] = useState(0);
//   // const increment = (n)=> {
//   //   changevalue((pre)=>{
//   //     return pre + n;
//   //   })
//   // }

//   // const decrement = (n)=> {
//   //   changevalue((pre)=>{
//   //     return pre +n;
//   //   });
//   // }
