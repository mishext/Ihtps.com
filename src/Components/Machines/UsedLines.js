const Br = "<br />";
const data = [
  {
    id: 0,
    endpoint: "Schmucker-TENAX-8-L-+-Bergami-AS200L–Powder-sachet-line",
    name: "Schmucker TENAX 8 L + Bergami AS200L – Powder sachet line",
    details: [
      {
        p1: "Automatic line with bagging and cartoning machine, powder products :",
        id: 0,
      },
      { p2: "1 Big Bag unloading station", id: 1 },
      { p2: "1 Container unloading station", id: 2 },
      { p2: "1 SCHMUCKER TENAX 8 L bagging machine", id: 3 },
      { p3: "* 8 tracks", id: 4 },
      { p3: "* Powder dosing", id: 5 },
      { p3: "* Single (mono) or double (duo) bag", id: 6 },
      { p3: "* Format width: 70 mmm (can be converted to 140 mm)", id: 7 },
      { p3: "* 4 welds", id: 8 },
      { p3: "* Equipped for aluminium bags with paper coating" },
      { p3: "* Output: 440 bags/min" },
      { p3: "1 bag to cartoner transfer unit" },
      { p2: "1 BERGAMI AS200L cartoner" },
      { p3: "* Flat carton feeding" },
      { p3: "* Glued flaps" },
      { p3: "* Bag feeding and leaflet insertion device" },
      { p3: "* Output: up to 90 cartons/min" },
      { p2: "Current bag dimensions :" },
      { p3: "* Single bag 70×125" },
      { p3: "* Single bag 70×100" },
      { p3: "* Double bag 70×122" },
    ],
    img: [
      require("../../Images/lines/schmucker/1.jpeg"),
      require("../../Images/lines/schmucker/2.jpeg"),
      require("../../Images/lines/schmucker/3.jpeg"),
      require("../../Images/lines/schmucker/4.jpeg"),
      require("../../Images/lines/schmucker/5.jpeg"),
      require("../../Images/lines/schmucker/6.jpeg"),
      require("../../Images/lines/schmucker/7.jpeg"),
      require("../../Images/lines/schmucker/8.jpeg"),
      require("../../Images/lines/schmucker/9.jpeg"),
      require("../../Images/lines/schmucker/10.jpeg"),
      require("../../Images/lines/schmucker/11.jpeg"),
      require("../../Images/lines/schmucker/12.jpeg"),
      require("../../Images/lines/schmucker/13.jpeg"),
      require("../../Images/lines/schmucker/14.jpeg"),
      require("../../Images/lines/schmucker/15.jpeg"),
      require("../../Images/lines/schmucker/16.jpeg"),
      require("../../Images/lines/schmucker/17.jpeg"),
      require("../../Images/lines/schmucker/18.jpeg"),
      require("../../Images/lines/schmucker/19.jpeg"),
      require("../../Images/lines/schmucker/20.jpeg"),
      require("../../Images/lines/schmucker/1.jpeg"),
    ],
    // manufacturer: "Siemens S5",
    // model: "Siemens S5",
    // year: "2004",
    // location: "Germany",
  },
  {
    id: 1,
    name: "A2TI – Cans packaging line",
    endpoint: "A2TI–Cans-packaging-line",
    details: [
      { p2: "Can filling and sealing line with :" },
      { p3: "* A turntable to position preforms of cans" },
      { p3: "* Conveyors" },
      { p3: "* A linear filler" },
      { p3: "* A can sealing machine" },
      { p3: "* An electrical cabinet" },
      { p3: "* Capacity: approx 65 units / minute" },
      { p2: "Linear filler :" },

      { p3: "* Make and model : A2TI 3D/RF/" },
      { p3: "* Year : 2001" },
      { p3: "* 4 filling heads" },
      { p3: "* Liquid storage hopper" },

      { p2: "Can seamer :" },
      { p3: "Make and model : A2TI F60" },
      { p3: "* Year: 2001" },
      { p3: "* Current size: Diameter 45 x 108 mm" },
      { p3: "* Adjustable head height position" },
    ],
    img: [
      require("../../Images/lines/cans/1.jpeg"),
      require("../../Images/lines/cans/2.jpeg"),
      require("../../Images/lines/cans/3.jpeg"),
      require("../../Images/lines/cans/4.jpeg"),
      require("../../Images/lines/cans/5.jpeg"),
      require("../../Images/lines/cans/6.jpeg"),
      require("../../Images/lines/cans/7.jpeg"),
      require("../../Images/lines/cans/8.jpeg"),
      require("../../Images/lines/cans/9.jpeg"),
      require("../../Images/lines/cans/10.jpeg"),
      require("../../Images/lines/cans/11.jpeg"),
    ],
  },
  {
    id: 2,
    name: "ERCA – RK3 / Yogurt packaging machine",
    endpoint: "ERCA–RK3-Yogurt-packaging-machine",
    details: [
      { p3: "Forming, filling and sealing machine for yoghurt cups." },
      {
        p3: "Original ERCA packaging machine (FFS – forming, filling, sealing) type RK3.",
      },
      { p3: "This machine was reconditioned in 1998 by the company CMA." },
      { p3: "Nominal output: 21,000 pots per hour." },
      { p3: "It is equipped with a decoration unit." },
      {
        p3: "A cutting tool for standard 63×63 mm cups with two formats X4 and X6.",
      },
      { p3: "Heating is by radiation." },
      { p3: "The automaton is a series 7 from Schneider." },
      { p3: "Out of production : 2017" },
      { p3: "The machine is complete and in good condition." },
    ],
    img: [
      require("../../Images/lines/yogurt/1.jpg"),
      require("../../Images/lines/yogurt/2.jpg"),
      require("../../Images/lines/yogurt/3.jpg"),
    ],
  },
  {
    id: 3,
    name: "Pharmaceutical bottle filling / packaging line",
    endpoint: "Pharmaceutical-bottle-filling-packaging-line",
    details: [
      {
        p1: "Complete line for bottles composed of : Depalletizer, unpacker, bottle blower, filler- screw capper, cartoner, carton labeller, case packer and palletizer.",
      },
      {
        p2: "Equipment out of production in 2020",
      },
      { p2: "Documentation available + lots of spare parts for each machine." },
      { p2: "Capacity :" },
      { p3: "* 6000 bottles/hour in 370 ml" },
      {
        p3: "* 7500 bottles/hour in 200 ml.",
      },
      { p2: "Complete line for bottles composed of the following elements:" },
      { p3: "* PRB Depalletiser – Destratus" },
      { p3: "* R99214" },
      { p3: "* Year: 2004" },
      { p3: "* Installation of PRB in 2004" },
      { p2: "Depacker / Accumulation table St Gobain Debalpack 800" },
      { p3: "* Year: 1986" },
      { p3: "* IMA Mystral – Bottle Blower" },
      { p3: "* Y16 LB3023" },
      { p3: "* Year: 2009" },
      { p2: "Monoblock filling / sealing bottles: IMA Farmomac F370 18VL 8C" },
      { p3: "* Filler + screw capper / sealer" },
      { p3: "* 3700026" },
      { p3: "* Year: 1987" },
      { p3: "* Refurbished in 2004" },
      { p2: "Cartoning machine CAM HF 77-8" },
      { p3: "* Leaflet insertion" },
      { p3: "* C12031" },
      { p3: "* Refurbished in 2004" },
      { p2: "SFE carton labeller" },
      { p3: "* PRB Newpocket case packer" },
      { p3: "* 931004" },
      { p3: "* Year: 1993" },
      { p3: "* Updated and Refurbished by PRB in 2009" },
      { p2: "Batteries of PLCs recently changed. Monitoring table available." },
    ],
    img: [
      require("../../Images/lines/pharm/1.jpg"),
      require("../../Images/lines/pharm/2.jpg"),
      require("../../Images/lines/pharm/3.jpg"),
      require("../../Images/lines/pharm/4.jpg"),
      require("../../Images/lines/pharm/5.jpg"),
      require("../../Images/lines/pharm/6.jpg"),
      require("../../Images/lines/pharm/7.jpg"),
      require("../../Images/lines/pharm/8.jpg"),
      require("../../Images/lines/pharm/9.jpg"),
      require("../../Images/lines/pharm/10.jpg"),
      require("../../Images/lines/pharm/11.jpg"),
      require("../../Images/lines/pharm/12.jpg"),
      require("../../Images/lines/pharm/13.jpg"),
      require("../../Images/lines/pharm/14.jpg"),
      require("../../Images/lines/pharm/15.jpg"),
    ],
  },
  {
    id: 4,
    name: "Combibloc – CF 510 (Brick/carton FS machine)",
    endpoint: "Combibloc–CF-510--Brick-carton-FS-machine",
    details: [
      {
        p1: "Fill and Sealing machine used in the process of packaging liquid product (Milk, Juices, Water) in cartons / bricks.",
      },
      {
        p3: "* CF 510 COMBIBLOC Unit.",
      },
      { p3: "* Format: 1L standard." },
      { p3: "* Max capacity: 10,000 L / H" },
      { p3: "* Production output: Year 2019." },
      {
        p3: "* CONDIFILM X6 Conveyor and Bundler.",
      },
    ],
    img: [
      require("../../Images/lines/brick/1.jpg"),
      require("../../Images/lines/brick/2.jpg"),
      require("../../Images/lines/brick/3.jpg"),
      require("../../Images/lines/brick/4.jpg"),
      require("../../Images/lines/brick/5.jpg"),
      require("../../Images/lines/brick/6.jpg"),
      require("../../Images/lines/brick/7.jpg"),
      require("../../Images/lines/brick/8.jpg"),
      require("../../Images/lines/brick/9.jpg"),
      require("../../Images/lines/brick/10.jpg"),
      require("../../Images/lines/brick/11.jpg"),
      require("../../Images/lines/brick/12.jpg"),
      require("../../Images/lines/brick/13.jpg"),
      require("../../Images/lines/brick/14.jpg"),
      require("../../Images/lines/brick/15.jpg"),
    ],
  },
  {
    id: 5,
    name: "Farcon – FC420 Thermoformer / Blister machine",
    endpoint: "Farcon–FC420-Thermoformer-Blister-machine",
    details: [
      {
        p2: "– Possibility to use for blisters",
      },
      {
        p2: "– Little used < 4,000 hours",
      },
      { p2: "– Thermoforming machine for vials and ampoules" },
      {
        p2: "– 2 side feed units (vials and ampoules) and filling in the cells",
      },
      { p2: "– Technical data available" },
      {
        p2: "– Max. forming area: pitch 220 mm x width 320 mm",
      },
      {
        p2: "– Max. forming depth: 42 mm",
      },
      {
        p2: "– Current forming materials pvc/pet 350 µm",
      },
      {
        p2: "– Mechanical speed : 10 to 50 cycles/mn",
      },
      {
        p2: "– Electric connection: 15 kva 400v 3/n/50hz",
      },
      {
        p2: "– Pneumatic connection: 800 nl/h",
      },
      {
        p2: "– Overall dimensions: 7000 mm x 3500 mm",
      },
    ],
    img: [
      require("../../Images/lines/blister/1.jpg"),
      require("../../Images/lines/blister/2.jpg"),
      require("../../Images/lines/blister/3.jpg"),
      require("../../Images/lines/blister/4.jpg"),
      require("../../Images/lines/blister/5.jpg"),
      require("../../Images/lines/blister/6.jpg"),
      require("../../Images/lines/blister/7.jpg"),
      require("../../Images/lines/blister/8.jpg"),
      require("../../Images/lines/blister/9.jpg"),
      require("../../Images/lines/blister/10.jpg"),
    ],
  },
  {
    id: 6,
    name: "Göcmen Semi-automatic wafer processing line ",
    endpoint: "Used-Göcmen-Semi-automatic-wafer-processing-line",
    details: [
      {
        p1: "- Manufacturer: Göcmen, the company provides turnkey delivery solutions to the purchaser regarding solutions to the purchaser regarding full automatic wafer production & chocolate production lines.",
      },
      {
        p2: "Wafer cakes production line:(dimensions: 425 cm L, 90 cm W, 185 cm H)",
      },
      { p2: "1) Wafer Mixer" },
      {
        p3: "* Capacity: 300 kg",
      },
      { p3: "* Dimensions: 315 cm L, 165 cm H, 195 cm W" },
      {
        p3: "* Dimensions of bowl: 100 cm W, 78 cm L, 78 cm Depth",
      },
      {
        p3: "* Power: 11 kW",
      },
      {
        p3: "* Heating",
      },
      {
        p3: "* Double Layer",
      },

      {
        p2: "2) Wafer Spreading Machine",
      },
      {
        p3: "* Pump from Mixer transports fill into the tank",
      },
      {
        p3: "* Fill from tank is spreaded on wafers by roller.",
      },
      {
        p3: "* Wafers needs to be placed manually. You can choose how thick and how many layers you want on sheets (max 3).",
      },
      {
        p3: "* Conveyor transports wafer sheets with fill to the second roller.",
      },
      {
        p2: "3) Wafer Cutting Machine",
      },
      {
        p3: "* Machine cuts wafers into smaller pieces than distributes it with conveyor.",
      },
      {
        p3: "* Workers pick wafer cakes manually, place it in plastic containers and send it in packing machine.",
      },

      {
        p2: "4) Reepack (Italian manufacturer)",
      },
      {
        p3: "* Packing machine",
      },
      {
        p3: "* Line is in good condition and still operating and can be seen for inspection.",
      },
    ],
    img: [
      require("../../Images/lines/wafer/1.jpeg"),
      require("../../Images/lines/wafer/2.jpeg"),
      require("../../Images/lines/wafer/3.jpeg"),
      require("../../Images/lines/wafer/4.jpeg"),
      require("../../Images/lines/wafer/5.jpg"),
      require("../../Images/lines/wafer/6.jpeg"),
      require("../../Images/lines/wafer/7.jpeg"),
      require("../../Images/lines/wafer/8.jpeg"),
      require("../../Images/lines/wafer/9.jpeg"),
      require("../../Images/lines/wafer/10.jpeg"),
      require("../../Images/lines/wafer/11.jpeg"),
      require("../../Images/lines/wafer/12.jpeg"),
      require("../../Images/lines/wafer/13.jpeg"),
      require("../../Images/lines/wafer/14.jpeg"),
      require("../../Images/lines/wafer/15.jpeg"),
      require("../../Images/lines/wafer/16.jpeg"),
      require("../../Images/lines/wafer/17.jpeg"),
      require("../../Images/lines/wafer/18.jpeg"),
    ],
  },
  {
    id: 7,
    name: " Ekoroast Nut Roasting Machine(EKO 300)",
    endpoint: "Ekoroast-Nut-Roasting-Machine-EKO-300",
    details: [
      {
        p2: "EKO 300 can roast all kinds of nuts and kernels such as (peanuts, almonds, hazelnuts, sunflower seeds, pumpkin seeds.)",
      },
      {
        p2: "What makes our ovens better is by using hot air circulation we can adjust each room with different temperature so that we obtain a nice flavor,taste and color with the nuts.",
      },
    ],
    img: [require("../../Images/lines/roast/1.jpg")],
  },
];

export default data;
