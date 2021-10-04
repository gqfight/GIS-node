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
router.get('/', function(req, res, next) {
    let id = req.query.id;
    pool.query(`select id,name,st_asgeojson(geom) as road from gis_osm_roads_free_1 where id=${id};`,[],function (err,result){
      if(err){
        return console.error("查询出错",err);
      }
      let data = result.rows[0];
      //let transData = utils.transMultilineString(data);
      console.log(result.rows);
      res.json(result.rows[0]);
    })
});

module.exports = router;