<template>
    <div class="login">
        <LoginHeader>
            <el-form :model="ruleForm" :rules="rules" label-position="left" ref="ruleForm" label-width="0" slot="container">
                <div class="title">
                    <h3>帳號密碼登錄</h3>
                </div>
                <!-- Username -->
                <el-form-item prop="username">
                    <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="帳號">
                        <i slot="prefix" class="fa fa-user-o"></i>
                    </el-input>
                </el-form-item>
                <!-- Password -->
                <el-form-item prop="pwd">
                    <el-input type="password" v-model="ruleForm.pwd" auto-complete="off" placeholder="密碼">
                        <i slot="prefix" class="fa fa-lock"></i>
                    </el-input>
                </el-form-item>

                <!-- 登錄 -->
                <el-form-item>
                    <el-button type="primary" :loading="isLogin" style="width:100%" @click.native.prevent="handleSubmit">登錄</el-button>
                </el-form-item>

                <el-form-item>
                    <el-checkbox v-model="ruleForm.autoLogin" :checked="ruleForm.autoLogin" class="auto-login">7天內自動登錄</el-checkbox>
                    <el-button type="text" class="forget" @click="$router.push('/password')">忘記密碼</el-button>
                </el-form-item>
            </el-form>
        </LoginHeader>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import LoginHeader from "./LoginHeader.vue";

@Component({
    components: {
        LoginHeader
    }
})
export default class Login extends Vue {
    @Provide() isLogin:boolean = false;
    @Provide() ruleForm: {
        username: String;
        pwd: String;
        autoLogin: boolean
    } = {
        username: "",
        pwd: "",
        autoLogin: true
    };

    @Provide() rules = {
        username: [{
            required: true,
            message: '請輸入名稱',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '請輸入密碼',
            trigger: 'blur'
        }]
    };

    handleSubmit(): void {
        (this.$refs['ruleForm'] as any).validate((valid:boolean)=> {
            if (valid) {
                // console.log('驗證通過');
                (this as any).$axios.post('/api/users/login', this.ruleForm).then((res: any) => {
                    this.isLogin = false;
                    // console.log(res.data.token);
                    localStorage.setItem('tsToken', res.data.token);
                    this.$router.push("/");
                }).catch(() => {
                    // console.error('Something wrong.');
                    this.isLogin = false;
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
.forget {
    float: right;
}

.auto-login {
    float: left;
}
</style>