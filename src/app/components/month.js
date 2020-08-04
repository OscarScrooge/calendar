import React,{Component} from "react";
import {connect} from 'react-redux';
import {getMonth, nextMonth, prevMonth} from "../actions/actions";
import './css/cssMonth.css';
import './css/cssControls.css';

class Month extends Component{

    componentDidMount(){

       let month = new Date().getMonth();
       this.props.dispatch(getMonth(month));

    }

    render() {
        return(
            <div className="month">
                <button onClick={e=>{this.props.dispatch(prevMonth())}}>
                    <span className="material-icons left-arrow">
                       play_arrow
                    </span>
                </button>
                {this.props.properties.month}
                <button onClick={e =>{this.props.dispatch(nextMonth())}}>
                     <span className="material-icons rigth-arrow">
                       play_arrow
                    </span>
                </button>
            </div>
        );
    }

}

export default connect()(Month);
