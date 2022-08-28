let displayPart = document.getElementsByClassName("inside");
for (let idx = 0; idx < displayPart.length; idx++) {
    displayPart[idx].onclick = function() {
        alert("开始下载课程内容")
    }
}

let outPage = document.getElementsByClassName("outside");
for (let idx = 0; idx < displayPart.length; idx++) {
        outPage[idx].onclick = function() {
        alert("即将跳转到外部网站")
    }
}
