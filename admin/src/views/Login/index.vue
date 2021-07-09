<template>
  <div class="login_main">
    <div class="content">
      <div class="left" />

      <div class="right">
        <a-form
          id="components-form-demo-normal-login"
          :form="form"
          class="login-form"
          @submit="handleSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true,message: '账号不能为空' },{min:5, max: 10, message: '账号长度应为5-10位' }] },
              ]"
              placeholder="请输入账号"
              allow-clear
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '密码不能为空' },{ min:6,max:16, message: '密码长度应为6-16位' }] },
              ]"
              type="password"
              placeholder="请输入密码"
              allow-clear
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-form-button">
              登录
            </a-button>
          </a-form-item>
        </a-form>

      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'normal_login' })
    }
  },

  methods: {
    ...mapActions(['user/login']),

    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields(async(err, values) => {
        console.log(values)
        if (!err) {
          const password = this.$md5(values.password)

          const res = await this['user/login']({ username: values.userName, password })

          if (res.data.code === 100) {
            this.$router.push('/')
          }
        }
      })
    }

  }
}
</script>

<style lang="less" scoped>

.login_main {
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url("../../assets/images/login-bg.jpg") no-repeat top / cover;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(8px);
    z-index: 2;
  }

}

.content {
  display: flex;
  justify-content: space-between;
  width: 700px;
  height: 400px;
  z-index: 11;
  border-radius: 20px;
  overflow: hidden;
  background-color: #ffe8bb;
  box-shadow: 3px 4px 13px #bda799;

  .left {
    width: 300px;
    height: 100%;
    background: url("../../assets/images/left.jpg") no-repeat center / cover;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 20px;
  }
}

#components-form-demo-normal-login {
  width: 300px;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
