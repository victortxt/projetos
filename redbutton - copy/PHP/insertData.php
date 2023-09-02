<?php
require_once 'conn.php';

$ocorrencia = mysqli_real_escape_string($con, $_REQUEST['Ocorrência']);
$cep = mysqli_real_escape_string($con, $_REQUEST['Cep']);
$logradouro = mysqli_real_escape_string($con, $_REQUEST['Logradouro']);
$bairro = mysqli_real_escape_string($con, $_REQUEST['Bairro']);
$localidade = mysqli_real_escape_string($con, $_REQUEST['Localidade']);
$uf = mysqli_real_escape_string($con, $_REQUEST['Uf']);
$ddd = mysqli_real_escape_string($con, $_REQUEST['ddd']);
$nome = mysqli_real_escape_string($con, $_REQUEST['nome']);
$descricao = mysqli_real_escape_string($con, $_REQUEST['descricao']);

$query = "
    INSERT INTO tb_ocorrencias (ocorrencia, cep, logradouro, bairro, localidade, uf, ddd, nome, descricao)
    VALUES ('$ocorrencia', '$cep', '$logradouro', '$bairro', '$localidade', '$uf', '$ddd', '$nome', '$descricao')
";

$result = mysqli_query($con, $query);

if ($result) {
    header('Location: http://localhost/redbutton/');
    exit; // Encerra a execução após o redirecionamento
} else {
    echo "Erro na inserção: " . mysqli_error($con);
}

mysqli_close($con);
?>
