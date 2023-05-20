// poudarek na Slikarjih in ne na obdobjih, v katerih so slikali.
// Iz vsake države, ki jo ponuja WikiArt

export const globe = {
  night: {
    globeImage: "//unpkg.com/three-globe/example/img/earth-night.jpg",
    backgroundImage: "//unpkg.com/three-globe/example/img/night-sky.png",
    bumpMap: "//unpkg.com/three-globe/example/img/earth-topology.png"
  },
  day: {
    globeImage: "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
    backgroundImage: "//unpkg.com/three-globe/example/img/night-sky.png",
    bumpMap: "//unpkg.com/three-globe/example/img/earth-topology.png"
  }
};

/* Colors for continent color coding the labels - chosen with coolors */
const pink = "rgba(255, 153, 200, 0.9)";
const yellow = "rgba(252, 246, 189, 0.9)";
const green = "rgba(150, 244, 150, 0.9)";
const blue = "rgba(169, 222, 249, 0.9)";
const purple = "rgba(228, 193, 249, 0.9)";

const EU = yellow;

const ASIA = pink;
const RUSSIA = green;
const MIDDLE_EAST = purple;

const AFRICA = blue;

const AUSTRALIA = yellow;

const NORTH_AMERICA = green;
const SOUTH_AMERICA = purple;
const CENTRAL_AMERICA = yellow;

