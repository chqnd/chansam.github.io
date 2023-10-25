let nilaiPenilaian = prompt("Masukkan Nilai Anda",0)
let grade = "";

if(nilaiPenilaian >= 96){
    grade = "A"
}else if(nilaiPenilaian >= 90){
    grade = "B"
}else if(nilaiPenilaian >= 86){
    grade = "C"
}else if(nilaiPenilaian >= 81){
    grade = "D"
}else if(nilaiPenilaian >= 76){
    grade = "E"
}else if(nilaiPenilaian >= 66){
    grade = "F"
}else if(nilaiPenilaian >= 0){
    grade = "F-"
}
document.write(`<h1>Nilai Anda : ${nilaiPenilaian} dan grade anda : ${grade}</h1>`);
