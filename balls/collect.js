var request = require('request') ,
    cheerio = require('cheerio') ,
    mongoose = require('mongoose'),
    db = require('./db.js'),
    Prize = require('./model/Prize.js');


function handleNumber($td) {
    var result = {
        reds: [],
        blue: null
    };
    $td.find('.rr').each(function (index, value) {
        result.reds.push(this.text());
    });
    result.blue = $td.children('em').last().text();
    return result;
}

function getOnePageData(page , callback) {
    request('http://kaijiang.zhcw.com/zhcw/html/ssq/list_' + page + '.html', function (err, res, body) {
        var $ = cheerio.load(body)('table tr') ,
            results = [];
        $.each(function (index, value) {
            if (this.children('td').length > 3) {
                var $td = this.find('td');
                var date = $td.first().html();
                var issue = $td.eq(1).html();
                var numbers = handleNumber($td.eq(2));
                results.push(new Prize({
                    date: date,
                    issue: issue ,
                    numbers: numbers
                }));
            }
        });
        callback && callback(results);
    })
}

function getAllPageData() {

    function allCallBack(result) {
        result.sort();

        for(var i = 0; i<result.length ; i++){
            console.log(result[i].toString())
            result[i].save();
        }
    }
    var allPage ,
        result = [];
    request('http://kaijiang.zhcw.com/zhcw/html/ssq/list_1.html' , function (err, res, body) {
        if(err){ console.log(err) }
        var $ = cheerio.load(body);
//        allPage = $('.pg').find('strong').text();
        allPage = 1;
        for(var i=1 , j=0 ; i<=allPage ; i++){
            getOnePageData(i , function (onePageData) {
                result = result.concat(onePageData);
                if(++j == allPage){
                    allCallBack(result);

                }
            })
        }
    })
}

getAllPageData();
