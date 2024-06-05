
import {defineStore} from 'pinia'
export const foodIdStore=defineStore('counter',{
    state:()=>({
        //管理总表List的下标
        id: sessionStorage.getItem('id') || '',

        //管理List表下type下标
    foodId: sessionStorage.getItem('foodId') || '',

    //管理搜索模块搜索到数据的数组
    searchResults:sessionStorage.getItem('searchResults') || '',

    //管理搜索的关键字
    searchString:'',

    //管理各类
    type:localStorage.getItem('type') || '',
    }),
    actions:{
        setId(newId){
            this.id=newId
            sessionStorage.setItem('id',newId)
         
        },
        setfoodId(newId){
            this.foodId=newId
            sessionStorage.setItem('foodId',newId)
        },
        setSearchResults(type){
            this.searchResults=type
            sessionStorage.setItem('searchResults',type)
        },
        setsearchString(ac){
            this.searchString=ac
            // sessionStorage.setItem('searchString',ac)
        },
        settype(type){
            this.type=type
            localStorage.setItem('type',type)
        }
    }
})