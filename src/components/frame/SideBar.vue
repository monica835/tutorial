<template>
  <sidebar-menu :menu="menu" id="side" />
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
                        href: '/timeline',
                        title: 'Timeline',
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
                        href: '/logout',
                        title: 'Logout',
                        icon: 'fa fa-exclamation-circle',
                    }
                ]
            }

        }
    }
</script> 
<style scoped>
    #side{
        margin-bottom: -50px;
        margin-top: 55px;
        width: 100%;
        height:96%;
       
    }
</style>