
var i;

for(i=5; i > 0; i--){
    console.log('cobi ' + i);
}
//==========================================


var text = '';
var i,j,k,l;
var n = 5;

for(k=0; k < n; k++){

    //loop binta
    for(l=0; l < k; l++){
        text = text + '*'
    }
    //pindah baris
    text = text + '\n'
}

for(i=n; i > 0; i--){

    //loop bintang
    for(j = 0; j < i; j++){
        text = text + '*';
    }
    //bintang pindah baris
    text = text + '\n';
}
console.log(text)

//=========================================
var text = "";
var i,j;
var n = 5;

for(i=0; i < n; i++){

    for(j = n; j >= 0; j--){
        if(i>=j){
            text = text + '*';
        } else if (i<=j){
            //spasi kosong
            text = text + ' ';
        }
    }
    text = text + '\n';
}
console.log(text);

//============================


var textDua = '';
var w,j;
var n = 10;

for(w=n; w > 0; w--){

    for(j=n; j >= 0; j--){
        if(w>j){
            textDua = textDua + '*';
        } else {
            textDua = textDua + ' ';
        }
    }
    textDua = textDua + '\n';
}
console.log(textDua);


// ===============================
var textTiga = "";
var i,j;
var n = 5;
for(i=0; i < n; i++){

    for(j=n; j >= 0; j--){
        if(i>=j){
            textTiga = textTiga + " *"
        } else{
            textTiga = textTiga + " "
        }
    }
    textTiga = textTiga + "\n"
}
console.log(textTiga)

console.log('\n \n')
//===============================

var textEmpat = '';
var i,j;
var n = 5;
for(i=n; i > 0; i--){
    // loop bintang
    for(j = n; j >= 0; j--){
        if(i>j){
            textEmpat = textEmpat + ' *';
        } else {
            textEmpat = textEmpat + ' ';
        }
    }
    textEmpat = textEmpat + '\n';
}
console.log(textEmpat)

// =======================
console.log('\n \n')


var tampilkan = '';
var i,pagar;
var n = 10;

for(i=0; i < n; i++){

    for(pagar=0; pagar < 5; pagar++){
        if(i % 2 === 0) {
            tampilkan = tampilkan + ' # ';
        } else if (i % 2 === 1) {
            tampilkan = tampilkan + '  #';
        }
    }
    tampilkan = tampilkan + '\n';
}
console.log(tampilkan)