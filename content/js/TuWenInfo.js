class TuWenInfo {
    constructor(gzhReadCount,tuWenReadCount,fenXiangZhuanFaCount,date) {
       this.Date=date;
       this.GZHReadCount=gzhReadCount;//公众号会话阅读次数
       this.TuWenReadCount=tuWenReadCount;//图文总阅读次数
       this.FenXiangZhuanFaCount=fenXiangZhuanFaCount;//分享转发次数
    }
}

const TuWenInfoList=[];

const GetTuWenInfo=(beginDate, endDate)=>{
    $.getJSON("https://mp.weixin.qq.com/misc/appmsganalysis",
    {
        "action":"report",
        "type":"daily",
        "begin_date":beginDate,
        "end_date":endDate,
        "token":token,
        "lang":"zh_CN",
        "f":"json",
        "ajax":"1",
        "random":"0.8973625561251151"
    }, function (data) {
        const list=data.item;   //user_source 0 - user_source  99999999 为一组 个数不是固定的
        let result=[];
        let temp=[];
        for(let i=0;i < list.length;i++){
             const e=list[i];
             if(e.user_source!=99999999){
                temp.push(e);   
             }else{
                 temp.push(e);
                 result.push(temp);
                 temp=[];
             }
        }
        
         //开始处理
         for (let i = 0; i < result.length; i++) {
             const e = result[i];
             const date=e[0].ref_date;
             const gzhReadCount= e[0].int_page_read_count;
             const fenXiangZhuanFaCount=e[0].share_count;
             const tuWenReadCount=e[4].int_page_read_count;
             TuWenInfoList.push(new TuWenInfo(gzhReadCount,tuWenReadCount,fenXiangZhuanFaCount,date));
         }
    });
};

const AutoGetTuWenInfo = () => {
    const o = GetStartDateAndEndDate();
    //获取数据
    TuWenInfoList.length = 0;
    GetTuWenInfo(o.startDay, o.endDay);
    setTimeout(CreateTuWenInfoTable, 1500);
}
