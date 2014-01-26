var request = require('request') ,
    cheerio = require('cheerio') ,
    //百度彩票双色球信息url 根据参数d确定开奖年份 一般有实际意思的是年份 格式 2003-01-01
    dataUrl = 'http://baidu.lecai.com/lottery/draw/list/50?d=',
    fromYear = 2003 ,
    endYear = 2003 ;
    // endYear = (new Date()).getFullYear();


function getOnePageData() {
    var url = dataUrl + fromYear + '-01-01';
    request(url , function (err, res, body) {

    })
}

