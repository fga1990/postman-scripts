const str = `{
    "pnr": {
        "reloc": "MVSTQE",
        "iropAffected": true,
        "itinerary": {
            "@type": "Itinerary",
            "@id": "1",
            "itineraryParts": [
                {
                    "@type": "ItineraryPart",
                    "@id": "2",
                    "segments": [
                        {
                            "@type": "Segment",
                            "@id": "3",
                            "segmentOfferInformation": {
                                "flightsMiles": 799,
                                "awardFare": false
                            },
                            "duration": 87,
                            "cabinClass": "Economy",
                            "equipment": "7M7",
                            "flight": {
                                "flightNumber": 505,
                                "operatingFlightNumber": 505,
                                "airlineCode": "AM",
                                "operatingAirlineCode": "AM",
                                "stopAirports": [],
                                "changeOfGauge": false,
                                "departureTerminal": "4",
                                "arrivalTerminal": "2"
                            },
                            "origin": "CUN",
                            "destination": "MEX",
                            "departure": "2023-09-20T07:13:00",
                            "arrival": "2023-09-20T08:40:00",
                            "segmentStatusCode": {
                                "code": "HK",
                                "segmentStatus": "CONFIRMED"
                            },
                            "bookingClass": "Y",
                            "layoverDuration": 0,
                            "fareBasis": "YNXN0ACN",
                            "subjectToGovernmentApproval": false
                        }
                    ],
                    "stops": 0,
                    "totalDuration": 87,
                    "connectionInformations": [],
                    "bookingClass": "Y"
                },
                {
                    "@type": "ItineraryPart",
                    "@id": "4",
                    "segments": [],
                    "stops": 0,
                    "totalDuration": 207,
                    "connectionInformations": [],
                    "bookingClass": "Y",
                    "cancelledSegments": [
                        {
                            "@type": "Segment",
                            "@id": "5",
                            "segmentOfferInformation": {
                                "flightsMiles": 0,
                                "awardFare": false
                            },
                            "duration": 207,
                            "cabinClass": "Economy",
                            "equipment": "7M8",
                            "flight": {
                                "flightNumber": 528,
                                "operatingFlightNumber": 528,
                                "airlineCode": "AM",
                                "operatingAirlineCode": "AM",
                                "stopAirports": [],
                                "departureTerminal": "",
                                "arrivalTerminal": ""
                            },
                            "origin": "MEX",
                            "destination": "CUN",
                            "departure": "2023-09-30T13:00:00",
                            "arrival": "2023-09-30T16:27:00",
                            "segmentStatusCode": {
                                "code": "WK",
                                "segmentStatus": "CANCELLED"
                            },
                            "bookingClass": "Y",
                            "layoverDuration": 0,
                            "fareBasis": "YNWN0ACN",
                            "subjectToGovernmentApproval": false
                        }
                    ]
                }
            ]
        },
        "passengers": [
            {
                "@id": "6",
                "passengerIndex": 1,
                "passengerNameNumber": "01.01",
                "passengerDetails": {
                    "firstName": "JOHN",
                    "lastName": "HOSEOK"
                },
                "passengerInfo": {
                    "dateOfBirth": "1990-04-22",
                    "gender": "MALE",
                    "type": "ADT",
                    "emails": [],
                    "phones": []
                },
                "preferences": {
                    "specialPreferences": {
                        "mealPreference": "",
                        "seatPreference": "",
                        "specialRequests": [
                            "TKNE",
                            "TKNE"
                        ],
                        "specialServiceRequestRemarks": [
                            {
                                "code": "TKNE",
                                "description": "AM HK1 CUNMEX0505Y20SEP/1392135793648C1"
                            },
                            {
                                "code": "TKNE",
                                "description": "AM HK1 MEXCUN0528Y30SEP/1392135793648C2"
                            }
                        ]
                    },
                    "frequentFlyer": []
                },
                "allDocumentInfos": []
            }
        ],
        "documents": [
            {
                "@id": "7",
                "documentDetails": {
                    "documentType": "VCR",
                    "documentNumber": "1392135793648"
                },
                "passenger": {
                    "@ref": "6"
                },
                "coupons": [
                    {
                        "couponNumber": 1,
                        "couponStatus": "OK",
                        "travelPart": {
                            "@ref": "3"
                        }
                    },
                    {
                        "couponNumber": 2,
                        "couponStatus": "OK",
                        "travelPart": {
                            "@ref": "5"
                        }
                    }
                ]
            }
        ],
        "travelPartsAdditionalDetails": [
            {
                "passengers": [
                    {
                        "passenger": {
                            "@ref": "6"
                        }
                    }
                ]
            },
            {
                "travelPart": {
                    "@ref": "5"
                },
                "eligibilities": [],
                "eligibilitiesCodes": {},
                "coLocatedAirports": []
            },
            {
                "travelPart": {
                    "@ref": "3"
                },
                "passengers": [
                    {
                        "passenger": {
                            "@ref": "6"
                        }
                    }
                ],
                "eligibilities": [],
                "eligibilitiesCodes": {},
                "coLocatedAirports": []
            }
        ],
        "payments": [
            {
                "paymentCode": "CASH",
                "paymentType": "CASH",
                "price": {
                    "alternatives": [
                        [
                            {
                                "amount": 15681,
                                "currency": "MXN"
                            }
                        ]
                    ]
                }
            }
        ],
        "documentPaymentDetails": [
            {
                "document": {
                    "@ref": "7"
                },
                "endorsements": [
                    "NONEND",
                    "NONREF",
                    "CHG FEE APPLIES"
                ],
                "payments": [
                    {
                        "paymentCode": "CASH",
                        "paymentType": "CASH"
                    }
                ],
                "total": {
                    "alternatives": []
                }
            }
        ],
        "priceBreakdown": {
            "label": "totalReservationPrice",
            "price": {
                "alternatives": [
                    [
                        {
                            "amount": 15681,
                            "currency": "MXN"
                        }
                    ]
                ]
            },
            "subElements": [
                {
                    "label": "farePrice",
                    "price": {
                        "alternatives": [
                            [
                                {
                                    "amount": 12782,
                                    "currency": "MXN"
                                }
                            ]
                        ]
                    },
                    "breakdownElementAssignment": {
                        "travelPart": {
                            "@ref": "1"
                        }
                    },
                    "subElements": [
                        {
                            "label": "BASE",
                            "price": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 12782,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "breakdownElementAssignment": {
                                "passenger": {
                                    "@ref": "6"
                                },
                                "passengerType": "ADT"
                            },
                            "additionalContext": {}
                        }
                    ],
                    "additionalContext": {}
                },
                {
                    "label": "discountPrice",
                    "price": {
                        "alternatives": []
                    },
                    "breakdownElementAssignment": {
                        "travelPart": {
                            "@ref": "1"
                        }
                    },
                    "additionalContext": {}
                },
                {
                    "label": "taxesPrice",
                    "price": {
                        "alternatives": [
                            [
                                {
                                    "amount": 2899,
                                    "currency": "MXN"
                                }
                            ]
                        ]
                    },
                    "breakdownElementAssignment": {
                        "travelPart": {
                            "@ref": "1"
                        }
                    },
                    "subElements": [
                        {
                            "label": "X2",
                            "price": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 822,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "pricePerUnit": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 822,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "additionalContext": {}
                        },
                        {
                            "label": "D1",
                            "price": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 2046,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "pricePerUnit": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 2046,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "additionalContext": {}
                        },
                        {
                            "label": "B1",
                            "price": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 31,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "pricePerUnit": {
                                "alternatives": [
                                    [
                                        {
                                            "amount": 31,
                                            "currency": "MXN"
                                        }
                                    ]
                                ]
                            },
                            "additionalContext": {}
                        }
                    ],
                    "additionalContext": {}
                },
                {
                    "label": "feesPrice",
                    "price": {
                        "alternatives": []
                    },
                    "additionalContext": {}
                },
                {
                    "label": "ancillariesPrice",
                    "price": {
                        "alternatives": []
                    },
                    "additionalContext": {}
                },
                {
                    "label": "seatsPrice",
                    "price": {
                        "alternatives": []
                    },
                    "additionalContext": {}
                },
                {
                    "label": "obFeesPrice",
                    "price": {
                        "alternatives": []
                    },
                    "additionalContext": {}
                },
                {
                    "label": "upgradePrice",
                    "price": {
                        "alternatives": []
                    },
                    "additionalContext": {}
                }
            ],
            "additionalContext": {}
        },
        "contact": {
            "emails": [],
            "phones": [
                {
                    "type": "HOME",
                    "countryCode": "",
                    "areaCode": "",
                    "number": "PWCT",
                    "extension": ""
                }
            ],
            "addresses": []
        },
        "remarks": [],
        "specialServiceRequests": [
            {
                "passengerIndex": 1,
                "code": "TKNE",
                "description": "AM HK1 CUNMEX0505Y20SEP/1392135793648C1",
                "segmentKey": {
                    "origin": "CUN",
                    "destination": "MEX",
                    "departure": "2023-09-20T07:13:00",
                    "arrival": "2023-09-20T08:40:00"
                }
            },
            {
                "passengerIndex": 1,
                "code": "TKNE",
                "description": "AM HK1 MEXCUN0528Y30SEP/1392135793648C2",
                "segmentKey": {
                    "origin": "MEX",
                    "destination": "CUN",
                    "departure": "2023-09-30T13:00:00",
                    "arrival": "2023-09-30T16:27:00"
                }
            },
            {
                "passengerIndex": 1,
                "code": "RGTB",
                "description": "/ESMX"
            },
            {
                "passengerIndex": 1,
                "code": "DOCS",
                "description": "DOCS AM null/null/null/null/22Apr1990/M//HOSEOK/JOHN/"
            }
        ],
        "pseudoCity": {
            "pseudoCityCode": "WVW",
            "stationId": "86977446",
            "accountingCode": "NP",
            "officeStationCode": "8697744",
            "accountingCity": "WVW",
            "bookingPseudoCityCode": "WVW"
        },
        "bookingType": "REVENUE"
    },
    "tripOptions": [
        {
            "tripOption": "ADD_MODIFY_ANCILLARIES",
            "ruleName": "ANCILLARIES_MTO_GUEST",
            "enabled": true
        },
        {
            "tripOption": "SPLIT_MTO",
            "ruleName": "SPLIT_MTO_GUEST",
            "enabled": true
        },
        {
            "tripOption": "ADD_INSURANCE_POSTBOOKING",
            "ruleName": "CONFIGURATION",
            "enabled": false,
            "failureReason": "disabled"
        },
        {
            "tripOption": "CHECK_IN",
            "ruleName": "CHECKIN_GUEST",
            "enabled": true
        },
        {
            "tripOption": "CANCEL_ITINERARY",
            "ruleName": "CANCELITINERARY_GUEST",
            "enabled": true
        },
        {
            "tripOption": "CANCEL_FLIGHT",
            "ruleName": "CANCEL_GUEST",
            "enabled": true
        },
        {
            "tripOption": "IROP",
            "ruleName": "IROP_GUEST",
            "enabled": true
        },
        {
            "tripOption": "VOID",
            "ruleName": "VOID_GUEST",
            "enabled": true
        },
        {
            "tripOption": "UPGRADE",
            "ruleName": "UPGRADE_GUEST",
            "enabled": true
        },
        {
            "tripOption": "EXCHANGE_FLIGHT",
            "ruleName": "EXCHANGE_GUEST",
            "enabled": true
        },
        {
            "tripOption": "OFFLOAD",
            "ruleName": "OFFLOAD_GUEST",
            "enabled": true
        },
        {
            "tripOption": "PURCHASE_ON_HOLD_BOOKING",
            "ruleName": "BNPL_GUEST",
            "enabled": true
        },
        {
            "tripOption": "ADD_MODIFY_SEATS",
            "ruleName": "SEATS_MTO_GUEST",
            "enabled": true
        },
        {
            "tripOption": "EDIT_PASSENGER",
            "ruleName": "EDIT_PAX_DETAILS_GUEST",
            "enabled": true
        },
        {
            "tripOption": "CANCEL_UPGRADE",
            "ruleName": "CANCEL_UPGRADE_GUEST",
            "enabled": true
        }
    ],
    "messages": []
}`;
const jsonData = JSON.parse(str);

