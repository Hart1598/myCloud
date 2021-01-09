<template>
    <el-menu class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/" :route="{ name: 'loadFiles'}">Загрузить файл</el-menu-item>
        <el-menu-item index="/about" :route="{ name: 'myFiles' }">Мои файлы</el-menu-item>
    </el-menu>
</template>

<style scoped lang='scss' rel="stylesheet/scss">
</style>

<script type='text/babel'>
    
</script>