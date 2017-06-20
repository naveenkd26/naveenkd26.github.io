define("lib.ui.logging", [], function(){
        console.log('this is logging service');
        var logService = {
            error : function(errMsg){
                console.error(JSON.stringify({type:"ERROR", msg: errMsg}));
            },
            info : function(infoMsg){
                console.info(JSON.stringify({type:"INFO", msg: infoMsg}));
            }
        };
        return logService;
});