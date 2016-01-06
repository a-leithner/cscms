function runParse(fileToParse, ParsedElement) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileToParse, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            document.getElementById(ParsedElement).innerHTML = xhr.responseText;
            if (fileToParse == "assets/pages/index.page") {
                runParse("assets/pages/news.page", "news");
            }
        }
    }
    xhr.send(null);
}