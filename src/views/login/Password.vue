<template>
    <div class="password">
        <LoginHeader>
            <el-form slot="container" :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px">
                <div class="title">找回密碼</div>
                <el-form-item prop="username">
                    <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="帳號">
                         <i slot="prefix" class="fa fa-user-o"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="email">
                    <el-input type="text" v-model="ruleForm.email" auto-complete="off" placeholder="Email">
                         <i slot="prefix" class="fa fa-envelope-o"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading" style="width:100%" @click.native.prevent="handleSubmit">確定</el-button>
                </el-form-item>
            </el-form>
        </LoginHeader>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Provide} from 'vue-property-decorator';
import LoginHeader from "./LoginHeader.vue";

@Component({
    components: {
        LoginHeader
    }
})
export default class Password extends Vue {
    @Provide() loading: boolean = false;

    @Provide() ruleForm: {
        username: String,
        email: String
    } = {
        username: '',
        email: ''
    };

    @Provide() rules = {
        username: [{
            required: true,
            message: '請輸入名稱',
            trigger: 'blur'
        }],
        email: [{
            required: true,
            message: '請輸入email',
            trigger: 'blur'
        }, {
            type: 'email',
            message: '請輸入正確的email',
            trigger: 'blur, change'
        }]
    };

    handleSubmit():void {
        (this.$refs['ruleForm'] as any).validate((valid:boolean) => {
            if (valid) {
                this.loading = true;
                (this as any).$axios.post('/api/users/findPwd', this.ruleForm).then((res:any) => {
                    // console.log(JSON.stringify(res.data, null, 4));
                    this.loading = false;
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.$router.push('/login');
                }).catch(() => {
                    this.loading = false;
                });
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
i {
    font-size: 14px;
    margin-left: 8px;
}
</style>