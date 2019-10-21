-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 21, 2019 at 01:02 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotell`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `Booking_ID` int(10) NOT NULL,
  `BookingName` varchar(100) NOT NULL,
  `Tel` varchar(20) NOT NULL,
  `BookingS_ID` tinyint(1) NOT NULL,
  `DateStart` date NOT NULL,
  `DateLast` date NOT NULL,
  `Number_of_people` int(10) NOT NULL,
  `Room_ID` int(10) NOT NULL,
  `Troom_ID` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`Booking_ID`, `BookingName`, `Tel`, `BookingS_ID`, `DateStart`, `DateLast`, `Number_of_people`, `Room_ID`, `Troom_ID`) VALUES
(16, 'ศรายุทธ', '0872605597', 1, '2019-10-02', '2019-10-04', 2, 200, 0),
(17, 'ศรายุทธ', '0872605597', 2, '2019-10-17', '2019-10-17', 2, 200, 0),
(18, 'ศรายุทธ', '0872605597', 1, '2019-10-23', '2019-10-24', 1, 300, 0),
(19, 'ศรายุทธ', '0872605597', 2, '2019-10-02', '2019-10-03', 1, 400, 0),
(20, 'sadasd', 'asdasd', 1, '0000-00-00', '0000-00-00', 10, 400, 1);

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `BookingS_ID` int(1) NOT NULL,
  `BookingSName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`BookingS_ID`, `BookingSName`) VALUES
(0, 'ไม่อนุมัติ'),
(1, 'อนุมัติ'),
(2, 'รอผลการจอง');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `Room_ID` int(5) NOT NULL,
  `status_ID` int(1) NOT NULL,
  `Troom_ID` tinyint(1) NOT NULL,
  `floor` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Decoration` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`Room_ID`, `status_ID`, `Troom_ID`, `floor`, `Decoration`, `Price`) VALUES
(200, 0, 0, '2', 'TV', 2500),
(300, 0, 1, '3', 'ตู้เย็น', 1500),
(400, 0, 1, '4', '-', 1200);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_ID` int(5) NOT NULL,
  `statusName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status_ID`, `statusName`) VALUES
(1, 'ว่าง'),
(0, 'ไม่ว่าง');

-- --------------------------------------------------------

--
-- Table structure for table `typeroom`
--

CREATE TABLE `typeroom` (
  `Troom_ID` tinyint(1) NOT NULL,
  `TroomName` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `typeroom`
--

INSERT INTO `typeroom` (`Troom_ID`, `TroomName`) VALUES
(0, 'ห้องแอร์'),
(1, 'ห้องพัดลม');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`Booking_ID`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`BookingS_ID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`Room_ID`);

--
-- Indexes for table `typeroom`
--
ALTER TABLE `typeroom`
  ADD PRIMARY KEY (`Troom_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `Booking_ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
