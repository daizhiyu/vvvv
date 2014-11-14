(function() {




})(window.Zepto);

 // checkbox设置
function checkbox(e){
    if( e.attr("checked")==false){
       e.attr("checked",'true');
    } else{
        e.removeAttr("checked");
    }
}



