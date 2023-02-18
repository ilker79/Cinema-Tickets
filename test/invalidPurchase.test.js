import TicketService from "../src/pairtest/TicketService"
import TicketTypeRequest from "../src/pairtest/lib/TicketTypeRequest";

const ticketService = new TicketService()

const adultTicket = new TicketTypeRequest("ADULT", 0)
const childTicket = new TicketTypeRequest("CHILD", 14)
const infantTicket = new TicketTypeRequest("INFANT", 23)
const ticketRequests = [adultTicket, childTicket, infantTicket]
// const purchaseTickets = ticketService.purchaseTickets(3, ticketRequests)

describe('TicketService class', () => {
    test('method purchaseTickets should throw error when amount of adult ticket is 0', () => {
        expect(() => {ticketService.purchaseTickets(3, adultTicket)}).toThrow(new Error('An adult must purchase a ticket'))
    })

    test('method purchaseTickets should throw error when total amount of ticket is more than 20', () => {
        expect(() => {ticketService.purchaseTickets(3, ...ticketRequests)}).toThrow(new Error('Total number of tickets cannot exceed 20'))
    })

    test('method purchaseTickets should throw error when account id is not an integer', () => {
        expect(() => {ticketService.purchaseTickets("3", ...ticketRequests)}).toThrow(new Error('Account id must be an integer'))
    })
    
})

