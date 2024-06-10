import {defineStore} from 'pinia'
 export const userStore= defineStore('user',{
    state:()=>({
        url:sessionStorage.getItem('url') || ''
    }),
    actions:{
        seturl(url){
            this.url=url
            sessionStorage.setItem('url',url)
        }
    }
 })