export const DATA = [
  /* ---------- EUROPE ---------- */
  {
    name: "dmitry-levitzky",
    color: EU,
    lat: 59.9343,
    lng: 30.3351,
    text: "Enlightenment"
  },
  {
    name: "wilhelm-kotarbinski",
    color: EU,
    lat: 50.0614,
    lng: 19.9372,
    text: "Realism"
  },
  {
    name: "kazimir-malevich",
    color: EU,
    lat: 52.0942,
    lng: 23.6844,
    text: "Suprematism"
  },
  {
    name: "hans-holbein-the-younger",
    color: EU,
    lat: 47.554,
    lng: 7.589,
    text: "Northern Renaissance"
  },
  {
    name: "caspar-david-friedrich",
    color: EU,
    lat: 53.9,
    lng: 10.356,
    text: "Romanticism"
  },
  {
    name: "philipp-otto-runge",
    color: EU,
    lat: 53.0,
    lng: 9.8,
    text: "Romanticism"
  },
  {
    name: "max-liebermann",
    color: EU,
    lat: 52.509,
    lng: 13.376,
    text: "Impressionism"
  },
  {
    name: "paul-klee",
    color: EU,
    lat: 48.7,
    lng: 7.659,
    text: "Expressionism"
  },
  {
    name: "ernst-ludwig-kirchner",
    color: EU,
    lat: 51.259,
    lng: 14.792,
    text: "Expressionism"
  },
  {
    name: "otto-dix",
    color: EU,
    lat: 49.028,
    lng: 13.5,
    text: "Expressionism"
  },
  {
    name: "georg-baselitz",
    color: EU,
    lat: 51.9,
    lng: 18.0,
    text: "Neo-Expressionism"
  },
  {
    name: "anselm-kiefer",
    color: EU,
    lat: 50.5,
    lng: 12.0,
    text: "Neo-Expressionism"
  },
  {
    name: "omer-mujadzic",
    color: EU,
    lat: 45.14484,
    lng: 17.25453,
    text: "Poster"
  },
  {
    name: "branko-bacanovic-bambi",
    color: EU,
    lat: 43.84864,
    lng: 18.35644,
    text: "Poster"
  },
  {
    name: "john-constable",
    color: EU,
    lat: 52.5,
    lng: 0.4974,
    text: "Romanticism"
  },
  {
    name: "francis-bacon",
    color: EU,
    lat: 53.3498,
    lng: -6.2603,
    text: "Surrealism"
  },
  {
    name: "lucian-freud",
    color: EU,
    lat: 51.5074,
    lng: -0.6,
    text: "Realism"
  },
  {
    name: "william-turnbull",
    color: EU,
    lat: 55.9533,
    lng: -3.1883,
    text: "Abstract art"
  },
  {
    name: "vilhelm-hammershoi",
    color: EU,
    lat: 55.6761,
    lng: 12.5683,
    text: "Realism"
  },
  {
    name: "anders-zorn",
    color: EU,
    lat: 60.2,
    lng: 14.8,
    text: "Realism"
  },
  {
    name: "nikolaos-gyzis",
    color: EU,
    lat: 37.613333,
    lng: 25.139167,
    text: "Romanticism, Realism"
  },
  {
    name: "albrecht-durer",
    color: EU,
    lat: 49.453889,
    lng: 11.0775,
    text: "Northern Renaissance"
  },
  {
    name: "leonardo-da-vinci",
    color: EU,
    lat: 43.8,
    lng: 10.9393,
    text: "High Renaissance"
  },
  {
    name: "vincent-van-gogh",
    color: EU,
    lat: 51.4707,
    lng: 4.6624,
    text: "Post-Impressionism"
  },
  {
    name: "theodor-severin-kittelsen",
    color: EU,
    lat: 58.8693,
    lng: 9.41494,
    text: "Neo-romanticism"
  },
  {
    name: "salvador-dali",
    color: EU,
    lat: 42.266667,
    lng: 2.965,
    text: "Surrealism"
  },
  {
    name: "robert-delaunay",
    color: EU,
    lat: 48.856667,
    lng: 2.7,
    text: "Orphism"
  },
  {
    name: "pablo-picasso",
    color: EU,
    lat: 43.554142,
    lng: 5.604438,
    text: "Cubism, Surrealism, Post-Impressionism"
  },
  {
    name: "antoine-watteau",
    color: EU,
    lat: 50.358056,
    lng: 3.523333,
    text: "Rococo"
  },
  {
    name: "edvard-munch",
    color: EU,
    lat: 60.79653,
    lng: 11.30883,
    text: "Symbolism, Expressionism"
  },
  {
    name: "gazmend-freitag",
    color: EU,
    lat: 42.660278,
    lng: 20.291667,
    text: "Figurative"
  },
  {
    name: "claude-monet",
    color: EU,
    lat: 49.2,
    lng: 1.0,
    text: "Impressionism"
  },
  {
    name: "diego-velazquez",
    color: EU,
    lat: 37.3890924,
    lng: -5.9844589,
    text: "Baroque"
  },
  {
    name: "edvard-munch",
    color: EU,
    lat: 59.9138688,
    lng: 10.7522454,
    text: "Expressionism"
  },
  {
    name: "johannes-sveinsson-kjarval",
    color: EU,
    lat: 64.1546567,
    lng: -21.9510642,
    text: "Expressionism"
  },
  {
    name: "asgrimur-jonsson",
    color: EU,
    lat: 64.890845,
    lng: -23.711304,
    text: "Naturalism"
  },

  /* ---------- AFRICA ---------- */
  {
    name: "mahmoud-saiid",
    color: AFRICA,
    lat: 26.8357675,
    lng: 30.7956597,
    text: "Expressionism"
  },
  {
    name: "el-anatsui",
    color: AFRICA,
    lat: 6.7048,
    lng: 0.6143,
    text: "Contemporary Art, Abstract Art"
  },
  {
    name: "lalla-essaydi",
    color: AFRICA,
    lat: 35.0129,
    lng: -1.8343,
    text: "Contemporary"
  },
  {
    name: "chaibia-talal",
    color: AFRICA,
    lat: 33.589886,
    lng: -7.603869,
    text: "Naive art"
  },
  {
    name: "achraf-baznani",
    color: AFRICA,
    lat: 35.433333,
    lng: -5.283333,
    text: "Surrealism"
  },

  /* ---------- NOTRH AMERICA ---------- */

  {
    name: "paul-revere",
    color: NORTH_AMERICA,
    lat: 42.365,
    lng: -71.054444,
    text: "Rococo"
  },
  {
    name: "benjamin-west",
    color: NORTH_AMERICA,
    lat: 39.933333,
    lng: -75.333056,
    text: "Rococo"
  },
  {
    name: "andy-warhol",
    color: NORTH_AMERICA,
    lat: 40.439722,
    lng: -79.976389,
    text: "Pop Art"
  },

  /* ---------- ASIA ----------- */
  {
    name: "leo-valledor",
    color: ASIA,
    lat: 14.9081,
    lng: 120.7156,
    text: "Abstract"
  },
  {
    name: "yayoi-kusama",
    color: ASIA,
    lat: 35.424354,
    lng: 139.451888,
    text: "Contemporary art, Pop art"
  },
  {
    name: "fu-baoshi",
    color: ASIA,
    lat: 30.256244,
    lng: 120.163982,
    text: "Modern Chinese painting"
  },
  {
    name: "tang-yin",
    color: ASIA,
    lat: 36.68999724,
    lng: 114.191165902,
    text: "Ming Dynasty"
  },
  {
    name: "zaya",
    color: ASIA,
    lat: 47.9212,
    lng: 106.9186,
    text: "Contemporary"
  },

  /* ---------- MIDDLE-EAST ---------- */
  {
    name: "niko-pirosmani",
    color: MIDDLE_EAST,
    lat: 41.564,
    lng: 45.969,
    text: "Primitivism, Avant-garde"
  },
  {
    name: "hossein-behzad",
    color: MIDDLE_EAST,
    lat: 35.6892,
    lng: 51.389,
    text: "Miniature painting"
  },
  {
    name: "bahman-mohasses",
    color: MIDDLE_EAST,
    lat: 35.6892,
    lng: 45.389,
    text: "Expressionism"
  },
  {
    name: "avigdor-arikha",
    color: MIDDLE_EAST,
    lat: 32.0809,
    lng: 34.7806,
    text: "Figurative art"
  },
  {
    name: "abidin-dino",
    color: MIDDLE_EAST,
    lat: 40.9869,
    lng: 27.5136,
    text: "Socialist Realism"
  },
  {
    name: "mustafa-duzgunman",
    color: MIDDLE_EAST,
    lat: 39.9156,
    lng: 32.8669,
    text: "Expressionism"
  },

  /* ---------- RUSSIA ---------- */
  {
    name: "arkhip-kuindzhi",
    color: RUSSIA,
    lat: 47.095833,
    lng: 37.549444,
    text: "Realism, Impressionism"
  },
  {
    name: "ivan-aivazovsky",
    color: RUSSIA,
    lat: 44.6166,
    lng: 33.5254,
    text: "Romanticism"
  },
  {
    name: "kazimir-malevich",
    color: RUSSIA,
    lat: 51.8406,
    lng: 34.3142,
    text: "Suprematism"
  },
  {
    name: "marc-chagall",
    color: RUSSIA,
    lat: 53.9006,
    lng: 30.3311,
    text: "Surrealism"
  },
  {
    name: "ilya-repin",
    color: RUSSIA,
    lat: 56.2267,
    lng: 32.7736,
    text: "Realism"
  },
  {
    name: "mikhail-vrubel",
    color: RUSSIA,
    lat: 51.7768,
    lng: 55.1125,
    text: "Symbolism"
  },
  {
    name: "karl-bryullov",
    color: RUSSIA,
    lat: 54.3142,
    lng: 48.4022,
    text: "Romanticism"
  },
  {
    name: "vasily-surikov",
    color: ASIA,
    lat: 64.5479,
    lng: 143.2265,
    text: "Realism"
  },
  {
    name: "ivan-shishkin",
    color: RUSSIA,
    lat: 58.6035,
    lng: 49.6675,
    text: "Realism"
  },
  {
    name: "natalia-goncharova",
    color: RUSSIA,
    lat: 55.7522,
    lng: 37.6155,
    text: "Futurism"
  },
  {
    name: "kazimir-malevich",
    color: RUSSIA,
    lat: 51.5,
    lng: 31.3,
    text: "Suprematism"
  },

  /* ---------- AUSTRALIA ---------- */
  {
    name: "george-washington-lambert",
    color: AUSTRALIA,
    lat: -34.016667,
    lng: 150.683333,
    text: "Symbolism"
  },
  {
    name: "emily-kame-kngwarreye",
    color: AUSTRALIA,
    lat: -23.7,
    lng: 133.87,
    text: "Native Art"
  },
  {
    name: "clifford-possum-tjapaltjarri",
    color: AUSTRALIA,
    lat: -20.0,
    lng: 133,
    text: "Native Art"
  },
  {
    name: "dorrit-black",
    color: AUSTRALIA,
    lat: -34.9333296,
    lng: 138.666664,
    text: "Cubism, Modernism"
  },

  /* ---------- CENTRAL-AMERICA ---------- */
  {
    name: "jose-maria-velasco",
    color: CENTRAL_AMERICA,
    lat: 25.427,
    lng: -99.1276,
    text: "Mexican landscape painting"
  },
  {
    name: "jose-guadalupe-posada",
    color: CENTRAL_AMERICA,
    lat: 21.8818,
    lng: -102.291,
    text: "Printmaking"
  },
  {
    name: "diego-rivera",
    color: CENTRAL_AMERICA,
    lat: 22.427,
    lng: -99.1276,
    text: "Muralism"
  },
  {
    name: "frida-kahlo",
    color: CENTRAL_AMERICA,
    lat: 19.4326,
    lng: -99.1332,
    text: "Surrealism"
  },

  /* ---------- SOUTH-AMERICA ---------- */
  {
    name: "roberto-matta",
    color: SOUTH_AMERICA,
    lat: -33.0458,
    lng: -71.6204,
    text: "Surrealism"
  },
  {
    name: "claudio-bravo",
    color: SOUTH_AMERICA,
    lat: -20.4691,
    lng: -69.6419,
    text: "Hyperrealism"
  },
  {
    name: "ivan-grohar",
    color: EU,
    lat: 46.24472,
    lng: 14.355,
    text: "Impressionism"
  },
  {
    name: "antonio-berni",
    color: SOUTH_AMERICA,
    lat: -33.3055,
    lng: -60.2195,
    text: "Social Realism"
  },
  {
    name: "leon-ferrari",
    color: SOUTH_AMERICA,
    lat: -26.5967,
    lng: -58.3833,
    text: "Modern Art"
  },
  {
    name: "horacio-garcia-rossi",
    color: SOUTH_AMERICA,
    lat: -38.5875,
    lng: -60.4064,
    text: "Concrete Art"
  },
  {
    name: "raja-ravi-varma",
    color: ASIA,
    lat: 8.5073,
    lng: 76.952,
    text: "Indian Realism"
  },
  {
    name: "pushpamala-n",
    color: ASIA,
    lat: 12.9716,
    lng: 77.5946,
    text: "Contemporary Art"
  },
  {
    name: "sonaly-gandhi",
    color: ASIA,
    lat: 28.7041,
    lng: 77.1025,
    text: "Contemporary Art"
  },
  {
    name: "fernando-botero",
    color: SOUTH_AMERICA,
    lat: 6.2442,
    lng: -75.5812,
    text: "Figurative Art"
  },
  {
    name: "barrington-watson",
    color: CENTRAL_AMERICA,
    lat: 18.0213,
    lng: -76.8165,
    text: "Realism"
  },
  {
    name: "houria-niati",
    color: AFRICA,
    lat: 36.7663848,
    lng: 3.0538534,
    text: "Contemporary Art"
  },
  {
    name: "manuela-sambo",
    color: AFRICA,
    lat: -8.8447445,
    lng: 13.2348817,
    text: "Contemporary Art"
  },
  {
    name: "asher-brown-durand",
    color: NORTH_AMERICA,
    lat: 41.324052,
    lng: -90.4986195,
    text: "Hudson River School"
  },
  {
    name: "eastman-johnson",
    color: NORTH_AMERICA,
    lat: 41.3005423,
    lng: -120.9352594,
    text: "Realism"
  },
  {
    name: "thomas-hill",
    color: NORTH_AMERICA,
    lat: 30.270959,
    lng: -100.094752,
    text: "Hudson River School"
  },
  {
    name: "thomas-moran",
    color: NORTH_AMERICA,
    lat: 51.509865,
    lng: -90.118092,
    text: "Hudson River School"
  },
  {
    name: "thomas-eakins",
    color: NORTH_AMERICA,
    lat: 35.9509005,
    lng: -88.1574569,
    text: "Realism"
  },
  {
    name: "louis-comfort-tiffany",
    color: NORTH_AMERICA,
    lat: 30.7642382,
    lng: -82.9731683,
    text: "Art Nouveau"
  },
  {
    name: "alfredo-andersen",
    color: SOUTH_AMERICA,
    lat: -25.4284,
    lng: -49.2733,
    text: "Naturalism"
  },
  {
    name: "tarsila-do-amaral",
    color: SOUTH_AMERICA,
    lat: -23.5393,
    lng: -46.6328,
    text: "Anthropophagy"
  },
  {
    name: "jose-pancetti",
    color: SOUTH_AMERICA,
    lat: -4.5505,
    lng: -38.6333,
    text: "Modernism"
  },
  {
    name: "ivan-serpa",
    color: SOUTH_AMERICA,
    lat: -16.9036,
    lng: -40.2096,
    text: "Concrete Art"
  },
  {
    name: "zainul-abedin",
    color: ASIA,
    lat: 24.3636,
    lng: 88.6241,
    text: "Bengal School of Art"
  },
  {
    name: "paul-kane",
    color: NORTH_AMERICA,
    lat: 53.5461,
    lng: -113.4938,
    text: "Romanticism"
  },
  {
    name: "ernest-lawson",
    color: NORTH_AMERICA,
    lat: 50.4442,
    lng: -73.1149,
    text: "American Impressionism"
  },
  {
    name: "miriam-schapiro",
    color: NORTH_AMERICA,
    lat: 45.7039,
    lng: -72.2887,
    text: "Feminist Art"
  },
  {
    name: "santiago-rusinol",
    color: EU,
    lat: 41.3888,
    lng: 1.159,
    text: "Modernisme"
  },
  {
    name: "jimenez-deredia",
    color: CENTRAL_AMERICA,
    lat: 9.9281,
    lng: -84.0907,
    text: "Abstract Sculpture"
  },
  {
    name: "wifredo-lam",
    color: CENTRAL_AMERICA,
    lat: 20.938638,
    lng: -77.783048,
    text: "Cubism, Surrealism"
  },
  {
    name: "sandu-darie",
    color: EU,
    lat: 45.749262,
    lng: 21.228613,
    text: "Kinetic art"
  },
  {
    name: "shitao",
    color: ASIA,
    lat: 33.303564,
    lng: 120.602124,
    text: "Chinese painting"
  },
  {
    name: "victo-ngai",
    color: ASIA,
    lat: 22.396428,
    lng: 114.109497,
    text: "Contemporary illustration"
  },
  {
    name: "chang-dai-chien",
    color: ASIA,
    lat: 28.70533,
    lng: 116.001289,
    text: "Chinese painting, Contemporary art"
  },
  {
    name: "abdul-qader-al-raes",
    color: MIDDLE_EAST,
    lat: 33.9539,
    lng: 36.0106,
    text: "Arab Expressionism"
  },
  {
    name: "julie-mehretu",
    color: NORTH_AMERICA,
    lat: 34.0054,
    lng: -118.4108,
    text: "Abstract art"
  },
  {
    name: "gebre-kristos-desta",
    color: AFRICA,
    lat: 9.0227,
    lng: 38.7469,
    text: "Ethiopian Modernism"
  },
  {
    name: "vicente-manansala",
    color: ASIA,
    lat: 10.5836,
    lng: 123.0566,
    text: "Cubism"
  },
  {
    name: "frank-bowling",
    color: SOUTH_AMERICA,
    lat: 6.8206,
    lng: -58.1548,
    text: "Abstract expressionism"
  },
  {
    name: "basuki-abdullah",
    color: ASIA,
    lat: -7.7971,
    lng: 110.3706,
    text: "Realism"
  },
  {
    name: "ohara-koson",
    color: ASIA,
    lat: 37.7069,
    lng: 140.7345,
    text: "Shin-hanga"
  },
  {
    name: "rosemary-karuga",
    color: AFRICA,
    lat: -1.2833,
    lng: 36.8167,
    text: "Expressionism"
  },
  {
    name: "mario-schifano",
    color: EU,
    lat: 41.9028,
    lng: 12.4964,
    text: "Pop art"
  },
  {
    name: "ali-omar-ermes",
    color: AFRICA,
    lat: 32.881389,
    lng: 13.189722,
    text: "Islamic calligraphy"
  },
  {
    name: "john-muafangejo",
    color: AFRICA,
    lat: -22.563235,
    lng: 17.088135,
    text: "Linocut printing"
  },
  {
    name: "rita-angus",
    color: AUSTRALIA,
    lat: -41.302836,
    lng: 174.782203,
    text: "Regionalism"
  },
  {
    name: "frances-hodgkins",
    color: AUSTRALIA,
    lat: -36.874167,
    lng: 174.738889,
    text: "Modernism"
  },
  {
    name: "twins-seven-seven",
    color: AFRICA,
    lat: 3.190708,
    lng: 10.919732,
    text: "Contemporary African art"
  },
  {
    name: "yinka-shonibare",
    color: AFRICA,
    lat: 6.465422,
    lng: 3.406448,
    text: "Postcolonial art"
  },
  {
    name: "njideka-akunyili-crosby",
    color: AFRICA,
    lat: 5.437278,
    lng: 7.421474,
    text: "Contemporary art"
  },
  {
    name: "sun-mu",
    color: ASIA,
    lat: 37.534444,
    lng: 126.993889,
    text: "Political pop"
  },
  {
    name: "graca-morais",
    color: EU,
    lat: 40.633333,
    lng: -7.683333,
    text: "Neo-expressionism"
  },
  {
    name: "m-f-husain",
    color: ASIA,
    lat: 19.076,
    lng: 72.8777,
    text: "Indian modernism"
  },
  {
    name: "reem-al-faisal",
    color: MIDDLE_EAST,
    lat: 24.634536,
    lng: 46.714968,
    text: "Contemporary Art"
  },
  {
    name: "zahrah-al-ghamdi",
    color: MIDDLE_EAST,
    lat: 18.878501,
    lng: 42.960376,
    text: "Contemporary Art"
  },
  {
    name: "maggie-laubser",
    color: AFRICA,
    lat: -33.644181,
    lng: 19.447471,
    text: "Expressionism"
  },
  {
    name: "gregoire-boonzaier",
    color: AFRICA,
    lat: -33.92584,
    lng: 24.42322,
    text: "Modern Art"
  },
  {
    name: "george-pemba",
    color: AFRICA,
    lat: -33.02,
    lng: 27.91,
    text: "Realism"
  },
  {
    name: "lee-ufan",
    color: ASIA,
    lat: 35.350319,
    lng: 127.220388,
    text: "Mono-ha"
  },
  {
    name: "ibrahim-salahi",
    color: AFRICA,
    lat: 14.054759,
    lng: 32.465708,
    text: "African Modernism"
  },
  {
    name: "louay-kayyali",
    color: MIDDLE_EAST,
    lat: 35.936285,
    lng: 36.640773,
    text: "Social Realism"
  },
  {
    name: "vasan-sitthiket",
    color: ASIA,
    lat: 15.444126,
    lng: 101.029032,
    text: "Political Pop Art"
  },
  {
    name: "sami-gattoufi",
    color: AFRICA,
    lat: 35.830501,
    lng: 10.602117,
    text: "Contemporary Art"
  },
  {
    name: "gego",
    color: SOUTH_AMERICA,
    lat: 10.453897,
    lng: -66.853956,
    text: "Kinetic Art"
  },
  {
    name: "le-pho",
    color: ASIA,
    lat: 20.9368,
    lng: 105.8172,
    text: "École de Paris"
  }
];
