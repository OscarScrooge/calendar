import React,{Component} from "react";
import {connect} from 'react-redux';
import Year from "../components/year";

class ContainerYear extends Component{


    render(){

        let {properties} = this.props;
        return(
            <div>
                <Year properties={properties}/>
            </div>
        );
    }
}

const mapStateProps = state => {

    return{
        properties : state.ReducerUno,
    }

}

export default connect(mapStateProps)(ContainerYear);
