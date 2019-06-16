## vue-book
图书管理系统 可以增删改查

## 技术栈
Webpack + Vue2.x + vue-cli + vue-router +node

## 未做完
自身知识不够很多功能不知道怎么做 对axios不熟悉 接口不怎么会运用 

加载更多 向上滚动加载更多 下拉刷新 增加图书 收藏功能未做


## 小细节
1. 在mock用node写了一个服务端 确保数据可以正确返回
2. 在api中增加方法 调取数据功能
3. 轮播图在基础组件中 父组件中调用api
4. 基础组件需要数据 在父组件中调用api 将数据父传子传给基础组件(基础组件有可能在不同的地方使用,每个使用的地方的数据不一样)
 
## 实现功能如下
1. 首页轮播图
2. 热门图书组件 取最后添加的几本
3. 列表
4. 删除图书
