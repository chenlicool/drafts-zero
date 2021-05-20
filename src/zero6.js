// 

// callback 回呼
window.addEventListener('load', function () {
    const p1 = document.getElementById('zero-title')
    p1.innerText = 'Leah‘s notebook'

    // 通过 JS 监听鼠标操作
    const b1 = document.getElementById('zero-click')
    b1.addEventListener('click', function () {
        console.log('点下去')
    })

    // 通过 JS 插入一段代码到 ID 相关的容器里
    const box1 = document.getElementById('box1')
    box1.innerHTML = '<h1>备忘录</h1>'

    // 通过 JS 监听输入的文案
    const in1 = document.getElementById('type-in')
    in1.addEventListener('keyup', function (inText) {
        console.log('inText.target.value', inText.target.value)
    })
})





