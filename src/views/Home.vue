<template>
    <div class="home">
        <div class="home-body">
            <h4 class="title">歡迎來到米修在線後台管理系統</h4>
            <p class="des">米修在線, 讓每個人都有機會學習程式設計，更有能力學習想要學習的課程!</p>
            <el-button @click="learn">進來學習</el-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Home extends Vue {
    learn(): void {
        // 另開新頁
        window.open(
            "https://ke.qq.com/course/list/%E7%B1%B3%E6%96%AF%E7%89%B9%E5%90%B4?tuin=c9304a42",
            "_blank"
        );
    }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    background: url(../assets/bg.jpg) no-repeat;
    background-size: 100% 100%;
    .home-body {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        text-align: center;
        padding: 100px;
        box-sizing: border-box;
        .title {
            font-size: 32px;
            font-weight: bold;
            line-height: 60px;
        }
        .des {
            font-size: 18px;
            margin: 40px 0;
        }
    }
}
</style>