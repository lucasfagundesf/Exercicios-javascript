let num = [5, 8, 2, 9, 4]
num.push(7)
num.sort()

// for(let pos=0;pos < num.length;pos++){
//     console.log(`A posição ${pos} tem valor ${num[pos]}`)
// }

for(let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

let posi = num.indexOf(7)
console.log(`O valor 7 está na posição ${posi}`)