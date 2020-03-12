<template>
      <div class="row" id="authlogin">
        <div class="md-login" data-login>
        <div class="logo-md"><img src="/haloummilogo.png" alt="logo" width="100px" height="100px"></div>
        <a-card>
          <div>
              <a-alert
                    v-if="alert"
                    :type="alert.type"
                    :message="alert.message" />
          </div>
          <a-form :form="form" @submit="handleSubmit">

            <a-form-item>
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      { required: true, message: 'Please input your email' }
                    ]
                  }
                ]"
                type="email"
                placeholder="User Email"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      { required: true, message: 'Please input your Password!' }
                    ]
                  }
                ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-button type="primary" html-type="submit" block>Log in</a-button>
          </a-form>
        </a-card>
      </div>

      </div>


</template>

<script>
export default {
    name: "login",
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  head() {
    return {
      title: "Login Your Accounts"
    };
  },
  data() {
    return {
      email: '',
      password: '',
      alert: null,
      user: '',
      accesstoken: '',
    };
  },
  methods: {
    /*async login(){
      try {
            await this.$auth.loginWith('local', {
            data: {
            "email": this.email,
            "password": this.password
            },
          })
            } catch (e) {
              this.alert = e.response.data
          }
    },*/
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
         this.email = values.email
         this.password = values.password
         this.$router.push('/dashboard')
         //this.login()
        }
      });
    }
  }
}
</script>

<style lang='scss' scoped>
  .row {
    display: flex;
    flex-direction: column;
  }
  .logo-md{
    min-height: 5px;
    align-content: center;
    text-align: center;
    justify-content: center;
  }
  .md-login[data-login] {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & .ant-card {
    text-align: left;
    width: 320px;
  }
}
</style>
