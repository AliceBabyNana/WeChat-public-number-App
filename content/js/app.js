//创建一个类 保存每天文章信息
class ArticleInfo {
    // 构造  
    constructor(Id, Date, YueDuSum, DianZanSum,Status) {
        this.Id = Id;
        this.Date = Date;//发文时间
        this.YueDuSum = YueDuSum;//阅读数
        this.DianZanSum = DianZanSum;//点赞数
        this.status=Status;//状态
    }
}

//所有文章li(每天的文章对应一个li)
const $AllArticelLi = $("#list>li");


//给每个文章li创建 对应的按钮 class=JLFBtn 绑定事件
const CreatBtn = () => {
    //遍历所有文章列表 创建按钮 dayNum自定义属性
    for (let i = 0; i < $AllArticelLi.length; i++) {
        $AllArticelLi.eq(i).find("div[class='weui-desktop-mass__overview']").append(`<button dayNum="${i}"  class='JLFBtn btn btn-danger'>Start</button>`);
    }
    //绑定点击事件  
    $("#list").on("click", "button[class^='JLFBtn']", function () {
        const o = GetArticleInfo(this);

        alert(`总阅读数:${o.YueDuSum}   总点赞数:${o.DianZanSum}`);
    });
};

//创建一张汇总表
const CreateTable = () => {
    //创建之前先删除
    $("#JLFTableDiv").remove()
    $("div[class='weui-desktop-panel weui-desktop-panel_overview']").append("<div id='JLFTableDiv'><div class='weui-desktop-panel'><table id='JLFTable' class='table table-bordered table-hover'><tr><th>编号</th><th>总阅读数</th><th>总点赞数</th><th>发文时间</th><th>发文状态</th></tr></table></div></div>");
    const $JLFTable = $("#JLFTable");
    //遍历所有AllArticelLi 获取每天发文的信息，放进数组
    const myArr = [];
    for (let i = 0; i < $AllArticelLi.length; i++) {
        myArr.push(GetArticleInfo(null, i));

    }
    console.log(myArr);
    //记录错误数据 
    let errorNum = 0;
    myArr.forEach((o) => {
        if (parseInt(o.YueDuSum) == 0 && parseInt(o.DianZanSum) == 0) {
            errorNum += 1;
        }
    });

    console.log(parseInt(errorNum) == parseInt($AllArticelLi.length));
    //停止执行
    if (parseInt(errorNum) == parseInt($AllArticelLi.length)) {
        return;
    }
    console.log(errorNum);
    console.log($AllArticelLi.length);

    myArr.forEach(o => {
        $JLFTable.append(`<tr>
            <td>${o.Id}</td>
            <td>${o.YueDuSum}</td>
            <td>${o.DianZanSum}</td>
            <td>${o.Date}</td>
            <td>${o.status}</td>
            </tr>`);
    });

};
//创建刷新表格按钮
const CreateFreshBtn = () => {
    $("div[class='weui-desktop-panel weui-desktop-panel_overview']").append("<hr><button id='JLFFresh'  class='btn btn-danger'>刷新</button>")
    //绑定点击事件
    $("div[class='weui-desktop-panel weui-desktop-panel_overview']").on("click", "button[id='JLFFresh']", function () {
        CreateTable();
    });
};

//获取一天的文章信息 o: 含有[daynum]属性的button  e:$AllArticelLi li的编号 0开始
const GetArticleInfo = (o, e) => {
    let dayNum;
    //o有传参
    if (o != null) {
        dayNum = $(o).attr("dayNum");
    } else {
        //o没有传参
        dayNum = e;
    }

    //阅读总数
    let yueDuSum = 0;
    //点赞总数
    let dianzanSum = 0;
    //统计阅读总数
    $AllArticelLi.eq(dayNum).find("li[class='weui-desktop-mass-media__data appmsg-view']>span").each((i, o) => {
        yueDuSum += parseInt($.trim($(o).text()));
    });
    //统计点赞总数 weui-desktop-mass-media__data appmsg-like
    $AllArticelLi.eq(dayNum).find("li[class='weui-desktop-mass-media__data appmsg-like']>span").each((i, o) => {
        dianzanSum += parseInt($.trim($(o).text()));
    });
    //发文时间
    const time = $AllArticelLi.eq(dayNum).find("em[class='weui-desktop-mass__time']").text();
    //发文天数编号
    const Id = parseInt(dayNum) + 1;
    //该天的状态（已删除,发送完毕）
    const status=$.trim($AllArticelLi.eq(dayNum).find("span[class^='js_status_txt']").text());
    const articleInfo = new ArticleInfo(Id, time, yueDuSum, dianzanSum,status);
    return articleInfo;
};



/*开始创建*/
CreateImg = () => {
    const srcArry = [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607329301&di=fd5c49a21352feac42080337f64b1a59&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201510%2F17%2F20151017134243_uiw3W.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607490196&di=befed90b2601077c352d7e2c5e69ee05&imgtype=0&src=http%3A%2F%2Fi1.acgimage.com%2F541950%2Fa26febba7ee54e06.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607554586&di=4804fac6c96e3059aad1d8d84ce82463&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201601%2F23%2F104548b6t9r8okrlripkpv.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607585236&di=1fa51788b5a48f828bdbf59ead7a0a7f&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F15%2F20150815154941_VYv4P.png"
    ];
    const num=Math.floor(Math.random()*3+0);
    $('div[class="weui-desktop-panel weui-desktop-panel_overview"]').append(`<img style='width:100%;height:500px;' class='img-responsive' src='${srcArry[num]}'/>`)
    .append("<h1 id='MyDesc' style='opacity:0.7;'>本插件仅供技术交流，自愿使用，请勿用于非法用途，使用本插件导致工作上出现的问题或产生法律纠纷与开发者本人无关--江凌峰</h1>");
    setTimeout(()=>{
        $("#MyDesc").css("display","none");
    },10000);
};
CreateImg();

CreatBtn();
CreateFreshBtn();
CreateTable();

setTimeout(CreateTable, 2500);






