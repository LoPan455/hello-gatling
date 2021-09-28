var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "250",
        "ok": "250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9166",
        "ok": "9166",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4079",
        "ok": "4079",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2499",
        "ok": "2499",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3847",
        "ok": "3847",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6235",
        "ok": "6235",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8219",
        "ok": "8219",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8768",
        "ok": "8768",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 207,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
    }
},
contents: {
"req_get-a-random-re-8300c": {
        type: "REQUEST",
        name: "Get a random result",
path: "Get a random result",
pathFormatted: "req_get-a-random-re-8300c",
stats: {
    "name": "Get a random result",
    "numberOfRequests": {
        "total": "250",
        "ok": "250",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9166",
        "ok": "9166",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4079",
        "ok": "4079",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2499",
        "ok": "2499",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3847",
        "ok": "3847",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6235",
        "ok": "6235",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8219",
        "ok": "8219",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8768",
        "ok": "8768",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 207,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.667",
        "ok": "16.667",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
