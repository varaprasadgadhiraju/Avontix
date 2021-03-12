import React from 'react'
import "./home.css"
import { AppstoreFilled,RightCircleOutlined}from '@ant-design/icons'
import MaterialIcon from 'material-icons-react';
import Patients from './Patients/patients';



function Home(){
  
        return(
            <div>
                <div className="header"> </div>
                <div className="main">
                <div className="icons">
                <p><AppstoreFilled /></p> 
                <p><MaterialIcon icon="filter" color="black"  size={20}/></p> 
                <p><MaterialIcon icon="analytics" color="black"  size={20}/></p>
                <p><MaterialIcon icon="medical_services" color="black"  size={20}/></p>
                <p><MaterialIcon icon="note_add" color="black"  size={20}/></p>
                <p><MaterialIcon icon="brightness_medium" color="black"  size={20}/></p>
                </div>
               <Patients/>
             
                    <div className="details">
                    <p>Settings <RightCircleOutlined /> <b>James</b></p>    
                   
                    <div style={{display:"flex",flexDirection:"row",width:"300px",height:"35px", backgroundColor:"white", boxShadow: "2px 2px 2px 2px white",marginBottom:"20px",paddingTop:"5px",paddingLeft:"5px"}}>
                        <b>Test action:</b>
                    <select style={{ width: "202px", height: "27px" ,marginLeft: "5px" }} name="cars" id="cars">
                    <option value="volvo">spicemen collections</option>
                        <option value="saab">spicemen collections1</option>
                        <option value="opel">spicemen collections2</option>
                        <option value="audi">spicemen collections3</option>
                    </select>
                    </div>
                    <div style={{backgroundColor:"white",width:"1275px",height:"120px",border:"0.5px", boxShadow: "2px 2px 2px 2px gray"}}>
                    <div className="detailsofpatients">
                        <div>
                      <b>Patient name</b><p>James</p>
                       </div>
                       <div>
                      <b>UID number</b><p>00015448p</p>
                       </div>
                       <div>
                      <b>OP/IP Number</b><p>SD550</p>
                       </div>
                       <div>
                      <b>Age</b><p>25</p>
                       </div>
                       <div>
                      <b>Gender</b><p>Male</p>
                       </div>
                       <div>
                      <b>Mobile number</b><p>6302454881</p>
                       </div>
                       <div>
                      <b>Order by date</b><p>June 15,2020</p>
                       </div>
                    </div>
                    </div>
                    <div style={{backgroundColor:"white",width:"1275px",height:"150px",border:"0.5px", boxShadow: "2px 2px 2px 2px gray"}}>
                    <div className="detailsofpatients">
                        <div>
                      <b>S.No.</b><p>01</p>
                       </div>
                       <div>
                      <b>Testname/code</b><p>Foorizen section
                         <p>000012</p>
                      </p>
                       </div>
                       <div>
                      <b>Service name</b><p>ASSOC</p>
                       </div>
                       <div>
                      <b>Department</b><p>Neurologist</p>
                       </div>
                       <div>
                      <b>Process days</b>
                      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                      <div>
                         <b>23</b><p>Days</p>
                      </div>
                      <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
                         <b>03</b><p>Hrs</p>
                      </div>
                      <div>
                         <b>23</b><p>Mins</p>
                      </div>
                      </div>
                       </div>
                       <div>
                      <b>Emergency</b>
                      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                      <div>
                         <b>23</b><p>Days</p>
                      </div>
                      <div style={{paddingLeft:"10px",paddingRight:"10px"}}>
                         <b>03</b><p>Hrs</p>
                      </div>
                      <div>
                         <b>23</b><p>Mins</p>
                      </div>
                      </div>
                       </div>
                       <div>
                      <b>Report days</b><p>June 15,2020</p>
                       </div>
                       <div>
                      <b>Applicable</b><p>June 15,2020</p>
                       </div>
                    </div>
                   
                    </div>
                    <div style={{backgroundColor:"white",width:"1275px",height:"250px",border:"0.5px", boxShadow: "2px 2px 2px 2px gray"}}>
                        <div style={{width:"175px",paddingTop:"20px",paddingLeft:"20px"}}>
                    <label for="birthday"><b>Date</b></label>
                    <input style={{backgroundColor:"whitesmoke",width:"250px",height:"30px",border:"none",marginLeft:"3px",marginTop:"2px"}} type="date"/></div>
                    <div style={{width:"175px",paddingTop:"20px",paddingLeft:"20px"}}>
                    <label for="birthday"><b>Notes</b></label>
                    <input style={{backgroundColor:"whitesmoke",width:"800px",height:"50px",border:"none",marginLeft:"3px",marginTop:"2px"}} type="text" id="birthday" placeholder="Notes" name="birthday"/></div>
                    <button style={{color:"white", cursor:'pointer', backgroundColor:"#0053ed",width:"200px",marginLeft:"25px",marginTop:"20px",paddingTop:"10px",paddingBottom:"10px",borderRadius:"4px"}}>Specimen type/method</button>
                    </div>
                  
                    </div>
            </div>
           
        </div>
        )
}
export default Home