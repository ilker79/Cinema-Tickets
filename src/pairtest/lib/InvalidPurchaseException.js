export default class InvalidPurchaseException extends Error {
    exception(accountId, ...ticketTypeRequests) {

        const numberOfTickets = ticketTypeRequests.map(ticket => ticket.getNoOfTickets()).reduce(
            (acc, cur) => acc + cur
        )
        const adultTicket = ticketTypeRequests.find(ticket => { return ticket.getTicketType() === "ADULT"} )

    if(!Number.isInteger(accountId)){
        throw new TypeError('Account id must be an integer')
    }
    if(numberOfTickets > 20){
        throw new TypeError('Total number of tickets cannot exceed 20')
    }
    if(!adultTicket.getNoOfTickets() > 0 ){
        throw new TypeError('An adult must purchase a ticket')
    }
 }
}
