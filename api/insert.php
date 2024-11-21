<?php

    // Cabeçalhos
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");  
    header('Content-type: application/json');
    //header('Content-Type: application/x-www-form-urlencoded');

    $arquivo = 'db.json';
    $db = json_decode(file_get_contents($arquivo), true);
    $data = json_decode($_POST['data'], true);
    if($data != null) {
        $db['reservas'][] = $data;
        file_put_contents($arquivo, json_encode($db));
    }

    echo print_r($db);

?>