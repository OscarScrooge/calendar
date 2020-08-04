
function reducerUno(state:{} , action) {

     switch (action.type) {
         case 'GET_MONTH':

         case 'NEXT_MONTH':

         case 'PREV_MONTH':
             console.log(state)
             return {
                    ...state,
                     month: action.months[action.month_number],
                     start_day:new Date(state.currentYear,action.month_number,1).getDay(),
                     number_of_days: new Date(state.currentYear,action.month_number+1,0).getDate(),

             };
         case 'GET_DAYS':
             return {
                 ...state,
                 start_day:new Date(state.currentYear,action.month_number,1).getDay(),
                 number_of_days: new Date(state.currentYear,action.month_number+1,0).getDate(),
                 weekDays : action.weekDays,
             };

         case 'GET_YEAR':
         case 'PREV_YEAR':
         case 'NEXT_YEAR':
             return {
                 ...state,
                 currentYear: action.currentYear,
                 start_day:new Date(action.currentYear,action.month_number,1).getDay(),
                 number_of_days: new Date(action.currentYear,action.month_number+1,0).getDate(),
             }

         default:
             return {
                    ... state,
                    weekDays : [],
                    currentYear: new Date().getFullYear(),
                 };
     }
}

export default reducerUno;
