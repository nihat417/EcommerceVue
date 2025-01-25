import mainRoutes from "./routes/main";
import authRoutes from "./routes/auth";

const routes = [
    ...mainRoutes,
    ...authRoutes,
    {
        path:'/:PathMatch(.*)*',
        name:'NotFound',
        component:() => import('../components/other/NotFound.vue'),
    },
];

export default routes