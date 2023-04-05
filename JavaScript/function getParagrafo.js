function getParagrafo() {
    var paragrafos = document.getElementsByTagName('p');

    for (var i = 0; i < paragrafos.length; i++) {
        alert(paragrafos [i].innerHTML);
    }
}