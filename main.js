let button = document.querySelector('#invia');
button.addEventListener('click',function(){
    let message = document.querySelector('#testo').value.toLowerCase();
    let secretKey =parseInt( document.querySelector('#chiave').value,10)
    if((secretKey>10)||(secretKey<1)){
        alert('Enter a number from 1 to 10, neither less nor more.')
             document.querySelector('#testo').value='';
     document.querySelector('#chiave').value=''
        event.preventDefault()
        return;
    }
    const control = /^[^\[\]{}\(\)<>|\-_#]*$/;

   if(!control.test(message)){
    alert('You have entered potentially harmful characters. SHAME ON YOU, MOM WILL PUT YOU IN PUNISHMENT.')
     document.querySelector('#testo').value='';
     document.querySelector('#chiave').value=''
    event.preventDefault()
   
    return;
   } 

     function cifratura(text) {
         const alphabet='abcdefghilmnopqrstuvzwyjkx';
         let iddenWord ='';
         for(let i=0; i< text.length;i++){
            let char = text[i]
            if(alphabet.includes(char)){
                iddenWord+=alphabet[(alphabet.indexOf(char)+secretKey)%26 ];

            }else {
                iddenWord+=char
            }
         }

         return iddenWord
     }


    let testoCifrato = cifratura(message)
    let messaggioSegreto = document.querySelector('#segreto').value=testoCifrato;

    
     document.querySelector('#chiave').value='';
     document.querySelector('#testo').value=''
     document.querySelector('#invia').innerHTML='TESTO CIFRATO'

     button.disabled=true
})