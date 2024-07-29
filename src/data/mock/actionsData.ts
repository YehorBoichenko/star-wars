export const mockGetCharactersData = {
  count: 2,
  next: 'https://sw-api.starnavi.io/people/?page=2',
  previous: null,
  results: [
    {
      id: 10,
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 20,
      films: [1, 2, 3, 4, 5, 6],
      species: [1],
      vehicles: [38],
      starships: [48, 59, 64, 65, 74],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'https://sw-api.starnavi.io/people/10/',
    },
    {
      id: 12,
      name: 'Wilhuff Tarkin',
      height: '180',
      mass: 'unknown',
      hair_color: 'auburn, grey',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '64BBY',
      gender: 'male',
      homeworld: 21,
      films: [1, 6],
      species: [1],
      vehicles: [],
      starships: [],
      created: '2014-12-10T16:26:56.138000Z',
      edited: '2014-12-20T21:17:50.330000Z',
      url: 'https://sw-api.starnavi.io/people/12/',
    },
  ],
};

export const mockGetCharacterData = {
"id": 9,
    "name": "Biggs Darklighter",
    "height": "183",
    "mass": "84",
    "hair_color": "black",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "24BBY",
    "gender": "male",
    "homeworld": 1,
    "films": [
        1
    ],
    "species": [
        1
    ],
    "vehicles": [],
    "starships": [
        12
    ],
    "created": "2014-12-10T15:59:50.509000Z",
    "edited": "2014-12-20T21:17:50.323000Z",
    "url": "https://sw-api.starnavi.io/people/9/"
};

export const mockGetFilmsByCharacterIdData  = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
 "id": 4,
    "title": "The Phantom Menace",
    "episode_id": 1,
    "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
    "director": "George Lucas",
    "producer": "Rick McCallum",
    "release_date": "1999-05-19",
    "characters": [
        10,
        16,
        20,
        21,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        2,
        3,
        40,
        41,
        42,
        43,
        44,
        46,
        47,
        48,
        11,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59
    ],
    "planets": [
        1,
        8,
        9
    ],
    "starships": [
        31,
        32,
        39,
        40,
        41
    ],
    "vehicles": [
        34,
        35,
        36,
        42,
        33,
        37,
        38
    ],
    "species": [
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        1,
        2,
        6,
        22,
        23,
        24,
        25,
        26,
        27
    ],
    "created": "2014-12-19T16:52:55.740000Z",
    "edited": "2014-12-20T10:54:07.216000Z",
    "url": "https://sw-api.starnavi.io/films/4/"
    },
{
            "id": 1,
            "title": "A New Hope",
            "episode_id": 4,
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            "director": "George Lucas",
            "producer": "Gary Kurtz, Rick McCallum",
            "release_date": "1977-05-25",
            "characters": [
                10,
                12,
                13,
                14,
                15,
                16,
                18,
                19,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                81
            ],
            "planets": [
                1,
                2,
                3
            ],
            "starships": [
                2,
                3,
                5,
                9,
                10,
                11,
                12,
                13
            ],
            "vehicles": [
                4,
                6,
                7,
                8
            ],
            "species": [
                1,
                2,
                3,
                4,
                5
            ],
            "created": "2014-12-10T14:23:31.880000Z",
            "edited": "2014-12-20T19:49:45.256000Z",
            "url": "https://sw-api.starnavi.io/films/1/"
        },
        {
            "id": 2,
            "title": "The Empire Strikes Back",
            "episode_id": 5,
            "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
            "director": "Irvin Kershner",
            "producer": "Gary Kurtz, Rick McCallum",
            "release_date": "1980-05-17",
            "characters": [
                10,
                13,
                14,
                18,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                1,
                2,
                3,
                4,
                5
            ],
            "planets": [
                4,
                5,
                6,
                27
            ],
            "starships": [
                3,
                10,
                11,
                12,
                15,
                17,
                21,
                22,
                23
            ],
            "vehicles": [
                8,
                14,
                16,
                18,
                19,
                20
            ],
            "species": [
                1,
                2,
                3,
                6,
                7
            ],
            "created": "2014-12-12T11:26:24.656000Z",
            "edited": "2014-12-15T13:07:53.386000Z",
            "url": "https://sw-api.starnavi.io/films/2/"
        }
  ],
};

