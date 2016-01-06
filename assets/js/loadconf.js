window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "assets/json/conf.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            document.forms[0].elements["name"].value = data.title;
            document.forms[0].elements["init"].value = data.initialpagetoparse;
            document.forms[0].elements["hbgcolour"].value = data.headerbgcolour;
            document.forms[0].elements["topbg"].value = data.headerbgimg;
            document.forms[0].elements["logo"].value = data.headerimg;
            document.forms[0].elements["nav"].value = data.navigationfile;
        }
    }
    xhr.send(null);
}