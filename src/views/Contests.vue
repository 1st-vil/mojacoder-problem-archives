<template>
<v-container>
  <v-data-table
  :headers="headers"
  :items="sql_res"
  :sort-by="['start_time']"
  :sort-desc="[true]"
  :footer-props="{'items-per-page-options':[-1]}">
  <template v-slot:item.start_time="{ item }">
    <span>{{ item.start_time|moment }}</span>
  </template>
  <template v-slot:item.owner="{ item }">
    <a :href="'https://mojacoder.app/users/'+item.owner" target="_blank">
      {{ item.owner }} 
    </a>
  </template>
  <template v-slot:item.title="{ item }">
    <a :href="item.url" target="_blank">
      {{ item.title }} 
    </a>
  </template>
  </v-data-table>
</v-container>
</template>

<script>
const axios = require('axios')
import moment from 'moment'
export default {
  name: 'Contests',

  data: () => ({
    message: "aaa",
    sql_res: [], //nullにするとv-data-tableで怒られる
    headers: [
      {
        text: '開催日時',
        value: 'start_time'
      },
      {
        text: '主催者',
        value: 'owner'
      },
      {
        text: 'コンテスト名',
        value: 'title'
      },
      {
        text: '時間(秒)',
        value: 'seconds'
      },
      {
        text: '問題数',
        value: 'problem_num'
      },
    ]
  }),
  
  filters: {
    moment(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
  },

  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL + '/contests')
      .then(response => (
        this.sql_res = response.data
        ))
  },
}
</script>