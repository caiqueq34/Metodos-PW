function validarSigla() 
    {
        var sigla = document.getElementById("txtsigla").value;
        var descricao = document.getElementById("txtdesc");
        var periodo = document.getElementById("txtper");
        

/*        if (sigla.toUpperCase()=="1ADS") {
            descricao.value =  "1 modulo DS";
            periodo.value = " Tarde";
        }

        else if (sigla.toUpperCase()== "2ADS"){
            descricao.value =  "2 modulo DS";
            periodo.value =  " Tarde"
        }
        else if (sigla.toUpperCase()== "3ADS") {
            descricao.value =  "3 modulo DS";
            periodo.value = " Tarde"
        }
        
        else if (sigla.toUpperCase()== "1BDS") {
            descricao.value =  "1 modulo DS";
            periodo.value = " Noite"
        }

        else if (sigla.toUpperCase()== "2BDS"){
            descricao.value =  "2 modulo DS";
            periodo.value = " Noite"
        }
        else if (sigla.toUpperCase()== "3BDS") {
            descricao.value =  "3 modulo DS";
            periodo.value = " Noite"
        }

        else{
            descricao.value = "é invalido";
            periodo.value = "Invalido";
        }
    */

        switch(sigla.toUpperCase())
        {
            case "1ADS":
            {
                descricao.value =  "1 modulo DS";
                periodo.value = " Tarde";
                break;
            }

            case "2ADS":
            {
                descricao.value =  "2 modulo DS";
                periodo.value =  " Tarde";
                break;
            }
        
            case "3ADS":
            {
                descricao.value =  "3 modulo DS";
                periodo.value = " Tarde";
                break;
            }
        
            case "1BDS":
            {
                descricao.value =  "1 modulo DS";
                periodo.value = " Noite";
                break;
            }

            case "2BDS":
            {
                descricao.value =  "2 modulo DS";
                periodo.value = " Noite";
                break;
            }

            case "3BDS":
            {
                descricao.value =  "3 modulo DS";
                periodo.value = " Noite";
                break;
            }

            default:
            {
                descricao.value = "é invalido";
                periodo.value = "Invalido";
            }
        }
    }   

function limparFormulario() {
    document.getElementById("txtsigla").value = "";
    document.getElementById("txtdesc").value = "";
    document.getElementById("txtper").value = "";

}  
   function calcular
   var n1 =document