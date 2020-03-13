<template>
  <div class="container fullcontent">
    <section id="summary">

      <div class="cpad">
        <a-row :gutter="16">
          <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
              <a-card
                id="cassets"
                title="Assets"
                :bordered="false"
                :headStyle="{ color: '#eee' }"
              >
                <div class="icardbody">
                  <a-icon class="icard" type="dollar" theme="twoTone" twoToneColor="#3fb0ac" />
                  <span class="stangka">IDR 1.670.000.000</span>
                </div>

              </a-card>
          </a-col>
          <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
              <a-card
                id="cequity"
                title="Equity"
                :bordered="false"
                :headStyle="{ color: '#eee' }"
              >
                <div class="icardbody">
                  <a-icon class="icard" type="wallet" theme="twoTone" twoToneColor="#3fb0ac" />
                  <span class="stangka">IDR 1.500.000.000</span>
                </div>

              </a-card>
          </a-col>
          <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
              <a-card
                id="cliability"
                title="Liabilities"
                :bordered="false"
                :headStyle="{ color: '#eee' }"

              >
                <div class="icardbody">
                   <a-icon class="icard" type="credit-card" theme="twoTone" twoToneColor="#3fb0ac" />
                  <span class="stangka">IDR 170.000.000</span>
                </div>

              </a-card>
          </a-col>


        </a-row>
      </div>

      <div class="hpad">

        <a-row :gutter="16">
           <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
              <a-card
                id="cprofit"
                title="Profit / Loss"
                :bordered="false"
                :headStyle="{ color: '#eee' }"

              >
                <div class="icardbody">
                  <a-icon class="icard" type="pie-chart" theme="twoTone" twoToneColor="#3fb0ac" />
                  <span class="stangka">IDR 500.000.000</span>
                </div>

              </a-card>
          </a-col>
          <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
            <a-card
                id="crevenue"
                title="Revenue"
                :bordered="false"
                :headStyle="{ color: '#eee' }"

              >
                <div class="icardbody">
                  <a-icon class="icard" type="money-collect" theme="twoTone" twoToneColor="#3fb0ac" />
                  <span class="stangka">{{ totalSales | currency }}</span>
                </div>

            </a-card>
          </a-col>
          <a-col :sm="{ span: 8 }" :lg="{ span: 8 }" class="cpad">
            <a-card
                id="cost"
                title="Costs"
                :bordered="false"
                :headStyle="{ color: '#eee' }"

              >
                <div class="icardbody">
                  <a-icon class="icard" type="shopping" theme="twoTone" twoToneColor="#3fb0ac" />
                  <span class="stangka">IDR 1.350.000.000</span>
                </div>

            </a-card>
          </a-col>

        </a-row>
      </div>
    </section>

    <section id="ichart">
        <client-only>
          <div class="bar-chart">
                <BarChart
                    v-if="barChartData !== null || barChartData !== 'undefine' "
                    :data="barChartData"
                    :options="{ maintainAspectRatio: false }"
                 />
          </div>
        </client-only>
    </section>

    <section id="transaksi">
      <div class="cpad stransaksi">
         <span>Transaksi Penjualan</span>
      </div>
      <div class="cpad">
        <a-table
        :columns="columns"
        :rowKey="record => record.id"
        :dataSource="data"
        :pagination="pagination"
        :loading="loading"
        @change="handleTableChange"
      >
        <template slot="jumlah" slot-scope="jumlah">
          <span class="tjml">{{ jumlah | currency }}</span>
        </template>
        <template slot="tgltransaksi" slot-scope="tgltransaksi">
          <span class="tgltrans">{{ moment(tgltransaksi, "MM/DD/YYYY").format("LL") }}</span>
        </template>
       </a-table>
      </div>

    </section>

  </div>

</template>

<script>
  import reqwest from 'reqwest'
  import moment from 'moment'
  import axios from 'axios'
  //import ChartBar from "@/components/chart-bar";
  import BarChart from '~/components/bar-chart'



  moment.locale('id');
  const columns = [
    {
      title: 'Tanggal Transaksi',
      dataIndex: 'tgltransaksi',
      sorter: true,
      width: '20%',
      scopedSlots: { customRender: 'tgltransaksi' },
    },
    {
      title: 'Nama',
      dataIndex: 'nama',
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Jumlah',
      dataIndex: 'jumlah',
      scopedSlots: { customRender: 'jumlah' },
    }
  ];

  export default {
    layout: 'dashboard',
    components: {
      BarChart
    },

    async asyncData () {

        try {

          const res = await axios.get('https://enaldashboard.now.sh/data/transaksi2.json')
          let rData = res.data
          const formattedData = rData.reduce((previousValue, { tgltransaksi, jumlah }) => {
              if (!previousValue[moment(tgltransaksi, 'M/D/YYYY').year()]) {
                  previousValue[moment(tgltransaksi, 'M/D/YYYY').year()] = { tahun: moment(tgltransaksi, 'M/D/YYYY').year(), total: 0 };
              }
                  previousValue[moment(tgltransaksi, 'M/D/YYYY').year()].total += +jumlah;
                  return previousValue;
              }, {});

          let rSales = JSON.parse(JSON.stringify(Object.values(formattedData)));
              return {

                barChartData: {
                  labels: rSales.map(sales => sales.tahun),
                  datasets: [
                    {
                      label: 'Data Sales',
                      backgroundColor: '#41b883',
                      data: rSales.map(sales => sales.total)
                    }
                  ]
                }

              }

        } catch (error) {

            console.log(error)
            return {
              barChartData : {}
            }

        }


  },


    mounted() {
      this.fetch();
    },

    data() {
      return {
        data:[],
        dataS:[],
        totalSales: [],
        pagination: {},
        loading: false,
        columns,

      };
    },

    methods: {
      moment,
      handleTableChange(pagination, filters, sorter) {
        console.log(pagination);
        const pager = { ...this.pagination };
        pager.current = pagination.current;
        this.pagination = pager;
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
      },

      fetch(params = {}) {
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
           //pagination.total = data.totalCount;
          pagination.total = 200;
          this.loading = false;
          this.data = data;
          this.totalSales = data.reduce((sum, currentItem) => (currentItem.jumlah + sum), 0)
          this.pagination = pagination;

        }).catch( error => {

          console.log(error)
          this.data = []
          this.loading = false;

         });
      },
    },
  }

</script>

<style>

</style>
