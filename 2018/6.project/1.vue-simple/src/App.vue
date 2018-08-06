<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <br>
    <h2>{{obj.name}}</h2>
    <br>
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
    <el-input type="text" v-model="msg"></el-input>
    <br>
    <el-button type="primary" @click="getMsg()">获取表单数据get</el-button>
    <br>
    <el-button @click="setMsg()">设置表单数据set</el-button>
    <br>
    <!-- ref获取DOM节点 -->
    <el-input type="text" ref="username"></el-input>
    <br>
    <button @click="getInputValue">获取ref定义的DOM节点</button>
    <br>
    <!-- 事件对象 -->
    <el-button data-aid="20180722" @click="eventObj($event)">事件对象获取</el-button>
    <quill-editor 
    :options="editorOption" 
    ref="QuillEditor" 
    @blur="onEditorBlur($event)" 
    @focus="onEditorFocus($event)"
     @change="onEditorChange($event)" 
     @ready="onEditorReady($event)">
    </quill-editor>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import { quillEditor } from "vue-quill-editor";

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj: { name: "this is name" },
      html: "<h2>this is h2</h2>",
      div: "this is div",
      flag: true,
      listArr: ['name1', 'name2', 'name3'],
      listObj: [{
          name: "cat",
          list: [{
            title: "cat11"
          }, {
            title: "cat22"
          }]
        },
        {
          name: "dog",
          list: [{
            title: "dog11"
          }, {
            title: "dog22"
          }]
        }
      ],
      title: "this is title------------------\n----------title----------\n----------title------------",
      content: ""
    }
  },

  methods: {
    getMsg: function() {
      alert(this.msg);
    },
    setMsg: function() {
      this.msg = "this change data"
    },
    getInputValue: function() {
      console.log('获取ref的DOM节点:');
      console.log(this.$refs.username);
      var info = this.$refs.username;
      info.value = "2222";
      info.type = "button";
    },
    eventObj(e) {
      console.log(e);

      //获取自定义的值
      var aid = e.srcElement.dataset.aid
      console.log(aid)
    },
    onEditorChange({ editor, html, text }) {
      this.content = html;
      console.log(html)
    },
    onEditorFocus() {

    },
    onEditorReady() {

    },
    onEditorBlur() {

    },

  },
  computed: {
    editor() {
      return this.$refs.QuillEditor.quill
    }
  },
  components: {
    //使用编辑器
    quillEditor
  }
}

</script>
<style lang="scss">
.red {
  color: red;
}

.blue {
  color: blue;
}

</style>
