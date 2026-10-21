class Siswa {
    //constructor untuk menyimpan data awal siswa
    constructor(nama, kelas, nilai1, nilai2) {
        this.nama = nama;
        this.kelas = kelas;
        this.nilai1 = nilai1;
        this.nilai2 = nilai2;
    }
    //Method untuk menampilkan identitas siswa
    tampilkanData() {
        console.log("=== DATA SISWA ===");
        console.log("Nama: " + this.nama);
        console.log("kelas " + this.kelas);
    }        
    //Method untuk menghitung nilai rata-rata
    hitungRataRata() {
        return (this.nilai1 + this.nilai2) / 2;
    }
    //Method untuk menentukan status kelulusan
    cekKelulusan() {
        if (this.hitungRataRata() >= 75) {
            return "Lulus";
        } else {
            return "Belum Lulus";
        }
    }
}

//Membuat objek siswa
const siswa1 = new Siswa("Rama", "XI-PPLG", 90, 90);
const siswa2 = new Siswa("Alvaro", "XI-PPLG", 74, 60);

//Menampilkan data siswa pertama
siswa1.tampilkanData();
console.log("Rata-Rata: " + siswa1.hitungRataRata());
console.log("Status: " + siswa1.cekKelulusan());

//Menampilkan data siswa kedua
siswa2.tampilkanData();
console.log("Rata-rata: " + siswa2.hitungRataRata());
console.log("Status: " + siswa2.cekKelulusan());