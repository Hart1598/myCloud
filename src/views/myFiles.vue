<template>
  <el-container
  v-loading="loading">
    <el-table
      v-if="tableData.length"
      :data="tableData"
      style="width: 50%">
      <el-table-column
        label="Date"
        width="200">
        <template #default="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.timeCreated }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Name"
        width="300">
        <template #default="scope">
          <el-popover effect="light" trigger="hover" placement="top">
            <template #default>
              <p>Название файла: {{ scope.row.name }}</p>
              <p>Дата обновления: {{ scope.row.updated }}</p>
            </template>
            <template #reference>
              <div class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </template>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="Operations">
        <template #default="scope">
          <el-button
            size="mini"
            @click.prevent="handleDownload(scope.row.url)">Скачать</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Удалить</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-else><em>Нету загруженых файлов</em> чтобы загрузить перейдите на соответствующую страницу <router-link to="/">перейти</router-link></div>
  </el-container>
</template>

<script>



export default {
  name: 'myFiles',
  components: {
   
  },
  data() {
      return {
        tableData: [],
        loading: true
      }
  },
  methods: {
    async handleDownload(url) {
      this.$alert(url, 'Ссылка для скачивания', {
        confirmButtonText: 'OK',
        callback: action => {
          this.$message({
            type: 'success',
            message: `Ссылка полчена`
          });
        }
      });
    },
    handleDelete(index, row) {
      console.log(index, row)
      this.tableData.slice(index, 1)
    }
  },
  computed:{
    getData(){
      const data = this.$store.getters.getNameFiles
      data.map(i => this.tableData.push(i))
      if(this.tableData.length > 0){
        this.loading = false
      }
    }
  },
  async created(){
    try{
      await this.$store.dispatch('getFiles')
      const interval = setInterval(() => {
        if(this.tableData.length == 0){
          this.getData
        }else{
          clearInterval(interval)
        }
      }, 500)
      
    }
    catch(e){
      console.log()
      //this.$message.error(e);
    }
  },
}
</script>

<style  scoped>
.el-container{
  display: flex;
  justify-content: center;
  text-align: center;


}
</style>
