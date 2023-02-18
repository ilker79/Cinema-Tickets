export default class SeatService {

    #calculateAmountOfSeat(allTicketRequests){
        
        let totalSeat = 0;
        allTicketRequests.map(item => {
            switch(item.getTicketType()) {
                case "ADULT":
                    totalSeat = totalSeat + item.getNoOfTickets()
                    break;
                case "CHILD":
                    totalSeat = totalSeat + item.getNoOfTickets()
                    break;
            }
        })
        return totalSeat
    }

    getcalculateAmountOfSeat(allTicketsRequest) {
        return this.#calculateAmountOfSeat(allTicketsRequest)
      }
}