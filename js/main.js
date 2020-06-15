import code from './css.js'
let duration = 10
let open = false
// 获取工具栏
let tool = document.querySelector('#tool')
// 开/关
let openClick = tool.querySelector('button:nth-child(1)')
// 慢速
let slow = tool.querySelector('button:nth-child(2)')
// 中速
let normal = tool.querySelector('button:nth-child(3)')
// 快速
let fast = tool.querySelector('button:nth-child(4)')
// 立刻结束
let end = tool.querySelector('button:nth-child(5)')
// 代码区
let codeClick = document.querySelector('#code') 
// 慢/中/快切换列表
let speedList = [slow, normal, fast]

let container = document.querySelector('#code')
let styleTage = document.querySelector('#styleTag')
let n = 0
let id
const write = () => {
    id = setTimeout(function run() {
        n += 1
        container.innerHTML = code.substring(0, n)
        styleTag.innerHTML = code.substring(0, n)
        container.scrollTop = container.scrollHeight
        container.scrollLeft = 0
        if (n < code.length) {
            id = setTimeout(run, duration)
        } else {
            n = 0
            open = true
            window.clearTimeout(id)
            openClass()
        }
    }, duration)
}
write()
openClick.onclick = () => {
    open = !open
    if (open) {
        window.clearTimeout(id)
    } else if (!open || n === 0) {
        write()
    }
    openClass()
}
slow.onclick = () => {
    duration = 20
    removeSpeedClass()
    slow.classList.add('active')
    slow.querySelector('use').setAttribute('xlink:href', '#i-run')
}
normal.onclick = () => {
    duration = 5
    removeSpeedClass()
    normal.classList.add('active')
    normal.querySelector('use').setAttribute('xlink:href', '#i-run')
}
fast.onclick = () => {
    duration = 1
    removeSpeedClass()
    fast.classList.add('active')
    fast.querySelector('use').setAttribute('xlink:href', '#i-run')
}
end.onclick = () => {
    window.clearTimeout(id)
    container.innerHTML = code
    styleTag.innerHTML = code
    container.scrollTop = container.scrollHeight
    n = 0
    open = true
    openClass()
}
codeClick.addEventListener('touchend', (e)=>{
    container.scrollLeft = 0
})
function openClass() {
    if (open) {
        openClick.classList.remove('active')
        openClick.querySelector('use').setAttribute('xlink:href', '#i-start')
    } else {
        openClick.classList.add('active')
        openClick.querySelector('use').setAttribute('xlink:href', '#i-time-out')
    }
}
// 删除所有class
function removeSpeedClass() {
    for (let i = 0; i < speedList.length; i++) {
        let item = speedList[i]
        item.classList.remove('active')
        item.querySelector('use').setAttribute('xlink:href', '#i-ring')
    }
}