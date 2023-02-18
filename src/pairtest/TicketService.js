import InvalidPurchaseException from './lib/InvalidPurchaseException.js';
export default class TicketService {
  /**
   * Should only have private methods other than the one below.
   */

  #calculateTotalPrice(allTicketRequests){
    const ticketPrices = {infant: 0, child: 10, adult: 20}
    
    let totalCost = 0;
    allTicketRequests.map(item => {
      switch (item.getTicketType()) {
        case "ADULT":
          totalCost = totalCost + item.getNoOfTickets() * ticketPrices.adult;
          break;
        case "CHILD":
            totalCost = totalCost + item.getNoOfTickets() * ticketPrices.child;
            break;
        case "INFANT":
            totalCost = totalCost + item.getNoOfTickets() * ticketPrices.infant;
            break;
      }
    })
    return totalCost
  }

  getCalculateTotalPrice(allTicketsRequest) {
    return this.#calculateTotalPrice(allTicketsRequest)
  }
  
  purchaseTickets(accountId, ...ticketTypeRequests) {
    // throws InvalidPurchaseException
    const invalidPurchase = new InvalidPurchaseException()
    invalidPurchase.exception(accountId, ...ticketTypeRequests)
  }
}