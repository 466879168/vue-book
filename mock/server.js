const http =require('http')
const fs=require('fs')
const url=require('url')
const sliders=require('./index')
console.log(sliders);


// 封装方法读取文件数据
function read(cb) {
    fs.readFile('./books.json','utf8',(err,data)=>{
        if (err || data.length === 0) {
            cb([])
        }else{
            cb(JSON.parse(data))
        }
    })
}


const pageSize=5;
//封装写入文件的方法
function write(data,cb) {
    fs.writeFile("./books.json",JSON.stringify(data),cb)
}




http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    //console.log(url.parse(req.url));
    if (req.method == "OPTIONS") {
        res.end("")
    }
    let {pathname,query}=url.parse(req.url,true)
    let id=parseInt(query.id)
   
    

    switch(req.method){
        case "GET":
                if (pathname === '/sliders') {
                    res.setHeader('Content-Type','application/json,charset=utf8')
                    res.end(JSON.stringify(sliders))
                }
            
                //获取热门图书
                if (pathname === '/hot') {
                    read(function(books){
                        books=books.reverse().slice(0,6)
                       res.end(JSON.stringify(books))
                    })
                }
            
            
                if (pathname === '/getAllBooks') {
                    read(function(books){
                       res.end(JSON.stringify(books))
                    })
                }
                if (pathname === '/page') {
                    let index= parseInt(query.index) || 0
                    let hasMore=true;
                    read(function(books){
                        let result=books.reverse().slice(index,index+pageSize);
                        if (books.length<=index+pageSize) {
                            hasMore=false
                        }
                        res.end(JSON.stringify({hasMore,books:result}))
                    })
                }
                if (pathname === '/book') {
                    read(function(books){
                      let book=  books.find(item=>item.bookId === id)
                      if (!book) {
                          book={}
                      }
                      res.end(JSON.stringify(book))
                    })
                }
            break
        case "POST":
            break
        case "DELETE":
            read(function (books) {
                books=books.filter(item=>item.bookId !== id)
                write(books,function(){
                res.end(JSON.stringify({}))//删除成功返回空对象
                })
            })
            break
        case "PUT":
            read(function (books) {
                books=books.filter(item=>{
                    if (item.bookId === id) {
                        return 
                    }
                })
                write(books,function(){
                res.end(JSON.stringify({}))//删除成功返回空对象
            })
                })
            break
    }

}).listen(4000)