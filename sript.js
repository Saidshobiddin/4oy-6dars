let ozim = Math.round( Math.random() * 3)
let pc = +prompt (" 0:tosh 1:qaychi 2:qogoz ")
console.log(pc);
if( ozim === 0 && pc === 2){ 
    alert("siz yutqizdingiz");
}
else if( ozim === 1 && pc === 0){
    alert("siz yutqizdingiz");
}
else if( pc === 1 && ozim === 0){
    alert(" siz yuttingiz");
}
else if( pc === 2 && ozim === 0){
    alert("siz yutqizdingiz");
}
else if( ozim === 0 && pc === 0){
    alert("durrang");
}
else if ( ozim === 2 && pc === 2){
    alert("durrang")
}
else if ( ozim === 1 && pc === 1){
    alert("durrang")
}