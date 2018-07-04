
			var code;//定义一个全局验证码
			$(function(){
				jcPublic.register();
				jcPublic.Tab();
				jcPublic.login();	
				jcPublic.downLoad();
				jcPublic.createCode();
				jcPublic.clickCode();
				$(".wrap>div>input").focus(function(){
        			$(this).css({"outline": "none" });
        			var $this = $(this);
        			$this.next("label").removeClass("move")//隐藏提示信息
    			})
				
				$(".other>span").on("click",function(){
					$(this).parent().children("div").toggleClass("hidden");
				})
				
			})
			
			
			var jcPublic = {
				register:function(){//注册
					var currentThis = this//当前对象
					$("#register").on("click",function(){
						var $this = $(this);
						var name = $("#name").val();//姓名
						var phone = $("#phone").val();//电话
						var passwor = $("#passwor").val();
						var Code = $("#code").val();//验证码
						var p_reg = /^0{0,1}(13[0-9]|15[0-9]|153|156|18[0-9])[0-9]{8}$/;//电话验证
						if(name.length==0 && phone.length==0 && passwor.length==0){//同时为空
							$this.prev(".wrap").find("label").addClass("move");
							return false;
						}else if(name == "" || name == "undefined" || name == "null"){
							$this.prev(".wrap").find(".name").addClass("move");
							return false;
						}else if(phone == "" || phone == "undefined" || phone == "null"){
							$this.prev(".wrap").find(".phone").addClass("move");
							return false;
						}else if(passwor == "" || passwor == "undefined" || passwor == null ){
							$this.prev(".wrap").find(".passwor").addClass("move");
							return false;
						}else if(Code == "" || Code == "undefined" || Code == null ){
							$this.prev(".wrap").find(".code").addClass("move");
							return false;
						}else if(code !== Code ){
							$this.prev(".wrap").find(".code").html("验证码有误").addClass("move");
							return currentThis.createCode();//验证码输入有误就刷新验证码重新输入
						}else if(!p_reg.test(phone)){
							$this.prev(".wrap").find(".restet").html("手机号码格式不正确").addClass("move");
							return false;
						}
					})
				},
				Tab:function(){//切换注册和登录
					$(".nav-sliders>a").on("click",function(){
						$(this).addClass("active").siblings().removeClass("active");
						var $width = $(this).width();//当前a的宽度
						var $index = $(this).index();//索引
						$(".on").stop(true,true).animate({"left":$width*$index+5+"px"},300);
						$(this).parents(".index-body").children(".change").children().eq($index).stop(true,false).show().siblings().hide();
					})
				},
				login:function(){
					$("#login").on("click",function(){
						var $this = $(this);
						var phone = $("#login-phone").val();//电话
						var passwor = $("#login-password").val();
						var p_reg = /^0{0,1}(13[0-9]|15[0-9]|153|156|18[0-9])[0-9]{8}$/;//电话验证
						if(phone.length==0 && passwor.length==0){//同时为空
							$this.prev(".wrap").find("label").addClass("move");
							return false;
						}else if(phone == "" || phone == "undefined" || phone == "null"){
							$this.prev(".wrap").find(".phone").addClass("move");
							return false;
						}else if(passwor == "" || passwor == "undefined" || passwor == null ){
							$this.prev(".wrap").find(".passwor").addClass("move");
							return false;
						}else if(!p_reg.test(phone)){
							$this.prev(".wrap").find(".restet").html("手机号码格式不正确").addClass("move");
							return false;
						}
					})
				},
				downLoad:function(){
					$(".download").on("click",function(){
						$(this).children(".pic").toggle(300);
					})
				},
				createCode:function(){//验证码
						var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');//所有候选组成验证码的字符，也可以用中文的 
						code="";
						var codeLength=4;//验证码的长度
						for(var i =0;i<codeLength;i++){
							var index = Math.floor(Math.random()*selectChar.length)//随机数
							code +=selectChar[index];
							//$("#createCade").html(code)
						}
						return $("#createCade").html(code)
						
					
				},
				clickCode:function(){//切换验证码
					var $this = this;
					$("#createCade").on("click",function(){
						return $this.createCode();
					})
				}
			}
	