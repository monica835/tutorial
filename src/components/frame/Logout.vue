<template>
    <div>
        <div>
            <button class="btn btn-primary" @click="logout">Yes</button>
            <button class="btn btn-primary" @click="dashboard">No</button>
        </div>
    </div>
</template>
<script>
import AUTH from 'services/auth'
import ROUTER from 'router'
export default {
    methods:{
        logout(){
            AUTH.logout();
        },
        dashboard(){
            ROUTER.push('/dashboard')
        }
        
    }
}
</script>

