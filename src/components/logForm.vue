<template>
  <div class="login-form" >

    <div class="g-form">
      <p class="log-title">登录</p>
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密&nbsp;&nbsp;码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>

      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登&nbsp;录</a>
        </div>

      </div>
      <p>{{errorText}}</p>
    </div>

  </div>
</template>

<script>

  export default {
    methods:{
      onLogin(){
        if(!this.userErrors.status || !this.passwordErrors.status){
              this.errorText='部分选项没通过'
        }else{
          this.errorText=''
          this.$http.post().then((res)=>{
            this.$emit('has-log',res.data)
            console.log('登录成功')
          },(error)=>{
            console.log('登录失败')
          })


        }

      }
    },
    computed:{
      userErrors(){
        let errorText, status
        if(!/\@/g.test(this.usernameModel)){
          status=false
          errorText='不包含@'
        }else{
          status=true
          errorText=' '
        }
        if(!this.userFlag){
          errorText=''
          this.userFlag=true
        }
        return {
          status,
          errorText,
        }

      },
      passwordErrors(){
        let errorText, status
        if(!/^\w{1,6}$/g.test(this.passwordModel)){
          status=false
          errorText='密码不是1-6位'
        }else{
          status=true
          errorText=' '
        }
        if(!this.passwordFlag){
          errorText=''
          this.passwordFlag=true
        }
        return {
          status,
          errorText,
        }
      }
    },
    data () {
      return {
        usernameModel:'',
        passwordModel:'',
        errorText:'',
        userFlag:false,
        passwordFlag:false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >


</style>
