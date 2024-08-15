function mostrarResultado() {
    var v = parseFloat(document.getElementById('valor').value);
    if (v <= 300) {
  		const disc = ((5/100) * v);
        const total =  v - disc;
            document.getElementById('resultado').innerText = `O valor é de: ${v}`;
            document.getElementById('desconto').innerText = `O valor final é de: ${total}`;
            document.getElementById('desconto2').innerText = `O valor descontado é de: ${disc}`;
		}
		else if (v > 300){
            const  disc = ((10/100) * v);
            const total =  v - disc ;
            document.getElementById('resultado').innerText = `O valor é de: ${v}`;
            document.getElementById('desconto').innerText = `O valor final é de: ${total}`;
            document.getElementById('desconto2').innerText = `O valor descontado é de: ${disc}`;
    }
    else
    {
        document.getElementById('resultado').innerText = 'isso não é um número paizão';
    }
}