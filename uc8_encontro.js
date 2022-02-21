var listaDePecas = ['Filtro de ar', 'Molas', 'Motor'];
let peso = 50;
if (peso < 100){
    console.log('A peça precisa ter o peso mínimo de 100 gramas');
} else {

    console.log('A peça possui o peso adequado');
}
//suporta até 10
if(listaDePecas.length < 10) {
  console.log('É possível cadastrar mais peças');
} else{
   console.log('Não é possível cadastrar mais peças'); 

}
 let nomePeca = 'Pastilha de freio';
 if (nomePeca.length > 3) {
     console.log('O nome da peça está adequado para o cadastro');
 } else if (nomePeca.length == 0){
     console.log('O nome da peça não pode estar vazio');
 }else {
     console.log('O nome da peça precisa ter mais de 3 caracterues, digite um nome adequado');
 }