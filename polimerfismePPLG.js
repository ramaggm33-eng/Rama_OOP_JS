class Rama {
    nama() {
        console.log("Nama: Rama");
    }
    skillCoding() {
        console.log("Belajar coding");
    }

    levelCoding() {
        console.log("Level pemula");
    }
}
class Alvaro{
    nama() {
        console.log("Nama: Alvaro")
    }
    skillCoding(){
        console.log("Belajar coding1");
    }

    levelCoding(){
        console.log("Level pemula1")
    }
}

const siswa =[
    new Rama(),
    new Alvaro(),
];

siswa.forEach(hasil => {
    hasil.nama();
    hasil.skillCoding();
    hasil.levelCoding();
    console.log(".............");
});


