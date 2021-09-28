var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5050",
        "ok": "676",
        "ko": "4374"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "328",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "26439",
        "ok": "26439",
        "ko": "20998"
    },
    "meanResponseTime": {
        "total": "12392",
        "ok": "12247",
        "ko": "12414"
    },
    "standardDeviation": {
        "total": "3919",
        "ok": "7398",
        "ko": "3045"
    },
    "percentiles1": {
        "total": "11296",
        "ok": "9441",
        "ko": "11326"
    },
    "percentiles2": {
        "total": "13234",
        "ok": "18394",
        "ko": "13004"
    },
    "percentiles3": {
        "total": "20009",
        "ok": "24437",
        "ko": "20007"
    },
    "percentiles4": {
        "total": "23592",
        "ok": "25600",
        "ko": "20013"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 655,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 4374,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.278",
        "ok": "18.778",
        "ko": "121.5"
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
        "ok": "676",
        "ko": "4374"
    },
    "minResponseTime": {
        "total": "2",
        "ok": "328",
        "ko": "2"
    },
    "maxResponseTime": {
        "total": "26439",
        "ok": "26439",
        "ko": "20998"
    },
    "meanResponseTime": {
        "total": "12392",
        "ok": "12247",
        "ko": "12414"
    },
    "standardDeviation": {
        "total": "3919",
        "ok": "7398",
        "ko": "3045"
    },
    "percentiles1": {
        "total": "11296",
        "ok": "9441",
        "ko": "11326"
    },
    "percentiles2": {
        "total": "13234",
        "ok": "18394",
        "ko": "13004"
    },
    "percentiles3": {
        "total": "20009",
        "ok": "24437",
        "ko": "20007"
    },
    "percentiles4": {
        "total": "23592",
        "ok": "25600",
        "ko": "20013"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 655,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 4374,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "140.278",
        "ok": "18.778",
        "ko": "121.5"
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
