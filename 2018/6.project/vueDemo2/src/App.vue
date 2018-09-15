<template>
  <div id="app">
          <!-- <img src="./assets/logo.png"> -->
        <h1>{{ msg }}</h1>
        <h2>{{obj.name}}</h2>
        <ul>
          <li v-for="item in listArr">
            {{item}}
          </li>
        </ul>
        <br>
        <ul>
          <li v-for="item in listObj">
            {{item.name}}
            <ol>
              <li v-for="el in item.list">
                {{el.title}}
              </li>
            </ol>
          </li>
        </ul>
        <br>
        <h2></h2>
        <!-- 绑定属性 -->
        <div v-bind:title="title">鼠标放上去瞄一下-这是一个title属性</div>
        <!-- 绑定html -->
        <div v-html="html">
        </div>
        <!-- 绑定数据的另一种写法 -->
        <div v-text="msg"></div>
        <!-- v-bind:class :class 使用 -->
        <div v-bind:class="{'red':flag,'blue':!flag}">class使用</div>
         <ul>
          <li v-for="(item,index) in listArr" :class="{'red':index==0}">
            {{index}}-----{{item}}
          </li>
        </ul>

        <!-- 双向数据绑定 -->
        <!-- <input type="text" v-model="msg"> -->
        <el-input v-model="msg" placeholder="请输入内容" style="width:200px;"></el-input>
       <el-button type="primary" @click="getMsg()">获取表单数据get</el-button>
       <el-button type="primary" @click="setMsg()">设置表单数据set</el-button>
        <!-- ref获取DOM节点 -->
        <el-input placeholder="请输入内容" ref="username" style="width:200px;"></el-input>
         <el-button type="primary" @click="getInputValue">获取ref定义的DOM节点</el-button>
        <!-- 事件对象 -->
        <el-button type="primary" data-aid="20180722" @click="eventObj($event)">事件对象获取</el-button>
        <br>
        <!-- 添加 -->
        <el-input v-model="input" placeholder="请输入内容" style="width:300px;"></el-input>
         <el-button type="primary" @click="addList()">添加</el-button>
         <hr>
         <br>
         <br>
          
        <el-tag v-for="(item,key) in list" :key="item">
        <el-checkbox-group v-model="checkList">
        <el-checkbox label="复选框 A"></el-checkbox>
        </el-checkbox-group>
      标签 {{item}} ---- {{key}}
        <el-button type="danger" icon="el-icon-delete" @click="deleteList(key)" circle></el-button>
        </el-tag> 
        
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{name:"this is name"},
      html:"<h2>this is h2</h2>",
      div:"this is div",
      flag:true,
      checkList:{
        title:'',
        checked:''
      },
      listArr:['name1','name2','name3'],
      list:[],
      input:'',
      listObj:[
      {name:"cat",
        list:[{
          title:"cat11"
        },{
          title:"cat22"
        }]
      },
      {
          name:"dog",
          list:[{
            title:"dog11"
          },{
            title:"dog22"
          }]
        }]
        ,title:"this is title------------------\n----------title----------\n----------title------------"

      }
    },
    methods:{
      getMsg:function(){
          alert(this.msg);
      }
      ,setMsg:function(){
          this.msg = "this change data"
      }
      ,getInputValue:function(){
        console.log('获取ref的DOM节点:');
        console.log(this.$refs.username);
        var info = this.$refs.username;
        info.value = "2222";
        info.type = "button";
      }
      ,eventObj(e){
        console.log(e);

        //获取自定义的值
        var aid = e.srcElement.dataset.aid 
        console.log(aid)
      }
      ,addList(){
        this.list.push(this.input);
      }
      ,deleteList(key){
        //splice  js操作数组的方法
        this.list.splice(key,1);
      }
    }
  }
</script>

<style lang="scss">
.red{
  color: red;
}
.blue{
  color: blue;
}
</style>
