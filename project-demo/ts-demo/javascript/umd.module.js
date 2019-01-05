// 识别UMD库

(function(root,factory){
    if(typeof define === "function" && define.amd){
        define(['libName',factory]);
    }else if(typeof module === "object" && module.exports){
        module.exports = factory(require("libName"));
    }else {
        root.returnExports = factory(root.libName);
    }
})