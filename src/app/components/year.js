import React,{Component} from "react";
import {connect} from 'react-redux';
import {nextYear,getYear,prevYear} from "../actions/actions";
import './css/cssYear.css';
class Year extends Component{

    componentDidMount(): void {
        let year=new Date().getFullYear();
        this.props.dispatch(getYear(year));
    }

    render(){
        return(
            <div className="year">
                <button onClick={e=>{this.props.dispatch(prevYear())}}>
                    <span className="material-icons left-arrow">
                       play_arrow
                    </span>
                </button>
                {this.props.properties.currentYear}
                <button onClick={e=>{this.props.dispatch(nextYear())}}>
                    <span className="material-icons rigth-arrow">
                       play_arrow
                    </span>
                </button>
            </div>
        )
    }
}

export default connect()(Year);
