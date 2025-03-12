function corpFlightBookings(bookings: number[][], n: number): number[] {
    const flights: number[] = new Array(n + 1).fill(0)

    for (const [first, last, seats] of bookings) {
        flights[first - 1] += seats
        flights[last] -= seats
    }

    for (let i = 1; i < n; i++) {
        flights[i] += flights[i - 1]
    }

    return flights.slice(0, n)
};