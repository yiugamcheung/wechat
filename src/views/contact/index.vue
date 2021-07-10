<template>
    <div class="container">
        <Headerbar title="通讯录" :useSearch=true :useRightBtn="true" :useRightAdd=true></Headerbar>
        <Tabbar currentKey="contact"></Tabbar>
    </div>
</template>

<script>
import Tabbar from '@/components/tabbar'
import Headerbar from '@/components/headerbar'
export default {
    components: {
        Tabbar,Headerbar
    }
}
</script>

<style scoped>

</style>