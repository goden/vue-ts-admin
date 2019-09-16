<template>
    <el-container class="layout-content">
        <!-- 左側菜單 -->
        <el-aside width="200px">
            <slot name="left"></slot>
        </el-aside>

        <!-- 右側內容 -->
        <el-main>
            <!-- 麵包屑 -->
            <div class="top">
                <i class="fa fa-reorder"></i>
                <el-breadcrumb class="breadcrumb" separator="/">
                    <el-breadcrumb-item v-for="(item, index) in breadCrumbItems" :key="index" :to="item.path">
                        {{item.title}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </div>

            <!-- 頁面內容 -->
            <div class="content">
                <slot name="content"></slot>
            </div>
        </el-main>
    </el-container>
</template>

<script lang="ts">
import { Component, Vue, Provide, Watch } from "vue-property-decorator";

@Component({
    components: {}
})
export default class Content extends Vue {
    
    @Provide() breadCrumbItems: any;

    @Watch("$route") handleRouterChange(to: any) {
        this.initBreadCrumbItems(to);
    }

    created() {
        this.initBreadCrumbItems(this.$route);   
    }

    initBreadCrumbItems(router: any): void {
        // console.log(router);
        let breadCrumbItems: any = [{
            path: "/",
            title: "後台管理平台"
        }];

        router.matched.forEach((m:any) => {
            if (m.meta && m.meta.title) {
                breadCrumbItems.push({
                    path: m.path || "/",
                    title: m.meta.title
                });
            }
        });

        this.breadCrumbItems = breadCrumbItems;

        // console.log(breadCrumbItems);

    }

}
</script>
<style lang="scss" scoped>
.layout-content {
    width: 100%;
    height: 100%;
    .el-main {
        padding: 0;
        .top {
            background: #fff;
            height: 54px;
            border-right: none;
            border-bottom: 1px solid #e6e6e6;
            display: flex;
            align-items: center;
            i {
                font-size: 20px;
                cursor: pointer;
                padding-left: 16px;
            }
            .breadcrumb {
                padding-left: 16px;
            }
        }
        .content {
            padding: 0px;
            height: calc(100% - 54px);
            box-sizing: border-box;
        }
    }
}
</style>