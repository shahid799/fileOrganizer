//         ORGANIZE FUN ---> organizes files function

function organizefn(dirpath) {

    let destpath;
    if (dirpath == undefined) {
        destpath = process.cwd();
        return;
    } else {
        if (fs.existsSync(dirpath)) {
            destpath = path.join(dirpath, "organizeFiles");
            if (fs.existsSync(destpath) == false) {
                fs.mkdirSync(destpath);
            }
        } else {
            console.log("enter a valid path....!")
            return;
        }
    }
    organizeHelper(dirpath, destpath)
}

function organizeHelper(src, dest) {

    let childNames = fs.readdirSync(src);
    //console.log(childNmaes);

    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        // check wheather it is a file r folder ---> if file arrange else  do nothing
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
           let category = getCategory(childNames[i]);
        //    console.log(category);
            sendFile(childAddress, dest, category);
        }
    }
}

function sendFile(src, dest, category){
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath) == false){
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(src);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(src, destFilePath);
    fs.unlinkSync(src);//to make cut from original repo
}

function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    
    for(let type in types){
        let prestype = types[type];
        for(let i=0; i<prestype.length; i++){
            if(ext == prestype[i]){
                return type;
            }
        }
    }
    return 'other';

}

module.exports={
    organizeKey: organizefn
}