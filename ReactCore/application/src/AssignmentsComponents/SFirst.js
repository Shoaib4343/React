import React from "react";

const SFirst = ({s,lorem}) => {

    const box = {
       boxShadow: "5px 5px 0px rgba(255, 105, 180, 1)",
       display: "inline-block",
       padding: "10px 36px" ,
       border: '1px solid black',
       fontSize:'60px',
       fontWeight:'bold',
       marginBottom:'9px',

    }
    const Secondbox = {
        boxShadow: "6px 6px 0px rgba(255, 105, 180, 1)",
       display: "inline-block",
       padding: "5px 8px" ,       border: '1px solid black',
       maxWidth: '91px',
       fontSize: '11px',
       boxSize: 'border-box',
    }
    return (
        <div  >
        

            <span >
                <h1 style={box}>
                    {s}
                </h1>
            </span>
            <br></br>

            <span style={Secondbox}>
                <p>
                {lorem}
                </p>

                {/* <img src={ require("./Images/one.png")} alt="hi there"></img> */}
                {/* this scr requre  will work only when the images is in the scr forlder  */}


                {/* this will work only when the images is in the public folder  */}
                <img src="Images/new (1).jpeg" style={{maxWidth:'40px',margin:'2px 15px'}}></img>
            </span>
            
        </div>
    );
}

export default SFirst;