import {defineStore} from 'pinia'
export const foodIdStore=defineStore('counter',{
    state:()=>({
        id:''
    }),
    actions:{
        setId(newId){
            this.id=newId
        }
    }
})