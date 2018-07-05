/* 
 * 设计中心和首页共用的js写在这里面
 * @author liufengcheng
 * 
 */
 /******************************滚动效果****************************/
$.fn.mozhanflip = function(opt) {
    $(document).ready(function() {
        var def = {
            unit: '.product',/*动画执行的元素*/
            auto:'true',/*是否自动播放*/
            speed: '0.5',/*播放时间*/
            time: '8',/*自动播放的时间*/
            easyin: 'swing',/*播放的速度*/
            easyin2:'linear',/*播放的速度*/
            Lctrlname: '.leftarrow',/*点击左轮播按钮*/
            Rctrlname: '.rightarrow',/*点击右轮播按钮*/
            pagesname: '.SlideBox',/*动画结构总容器*/
            pagecon: '.Slidecon',/*动画结构容器*/
            pages: '.Slidepage',/*动画结构容器*/
            /*presseffect: 'true',点击左轮播按钮*/
            fliptype: 'slide',/*动画结构多个一屏容器 slide step slowly*/
            itemname: '.Slideitem'/*动画结构单个产品容器*/
        };
        $.extend(def, opt);
        $LRctrl = eval("$('"+def.unit+' '+def.Lctrlname+","+def.unit+' '+def.Rctrlname+"')");
        $Lctrl = eval("$('"+def.unit+' '+def.Lctrlname+"')");
        $Rctrl = eval("$('"+def.unit+' '+def.Rctrlname+"')");
        $pages = eval("$('"+def.unit+' '+def.pagesname+"')");
        $pagecon = eval("$('"+def.unit+' '+def.pagecon+"')");
        $page = eval("$('"+def.unit+' '+def.pages+"')");
        $item = eval("$('"+def.unit+' '+def.pages+' '+def.itemname+"')");
    
        itemamount = $item.size();
        pagamount = $page.size();
        $page.css('display','block');
        currentpage = 1;
        currentstep = 1;
        if(def.fliptype=='slowly' && itemamount >4){
            $pages.css('margin','0');
            $page.css('width','auto');
            $pagecon.append($page.clone());/*复制一份*/
        }
        productconsize();
        $Lctrl.click(function() { switchproduct('0');});
        $Rctrl.click(function() { switchproduct('1');});
        // if(def.presseffect=="true"){
        //      $LRctrl.mousedown(function() {
        //         $(this).animate({
        //             marginTop:'5px'
        //         },50);
        //     });
        //     $('body,html').mouseup(function() {
        //         $LRctrl.animate({
        //             marginTop: '0'
        //         },50);
        //     });
        // }
        $(window).resize(function() {
            productconsize();
        });
        function productconsize() {
            $page = eval("$('"+def.unit+' '+def.pages+"')");
            consize = $pages.outerWidth();
            itemwidth = $item.outerWidth();
            if(consize < itemwidth*$item.size()/$page.size()){
                def.fliptype='slide';
            }
            pagamount = $page.size();
            $page.css('width', consize);
            $pagecon.css('width', consize*pagamount);
            $item = eval("$('"+def.unit+' '+def.pages+' '+def.itemname+"')");
            if(def.fliptype=='step') {
                $pagecon.css({
                    marginLeft: 0-(currentstep-1)*itemwidth
                });
            }else if(def.fliptype=='slide'){
                $pagecon.css({
                    marginLeft: 0-(currentpage-1)*consize
                });
            }else if(def.fliptype=='slowly'){
                var itemamount = $item.size();
                var speedMove = 2*itemamount;
                moveSlide();
                var moveSlideLoop = setInterval(moveSlide,speedMove*5000);
            }
        }
        function moveSlide(){/*跑马灯效果*/
            $item = eval("$('"+def.unit+' '+def.pages+' '+def.itemname+"')");
            var itemamount = $item.size();
            var speedMove = 2*itemamount;
            $LRctrl.hide();
            if(itemamount>4){
                $page.css('width','auto');
                $item.css('width',consize/4);
                $pagecon.css({width:($item.width()+5) *itemamount});
                var w = -($pages.width()/4 *itemamount - $pages.width());
                $pagecon.css({
                    marginLeft: 0-(currentpage-1)*consize
                });
                $pagecon.stop();
                $pagecon.animate({
                    marginLeft: w
                },speedMove*5000,def.easyin2);
            }
        }
        function switchproduct(e) {
            $pagecon = eval("$('"+def.unit+' '+def.pagecon+"')");
            $page = eval("$('"+def.unit+' '+def.pages+"')");
            pagamount = $page.size();
            if(pagamount>1){
                if(def.fliptype=='slide') {
                    if(e==0){ currentpage--; }else{ currentpage++; }
                    if(currentpage<1) { currentpage = pagamount; }else if(currentpage>pagamount) { currentpage = 1; }
                    $pagecon.animate({
                        marginLeft: 0-(currentpage-1)*consize
                    },def.speed*1000,def.easyin);
                }else if(def.fliptype=='step'){
                    if(e==0){ currentstep--; }else{ currentstep++; }
                    if(currentstep<1) {
                        currentstep = itemamount;
                    }else if(currentstep>itemamount) {
                        currentstep = 1;
                    }
                    if((0-(currentstep-1)*itemwidth) < -(consize*(pagamount-1))){
                        $pagecon.animate({
                            marginLeft: 0
                        },def.speed*1000,def.easyin);
                    }else{
                        $pagecon.animate({
                            marginLeft: 0-(currentstep-1)*itemwidth
                        },def.speed*1000,def.easyin);
                    }
                    
                }
            }
        }

        /*自动播放*/
        if(def.auto == 'true' && def.fliptype != 'slowly'){
            var intervalID = setInterval(switchproduct,def.time*1000);
        };
        
        if(def.fliptype == 'slowly' && itemamount >4){
            var $pages = eval("$('"+def.unit+' '+def.pagesname+"')");
            var $pagecon = eval("$('"+def.unit+' '+def.pagecon+"')");
            $pages.on('mouseover',function(){
                $pagecon.stop(true);
            });
            $pages.on('mouseout',function(){
                $item = eval("$('"+def.unit+' '+def.pages+' '+def.itemname+"')");
                var itemamount = $item.size();
                var speedMove = 2*itemamount;
                var w = -($pages.width()/4 *itemamount - $pages.width());
                $pagecon.animate({
                   marginLeft: w
                },speedMove*5000,def.easyin2);
            });
        }
    });
};
/*小图片滚动方法*/
$.fn.flexslider = function(opt) {
    var def = {
        WProportion :"4",
        HProportion :"3"
    }
    $.extend(def, opt);
    var _slices = 9,  
        _box = $(this),
        _h=4,
        _index = 0,     
        _zIndex = 999, 
        _LINum = _box.find('.smallphotoUl li').size()/_box.size(),
        $block = _box.css('position', 'relative'), 
        $slides = $block.find('li').css('z-index', _zIndex).hide(), 
        _width = $block.width(), 
        _height = $block.height(), 
        _sliceWidth = _width / _slices, 
        _lastSliceWidth = _sliceWidth + (_width - _sliceWidth * _slices),   
        _img = $slides.eq(_index).show().find('img').attr('src'), 
        timer, 
        speed = 10000,   
        _animateSpeed = 600,    
        _isHover = false,  
        _isComplete = true,
        _left = _box.find('.leftArrow'),
        _right = _box.find('.rightArrow'),
        a = 0;
        _img = _img || $slides.eq(_index).show().find('img').attr('data-original');
        var _sliceDiv = '', _control = '';
        var h = _box.width()/def.WProportion*def.HProportion;
        
        _box.css('height',h);
        for(var i=0;i<_slices;i++){
            var _w = i == _slices - 1 ? _lastSliceWidth : _sliceWidth,
            _leftNum =  _l = i * _sliceWidth,
            _l = (parseInt(_leftNum) == 0? _leftNum:(parseInt(_leftNum)+1)),
            _W = (parseInt(_w) == 0? _w:(parseInt(_w)+1));
            _sliceDiv += '<div class="abgne-slice slide-' + i + '" style="left:' + _l + 'px;height:' + h + 'px;position:absolute;overflow:hidden;top:0;width:' + _W + 'px;height:100%;"><img style="position:absolute;top:0px;left:-' + _l + "px;width:" + _width + "px;height:" + h + 'px" src="' + _img + '"></div>';
            // _sliceDiv += '<div class="abgne-slice slide-' + i + '" style="left:' + _l + 'px;position:absolute;top:0;width:' + _w + 'px;height:100%;background-image:url(' + _img + ');background-position:-' + _l + 'px 0;background-repeat:no-repeat;"></div>';
        }
        for(var i=0;i<_LINum;i++){
            _control += '<li class="abgne-control control-' + (i + 1) + '">' + (i + 1) + '</li>';
        }
        var href = $('.smallphotoUl li:first a').attr('href');
       _box.append("<a href="+href+" target='_blank' class='smallphotoA'></a>");//生成一个a标签
       if(href==undefined){
            $('.smallphotoA').hide();
       }

        var $abgneSlides = $block.append(_sliceDiv, '<ul class="abgne-controls">' + _control + '</ul>').find('.abgne-slice'), 
            $abgneControls = $block.find('.abgne-controls').css('z-index', _zIndex + 2).find('li').eq(_index).addClass('current').end();
        $abgneControls.click(function(){
            if(!_isComplete) return;
            var $this = $(this), 
                $slide = $slides.eq($this.index()), 
                _completeTotal = 0;
            if($this.hasClass('current')) return;
            $this.addClass('current').siblings('.current').removeClass('current');
            _isComplete = false;
            _index = $this.index();
            _img = $slide.find('img').attr('src');
            var _a =  $slide.find('a').attr('href');

            $abgneSlides.each(function(i){
                var $ele = $(this);
                $ele.find('img').attr('src',_img);
                $('.smallphotoA').attr('href',_a);
                $ele.css({
                    top: i % 2 == 0 ? _height : -_height,
                    opacity: 0, 
                    zIndex: _zIndex + 1
                }).stop().animate({
                    top: 0, 
                    opacity: 1
                }, _animateSpeed, function(){
                    $ele.css('zIndex', _zIndex - 1);
                    if(i == _slices - 1){
                        $ele.find('img').attr('src',_img);
                        $('.smallphotoA').attr('href',_a);
                        $slide.show().siblings('a:visible').hide();
                        _isComplete = true;
                        if(!_isHover)timer = setTimeout(auto, speed);
                    }
                });
                $('.smallphotoA').show();
            });
            if( !_a){
                $('.smallphotoA').hide();
            }
            $('.smallphotoUl li').hide();
            $('.smallphotoUl li').eq(_index-1).show();
        });
        _left.click(function(){
            _index = (_index - 1) % _LINum;
            mL();
            $('.smallphotoUl li').hide();
            $('.smallphotoUl li').eq(_index+1).show();
        });
        _right.click(function(){
            auto();
        });
        $block.hover(function(){
            _isHover = true;
            clearTimeout(timer);
        }, function(){
            _isHover = false;
            timer = setTimeout(auto, speed);
        });
        function auto(){
            _index = (_index + 1) % _LINum;
            $abgneControls.eq(_index).click();
        }
        function mL(){
            $abgneControls.eq(_index).click();
        }
        timer = setTimeout(auto, speed);
}