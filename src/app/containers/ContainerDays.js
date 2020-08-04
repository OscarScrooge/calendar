import React,{Component} from "react";
import {connect} from 'react-redux';
import Days from "../components/days";

class ContainerDays extends Component{


    render(){

        const {props} = this.props;
        return(
            <div>
                <Days props={props}/>
            </div>
        );
    }
}

const mapStateProps = state => {

          return{
              props : state.ReducerUno,
          }

}

export default connect(mapStateProps)(ContainerDays)
