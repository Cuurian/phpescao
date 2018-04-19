var fsh = 0;
function popMessage(e) {
    if (!e) e = event;
    var xPos = yPos = 0;
    xPos = (e.pageX) ? e.pageX : e.clientX + document.body.scrollLeft;
    yPos = (e.pageY) ? e.pageY : e.clientY + document.body.scrollTop;
    nDiv = document.createElement('img');
    nDiv.innerHTML = '<img class="fsh" src="fsh.png" width="50px" height="50px"> <p class="fsh" style="font-size:12px">'+ name +'</p>'; 
    nDiv.style.position = 'absolute';
    nDiv.style.left = xPos + 'px';
    nDiv.style.top = yPos + 'px';
    document.getElementsByTagName('body')[0].appendChild(nDiv);
    increaseFshCounter();
}

function increaseFshCounter()
{
    fsh = fsh + 1;
}


document.getElementById("ocean").onclick = popMessage;
var name = prompt("Name:", "fsh");

