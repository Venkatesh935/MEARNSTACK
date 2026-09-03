import fs from 'fs';
export function readData(filename){
    
    const data=fs.readFile(filename,'utf8');
    console.log(data);
}
export function saveData(filesname, content){
    fs.writeFileSync(filesname, content);
    console.log('file write');
}
export function loaction(filesname, content){
    fs.appendFileSync(filesname, content);
    console.log('log updated');
}
export default function greet(){
      console.log('file utis module loaded');
}
