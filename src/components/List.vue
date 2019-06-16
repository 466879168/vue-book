<template>
    <div>
        <MHeader>列表</MHeader>
        <div class="mainContent">
            <ul>
                <router-link :to="{name:'detail',params:{bid:book.bookId}}" v-for="book in books" :key="book.bookId" tag="li">
                    <img :src="book.bookCover" alt="">
                    <div>
                        <h4>{{book.bookName}}</h4>
                        <p>{{book.bookDesc}}</p>
                        <b>{{book.bookPrice}}</b>
                        <div><button @click.stop="remove(book.bookId)">删除</button></div>
                    </div>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import MHeader from '../base/MHeader'
import {getAllBooks,removeBook} from '../api/index.js'
export default {
    name:'List',
    components:{
        MHeader
    },
    created () {
        this.getBooks()
    },
    data(){
        return{
            books:[]
        }
    },
    methods:{
        async getBooks () {
         this.books= await getAllBooks()
         console.log(this.books);
        },
        async remove(id){
            await removeBook(id)
            this.books=this.books.filter(item=>item.bookId !== id)
        }
    }
    
}
</script>

<style lang="less" scoped>
.mainContent ul{
    display: flex;
    flex-wrap: wrap;
}
ul li{
    display: flex;
}
ul h1{
    line-height: 30px;
    height: 30px;
}
ul b{
    font-size: 20px;
    color: orange;

}
ul li div{
    padding: 10px 0;
}
ul li p{
    margin: 10px 0;
}
ul button{
    outline: none;
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 8px;
    background: #afd9ee;
    font-size: 18px;
}
</style>