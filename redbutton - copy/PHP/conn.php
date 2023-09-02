<?php
    header("Access-Control-Allow-Origin", "*");


    $host = 'sql305.infinityfree.com';
    $dbname = 'if0_34680985_db_redbutton2';
    $user = 'if0_34680985';
    $senha = 'SJJfufYXCjpE5L';

    $con = new mysqli($host, $user, $senha, $dbname);

    if ($con -> connect_error)
    {
        die ('[ERRO] Conexão falhou: ' . $con-> connect_error);
    }
    
?>