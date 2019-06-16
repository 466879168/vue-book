<template>
    <div>
        <MHeader :back="true">首页</MHeader>
        <div class="mainContent">
            <Swiper :sliders='sliders'></Swiper>
            <h3>热门图书</h3>
            <ul>
                <li v-for="book in hotBooks" :key="book.bookId">
                    <img :src="book.bookCover" alt="">
                    <b>{{book.bookName}}</b>
                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
import MHeader from '../base/MHeader'
import Swiper from '../base/Swiper'
import {getSliders,getHotBook} from '../api/index'
export default {
    name:'Home',
    components:{
        MHeader,
        Swiper
    },
    created(){
     this.getSlider() 
     this.getHot()
    },
    data(){
        return{
            sliders:[],
            hotBooks:[]
        }
    },
    methods:{
        async getSlider(){
            this.sliders= await getSliders()
        },
        async getHot(){
            this.hotBooks=await getHotBook()           
        }
    }
}
</script>

<style lang="less" scoped>
li{
    width:50%;
    float: left;
    text-align: center;
    margin: 5px 0;
}
</style>
