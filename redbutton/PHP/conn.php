<?php
    header("Access-Control-Allow-Origin", "*");


    $host = 'localhost';
    $dbname = 'db_redbutton';
    $user = 'root';
    $senha = '';

    $con = new mysqli($host, $user, $senha, $dbname);

    if ($con -> connect_error)
    {
        die ('[ERRO] Conexão falhou: ' . $con-> connect_error);
    }
    
?>