//postman.setEnvironmentVariable("execution", postman.getResponseHeader("execution"));

/*if (pm.response.code !== 200) {
    const obj = pm.response.json();
    const status = obj.status;
    console.log(status);
}*/

//if (pm.response.code === 200) {
//const jsonData = pm.response.json();

let summary = `${getPnr(jsonData)}`;
summary += `${getItinerary(jsonData)}`;
summary += `${getPassengers(jsonData)}`;
summary += `${getDocuments(jsonData)}`;
summary += `${getPayments(jsonData)}`;

console.log(summary);

//}
function getPnr(jsonData) {
    let pnrSummary = `PNR: ${jsonData.pnr.reloc}\n`;
    pnrSummary += `IROP: ${jsonData.pnr.iropAffected}\n`;
    return pnrSummary;
}

function getItinerary(jsonData) {
    let itinerarySummary = ``;
    jsonData.pnr.itinerary.itineraryParts.forEach((itineraryPart, index) => {
        itinerarySummary += `- Itinerary Part ${index + 1}:\n`;

        itineraryPart.segments.forEach((segment, index) => {
            itinerarySummary += `  - Segment ${index + 1}:\n`;
            itinerarySummary += `    - Origin: ${segment.origin}\n`;
            itinerarySummary += `    - Destination: ${segment.destination}\n`;
            itinerarySummary += `    - Departure: ${segment.departure}\n`;
            itinerarySummary += `    - Arrival: ${segment.arrival}\n`;
            itinerarySummary += `    - Flight number: ${segment.flight.airlineCode} ${segment.flight.flightNumber}\n`;
            itinerarySummary += `    - Cabin Class: ${segment.cabinClass}\n`;
            itinerarySummary += `    - Fare Basis: ${segment.fareBasis}\n`;
            itinerarySummary += `    - Booking Class: ${segment.bookingClass}\n`;
            itinerarySummary += `    - Equipment: ${segment.equipment}\n`;
            itinerarySummary += `    - Duration: ${segment.duration}\n`;
            itinerarySummary += `    - Stops: ${itineraryPart.stops}\n`;
            itinerarySummary += `    - Total Duration: ${itineraryPart.totalDuration}\n`;
            itinerarySummary += `    - Layover Duration: ${segment.layoverDuration}\n`;
            itinerarySummary += `    - Subject To Government Approval: ${segment.subjectToGovernmentApproval}\n`;
            itinerarySummary += `    - Segment Status Code: ${segment.segmentStatusCode.code}\n`;
            itinerarySummary += `    - Segment Status: ${segment.segmentStatusCode.segmentStatus}\n`;
        });

        itineraryPart.cancelledSegments?.forEach((segment, index) => {
            itinerarySummary += `  - Cancelled Segment ${index + 1}:\n`;
            itinerarySummary += `    - Origin: ${segment.origin}\n`;
            itinerarySummary += `    - Destination: ${segment.destination}\n`;
            itinerarySummary += `    - Departure: ${segment.departure}\n`;
            itinerarySummary += `    - Arrival: ${segment.arrival}\n`;
            itinerarySummary += `    - Flight number: ${segment.flight.airlineCode} ${segment.flight.flightNumber}\n`;
            itinerarySummary += `    - Cabin Class: ${segment.cabinClass}\n`;
            itinerarySummary += `    - Fare Basis: ${segment.fareBasis}\n`;
            itinerarySummary += `    - Booking Class: ${segment.bookingClass}\n`;
            itinerarySummary += `    - Equipment: ${segment.equipment}\n`;
            itinerarySummary += `    - Duration: ${segment.duration}\n`;
            itinerarySummary += `    - Stops: ${itineraryPart.stops}\n`;
            itinerarySummary += `    - Total Duration: ${itineraryPart.totalDuration}\n`;
            itinerarySummary += `    - Layover Duration: ${segment.layoverDuration}\n`;
            itinerarySummary += `    - Subject To Government Approval: ${segment.subjectToGovernmentApproval}\n`;
            itinerarySummary += `    - Segment Status Code: ${segment.segmentStatusCode.code}\n`;
            itinerarySummary += `    - Segment Status: ${segment.segmentStatusCode.segmentStatus}\n`;
        });
    });

    return itinerarySummary;

}

