define(['./lib.ui.logging'], function(logService){
    console.log('this is in alert service');
    var alertService = {
        alert : function(msg){
            alert(msg);
            logService.info('Just alerted a message');
        }
    }; 
    return alertService;
});