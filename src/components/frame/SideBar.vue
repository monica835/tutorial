<template>
  <sidebar-menu :menu="menu" />
</template>
 
<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        header: true,
                        title: 'KAT-ON PAGE',
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/dashboard',
                        title: 'Dashboard',
                        icon: 'fa fa-clipboard-list'
                    },
                    {
                        href: '/profile',
                        title: 'Profile',
                        icon: 'fa fa-user'
                    },
                    {
                        href: '/subjects',
                        title: 'Add Course and Subject',
                        icon: 'fa fa-calendar-plus'
                    },
                    {
                        href: '/Login',
                        title: 'Logout',
                        icon: 'fa fa-exclamation-circle',
                    }
                ]
            }
        }
    }
</script> 