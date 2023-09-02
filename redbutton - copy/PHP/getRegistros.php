<?php
    require_once 'conn.php';

    $query = "
        SELECT * FROM tb_ocorrencias
    ";

    $result = mysqli_query($con, $query);

    if ($result) {
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC); // Fetch all rows as associative array
        mysqli_free_result($result); // Free the result set
        mysqli_close($con); // Close the database connection

        echo json_encode($rows); // Convert the array to JSON and echo it
    } else {
        echo "Erro na consulta: " . mysqli_error($con);
    }
?>
