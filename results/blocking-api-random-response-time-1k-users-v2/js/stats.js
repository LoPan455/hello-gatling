var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "2500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1798",
        "ok": "1798",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "percentiles1": {
        "total": "624",
        "ok": "624",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1567",
        "ok": "1567",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1704",
        "ok": "1704",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1529,
    "percentage": 61
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 448,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 523,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "312.5",
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
        "total": "2500",
        "ok": "2500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1798",
        "ok": "1798",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "414",
        "ok": "414",
        "ko": "-"
    },
    "percentiles1": {
        "total": "624",
        "ok": "624",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1119",
        "ok": "1119",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1567",
        "ok": "1567",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1704",
        "ok": "1704",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1529,
    "percentage": 61
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 448,
    "percentage": 18
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 523,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "312.5",
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
