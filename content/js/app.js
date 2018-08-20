//创建一张汇总表
const CreateTable = () => {
    //创建之前先删除
    $("#JLFArticleInfoTableDiv").remove();
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append("<div id='JLFArticleInfoTableDiv'><div class='weui-desktop-panel'><table id='JLFArticleInfoTable' class='table table-bordered table-hover'><tr><td colspan='6'>文章信息统计</td></tr><tr><th>编号</th><th>总阅读数</th><th>头条阅读数</th><th>总点赞数</th><th>发文时间</th><th>发文状态</th></tr></table></div></div>");
    const $JLFTable = $("#JLFArticleInfoTable");
    //遍历所有AllArticelLi 获取每天发文的信息，放进数组
    const myArr = [];
    for (let i = 0; i < $AllArticelLi.length; i++) {
        myArr.push(GetArticleInfo(null, i));
    }
    myArr.forEach(o => {
        $JLFTable.append(`<tr>
            <td>${o.Id}</td>
            <td>${o.YueDuSum}</td>
            <td>${o.TopReadCount}</td>
            <td>${o.DianZanSum}</td>
            <td>${o.Date}</td>
            <td>${o.Status}</td>
            </tr>`);
    });

};
//创建刷新表格按钮
const CreateFreshBtn = () => {
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append("<hr><button   id='JLFFresh'  class='btn btn-danger JLFTableBtn'>刷新</button>")
    //绑定点击事件
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").on("click", "button[id='JLFFresh']", function () {
        CreateTable();
        AutoGetUserInfo();//此方法内部   把userinfolist 清空 自动创建table
    });
};


CreateImg = () => {
    const srcArry = [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607329301&di=fd5c49a21352feac42080337f64b1a59&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201510%2F17%2F20151017134243_uiw3W.jpeg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607490196&di=befed90b2601077c352d7e2c5e69ee05&imgtype=0&src=http%3A%2F%2Fi1.acgimage.com%2F541950%2Fa26febba7ee54e06.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607554586&di=4804fac6c96e3059aad1d8d84ce82463&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201601%2F23%2F104548b6t9r8okrlripkpv.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534607585236&di=1fa51788b5a48f828bdbf59ead7a0a7f&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201508%2F15%2F20150815154941_VYv4P.png"
    ];
    const num = Math.floor(Math.random() * 3 + 0);
    $('div[class^="weui-desktop-panel weui-desktop-panel_overview"]').append(`<img style='width:100%;height:500px;' class='img-responsive' src='${srcArry[num]}'/>`)
        .append("<span id='MyDesc' style='opacity:0.7;'></span>");
    $("#MyDesc").typed({
        strings: ["如果使用本插件导致工作上出现的问题,与一切后果与开发者本人无关--JLF 2018.8.18"],
        typeSpeed: 50,
        loop: true,
        startDelay: 100
    });
    setTimeout(() => {
        $("#MyDesc").css("display", "none");
    }, 15000);

};

CreateSelectBtn = () => {
    //创建查询按钮
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append("<button  class='JLFTableBtn btn btn-danger' id='JLFBtnSelect'>查询</button>");
    //绑定点击事件
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").on("click", "button[id='JLFBtnSelect']",AutoGetUserInfo);
}

CreateUserInfoTable = () => {
    $("#JLFUserInfoTableDiv").remove();
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append("<div id='JLFUserInfoTableDiv'><div class='weui-desktop-panel'><table id='JLFUserInfoTable' class='table table-bordered table-hover'><tr><td colspan='5'>用户分析</td></tr><tr><th>日期</th><th>总粉丝数</th><th>净关注人数</th><th>新增加关注人数</th><th>取消关注人数</th></tr></table></div></div>");
    const $JLFTable = $("#JLFUserInfoTable");
    userInfoList.forEach(p => {
        $JLFTable.append(`<tr>
        <td>${p.Date}</td>
        <td>${p.Cumulate_user}</td>
        <td>${p.Netgain_user}</td>
        <td>${p.New_user}</td>
        <td>${p.Cancel_user}</td>
        </tr>`);
    });
};





if (window.location.href.indexOf("mp.weixin.qq.com/cgi-bin/home") != -1) {
    CreateImg();
    CreatBtn();
    CreateFreshBtn();
    CreateSelectBtn();
    setTimeout(CreateTable, 2000);
}







