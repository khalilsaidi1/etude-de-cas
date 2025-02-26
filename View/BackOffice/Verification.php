<?php 

include '../../Model/TravelOffer.php';
include '../../Controller/TravelOfferController.php';


$title = $_POST['title'];
$destination = $_POST['destination'];
$departure_date = $_POST['departure_date'];
$return_date = $_POST['return_date'];
$price = $_POST['price'];
$disponible = $_POST['disponible'];
$category = $_POST['category'];

$offer1 = new TravelOffer($title, $destination, $departure_date, $return_date, $price, $disponible, $category);


var_dump($offer1);
echo '<br>';
echo '<hr>';
echo '<br>';

$offerC = new TravelOfferController();
$offerC->showTravelOffer($offer1);

?>