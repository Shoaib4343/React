import React from "react";

const R = ({r,lorem}) => {

    const box = {
       boxShadow: "6px 6px 0px rgba(144, 238, 144, 0.8)",
       display: "inline-block",
       padding: "10px 34px" ,
       border: '1px solid black',
       fontSize:'60px',
       fontWeight:'bold',
       marginBottom:'9px',

    }
    const Secondbox = {
        boxShadow: "6px 6px 0px rgba(144, 238, 144, 0.8)",
       display: "inline-block",
       padding: "5px 8px" ,
       border: '1px solid black',
       maxWidth: '91px',
       fontSize: '11px',
       boxSize: 'border-box',
    }
    return (
        <div style={{marginTop:'120px'}} >
            <span >
                <h1 style={box}>{r}</h1>
            </span>
            <br></br>

            <span style={Secondbox}>
                <p>
                {lorem}
                </p>

                {/* <img src={ require("./Images/one.png")} alt="hi there"></img> */}
                {/* this scr requre  will work only when the images is in the scr forlder  */}


                {/* this will work only when the images is in the public folder  */}
                <img src="Images/download.jpeg" style={{maxWidth:'65px',margin:'2px auto'}}></img>
            </span>
            
        </div>
    );
}

export default R;