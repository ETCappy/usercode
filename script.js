dragElement(document.getElementById('farm 1'));
dragElement(document.getElementById('farm 2'));
dragElement(document.getElementById('farm 3'));
dragElement(document.getElementById('farm 4'));
dragElement(document.getElementById('farm 5'));
dragElement(document.getElementById('farm 6'));
dragElement(document.getElementById('farm 7'));
dragElement(document.getElementById('farm 8'));

function dragElement(terrariumElement) {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
terrariumElement.onpointerdown = pointerDrag;

function pointerDrag(e) {
    e.preventDefault();
    console.log(e);

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

    function elementDrag(e) {

        pos1 = pos3-e.clientX;
        pos2 = pos4- e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

}







