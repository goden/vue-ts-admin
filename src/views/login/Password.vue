<template>
    <div class="password">
        <LoginHeader>
            <el-form slot="container">
                <div class="title">找回密碼</div>
            </el-form>
        </LoginHeader>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import LoginHeader from "./LoginHeader.vue";
@Component({
    components: {LoginHeader}
})
export default class Password extends Vue {}
</script>

<style lang="scss" scoped>
.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
</style>