import 'dotenv/config'

const baseURL = process.env.URL

export default async function getPnrDetails(pnr) {
    const res = await fetch(`${baseURL}${pnr}`);
    const data = await res.json();
    return {
        "Pnr": data["Pnr"],
        "TrainNo": data["TrainNo"],
        "TrainName": data["TrainName"],
        "BookingDate": data["BookingDate"],
        "DateOfJourney": data["Doj"],
        "DestinationDateOfJourney": data["DestinationDoj"],
        "From": data["From"],
        "To": data["To"],
        "BoardingStationName": data["BoardingStationName"],
        "ReservationUptoName": data["ReservationUptoName"],
        "Class": data["Class"],
        "ChartPrepared": data["ChartPrepared"],
        "TicketStatus": data["PassengerStatus"][0]["ConfirmTktStatus"],
        "Berth": data["PassengerStatus"][0]["Berth"],
        "BookingStatus": data["PassengerStatus"][0]["BookingStatus"],
        "CurrentStatus": data["PassengerStatus"][0]["CurrentStatus"],
        "BookingBerthNo": data["PassengerStatus"][0]["BookingBerthNo"],
        "CurrentBerthNo": data["PassengerStatus"][0]["CurrentBerthNo"],
        "DepartureTime": data["DepartureTime"],
        "ArrivalTime": data["ArrivalTime"],
        "ExpectedPlatformNo": data["ExpectedPlatformNo"],
        "BookingFare": data["BookingFare"],
        "TicketFare": data["TicketFare"],
        "Rating": data["Rating"],
        "FoodRating": data["FoodRating"],
        "PunctualityRating": data["PunctualityRating"],
        "CleanlinessRating": data["CleanlinessRating"],
        "Duration": data["Duration"],
        "HasPantry": data["HasPantry"],
    }
}
