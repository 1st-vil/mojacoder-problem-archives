<template>
<v-container>
  <v-data-table
  :headers="headers"
  :items="sql_res"
  :sort-by="['submit_time']"
  :sort-desc="[true]"
  :footer-props="{'items-per-page-options':[-1]}">
  <template v-slot:item.submit_time="{ item }">
    <span>{{ item.submit_time|moment }}</span>
  </template>
  <template v-slot:item.writer="{ item }">
    <a :href="'https://mojacoder.app/users/'+item.writer" target="_blank">
      {{ item.writer }} 
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
  name: 'Problems',

  data: () => ({
    message: "aaa",
    sql_res: [], //nullにするとv-data-tableで怒られる
    headers: [
      {
        text: '投稿日時',
        value: 'submit_time'
      },
      {
        text: '投稿者',
        value: 'writer'
      },
      {
        text: '問題名',
        value: 'title'
      }
    ]
  }),
  
  filters: {
    moment(date) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
  },

  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL)
      .then(response => (
        this.sql_res = response.data
        ))
  },
}
</script>