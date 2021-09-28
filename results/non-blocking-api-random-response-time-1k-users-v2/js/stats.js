var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2500",
        "ok": "593",
        "ko": "1907"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "324",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "26129",
        "ok": "26129",
        "ko": "20077"
    },
    "meanResponseTime": {
        "total": "17832",
        "ok": "12972",
        "ko": "19343"
    },
    "standardDeviation": {
        "total": "5381",
        "ok": "7922",
        "ko": "2969"
    },
    "percentiles1": {
        "total": "20005",
        "ok": "11886",
        "ko": "20006"
    },
    "percentiles2": {
        "total": "20008",
        "ok": "19279",
        "ko": "20008"
    },
    "percentiles3": {
        "total": "21284",
        "ok": "25883",
        "ko": "20020"
    },
    "percentiles4": {
        "total": "25913",
        "ok": "26039",
        "ko": "20049"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 568,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 1907,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.125",
        "ok": "18.531",
        "ko": "59.594"
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
        "ok": "593",
        "ko": "1907"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "324",
        "ko": "3"
    },
    "maxResponseTime": {
        "total": "26129",
        "ok": "26129",
        "ko": "20077"
    },
    "meanResponseTime": {
        "total": "17832",
        "ok": "12972",
        "ko": "19343"
    },
    "standardDeviation": {
        "total": "5381",
        "ok": "7922",
        "ko": "2969"
    },
    "percentiles1": {
        "total": "20005",
        "ok": "11886",
        "ko": "20006"
    },
    "percentiles2": {
        "total": "20008",
        "ok": "19279",
        "ko": "20008"
    },
    "percentiles3": {
        "total": "21284",
        "ok": "25883",
        "ko": "20020"
    },
    "percentiles4": {
        "total": "25913",
        "ok": "26039",
        "ko": "20049"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 13,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 568,
    "percentage": 23
},
    "group4": {
    "name": "failed",
    "count": 1907,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.125",
        "ok": "18.531",
        "ko": "59.594"
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
