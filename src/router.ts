import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Layout from "@/views/layout/Index.vue"

Vue.use(Router);

export const asyncRounterMap = [
    {
        path: "/",
        name: "dashboard",
        component: Layout,
        hidden: true,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                meta: { title: "首頁", icon: "fa fa-home" },
                component: () => import("@/views/Home.vue")
            }
        ]
    },
    {
        path: "/dataManage",
        name: "dataManage",
        component: Layout,
        hidden: true,
        meta: { title: "數據管理", icon: "fa fa-database" },
        redirect: "/tableData",
        children: [
            {
                path: "/tableData",
                name: "tableData",
                meta: { title: "表格管理", icon: "fa fa-table" },
                component: () => import("@/views/DataManage/TableData.vue")
            },
            {
                path: "/formData",
                name: "formData",
                meta: { title: "表單管理", icon: "fa fa-file-text-o" },
                component: () => import("@/views/DataManage/FormData.vue")
            },
            {
                path: "/chartData",
                name: "chartData",
                meta: { title: "圖表管理", icon: "fa fa-bar-chart" },
                component: () => import ("@/views/DataManage/ChartData.vue")
            }
        ]
    },
    {
        path: "/userManage",
        name: "userManage",
        component: Layout,
        hidden: true,
        redirect: "/accountData",
        children: [
            {
                path: "/accountData",
                name: "accountData",
                meta: { title: "帳戶管理", icon: "fa fa-user-plus" },
                component: () => import("@/views/UserManage/AccountData.vue")
            }
        ]
    },
    {
        path: "/user",
        name: "user",
        component: Layout,
        hidden: false,
        redirect: "/userInfo",
        children: [
            {
                path: "/userInfo",
                name: "userInfo",
                meta: { title: "個人中心"},
                component: () => import("@/views/UserManage/UserInfo.vue")
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        hidden: false,
        meta: { title: "系統登入" },
        component: () => import("@/views/login/Login.vue")
    },
    {
        path: "/password",
        name: "password",
        hidden: false,
        meta: { title: "忘記密碼" },
        component: () => import("@/views/login/Password.vue")
    },
    {
        path: "/404",
        name: "404",
        hidden: false,
        meta: { title: "404" },
        component: () => import("@/views/404.vue")
    },
    {
        path: "*",
        redirect: "/404"
    }
];

const router: any = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: asyncRounterMap
});

router.beforeEach((to: any, from: any, next: any) => {
	const isLogin = localStorage.tsToken ? true : false;
	if (to.path === '/login' || to.path === 'password') {
		next();
	} else {
		isLogin ? next() : next('/login');
	}
});

export default router;
