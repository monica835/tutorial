import Vue from 'vue'
import Router from 'vue-router'
import ModuleRouter from 'router/module_routes'

Vue.use(Router)
export default new Router({
    routes: ModuleRouter.routes
})