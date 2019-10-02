import Router from 'router'
export default{
    user : null,
    registeredUser:[],
    setUser(user){
        this.user=user
    },
    getUser(user){
        return this.user=user
    },
    register(username,password){
        this.registeredUser.push({
            username: username,
            password:password
        })
        Router.push('/Login')
    },
    login(username,password){
        for(let i=0;i<this.registeredUser.length;i++){
            if(this.registeredUser[i].username===username && this.registeredUser[i].password==password){
                Router.push('/dashboard')
                return this.registeredUser[i]
            }
        }
        return null
    },
    logout(){
        this.user=null
        Router.push('/login')
    },
    update(){
        this.user = null
        Router.push('/EditProfile')
    },
    save(){
        this.user = null
        Router.push('/Profile')
    }


}