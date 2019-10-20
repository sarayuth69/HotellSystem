<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;
    
    echo $_GET["Room_ID"];
    $Hotell = $Hotell_Model -> deleteroom($_GET["Room_ID"]);
    echo json_encode( $_POST['Room_ID']);