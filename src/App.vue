<template>
  <div id="app">
    <keep-alive :include="['index', 'contact', 'discovery', 'my']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>

</style>
