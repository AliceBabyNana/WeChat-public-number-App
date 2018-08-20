//自动判断时间 获取信息
GetStartDateAndEndDate=()=>{
    const myDate = new Date();
    let start;
    let end;
    //当前时间 myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate();
    //当前日
    const day = myDate.getDate();
    //星期一  查询4 5 6的数据
    if (myDate.getDay() == 1) {
        start = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + (day - 4);
        end = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + (day - 2);
    } else {
        //查询前一天的数据
        start = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + (day - 2);
        end = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + (day - 2);
    }
    return {"startDay":start,"endDay":end }
};







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