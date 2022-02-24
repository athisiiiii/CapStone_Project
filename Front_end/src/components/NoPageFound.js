import { Link } from "react-router-dom";

const NoPageFound = () => {
        return(
            <div style={{color:"red"}}>
            <p>
                Sorry, THE PAGE DOESN'T EXIST!!! 
            </p>
           BACK HOME PAGE?  <Link to={"/"} >Home</Link>

            </div>
        );
}
export default NoPageFound;