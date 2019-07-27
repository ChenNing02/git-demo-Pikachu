!function(){
    var duration = 50
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTage = document.querySelector('#styleTag')
        let n = 0
        let id
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
    }
    var code = `.nose {
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -11px;
    border: 12px solid red;
    border-color: black transparent transparent;
    border-radius: 50%;
}
.eye {
    width: 49px;
    height: 49px;
    background-color: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000;
}
.eye::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: 0px;
    border: 2px solid #000;
}
.eye.left {
    right: 50%;
    margin-right: 90px;
}
.eye.right {
    left: 50%;
    margin-left: 90px;
}
.face {
    width: 68px;
    height: 68px;
    background-color: #FC0D1C;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 85px;
}
.face.left {
    right: 50%;
    margin-right: 116px;
}
.face.right {
    left: 50%;
    margin-left: 116px;
}
.upperLip {
    height: 20px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 55px;
    background-color: #ffe600;
}
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
.lowerLip-wrapper {
    width: 166px;
    height: 136px;
    position: absolute;
    bottom: 1px;
    left: 50%;
    margin-left: -83px;
    overflow: hidden;
}
.lowerLip {
    width: 166px;
    border: 3px solid #000;
    background-color: #9b000a;
    height: 1000px;
    border-radius: 200px/1000px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 120px;
    height: 120px;
    background-color: #FC4A62;
    left: 50%;
    margin-left: -60px;
    border-radius: 50%;
}`
    writeCode('',code)
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()