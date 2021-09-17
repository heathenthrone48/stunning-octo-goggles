// This is a functional Component File

import React from "react";

// First Method | Can be imported as   
// import Greet from "../components/Greet.js";
// import GreetAlias from "../components/Greet.js";
// function Greet(){
//     return(
//         <h1 className="uk-width-1-1">Hi Header</h1>
//     );
// };

//  Second Method  , Requires export as | export default Greet; 
// const Greet = () => <h1 className="uk-width-1-1">Hi Header</h1> ;

// Third Method
// const Greet = () => {
//     return <h1 className="uk-width-1-1">Hi Header</h1> ;
// };

// Fourth Method = Named Export ( The component which calls Greet need to Import it as ->)
// import { Greet } from "../components/Greet.js";
// Explicit export statement not required
export const Greet = () => <h1 style={{fontFamily: "consolas", fontSize:"60px", margin :"5% 0%"}}>Hello Human</h1>;


// export default Greet;   //This function can be Accessed using any Alias
