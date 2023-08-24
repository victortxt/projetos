<?php
require_once 'conn.php';

$ocorrencia = $_REQUEST['Ocorrência'];
$cep = $_REQUEST['Cep'];
$logradouro = $_REQUEST['Logradouro'];
$bairro = $_REQUEST['Bairro'];
$localidade = $_REQUEST['Localidade'];
$uf = $_REQUEST['Uf'];
$ddd = $_REQUEST['ddd'];

$ocorrencia = mysqli_real_escape_string($con, $ocorrencia);
$cep = mysqli_real_escape_string($con, $cep);
$logradouro = mysqli_real_escape_string($con, $logradouro);
$bairro = mysqli_real_escape_string($con, $bairro);
$localidade = mysqli_real_escape_string($con, $localidade);
$uf = mysqli_real_escape_string($con, $uf);
$ddd = mysqli_real_escape_string($con, $ddd);

$query = "
    INSERT INTO tb_ocorrencias (ocorrencia, cep, logradouro, bairro, localidade, uf, ddd)
    VALUES ('$ocorrencia', '$cep', '$logradouro', '$bairro', '$localidade', '$uf', '$ddd')
";


$result = mysqli_query($con, $query);

if ($result) {
    echo "Inserção realizada com sucesso!";
} else {
    echo "Erro na inserção: " . mysqli_error($con);
}

mysqli_close($con);

header('location:http://localhost/redbutton/')
?>
