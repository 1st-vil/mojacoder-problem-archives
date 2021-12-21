<template>
<v-container>
      <v-data-table
      :headers="headers"
      :items="sql_res">
      <template v-slot:item.url="{ item }">
        <a target="_blank" :href="item.url">
          {{ item.url }} 
        </a>
      </template>
      </v-data-table>
</v-container>
</template> 

<script>
const axios = require('axios')
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
      },
      {
        text: '問題url',
        value: 'url'
      }
    ]
  }),

  mounted () {
    axios
      .get(process.env.VUE_APP_API_URL)
      .then(response => (
        this.sql_res = response.data,
        console.log(response.data)
        ))
  },
}
</script>