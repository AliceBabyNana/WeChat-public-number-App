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

const CreateSelectBtn = () => {
    //创建查询按钮
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append("<hr><button  class='JLFTableBtn btn btn-danger' id='JLFBtnSelect'>查询</button>");
    //绑定点击事件
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").on("click", "button[id='JLFBtnSelect']",AutoSelect);
    $("#JLFBtnSelect").shake(30, 7, 10000);
}

const CreateUserInfoTable = () => {
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
const CreateLiuLiangZhuInfoTable = () => {
    $("#JLFLiuLiangZhuInfoTableDiv").remove();
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append(`<div id='JLFLiuLiangZhuInfoTableDiv'><div class='weui-desktop-panel'><table id='JLFLiuLiangZhuInfoTable' class='table table-bordered table-hover'><tr><td colspan='5'>流量主</td></tr><tr><th>日期</th><th>收入</th></tr><tr><td>总收入</td><td>${TotalMoney}</td></tr></table></div></div>`);
    const $JLFTable = $("#JLFLiuLiangZhuInfoTable");
    LiuLiangZhuList.forEach(p => {
        $JLFTable.append(`<tr>
        <td>${p.Date}</td>
        <td>${p.Money}</td>
        </tr>`);
    });
};
const CreateTuWenInfoTable=()=>{
    $("#JLFTuWenInfoTableDiv").remove();
    $("div[class^='weui-desktop-panel weui-desktop-panel_overview']").append(`<div id='JLFTuWenInfoTableDiv'><div class='weui-desktop-panel'><table id='JLFTuWenInfoTable' class='table table-bordered table-hover'><tr><td colspan='5'>图文分析</td></tr><tr><th>日期</th><th>从公众号会话打开(次数)</th><th>分享转发(次数)</th><th>图文页阅读(次数)</th></tr></table></div></div>`);
    const $JLFTable = $("#JLFTuWenInfoTable");
    TuWenInfoList.forEach(p => {
        $JLFTable.append(`<tr>
        <td>${p.Date}</td>
        <td>${p.GZHReadCount}</td>
        <td>${p.FenXiangZhuanFaCount}</td>
        <td>${p.TuWenReadCount}</td>
        </tr>`);
    });
};
//所有查询
const AutoSelect=()=>{
    layer.msg("0.0做此插件唯一目的就是每天早上做统计的时候偷懒...如果您使用过程中造成了工作上的任何问题与本人无关",{time:"5000"});
    AutoGetUserInfo();
    setTimeout(CreateTable, 1500);
    AutoGetTuWenInfo();
    AutoGetLiuLiangZhu();
};

if (window.location.href.indexOf("mp.weixin.qq.com/cgi-bin/home") != -1) {
    CreatBtn();
    CreateSelectBtn();
}







