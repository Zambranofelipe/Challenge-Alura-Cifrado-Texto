
function encriptarTexto()
{

    let textoIngresado = document.getElementById("textoIngresado").value;
    let textoEncriptado = textoIngresado
    .replace(/e/gi,"enter")
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufar");
            
              
    
                if( textoIngresado == 0 ||
                    textoIngresado.includes('imes') == true || 
                    textoIngresado.includes('enter') == true ||
                    textoIngresado.includes('ai') == true ||
                    textoIngresado.includes('ober') == true ||
                    textoIngresado.includes('ufar') == true)
                  {   
                            document.getElementById("resultadoTexto").hidden = true;
                            document.getElementById("imagenContenedor").hidden=false;
                            document.getElementById("textoIngresado").value="";
                            document.getElementById("resultadoTexto").value= "";
                            document.getElementById("mensajeAgregado").textContent= "Ningun Mensaje Fue Encontrado!";
                            document.getElementById("mensajeAgregado2").textContent = "Ingrese Un Mensaje Valido Para Encriptar!";
                            alert(" El texto ingresado no cumple con los requisitos  o no ingreso ningun texto, Favor ingresar nuevamente.");
                            document.getElementById("botonCopiarTexto").hidden =true;
                            
                
                   }else    {
                            
                            document.getElementById("resultadoTexto").value= textoEncriptado.toLowerCase();
                            document.getElementById("imagenContenedor").hidden=true;
                            document.getElementById("resultadoTexto").hidden = false;
                            document.getElementById("mensajeAgregado").textContent= "";
                            document.getElementById("mensajeAgregado2").textContent= "";
                            document.getElementById("textoIngresado").value = "";
                            document.getElementById("botonCopiarTexto").hidden =false;
                            
                            
                   }            
}

function desencriptarTexto(){

    let textoIngresado = document.getElementById("textoIngresado").value;
    let textoEncriptado = textoIngresado
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufar/gi,"u");
    
    
        
                if(textoIngresado.includes('imes') == true || 
                   textoIngresado.includes('enter') == true ||
                   textoIngresado.includes('ai') == true ||
                   textoIngresado.includes('ober') == true ||
                   textoIngresado.includes('ufar') == true)
                    { 
                    document.getElementById("resultadoTexto").hidden = false;
                    document.getElementById("imagenContenedor").hidden=true;
                    document.getElementById("resultadoTexto").value = textoEncriptado.toLowerCase();
                    document.getElementById("textoIngresado").value=""
                    document.getElementById("mensajeAgregado").textContent = "";  
                    document.getElementById("mensajeAgregado2").textContent = ""; 
                    document.getElementById("botonCopiarTexto").hidden =false;
                    }else
                    {  
                               
                                
                                alert(" El texto ingresado no esta Encriptado no cumple con los requisitos, Favor ingresar nuevamente.");
                                document.getElementById("resultadoTexto").hidden = true;
                                document.getElementById("imagenContenedor").hidden=false;
                                document.getElementById("textoIngresado").value = "";
                                document.getElementById("resultadoTexto").value= "";
                                document.getElementById("mensajeAgregado").textContent = "Ningun Mensaje Fue Encontrado!";
                                document.getElementById("mensajeAgregado2").textContent = "Ingrese Un Mensaje Valido Para Desencriptar!";
                                document.getElementById("botonCopiarTexto").hidden =true;
                                
                                
                            
                    }
                
            

     }
   
function copiarTexto(){
    
        let copiarTexto = document.querySelector("#resultadoTexto");
        copiarTexto.select();
        document.execCommand("copy");

        console.log("texto copiado")
      
}




   

   

    