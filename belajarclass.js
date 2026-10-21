class Siswapplg {
    constructor(nama, kelas) {
        this.nama = nama;
        this.kelas = kelas;
    }
    perkenalan(){
        console.log(`Nama : ${this.nama}`);
        console.log(`Kelas : ${this.kelas}`);
    }
    seragam(){
        console.log("menggunakan seragam jurusan");
    }
}
const siswa3 = new Siswapplg("Rama", "XI PPLG");
siswa3.perkenalan();
const siswa1 = new Siswapplg("Alvaro", "XI PPLG");
siswa1.perkenalan();

const siswa2 = new Siswapplg();
siswa2.seragam();

class Produk {
    constructor(nama, harga, jumlah) {
        this.nama = nama;
        this.harga = harga;
        this.jumlah = jumlah;
    }

    tampilkaninfo() {
        console.log(`Nama : ${this.nama}`);
        console.log(`Harga : ${this.harga}`);
        console.log(`Jumlah : ${this.jumlah}`);
    }
    hitungdiskon(persen) {
        return this.harga - (this.harga * persen / 100);
    }
}

const produk1 = new Produk("Keyboard", 200000, 2);
produk1.tampilkaninfo();
console.log("Harga produk setelah Diskon: " + produk1.hitungdiskon(10));

const produk2 = new Produk("Mouse", 150000, 3);
produk2.tampilkaninfo();
console.log("Harga produk setelah Diskon: " + produk2.hitungdiskon(15));

const produk3 = new Produk("Monitor", 3000000, 2);
produk3.tampilkaninfo();
console.log("Harga produk setelah Diskon: " + produk3.hitungdiskon(20));