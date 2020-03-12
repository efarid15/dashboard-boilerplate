<template>
  <div>
    <section id="authlogin" class="full-content">
      <a-row>
      <a-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" offset="2">
        <div id="auth-login" class="login-box">
          <div class="mylogo"><img width="100" height="100" src="/haloummilogo.png" /></div>
          <a-form
            id="components-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: 'Please input your username!' }] },
              ]"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
                'password',
                { rules: [{ required: true, message: 'Please input your Password!' }] },
              ]"
              type="password"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
                'remember',
                {
                  valuePropName: 'checked',
                  initialValue: true,
                },
              ]"
            >
              Remember me
            </a-checkbox>
            <a class="login-form-forgot" href="">
              Forgot password
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
              Log in
            </a-button>
            Or
            <a href="">
              register now!
            </a>
              </a-form-item>
            </a-form>
        </div>
    </a-col>

   </a-row>

    </section>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$router.push('/dashboard');
        }
      });
    },
  },
};
</script>
<style>

.full-content {
  position: fixed;
  min-width: 100%;
  max-height: 100%;
}

.mylogo {
  margin-left: 30%;
  padding: 5%;
}
#auth-login.login-box {
  display: block;
  align-items: center;
  background: #fff;
  padding-top: 10%;
  padding-left: 30%;
  padding-right: 30%;
}

#components-login .login-form {
  width: 100%;
}
#components-login .login-form-forgot {
  float: right;
}
#components-login .login-form-button {
  width: 100%;
}


</style>
