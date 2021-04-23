const businessNamesAndRatings = apiResult =>
    apiResult.results.map(x => ({rating: x.rating, name: x.name}));

apiResult = {
    "html_attributions": [],
    "results": [{
        "geometry": {
            "location": {
                "lat": -33.87104699999999,
                "lng": 151.189736
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8693729197085,
                    "lng": 151.1912852302915
                },
                "southwest": {
                    "lat": -33.8720708802915,
                    "lng": 151.1885872697085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "3458f23c154e574552e0722773a46f384816b241",
        "name": "Vagabond Cruises",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [{
            "height": 1200,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/101516907347198229066/photos\">Vagabond Cruises</a>"],
            "photo_reference": "CmRaAAAAa6yKcrLeHls17_GFLHci3zSVk7aY3fl_FPo9pvyG-HTHSwv8siD0m6MzxsMa_7gtr5q2FR5aln_78FAw2F0QCqKXmBYUf-inhS2SIK_wi818IivDiVo1p9hrJt7yriLdEhDhQIAV8KImSaJV725-2GysGhSgrpNWqE1d-8YDwF63urngF4pFVA",
            "width": 1800
        }],
        "place_id": "ChIJLfySpTOuEmsRMFymbMkVkOE",
        "rating": 3.8,
        "reference": "CmRSAAAAMKUQ5LAd_kiEdX04YHLernfTxbCNhru34ogWgz1vng7JjnFfSQVHp23y4VHzyFmxvCQ-SLi2CQCZ7DWbUObBmYVgrI27CiX1N-P78MnQBhEghNbjMFYo1DFx_KRE9YhlEhDDe8gUFTOa_vNkmzDOImbnGhT2TjeAMZsrwUeKb7uM7YRoGK5QOw",
        "scope": "GOOGLE",
        "types": ["travel_agency", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "37 Bank Street, Pyrmont"
    }, {
        "geometry": {
            "location": {
                "lat": -33.86755700000001,
                "lng": 151.201527
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86631061970851,
                    "lng": 151.2028234802915
                },
                "southwest": {
                    "lat": -33.86900858029151,
                    "lng": 151.2001255197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "ce4ffe228ab7ad49bb050defe68b3d28cc879c4a",
        "name": "Sydney Showboats",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 900,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/105231077511067622688/photos\">Christie and Matt Snapshots of Food</a>"],
            "photo_reference": "CmRaAAAAtM_C9mMexCCqjVQoQNhNRV8JtMaAnVC-osngr0xZw6kr3_oZFDQDelgkhZmX7L5hLQx9V7u4kJqDV6zhFw3Kt97RiWMP9ND7Yqf8BRkv1iLJTSaEkceIGuMqDmPhiP-4EhDgJeTFtS8z7GdEO0uQKv-GGhRV34Mssa-RlCdOhxkrfrYuxRvcwg",
            "width": 1600
        }],
        "place_id": "ChIJjRuIiTiuEmsRCHhYnrWiSok",
        "rating": 3.8,
        "reference": "CmRSAAAA3YZrwA_RlEqro4tBPiME1-wobPMk5-Jw8g1LJarI7-Iuo_3FosyJnPbgCMDOIu2vbiLY-4zf2s1yFa7Kzdh-dT7uHMTs2Bkk19MHJVdfvb6VEwgG6fa65IQUYLvKQREUEhCwQfz4i_byZke_29-68obXGhRXYSJfmGFDKnVNw8y6DmQVl8GbLg",
        "scope": "GOOGLE",
        "types": ["travel_agency", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "32 The Promenade, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8686058,
                "lng": 151.2018206
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8673641197085,
                    "lng": 151.2033695302915
                },
                "southwest": {
                    "lat": -33.8700620802915,
                    "lng": 151.2006715697085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "21a0b251c9b8392186142c798263e289fe45b4aa",
        "name": "Rhythmboat Cruises",
        "photos": [{
            "height": 480,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/104066891898402903288/photos\">Rhythmboat Cruises</a>"],
            "photo_reference": "CmRaAAAANx5yk_UVQdJKdTsHJoCQVHb3J82qlG_W49fnFaVpUh8oAfFQDbO9Rvx8w0AOK5PotDYuUEMrl0OHgQ8iRLh_P9h3BZj4C3ae5_NM7EHNSma1p-4EPtkmxibrCc9qGox4EhCGttm0OH-m2mkUKy0-do5uGhT1JjzSdfZP1osrYVqOuefdgxXrPA",
            "width": 640
        }],
        "place_id": "ChIJyWEHuEmuEmsRm9hTkapTCrk",
        "rating": 3.7,
        "reference": "CmRSAAAA-5UyR4DuDMbi-F2SOTxwoHSwC5AHmD9YDmht3HoQ3mlbwxLmFjw7mWm5dLt9UaURWMCXZToerY3VAz8qibDuSpz6W2doVbbgaG4tayZPCe79JUjYuZxjXqB_cdHuT8nZEhBG15Lluny2MWVSrxPs--iQGhTIYugBhR78mpdwYtwgP1bwmSDjKg",
        "scope": "GOOGLE",
        "types": ["travel_agency", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "King Street Wharf, King Street, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8677371,
                "lng": 151.2016935
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8664006697085,
                    "lng": 151.2029067302915
                },
                "southwest": {
                    "lat": -33.8690986302915,
                    "lng": 151.2002087697085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "b0277cade7696e575824681aba949d68814f9efe",
        "name": "Sydney New Year's Eve Cruises",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 1152,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/107666140764925298472/photos\">Sydney New Year&#39;s Eve Cruises</a>"],
            "photo_reference": "CmRaAAAAWJQ_8bAX4_l-2fb7UsGYZs89lKr4T-uCISkB6r4YlrnL3KKBP0a-ho1Yzt7pQ4n6rmfc7W7TxuCSA-jwheB-HGJNKpOSqrXu2KJIIwC6h37XDZkGhLVPgRB-XUjlUlRwEhD4ZI3W_sE58WL9X3T9NXUYGhQRr8QLQV0oGauo_h_8rFimPHvpzA",
            "width": 2048
        }],
        "place_id": "ChIJ__8_hziuEmsR27ucFXECfOg",
        "rating": 5,
        "reference": "CmRSAAAAusXl3re0cTFpBRRX9nzd520VI3bpAKDlteFA8lhDpMiR3L2w4V-JjLmOvkAAWIulr-na65wiX6LLEtCPFwxWD_eF3289oiKh7YpCc3TnucbS3y9nihxFz4qsVBv-rLCEEhAlj5ga4uplbTc-SFinMK-QGhRSXMKI-3w-ogyIFNvsAQ43_vSxrQ",
        "scope": "GOOGLE",
        "types": ["travel_agency", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "32 The Promenade, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.867591,
                "lng": 151.201196
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86624201970849,
                    "lng": 151.2025449802915
                },
                "southwest": {
                    "lat": -33.86893998029149,
                    "lng": 151.1998470197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "a97f9fb468bcd26b68a23072a55af82d4b325e0d",
        "name": "Australian Cruise Group",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 2448,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/118410684014024830328/photos\">Michael Mak</a>"],
            "photo_reference": "CmRaAAAA8uWiwZTKwVVXvxGbisN6oJWbPPh-rokkdAuKWFpxIsWMCvmVLtOuB0ObJMPznOAlThrTG_5AowLJKIFqVw5PXu2S60qMhOMdcdG3aCOLJAqcm72e1Lv0-0JZSR2wNjy6EhBRTcdTEqBcTAOJSMKopwjtGhRiGG13yzQYSfCNSu8ncfM_UfLAZw",
            "width": 3264
        }],
        "place_id": "ChIJrTLr-GyuEmsRBfy61i59si0",
        "rating": 4.7,
        "reference": "CmRRAAAAIGWaaoCuR5l3LzFr7pHjf35TXRUXXRI5_751-AagUcItwN1p_UeXzB56DecduT_ENW73DcIjMacvtMOZgUct20JfTE24cDjpX-7y5gnct3AD9JBQ2bR0hAAs7coQP5SwEhBByKyQVSbclPWFP-3tfjZvGhTpf4V8B7Evqg5NVjYbXCHCAvmyRg",
        "scope": "GOOGLE",
        "types": ["travel_agency", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "32 The Promenade, King Street Wharf 5, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8671207,
                "lng": 151.2016385
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8657717197085,
                    "lng": 151.2029874802915
                },
                "southwest": {
                    "lat": -33.8684696802915,
                    "lng": 151.2002895197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "c620902a8565dd4c4d605fecbe4f9b585d881b62",
        "name": "Blue Line Cruises",
        "rating": 2.9,
        "place_id": "ChIJvwSIiTiuEmsR8hEazPa4W7U",
        "reference": "CmRSAAAA4crZKBR2A4XX-RDrn6jXV_8SPxwBKSTN4QpeLmuoq6DwnmQL5G1kwyte0A8kgCGZaNmJ9RAavuTgWAd7SZPVSJ3red1B4vGrGbYrx6A9s-_vYFTh9Hf98hezjKDFDpJNEhDdroZCZDA5ZAW3T4y0xZjmGhRuNtduFr9uaClLnsk6wWTCiOV-ow",
        "scope": "GOOGLE",
        "types": ["restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "Australia"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8677371,
                "lng": 151.2016935
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8663881197085,
                    "lng": 151.2030424802915
                },
                "southwest": {
                    "lat": -33.8690860802915,
                    "lng": 151.2003445197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "9ea7c77cb181b1f33d19c9d76121fcc6d5246ad8",
        "name": "Australian Cruise Group Circular Quay",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 1152,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/112378780393544273770/photos\">Australian Cruise Group Circular Quay</a>"],
            "photo_reference": "CmRaAAAAtm_GluX6cjQVO_7qHocYRZNgX8CHAjFGsFtcNV15hv0Zu6Y6nh1Pn95OB6qoaZ2c3dt37e89Ct9yMyK6_7iAXNetma66LBy9tenTr5l5KBEgEJ-OHcf6htZve-afICokEhACI_IwFcSy7W_2ZsLnKKlqGhQnKO9iLuhNXtbCfnIEcxE_k-O6Kw",
            "width": 2048
        }],
        "place_id": "ChIJpU8KgUKuEmsRKErVGEaa11w",
        "rating": 3.1,
        "reference": "CmRRAAAAWaBdUntg0aovjZOlXtmJbDJmd2H-51N6UpNNZNgMWuRoR_sxlSdRcCILCWNvceGov5fz9t1rOw44RFo2-W6-I-CmkyUdka1KZMcAMZKoX53uCzZ1GNb7nOcIe5PB5BsDEhBe6dRVQrZPMEAYra__1eCrGhS8qGYIjXXHzpYVQ90u2bDXx1sPSw",
        "scope": "GOOGLE",
        "types": ["travel_agency", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "No 6 Jetty, 32 The Promenade, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.862764,
                "lng": 151.195186
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8617247,
                    "lng": 151.1958664802915
                },
                "southwest": {
                    "lat": -33.8658819,
                    "lng": 151.1931685197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "05bf6e9aa18b35f174f5076c348ce8e91e328aba",
        "name": "Flying Fish Restaurant & Bar",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [{
            "height": 774,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/112721783865566588536/photos\">Emanuel Miranda</a>"],
            "photo_reference": "CmRaAAAA7RCFFMMniG0hTa1FEXUmkPiHjoQsWBMztiB123F4X7EeKMdmZVPtKnE50HQ5HPVEG9z-OMDhJm2n9fZbaM02NTOtN6Wh87cF7eU76wKOfJty1u3ZbcmmCFv-2EzDj6mSEhB6q2mhIRS7AVHFjvSE_TlyGhT4fghkkG8dC9ngXgbVqpNZYZTYSg",
            "width": 1032
        }],
        "place_id": "ChIJm7Ex8UmuEmsR37p4Hm0D0VI",
        "price_level": 4,
        "rating": 4.3,
        "reference": "CmRRAAAAYqpwlf-pzZt_1TLN99lJNxxx1ZhFJ6nj3uY_VlGndYdIhO--G3S8_UG3bPpjFxVNG3dA1ez5LJZZf-KEVoqfmJW9z-7rae48uTrFl8MEh5SoHvXM2qTuSNXOBtditarDEhCZNcgJtrX5OmVeS9DvJORjGhSgi65zyGD8Q0yW4QtNAu1_uIY65Q",
        "scope": "GOOGLE",
        "types": ["bar", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "Lower Deck, Jones Bay Wharf, 19-21 Pirrama Road, Pyrmont"
    }, {
        "geometry": {
            "location": {
                "lat": -33.87131999999999,
                "lng": 151.202524
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86993581970849,
                    "lng": 151.2036602302915
                },
                "southwest": {
                    "lat": -33.87263378029149,
                    "lng": 151.2009622697085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "c1b23c63fbec5ed695487ff38529f911be347b4d",
        "name": "Hunter & Barrel",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 638,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/116053414516782881370/photos\">Hunter &amp; Barrel</a>"],
            "photo_reference": "CmRaAAAAU40KTcoyTcJXoznPOsaskHr_W-wfcyFBM9s_7aNoFVRkbUQ7YEVET-cnPy-ZtBvznfKL6sv2Ok0ltU_kCt1HeRBvhd1KiFRFWoDudEYHqUoE-fqjKZghsT0kGqT6CLH8EhDX0LqD2sb85zrEMF_EDSVTGhRJqudpBQOw_uTwCngpFq7tgIRM0g",
            "width": 960
        }],
        "place_id": "ChIJ4d3pbjmuEmsRVXFrRKgslNU",
        "price_level": 1,
        "rating": 4.3,
        "reference": "CmRSAAAAyDI_PoFWroejpqd-hhF16uh6Zhv9SXx5fdQ_Sh_aCdZd2Kibv1dvkUSw84PmpFeqwLM9nidZei5qsdsQdyJfL7pAwiegTEQkxnhrL3LF9x35RAOayKfaojg0ruQrsROnEhDAPwPHSqc2xJuFZnKfkGLyGhQFdQfhJwyJT61X3CLPfYyELKMRGg",
        "scope": "GOOGLE",
        "types": ["restaurant", "bar", "food", "point_of_interest", "establishment"],
        "vicinity": "Cockle Bay Wharf, 303 Wheat Road, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.86827099999999,
                "lng": 151.2017512
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86692736970849,
                    "lng": 151.2032254302915
                },
                "southwest": {
                    "lat": -33.86962533029149,
                    "lng": 151.2005274697085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "a2e6805ffa25d0d10cd3443ee9d394f328f106ef",
        "name": "Manjits @ The Wharf - Indian Restaurant",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [{
            "height": 3352,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/101426609423179628746/photos\">Manjits @ The Wharf - Indian Restaurant</a>"],
            "photo_reference": "CmRaAAAAewrzJVxhfVBITa5PyG9JOhm_P-cqR4stjK03PUW_jzDU56qmNYVKtEVUdusDkwy5WqVLeiddP-9ehgcfgf2kJU6D4ajn7ibhB1Ywy9UZd1GfUmA0GPGqrn1gl-GATVpdEhDDIdPpfi9EW6Zhiwz9zup8GhTO0GhfZ7gh1dvBP2zQcFAW0TF_pw",
            "width": 5028
        }],
        "place_id": "ChIJIWt88ziuEmsR_87AR1awpAE",
        "price_level": 2,
        "rating": 4,
        "reference": "CmRRAAAA0uKnakFzgjSJAw22JFogXl4TOQ7MZ1okSbgxxRI0pxEPtXM9StWguzekddmV1rlRv6mm0sKy9YRImky3AmkVY4xTjLR5zFKWNXzDvRfoEsrMPoT80ZUbmuLpV9f0Bug1EhBjVFL3amFCPgsL82_xbzlZGhRvkjolTHf_NbiDqo8oUXACWZsuZA",
        "scope": "GOOGLE",
        "types": ["restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "10/49 Lime Street, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8695812,
                "lng": 151.1959196
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86757041970851,
                    "lng": 151.19673255
                },
                "southwest": {
                    "lat": -33.8702683802915,
                    "lng": 151.19348075
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "690e0260be4d96e619d21b7a874200f0bc374e89",
        "name": "Momofuku Seiobo",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [{
            "height": 3024,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/110181463637155747542/photos\">Geoff Booth</a>"],
            "photo_reference": "CmRaAAAAiMm18zrILcix9Aqb0BX_1dvP_5e8CHAM-yqpN_mE0vALAXUTIhTDlP-0ZEX3_A69jVD1bgvUPFrd2etLJ-qbov9g1Vuk_ZALpSsGJk6qY851wL4K3wK0TZ9IoMRiGkhQEhBrS1vqED1qY5mrMo7QMl-AGhT_M423rxzF0lwwfuKmB1dLyFZN9Q",
            "width": 4032
        }],
        "place_id": "ChIJq6qq6jauEmsRg6MWt2pdd9U",
        "price_level": 3,
        "rating": 4.3,
        "reference": "CmRSAAAALD-NDRLnz61UPHDy7xXCVaf0-GFy4YVI0yFBy0f4kgIdLRSRjJw5ed8Ab3-qiMULNis-YVhbUyiUhuot0f3awpHvoyFTouncEu8QWUW2J7tKRjdVxb7vRXeB04DdqimyEhDaGqSfAVkIaAIb8SY6qhunGhSb2u-mVLqq3Kob8Kzv5-zS3d_dfQ",
        "scope": "GOOGLE",
        "types": ["restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "80 Pyrmont Street, Pyrmont"
    }, {
        "geometry": {
            "location": {
                "lat": -33.86656629999999,
                "lng": 151.2014534
            },
            "viewport": {
                "northeast": {
                    "lat": -33.86540606970849,
                    "lng": 151.2028246802915
                },
                "southwest": {
                    "lat": -33.86810403029149,
                    "lng": 151.2001267197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "2e4cdb757d19cb518db0a551f9aca381d7599c93",
        "name": "Georges Mediterranean Bar & Grill",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 407,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/116255917991140608112/photos\">Georges Mediterranean Bar &amp; Grill</a>"],
            "photo_reference": "CmRaAAAAoF5OxxrVcEhAzSq5__asS9Mp6jCfUbH1w9IZci3LTA2suvetCsSIMjvV4BtBd2RNjXH0kdw4H-ED09EG_pN9d6V_ba5la4QF9PO7dM_TUvqJTWcyrqgsf7jaDdoU_8nKEhAnSLoRZXoYe0jxY_LCWYzuGhQiowa7ibf6ZYbQlGomdqoeZCqFAg",
            "width": 405
        }],
        "place_id": "ChIJWRxefkeuEmsRmKvNb_DeLt8",
        "price_level": 1,
        "rating": 3.6,
        "reference": "CmRSAAAAejJTSR-fLta0hvmdoji9AX_YLUAMCgqWVoqIYcJzZKpq4reyRQPXchr1wPaRUfdKdm-z1K85YwxYTCYH-9Cpdb3vg7FvGxizlE1W9vJddiFgV0UHxVU6igTRPgqAiY3LEhCiT2ALJV21JeNX7dViGT5QGhTGViQBkpB9a-PCaYDzWZRAn5QeqQ",
        "scope": "GOOGLE",
        "types": ["bar", "restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "5A The Promenade, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8666848,
                "lng": 151.2015819
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8653358197085,
                    "lng": 151.2029308802915
                },
                "southwest": {
                    "lat": -33.8680337802915,
                    "lng": 151.2002329197085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "e874baf8207abfa017524820cf33ba1801abd2c6",
        "name": "Steersons Steakhouse",
        "opening_hours": {
            "open_now": false,
            "weekday_text": []
        },
        "photos": [{
            "height": 1365,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/110384774118527817485/photos\">Steersons Steakhouse</a>"],
            "photo_reference": "CmRaAAAA5OYnutvsK7MKyVtBGbPv9B0SxVuCXrOtEC0sq0U3emI1U50J5pGouWyX6igzCOvx8iWLLHYhZLRdOjC_xfqswUrdN31XnXhuk2nI7w1zy-Pxi6xVwYn2WqSg3N-NLm1kEhCLCAZ7q4n2InXACgIRXTt-GhRxdh6MY6QyWb0FPAZZGu_5mdgdhg",
            "width": 1365
        }],
        "place_id": "ChIJWRxefkeuEmsRn2tDqHg6HQo",
        "price_level": 3,
        "rating": 4,
        "reference": "CmRRAAAAqVKkdj5YUD6zGkPQNGBsMpm2N-OOnCaDN3EDxcPO1teUknc46jBZkw2NrhzRo5yn5dZ35UuOX361ATUJCFp4vz_xzTKd1Vz7KmB4U6uSc-wT5thqow3-I_qQsFNIX04sEhDxKjseuVzSZh1tO9oJfZ1kGhSMGrWRWbwDyvBLzD4tCIhMP5tvcg",
        "scope": "GOOGLE",
        "types": ["restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "King Street Wharf, 17 Lime Street, Sydney"
    }, {
        "geometry": {
            "location": {
                "lat": -33.8663454,
                "lng": 151.2016149
            },
            "viewport": {
                "northeast": {
                    "lat": -33.8649904197085,
                    "lng": 151.2030431302915
                },
                "southwest": {
                    "lat": -33.8676883802915,
                    "lng": 151.2003451697085
                }
            }
        },
        "icon": "maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        "id": "6bbe8277e40132bea0dc96a4be2e5dd605942cd0",
        "name": "Meat District Co",
        "opening_hours": {
            "open_now": true,
            "weekday_text": []
        },
        "photos": [{
            "height": 3120,
            "html_attributions": ["<a href=\"maps.google.com/maps/contrib/111916772317784494996/photos\">Juan Labourdette</a>"],
            "photo_reference": "CmRaAAAALujw_ifuOxJlKdjPqR4AJzOET4XL0Z14t02ZWCNtdJF7klk5a3C1rxfaRhUWHEJEBA_4Bmoe57wvzdyUo5n9clsQTV3TPOW9qCarAnb55LOSkePedUK8QpkYs-1oGokUEhA4SpHTg44LsAcRqykKfb2PGhRTUBPQRXH4tc3W50KwGMZ124X25w",
            "width": 4160
        }],
        "place_id": "ChIJvcwFd0euEmsR1zPa9nahwMM",
        "price_level": 1,
        "rating": 3.8,
        "reference": "CmRSAAAADX9nZM2gMSmC14Oln4gIgXfc0ziI4vf1P0a-_wmmfvyr47dw9XN1LM-BLu0Dw1RcJ5CGBDAQnZj2Dcr-5o2kd50DpEmcwBW1eEvVicFpv8neIZR_EEujRDVtIs6NcNIdEhA-4DCEUWJJ5BiBt9KDYiG9GhR1lTo5G-_bOo2Te5CCkJUBuo9TWw",
        "scope": "GOOGLE",
        "types": ["restaurant", "food", "point_of_interest", "establishment"],
        "vicinity": "R3/11 Lime Street, Sydney"
    }],
    "status": "OK"
}
console.log(businessNamesAndRatings(apiResult));