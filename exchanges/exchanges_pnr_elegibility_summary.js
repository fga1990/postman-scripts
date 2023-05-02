const str = `{
    "_meta": {
        "class": "ExchangePnrResponse"
    },
    "cartId": "f3469298-08ce-49d5-a36b-5469abfeb15e",
    "_id": "f3469298-08ce-49d5-a36b-5469abfeb15e",
    "creationTimestamp": 1683056734256,
    "updateTimestamp": 1683056734256,
    "toExchange": true,
    "toUpdatedDate": true,
    "toCancel": true,
    "includedBaggageInClassicFare": false,
    "includedSeatPaid": false,
    "isCheckin": false,
    "extraBaggage": false,
    "iropAffectedWaiver": false,
    "isAgency": false,
    "flightType": "ROUND_TRIP",
    "marketType": "TRANSBORDER",
    "regionCode": "USA",
    "pnr": "OULOMN",
    "pnrCreationDate": "20230428",
    "exchangeFee": {
        "_meta": {
            "class": "ExchangeFee"
        },
        "currency": {
            "_meta": {
                "class": "CurrencyValue"
            },
            "currencyCode": "USD",
            "base": 0,
            "taxDetails": {},
            "totalTax": 0,
            "total": 200.00
        }
    },
    "travelersCode": "A1_C0_I0_PH0_PC0",
    "formOfPayment": [
        {
            "type": "CREDIT_CARD",
            "bankName": "TP",
            "maskedCcNumber": "XXXXXXXXXXX0131"
        }
    ],
    "travelers": {
        "_meta": {
            "class": "TravelerCollection"
        },
        "_collection": [
            {
                "_meta": {
                    "class": "Traveler"
                },
                "paxIndex": 1,
                "paxType": "ADT",
                "bookingClasses": {
                    "_meta": {
                        "class": "BookingClassMap"
                    },
                    "_collection": [
                        {
                            "segmentCode": "MEX_JFK_AM_2023-05-21_0735",
                            "bookingClass": "I"
                        },
                        {
                            "segmentCode": "JFK_MEX_AM_2023-05-28_0730",
                            "bookingClass": "C",
                            "bookingCabin": "J"
                        }
                    ]
                },
                "tickets": {
                    "_meta": {
                        "class": "TicketCollection"
                    },
                    "_collection": [
                        {
                            "_meta": {
                                "class": "Ticket"
                            },
                            "number": "1392135591749",
                            "coupons": {
                                "1": "OK",
                                "2": "OK"
                            },
                            "currency": {
                                "_meta": {
                                    "class": "CurrencyValue"
                                },
                                "currencyCode": "BRL",
                                "base": 0,
                                "taxDetails": {
                                    "Outros impostos e taxas impostos for a transportadora": 308.84,
                                    "IVA": 386.55,
                                    "Outros impostos e taxas": 1.78
                                },
                                "totalTax": 1.78,
                                "total": 2262.09
                            }
                        },
                        {
                            "_meta": {
                                "class": "Ticket"
                            },
                            "number": "1392135587812",
                            "coupons": {
                                "1": "EXCH",
                                "2": "EXCH"
                            },
                            "currency": {
                                "_meta": {
                                    "class": "CurrencyValue"
                                },
                                "currencyCode": "BRL",
                                "base": 0,
                                "taxDetails": {
                                    "Outros impostos e taxas impostos for a transportadora": 309.72,
                                    "IVA": 386.55,
                                    "Outros impostos e taxas": 584.84
                                },
                                "totalTax": 1281.11,
                                "total": 10945.01
                            }
                        }
                    ]
                },
                "firstName": "KIM",
                "lastName": "ABAJO",
                "displayName": "KIM ABAJO",
                "dateOfBirth": "1989-07-08",
                "gender": "M",
                "emails": [
                    "axx@prueba.com"
                ],
                "freeBaggageAllowance": {
                    "personal": 1,
                    "carryOn": 1,
                    "checked": 0
                }
            }
        ]
    },
    "legs": {
        "_meta": {
            "class": "BookedLegCollection"
        },
        "_collection": [
            {
                "_meta": {
                    "class": "BookedLeg"
                },
                "segments": {
                    "_meta": {
                        "class": "BookedSegmentCollection"
                    },
                    "_collection": [
                        {
                            "fareBasisCode": "ENNF0TDS",
                            "fareFamily": "PREMIER_ONE_FLEXIBLE",
                            "fareAndCabinName": "PREMIER_ONE_FLEX_FARE_PREMIER_CABIN",
                            "fareType": "FIRST_PF",
                            "classOfService": "I",
                            "_meta": {
                                "class": "Segment"
                            },
                            "segmentCode": "MEX_JFK_AM_2023-05-21_0735",
                            "departureAirport": "MEX",
                            "departureDateTime": "2023-05-21T07:35:00",
                            "arrivalAirport": "JFK",
                            "arrivalDateTime": "2023-05-21T14:20:00",
                            "flightDurationInMinutes": 345,
                            "layoverToNextSegmentsInMinutes": 0,
                            "aircraftType": "789",
                            "operatingCarrier": "AM",
                            "operatingFlightCode": "408",
                            "marketingCarrier": "AM",
                            "marketingFlightCode": "408",
                            "amenitiesMainCabin": {
                                "complimentaryFeatures": [
                                    "SD",
                                    "HB",
                                    "PS11",
                                    "FM",
                                    "WF",
                                    "AU",
                                    "AC",
                                    "USB"
                                ]
                            },
                            "amenitiesPremierCabin": {
                                "complimentaryFeatures": [
                                    "SDP",
                                    "HBP",
                                    "PS18",
                                    "FM",
                                    "WF",
                                    "AU",
                                    "FB",
                                    "AC",
                                    "SKP",
                                    "USB"
                                ]
                            },
                            "thruFlightStops": 0
                        }
                    ]
                },
                "legCode": "MEX_JFK_AM_2023-05-21_0735",
                "legType": "NON-STOP",
                "transferSegments": [],
                "toExchange": true,
                "exchangeFee": {
                    "_meta": {
                        "class": "ExchangeFee"
                    },
                    "currency": {
                        "_meta": {
                            "class": "CurrencyValue"
                        },
                        "currencyCode": "USD",
                        "base": 0,
                        "taxDetails": {},
                        "totalTax": 0,
                        "total": 200.00
                    }
                },
                "totalFlightTimeInMinutes": 345
            },
            {
                "_meta": {
                    "class": "BookedLeg"
                },
                "segments": {
                    "_meta": {
                        "class": "BookedSegmentCollection"
                    },
                    "_collection": [
                        {
                            "fareBasisCode": "CNNA6RFS",
                            "fareFamily": "PREMIER_FLEXIBLE",
                            "fareAndCabinName": "PREMIER_FLEXIBLE_FARE_PREMIER_CABIN",
                            "fareType": "FIRST_FF",
                            "classOfService": "C",
                            "_meta": {
                                "class": "Segment"
                            },
                            "segmentCode": "JFK_MEX_AM_2023-05-28_0730",
                            "departureAirport": "JFK",
                            "departureDateTime": "2023-05-28T07:30:00",
                            "arrivalAirport": "MEX",
                            "arrivalDateTime": "2023-05-28T10:45:00",
                            "flightDurationInMinutes": 255,
                            "layoverToNextSegmentsInMinutes": 0,
                            "aircraftType": "7S8",
                            "operatingCarrier": "AM",
                            "operatingFlightCode": "405",
                            "marketingCarrier": "AM",
                            "marketingFlightCode": "405",
                            "amenitiesMainCabin": {
                                "complimentaryFeatures": [
                                    "SD",
                                    "HB",
                                    "PS9",
                                    "FM",
                                    "WF",
                                    "AU",
                                    "USB"
                                ]
                            },
                            "amenitiesPremierCabin": {
                                "complimentaryFeatures": [
                                    "SDP",
                                    "HBP",
                                    "PS11",
                                    "FM",
                                    "WF",
                                    "AU",
                                    "WS",
                                    "AC",
                                    "SKP",
                                    "USB"
                                ]
                            },
                            "thruFlightStops": 0
                        }
                    ]
                },
                "legCode": "JFK_MEX_AM_2023-05-28_0730",
                "legType": "NON-STOP",
                "transferSegments": [],
                "toExchange": true,
                "exchangeFee": {
                    "_meta": {
                        "class": "ExchangeFee"
                    },
                    "currency": {
                        "_meta": {
                            "class": "CurrencyValue"
                        },
                        "currencyCode": "USD",
                        "base": 0,
                        "taxDetails": {},
                        "totalTax": 0,
                        "total": 231.00
                    }
                },
                "totalFlightTimeInMinutes": 255
            }
        ]
    },
    "warnings": {
        "_meta": {
            "class": "WarningCollection"
        },
        "_collection": []
    }
}`;