export const mockGetStarshipsNameByIdData = {
  data: [
    {
    "id": 12,
    "name": "X-wing",
    "model": "T-65 X-wing",
    "manufacturer": "Incom Corporation",
    "cost_in_credits": "149999",
    "length": "12.5",
    "max_atmosphering_speed": "1050",
    "crew": "1",
    "passengers": "0",
    "cargo_capacity": "110",
    "consumables": "1 week",
    "hyperdrive_rating": "1.0",
    "MGLT": "100",
    "starship_class": "Starfighter",
    "pilots": [
        18,
        19,
        1,
        9
    ],
    "films": [
        1,
        2,
        3
    ],
    "created": "2014-12-12T11:19:05.340000Z",
    "edited": "2014-12-20T21:23:49.886000Z",
    "url": "https://sw-api.starnavi.io/starships/12/"
    },
    {
            "id": 27,
            "name": "Calamari Cruiser",
            "model": "MC80 Liberty type Star Cruiser",
            "manufacturer": "Mon Calamari shipyards",
            "cost_in_credits": "104000000",
            "length": "1200",
            "max_atmosphering_speed": "n/a",
            "crew": "5400",
            "passengers": "1200",
            "cargo_capacity": "unknown",
            "consumables": "2 years",
            "hyperdrive_rating": "1.0",
            "MGLT": "60",
            "starship_class": "Star Cruiser",
            "pilots": [],
            "films": [
                3
            ],
            "created": "2014-12-18T10:54:57.804000Z",
            "edited": "2014-12-20T21:23:49.904000Z",
            "url": "https://sw-api.starnavi.io/starships/27/"
        },
        {
            "id": 31,
            "name": "Republic Cruiser",
            "model": "Consular-class cruiser",
            "manufacturer": "Corellian Engineering Corporation",
            "cost_in_credits": "unknown",
            "length": "115",
            "max_atmosphering_speed": "900",
            "crew": "9",
            "passengers": "16",
            "cargo_capacity": "unknown",
            "consumables": "unknown",
            "hyperdrive_rating": "2.0",
            "MGLT": "unknown",
            "starship_class": "Space cruiser",
            "pilots": [],
            "films": [
                4
            ],
            "created": "2014-12-19T17:01:31.488000Z",
            "edited": "2014-12-20T21:23:49.912000Z",
            "url": "https://sw-api.starnavi.io/starships/31/"
        },
        {
            "id": 40,
            "name": "Naboo Royal Starship",
            "model": "J-type 327 Nubian royal starship",
            "manufacturer": "Theed Palace Space Vessel Engineering Corps, Nubia Star Drives",
            "cost_in_credits": "unknown",
            "length": "76",
            "max_atmosphering_speed": "920",
            "crew": "8",
            "passengers": "unknown",
            "cargo_capacity": "unknown",
            "consumables": "unknown",
            "hyperdrive_rating": "1.8",
            "MGLT": "unknown",
            "starship_class": "yacht",
            "pilots": [
                39
            ],
            "films": [
                4
            ],
            "created": "2014-12-19T17:45:03.506000Z",
            "edited": "2014-12-20T21:23:49.919000Z",
            "url": "https://sw-api.starnavi.io/starships/40/"
        },
        {
            "id": 41,
            "name": "Scimitar",
            "model": "Star Courier",
            "manufacturer": "Republic Sienar Systems",
            "cost_in_credits": "55000000",
            "length": "26.5",
            "max_atmosphering_speed": "1180",
            "crew": "1",
            "passengers": "6",
            "cargo_capacity": "2500000",
            "consumables": "30 days",
            "hyperdrive_rating": "1.5",
            "MGLT": "unknown",
            "starship_class": "Space Transport",
            "pilots": [
                44
            ],
            "films": [
                4
            ],
            "created": "2014-12-20T09:39:56.116000Z",
            "edited": "2014-12-20T21:23:49.922000Z",
            "url": "https://sw-api.starnavi.io/starships/41/"
        }
  ],
};
