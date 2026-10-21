class Kucing {
    bersuara() {
        console.log("Meong...");
    }
}
class Anjing {
    bersuara() {
        console.log("Guk Guk...");
    }
}
class Hamster {
    bersuara() {
        console.log("Sik sik...");
    }
}
const hewan = [new Kucing(), new Anjing()];
hewan.forEach(hewan => hewan.bersuara());

const hewan3 = new Hamster();
hewan3.bersuara();

//Buat File baru polimorfismePPLG.js
//buat 2 method (skillCoding, levelCoding)