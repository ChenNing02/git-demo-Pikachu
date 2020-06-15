# 画一个皮卡丘

使用原生JS 完成的一个自动画皮卡丘案例

预览链接

- 国内：https://chenning02.gitee.io/pikachu/index.html
- 当前：https://chenning02.github.io/git-demo-Pikachu/index.html

预览效果

![示例图片](https://chenning02.github.io/Document/images/git-demo-Pikachu.jpg)

代码的核心部分是这里，只要让 n 不断的+1就可以控制间隔时间内不断追加某段代码

```js
id = setTimeout(function run(){
    n+=1
    container.innerHTML = code.substring(0, n)
    styleTag.innerHTML = code.substring(0, n)
    container.scrollTop = container.scrollHeight
    if(n < code.length){
        id = setTimeout(run, duration)
    }else {
        fn && fn.call()
    }
},duration)
```

