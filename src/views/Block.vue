<script setup>

import { ref } from 'vue';

const commonOptions = ['ai', 'trans', 'homo', 'r18g']

const active = ref('common')
const commonOptionsChecked = ref([]);

const onSave = (event) => {
    console.log("save");
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.scripting.executeScript({target: {tabId: tabs[0].id}, files: ['scripts/save.js']})
    })
};

</script>

<template>
<van-tabs v-model="active">
    <van-tab title="常用" name="common" class="py-3 px-4">
        <!-- <div class="flex flex-column justify-content-between"> -->
            <van-checkbox-group v-model="commonOptionsChecked" v-for="i in commonOptions" class="py-2 ">
                <van-checkbox :name="i">{{ i }}</van-checkbox>
            </van-checkbox-group>
            <van-button type="primary" @click="onSave">应用</van-button>
        <!-- </div> -->
    </van-tab>
    <van-tab title="自定义" name="custom"></van-tab>
</van-tabs>
</template>

<style>
</style>
