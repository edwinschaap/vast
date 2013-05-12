Example queries for elasticsearch
=================================



Date histogram with custom value field
--------------------------------------

###Query
`{
    "query": {
        "match_all": {}
    },
    "facets": {
        "histo1": {
            "date_histogram": {
                "field": "parsedDate",
                "interval": "day",
                "value_field": "firstSeenDestTotalBytes"
            }
        }
    }
}`

###Result
`{
    "_shards": {
        "failed": 0,
        "successful": 48,
        "total": 48
    },
    "facets": {
        "histo1": {
            "_type": "date_histogram",
            "entries": [
                {
                    "count": 809226,
                    "max": 1542930,
                    "mean": 2203.2780409922566,
                    "min": 0,
                    "time": 1364774400000,
                    "total": 1782949876,
                    "total_count": 809226
                },
                {
                    "count": 14362290,
                    "max": 1542930,
                    "mean": 1387.4628321110351,
                    "min": 0,
                    "time": 1364860800000,
                    "total": 19927143559,
                    "total_count": 14362290
                },
                {
                    "count": 21526884,
                    "max": 11110728,
                    "mean": 8474.358096926615,
                    "min": 0,
                    "time": 1364947200000,
                    "total": 182426523727,
                    "total_count": 21526884
                },
                {
                    "count": 3966679,
                    "max": 8498118,
                    "mean": 58073.73648258405,
                    "min": 0,
                    "time": 1365033600000,
                    "total": 230359870957,
                    "total_count": 3966679
                },
                {
                    "count": 778001,
                    "max": 8503558,
                    "mean": 233064.97243448274,
                    "min": 0,
                    "time": 1365120000000,
                    "total": 181324781619,
                    "total_count": 778001
                },
                {
                    "count": 4060313,
                    "max": 11120755,
                    "mean": 64155.66208984381,
                    "min": 0,
                    "time": 1365206400000,
                    "total": 260492068807,
                    "total_count": 4060313
                },
                {
                    "count": 634207,
                    "max": 12200664,
                    "mean": 143393.3925926393,
                    "min": 0,
                    "time": 1365292800000,
                    "total": 90941093336,
                    "total_count": 634207
                }
            ]
        }
    },
    "timed_out": false,
    "took": 236
}`