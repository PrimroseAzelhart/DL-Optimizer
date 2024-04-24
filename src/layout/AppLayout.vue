<script setup>
import { ref } from 'vue';

const active = ref('block');

</script>

<template>
<div class="panel-size flex flex-column">
    <div class="h-full">
        <router-view></router-view>
    </div>
    <van-tabbar route :fixed="false" :border="false" v-model="active">
        <van-tabbar-item name="home" icon="close" to="/block">屏蔽</van-tabbar-item>
        <van-tabbar-item name="setting" icon="setting-o" to="/setting">设置</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<style lang="css">
.panel-size {
    width: 20rem;
    height: 35rem;
}
</style>
