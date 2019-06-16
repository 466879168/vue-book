<template>
  <div>
    <MHeader :back="true">详情页</MHeader>
    <div class="detail">
      <ul>
        <li>
          <label for="bookName">
            书名
            <input type="text" id="bookName" v-model="book.bookName">
          </label>
        </li>
        <li>
          <label for="bookDesc">
            内容简介
            <input type="text" id="bookDesc" v-model="book.bookDesc">
          </label>
        </li>
        <li>
          <label for="bookPrice">
            价格
            <input type="text" id="bookPrice" v-model="book.bookPrice">
          </label>
        </li>
        <li>
          <!-- <button @click="save(book.bookId)">保存</button> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MHeader from "../base/MHeader"
import {getOneBook,updateBook} from '../api/index'
export default {
  components: {
    MHeader
  },
  created(){
      this.getData()
  },
  watch:{
    $route(){
      this.getData()
    }
  },
  data(){
      return{
          book:{}
      }
  },
  methods:{
      async getData(){
         this.book= await getOneBook(this.bid)
         if (! this.book.bookId) {
           this.$router.push('/list')
         }
      },
     async save(id){
        await updateBook(id,this.book)
      }
  },
  computed:{
      bid(){
        return this.$route.params.bid
      }
  }
};
</script>

<style lang="less" scoped>
.detail {
  position: absolute;
  top: 50px;
  width: 80%;
}
.detail ul{
    margin: 0 20px;
    width: 100%;
}
.detail input{
    display: block;
    height: 25px;
    width: 100%;
    font-size: 20px;
}
.detail label{
    font-size: 25px;
    display: block;
}
button{
    outline: none;
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 8px;
    background: #afd9ee;
    font-size: 18px;
    margin-top: 10px;
    float: right;
}
</style>