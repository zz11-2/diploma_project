import {defineStore} from 'pinia'
export const foodIdStore=defineStore('counter',{
    state:()=>({
        id: sessionStorage.getItem('id') || '',
    foodId: sessionStorage.getItem('foodId') || '',
    searchResults:sessionStorage.getItem('searchResults') || ''
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
        }
    }
})