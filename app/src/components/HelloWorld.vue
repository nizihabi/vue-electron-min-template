<template>
    <div class='hello'>
        <h1>{{ msg }}</h1>
        <h2>electron version: {{electronVer}}</h2>
        <h2>chrome version: {{chromeVer}}</h2>
        <h2>node version: {{nodeVer}}</h2>
    </div>
</template>

<script>
export default {
    props:['msg'],
    name:'HelloWorld',
    data:function(){
        return {
            electronVer:'',
            chromeVer:'',
            nodeVer:''
        }
    },
    created:function(){
        let electron = require('electron');
        this.electronVer = electron.remote.process.versions.electron;
        this.chromeVer = electron.remote.process.versions.chrome;
        this.nodeVer = electron.remote.process.versions.node;
    }
}
</script>

<style scoped>
h1 {
    color: #42b983;
}
</style>