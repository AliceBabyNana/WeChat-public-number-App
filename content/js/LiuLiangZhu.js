class LiuLiangZhu {
    constructor(date,money) {
        this.Date = date;        // 日期
        this.Money=money/100;   //钱
    }
}

let TotalMoney=0;
const LiuLiangZhuList=[];

const GetLiuLiangZhu=(beginDate, endDate)=>{
    $.getJSON("https://mp.weixin.qq.com/promotion/publisher/publisher_stat",
    {
        "action": "biz_ads_stat",
        "page": "1",
        "page_size": "10",
        "start_date": beginDate,
        "end_date": endDate,
        "slot": "1",
        "token": token,
        "appid": "",
        "spid": "",
        "_": "1534775904961",
    },
    function (data, textStatus, jqXHR) {
        //data.list 每天流量主 
        //data.summary 起始日-截止日 汇总
        const list=data.list;
        TotalMoney=(data.summary.income/100);
        for (let i = 0; i < list.length; i++) {
            const date=data.list[i].date;
            const money=data.list[i].income;
            LiuLiangZhuList.push(new LiuLiangZhu(date,money));
        }
        //TotalMoney=new TotalMoney();
    });
};


const AutoGetLiuLiangZhu = () => {
    const o = GetStartDateAndEndDate();
    //获取数据
    LiuLiangZhuList.length = 0;
    GetLiuLiangZhu(o.startDay, o.endDay);
    setTimeout(CreateLiuLiangZhuInfoTable, 1500);
}

