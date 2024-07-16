
const { log, error } = require('console');
const fs = require('fs');

// const first = fs.readFileSync('./content/subfolder/first.txt','utf8');
// const second = fs.readFileSync('./content/subfolder/second.txt','utf8');
// fs.writeFileSync('./content/subfolder/third.txt',`This is the first file :\n ${first}\n and this is the second :\n ${second}`,{flag:'a'});
// const third = fs.readFileSync('./content/subfolder/third.txt','utf8');
// log(third);
log('This should be the first');
async function All(){
    fs.readFile('./content/subfolder/first.txt','utf8', (error,result) => {
    if(error){
        log(error);
        return;
    }
    const first = result
    fs.readFile('./content/subfolder/second.txt','utf8', (error,result) => {
        if(error){
            log(error);
            return;
        }
        const second = result;
        fs.writeFile('./content/subfolder/third.txt',`Async:\n ${first}\n ${second}`,{flag:'a'},(error,result) => {
            if(error){
                log(error);
                return;
            }
            log('This should be the second');
            })
        });
    })
}
All();
log('This should be ethe last');