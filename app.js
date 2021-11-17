
function getElementAndSetText (idElement, textToInsert) {
    let element = document.getElementById(idElement);
    element.innerHTML = textToInsert;
}

getElementAndSetText('p1', 'Bonjour');
getElementAndSetText('p2', 'tout');
getElementAndSetText('p3', 'le');
getElementAndSetText('p4', 'monde !');
getElementAndSetText('p5', 'Bonne journée !');
