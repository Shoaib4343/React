import React from "react";

const M = ({m,lorem}) => {

    const box = {
       boxShadow: "5px 5px 0px rgba(0, 128, 128, 0.5)",
       display: "inline-block",
       padding: "10px 24px" ,
       border: '1px solid black',
       fontSize:'60px',
       fontWeight:'bold',
       marginBottom:'9px',

    }
    const Secondbox = {
        boxShadow: "6px 6px 0px rgba(0, 128, 128, 0.5)",
       display: "inline-block",
       padding: "5px 8px" ,
       border: '1px solid black',
       maxWidth: '91px',
       fontSize: '11px',
       boxSize: 'border-box',
    }
    return (
        <div  style={{marginTop:'120px'}}>

            <span >
                <h1 style={box}>{m}</h1>
            </span>
            <br></br>

            <span style={Secondbox}>
                <p>
                {lorem}
                </p>

                {/* <img src={ require("./Images/one.png")} alt="hi there"></img> */}
                {/* this scr requre  will work only when the images is in the scr forlder  */}


                {/* this will work only when the images is in the public folder  */}
                <img src="Images/card (1).jpeg" style={{maxWidth:'43px',margin:'2px 15px'}}></img>
            </span>
            
        </div>
    );
}

export default M;