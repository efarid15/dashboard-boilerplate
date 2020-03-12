<template>
  <a-layout-sider
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo"><a-avatar src="eflogo.png" alt="logo" shape="circle" /></div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['dashboard']">
        <a-menu-item key="dashboard">
          <nuxt-link to="/dashboard">
            <a-icon type="dashboard" /><span class="nav-text">Dashboard</span>
          </nuxt-link>
        </a-menu-item>

        <a-menu-item key="accounts">
            <nuxt-link to="/dashboard/accounts">
              <a-icon type="dollar" /><span class="nav-text">Cash</span>
            </nuxt-link>
        </a-menu-item>

        <a-menu-item key="customer">
          <nuxt-link to="/dashboard/customers">
            <a-icon type="user" /><span class="nav-text">Customer</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="tags" />
          <span class="nav-text">Penjualan</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="team" />
          <span class="nav-text">Supplier</span>
        </a-menu-item>
        <a-menu-item key="6">
          <a-icon type="shopping-cart" />
          <span class="nav-text">Pembelian</span>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="schedule" />
          <span class="nav-text">Persediaan</span>
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="form" />
          <span class="nav-text">Entri Jurnal</span>
        </a-menu-item>
        <a-menu-item key="9">
          <a-icon type="setting" />
          <span class="nav-text">Pengaturan</span>
        </a-menu-item>
        <a-menu-item key="10">
          <nuxt-link to="/#authlogin">
            <a-icon type="logout" />
            <span class="nav-text">Keluar</span>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
  methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
    },
}
</script>
