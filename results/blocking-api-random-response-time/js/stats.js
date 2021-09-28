var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5050",
        "ok": "5050",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3050",
        "ok": "3050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1171",
        "ok": "1171",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "809",
        "ok": "809",
        "ko": "-"
    },
    "percentiles1": {
        "total": "872",
        "ok": "872",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1804",
        "ok": "1804",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2736",
        "ok": "2736",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2923",
        "ok": "2923",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2390,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 636,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2024,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "360.714",
        "ok": "360.714",
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
        "total": "5050",
        "ok": "5050",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "303",
        "ok": "303",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3050",
        "ok": "3050",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1171",
        "ok": "1171",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "809",
        "ok": "809",
        "ko": "-"
    },
    "percentiles1": {
        "total": "872",
        "ok": "872",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1804",
        "ok": "1804",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2736",
        "ok": "2736",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2923",
        "ok": "2923",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2390,
    "percentage": 47
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 636,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2024,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "360.714",
        "ok": "360.714",
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
