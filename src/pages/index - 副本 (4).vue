<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productionList">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{item.name}}</a>
              <span v-if="item.hot" class="hot-tag" >HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{item.title}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <slider :slides="slides" :inv="invTime" @onchange="doSomethingOnSlideChange"></slider>
      <div class=" index-board-list">
        <div class="index-board-item " v-for="(item,index) in boardList"
              :class="{'line-last':index%2!==0}" >
          <div class="index-board-item-inner">
            <h2>{{item.title}}</h2>
            <p>{{item.description}}</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import slider from '../components/slider.vue'
  export default {
    components:{
      slider
    },
    created:function () {
      this.$http.post('getList',{userid:123})
        .then((res )=>{
          this.news=res.data
        },(err)=>{
          console.log(err)
        })
    },
    methods:{
      doSomethingOnSlideChange(){

      }
    },
    data () {
      return {
        invTime:2000,
        slides:[
          {
            src:require('../assets/0.jpg'),
            title:'1',
            href:'detail/analysis'
          },
          {
            src:require('../assets/1.jpg'),
            title:'2',
            href:'detail/count'
          },
          {
            src:require('../assets/2.jpg'),
            title:'3',
            href:'detail/111'
          },
          {
            src:require('../assets/3.jpg'),
            title:'4',
            href:'detail/forecast'
          },

        ],
        news:'',
        newsList:[
          {
            title:'数据统计',
            url:'',
          },
          {
            title:'数据预测',
            url:'',
          },{
            title:'流量分析',
            url:'',
            hot:true
          },
          {
            title:'广告发布',
            url:'',
            hot:true
          }

        ],
        productionList:{
          pc:{
            title:'pc产品',
            list:[
              {
                name:'数据统计',
                url:'',
              },
              {
                name:'数据预测',
                url:'',
              },{
                name:'流量分析',
                url:'',
                hot:true
              },
              {
                name:'广告发布',
                url:'',
                hot:true
              },

            ]
          },
          app:{
            title:'手机应用类',
            last:true,
            list:[
              {
                name:'91助手',
                url:'',
              },
              {
                name:'产品助手',
                url:'',
              },{
                name:'智能地图',
                url:'',
                hot:true
              },
              {
                name:'团队语音',
                url:'',
                hot:true
              },

            ]

          },
        },
        boardList:[
          {
            title:'开发产品',
            description:'开发产品是一款开发产品',
            saleout:false
          },
          {
            title:'品牌营销',
            description:'品牌营销帮助你的产品更好的找到定位',
            saleout:false
          },
          {
            title:'使命必达',
            description:'使命必达快递迭代永远保持最前端的熟读',
            saleout:false
          },
          {
            title:'勇攀高峰',
            description:'帮你勇闯高峰，到达事业的顶峰',
            saleout:false
          },
        ]
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .index-wrap{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  .index-left{
    float:left;
    width:300px;
    text-align: left;
  }
  .index-right{
    float: left;
    width: 900px;
  }
  .index-left-block{
    margin:15px;
    background: #fff;
    box-shadow:  0 0 1px #ddd;
  }
  .index-left-block .hr{
    margin-bottom: 20px;
  }
  .index-left-block h2{
    background: #4fc08d;
    color:#fff;
    padding:10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3{
    padding:0 15px 5px 15px;
    font-weight:bold;
    color:#222;
  }
  .index-left-block ul {
    padding:10px 15px;
  }
  .index-left-block li{
    padding: 5px;
    list-style: none;
  }
  .index-left-block li a{
    text-decoration: none;
    color: #444;
  }
  .index-board-list{
    overflow: hidden;
  }
  .index-board-item{
    float: left;
    width: 400px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .index-board-item-inner{
    min-height:125px;
    padding-left:120px;
  }
  .index-board-0 .index-board-item-inner{
    /*background: url("../assets/0.jpg") no-repeat;*/

  }
  .index-board-1 .index-board-item-inner{
    /*background: url("../assets/1.jpg") no-repeat;*/
  }
  .index-board-2 .index-board-item-inner{
    /*background: url("../assets/2.jpg") no-repeat;*/
  }
  .index-board-3 .index-board-item-inner{
    /*background: url("../assets/3.jpg") no-repeat;*/
  }
  .index-board-item h2{
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .line-last{
    margin-right: 0;
  }
  .index-board-button{
    margin-top: 20px;
  }
  .index-board-button a{
    text-decoration: none;
    color: #fff;
  }
  .button{
    background: #4fc08d;
    padding:10px 20px;
    box-shadow: 0 0 10px #ddd;

  }
  .lastest-news{
    min-height: 521px;
  }
.hot-tag{
  color: #fff;
  background: red;
  margin-left: 20px;
}

</style>
