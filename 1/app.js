var gracz1Wynik=0;
var gracz1;
var karneSekundy = 0;

  var x;
  var time=0;
var startTime, endTime;

function startT() {
  startTime = new Date();
    PrzyciskStart.disabled = true;
    MainButton.disabled = false;
};

function endT() {
    
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = timeDiff+karneSekundy;
    PrzyciskKoniec.disabled = true;
    document.getElementById('PrzyciskKoniec').setAttribute('style', 'background-color: buttonface');
  console.log(seconds + " seconds");
// alert("KONIEC GRY! wynik: "+seconds+"  sekund");
    document.getElementById("Result").innerHTML="Koniec gry! Twój wynik to: "+seconds+" sekund";
//    if(document.getElementById("Result").innerHTML=="Koniec gry! Twój wynik to: "+seconds+" sekund")
    MainButton.disabled = false;
}


function myFunction() {
   MainButton.disabled = true;
    toCheck.disabled = false;
//    var a = "WWW";
    ans.value="";
    document.getElementById("check").innerHTML="";
//    function end(){
    //        TO DO TESTOWANIA nr1/2 !!!!!
         if(gracz1Wynik ==5 )
            {
                
                window.location.reload();
            };

//        if(gracz2Wynik == 5)
//            {
//                alert("Gracz 2 wygrywa!");
//                window.location.reload();
//            };
//      };  
    x= Math.floor((Math.random() * 130) + 1);
    var a = questionsArray[x*6];
    function wypisz_haslo()
    {
        document.getElementById("question").innerHTML=a;
    }
    wypisz_haslo();
//        alert("You pressed a key inside the input field");
    
   
}




 function checkAnswer()
	{
        toCheck.disabled = true;
	var playerAnswer = document.getElementById("ans").value;
//        alert(playerAnswer);
	if (playerAnswer==questionsArray[x*6+5]) {
        document.getElementById('check').setAttribute('style', 'color: green');
        document.getElementById("check").innerHTML="Dobrze!"; 
         gracz1Wynik++;
                                             }
	else if (playerAnswer!=questionsArray[x*6+5]) 
        {
            document.getElementById('check').setAttribute('style', 'color: red');
        document.getElementById("check").innerHTML="Zle! Poprawna odpowiedź: "+  questionsArray[x*6+5];
        karneSekundy+=3;
        }
        document.getElementById("Result").innerHTML="Zdobyte punkty: "+gracz1Wynik+"/5";
  //  document.getElementById("Result2").innerHTML="Gracz 2 (klawisz m): "+gracz2Wynik+"/5";
//	else if (liczba==0) document.getElementById("wynik").innerHTML="zero";
//	else document.getElementById("wynik").innerHTML="to nie liczba";
       
//        TO DO TESTOWANIA nr2/2 !!!!!
            if(gracz1Wynik ==5 )
            {
                
                toCheck.disabled = true;
            PrzyciskKoniec.disabled = false;
        document.getElementById("MainButton").innerHTML="Zakoncz";
//                '<button id="PrzyciskKoniec" style= "backgroundcolor:green;"/>'
                document.getElementById('PrzyciskKoniec').setAttribute('style', 'background-color: green');
            }
        
//        if(gracz2Wynik ==5 )
//            {
//        document.getElementById("MainButton").innerHTML="Zakoncz";
//            }
        if(PrzyciskKoniec.disabled != false)
        {MainButton.disabled = false;}
        gracz1=0;
   // gracz2=0;
        
}

 function resetForm(){
   document.getElementById("userForm").reset();
 } 



