<template>
  <div class="user-info">
    <div class="img-box">
      <h2 class="title">關於我</h2>
      <img :src="require('@/assets/'+getUser.key+'.jpg')" alt />
      <h4>{{getUser.username}}</h4>
    </div>
    <div class="info-box">
      <h2 class="title">帳號資訊</h2>
      <!-- form -->
      <el-form :model="userData" class="form-box">
        <el-form-item label="帳號">
          <el-input v-model="getUser.username" readonly></el-input>
        </el-form-item>
        <el-form-item label="密碼">
          <el-input type="password" v-model="userData.pwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            @click="onSubmit"
            :disabled="!userData.pwd"
            type="primary"
            :loading="loading"
          >修改密碼</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";

@Component({
    components: {}
})
export default class UserInfo extends Vue {
    @Getter("user") getUser: any;

    @Provide() userData: {
        username: string,
        pwd: string
    } = {
        username: '',
        pwd: ''
    };

    @Provide() loading: boolean = false;

    onSubmit(): void {

        this.userData.username = this.getUser.username;
        this.loading = true;

        (this as any).$axios.post("/api/users/changePwd", this.userData).then((res:any) => {
            
            console.log(res);
            
            this.loading = false;
            this.$message({
                type: "success",
                message: res.data.msg
            });

        });

    }

    created() {
        console.log(this.getUser);
    }
}
</script>

<style lang="scss" scoped>
.user-info {
    height: calc(100% - 70px);
    display: flex;
    overflow: auto;
    color: #606266;
    .img-box,
    .info-box {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        background: #fff;
        .title {
            border-bottom: 1px solid #dcdfe6;
            padding: 10px;
            text-align: left;
            margin-bottom: 20px;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .img-box {
        text-align: center;
        width: 30%;
        margin-right: 10px;
        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        h4 {
            margin-top: 20px;
            font-size: 16px;
        }
    }
    .info-box {
        flex: 1;
        .form-box {
            padding: 10px;
        }
    }
}
</style>