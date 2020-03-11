<template>
  <a-layout id="components-layout-demo-responsive">
    <Sidemenu />
    <a-layout>
      <Header />
      <a-layout-content :style="{ background : '#fff', margin: '24px 16px 0', fontFamily: 'Montserrat' }">
        <nuxt />
      </a-layout-content>
      <Footer />
    </a-layout>

  </a-layout>
</template>

<script>
import Sidemenu from '~/components/Sider'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

  export default {
    components: {
      Sidemenu,
      Header,
      Footer
    },

  };
</script>

<style>
  #components-layout-demo-responsive .logo {
    height: 32px;
    margin: 16px;
    text-align: center;
  }
</style>

