<template>
    <div class="layout">
        <LayoutHeader />
        <Content>
            <Sidebar slot="left"></Sidebar>
            <router-view slot="content"></router-view>
        </Content>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LayoutHeader from "@/views/layout/LayoutHeader.vue";
import Content from "@/views/layout/Content.vue";
import Sidebar from "@/views/layout/Sidebar.vue";

@Component({
    components: {
        LayoutHeader,
        Content,
        Sidebar
    }
})
export default class Layout extends Vue {

}
</script>

<style lang="scss" scoped>
.layout {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0;
    background: #f5f7f9;
}

</style>