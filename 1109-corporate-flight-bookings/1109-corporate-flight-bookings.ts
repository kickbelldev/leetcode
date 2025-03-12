function corpFlightBookings(bookings: number[][], n: number): number[] {
    const flights: number[] = new Array<number>(n).fill(0)

    for (const [first, last, seats] of bookings) {
        for (let i = first - 1; i < last; i++) {
            flights[i] += seats
        }
    }

    return flights
};