function getPassengers(jsonData) {
    let passengerSummary = `Passengers:\n`;
    jsonData.pnr.passengers.forEach((passenger, index) => {
        passengerSummary += `- Passenger ${index + 1}:\n`;
        passengerSummary += `  - First Name: ${passenger.passengerDetails.firstName}\n`;
        passengerSummary += `  - Last Name: ${passenger.passengerDetails.lastName}\n`;
        passengerSummary += `  - Date of Birth: ${passenger.passengerInfo.dateOfBirth}\n`;
        passengerSummary += `  - Gender: ${passenger.passengerInfo.gender}\n`;
        passengerSummary += `  - Type: ${passenger.passengerInfo.type}\n`;
        passengerSummary += `  - Email: ${passenger.passengerInfo.emails[0]}\n`;
        passengerSummary += `  - Phone Number: ${passenger.passengerInfo.phones[0]?.countryCode || ''}${passenger.passengerInfo.phones[0]?.number || ''}\n`;
        passengerSummary += `  - Address Country: ${passenger.passengerInfo.address?.country || ''}\n`;
    });

    return passengerSummary;
}

function getDocuments(jsonData) {
    let docSummary = `Documents:\n`;
    jsonData.pnr.documents.forEach((document, index) => {
        docSummary += `- Document ${index + 1}:\n`;
        docSummary += `  - Document Number: ${document.documentDetails.documentNumber}\n`;
        docSummary += `  - Document Type: ${document.documentDetails.documentType}\n`;
        docSummary += `  - Passenger Name: ${jsonData.pnr.passengers.find(p => p['@id'] === document.passenger['@ref']).passengerDetails.lastName}\n`;
        docSummary += `  - Coupon Number: ${document.coupons[0].couponNumber}\n`;
        docSummary += `  - Coupon Status: ${document.coupons[0].couponStatus}\n`;
    });

    return docSummary;
}

function getPayments(jsonData) {
    let paymentSummary = `Payments:\n`;

    jsonData.pnr.payments.forEach((payment, index) => {
        paymentSummary += `- Payment ${index + 1}:\n`;
        paymentSummary += `  - Payment code: ${payment.paymentCode}\n`;
        paymentSummary += `  - Payment type: ${payment.paymentType}\n`;
        paymentSummary += `  - Identifier: ${payment.identifier}\n`;
        paymentSummary += `  - Price\n`;
        payment.price.alternatives.forEach((alternative, subindex) => {
            paymentSummary += `     - Alternative ${subindex + 1}\n`;
            paymentSummary += `        - Currency: ${alternative[subindex].currency}\n`;
            paymentSummary += `        - Amount: ${alternative[subindex].amount}\n`;

        })
    });

    return paymentSummary;
}