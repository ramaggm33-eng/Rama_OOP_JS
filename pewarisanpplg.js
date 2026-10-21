//buat class paent
class PPLG {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
    perkenalan() {
        console.log("Halo,saya siswa dari XI-PPLG, nama saya " + this.nama);
        console.log("Umur saya tahun ini " + this.umur + " tahun");
    }
}
//buat class child
class Siswa extends PPLG {
    constructor(nama, umur, kelas) {
        super(nama, umur);
        this.kelas = kelas;
    }
    belajar(){
        console.log(this.nama + " sedang belajar...");
    }
}
//buat objek baru
const siswa1 = new Siswa("Rama", 17, "XI-PPLG");
//memanggil method yang diwariskan
siswa1.perkenalan();
//memanggil method milik class Siswa
siswa1.belajar();
//menampilkan properti class
console.log("Kelas : " + siswa1.kelas);