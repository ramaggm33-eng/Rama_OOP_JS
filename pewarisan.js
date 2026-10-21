class Hewan {
    bersuara() {
        console.log("hewan bersuara");
    }
}

class Kucing extends Hewan {
    mengeong() {
        console.log("Meong...");
    }
}

const kucing = new Kucing();
kucing.bersuara(); 
kucing.mengeong(); 