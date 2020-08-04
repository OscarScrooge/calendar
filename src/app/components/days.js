import React,{Component} from "react";
import {connect} from 'react-redux';
import {getDays} from "../actions/actions";
import  './css/cssDays.css';

class Days extends Component{

   componentDidMount(): void {
       this.props.dispatch(getDays());
   }

    render() {

        const getDaysList = ()=>{
            let list = '';
            let aux = this.props.props.start_day;
            let count =1;
            for (let i=0;i<6;i++){
                list += '<tr class="number-day">';
                for (let j=0;j<7;j++){
                        if(j===this.props.props.start_day && aux!==-1){

                            list += '<td>'+count+'</td>';
                            aux=-1;
                        }else if(aux===-1 && count<this.props.props.number_of_days){
                            count++;
                            list += '<td>'+count+'</td>';

                        }else{
                            list += '<td></td>'
                        }


                }
                list += '</tr>';
            }
            return list;
        }

        return(
           <div className="days">
              <table className="grid-days">
                  <thead>
                  <tr className="name-day">
                      {
                          this.props.props.weekDays.map((v,k)=>

                                  <th key={k}>
                                      {v}
                                  </th>
                              )
                      }


                  </tr>
                  </thead>

                   <tbody dangerouslySetInnerHTML={{
                      __html: getDaysList()
                  }}/>


              </table>
           </div>
        )
    }
}

export default connect()(Days);
