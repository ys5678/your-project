<template>
  <div>
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path:'/' }">
        <img src="../assets/logo.png">
        </router-link>
        <div class="head-nav">
            <ul class="nav-list">
            <li>{{name}}</li>
            <li v-if="name==='' "  @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="name!=='' "  @click="quit">退出</li>
            <li v-if="name==='' "  @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
            <li class="nav-pile">|</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>@ 2018 finshenal daandan</p>
    </div>
    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>
    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>about</p>
    </my-dialog>
  </div>
</template>

<script>
  import dialog from './dialog'
  import logForm from './logForm'
  import regForm from './regForm'
export default {
    components:{
      MyDialog:dialog,
      logForm,
      regForm,
    },
  methods:{
      logClick(){
        this.isShowLogDialog=true;
      },
      regClick(){
        this.isShowRegDialog=true;
      },
      aboutClick(){
        this.isShowAboutDialog=true;
      },
      closeDialog(attr){
          this[attr]=false;
      },
      onSuccessLog(data){
        this.name=data.name
        this.closeDialog('isShowLogDialog')
      }
  },
  data () {
    return {
      isShowLogDialog:false,
      isShowRegDialog:false,
      isShowAboutDialog:false,
      name:'',

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  body,div,ul,li,p,h1,h2,h3,h4,h5,h6,input,table,caption,tbody
  ,tfoot,thead,tr,td,article,aside,canvas,details,embed,figure
  ,figcaption,footer,header,hgroup,menu,nav,output,ruby,section
  ,summary,time,mark,audio,video,a,iframe{
    padding: 0;
    margin: 0;
    border:0;
    font-size: 100%;
    font:inherit;
    vertical-align: baseline;
  }
  article,aside,details,figcaption,figure,footer,header,hgroup,menu
  ,nav,section{
    display: block;
  }
  body{
    line-height: 1;
    background: #f0f2f5;
    font-family: 'Helvetica Neue',Helvetica,Arial,"Microsoft YaHei UI",sans-serif;
    font-size: 14px;
    color:#444;
  }
  .app-head{
    width:100%;
    height: 90px;
    line-height:  90px;
    background: #363636;
    color:#b2b2b2;
  }
  .app-head-inner{
    margin: 0 auto;
  }
  .app-head-inner img{
    margin-top:20px;
    width: 50px;
    float:left;
    margin-left: 34px;
  }
 .head-nav{
      float: right;
 }
  .head-nav .nav-list {
    overflow: hidden;
  }
.head-nav .nav-list li{
    float: left;
    display: inline;
    cursor:pointer;
}
  .nav-pile{
    padding:0 10px;
  }
  .app-content{
    width: 1200px;
  }
  .app-foot{
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top:30px;
  }
  .container{
    margin: 0 auto;
    width: 1200px;
  }
  .button{
    background: #4fc08d;
    color:#fff;
    display: inline-block;
    padding:10px 30px;
    cursor: pointer;
    box-shadow: 0 0 10px #ddd;
  }
  .button:hover{
    background: #4fc08d;
  }
  .log-title{
    font-size: 32px;
    text-align: center;


  }
  .g-form{
        height: auto;
  }
  .g-form-line{
    padding:15px 0;
  }

  .g-form-label{
    width:100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input{
    height: 30px;
    width: 300px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    /*border: 1px solid #ccc;*/
    display: inline-block;
  }
  .g-form-input input{
    width: 300px;
    border: 1px solid #ccc;
    padding: 0 10px;
  }
  .g-form-btn{
    padding-left: 114px;
  }
.g-form-error{
  margin-left: 20px;
  color: red;
}
</style>
