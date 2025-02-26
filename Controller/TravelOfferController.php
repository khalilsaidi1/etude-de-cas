<?php 
class TravelOfferController 
{
    public function showTravelOffer($offer) {
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
                <td>'. $offer->getTitle() .'</td>
                <td>'. $offer->getDestination() .'</td>
                <td>'. $offer->getDepartureDate() .'</td>
                <td>'. $offer->getReturnDate() .'</td>
                <td>'. $offer->getPrice() .'</td>
                <td>'. $offer->isDisponible() .'</td>
                 <td>'. $offer->getCategory() .'</td>
            </tr>
        </table>';
    }
}
