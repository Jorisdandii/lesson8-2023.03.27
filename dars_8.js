// object keylarini toping
let obj = {
  id: 1,
  name: "WebBrain",
};

  for (let key in obj)
    console.log(key);
  
  console.log("========================================================");
// =====================================================

// object valuelarining raqamga tenglarini toping

let obj_1={
    id: 1,
    name:"WebBrain"
}

    for(let i in obj_1)
        if(typeof obj_1[i] === 'number') console.log(i); 

console.log("========================================================");
// =======================================================


// object valuelarining boolean tipidagi malumotlrini qaytaring keylari bn biriga

let obj_2={
    id:1,
    name:"WebBrain",
    offline:true,
    online:true,
    individual:false
}

delete obj_2.id, delete obj_2.name;

console.log(Object.assign({},obj_2));

console.log("========================================================");
// ======================================

// talaba bazaga kirishi kk shunday funksiya yarating u parol va name ni jonatsin. agar parol bn name bazadagi
// parol bn name ga togri kelsa consoleda hush kelibsiz aks holda parol yoki name  xato chiqsin
person1 = {
    id: 1,
    name: 'Umar',
    surname: 'Ismoilov',
    ielts: 5.5,
    student: true,
    parol: 101
}

function Kirish(parol, name) {
  if (parol === person1.parol && name === person1.name) {
    console.log(`Xush kelibsiz`);
  } else {
    console.log(`parol yoki name xato`);
  }
}

Kirish();

console.log('========================================================');

// =====================================

let person_2 = {
    id: 1,
    name: 'Odil ',
    age:78,
    child: {
        id: 1,
        name: 'Ali ',
        age:48,
        child: {
            id: 1,
            name: 'Umar ',
            age:20
        }
    }
}

let son = 0;
let ism = ``;
let tap = 'shu insonlarning jami balli';

while(person_2){
  if(person_2){
    son += person_2.age, ism += person_2.name, tap;
  } else {
      break
  }
  person_2 = person_2.child
}

console.log(ism);
console.log(tap);
console.log(son);

console.log("========================================================");

// chiqish
// 146
