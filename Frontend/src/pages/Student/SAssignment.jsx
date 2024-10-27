import { useContext } from "react";
import './SAssigment.css';
import { ThemeContext } from "../../ThemeContext";
import {FiSettings} from "react-icons/fi";
import { FcAddImage } from "react-icons/fc";


const SAssignment = () => {
  const {DarkTheme} = useContext(ThemeContext)
  return (
    <div className={`assignmet ${DarkTheme && "dark"}`}>
     <div className="row header">
      <h1 className="txt-head">Due Assignment</h1>
      <div className="divider"></div>
      <h2 className="txt-head2"> ITPM (IT3010)/Laboratory Assignment_01</h2>
      <br></br>
      <div className="row header2" >
        <h3 className="ok">Submission Status :  <h4 className="ok1"> No Attempt</h4></h3>
        <h3 className="ok">Grading Status :  <h4 className="ok1"> No Graded</h4></h3>
        <h3 className="ok">Due Date :  <h4 className="ok1"> No Attempt</h4></h3>
        <h3 className="ok">Time Remaining:  <h4 className="ok1"> No Attempt</h4></h3>
      </div>
      <br></br>
      <div className="row header3">
        <h1 className="ok3">Upload Your Assignments</h1>
        <button>
        <FcAddImage className='icon' />
        </button>
        <br></br>
        <div>
        <button className="cancell" type="button">Cancell</button>
        <button className="done" type="button">Done</button>
        </div>
      </div>
      </div>

      

      


    </div>
    
  )
}

export default SAssignment;