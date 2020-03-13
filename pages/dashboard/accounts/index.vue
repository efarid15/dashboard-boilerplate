<template>
  <div class="container" style="minHeight: 650px">
    <div id="account" style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
          <a-card hoverable>
            <div class="card-img-top" :style="{ padding: '2px', textAlign: 'center',fontSize: '50px', color: '#08c' }"><a-icon type="wallet" /></div>
            <a-card-meta title="Saldo" description="IDR 5.000.000" style="text-align: center">
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
          <a-card hoverable>
            <div class="card-img-top" :style="{ padding: '2px', textAlign: 'center',fontSize: '50px', color: '#08c' }"><a-icon type="gift" /></div>
            <a-card-meta title="Gift" description="IDR 2.500.000" style="text-align: center">
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
          <a-card hoverable>
            <div class="card-img-top" :style="{ padding: '2px', textAlign: 'center',fontSize: '50px', color: '#08c' }"><a-icon type="appstore" /></div>
            <a-card-meta title="Pengunjung" description="2.000" style="text-align: center">
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'dashboard'
}
</script>
<style scoped>
   .cpad {
    padding: 15px;
  }
</style>
