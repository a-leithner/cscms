window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/json/conf.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            document.getElementsByTagName("title")[0].innerHTML = data.title;
            document.getElementById("header-img").setAttribute("src", data.headerimg);
            document.getElementsByTagName("header")[0].setAttribute("style", "background-color:" + data.headerbgcolour);
            document.getElementsByClassName("top")[0].setAttribute("style", "background-image: url('" + data.headerbgimg + "'); background-size: cover");
            runParse(data.navigationfile, "nav");
            runParse(data.initialpagetoparse, "body");
            runParse("assets/pages/news.page", "news");
        }
    }
    xhr.send(null);
}