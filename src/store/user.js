import {defineStore} from 'pinia'
 export const userStore= defineStore('user',{
    state:()=>({
        url:sessionStorage.getItem('url') || '',
        data:sessionStorage.getItem('data') || []
    }),
    actions:{
        seturl(url){
            this.url=url
            sessionStorage.setItem('url',url)
        },
        setdata(data){
            this.data=data
            sessionStorage.getItem('data',data)
        }
    }
 })