const jsonData = JSON.parse(str);

// if (pm.response.code === 200) {
//     const jsonData = pm.response.json();

    let summary = `${getPnrInfo(jsonData, true)}`;
    summary += `${getLegs(jsonData.legs, true)}`;
    summary += `${getPayments(jsonData.formOfPayment, true)}`;
    summary += `${getTravelers(jsonData.travelers._collection, true)}`;
    summary += `${getExchangeFee(jsonData.exchangeFee, false)}`;
    console.log(summary);

// }

function getPnrInfo(jsonData, active) {
    if (active) {
        let pnrSummay = "\n**** PNR INFO ****\n";
        pnrSummay += `- CartId: ${jsonData.cartId}\n`;
        pnrSummay += `- PNR: ${jsonData.pnr}\n`;
        pnrSummay += `- Travelers code: ${jsonData.travelersCode}\n`;
        pnrSummay += `- Flight type: ${jsonData.flightType}\n`;
        pnrSummay += `- Market type: ${jsonData.marketType}\n`;
        pnrSummay += `- Region code: ${jsonData.regionCode}\n`;

        return pnrSummay;
    }
    return ``;
}

function getExchangeFee(exchangeFee, active) {
    if (active) {
        let feeSummary = "\n**** EXCHANGE FEE ****\n"
        feeSummary += `- Currency code: ${jsonData.exchangeFee.currency.currencyCode}\n`;
        feeSummary += `- Base: ${jsonData.exchangeFee.currency.base}\n`;
        feeSummary += `- Tax details: ${jsonData.exchangeFee.currency.taxDeatails}\n`;
        feeSummary += `- Total tax: ${jsonData.exchangeFee.currency.totalTax}\n`;
        feeSummary += `- Total: ${jsonData.exchangeFee.currency.total}\n`;
        return feeSummary;
    }
    return ``;
}
function getPayments (formOfPayment, active) {
    if (active) {
        let paymentsSummary = "\n**** PAYMENTS ****\n";
        formOfPayment.forEach((payment, index) => {
            paymentsSummary += ` Payment ${index + 1} of ${formOfPayment.length}\n`;
            paymentsSummary += `   Type: ${payment.type}\n`;
            paymentsSummary += `   Bank: ${payment.bankName}\n`;
            paymentsSummary += `   Card: ${payment.maskedCcNumber}\n`;
            //paymentsSummary += `   Address: ${payment.billingAddress.country}, ${payment.billingAddress.city}, Zip Code ${payment.billingAddress.zipCode}\n`;
        });

        return paymentsSummary;
    }
    return ``;
}

