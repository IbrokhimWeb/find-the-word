const input = document.querySelector("#input"),
   inputlar = document.querySelector('.inputs'),
 tafsiyaSoz = document.querySelector("#maslahat"),
      tugma = document.querySelector('#btn'),
     taxmin = document.querySelector("#taxmin"),
    notogri = document.querySelector("#notogri");

let urunish, soz, taxminSoni = 10, togriHariflar = [], notogriHariflar = [];

const randomSoz = () =>{
let ranObj = sozlar[Math.floor(Math.random() * sozlar.length)]
soz = ranObj.soz
taxminSoni = 10, togriHariflar = [], notogriHariflar = [];
// console.log(soz);

taxmin.innerHTML = `${taxminSoni} ta`;
tafsiyaSoz.innerHTML = ranObj.tafsiya;
notogri.innerHTML = notogriHariflar;
let html = '';
for (let i = 0; i < soz.length; i++) {
    html += `<input type="text" disabled />`;
}

inputlar.innerHTML = html;

}; randomSoz();

const game = (e) => {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !togriHariflar.includes(` ${key}`) && !notogriHariflar.includes(key)){
        // console.log(key)
        if (soz.includes(key)){
            for (let i = 0; i < soz.length; i++) {
                if (soz[i] === key) {
                    togriHariflar.push(key);
                    inputlar.querySelectorAll("input")[i].value = key;
                }
            }  

        } else {
            taxminSoni--;
            notogriHariflar.push( key);
        }
        taxmin.innerHTML = `${taxminSoni} ta`;
        notogri.innerHTML = notogriHariflar;
    }
            input.value = "";

            setTimeout(() => {
                if (togriHariflar.length === soz.length) {

                    alert(`\nTabriklayman ${notogriHariflar.length}ta hatolik bilan Topdingiz\n${soz.toUpperCase()} edi`);
                    randomSoz();
                    // console.log(soz);
                } else if (taxminSoni < 1) {
                    alert(`\nGame over\nSiz ${notogriHariflar.length}ta harifni topa oldingiz\n 10ta urinish zoya ketdi!!!`);
                    for (let i = 0; i < soz.length; i++) {
                        sozlar.querySelectorAll("input")[i].value = soz[i];
                    }
                }
            });
        }

btn.addEventListener("click", randomSoz);
input.addEventListener("input", game);
document.addEventListener("keydown", () => input.focus())






