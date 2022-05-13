function kattintas(){
    
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
    .then(x => x.json())
    .then(y => megjelenit(y));
}
function megjelenit(adatok){
    console.log(adatok)
    var sz="";
    for (rates.elem of adatok){
        if(be1=="USD"){
            sz+='<span>'+rates.huf+'</span>'
        }
        else if(be1=="EUR"){
            sz+='<span>'+rates.eur+'</span>'
        }
        else{
            sz+='<span>'+'Nem megfelelő valutát adtál meg. Forintot és Dollárt kér az oldal.'+'</span>'
        }
    }
    document.getElementById("megjelenites").innerHTML=sz;
}