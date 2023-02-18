import TicketTypeRequest from '../src/pairtest/lib/TicketTypeRequest';

describe('TicketTypeRequest class', () => {

    const ticketTypeRequests = new TicketTypeRequest('ADULT', 3)

    test('method getNoOftickets returns the amount of tickets passed', () => {
        const noOfTickets = ticketTypeRequests.getNoOfTickets();
        expect(noOfTickets).toBe(3)
        expect(noOfTickets).not.toBe(4)
    })
        
    test('method getTicketType returns the type of the ticket passed', () => {
        const ticketType = ticketTypeRequests.getTicketType();
        expect(ticketType).toBe('ADULT')
        expect(ticketType).not.toBe('CHILD')
    })
})
    
