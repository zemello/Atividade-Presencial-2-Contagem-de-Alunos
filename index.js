//------------------------------ --------------------------------------------------------Atividade Sistema de Con. de Alunos ------------------------------15/09/2021

//---------------------------------------------------------------------------------------Quantidades de Alunos------------------------------
const quantidadedealunos = 30;
//------------------------------------------------------------ --------------------------Estrutura de Repetição------------------------
for (let index = 0; index <= quantidadedealunos; index++) {
    if (index === 0) {
        console.log('o número é zero');
    } else if (index % 2 === 0) {
        console.log('o número :', + index , 'é par ' );
    } else {
        console.log('o número :' , + index ,'é Ímpar ');
    }
};

//--------------------------------------------------------------------------------------Final------------------------