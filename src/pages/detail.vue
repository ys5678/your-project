<template>
  <div>123</div>
  <!--<div class="detail-wrap" >-->
    <!--<div class="detail-left">-->
      <!--<div class="product-board">-->
        <!--<img src="../assets/0.jpg" width="80px" height="80px" style="border-radius: 40px">-->
        <!--<ul>-->
          <!--<router-link v-for="item in products" :to="{path:item.path}" tag="li" active-class="active">-->
            <!--{{item.name}}-->
          <!--</router-link>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="detail-right">-->
      <!--<keep-alive>-->
        <!--<router-view></router-view>-->
      <!--</keep-alive>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>


  export default {
    data(){
      return{
        products:[
          {
            name:'数据统计',
            path:'count',
            icon:'',
            active:false
          },
          {
            name:'数据预测',
            path:'forecast',
            icon:' ',
            active:false
          },
          {
            name:'流量分析',
            path:'analysis',
            icon:' ',
            active:false
          },
          {
            name:'广告发布',
            path:'publish',
            icon:' ',
            active:false
          },
        ],
        imgMap:{
          '/detail/count':require('../assets/0.jpg'),
          '/detail/forecast':require('../assets/1.jpg'),
          '/detail/analysis':require('../assets/2.jpg'),
          '/detail/publish':require('../assets/3.jpg')
        }

      }


      }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.detail-wrap{
  width:1200px;
  margin:0 auto;
  overflow: hidden;
}
  .detail-left{
    float:left;
    width:200px;
    text-align: center;
  }
  .detail-right{
    float: left;
    width: 980px;
    margin-left: 20px;
  }
  .product-board{
    background: #fff;
    padding :20px 0;
  }
  .product-board ul{
    margin-top:10px;
  }
  .product-board li{
    text-align: left;
    padding:10px 15px;
    cursor: pointer;

  }
  .product-board li.active,
  .product-board li:hover{
    background: #4fc08d;
    color: #fff;
  }
  .product-board li a{
    display: block;
  }
  .sales-board{
    background: #fff;
  }
  .sales-board-intro h2{
    font-size: 20px;
    padding :20px;
  }
  .sales-board-intro p{
    background: #f7fcff;
    padding:10px 20px;
    color: #999;
    line-height:1.8;
  }
  .sales-board-form{
    padding:30px 20px;
    font-size:14px;
  }
  .sales-board-line{
    clear: both;
    padding-bottom:20px;

  }
.sales-board-line-left{
  display: inline-block;
  width:100%;
}
  .sales-board-line-right{
    display: inline-block;
    width:75%;
  }
  .sales-board-des{
    border-top:20px solid #f0f2f5;
    padding:15px 20px;
  }
  .sales-board-des p{
    line-height:1.6;
  }
  .sales-board-des h2{
    font-size:20px;
    padding-bottom: 15px;

  }
  .sales-board-des h3{
    font-size:18px;
    font-weight:bold;
    padding:20px 0 10px 0;
  }
  .sales-board-des li {
    padding:5px 0;
  }
  .sales-board-table{
    width: 100%;
    margin-top: 20px;
  }
  .sales-board-table th{
    background: #4fc08d;
    color: #fff;
  }
  .sales-board-table td{
    border: 1px solid #f0f2f5;
    padding :15px;
  }

</style>
