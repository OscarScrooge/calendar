import React,{Component} from "react";
import {connect} from 'react-redux';
import Month from "../components/month";

class ContainerMonth extends Component{

    render(){
        let {properties} =  this.props;
        return(
                <div>
                <Month properties={properties}/>
            </div>
        );
    }

}

const mapStateProps = state =>{
   return{
       properties:state.ReducerUno,
   }
}


export default connect(mapStateProps)(ContainerMonth);
