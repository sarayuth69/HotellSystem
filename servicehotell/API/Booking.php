<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;


    $data = [];
    $data['Booking_ID'] = $_POST['Booking_ID'];
    $data['BookingName'] = $_POST['BookingName'];
    $data['Tel'] = $_POST['Tel'];
    $data['BookingS_ID'] = $_POST['BookingS_ID'];
    $data['DateStart'] = $_POST['DateStart'];
    $data['DateLast'] = $_POST['DateLast'];
    $data['Number_of_people'] = $_POST['Number_of_people'];
    $data['Room_ID'] = $_POST['Room_ID'];
    $data['Troom_ID'] = $_POST['Troom_ID'];
    $Hotell = $Hotell_Model -> Booking($data);
    echo json_encode($Hotell);