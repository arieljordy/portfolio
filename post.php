<?php
function supprime_char($str){
    $res = str_replace(array("--","- "," -","  ","²","&",'"',"#","'","{","(","|","_","\\","^","@","]","[",")","°","}","+","=",",","?",";",".",":","/","!","§","$","¤","£","*","µ","%","<",">","0","1","2","3","4","5","6","7","8","9","¿","¡","ʺ","˅","`","^","¨","¥","©","˭","¢͚͟͡͠","™","ʿ","ˀ","ˁ","ˉ","®",0,1,2,3,4,5,6,7,8,9,true,false,"true","false"), '', $str);
    return $res;
};

if(isset($_POST["nom"]) && isset($_POST["email"]) && isset($_POST["objet"]) && isset($_POST["commentaire"])){
    $nom = htmlspecialchars($_POST["nom"]);
    $nom = supprime_char($nom);
    $objet = htmlspecialchars($_POST["objet"]);
    $email = filter_var(htmlspecialchars($_POST["email"]),FILTER_VALIDATE_EMAIL);
    $commentaire = htmlspecialchars($_POST["commentaire"]);
    $commentaire.="    ******** BY ".$_POST["email"]." ************";

    $header="MIME-Version: ".phpversion()."\r\n";
    $header.='From:'.$nom.' '.$email."\n";
    $header.='Content-Type:text/html; charset="uft-8"'."\n";
    $header.='Content-Transfer-Encoding: 8bit';

    mail("jordyellangmane50@gmail.com",$objet,$commentaire,$header);
    mail("arieljordy@outlook.fr",$objet,$commentaire,$header);
    
    header("location:https://arieljordy.github.io/portfolio/");
}
?>