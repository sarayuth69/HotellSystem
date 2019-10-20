<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;

    $data = [];
    $data['Room_ID'] = $_POST['Room_ID'];
    $data['status_ID'] = $_POST['status_ID'];
    $data['Troom_ID'] = $_POST['Troom_ID'];
    $data['floor'] = $_POST['floor'];
    $data['Decoration'] = $_POST['Decoration'];
    $data['Price'] = $_POST['Price'];
    $Hotell = $Hotell_Model -> Updateroom($data);
    echo json_encode($Hotell);