var questionsArray =[
 "1",
    "2",
    "3",
    "4",
    "5",
    "6",
"amount (Na r)",
"W",
"O",
"R",
"D",
"rozmiar",
"dull (przymiotnik na n)",
"W",
"O",
"R",
"D",
"nudny",
"clutch (czasownik)",
"W",
"O",
"R",
"D",
"chwytac",
"buckle ( _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"zapinac",
"Downpour",
"W",
"O",
"R",
"D",
"ulewa",
"sway (czasownik na c)",
"W",
"O",
"R",
"D",
"chwiac sie",
"Gloaming ",
"Glosic",
"Przygnebienie",
"Blask",
"Zmrok",
"zmrok",
"Sag (czasownik na s)",
"W",
"O",
"R",
"D",
"slabnac",
"Abundant (przymiotnik)",
"W",
"O",
"R",
"D",
"obfity",
"Core (rzeczownik na r)",
"W",
"O",
"R",
"D",
"rdzen",
"Disturb (czasownik na p)",
"W",
"O",
"R",
"D",
"przeszkadzac",
"Dimension (rzeczownik na r)",
"W",
"O",
"R",
"D",
"rozmiar",
"Established ( _ s _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"ustalony",
"Dispute (rzeczownik)",
"W",
"O",
"R",
"D",
"spor",
"Avoid (czas. u _ _ _ _ _)",
"W",
"O",
"R",
"D",
"unikac",
"Associate (czasownik na ł)",
"W",
"O",
"R",
"D",
"laczyc",
"Brief  (przymiotnik na k)",
"W",
"O",
"R",
"D",
"krotki",
"Accurate (przymiotnik na d)",
"W",
"O",
"R",
"D",
"dokladny",
"Adjust (czasownik _ _ s _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"dostosowac",
"Among (przyimek na m)",
"W",
"O",
"R",
"D",
"miedzy",
"Aspire (czasownik na s)",
"W",
"O",
"R",
"D",
"starac sie",
"Affect (czasownik na o)",
"W",
"O",
"R",
"D",
"oddzialywac",
"Ally (czasownik na p)",
"W",
"O",
"R",
"D",
"polaczyc",
"Combine (czasownik na p)",
"W",
"O",
"R",
"D",
"polaczyc",
"Common  (przymiotnik na w)",
"W",
"O",
"R",
"D",
"wspolny",
"Item (rzeczownik na s)",
"W",
"O",
"R",
"D",
"szczegol",
"Cute (przymiotnik na m)",
"W",
"O",
"R",
"D",
"madry",
"Figure out (czasownik na p)",
"W",
"O",
"R",
"D",
"pojac",
"Feature (rzeczownik na c)",
"W",
"O",
"R",
"D",
"cecha",
"Hint (rzeczownik na w)",
"W",
"O",
"R",
"D",
"wzmianka",
"Increment (rzeczownik na p)",
"W",
"O",
"R",
"D",
"przyrost",
"Interfere (czasownik na p)",
"W",
"O",
"R",
"D",
"przeszkadzac",
"Concern (rzeczownik na n)",
"W",
"O",
"R",
"D",
"niepokoj",
"Contest (rzeczownik na k)",
"W",
"O",
"R",
"D",
"konkurs",
"Belief (rzeczownik na w)",
"W",
"O",
"R",
"D",
"wiara",
"Belly",
"W",
"O",
"R",
"D",
"brzuch",
"Annoy (czasownik na i)",
"W",
"O",
"R",
"D",
"irytowac",
"Equal (przymiotnik)",
"W",
"O",
"R",
"D",
"rowny",
"Thoughtful (przymiotnik na r)",
"W",
"O",
"R",
"D",
"rozwazny",
"Poverty",
"W",
"O",
"R",
"D",
"bieda",
"Labour (czasownik na p)",
"W",
"O",
"R",
"D",
"pracowac",
"Laboured",
"W",
"O",
"R",
"D",
"trudny",
"Pregnancy",
"W",
"O",
"R",
"D",
"ciaza",
"Tidy (czasownik na s)",
"W",
"O",
"R",
"D",
"sprzatac",
"Appraise (czasownik na s)",
"W",
"O",
"R",
"D",
"szacowac",
"Encore (rzeczownik na d)",
"W",
"O",
"R",
"D",
"dodatek",
"Loudspeaker",
"W",
"O",
"R",
"D",
"glosnik",
"Provide (czasownik na d)",
"W",
"O",
"R",
"D",
"dostarczac",
"Grid (rzeczownik na k)",
"W",
"O",
"R",
"D",
"krata",
"Wysokosc (na h)",
"W",
"O",
"R",
"D",
"height",
"Enable (czasownik na u)",
"W",
"O",
"R",
"D",
"umozliwic",
"Content (z _ _ _ _ _ _ _ c)",
"W",
"O",
"R",
"D",
"zawartosc",
"Wound (rzeczownik)",
"W",
"O",
"R",
"D",
"rana",
"Tricky (przymiotnik na z)",
"W",
"O",
"R",
"D",
"zdradliwy",
"Link (czasownik na ł)",
"W",
"O",
"R",
"D",
"laczyc",
"Coil ( _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"zwijac",
"Denial (rzeczownik na o)",
"W",
"O",
"R",
"D",
"odmowa",
"Inner (przymiotnik)",
"W",
"O",
"R",
"D",
"wewnetrzny",
"Launch (czasownik na u)",
"W",
"O",
"R",
"D",
"uruchomic",
"Withdraw (czas. na w)",
"W",
"O",
"R",
"D",
"wycofac",
"Cover (czas. na o)",
"W",
"O",
"R",
"D",
"okryc",
"Artificial",
"W",
"O",
"R",
"D",
"sztuczny",
"Query (rzecz. na p)",
"W",
"O",
"R",
"D",
"pytanie",
"Ascending (przyim.)",
"W",
"O",
"R",
"D",
"rosnaco",
"Restriction (rzecz. na o)",
"W",
"O",
"R",
"D",
"ograniczenie",
"Trespass (czas. na n)",
"W",
"O",
"R",
"D",
"naruszyc",
"Association (rzecz. na s)",
"W",
"O",
"R",
"D",
"stowarzyszenie",
"Submit (czasz. z _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"zatwierdz",
"Cell (rzecz. na k)",
"W",
"O",
"R",
"D",
"komorka",
//"Aside ( _ _    _ _ _ )",
//"W",
//"O",
//"R",
//"D",
//"na_bok",
"Override (czas. na n)",
"W",
"O",
"R",
"D",
"nadpisac",
"Appearance (rzecz. na w)",
"W",
"O",
"R",
"D",
"wyglad",
"Savage (przym. na d)",
"W",
"O",
"R",
"D",
"dziki",
"Maintain (czas. na u)",
"W",
"O",
"R",
"D",
"utrzymywac",
"Familiar (przym. na o)",
"W",
"O",
"R",
"D",
"obeznany",
"Suffer (czas na c)",
"W",
"O",
"R",
"D",
"cierpiec",
"Ultimate (przym na o)",
"W",
"O",
"R",
"D",
"ostateczny",
"Community (s _ _ _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"spolecznosc",
"Garbage ( _ m _ _ _ i e )",
"W",
"O",
"R",
"D",
"smiecie",
"Treasure (rzecz )",
"W",
"O",
"R",
"D",
"skarb",
"Condition (rzecz. na w)",
"W",
"O",
"R",
"D",
"warunek",
"Frame ( _ _ _ _ )",
"W",
"O",
"R",
"D",
"rama",
"Mount (rzecz na u)",
"W",
"O",
"R",
"D",
"uchwyt",
"Focus (czas _ _ _ _ _ a _ )",
"W",
"O",
"R",
"D",
"skupiac",
"Exclaim (czas na z)",
"W",
"O",
"R",
"D",
"zawolac",
"Establish ( _ _ _ _ _ a _ )",
"W",
"O",
"R",
"D",
"ustalac",
"Random",
"W",
"O",
"R",
"D",
"przypadkowy",
"Odd (d _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"dziwny",
"Marvel (rzecz)",
"W",
"O",
"R",
"D",
"cud",
"Mode (na t)",
"W",
"O",
"R",
"D",
"tryb",
"Plot (w _ _ _ _ )",
"W",
"O",
"R",
"D",
"watek",
//"Obey ( _ _ _   _ _ _ _ _ _ _ _ _ _ )",
//"W",
//"O",
//"R",
//"D",
//"byc_poslusznym",
"Knob ( _ _ _ _ _ _ _ o )",
"W",
"O",
"R",
"D",
"pokretlo",
"Rough (na s)",
"W",
"O",
"R",
"D",
"szorstki",
//"Afford ( _ _ _ _ _ _ i _   _ _ _ _ _ )",
//"W",
//"O",
//"R",
//"D",
//"pozwolic_sobie",
"Affordable",
"W",
"O",
"R",
"D",
"niedrogie",
"Thick (na g)",
"W",
"O",
"R",
"D",
"gruby",
"Drop ( _ _ _ _ _ _ _ a c )",
"W",
"O",
"R",
"D",
"upuszczac",
"Dash (na p)",
"W",
"O",
"R",
"D",
"pedzic",
"Dull ( _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"nudny",
"Enquiries ( z _ _ _ _ _ _ _  e )",
"W",
"O",
"R",
"D",
"zapytanie",
"Above(przysl)",
"W",
"O",
"R",
"D",
"powyzej",
"Template",
"W",
"O",
"R",
"D",
"szablon",
"According",
"W",
"O",
"R",
"D",
"wedlug",
"Amount (na s)",
"W",
"O",
"R",
"D",
"suma",
"Assume ( _ _ _ _ _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"przypuszczac",
//"Dispose ( _ _ _ _ _ _   _ _ _ )",
//"W",
//"O",
//"R",
//"D",
//"pozbyc_sie",
"Stack (rzecz na s)",
"W",
"O",
"R",
"D",
"stos",
"Bounty (na h)",
"W",
"O",
"R",
"D",
"hojnosc",
"Bunch ( _ _ _ p _ )",
"W",
"O",
"R",
"D",
"grupa",
"In order to",
"W",
"O",
"R",
"D",
"w celu",
"Further ( d _ _ _ _ )",
"W",
"O",
"R",
"D",
"dalej",
"Pattern ( w _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"wzorzec",
//"Preset ( _ _ _ _ _ _ _ _ _ e   w _ _ _ _ _ _ )",
//"W",
//"O",
//"R",
//"D",
//"ustawienie_wstepne",
"Convenient",
"W",
"O",
"R",
"D",
"wygodny",
"Tier",
"W",
"O",
"R",
"D",
"poziom",
"Sake of",
"W",
"O",
"R",
"D",
"ze wzgledu na",
"Examine",
"W",
"O",
"R",
"D",
"zbadac",
"Bother ( n _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"niepokoic",
"Consist",
"W",
"O",
"R",
"D",
"skladac sie",
"Store ( _ _ _ _ _ _ _ _ y _ _ _ )",
"W",
"O",
"R",
"D",
"przechowywac",
"Assume ( _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"przyjac",
"Bind ( _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"wiazac",
"Fixed ( _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"ustalony",
"Back ( czas.  _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"wspierac",
"Subsequent ( k _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"kolejny",
"Valid ( _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"wazny",
"Frankly ( _ _ _ _ _ r z _ )",
"W",
"O",
"R",
"D",
"szczerze",
"Customizing ( d _ _ _ _ _ _ _ _ _ _ _ _ e )",
"W",
"O",
"R",
"D",
"dostosowywanie",
"External",
"W",
"O",
"R",
"D",
"zewnetrzny",
"Origins ( _ _ _ _ _ _ _ i )",
"W",
"O",
"R",
"D",
"poczatki",
"Ubiquitous",
"W",
"O",
"R",
"D",
"wszechobecny",
"Roughly ( o _ _ _ _ )",
"W",
"O",
"R",
"D",
"okolo",
"Grab ( _ _ _ _ _ a _ )",
"W",
"O",
"R",
"D",
"chwytac",
"Capabilities ( m _ _ _ _ _ _ _ _ _ )",
"W",
"O",
"R",
"D",
"mozliwosci",
//"Whirl ( _ _ _ _ _ _   _ _ _ )",
//"W",
//"O",
//"R",
//"D",
//"krecic_sie",
];

