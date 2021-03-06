pragma solidity ^0.4.2;

import "./ConvertLib.sol";


contract MetaCoin {
    mapping (address => uint) balances;

    event Transfer(address indexed_from, address indexed_to, uint256 _value);

    function MetaCoin () {
        balances[tx.origin] = 10000;
    }

    function sendCoin (address receiver, uint amount) returns(bool sufficient) {
        if (balances[msg.sender] < amount) { return false; }
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        Transfer (msg.sender, receiver, amount);
        return true;
    }

    function getBalanceInEth(address addr) returns(uint) {
        return ConvertLib.convert(getBalanceInEth(addr),2);
    }

    function getBalance (address addr) returns (uint) {
        return balances[addr];
    }

}