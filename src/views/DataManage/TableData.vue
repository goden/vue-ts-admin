<template>
    <div class="table-data">
        <div class="search-box">
            <el-input size="small" v-model="searchVal" placeholder="請輸入課程名稱"></el-input>
            <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearch">搜尋</el-button>
        </div>
        <el-table :data="tableData" border style="width:100%" :height="tHeight" class="table-box">
            <el-table-column type="index" label="編號" width="60"></el-table-column>
            <el-table-column label="課程名稱" prop="title"></el-table-column>
            <el-table-column width="120" label="等級" prop="level"></el-table-column>
            <el-table-column width="120" label="技術類型" prop="type"></el-table-column>
            <el-table-column width="120" label="報名人數" prop="count"></el-table-column>
            <el-table-column width="160" label="上線日期" prop="date"></el-table-column>
            <el-table-column v-if="getUser.key != 'visitor'" label="操作" width="160">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.$index,scope.row)" size="mini">編輯</el-button>
                    <el-button @click="handleDelete(scope.$index,scope.row)" size="mini" type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pages" ref="page-box">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :page-sizes="[5,10,20]" :page-size="size" :total="total"
                            layout="total,sizes,prev,pager,next,jumper">
            </el-pagination>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({
    components: {}
})
export default class TableData extends Vue {

    @Getter("user") getUser:any;

    @Provide() searchVal: string = "";
    @Provide() tHeight: number = document.body.offsetHeight - 270;
    @Provide() tableData: any = [];
    @Provide() page: number = 1;
    @Provide() size: number = 5;
    @Provide() total: number = 0;

    loadData(): void {
        (this as any)
            .$axios(`/api/profiles/loadMore/${this.page}/${this.size}`)
            .then((res: any) => {
                console.log(res.data);
                this.tableData = res.data.data.list;
                this.total = res.data.data.total;
            });
    }

    handleSearch(): void {

    }

    handleEdit(index:number, row:any): void {

    }

    handleDelete(index:number, row:any): void {

    }

    handleSizeChange(): void {

    }

    handleCurrentChange(): void {
        
    }

    created() {
        this.loadData();
    }
}
</script>

<style lang="scss" scoped>
.table-data {
    height: 100%;
    .table-box {
        font-size: 14px;
    }
    .pages {
        background: #fff;
        margin-top: 10px;
        padding: 10px 10px;
        text-align: right;
        height: 55px;
        box-sizing: border-box;
    }
    .search-box {
        background: #fff;
        margin-bottom: 10px;
        padding: 10px 10px;
        border-radius: 4px;
        height: 55px;
        box-sizing: border-box;
        .el-input {
            width: 200px;
            margin-right: 10px;
        }
    }
}
</style>