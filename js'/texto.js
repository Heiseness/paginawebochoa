               
$("#searchForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.
    
    
    var texto = $('#texto').val();
    
    triste = ["5 nm" , "5" ,  "5 TSCM" , "5 samsung" , "5nm TSCM" , "5 nm Samsung"];
    
    siete = ["7 mm",  "7", "7 TSCM" , "7 samsung" ,"7nm TSCM"  ,"7 nm Samsung"];
    
    ocho = ["8nm" , "8nm Samsung", "8 Samsung", "8"];
    
    diezseis = ["16nm" ,"16nm TSMC" ,"16 TSMC",  "16"];
    
    diuz = ["10nm" , "10nm TSMC" ,  "10 TSMC" , "10"];
    
    alegre = ["14nm", "14nm TSMC", "14 TSMC",  "14"];
    
    
    
    i = 0;
    flagtriste = 0;
    flagalegre = 0;
    flagsiete = 0;
    flagocho = 0;
    flagdiezseis = 0;
    flag10 = 0;
    
    s = 0;
    
    
    //siete
    do{
        c = texto.search(siete[s]);
        if(c>=0){
            flagsiete = 1;
        }
        s = s + 1;
    }while(s < 6);
    
    o = 0;
    
    
    //ocho
    do{
        d = texto.search(ocho[o]);
        if (d>=0){
            flagocho = 1;
        }
        o = o+1;
    }while(o<4);
    
    
    
    //diezseis
    z = 0;
    do{
        e = texto.search(diezseis[z]);
        if(e>=0){
            flagdiezseis = 1;
        }
        z = z+1;
    }while(z<4);
    
    
    //diez
    v = 0;
    do{
        f = texto.search(diuz[v]);
        if(f>=0){
            flag10 = 1;
        }
        v = v+1;
    }while(v<4);
    
    //5
    do{
        n = texto.search(triste[i]);
        if(n>=0){
            flagtriste = 1;
        }
        i=i+1;
    }while(i<6);
    
    //14
    k = 0;
    do{
        g = texto.search(alegre[k]);
        if(g>=0){
            flagalegre = 1;
        }
        k = k + 1;
    }while(k<4);
    
    
    if (flagtriste == 1) {
    $("#resultado").empty();
    $( "#resultado" ).append( "<b>Proceso de fabricacion:5nm</b><br><br>" );
    $( "#resultado" ).append( "<b> No hay razón para escoger este proceso de fabricación, es muy caro, hay poco stock y sobrepasa los límites del costo. </b>");}
    
    else{
    if (flagalegre == 1) {
    $("#resultado").empty();
    $( "#resultado" ).append( "<b>Proceso de fabricacion:14nm</b><br><br>" );
    $( "#resultado" ).append( "<b> El proceso de fabricación ha 14nm es el que en segundo lugar genera mas dinero, por lo que para una empresa que comienza puede llegar a generar unos mayores ingresos. Es un proceso algo antiguo, pero con un proceso ya experimentado que no generara problemas. </b>");} else{
    
    if (flagsiete == 1){
    $("#resultado").empty();
    $( "#resultado" ).append( "<b>Proceso de fabricacion: 7nm</b><br><br>" );
    $( "#resultado" ).append( "<b> 7nm el proceso de fabricación mas sofisticado que entra dentro de las especificaciones del precio, si bien no deja tantas ganancias, es un proceso de fabricación muy nuevo además de ser el de mayor calidad, por lo que es una gran opción si de dar el mejor producto posible se trata, si se busca dar un prestigio y sobrenombre a la marca es la mejor opción. </b>");}else{
    
    if(flagocho == 1){
    $("#resultado").empty();
    $( "#resultado" ).append( "<b>Proceso de fabricacion: 8nm</b><br><br>" );
    $( "#resultado" ).append( "<b> Los 8nm de Samsung ha pesar de tener un stock menor y no generar tanto dinero, puede llegar a dar prestigio a la marca a largo plazo, puesto que es un proceso de fabricación más moderno y con procesos muy limpios además de sofisticados. Si se busca dar la mejor calidad-precio del mercado, pero ganando menos que otros procesos, es la mejor opción. </b>");}else{
    
    if(flagdiezseis == 1){
    $("#resultado").empty();
    $( "#resultado" ).append( "<b>Proceso de fabricacion: 16nm</b><br><br>" );
    $( "#resultado" ).append( "<b> El proceso de fabricación ha 16nm es el proceso que genera más dinero, por lo que para una empresa que comienza puede llegar a generar unos mayores ingresos. Es un proceso algo antiguo, pero con un proceso ya experimentado que no generara problemas. </b>");}else{
    
    if(flag10 == 1){
    $("#resultado").empty();
    $( "#resultado" ).append( "<b>Proceso de fabricacion: 10nm</b><br><br>" );
    $( "#resultado" ).append( "<b> El proceso de fabricación a 10nm, entrega un alto estándar calidad-precio, siendo el 3ro en devolver mayor dinero en la gráfica TIR y teniendo una mayor capacidad que los procesos de 14nm y 16nm  </b>");}else{
        $("#resultado").empty();
        $( "#resultado" ).append( "<b>Proceso de fabricacion: INDEFINIDO, FAVOR DE INGRESAR UN PROCESO VALIDO</b><br><br>" );
    }
    }	}}
    }									
    }
    });