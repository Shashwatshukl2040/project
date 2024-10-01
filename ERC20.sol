// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Token is ERC20{

    constructor()ERC20("MYTOKEN","MTK"){
    }

    function minToken(address _to, uint256 _amount)  public {
        _mint(_to, _amount*10**decimals());
    }
}