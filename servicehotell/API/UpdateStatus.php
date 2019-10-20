<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;

    $data = [];
    $data['Room_ID'] = $_POST['Room_ID'];
    $data['status_ID'] = $_POST['status_ID'];
    $Hotell = $Hotell_Model -> UdateStatus($data);
    echo json_encode($Hotell);