<template>
<v-container>
      <h1>Routing Test Page [ Routing ]</h1>
      <v-data-table
      :headers="headers"
      :items="sql_res"></v-data-table>
</v-container>
</template>

<script>
const axios = require('axios')
export default {
  name: 'Routing',

  data: () => ({
    message: "aaa",
    sql_res: [], //nullにするとv-data-tableで怒られる
    headers: [
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: '名前',
        value: 'name'
      }
    ]
  }),

  mounted () {
    axios
      .get('https://mojacoder-problem-archives-api.herokuapp.com/')
      .then(response => (
        this.sql_res = response.data,
        console.log(response.data)
        ))
  },
}
</script>