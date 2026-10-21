const buku = {
    judul: "Perahu kertas",
    pengarang: "Dee Lestari",
    tahun_terbit: "2003",

    dibaca: function() {
        console.log("Buku ini dipelajari di mapel kejuruan " + this.judul);  
    }
};

const mobil = {
    merek: "BMW",
    warna: "Hitam",
    kecepatan: 0,

    jalan: function() {
        this.kecepatan += 100;
        console.log("Mobil sedang berjalan dengan kecepatan " + this.kecepatan);
    }    
};

console.log(buku.judul); // Output: Perahu kertas
console.log(buku.pengarang); // Output: Dee Lestari
console.log(buku.tahun_terbit); // Output: 2003
buku.dibaca(); // Output: Buku ini dipelajari di mapel kejuruan Perahu kertas
console.log(mobil.merek); // Output: BMW
mobil.jalan(); // Output: Mobil sedang berjalan dengan kecepatan 100