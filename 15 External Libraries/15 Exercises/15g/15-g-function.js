export default function isWeekEnd(date){
            let anyDate = dayjs(date);
            let day = anyDate.format('dddd');
            if(day === "Saturday" || day === "Sunday"){
                console.log(`Yes, ${day}! It's Weekend.`);
            }else{
                console.log(`${day}! No It's not weekend.`);
            }
        }
