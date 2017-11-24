var account_one = "0x1234";

var meta;

MetaCoin.deployed().then(function(instance){
    meta = instance;
    return meta.getBalance.call(account_one, {from: account_one});
}).then(function(balance) {

    console.log(balance.toNumber());

}).catch(function(e){
    
})