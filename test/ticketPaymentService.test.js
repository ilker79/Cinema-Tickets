import TicketPaymentService from "../src/thirdparty/paymentgateway/TicketPaymentService";

const ticketPaymentService = new TicketPaymentService();

describe('SeatReservationService class', () => {
    test('method reserveSeat should throw error when account id is not an integer', () => {
        expect(() => {ticketPaymentService.makePayment('4', 5)}).toThrow(new Error('accountId must be an integer'))
    })

    test('method reserveSeat should throw error when total seat is not an integer', () => {
        expect(() => {ticketPaymentService.makePayment(4, '7')}).toThrow(new Error('totalAmountToPay must be an integer'))
    })
    
})