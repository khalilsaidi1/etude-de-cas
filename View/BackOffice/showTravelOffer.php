//correction de la question  jusqu'a la question 2
<?php 
include '../../Model/TravelOffer.php';

$offre1 = new TravelOffer();
$offre1->title = 'Discover Paris';
$offre1->destination = 'ParisFrance';
$offre1->departure_date = '2024-10-15';
$offre1->return_date = '2024-10-22';
$offre1->price = 1200.00;  
$offre1->disponible = true; 
$offre1->category = 'Cultural'; 

var_dump($offre1);
echo '<br>';
echo '<hr>';
echo '<br>';
$offre1->show();
?> 

//correction de la question  jusqu'a la question 4
<?php 
include '../../Model/TravelOffer.php';
$title = 'Discover Paris';
$destination = 'ParisFrance';
$departure_date = '2024-10-15';
$return_date = '2024-10-22';
$price = 1200.00;
$disponible = true;
$category = 'Cultural';

$offre1 = new TravelOffer($title, $destination, $departure_date, $return_date, $price, $disponible, $category);

var_dump($offre1);
echo '<br>';
echo '<hr>';
echo '<br>';
$offre1->show();
