
import Home from '@views/Main/Home.vue';
import Basket from '@/views/main/Basket.vue';
import MainLayout from '@core/MainLayout.vue';

const mainRoutes = [
    {
        path:'/',
        name: 'main-layout',
        component: MainLayout,
        meta: {
            isAuth: true,
        },
        children: [
            {
              path: '',
              name: 'home',
              component: Home,
              meta: {
                isTab: true,
              },
            },
            {
              path: 'basket',
              name: 'basket',
              component: Basket,
              meta: {
                isTab: true,
              },
            },
        ],
    }
]


export default mainRoutes;