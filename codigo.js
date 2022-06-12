function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

let chooser = randomNoRepeats(['Primeiro B', 'Segundo B', 'Terceiro B', 'Primeiro D', 'Segundo D', 'Terceiro D', 'Primeiro C', 'Segundo C', 'Terceiro C', 'Primeiro A', 'Segundo A', 'Terceiro A']);

let table = document.createElement('table')
table.border = 1
table.style.background = 'greenyellow'
table.style.fontFamily = 'calibri'
table.style.fontStyle = 'normal'
table.style.textAlign = 'center'
table.style.border = '2px solid #green'
table.style.position = 'relative'
table.style.bottom = '1900px'
table.style.margin = '0 auto'
table.style.width = '15px'
table.style.height = '5px'
table.style.right = '180px'

function Atualizar() {
table.innerHTML = `
<table border="1">
<tbody>

<tr>
      <td id="voz1">${chooser()}</td>
      <td id="voz2">${chooser()}</td>
      <td id="voz3">${chooser()}</td>
      <td id="voz4">${chooser()}</td>
      </tr>
      <tr>
      <td id="voz5">${chooser()}</td>
      <td id="voz6">${chooser()}</td>
      <td id="voz7">${chooser()}</td>
      <td id="voz8">${chooser()}</td>
      </tr>
      <tr>
      <td id="voz9">${chooser()}</td>
      <td id="voz10">${chooser()}</td>
      <td id="voz11">${chooser()}</td>
      <td id="voz12">${chooser()}</td>
  </tr>
</tbody>

</table>
`;
document.querySelector('body').append(table)
}

/* function DM() {
  document.getElementById("voz1").innerHTML = "alguma coisa";
} */
/* document.getElementById("recebe").innerHTML = chooser();
console.log(chooser()) */ 