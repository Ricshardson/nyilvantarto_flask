'use strict' //kötött mód, szigorúbbak a szabályok, érdemes használni

console.log("Hello bazmeg");
//globalis valtozo lesz a szoveg!!!
//szoveg= "ez itt a szoveg";

//ujra deklaralhato szoveg lesz
var szoveg2 = "ez egy uj szoveg";
szoveg2 = "uj erteket kap a szoveg";
var szoveg2 = "ez egy uj szoveg uj ertekkel";
console.log(szoveg2);

//nem lesz ujradeklaralhato
let szoveg3 = "ez nem egy ujra deklaralhato szoveg";

// uj erteket adok a szoveg3 valtozoban;
szoveg3 = "vasdfad";
console.log(szoveg3);

//ezzel statikus szoveget es valtozo tartalmat is kiirunk:
console.log("a szoveg valtozo tartalma: "+szoveg3); //string osszefuzes

//a typeof fugveny kiirja a bele rakott valtozo tipusat
console.log("a szoveg3 TIPUSA: "+typeof(szoveg3) );
// string karakterlanc (1 vagy tobb karakterbol allo adat)
let szam = 1;
let szam2 = "1";
console.log("A szam valtozo tartalma: "+szam);
console.log("A szam tipusa: "+typeof(szam) );
console.log("A szam2 tipusa: "+typeof(szam2) );

szam = szam +1;
console.log("A szam valtozo tartalma: "+szam);
szam2 = szam2 + 1;
console.log("a szam2 TIPUSA: "+typeof(szam2) );

//utasitasok vegere ; jelet kell tenni lefut ezek nélkül a kód 
// de hibalehetőség!!!!!!!


console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );

//stringet szamma alakitani:
//parseINT fugveny szamma alakitja azt amit beadunk neki
szam2 = parseInt(szam2);
console.log("a szam2 valtozo TIPUSA: "+typeof(szam2) );

let valami ="asfasd";
valami = parseInt(valami);
console.log(valami);
console.log(typeof(valami));

szam = 5 + 6 + 7; // szam <- 5 + 6 + 7 a szam megkapja az egyenlőségjel jobb oldalan levo eredmenyt

// két változó értékét így lehet kicserélni
let a = 3;
let b = 10;
let c;
console.log("csere elott> a ="+a+" b = "+b);


c = a;
a = b;
b = c;

console.log("csere utan> a = "+a+"b = "+b);
//változó típusok: number, string, boolean

let igazhamis = true

if (a > 5&& a <20) {
 console.log ("a 5 es 20 kozott van");
} else {
  console.log ("Faszpicsába a kurva életbe");
}

let nev = "Geza";
if (nev === "Geza" ) {
 console.log("Geza itten van");
}

// változó típus: TÖMB ( ARRAY )

// a tombben tobb elemet tudunk tarolni egyszerretípustól függetlenül


let tomb = [12, 32, 54, 65, 33, 66]
let tomb2 = [12, "szoveg", true, 65, 33, 66]
console.log("a tomb : "+tomb);
console.log("a tomb tipusa: "+typeof(tomb));
console.log("a tomb elemeinek szama: "+tomb.length);
// for ciklus (ciklusvaltozo, kezdo ertek, leptek)
let vanbenne = false;
for (let i = 0; i<tomb.length; i++) {
 console.log("a tomb: "+i+"-edik eleme: "+tomb[i]);
 if ( tomb[i] === 12) {
   vanbenne=true;
 }
}
 if (vanbenne) {
   console.log("van a tombben 12");
}

console.log("a gyumolcs: "+gyumolcs); //undefined, mert mar létezik a változó csak nem kapott értéket
var gyumolcs = "alma"; // ha var-al deklaralunk arra érvényes a hoisting még strict módban is
// hoisting bizonyos változók vagy függvények előbb jönnek létre mint ahogy lefut a kód
// semicolon insertion (automatikus pontosvessző beillesztés)

console.log("ez egy sor\nez egy uj sor\tez egy tabbal beljebb van"); // \n: uj sor, \t: tab
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX\rValami"); // \r carrige return

szam++; //rovidites: szam = szam + 1;
console.log("szam: "+szam);
console.log("Szamhoz hozzaadok 1-et de elotte kiirom a szamot:");
console.log(szam++);
console.log("Szamhoz hozzaadok 1-et majd kiirom az eredmenyt:");
console.log(++szam);


//ciklusok
let j = 0;
while (j < tomb.length) {

console.log("szia")
j++;
}


let osztalyzatok = [3,3,4,5,5,5,"2"];
let kettesek = 0;
let harmasok = 0;
let negyesek = 0;
let otosok = 0;

for(let i=0; i<osztalyzatok.length; i++){ // for-on belüli ciklus változónak lehet let i=0 több helyen is
 if (osztalyzatok[i] === 2) {
kettesek++;
} 
 if (osztalyzatok[i] === 3) {
  harmasok++;
}
 if (osztalyzatok[i] === 4) {
  negyesek++;
}
 if (osztalyzatok[i] === 5) {
 otosok++;
  }
}
console.log("ENNYI KIBASZOTT KETTES VAN: "+kettesek);
console.log("ENNYI KIKÚRT HÁRMAS VAN: "+harmasok);
console.log("ENNYI PICSA NÉGYES VAN: "+negyesek);
console.log("ENNYI SZÉP ÖTÖSKE VAN: "+otosok);


