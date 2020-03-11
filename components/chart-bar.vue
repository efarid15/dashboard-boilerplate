<template>
  <div class="card">

    <div class="card-img-bottom">
      <canvas id="fooCanvas" count="1" />

      <chartjs-bar
        v-for="(item, index) in types"
          :key="index"
          :backgroundcolor="item.bgColor"
          :beginzero="beginZero"
          :bind="true"
          :bordercolor="item.borderColor"
          :data="item.data"
          :datalabel="item.dataLabel"
          :labels="labels"
          target="fooCanvas"
      />
    </div>
  </div>
</template>

<script>

import reqwest from 'reqwest'
import moment from 'moment'

export default {
  data() {
    return {
      sData: [],
      beginZero: false,
      labels: ["2019", "2020"],
      types: [
        {
          bgColor: "#de98ab",
          borderColor: "0c0306",
          data: [423125000, 145650000,],
          dataLabel: "Sales"
        }
      ]
    };
  },

  mounted(){
    this.loadDataSales();
    console.log(this.sData)
  },

  methods: {
    moment,

    loadDataSales(params = {}) {
        this.loading = true;
        reqwest({
          url: '/data/transaksi2.json',
          method: 'get',
          data: {
            results: 10,
            ...params,
          },
          type: 'json',
        }).then(data => {
          const pagination = { ...this.pagination };
          // Read total count from server
          // pagination.total = data.totalCount;
          pagination.total = 200;
          this.loading = false;
          this.sData = data;


          this.pagination = pagination;


        });
      },
  }

};
</script>
