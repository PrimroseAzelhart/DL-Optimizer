<script setup>

import { ref } from 'vue';

const commonOptions = ['ai', 'trans', 'homo', 'r18g']

const active = ref('common')
const commonOptionsChecked = ref([]);

</script>

<template>
<van-tabs v-model="active">
    <van-tab title="常用" name="common" class="my-3 mx-4">
        <van-checkbox-group v-model="commonOptionsChecked" v-for="i in commonOptions" class="my-2 ">
            <van-checkbox :name="i">{{ i }}</van-checkbox>
        </van-checkbox-group>
    </van-tab>
    <van-tab title="自定义" name="custom">内容 2</van-tab>
</van-tabs>
</template>

<style>
</style>
