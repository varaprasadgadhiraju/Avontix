import React from 'react'
import '../home.css'
import MaterialIcon from 'material-icons-react';
import { DoubleRightOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import PatientDetails from '../patientdetails/patientdetails';
class Patients extends React.Component{
   
    render(){
        // console.log(this.state.hover)
        return(
            <div className="patients" >
             <p style={{marginLeft:"20px"}}><DoubleRightOutlined /></p>
                <PatientDetails color="red"/>
                <PatientDetails color="lightblue"/>
                <PatientDetails color="red"/>
                <PatientDetails color="yellow"/>
                <PatientDetails color="yellow"/>
                <PatientDetails color="lightblue"/>
               
            </div>
        )
    }
}
export default Patients