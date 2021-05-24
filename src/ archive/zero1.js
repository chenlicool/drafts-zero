let c1 = ['小明', '小明1', '小明2', '小明3', '小明4']
console.log('转学前', c1)
c1.push('小黄')
console.log('转学后', c1)

let igPhotos = [
    'https://xx.img.com/a1.png',
    'https://xx.img.com/a2.png',
    'https://xx.img.com/a3.png',
]

console.log('第一笔', igPhotos[0])
console.log('igPhotos', igPhotos)
console.log('igPhotos长度:', igPhotos.length)

// 物件 Object
const card = {
    name: 'leah的名片',
    address: "北京xxx",
    age: 999
}

const post = {
    image: 'https://xx.img.com/a3.png',
    desc: '这是一张图片',
    date: '2022/02/02',
    comment: ['好漂亮哦', '我也要去']
}

const wall = [
    post,
    post,
    post,
    post
]

console.log('wall', wall)

