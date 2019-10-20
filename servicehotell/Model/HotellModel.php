<?php
require_once("BaseModel.php");
class HotellModel extends BaseModel{
    
     
    function __construct(){
        if(!static::$db){
            static::$db = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);
            mysqli_set_charset(static::$db,"utf8");
        }
    }
    function getData(){
        $sql  = 'SELECT
        *
    FROM
        room JOIN status
        ON room.status_ID = status.status_ID 
        JOIN typeroom 
        ON  room.Troom_ID = typeroom.Troom_ID
    WHERE
        1';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return $data;
        }

    }


    function getBookin(){
        $sql  = 'SELECT
        *
    FROM
        booking JOIN typeroom ON booking.Troom_ID = typeroom.Troom_ID
        JOIN room ON booking.Room_ID = room.Room_ID
       JOIN bookings
       ON booking.BookingS_ID = bookings.BookingS_ID
    WHERE
        1';
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if ($result = mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            $data = [];
            while ($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
                $data[] = $row;
            }
            $result->close();
            return  $data;
        }
    }


    function Insertroom($data = []){
        $sql  = "INSERT INTO `room` (`Room_ID`, `status_ID`, `Troom_ID`, `floor`, `Decoration`,`Price`) 
        VALUES ( 
            '".$data['Room_ID']."', 
            '".$data['status_ID']."', 
            '".$data['Troom_ID']."', 
            '".$data['floor']."', 
            '".$data['Decoration']."',
            '".$data['Price']."'
            )
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function deleteroom($Room_ID){
        $sql  = "DELETE FROM `room` WHERE `room`.`Room_ID` = '$Room_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function deleteBooking($Booking_ID){
        $sql  = "DELETE FROM `booking` WHERE `booking`.`Booking_ID` = '$Booking_ID'
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function Updateroom($data){
        $sql  = "UPDATE `room` SET `Room_ID` = '".$data['Room_ID']."', `status_ID` = '".$data['status_ID']."'
        , `Troom_ID` = '".$data['Troom_ID']."', `floor` = '".$data['floor']."'
        , `Decoration` = '".$data['Decoration']."', `Price` = '".$data['Price']."'
        WHERE `room`.`Room_ID` = '".$data['Room_ID']."';
        ";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function Booking($data){
        $sql  = "INSERT INTO `booking` (`Booking_ID`, `BookingName`, `Tel`, `BookingS_ID`, `DateStart`,`DateLast`,`Number_of_people`,`Room_ID`,`Troom_ID`) VALUES ( '".$data['Booking_ID']."', '".$data['BookingName']."', '".$data['Tel']."', '2', '".$data['DateStart']."','".$data['DateLast']."','".$data['Number_of_people']."','".$data['Room_ID']."','".$data['Troom_ID']."')";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function UdateStatus($data){
        $sql  = "UPDATE `room` SET `status_ID` = '0' WHERE `room`.`Room_ID` ='".$data['Room_ID']."';";

        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function UdateBookingS($data){
        $sql  = "UPDATE `booking` SET `BookingS_ID` = '1' WHERE `booking`.`Booking_ID` ='".$data['Booking_ID']."';";

        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return 1;
        }else {
            return 0;
        }
    }

    function Udatebooking($data){
        $sql  = "UPDATE `booking` SET `BookingS_ID` = '0' WHERE `booking`.`Booking_ID` ='".$data['Booking_ID']."';";
        // echo "<pre>";
        // print_r($sql);
        // echo "</pre>";
        if (mysqli_query(static::$db,$sql, MYSQLI_USE_RESULT)) {
            return $sql;
        }else {
            return $sql;
        }
    }



}