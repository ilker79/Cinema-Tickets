import TicketService from "./src/pairtest/TicketService.js"
import TicketTypeRequest from "./src/pairtest/lib/TicketTypeRequest.js"
import SeatService from "./src/pairtest/SeatService.js"
import TicketPaymentService from "./src/thirdparty/paymentgateway/TicketPaymentService.js"
import SeatReservationService from "./src/thirdparty/seatbooking/SeatReservationService.js"

const adultTicket = new TicketTypeRequest("ADULT", 10)
const childTicket = new TicketTypeRequest("CHILD",  4)
const infantTicket = new TicketTypeRequest("INFANT", 1)

const allTicketRequests = [adultTicket, childTicket, infantTicket]
const accountId = 3;
const ticketService = new TicketService()
const seatService = new SeatService()
const ticketPaymentService = new TicketPaymentService()
const seatReservationService = new SeatReservationService()

const totalAmountToPay = ticketService.getCalculateTotalPrice(allTicketRequests)
const totalSeats = seatService.getcalculateAmountOfSeat([...allTicketRequests])

ticketService.purchaseTickets(accountId, ...allTicketRequests)
ticketPaymentService.makePayment(accountId, totalAmountToPay)
seatReservationService.reserveSeat(accountId, totalSeats)






