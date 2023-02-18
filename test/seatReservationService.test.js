import SeatReservationService from "../src/thirdparty/seatbooking/SeatReservationService";

const seatReservationService = new SeatReservationService();

describe('SeatReservationService class', () => {
    test('method reserveSeat should throw error when account id is not an integer', () => {
        expect(() => {seatReservationService.reserveSeat('4', 5)}).toThrow(new Error('accountId must be an integer'))
    })

    test('method reserveSeat should throw error when total seat is not an integer', () => {
        expect(() => {seatReservationService.reserveSeat(4, '7')}).toThrow(new Error('totalSeatsToAllocate must be an integer'))
    })
    
})