//abstraksi.js
class Mobil {
    constructor(merek) {
        this.merek = merek;
    }
    // method public
    nyalakan() {
        console.log("nyalakan mobil");
        this.#prosesMesin();
        console.log("mobil siap digunakan");
    }
    // method private
    #prosesMesin() {
        console.log("proses mesin");
    }
}
const mobil = new Mobil("Toyota");
mobil.nyalakan();
const mobilsport = new Mobil("Porche");
mobilsport.nyalakan();
const mobilSUV = new Mobil("Honda"); mobilSUV
mobilSUV.nyalakan();
