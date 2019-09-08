<template>
    <div class="layout">
        <LayoutHeader />
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LayoutHeader from "@/views/layout/LayoutHeader.vue";

@Component({
    components: {LayoutHeader}
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