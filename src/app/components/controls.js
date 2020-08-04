import React,{Component} from "react";
import {connect} from 'react-redux';
import {nextMonth,prevMonth} from "../actions/actions";
import './css/cssControls.css';

class Controls extends Component{


    render() {
        return(
            <div className="controls">
                <button onClick={e=>{this.props.dispatch(prevMonth())}}>Prev</button>
                <button onClick={e =>{this.props.dispatch(nextMonth())}}>Next</button>
            </div>
        );
    }

}

export default connect()(Controls);
