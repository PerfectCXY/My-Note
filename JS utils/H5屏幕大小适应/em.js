(function(win, doc) {
    // 设置屏幕宽度 （640为 iPhone 6的像素）
    var baseWidth = 640;
    // 获取HTML标签
    var documentHTML = doc.documentElement;
    function setRootFont() {
        // 获取 元素的大小及其相对于视口的位置
        var docWidth = documentHTML.getBoundingClientRect().width;
        var scale = docWidth / baseWidth;
        $(function() {
            $("body").css('fontSize',scale * 23 + 'px');
        })
    }
    setRootFont();
    // 监听屏幕变化
    win.addEventListener('resize', setRootFont, false);
})(window, document);