import layoutConfig from "./layoutConfig";
import chatsJSlayoutConfig from "./chatsJSlayoutConfig";
import layoutConfigTest from "./layoutConfigTest";
import layoutConfigState from "./layoutConfigState";

const initialState = {
  data: {
    graph1: {
      type: "bar",
      title: "Graph 1",
      data: [
        {
          time: "5:08 AM",
          value: 3738,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "4:52 PM",
          value: 2135,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "4:04 AM",
          value: 2649,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "1:41 PM",
          value: 3421,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "6:39 AM",
          value: 2634,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "5:08 PM",
          value: 2298,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "2:46 AM",
          value: 2231,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "10:56 PM",
          value: 921,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "3:48 AM",
          value: 4047,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "4:30 AM",
          value: 4186,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "10:44 PM",
          value: 4350,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "12:41 AM",
          value: 3057,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "7:16 PM",
          value: 524,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "9:47 AM",
          value: 2924,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "5:43 PM",
          value: 173,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "12:13 AM",
          value: 1244,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "2:07 AM",
          value: 631,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "7:37 AM",
          value: 2216,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "10:00 AM",
          value: 3112,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "11:21 PM",
          value: 4318,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "10:38 PM",
          value: 1788,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "2:36 PM",
          value: 4382,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "1:48 AM",
          value: 142,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "8:12 AM",
          value: 423,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "6:01 AM",
          value: 260,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "9:05 AM",
          value: 1327,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "1:41 AM",
          value: 1347,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "12:31 AM",
          value: 960,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "2:59 PM",
          value: 4989,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "9:43 AM",
          value: 2974,
          color: 'rgba(13,217,159,0.82)'
        },
      ]
    },
    graph2: {
      type: "radialBar",
      title: "Graph 2",
      data: [
        {
          time: "11:01 PM",
          value: 31.47,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "5:27 AM",
          value: 26.69,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "12:25 AM",
          value: 15.69,
          color: 'rgba(40,207,245,0.7)'
        },
        {
          time: "9:44 AM",
          value: 8.22,
          color: 'rgba(15,186,249,0.78)'
        },
        {
          time: "3:08 PM",
          value: 8.63,
          color: 'rgba(13,217,159,0.82)'
        },
        {
          time: "3:35 PM",
          value: 2.63,
          color: 'rgba(194,155,255,0.78)'
        },
      ]
    },
    graph3: {
      type: "radarChart",
      title: "Graph 3",
      data: [
        {
          time: "8:09 AM",
          A: 120,
          B: 110,
        },
        {
          time: "10:28 AM",
          A: 98,
          B: 130,
        },
        {
          time: "8:11 PM",
          A: 86,
          B: 130,
        },
        {
          time: "1:26 AM",
          A: 99,
          B: 100,
        },
        {
          time: "6:55 PM",
          A: 85,
          B: 90,
        },
        {
          time: "6:50 PM",
          A: 65,
          B: 85,
          // color: '#F4EF5C'
        },
      ]
    },
    graph4: {
      type: "area",
      title: "Graph 4",
      data: [
        {
          time: "8:54 PM",
          value: 1690
        },
        {
          time: "10:50 AM",
          value: 2876
        },
        {
          time: "2:22 AM",
          value: 2779
        },
        {
          time: "11:11 AM",
          value: 4147
        },
        {
          time: "5:23 PM",
          value: 3179
        },
        {
          time: "5:16 AM",
          value: 3543
        },
        {
          time: "2:02 PM",
          value: 1362
        },
        {
          time: "6:06 AM",
          value: 478
        },
        {
          time: "11:06 PM",
          value: 1243
        },
        {
          time: "4:53 PM",
          value: 464
        },
        {
          time: "5:50 PM",
          value: 3688
        },
        {
          time: "6:02 PM",
          value: 1044
        },
        {
          time: "1:00 AM",
          value: 1582
        },
        {
          time: "2:46 AM",
          value: 1990
        },
        {
          time: "2:42 PM",
          value: 4452
        },
        {
          time: "10:03 AM",
          value: 186
        },
        {
          time: "8:17 AM",
          value: 613
        },
        {
          time: "3:50 PM",
          value: 167
        },
        {
          time: "8:03 AM",
          value: 4581
        },
        {
          time: "8:09 PM",
          value: 3458
        }
      ]
    },
    graph5: {
      type: "scatterChart",
      title: "Graph 5",
      data: [
        {
          x: 100,
          y: 200,
          z: 200,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          x: 120, y: 100, z: 260,
          color: 'rgba(40,207,245,0.7)'
        },
        {
          x: 170, y: 300, z: 400, color: 'rgba(194,155,255,0.78)'
        },
        {
          x: 140, y: 250, z: 280, color: 'rgba(13,217,159,0.82)'
        },
        {
          x: 150, y: 400, z: 500,
          color: 'rgba(249,140,15,0.79)'
        },
        {
          x: 110, y: 280, z: 200,
          color: 'rgba(36,105,239,0.68)'
        }
      ]
    },
    graph6: {
      type: "pie",
      title: "Graph 6",
      data: [
        {
          time: "8:09 AM",
          value: 4408,
          color: 'rgba(59,71,241,0.76)'
        },
        {
          time: "10:28 AM",
          value: 3644,
          color: 'rgba(36,105,239,0.68)'
        },
        {
          time: "8:11 PM",
          value: 4861,
          color: 'rgba(40,207,245,0.7)'
        },
        {
          time: "1:26 AM",
          value: 2394,
          color: 'rgba(15,186,249,0.78)'
        },
        {
          time: "6:55 PM",
          value: 2937,
          color: 'rgba(13,217,159,0.82)'
        },
      ]
    },
    graph7: {
      type: "line",
      title: "Graph 7",
      data: [
        {
          time: "2:52 PM",
          value: 2262
        },
        {
          time: "1:39 PM",
          value: 4843
        },
        {
          time: "11:19 PM",
          value: 4611
        },
        {
          time: "2:08 PM",
          value: 4345
        },
        {
          time: "3:41 PM",
          value: 831
        },
        {
          time: "5:17 PM",
          value: 301
        },
        {
          time: "12:57 AM",
          value: 4583
        },
        {
          time: "3:01 PM",
          value: 3046
        },
        {
          time: "2:13 PM",
          value: 2290
        },
        {
          time: "4:49 PM",
          value: 1057
        },
        {
          time: "5:08 AM",
          value: 2263
        },
        {
          time: "4:11 PM",
          value: 783
        },
        {
          time: "11:24 AM",
          value: 477
        },
        {
          time: "11:11 AM",
          value: 701
        },
        {
          time: "10:12 AM",
          value: 3867
        },
        {
          time: "2:30 AM",
          value: 3013
        },
        {
          time: "11:34 PM",
          value: 3578
        },
        {
          time: "7:25 PM",
          value: 2078
        },
        {
          time: "5:03 AM",
          value: 4649
        },
        {
          time: "11:21 PM",
          value: 4262
        },
        {
          time: "1:17 PM",
          value: 4583
        },
        {
          time: "1:49 AM",
          value: 2856
        },
        {
          time: "4:07 PM",
          value: 290
        },
        {
          time: "3:49 AM",
          value: 1830
        },
        {
          time: "4:59 PM",
          value: 1907
        },
        {
          time: "7:45 AM",
          value: 982
        },
        {
          time: "7:10 PM",
          value: 993
        },
        {
          time: "7:35 AM",
          value: 1476
        },
        {
          time: "1:28 AM",
          value: 4153
        },
        {
          time: "10:00 AM",
          value: 1401
        },
        {
          time: "6:35 PM",
          value: 1841
        },
        {
          time: "1:48 PM",
          value: 4285
        },
        {
          time: "3:48 AM",
          value: 4013
        },
        {
          time: "6:36 AM",
          value: 3680
        },
        {
          time: "3:56 AM",
          value: 3649
        },
        {
          time: "8:08 AM",
          value: 2908
        },
        {
          time: "6:34 AM",
          value: 4972
        },
        {
          time: "2:24 AM",
          value: 3278
        },
        {
          time: "6:13 AM",
          value: 2608
        },
        {
          time: "4:16 AM",
          value: 630
        },
        {
          time: "11:56 PM",
          value: 1360
        },
        {
          time: "12:04 AM",
          value: 1715
        },
        {
          time: "12:05 PM",
          value: 3166
        },
        {
          time: "9:26 PM",
          value: 3279
        },
        {
          time: "8:33 AM",
          value: 3338
        }
      ]
    }
  },
  layouts: layoutConfig,
  // layouts: layoutConfigTest,
  chartLayout: chatsJSlayoutConfig,
  layoutTest: layoutConfigState,
  breakpoint: "lg",
  breakpoints: "lg"
};

export default initialState;
