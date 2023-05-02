postman.setEnvironmentVariable("execution", postman.getResponseHeader("execution"));

if (pm.response.code !== 200) {
    const obj = pm.response.json();
    const status = obj.status;
    console.log(status);
}

if (pm.response.code === 200) {
    const jsonData = pm.response.json();

    console.log(`Record locator: ${jsonData.reloc}`);
    console.log(`Itinerary:`);

    jsonData.itinerary.itineraryParts.forEach((itineraryPart, index) => {
        console.log(`- Itinerary Part ${index + 1}:`);
        itineraryPart.segments.forEach((segment, index) => {
            console.log(`  - Segment ${index + 1}:`);
            console.log(`    - Origin: ${segment.origin}`);
            console.log(`    - Destination: ${segment.destination}`);
            console.log(`    - Departure: ${segment.departure}`);
            console.log(`    - Arrival: ${segment.arrival}`);
            console.log(`    - Cabin Class: ${segment.cabinClass}`);
            console.log(`    - Fare Basis: ${segment.fareBasis}`);
            console.log(`    - Booking Class: ${segment.bookingClass}`);
            console.log(`    - Equipment: ${segment.equipment}`);
            console.log(`    - Duration: ${segment.duration}`);
            console.log(`    - Stops: ${itineraryPart.stops}`);
            console.log(`    - Total Duration: ${itineraryPart.totalDuration}`);
            console.log(`    - Layover Duration: ${segment.layoverDuration}`);
            console.log(`    - Subject To Government Approval: ${segment.subjectToGovernmentApproval}`);
            console.log(`    - Segment Status Code: ${segment.segmentStatusCode.code}`);
            console.log(`    - Segment Status: ${segment.segmentStatusCode.segmentStatus}`);
        });
    });


    console.log(`Passengers:`);

    jsonData.passengers.forEach((passenger, index) => {
        console.log(`- Passenger ${index + 1}:`);
        console.log(`  - First Name: ${passenger.passengerDetails.firstName}`);
        console.log(`  - Last Name: ${passenger.passengerDetails.lastName}`);
        console.log(`  - Date of Birth: ${passenger.passengerInfo.dateOfBirth}`);
        console.log(`  - Gender: ${passenger.passengerInfo.gender}`);
        console.log(`  - Type: ${passenger.passengerInfo.type}`);
        console.log(`  - Email: ${passenger.passengerInfo.emails[0]}`);
        console.log(`  - Phone Number: ${passenger.passengerInfo.phones[0].countryCode}${passenger.passengerInfo.phones[0].number}`);
        console.log(`  - Address Country: ${passenger.passengerInfo.address.country}`);
    });


    console.log(`Documents:`);

    jsonData.documents.forEach((document, index) => {
        console.log(`- Document ${index + 1}:`);
        console.log(`  - Document Number: ${document.documentDetails.documentNumber}`);
        console.log(`  - Document Type: ${document.documentDetails.documentType}`);
        console.log(`  - Passenger Name: ${jsonData.passengers.find(p => p['@id'] === document.passenger['@ref']).passengerDetails.lastName}`);
        console.log(`  - Coupon Number: ${document.coupons[0].couponNumber}`);
        console.log(`  - Coupon Status: ${document.coupons[0].couponStatus}`);
    });


    console.log(`Payments:`);

    jsonData.payments.forEach((payment, index) => {
        console.log(`- Payment ${index + 1}:`);
        console.log(`  - Payment code: ${payment.paymentCode}`);
        console.log(`  - Payment type: ${payment.paymentType}`);
        console.log(`  - Identifier: ${payment.identifier}`);
        console.log(`  - Price`);
        payment.price.alternatives.forEach((alternative, subindex) => {
            console.log(`     - Alternative ${subindex + 1}`);
            console.log(`        - Currency: ${alternative[subindex].currency}`);
            console.log(`        - Amount: ${alternative[subindex].amount}`);

        })
    });

}
