<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;

    $data = [];
    $data['Booking_ID'] = $_POST['Booking_ID'];
    $data['BookingS_ID'] = $_POST['BookingS_ID'];
    $Hotell = $Hotell_Model -> UdateBookingS($data);
    echo json_encode($Hotell);