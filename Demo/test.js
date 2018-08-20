
function setCookie(name,value,day)
{
    var date = new Date();
    date.setDate(date.getDate()+day);
    document.cookie = name + "=" + value +"; expires=" +date+"; path=/";
}
function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){ 
                c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
     }
    return "";
}

GetToken=()=>{
    const url=window.location.href;
    const regToken=/(?<=token=)[^&]+/g
    const token= url.match(regToken);
   
    return token;
};
var token=GetToken();
//2018-08-16 date格式
GetUserInfo=(beginDate,endDate)=>{
     alert(token);
      $.getJSON("https://mp.weixin.qq.com/misc/useranalysis",
            {
                begin_date:beginDate,
                end_date:endDate,
                source:'99999999,99999999',
                token:token,// 必须这样才正确   token:gettoken() 这样就不对
                lang:'zh_CN',
                f:'json',
                ajax:'1',
                random:'0.3018668890073837'
            },function (data) {
                console.log(data);
                setCookie("mycooa",data,1);
            });
};

if(window.location.href.indexOf("mp.weixin.qq.com/misc/useranalysis")!= -1){
    //GetUserInfo("2018-8-16","2018-8-18");
}


//cancel_user   取消关注人数
//cumulate_user 累计关注人数
//netgain_user  净增关注人数
//new_user      新关注人数
//date          日期

