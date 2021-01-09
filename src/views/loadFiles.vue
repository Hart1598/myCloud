<template>
  <el-container
  v-loading="getLoading"
  >

    <div class="content">
      
      <span class="center"><em>Загрузить файл</em></span>

      <el-upload
        class="upload-demo uploader"
        drag
        action=""
        :data="fileList"
        :http-request="putFileList"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
        @change="putFileList"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">Перетащите файл или <em>нажмите, чтобы загрузить</em></div>
        <template #tip>
          <div class="el-upload__tip ">
            Загрузить можно любой файл
          </div>
        </template>
      </el-upload>

      <el-button @click="upload" type="primary">Загрузить<i class="el-icon-upload el-icon-right btn"></i></el-button>


  </div>
  </el-container>
</template>

<script>

import store from '../store/index'

export default {
data(){
  return{
    fileList:[],
  }
},
methods: {
  handleRemove(file, fileList){
    console.log(file)
    console.log(fileList)
    this.$message(`Файл: ${file.name} удален`);
  },
  async putFileList(e){
    try{
      console.log(this.loading)
      this.fileList.push(e.raw)
    }
    catch(e){
      this.$message.error(e);
    }
  },
  async upload(){
    try{
      if(this.fileList != 0){
        await this.$store.dispatch('uploadFiles', this.fileList)
        this.getLoading
      }else{
        this.$message.error('Вы не выбрали файл');
      }
      
    }
    catch(e){
      this.$message.error(e);
    }
  }
},
computed:{
  getLoading(){
    return this.$store.getters.getLoadStatus
  }
}
}
</script>

<style>

.el-container{
  display: flex;
  justify-content: center;
  text-align: center
}

.center{
  font-size: 2rem;
  text-align: center
}

.uploader{
  margin-top: 2rem;
}

.el-upload-list__item-name{
  margin-bottom: .5rem;
}


</style>