var mongoose = require('mongoose');

var db = mongoose.createConnection('localhost', 'balls');

db.on('error', function (e) {
    console.log('测试数据库连接错误' + e);
});

db.once('open', function () {
    // 一次打开记录
    // 定义 Schema
    var personSchema = new mongoose.Schema({
        name: String   // name属性 String类型
    });

    // Schema 添加方法
//    personSchema.methods.speak = function () {
//        console.log('My name is ' + this.name);
//    };


    // 发布成 model
    // model 名字，成功发布后可以作为索引
//    var personModel = db.model('Person', personSchema);

    // 使用Model进行查询
//    personModel.findOne({name: 'gim'}, function (e, person) {
//        console.log(person)
//    })


// 从model 创建成 Entity
//    var personEntity = new personModel({name : "神奇"}); // 用Model作为构造函数创建实体

// 实体会增加相同的方法
//    personEntity.speak();
//    personEntity.save();
})
;

