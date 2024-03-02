import React from "react";
import { Button } from "react-bootstrap";
const MyStydent = ({value,increment,argument}) =>{
    const h1Style = {
        background:"rgba(255,255,255,.3)",
        backdropFilter: "blur(3px)",
        boxShadow: "0px 0px 20px white ",
        color:"Black",
        width:"25%",
        height: "24vh",
        marginTop:"40px",
        margin:"auto",
        textAlign:"center",
        padding:"10px",
        display: "flex",
        justifyContent: "center",
        fontSize:"50px",
      }  
    return(
        <>
            <div > 
                <Button style={h1Style} >Value : {value} </Button>
                <div style={{ display:"flex", justifyContent:"center"}}>            
                    <Button variant="primary" onClick={()=>{ increment(argument) }} style={{boxShadow:"0px 0px 20px blue"}}>+{argument} </Button>
                    <Button variant="danger" onClick={()=>{ increment(-argument)} } style={{boxShadow:"0px 0px 20px red"}}>-{argument} </Button>
                </div>
            </div>
        </>
    )
}

export default MyStydent;