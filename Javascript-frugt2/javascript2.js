 var frugtAntalArray = [0, 0, 0, 0, 0, 0]; //Dette array består illustrer antal frugter
 var frugtPrisArray = [0, 0, 0, 0, 0, 0]; // Priserne for hver frugt sat til 0
 var samletantal = 0; // Det samlet antal bestilte frugter sat til 0.
 var samletpris = 0; // Den samlede antal pris for frugterne

 function opdaterKurv(frugt, iKurv) { // Her oprettes en funktion der opretter frugter i kurven
     if (iKurv == 1) { //Hvis der ligges 1 stk frugt til kurven køres denne sekvens
         frugtAntalArray[frugt]++; // Dette fortæller at frugtAntalArray skal stige med 
     }

     antalIalt = 0; //Her defineres det samlede antal frugter ved start.
     for (i = 0; i < frugtAntalArray.length; i++) { //I denne lÃ¸kke regnes prisen for alle frugter bestilt ud.

         antalIalt = antalIalt + frugtAntalArray[i]; //her ligges alle slags frugter sammen.
     } //løkken afsluttes her
     if (frugtAntalArray[frugt] >= 1) {
         frugtPrisArray[frugt] = frugtAntalArray[frugt] * 4; // den samlede pris for denne type frugt
     }
     samletpris = frugtPrisArray[0] + frugtPrisArray[1] + frugtPrisArray[2] + frugtPrisArray[3] + frugtPrisArray[4] + frugtPrisArray[5]  // her ligges alle frugtPrisArrays sammen for at udregne den samlet pris


     //ONCLICK events der 
     
     

     document.getElementById("antal0").innerHTML = "Antal: " + frugtAntalArray[0] + " stk.";
     document.getElementById("pris0").innerHTML = "Pris: " + frugtPrisArray[0] + "kr.";
     document.getElementById("antal1").innerHTML = "Antal: " + frugtAntalArray[1] + " stk.";
     document.getElementById("pris1").innerHTML = "Pris: " + frugtPrisArray[1] + "kr.";
     document.getElementById("antal2").innerHTML = "Antal: " + frugtAntalArray[2] + " stk.";
     document.getElementById("pris2").innerHTML = "Pris: " + frugtPrisArray[2] + "kr.";
     document.getElementById("antal3").innerHTML = "Antal: " + frugtAntalArray[3] + " stk.";
     document.getElementById("pris3").innerHTML = "Pris: " + frugtPrisArray[3] + "kr.";
     document.getElementById("antal4").innerHTML = "Antal: " + frugtAntalArray[4] + " stk.";
     document.getElementById("pris4").innerHTML = "Pris: " + frugtPrisArray[4] + "kr.";
     document.getElementById("antal5").innerHTML = "Antal: " + frugtAntalArray[5] + "stk.";
     document.getElementById("pris5").innerHTML = "Pris: " + frugtPrisArray[5] + "kr.";
     document.getElementById("samletantal").innerHTML = "Samlet antal: " + antalIalt + " stk.";
     document.getElementById("samletpris").innerHTML = "Samlet pris: " + samletpris + "kr."; 
     
 }