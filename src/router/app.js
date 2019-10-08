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
            tokenRequired: false
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
        path: '/editprofile',
        name: 'editprofile',
        component: resolve => require(['components/frame/EditProfile.vue'], resolve),
        meta: {
            tokenRequired: false
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
    {
        path: '/logout',
        name: 'logout',
        component: resolve => require(['components/frame/Logout.vue'], resolve),
        meta: {
            tokenRequired: true
        }
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: resolve => require(['components/Timeline.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    
    ]

}