<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;
    $Hotell = $Hotell_Model -> getData();
    echo json_encode($Hotell);