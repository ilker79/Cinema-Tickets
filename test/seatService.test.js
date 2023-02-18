import SeatService from "../src/pairtest/SeatService";
import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest";

describe('SeatService class', () => {

    test('method getcalculateAmountOfSeat returns the amount of seats required', () => {
        const adultTicket = new TicketTypeRequest("ADULT", 4)
        const childTicket = new TicketTypeRequest("CHILD", 4)
        const infantTicket = new TicketTypeRequest("INFANT", 3)
        const allTicketRequests = [adultTicket, childTicket, infantTicket]

        const seatService = new SeatService()
        const noOfSeats = seatService.getcalculateAmountOfSeat(allTicketRequests)
        expect(noOfSeats).toBe(8)
        expect(noOfSeats).not.toBe(11)
        expect(noOfSeats).not.toBe(0)
        expect(noOfSeats).not.toBe(-5)
    })
})
    
