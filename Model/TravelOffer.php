<?php 

class TravelOffer
{   /*  Question 1.b
    public  $id;
    public  $title;
    public  $destination;
    public  $departure_date;
    public  $return_date;
    public $price;
    public $disponible;
    public $category;
*/

private  $id;
private  $title;
private  $destination;
private  $departure_date;
private  $return_date;
private $price;
private $disponible;
private $category;
    // question 3
    public function __construct($title=null, $destination=null,$departure_date=null, $return_date = null, $price = null, $disponible = null, $category = null)
    {
        $this->title= $title;
        $this->destination= $destination;
        $this->departure_date= $departure_date;
        $this->return_date= $return_date;
        $this->price= $price;
        $this->disponible= $disponible;
        $this->category= $category;
    }
    public function show() {
        echo '<table border=1 width="100%">
            <tr align="center">
                <td>Title</td>
                <td>Destination</td>
                <td>Departure Date</td>
                <td>Return Date</td>
                <td>Price</td>
                <td>Disponibility</td>
                 <td>category</td>
            </tr>
            <tr>
                <td>'. $this->title .'</td>
                <td>'. $this->destination .'</td>
                <td>'. $this->departure_date .'</td>
                <td>'. $this->return_date .'</td>
                <td>'. $this->price .'</td>
                <td>'. $this->disponible .'</td>
                 <td>'. $this->category .'</td>
            </tr>
        </table>';
    }
     // Getters
     public function getTitle() {
        return $this->title;
    }

    public function getDestination() {
        return $this->destination;
    }

    public function getDepartureDate() {
        return $this->departure_date;
    }

    public function getReturnDate() {
        return $this->return_date;
    }

    public function getPrice() {
        return $this->price;
    }

    public function isDisponible() {
        return $this->disponible;
    }

    public function getCategory() {
        return $this->category;
    }

    // Setters
    public function setTitle($title) {
        $this->title = $title;
    }

    public function setDestination($destination) {
        $this->destination = $destination;
    }

    public function setDepartureDate($departure_date) {
        $this->departure_date = $departure_date;
    }

    public function setReturnDate($return_date) {
        $this->return_date = $return_date;
    }

    public function setPrice($price) {
        $this->price = $price;
    }

    public function setDisponible($disponible) {
        $this->disponible = $disponible;
    }

    public function setCategory($category) {
        $this->category = $category;
    }
}


?>