function getTravelers(travelers, active) {
    if (active) {
        travelers.sort((a, b) => a.paxIndex - b.paxIndex);

        let travelerSummary = "\n**** TRAVELERS ****\n";
        travelers.forEach((traveler, index) => {
            travelerSummary += `- Traveler ${index + 1} of ${travelers.length}\n`;
            travelerSummary += `    - Display Name: ${traveler.displayName}\n`;
            travelerSummary += `    - Pax Type: ${traveler.paxType}\n`;
            travelerSummary += `    - Date Of Birth: ${traveler.dateOfBirth}\n`;
            travelerSummary += `    - Gender: ${traveler.gender}\n`;
            travelerSummary += `    - Email: ${traveler.emails[0]}\n`;
            travelerSummary += `    - Free baggage allowance:\n`;
            travelerSummary += `        - Personal: ${traveler.freeBaggageAllowance.personal}\n`;
            travelerSummary += `        - Carry on: ${traveler.freeBaggageAllowance.carryOn}\n`;
            travelerSummary += `        - Checked: ${traveler.freeBaggageAllowance.checked}\n`;
            travelerSummary += `        - Checked max weight: ${traveler.freeBaggageAllowance.checkedMaxWeight} ${traveler.freeBaggageAllowance.checkedWeightUnit}\n`;
            travelerSummary += `    - Tickets:\n`;
            traveler.tickets._collection.forEach((ticket, i) => {
                travelerSummary += `        Ticket ${i + 1} of ${traveler.tickets._collection.length}\n`;
                travelerSummary += `        - Number: ${ticket.number}\n`;
                travelerSummary += `        - Cupons: ${JSON.stringify(ticket.coupons)}\n`;
                travelerSummary += `        - Total: ${ticket.currency.total} ${ticket.currency.currencyCode}\n`;
                travelerSummary += `        - Tax details:\n`;
                Object.entries(ticket.currency.taxDetails).forEach(([name, amount]) => {
                    travelerSummary += `         ${name}: ${amount} ${ticket.currency.currencyCode}\n`;
                });
            });
        });

        return travelerSummary;
    }
    return ``;
}
function getLegs(legs, active) {
    if (active) {
        let legsSummary = "\n**** LEGS ****\n";
        legs._collection.forEach((leg, index) => {
            legsSummary += `- Leg ${index + 1} of ${legs._collection.length}\n`;
            legsSummary += `- Code: ${leg.legCode}\n`;
            legsSummary += `- Type: ${leg.legType}\n`;
            leg.segments._collection.forEach((segment, index) => {
                legsSummary += `- Segment ${index + 1} of ${leg.segments._collection.length} \n`;
                legsSummary += `    - Code: ${segment.segmentCode} \n`;
                legsSummary += `    - Departure: ${segment.departureDateTime} \n`;
                legsSummary += `    - Arrival: ${segment.arrivalDateTime} \n`;
                legsSummary += `    - Carrier: ${segment.operatingCarrier} \n`;
                legsSummary += `    - Flight code: ${segment.operatingFlightCode} \n`;
                legsSummary += `    - Fare Family: ${segment.fareFamily} \n`;
                legsSummary += `    - Fare Basis Code: ${segment.fareBasisCode} \n`;
                legsSummary += `    - Fare type: ${segment.fareType} \n`;
            });

        });

        return legsSummary;
    }
    return ``;
}

