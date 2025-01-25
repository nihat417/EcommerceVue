import LoginPage from '@views/Auth/LoginPage.vue';

const authRoutes = [
    {
        path:"/login",
        name:"login",
        component:LoginPage,
        meta:{
            isAuth:false
        }
    }
]

export default authRoutes;