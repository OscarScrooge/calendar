let currentMOnth;
let months =["January","February","Mars","April","May","June","July","August","September","October","November","December"];
let weekDays = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
let currentYear=0;

export function getMonth(month_number) {
    currentMOnth = month_number;
    return{
        type: 'GET_MONTH',
        month_number : currentMOnth,
        months,
        month:months[month_number],
        number_of_days:0,
        start_day:0,
        weekDays,
    }

}


export function nextMonth() {
    if(currentMOnth>11){
        currentMOnth=0;
    }else{
        currentMOnth++;
    }
    return{
        type: 'NEXT_MONTH',
        month_number:currentMOnth,
        months,
        month: '',
        number_of_days:0,
        start_day:0,
        weekDays,
    }

}


export function prevMonth() {
    if(currentMOnth<0){
        currentMOnth=11;
    }else{
        currentMOnth--;
    }
    return{
        type: 'PREV_MONTH',
        month_number:currentMOnth,
        months,
        month: '',
        number_of_days:0,
        start_day:0,
        weekDays,
    }

}


export function getDays() {

    return{
        type: 'GET_DAYS',
        month_number:currentMOnth,
        start_day:0,
        number_of_days:0,
        weekDays,
    }

}

export function getYear(year) {
    currentYear = year;
    return{
        type:'GET_YEAR',
        currentYear
    }

}

export function nextYear() {
   currentYear++;
    return{
        type:'NEXT_YEAR',
        currentYear,
        number_of_days:0,
        start_day:0,
        month_number:currentMOnth,
    }

}

export function prevYear() {
    currentYear--;
    return{
        type:'PREV_YEAR',
        currentYear,
        number_of_days:0,
        start_day:0,
        month_number:currentMOnth,

    }

}
