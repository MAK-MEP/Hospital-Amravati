var APP_DATA = {
  "scenes": [
    {
      "id": "0-01-exterior-view",
      "name": "01-Exterior View",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.23747590308734345,
          "pitch": -0.006474682940872611,
          "rotation": 0,
          "target": "1-02-ramp-1"
        },
        {
          "yaw": 0.13245471774748196,
          "pitch": -0.05716694308574155,
          "rotation": 0,
          "target": "2-03-entrance"
        },
        {
          "yaw": 0.5252637546000738,
          "pitch": -0.007684732179486176,
          "rotation": 0,
          "target": "3-04-ramp-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02-ramp-1",
      "name": "02-Ramp 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 0.017762783761709144,
          "pitch": -0.05102091210115489,
          "rotation": 0,
          "target": "2-03-entrance"
        },
        {
          "yaw": 2.4667875599729268,
          "pitch": 0.03105014252064997,
          "rotation": 0,
          "target": "0-01-exterior-view"
        },
        {
          "yaw": 0.6785909702259065,
          "pitch": -0.005657707933151457,
          "rotation": 0,
          "target": "3-04-ramp-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03-entrance",
      "name": "03-Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.04114674844172583,
        "pitch": -0.051651993973083066,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.77727738605415,
          "pitch": 0.030372022598861292,
          "rotation": 0,
          "target": "0-01-exterior-view"
        },
        {
          "yaw": -2.1869829204082496,
          "pitch": 0.08982979360957799,
          "rotation": 0,
          "target": "1-02-ramp-1"
        },
        {
          "yaw": 1.711146059239737,
          "pitch": 0.04109280254804837,
          "rotation": 0,
          "target": "3-04-ramp-2"
        },
        {
          "yaw": -0.05835443466563106,
          "pitch": 0.06875839501394942,
          "rotation": 0,
          "target": "4-05-reception"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04-ramp-2",
      "name": "04-Ramp 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.2947975898629664,
          "pitch": -0.016989375395551676,
          "rotation": 1.5707963267948966,
          "target": "0-01-exterior-view"
        },
        {
          "yaw": -0.7022322291597014,
          "pitch": -0.015883669903425712,
          "rotation": 0,
          "target": "1-02-ramp-1"
        },
        {
          "yaw": -0.27345467236014365,
          "pitch": -0.06079258383192965,
          "rotation": 0,
          "target": "2-03-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05-reception",
      "name": "05-Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.8766561243821638,
        "pitch": -0.005621992811615684,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 2.2336173994615622,
          "pitch": 0.050847340413572084,
          "rotation": 0,
          "target": "2-03-entrance"
        },
        {
          "yaw": -2.024230645942154,
          "pitch": 0.06748038456972694,
          "rotation": 0,
          "target": "5-06-near-day-care-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06-near-day-care-area",
      "name": "06-Near Day Care Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.07756434606370277,
          "pitch": 0.06852347583417284,
          "rotation": 0,
          "target": "4-05-reception"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "180VB-Hospital at Amravati",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
