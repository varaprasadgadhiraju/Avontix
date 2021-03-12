import React from 'react'
import MaterialIcon from 'material-icons-react';

class PatientDetails extends React.Component{
    state={
        hover:false
    }
    mouseover=()=>{
        this.setState({
            hover:true
        })
    }
    mouseleave=()=>{
        this.setState({
            hover:false
        })
    }
    render(){
        return(
            <div className="hover" onMouseLeave={this.mouseleave} onMouseEnter={this.mouseover} style={{ position:"relative", backgroundColor:"white",width:"60px",height:"80px",border:"0.5px", boxShadow: "0px 1px 0px 0px gray"}}>
            <p className={this.props.color} style={{border:"1px",borderRadius:"50px",height:"30px",width:"33px",paddingLeft:"5px",paddingTop:"7px",marginLeft:"8px"}}><i style={{fontSize:"20px",marginLeft:"10px"}} class="fas fa-male"></i></p>
            <p style={{marginLeft:"5px"}}>Age:30</p>
            {this.state.hover? 
            <div className="onhover">
                <div className="arrow"></div>
                <b>Shane Watson</b>
                <p>Patient ID:00F445</p>
                <p>OP/IP Number:A01245</p>
                </div> :null }
            </div>
        )
    }
}
export default PatientDetails