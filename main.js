#!/usr/bin/env node                //this is to make global environment that is the code can run on any platform 
// to take input from node js
let input = process.argv.slice(2);
let fs = require("fs");
let path = require("path");
let treeobj = require("./commands/tree")
let organizeobj = require("./commands/organize")
let helpobj = require("./commands/help")
// console.log(input);

// Tree // organize // help

let types = {
    media:["mp3","mp4", "mkv"],
    archives:['zip','log','vbs'],
    documents:['doc','docx','pdf','txt','xlsx','pptx'],
    images:['png', 'jpeg','jpg'],
    app:['exe','dmg']
}

switch (input[0]) {
    case "tree":
        treeobj.treeKey(input[1]);
        break;
    case "organize":
        organizeobj.organizeKey(input[1]);
        break;
    case "help":
        helpobj.helpKey();
        break;
    default:
        console.log("enter a valid input...(¬_¬ )")
        break;
}






