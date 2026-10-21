class Rekening {
    // data private, tidak bisa diakses langsung dari luar class
    #saldo = 0;
    constructor(saldoAwal) {
            this.#saldo += saldoAwal;
   }
   //method untuk menambah saldo
    setor(jumlah) {
        if (jumlah > 0) {
            this.#saldo += jumlah;
            console.log("Setor tunai berhasil");
        } else {
            console.log("jumlah setor harus > 0");
        }
    }
    //method mengambil saldo
    tarik(jumlah) {
        if (jumlah > 0 && jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log("Penarikan tunai berhasil");
        } else {
            console.log("Jumlah penarikan tidak valid");
        }
    }
    lihatSaldo() {
        return this.#saldo;
    }
}
//buat objek baru
const rekeningrama = new Rekening(50000000000000000000000);
//menggunakan mthod yang kita buat
rekeningrama.lihatSaldo();
rekeningrama.setor(500000);
rekeningrama.tarik(200000);
rekeningrama.lihatSaldo();