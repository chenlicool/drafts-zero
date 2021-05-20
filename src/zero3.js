// for回圈
// i+=2 => i = i+2
/*
let a = 10;
a += 20;
console.log('a', a);

for (let i = 1; i < 10; i += 2) {
    console.log('i:', i);
}
*/

let classMateA = [100, 70, 59];
classMateA.push(30, 20, 1, 2);
for (let i = 0; i < classMateA.length; i++) {
    if (i === 2) {
        classMateA[i] = 70
    }
}

let posts = [
    {
        name: 'leah',
        text: '描述'
    },
    {
        name: 'juzi',
        desc: '文案描述'
    }
]
for (let i = 0; i < posts.length; i++) {
    if (i === 1) {
        let post = posts[1]
        console.log(posts)
    }
}

// while

let condition = true
let target = 1
let i = 0
while (condition) {
    if (i === target) {
        condition = false
    }
    console.log(i), i++
}