var koszones = function(szoveg) {
 console.log("hello "+szoveg+"!");
}

let keresztnev = "Pista";
koszones(keresztnev);
koszones("Laci");

osszegzes(4, 5);

function osszegzes(szam1, szam2) {
if (typeof(szam1) !== 'number' || (typeof(szam2) === 'number')) {
let eredmeny = szam1 + szam2;
console.log("a két szám összege: "+eredmeny);
} else {
 console.log("error: nem szamokat kaptam");
}
}

//camelCasing mindenMasodikSzotNagyBetuvelKezdek
function convertToNumber(szam1, szam2) {

  szam1 = parseInt(szam1); //parseINT fgv számmá alakítja amit beadok neki
  szam2 = parseInt(szam2);

 if (isNaN(szam1)) { //isNaN megnézi a beadott változon hogy NaN típusú-e
szam1 = 0;
}
 if (isNaN(szam2)) {
  szam2 = 0;
}
return [szam1, szam2]; // a fuggveny visszateresi erteke
}

let eredmenyek = convertToNumber(55, "34");
console.log(eredmenyek);

// function statementet hasznalunk
function pontosIdo() {
 let ido = 5;
 let honap = "januar";
function pontosDatum() { 
 let datum = "hetfo";
 console.log("a pontos ido:" +honap+", "+datum+", "+ido+" óra");
}
 pontosDatum(); //meghivjuk az előbb deklarált pontosDatum fgvt-t
} // a pontosIdo fgv deklaralasa eddig tart
pontosIdo(); 

// function expression hasznalunk
let pontosIdo2 = function() {
let ido = 5;
let honap = "januar";
let pontosDatum2 = function() {
 let datum = "hetfo";
 console.log("a pontos ido:"+honap+", "+datum+", "+ido+" óra");
}
pontosDatum2();
}
pontosIdo2();

let szamHozzaadas = function() {
 let szam1= 5;
   return function(n) {
     return  szam1+5;
};
}();

console.log("Szam hozzáadás: "+szamHozzaadas(5) );



//------------------------------OBJEKTUMOK-----------------



// adattípusok: number, string, array, bool, NaN

let myObject = {}
console.log(typeof (myObject));

let player = {
  "name": "John", // kulcs,érték párok (key: name, value: John)
  "health": 100,
  "alive": true

}
console.log("Az uj jatekos neve: "+player.name);

let shot = Math.floor((Math.random()  *  200 ) + 1);  
if (player.alive) {
   console.log(shot+"-al meglőttük "+player.name+"-t");
 player.health = player.health - shot;
 if (player.health < 0) {
  player.alive = false;
  }
}
 if (!player.alive) {
 console.log(player.name+" is dead!!!!!!!") ;
} else {
 console.log(player.name+" is alive! FASZA");
}




 for (let key in player) {
    console.log("checking :"+key+" ....");
    console.log(key+" értéke: "+player[key]);

  }
    
  let animals = [
    
    {neve: "Buffy", fajtaja:"macska"},
    {neve: "Fluff", fajtaja:"kutya"},
    {neve: "Jago", fajtaja:"madar"},
    {neve: "Lori", fajtaja:"madar"},
    {neve: "Barni", fajtaja:"macska"},
    {neve: "Cirmi", fajtaja:"macska"}
    
 ]

 console.log("===========all animals======\n");
 console.log(animals);


 let kutyak = []
// animals tombon vegig megyunk es a tomb aktualis eleme az animal valtozo lesz. NINCS INDEX.
//requires EcmaScript 2015+
   for(let animal of animals) { //egy animal valtozo fogja tartalmazni az animals tomb aktualis elemet
// lehetne let animal in animals, de az OBJECTRE VAN nem tömbre!!!!!
    
    if( animal.fajtaja === "kutya") {
     
     kutyak.push(animal) //a tomb végre hozzáfüzök egy elemet
       }
   }
 console.log("KUTYA");
 console.log(kutyak);

 player.level = 1; // kibővítettük a player object-et egy propertyvel
console.log(player.name+" jatekos szintje: "+player.level);
 player.levelup = function () {
  player.level = player.level + 1;
}

 player.levelup()
 console.log(player.name+" a jatekos szintje: "+player.level);

     for (let key in player) {
  console.log("checking: "+key+" ....");
  console.log(key+" értéke: "+player[key]);
}    


// functional programozás
   kutyak = []
   kutyak = animals.filter(function(animal) {
      return animal.fajtaja === "kutya" //csak akkor adom vissza a tömb elemét ha a fajtája kutya
  })

  console.log("===========KUTYA =========\n");
  console.log(kutyak);

let kutyaE = function(animal) {
 return animal.fajtaja === "kutya";

}

 kutyak = animals.filter(kutyaE)

 

