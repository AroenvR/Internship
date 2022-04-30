// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract ReportData {

    string aString = "A SmartContract string.";

    function viewString() public view returns(string memory) {
        return aString;
    }
    
}