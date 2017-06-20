define(['./lib.ui.alert', './lib.ui.logging', 'jquery'], function(alertService){
        console.log('This is in app.js');
        alertService.alert('This alert is through alert service');
});