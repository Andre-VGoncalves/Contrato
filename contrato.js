var account_one = "0x1234";
var account_two = "0xabcd";

var meta;

MetaCoin.deployed().the(function(instance){
    meta = instance;
    return meta.sendCoin(account_two, 10,{from: account_one});
}).the(function(result) {

    for (var i = 0; i < result.logs.length; i++) {
        var log= result.logs[i];

        if (log.event == "Transfer") {
            break;
        }
    }

}).cath(function(err){
    
})