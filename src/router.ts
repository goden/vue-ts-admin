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
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/Home.vue")
            }
        ]
    },
    {
        path: "/dataManage",
        name: "dataManage",
        component: Layout,
        redirect: "/tableData",
        children: [
            {
                path: "/tableData",
                name: "tableData",
                component: () => import("@/views/DataManage/TableData.vue")
            },
            {
                path: "/formData",
                name: "formData",
                component: () => import("@/views/DataManage/FormData.vue")
            },
            {
                path: "/chartData",
                name: "chartData",
                component: () => import ("@/views/DataManage/ChartData.vue")
            }
        ]
    },
    {
        path: "/userManage",
        name: "userManage",
        component: Layout,
        redirect: "/accountData",
        children: [
            {
                path: "/accountData",
                name: "accountData",
                component: () => import("@/views/UserManage/AccountData.vue")
            }
        ]
    },
    {
        path: "/user",
        name: "user",
        component: Layout,
        redirect: "/userInfo",
        children: [
            {
                path: "/userInfo",
                name: "userInfo",
                component: () => import("@/views/UserManage/UserInfo.vue")
            }
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/Login.vue")
    },
    {
        path: "/password",
        name: "password",
        component: () => import("@/views/login/Password.vue")
    },
    {
        path: "/404",
        name: "404",
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
