//        TREE FUN    ----> print all the files in tree fassion

function treefn(dirpath) {
    if (dirpath == undefined) {
        treeHelper(process.cwd(), "");
        return;
    } else {
        if (fs.existsSync(dirpath)) {
            treeHelper(dirpath, "");
        } else {
            console.log("enter a valid path....!")
            return;
        }
    }
    
}


function treeHelper(dirpath, indent){
    let isFile = fs.lstatSync(dirpath).isFile();
    if(isFile){
        let fileName = path.basename(dirpath);
        console.log(indent + "|---"+fileName);
    }else{
        let dirname = path.basename(dirpath);
        console.log(indent + "|___" + dirname);
        let children = fs.readdirSync(dirpath);
        for(let i=0; i<children.length; i++){
            let childpath = path.join(dirpath, children[i]);
            treeHelper(childpath, indent+"\t");
        }
    }
}

module.exports={
    treeKey: treefn
}