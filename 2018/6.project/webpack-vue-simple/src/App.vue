<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="item in list">
        {{item.title}}
        <ol>
          <li v-for="el in item.child">
              {{el.name}}
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'webpack vue simple',
      obj:{
        name:"Tom"
      },
      list:[
        {
          title:"首页1",
          child:[{
            name: "dog"
          },{
            name:'dog2'
          }]
        },{
          title:"index2",
          child: [{
            name:'cat1'
          },{
            name:'cat2'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }

// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
