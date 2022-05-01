// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Report { // Not sure about this class.

    string dateString;
    string[] summary;
    string[] finished;
    string[] started;
    string[] good;
    string[] learned;
    string[] targets;
    string[] goals;
    string[] problems;
    string[] lookingForward;
    string[] extra;

    constructor(
        string memory _dateString,
        string[] memory _summary,
        string[] memory _finished,
        string[] memory _started,
        string[] memory _good,
        string[] memory _learned,
        string[] memory _targets,
        string[] memory _goals,
        string[] memory _problems,
        string[] memory _lookingForward,
        string[] memory _extra
    ) public {
        dateString = _dateString;
        summary = _summary;
        finished = _finished;
        started = _started;
        good = _good;
        learned = _learned;
        targets = _targets;
        goals = _goals;
        problems = _problems;
        lookingForward = _lookingForward;
        extra = _extra;
    }

}