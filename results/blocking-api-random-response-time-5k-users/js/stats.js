var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25050",
        "ok": "9464",
        "ko": "15586"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "303",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "31746",
        "ok": "24507",
        "ko": "31746"
    },
    "meanResponseTime": {
        "total": "16541",
        "ok": "9233",
        "ko": "20979"
    },
    "standardDeviation": {
        "total": "9644",
        "ok": "6729",
        "ko": "8358"
    },
    "percentiles1": {
        "total": "17679",
        "ok": "9061",
        "ko": "23219"
    },
    "percentiles2": {
        "total": "24230",
        "ok": "14619",
        "ko": "26825"
    },
    "percentiles3": {
        "total": "31406",
        "ok": "21029",
        "ko": "31469"
    },
    "percentiles4": {
        "total": "31560",
        "ok": "22519",
        "ko": "31587"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 941,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 345,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8178,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 15586,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "556.667",
        "ok": "210.311",
        "ko": "346.356"
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
        "total": "25050",
        "ok": "9464",
        "ko": "15586"
    },
    "minResponseTime": {
        "total": "8",
        "ok": "303",
        "ko": "8"
    },
    "maxResponseTime": {
        "total": "31746",
        "ok": "24507",
        "ko": "31746"
    },
    "meanResponseTime": {
        "total": "16541",
        "ok": "9233",
        "ko": "20979"
    },
    "standardDeviation": {
        "total": "9644",
        "ok": "6729",
        "ko": "8358"
    },
    "percentiles1": {
        "total": "17673",
        "ok": "9064",
        "ko": "23236"
    },
    "percentiles2": {
        "total": "24224",
        "ok": "14620",
        "ko": "26825"
    },
    "percentiles3": {
        "total": "31406",
        "ok": "21029",
        "ko": "31469"
    },
    "percentiles4": {
        "total": "31560",
        "ok": "22519",
        "ko": "31587"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 941,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 345,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8178,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 15586,
    "percentage": 62
},
    "meanNumberOfRequestsPerSecond": {
        "total": "556.667",
        "ok": "210.311",
        "ko": "346.356"
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
