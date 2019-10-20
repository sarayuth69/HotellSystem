<?PHP
    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json', true);
    require_once('../Model/HotellModel.php');
    $Hotell_Model = new HotellModel;
    
    echo $_GET["Booking_ID"];
    $Hotell = $Hotell_Model -> deleteBooking($_GET["Booking_ID"]);
    echo json_encode( $_POST['Booking_ID']);