function tdClicked(){
	console.log('customer clicked');
	document.getElementById("result").innerHTML = '<div style="margin-right:1%;">' + 
		'<button title="sluit tabel" onclick="closeTable();" ' + 
		'style="background-color:red; color: white; border-radius:8px; margin-bottom:0.1em; float: right; font-size:1em;">X</button>'+
		'<div style="clear: both;"></div>' + 
		'<table style="float: right; margin-bottom:1%; width:30%;"class="shadow">' + 
		'<thead><tr><th>Bestelling</th><th>Gewicht (kg)</th><th>Prijs (€)</th><th>Betaald</th></tr></thead>' + 
		'<tbody>' + 
		'<tr><td>SL_2024_02</td><td class="centered_td">10</td><td class="centered_td">140</td><td class="centered_td"><input type="checkbox" checked></td></tr>' + 
		'<tr><td>SL_2024_03</td><td class="centered_td">5</td><td class="centered_td">75</td><td class="centered_td"><input type="checkbox" checked></td></tr>' + 
		'<tr><td>SL_2024_07</td><td class="centered_td">10</td><td class="centered_td">140</td><td class="centered_td"><input type="checkbox" checked></td></tr>' + 
		'<tr><td>SL_2024_09</td><td class="centered_td">10</td><td class="centered_td">140</td><td class="centered_td"><input type="checkbox" checked></td></tr>' + 
		'<tr><td>SL_2024_10</td><td class="centered_td">10</td><td class="centered_td">140</td><td class="centered_td"><input type="checkbox" checked></td></tr>' + 
		'<tr><td>SL_2024_16</td><td class="centered_td">10</td><td class="centered_td">140</td><td class="centered_td"><input type="checkbox"></td></tr>' + 
		'<tr><td>SL_2024_17</td><td class="centered_td">5</td><td class="centered_td">75</td><td class="centered_td"><input type="checkbox" checked></td></tr>' + 
		'</tbody></table></div>';
}
function closeTable(){
	console.log('close table');
	document.getElementById("result").innerHTML = '';
}