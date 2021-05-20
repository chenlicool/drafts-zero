const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBtn = document.getElementById('addedBtn')
const deletedBtn = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

function renderList() {

    // 渲染页面的 List
    let htmlStr = ''

    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
            <div class="mt-10">
                <div class="mt-5" >
                    <p>内容：${item.content}</p>
                    <p>时间：${item.date} ${item.time}</p>
                </div>
            </div>
        `
    })
    // 把 html 打印到该ID为 item 的容器里面 
    list.innerHTML = htmlStr

}

addedBtn.addEventListener('click', function () {

    listContent.push({
        content: content.value,
        date: date.value,
        time: time.value
    });

    renderList();
});

deletedBtn.addEventListener('click', function () {

    listContent.pop();
    renderList();
});
