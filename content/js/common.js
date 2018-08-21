//获取token
const GetToken = () => {
    const url = window.location.href;
    const regToken = /(?<=token=)[^&]+/g;
    const token = url.match(regToken);
    return token.toString();
};
const token = GetToken();



//自动判断时间
const GetStartDateAndEndDate=()=>{
    const myDate = new Date();
    let start;
    let end;
    //当前时间 myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
    //当前日
    let day = myDate.getDate();
    let startday;
    let endday;
    let month=myDate.getMonth() + 1;
    //星期一  查询4 5 6的数据
    if (myDate.getDay() == 1) {
        startday=day-4;
        endday=day-2;
        if (month<10) {
            month='0'+month;
        }
        if(startday<10){
            startday='0'+startday;
        }
        if (endday<10){
            endday='0'+endday;
        }
    } else {
        startday=day-2;
        endday=day-2;
        if (month<10) {
            month='0'+month;
        }
        if(startday<10){
            startday='0'+startday;
        }
        if (endday<10){
            endday='0'+endday;
        }
    }
    start = myDate.getFullYear() + "-" + month + "-" + startday;
    end = myDate.getFullYear() + "-" + month + "-" + endday;
    return {"startDay":start,"endDay":end }
};
//获取1号到  现在的时间
const GetMonthStartDateAndMonthEndDate=()=>{
    const myDate = new Date();
    let start;
    let end;
    //当前日
    let  month=myDate.getMonth()+1;
    if(month<10){
        month="0"+month;
    }
    let day=myDate.getDate();
    if(day<10){
        day="0"+day;
    }
    start = myDate.getFullYear() + "-" + month + "-01";
    end = myDate.getFullYear() + "-" + month + "-" +day ;
    return {"startDay":start,"endDay":end }
}





 // myDate.getYear();        //获取当前年份(2位)
    // myDate.getFullYear();    //获取完整的年份(4位,1970-????)
    // myDate.getMonth();       //获取当前月份(0-11,0代表1月)
    // myDate.getDate();        //获取当前日(1-31)
    // myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
    // myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
    // myDate.getHours();       //获取当前小时数(0-23)
    // myDate.getMinutes();     //获取当前分钟数(0-59)
    // myDate.getSeconds();     //获取当前秒数(0-59)
    // myDate.getMilliseconds();    //获取当前毫秒数(0-999)
    // myDate.toLocaleDateString();     //获取当前日期
    // var mytime=myDate.toLocaleTimeString();     //获取当前时间
    // myDate.toLocaleString( );        //获取日期与时间