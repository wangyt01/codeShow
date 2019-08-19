var ctx = '';
//查询
layui.use('form', function () {
    var form = layui.form;

    Vue.filter('formatDate1', function (time) {
        return time.substring(0, 10);
    })

    var vm = new Vue({
        el: "#indexContent",
        data: {
            data: [],
            message: ''
        },
        mounted: function () {
            var that = this;
            this.$nextTick(function () {
                that.query();
            })
        },
        methods: {
            query: function (message) {
                var that = this;
                var params = {};
                if (message != void 0) {
                    params.name = message.toString();
                }
                $.ajax({
                    url: '/index',
                    type: 'post',
                    data: params,
                    success: function (data, status) {
                        if (data) {
                            that.data = data;
                        }
                    }
                })
            },
            edit: (id) => {

            },
            del: function(id) {
                var that = this;
                var params = {
                    id: id
                };
                $.ajax({
                    url: '/delete',
                    type: 'post',
                    data: params,
                    success: (data, status) => {
                        if (data) {
                            that.data = data;
                        }
                    }
                })
            }
        }
    })
})
