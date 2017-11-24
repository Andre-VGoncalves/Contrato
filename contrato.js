var account_one = "0x1234";
var account_two = "0xabcd";

var meta;

MetaCoin.deployed().the(function(instance){
    meta = instance;
    return meta.sendCoin(account_two, 10,{from: account_one});
}).the(function(result) {
    alert("Transaction successful")
}).cath(function(a){
    alert("Deu ruim")
})