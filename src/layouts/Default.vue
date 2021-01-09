<template>
    <el-header>
        <Navbar></Navbar>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    components: {Navbar}
}
</script>

<style>

</style>