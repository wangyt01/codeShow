// var inData = JSON.parse('<%- JSON.stringify(data)%>');
// var inData = <%- JSON.stringify(data)%>
// console.log(IndexData);
var ctx = ''
//查询
// layui.use('form', function() {
//   var form = layui.form;


//   var vm = new Vue({
//     el: "#indexContent",
//     data: {
//       data: IndexData,
//     },
//     methods: {
//       query: function() {
//         //监听提交
//         form.on('submit(formQuery)', function(data) {
//           // layer.msg(JSON.stringify(data.field));
//           console.log(data.field);
//           autoAjax('/index', data.field, function(json) {
//             console.log(json)
//             if (json) {
//               console.log("查询成功");
//               vm.data = json;
//             }
//           })
//         })
//       }
//     }
//   })


// })
//   $(document).ready(function() {
//   //删除
//   $('#indexTable a').click(function() {
//     var that = this;
//     layer.confirm('is not?', function(index) {
//       //获取ID
//       var trId = $(that).parent().parent().attr('id');
//       var data = {
//         id: trId
//       }
//       $.ajax({
//         url: '/index',
//         type: 'post',
//         data: data,
//         success: function(data, status) {
//           if (status == 'success') {
//             console.log(data);
//             console.log('删除成功');
//             //删除成功后移除这行数据
//             $('#' + trId).remove();
//           }
//         },
//         error: function(data, err) {
//           console.log('删除失败')
//         }
//       })
//       layer.close(index);
//     });
//   })
//   //查询
//   layui.use(['form', 'table'], function() {
//     var form = layui.form,
//       table = layui.table;

//     //监听提交
//     form.on('submit(formQuery)', function(data) {
//       layer.msg(JSON.stringify(data.field));
//       $.ajax({
//         url: '/index',
//         type: 'post',
//         data: data.field,
//         success: function(data, status) {
//           console.log(data)
//           if (status == 'success') {
//             console.log("查询成功");
//             // $('#indexTable').html('`<%= data %>`')
//             // form.render();



//           }
//         },
//         error: function(data, err) {
//           console.log('查询失败');
//         }
//       })
//       return false;
//     });
//   })

// })