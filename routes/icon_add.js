const express = require('express');
const router = express.Router();
const {Pool,Client} = require('pg')
//pg配置
const config = {
  host:"118.178.140.155",
  user:"postgres",
  database:"chmap",
  password:"postgres",
  port:5432,
  max:20,//连接池最大连接数
  idleTimeoutMills:3000,//连接最大空闲时间
}
const pool = new Pool(config);
/* GET users listing. */
router.post('/', function(req, res, next) {
  //解析参数
    let {name,lng,lat} = req.query;
    pool.query(`insert into gis_icon_position (name,lng,lat) values (${name,lng,lat});`,[],function (err,result){
      if(err){
        res.json(err)
        return console.error("插入出错",err);
      }
      let data = result.rows[0];
      //let transData = utils.transMultilineString(data);
      console.log(result.rows);
      res.json(result.rows[0]);
    })
});

module.exports = router;