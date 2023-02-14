import { splitStr } from './air01.js';
import { splitString } from './air02.js';
import { concatStr } from './air03.js';
import { oddOneOut } from './air04.js';
import { diffCharNextTo } from './air05.js';
import { basicOpe } from './air06.js';

function testAir01() {
    // test case
    let arg = "Bonjour les gars";
    let result1 = ['Bonjour','les','gars'];
    let resExec = splitStr(arg, ' ');
    if(resExec.toString() === result1.toString()) {
        return "success";
    } else {
        return "failure";
    }
}

function testAir02() {
    // test case
    let arg = ["Crevette magique dans la mer des étoiles", "la"];
    let result1 = ["Crevette magique dans ", " mer des étoiles"];
    let resExec = splitString(arg[0], arg[1]);
    if(resExec.toString() === result1.toString()) {
        return "success";
    } else {
        return "failure";
    }
}

function testAir03() {
    // test case
    let arg = ["Je", "test", "des", "trucs", " "];
    let result1 = ["Je test des trucs "];
    let resExec = concatStr(arg);
    if(resExec.toString() === result1.toString()) {
        return "success";
    } else {
        return "failure";
    }
}

function testAir04() {
    // test case
    let arg = ["1", "2", "3", "4", "5", "1", "2", "3", "4"];
    let result1 = ["5"];
    let resExec = oddOneOut(arg);
    if(resExec.toString() === result1.toString()) {
        return "success";
    } else {
        return "failure";
    }
}

function testAir05() {
    // test case
    let arg = "Hello milady,   bien ou quoi ??";
    let result1 = "Helo milady, bien ou quoi ?";
    let resExec = diffCharNextTo(arg);
    if(resExec.toString() === result1.toString()) {
        return "success";
    } else {
        return "failure";
    }
}

function testAir06() {
    // test case
    let arg = ['1', '2', '3', '4', '5', '+2'];
    let result1 = ['3', '4', '5', '6', '7'];
    let resExec = basicOpe(arg);
    if(resExec.toString() === result1.toString()) {
        return "success";
    } else {
        return "failure";
    }
}

function callTest() {
    console.log(testAir01());
    console.log(testAir02());
    console.log(testAir03());
    console.log(testAir04());
    console.log(testAir05());
    console.log(testAir06()); 
}

callTest();