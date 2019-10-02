export default {
    routes: [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['components/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['components/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: resolve => require(['components/frame/Profile.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/subjects',
        name: 'subjects',
        component: resolve => require(['components/frame/Subjects.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/profile',
        name: 'profile',
        component: resolve => require(['components/frame/Profile.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/editprofile',
        name: 'editprofile',
        component: resolve => require(['components/frame/EditProfile.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => require(['components/frame/Dashboard.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    
    ]

}