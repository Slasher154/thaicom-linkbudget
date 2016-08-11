/**
 * Created by Thanat on 27/7/2559.
 */

import { Countries } from './countries.js';

// Country data from https://github.com/mledoze/countries

let countries = [
  {
    "name":{
      "common":"Aruba",
      "official":"Aruba",
      "native":{
        "nld":{
          "official":"Aruba",
          "common":"Aruba"
        },
        "pap":{
          "official":"Aruba",
          "common":"Aruba"
        }
      }
    },
    "tld":[
      ".aw"
    ],
    "cca2":"AW",
    "ccn3":"533",
    "cca3":"ABW",
    "cioc":"ARU",
    "currency":[
      "AWG"
    ],
    "callingCode":[
      "297"
    ],
    "capital":"Oranjestad",
    "altSpellings":[
      "AW"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "nld":"Dutch",
      "pap":"Papiamento"
    },
    "latlng":[
      12.5,
      -69.96666666
    ],
    "demonym":"Aruban",
    "landlocked":false,
    "borders":[

    ],
    "area":180
  },
  {
    "name":{
      "common":"Afghanistan",
      "official":"Islamic Republic of Afghanistan",
      "native":{
        "prs":{
          "official":"?????? ?????? ?????????",
          "common":"?????????"
        },
        "pus":{
          "official":"? ????????? ?????? ???????",
          "common":"?????????"
        },
        "tuk":{
          "official":"Owganystan Yslam Respublikasy",
          "common":"Owganystan"
        }
      }
    },
    "tld":[
      ".af"
    ],
    "cca2":"AF",
    "ccn3":"004",
    "cca3":"AFG",
    "cioc":"AFG",
    "currency":[
      "AFN"
    ],
    "callingCode":[
      "93"
    ],
    "capital":"Kabul",
    "altSpellings":[
      "AF",
      "Af??nist?n"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "prs":"Dari",
      "pus":"Pashto",
      "tuk":"Turkmen"
    },
    "latlng":[
      33,
      65
    ],
    "demonym":"Afghan",
    "landlocked":true,
    "borders":[
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ],
    "area":652230
  },
  {
    "name":{
      "common":"Angola",
      "official":"Republic of Angola",
      "native":{
        "por":{
          "official":"República de Angola",
          "common":"Angola"
        }
      }
    },
    "tld":[
      ".ao"
    ],
    "cca2":"AO",
    "ccn3":"024",
    "cca3":"AGO",
    "cioc":"ANG",
    "currency":[
      "AOA"
    ],
    "callingCode":[
      "244"
    ],
    "capital":"Luanda",
    "altSpellings":[
      "AO",
      "República de Angola",
      "??publika de an'??la"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      -12.5,
      18.5
    ],
    "demonym":"Angolan",
    "landlocked":false,
    "borders":[
      "COG",
      "COD",
      "ZMB",
      "NAM"
    ],
    "area":1246700
  },
  {
    "name":{
      "common":"Anguilla",
      "official":"Anguilla",
      "native":{
        "eng":{
          "official":"Anguilla",
          "common":"Anguilla"
        }
      }
    },
    "tld":[
      ".ai"
    ],
    "cca2":"AI",
    "ccn3":"660",
    "cca3":"AIA",
    "cioc":"",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1264"
    ],
    "capital":"The Valley",
    "altSpellings":[
      "AI"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      18.25,
      -63.16666666
    ],
    "demonym":"Anguillian",
    "landlocked":false,
    "borders":[

    ],
    "area":91
  },
  {
    "name":{
      "common":"Åland Islands",
      "official":"Åland Islands",
      "native":{
        "swe":{
          "official":"Landskapet Åland",
          "common":"Åland"
        }
      }
    },
    "tld":[
      ".ax"
    ],
    "cca2":"AX",
    "ccn3":"248",
    "cca3":"ALA",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "358"
    ],
    "capital":"Mariehamn",
    "altSpellings":[
      "AX",
      "Aaland",
      "Aland",
      "Ahvenanmaa"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "swe":"Swedish"
    },
    "latlng":[
      60.116667,
      19.9
    ],
    "demonym":"Ålandish",
    "landlocked":false,
    "borders":[

    ],
    "area":1580
  },
  {
    "name":{
      "common":"Albania",
      "official":"Republic of Albania",
      "native":{
        "sqi":{
          "official":"Republika e Shqipërisë",
          "common":"Shqipëria"
        }
      }
    },
    "tld":[
      ".al"
    ],
    "cca2":"AL",
    "ccn3":"008",
    "cca3":"ALB",
    "cioc":"ALB",
    "currency":[
      "ALL"
    ],
    "callingCode":[
      "355"
    ],
    "capital":"Tirana",
    "altSpellings":[
      "AL",
      "Shqipëri",
      "Shqipëria",
      "Shqipnia"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "sqi":"Albanian"
    },
    "latlng":[
      41,
      20
    ],
    "demonym":"Albanian",
    "landlocked":false,
    "borders":[
      "MNE",
      "GRC",
      "MKD",
      "UNK"
    ],
    "area":28748
  },
  {
    "name":{
      "common":"Andorra",
      "official":"Principality of Andorra",
      "native":{
        "cat":{
          "official":"Principat d'Andorra",
          "common":"Andorra"
        }
      }
    },
    "tld":[
      ".ad"
    ],
    "cca2":"AD",
    "ccn3":"020",
    "cca3":"AND",
    "cioc":"AND",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "376"
    ],
    "capital":"Andorra la Vella",
    "altSpellings":[
      "AD",
      "Principality of Andorra",
      "Principat d'Andorra"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "cat":"Catalan"
    },
    "latlng":[
      42.5,
      1.5
    ],
    "demonym":"Andorran",
    "landlocked":true,
    "borders":[
      "FRA",
      "ESP"
    ],
    "area":468
  },
  {
    "name":{
      "common":"United Arab Emirates",
      "official":"United Arab Emirates",
      "native":{
        "ara":{
          "official":"???????? ??????? ???????",
          "common":"???? ???????? ??????? ???????"
        }
      }
    },
    "tld":[
      ".ae",
      "??????."
    ],
    "cca2":"AE",
    "ccn3":"784",
    "cca3":"ARE",
    "cioc":"UAE",
    "currency":[
      "AED"
    ],
    "callingCode":[
      "971"
    ],
    "capital":"Abu Dhabi",
    "altSpellings":[
      "AE",
      "UAE",
      "Emirates"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      24,
      54
    ],
    "demonym":"Emirati",
    "landlocked":false,
    "borders":[
      "OMN",
      "SAU"
    ],
    "area":83600
  },
  {
    "name":{
      "common":"Argentina",
      "official":"Argentine Republic",
      "native":{
        "grn":{
          "official":"Argentine Republic",
          "common":"Argentina"
        },
        "spa":{
          "official":"República Argentina",
          "common":"Argentina"
        }
      }
    },
    "tld":[
      ".ar"
    ],
    "cca2":"AR",
    "ccn3":"032",
    "cca3":"ARG",
    "cioc":"ARG",
    "currency":[
      "ARS"
    ],
    "callingCode":[
      "54"
    ],
    "capital":"Buenos Aires",
    "altSpellings":[
      "AR",
      "Argentine Republic",
      "República Argentina"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "grn":"Guaraní",
      "spa":"Spanish"
    },
    "latlng":[
      -34,
      -64
    ],
    "demonym":"Argentinean",
    "landlocked":false,
    "borders":[
      "BOL",
      "BRA",
      "CHL",
      "PRY",
      "URY"
    ],
    "area":2780400
  },
  {
    "name":{
      "common":"Armenia",
      "official":"Republic of Armenia",
      "native":{
        "hye":{
          "official":"????????? ???????????????",
          "common":"????????"
        },
        "rus":{
          "official":"?????????? ???????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".am"
    ],
    "cca2":"AM",
    "ccn3":"051",
    "cca3":"ARM",
    "cioc":"ARM",
    "currency":[
      "AMD"
    ],
    "callingCode":[
      "374"
    ],
    "capital":"Yerevan",
    "altSpellings":[
      "AM",
      "Hayastan",
      "Republic of Armenia",
      "????????? ???????????????"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "hye":"Armenian",
      "rus":"Russian"
    },
    "latlng":[
      40,
      45
    ],
    "demonym":"Armenian",
    "landlocked":true,
    "borders":[
      "AZE",
      "GEO",
      "IRN",
      "TUR"
    ],
    "area":29743
  },
  {
    "name":{
      "common":"American Samoa",
      "official":"American Samoa",
      "native":{
        "eng":{
          "official":"American Samoa",
          "common":"American Samoa"
        },
        "smo":{
          "official":"S?moa Amelika",
          "common":"S?moa Amelika"
        }
      }
    },
    "tld":[
      ".as"
    ],
    "cca2":"AS",
    "ccn3":"016",
    "cca3":"ASM",
    "cioc":"ASA",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1684"
    ],
    "capital":"Pago Pago",
    "altSpellings":[
      "AS",
      "Amerika S?moa",
      "Amelika S?moa",
      "S?moa Amelika"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "smo":"Samoan"
    },
    "latlng":[
      -14.33333333,
      -170
    ],
    "demonym":"American Samoan",
    "landlocked":false,
    "borders":[

    ],
    "area":199
  },
  {
    "name":{
      "common":"Antarctica",
      "official":"Antarctica",
      "native":{

      }
    },
    "tld":[
      ".aq"
    ],
    "cca2":"AQ",
    "ccn3":"010",
    "cca3":"ATA",
    "cioc":"",
    "currency":[

    ],
    "callingCode":[

    ],
    "capital":"",
    "altSpellings":[
      "AQ"
    ],
    "region":"",
    "subregion":"",
    "languages":{

    },
    "latlng":[
      -90,
      0
    ],
    "demonym":"Antarctican",
    "landlocked":false,
    "borders":[

    ],
    "area":14000000
  },
  {
    "name":{
      "common":"French Southern and Antarctic Lands",
      "official":"Territory of the French Southern and Antarctic Lands",
      "native":{
        "fra":{
          "official":"Territoire des Terres australes et antarctiques françaises",
          "common":"Terres australes et antarctiques françaises"
        }
      }
    },
    "tld":[
      ".tf"
    ],
    "cca2":"TF",
    "ccn3":"260",
    "cca3":"ATF",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[

    ],
    "capital":"Port-aux-Français",
    "altSpellings":[
      "TF",
      "French Southern Territories"
    ],
    "region":"",
    "subregion":"",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -49.25,
      69.167
    ],
    "demonym":"French",
    "landlocked":false,
    "borders":[

    ],
    "area":7747
  },
  {
    "name":{
      "common":"Antigua and Barbuda",
      "official":"Antigua and Barbuda",
      "native":{
        "eng":{
          "official":"Antigua and Barbuda",
          "common":"Antigua and Barbuda"
        }
      }
    },
    "tld":[
      ".ag"
    ],
    "cca2":"AG",
    "ccn3":"028",
    "cca3":"ATG",
    "cioc":"ANT",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1268"
    ],
    "capital":"Saint John's",
    "altSpellings":[
      "AG"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      17.05,
      -61.8
    ],
    "demonym":"Antiguan, Barbudan",
    "landlocked":false,
    "borders":[

    ],
    "area":442
  },
  {
    "name":{
      "common":"Australia",
      "official":"Commonwealth of Australia",
      "native":{
        "eng":{
          "official":"Commonwealth of Australia",
          "common":"Australia"
        }
      }
    },
    "tld":[
      ".au"
    ],
    "cca2":"AU",
    "ccn3":"036",
    "cca3":"AUS",
    "cioc":"AUS",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "61"
    ],
    "capital":"Canberra",
    "altSpellings":[
      "AU"
    ],
    "region":"Oceania",
    "subregion":"Australia and New Zealand",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -27,
      133
    ],
    "demonym":"Australian",
    "landlocked":false,
    "borders":[

    ],
    "area":7692024
  },
  {
    "name":{
      "common":"Austria",
      "official":"Republic of Austria",
      "native":{
        "bar":{
          "official":"Republik Österreich",
          "common":"Österreich"
        }
      }
    },
    "tld":[
      ".at"
    ],
    "cca2":"AT",
    "ccn3":"040",
    "cca3":"AUT",
    "cioc":"AUT",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "43"
    ],
    "capital":"Vienna",
    "altSpellings":[
      "AT",
      "Osterreich",
      "Oesterreich"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "bar":"Austro-Bavarian German"
    },
    "latlng":[
      47.33333333,
      13.33333333
    ],
    "demonym":"Austrian",
    "landlocked":true,
    "borders":[
      "CZE",
      "DEU",
      "HUN",
      "ITA",
      "LIE",
      "SVK",
      "SVN",
      "CHE"
    ],
    "area":83871
  },
  {
    "name":{
      "common":"Azerbaijan",
      "official":"Republic of Azerbaijan",
      "native":{
        "aze":{
          "official":"Az?rbaycan Respublikas?",
          "common":"Az?rbaycan"
        },
        "rus":{
          "official":"??????????????? ??????????",
          "common":"???????????"
        }
      }
    },
    "tld":[
      ".az"
    ],
    "cca2":"AZ",
    "ccn3":"031",
    "cca3":"AZE",
    "cioc":"AZE",
    "currency":[
      "AZN"
    ],
    "callingCode":[
      "994"
    ],
    "capital":"Baku",
    "altSpellings":[
      "AZ",
      "Republic of Azerbaijan",
      "Az?rbaycan Respublikas?"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "aze":"Azerbaijani",
      "rus":"Russian"
    },
    "latlng":[
      40.5,
      47.5
    ],
    "demonym":"Azerbaijani",
    "landlocked":true,
    "borders":[
      "ARM",
      "GEO",
      "IRN",
      "RUS",
      "TUR"
    ],
    "area":86600
  },
  {
    "name":{
      "common":"Burundi",
      "official":"Republic of Burundi",
      "native":{
        "fra":{
          "official":"République du Burundi",
          "common":"Burundi"
        },
        "run":{
          "official":"Republika y'Uburundi ",
          "common":"Uburundi"
        }
      }
    },
    "tld":[
      ".bi"
    ],
    "cca2":"BI",
    "ccn3":"108",
    "cca3":"BDI",
    "cioc":"BDI",
    "currency":[
      "BIF"
    ],
    "callingCode":[
      "257"
    ],
    "capital":"Bujumbura",
    "altSpellings":[
      "BI",
      "Republic of Burundi",
      "Republika y'Uburundi",
      "République du Burundi"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "fra":"French",
      "run":"Kirundi"
    },
    "latlng":[
      -3.5,
      30
    ],
    "demonym":"Burundian",
    "landlocked":true,
    "borders":[
      "COD",
      "RWA",
      "TZA"
    ],
    "area":27834
  },
  {
    "name":{
      "common":"Belgium",
      "official":"Kingdom of Belgium",
      "native":{
        "deu":{
          "official":"Königreich Belgien",
          "common":"Belgien"
        },
        "fra":{
          "official":"Royaume de Belgique",
          "common":"Belgique"
        },
        "nld":{
          "official":"Koninkrijk België",
          "common":"België"
        }
      }
    },
    "tld":[
      ".be"
    ],
    "cca2":"BE",
    "ccn3":"056",
    "cca3":"BEL",
    "cioc":"BEL",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "32"
    ],
    "capital":"Brussels",
    "altSpellings":[
      "BE",
      "België",
      "Belgie",
      "Belgien",
      "Belgique",
      "Kingdom of Belgium",
      "Koninkrijk België",
      "Royaume de Belgique",
      "Königreich Belgien"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "deu":"German",
      "fra":"French",
      "nld":"Dutch"
    },
    "latlng":[
      50.83333333,
      4
    ],
    "demonym":"Belgian",
    "landlocked":false,
    "borders":[
      "FRA",
      "DEU",
      "LUX",
      "NLD"
    ],
    "area":30528
  },
  {
    "name":{
      "common":"Benin",
      "official":"Republic of Benin",
      "native":{
        "fra":{
          "official":"République du Bénin",
          "common":"Bénin"
        }
      }
    },
    "tld":[
      ".bj"
    ],
    "cca2":"BJ",
    "ccn3":"204",
    "cca3":"BEN",
    "cioc":"BEN",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "229"
    ],
    "capital":"Porto-Novo",
    "altSpellings":[
      "BJ",
      "Republic of Benin",
      "République du Bénin"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      9.5,
      2.25
    ],
    "demonym":"Beninese",
    "landlocked":false,
    "borders":[
      "BFA",
      "NER",
      "NGA",
      "TGO"
    ],
    "area":112622
  },
  {
    "name":{
      "common":"Burkina Faso",
      "official":"Burkina Faso",
      "native":{
        "fra":{
          "official":"République du Burkina",
          "common":"Burkina Faso"
        }
      }
    },
    "tld":[
      ".bf"
    ],
    "cca2":"BF",
    "ccn3":"854",
    "cca3":"BFA",
    "cioc":"BUR",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "226"
    ],
    "capital":"Ouagadougou",
    "altSpellings":[
      "BF"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      13,
      -2
    ],
    "demonym":"Burkinabe",
    "landlocked":true,
    "borders":[
      "BEN",
      "CIV",
      "GHA",
      "MLI",
      "NER",
      "TGO"
    ],
    "area":272967
  },
  {
    "name":{
      "common":"Bangladesh",
      "official":"People's Republic of Bangladesh",
      "native":{
        "ben":{
          "official":"???????? ??????????????",
          "common":"????????"
        }
      }
    },
    "tld":[
      ".bd"
    ],
    "cca2":"BD",
    "ccn3":"050",
    "cca3":"BGD",
    "cioc":"BAN",
    "currency":[
      "BDT"
    ],
    "callingCode":[
      "880"
    ],
    "capital":"Dhaka",
    "altSpellings":[
      "BD",
      "People's Republic of Bangladesh",
      "Gônôprôjatôntri Bangladesh"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "ben":"Bengali"
    },
    "latlng":[
      24,
      90
    ],
    "demonym":"Bangladeshi",
    "landlocked":false,
    "borders":[
      "MMR",
      "IND"
    ],
    "area":147570
  },
  {
    "name":{
      "common":"Bulgaria",
      "official":"Republic of Bulgaria",
      "native":{
        "bul":{
          "official":"????????? ????????",
          "common":"????????"
        }
      }
    },
    "tld":[
      ".bg"
    ],
    "cca2":"BG",
    "ccn3":"100",
    "cca3":"BGR",
    "cioc":"BUL",
    "currency":[
      "BGN"
    ],
    "callingCode":[
      "359"
    ],
    "capital":"Sofia",
    "altSpellings":[
      "BG",
      "Republic of Bulgaria",
      "????????? ????????"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "bul":"Bulgarian"
    },
    "latlng":[
      43,
      25
    ],
    "demonym":"Bulgarian",
    "landlocked":false,
    "borders":[
      "GRC",
      "MKD",
      "ROU",
      "SRB",
      "TUR"
    ],
    "area":110879
  },
  {
    "name":{
      "common":"Bahrain",
      "official":"Kingdom of Bahrain",
      "native":{
        "ara":{
          "official":"????? ???????",
          "common":"????????"
        }
      }
    },
    "tld":[
      ".bh"
    ],
    "cca2":"BH",
    "ccn3":"048",
    "cca3":"BHR",
    "cioc":"BRN",
    "currency":[
      "BHD"
    ],
    "callingCode":[
      "973"
    ],
    "capital":"Manama",
    "altSpellings":[
      "BH",
      "Kingdom of Bahrain",
      "Mamlakat al-Ba?rayn"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      26,
      50.55
    ],
    "demonym":"Bahraini",
    "landlocked":false,
    "borders":[

    ],
    "area":765
  },
  {
    "name":{
      "common":"Bahamas",
      "official":"Commonwealth of the Bahamas",
      "native":{
        "eng":{
          "official":"Commonwealth of the Bahamas",
          "common":"Bahamas"
        }
      }
    },
    "tld":[
      ".bs"
    ],
    "cca2":"BS",
    "ccn3":"044",
    "cca3":"BHS",
    "cioc":"BAH",
    "currency":[
      "BSD"
    ],
    "callingCode":[
      "1242"
    ],
    "capital":"Nassau",
    "altSpellings":[
      "BS",
      "Commonwealth of the Bahamas"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      24.25,
      -76
    ],
    "demonym":"Bahamian",
    "landlocked":false,
    "borders":[

    ],
    "area":13943
  },
  {
    "name":{
      "common":"Bosnia and Herzegovina",
      "official":"Bosnia and Herzegovina",
      "native":{
        "bos":{
          "official":"Bosna i Hercegovina",
          "common":"Bosna i Hercegovina"
        },
        "hrv":{
          "official":"Bosna i Hercegovina",
          "common":"Bosna i Hercegovina"
        },
        "srp":{
          "official":"????a ? ???????????",
          "common":"????a ? ???????????"
        }
      }
    },
    "tld":[
      ".ba"
    ],
    "cca2":"BA",
    "ccn3":"070",
    "cca3":"BIH",
    "cioc":"BIH",
    "currency":[
      "BAM"
    ],
    "callingCode":[
      "387"
    ],
    "capital":"Sarajevo",
    "altSpellings":[
      "BA",
      "Bosnia-Herzegovina",
      "????? ? ???????????"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "bos":"Bosnian",
      "hrv":"Croatian",
      "srp":"Serbian"
    },
    "latlng":[
      44,
      18
    ],
    "demonym":"Bosnian, Herzegovinian",
    "landlocked":false,
    "borders":[
      "HRV",
      "MNE",
      "SRB"
    ],
    "area":51209
  },
  {
    "name":{
      "common":"Saint Barthélemy",
      "official":"Collectivity of Saint Barthélemy",
      "native":{
        "fra":{
          "official":"Collectivité de Saint-Barthélemy",
          "common":"Saint-Barthélemy"
        }
      }
    },
    "tld":[
      ".bl"
    ],
    "cca2":"BL",
    "ccn3":"652",
    "cca3":"BLM",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "590"
    ],
    "capital":"Gustavia",
    "altSpellings":[
      "BL",
      "St. Barthelemy",
      "Collectivity of Saint Barthélemy",
      "Collectivité de Saint-Barthélemy"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      18.5,
      -63.41666666
    ],
    "demonym":"Saint Barthélemy Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":21
  },
  {
    "name":{
      "common":"Belarus",
      "official":"Republic of Belarus",
      "native":{
        "bel":{
          "official":"?????????? ????????",
          "common":"?????????"
        },
        "rus":{
          "official":"?????????? ????????",
          "common":"??????????"
        }
      }
    },
    "tld":[
      ".by"
    ],
    "cca2":"BY",
    "ccn3":"112",
    "cca3":"BLR",
    "cioc":"BLR",
    "currency":[
      "BYR"
    ],
    "callingCode":[
      "375"
    ],
    "capital":"Minsk",
    "altSpellings":[
      "BY",
      "Bielaru?",
      "Republic of Belarus",
      "??????????",
      "?????????? ????????",
      "Belorussiya",
      "Respublika Belarus’"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "bel":"Belarusian",
      "rus":"Russian"
    },
    "latlng":[
      53,
      28
    ],
    "demonym":"Belarusian",
    "landlocked":true,
    "borders":[
      "LVA",
      "LTU",
      "POL",
      "RUS",
      "UKR"
    ],
    "area":207600
  },
  {
    "name":{
      "common":"Belize",
      "official":"Belize",
      "native":{
        "bjz":{
          "official":"Belize",
          "common":"Belize"
        },
        "eng":{
          "official":"Belize",
          "common":"Belize"
        },
        "spa":{
          "official":"Belice",
          "common":"Belice"
        }
      }
    },
    "tld":[
      ".bz"
    ],
    "cca2":"BZ",
    "ccn3":"084",
    "cca3":"BLZ",
    "cioc":"BIZ",
    "currency":[
      "BZD"
    ],
    "callingCode":[
      "501"
    ],
    "capital":"Belmopan",
    "altSpellings":[
      "BZ"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "bjz":"Belizean Creole",
      "eng":"English",
      "spa":"Spanish"
    },
    "latlng":[
      17.25,
      -88.75
    ],
    "demonym":"Belizean",
    "landlocked":false,
    "borders":[
      "GTM",
      "MEX"
    ],
    "area":22966
  },
  {
    "name":{
      "common":"Bermuda",
      "official":"Bermuda",
      "native":{
        "eng":{
          "official":"Bermuda",
          "common":"Bermuda"
        }
      }
    },
    "tld":[
      ".bm"
    ],
    "cca2":"BM",
    "ccn3":"060",
    "cca3":"BMU",
    "cioc":"BER",
    "currency":[
      "BMD"
    ],
    "callingCode":[
      "1441"
    ],
    "capital":"Hamilton",
    "altSpellings":[
      "BM",
      "The Islands of Bermuda",
      "The Bermudas",
      "Somers Isles"
    ],
    "region":"Americas",
    "subregion":"Northern America",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      32.33333333,
      -64.75
    ],
    "demonym":"Bermudian",
    "landlocked":false,
    "borders":[

    ],
    "area":54
  },
  {
    "name":{
      "common":"Bolivia",
      "official":"Plurinational State of Bolivia",
      "native":{
        "aym":{
          "official":"Wuliwya Suyu",
          "common":"Wuliwya"
        },
        "grn":{
          "official":"Tetã Volívia",
          "common":"Volívia"
        },
        "que":{
          "official":"Buliwya Mamallaqta",
          "common":"Buliwya"
        },
        "spa":{
          "official":"Estado Plurinacional de Bolivia",
          "common":"Bolivia"
        }
      }
    },
    "tld":[
      ".bo"
    ],
    "cca2":"BO",
    "ccn3":"068",
    "cca3":"BOL",
    "cioc":"BOL",
    "currency":[
      "BOB",
      "BOV"
    ],
    "callingCode":[
      "591"
    ],
    "capital":"Sucre",
    "altSpellings":[
      "BO",
      "Buliwya",
      "Wuliwya",
      "Bolivia, Plurinational State of",
      "Plurinational State of Bolivia",
      "Estado Plurinacional de Bolivia",
      "Buliwya Mamallaqta",
      "Wuliwya Suyu",
      "Tetã Volívia"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "aym":"Aymara",
      "grn":"Guaraní",
      "que":"Quechua",
      "spa":"Spanish"
    },
    "latlng":[
      -17,
      -65
    ],
    "demonym":"Bolivian",
    "landlocked":true,
    "borders":[
      "ARG",
      "BRA",
      "CHL",
      "PRY",
      "PER"
    ],
    "area":1098581
  },
  {
    "name":{
      "common":"Brazil",
      "official":"Federative Republic of Brazil",
      "native":{
        "por":{
          "official":"República Federativa do Brasil",
          "common":"Brasil"
        }
      }
    },
    "tld":[
      ".br"
    ],
    "cca2":"BR",
    "ccn3":"076",
    "cca3":"BRA",
    "cioc":"BRA",
    "currency":[
      "BRL"
    ],
    "callingCode":[
      "55"
    ],
    "capital":"Brasília",
    "altSpellings":[
      "BR",
      "Brasil",
      "Federative Republic of Brazil",
      "República Federativa do Brasil"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      -10,
      -55
    ],
    "demonym":"Brazilian",
    "landlocked":false,
    "borders":[
      "ARG",
      "BOL",
      "COL",
      "GUF",
      "GUY",
      "PRY",
      "PER",
      "SUR",
      "URY",
      "VEN"
    ],
    "area":8515767
  },
  {
    "name":{
      "common":"Barbados",
      "official":"Barbados",
      "native":{
        "eng":{
          "official":"Barbados",
          "common":"Barbados"
        }
      }
    },
    "tld":[
      ".bb"
    ],
    "cca2":"BB",
    "ccn3":"052",
    "cca3":"BRB",
    "cioc":"BAR",
    "currency":[
      "BBD"
    ],
    "callingCode":[
      "1246"
    ],
    "capital":"Bridgetown",
    "altSpellings":[
      "BB"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      13.16666666,
      -59.53333333
    ],
    "demonym":"Barbadian",
    "landlocked":false,
    "borders":[

    ],
    "area":430
  },
  {
    "name":{
      "common":"Brunei",
      "official":"Nation of Brunei, Abode of Peace",
      "native":{
        "msa":{
          "official":"Nation of Brunei, Abode Damai",
          "common":"Negara Brunei Darussalam"
        }
      }
    },
    "tld":[
      ".bn"
    ],
    "cca2":"BN",
    "ccn3":"096",
    "cca3":"BRN",
    "cioc":"BRU",
    "currency":[
      "BND"
    ],
    "callingCode":[
      "673"
    ],
    "capital":"Bandar Seri Begawan",
    "altSpellings":[
      "BN",
      "Brunei Darussalam",
      "Nation of Brunei",
      "the Abode of Peace"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "msa":"Malay"
    },
    "latlng":[
      4.5,
      114.66666666
    ],
    "demonym":"Bruneian",
    "landlocked":false,
    "borders":[
      "MYS"
    ],
    "area":5765
  },
  {
    "name":{
      "common":"Bhutan",
      "official":"Kingdom of Bhutan",
      "native":{
        "dzo":{
          "official":"??????????????",
          "common":"??????????"
        }
      }
    },
    "tld":[
      ".bt"
    ],
    "cca2":"BT",
    "ccn3":"064",
    "cca3":"BTN",
    "cioc":"BHU",
    "currency":[
      "BTN",
      "INR"
    ],
    "callingCode":[
      "975"
    ],
    "capital":"Thimphu",
    "altSpellings":[
      "BT",
      "Kingdom of Bhutan"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "dzo":"Dzongkha"
    },
    "latlng":[
      27.5,
      90.5
    ],
    "demonym":"Bhutanese",
    "landlocked":true,
    "borders":[
      "CHN",
      "IND"
    ],
    "area":38394
  },
  {
    "name":{
      "common":"Bouvet Island",
      "official":"Bouvet Island",
      "native":{
        "nor":{
          "official":"Bouvetøya",
          "common":"Bouvetøya"
        }
      }
    },
    "tld":[
      ".bv"
    ],
    "cca2":"BV",
    "ccn3":"074",
    "cca3":"BVT",
    "cioc":"",
    "currency":[
      "NOK"
    ],
    "callingCode":[

    ],
    "capital":"",
    "altSpellings":[
      "BV",
      "Bouvetøya",
      "Bouvet-øya"
    ],
    "region":"",
    "subregion":"",
    "languages":{
      "nor":"Norwegian"
    },
    "latlng":[
      -54.43333333,
      3.4
    ],
    "demonym":"",
    "landlocked":false,
    "borders":[

    ],
    "area":49
  },
  {
    "name":{
      "common":"Botswana",
      "official":"Republic of Botswana",
      "native":{
        "eng":{
          "official":"Republic of Botswana",
          "common":"Botswana"
        },
        "tsn":{
          "official":"Lefatshe la Botswana",
          "common":"Botswana"
        }
      }
    },
    "tld":[
      ".bw"
    ],
    "cca2":"BW",
    "ccn3":"072",
    "cca3":"BWA",
    "cioc":"BOT",
    "currency":[
      "BWP"
    ],
    "callingCode":[
      "267"
    ],
    "capital":"Gaborone",
    "altSpellings":[
      "BW",
      "Republic of Botswana",
      "Lefatshe la Botswana"
    ],
    "region":"Africa",
    "subregion":"Southern Africa",
    "languages":{
      "eng":"English",
      "tsn":"Tswana"
    },
    "latlng":[
      -22,
      24
    ],
    "demonym":"Motswana",
    "landlocked":true,
    "borders":[
      "NAM",
      "ZAF",
      "ZMB",
      "ZWE"
    ],
    "area":582000
  },
  {
    "name":{
      "common":"Central African Republic",
      "official":"Central African Republic",
      "native":{
        "fra":{
          "official":"République centrafricaine",
          "common":"République centrafricaine"
        },
        "sag":{
          "official":"Ködörösêse tî Bêafrîka",
          "common":"Bêafrîka"
        }
      }
    },
    "tld":[
      ".cf"
    ],
    "cca2":"CF",
    "ccn3":"140",
    "cca3":"CAF",
    "cioc":"CAF",
    "currency":[
      "XAF"
    ],
    "callingCode":[
      "236"
    ],
    "capital":"Bangui",
    "altSpellings":[
      "CF",
      "Central African Republic",
      "République centrafricaine"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "fra":"French",
      "sag":"Sango"
    },
    "latlng":[
      7,
      21
    ],
    "demonym":"Central African",
    "landlocked":true,
    "borders":[
      "CMR",
      "TCD",
      "COD",
      "COG",
      "SSD",
      "SDN"
    ],
    "area":622984
  },
  {
    "name":{
      "common":"Canada",
      "official":"Canada",
      "native":{
        "eng":{
          "official":"Canada",
          "common":"Canada"
        },
        "fra":{
          "official":"Canada",
          "common":"Canada"
        }
      }
    },
    "tld":[
      ".ca"
    ],
    "cca2":"CA",
    "ccn3":"124",
    "cca3":"CAN",
    "cioc":"CAN",
    "currency":[
      "CAD"
    ],
    "callingCode":[
      "1"
    ],
    "capital":"Ottawa",
    "altSpellings":[
      "CA"
    ],
    "region":"Americas",
    "subregion":"Northern America",
    "languages":{
      "eng":"English",
      "fra":"French"
    },
    "latlng":[
      60,
      -95
    ],
    "demonym":"Canadian",
    "landlocked":false,
    "borders":[
      "USA"
    ],
    "area":9984670
  },
  {
    "name":{
      "common":"Cocos (Keeling) Islands",
      "official":"Territory of the Cocos (Keeling) Islands",
      "native":{
        "eng":{
          "official":"Territory of the Cocos (Keeling) Islands",
          "common":"Cocos (Keeling) Islands"
        }
      }
    },
    "tld":[
      ".cc"
    ],
    "cca2":"CC",
    "ccn3":"166",
    "cca3":"CCK",
    "cioc":"",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "61"
    ],
    "capital":"West Island",
    "altSpellings":[
      "CC",
      "Territory of the Cocos (Keeling) Islands",
      "Keeling Islands"
    ],
    "region":"Oceania",
    "subregion":"Australia and New Zealand",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -12.5,
      96.83333333
    ],
    "demonym":"Cocos Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":14
  },
  {
    "name":{
      "common":"Switzerland",
      "official":"Swiss Confederation",
      "native":{
        "fra":{
          "official":"Confédération suisse",
          "common":"Suisse"
        },
        "gsw":{
          "official":"Schweizerische Eidgenossenschaft",
          "common":"Schweiz"
        },
        "ita":{
          "official":"Confederazione Svizzera",
          "common":"Svizzera"
        },
        "roh":{
          "official":"Confederaziun svizra",
          "common":"Svizra"
        }
      }
    },
    "tld":[
      ".ch"
    ],
    "cca2":"CH",
    "ccn3":"756",
    "cca3":"CHE",
    "cioc":"SUI",
    "currency":[
      "CHE",
      "CHF",
      "CHW"
    ],
    "callingCode":[
      "41"
    ],
    "capital":"Bern",
    "altSpellings":[
      "CH",
      "Swiss Confederation",
      "Schweiz",
      "Suisse",
      "Svizzera",
      "Svizra"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "fra":"French",
      "gsw":"Swiss German",
      "ita":"Italian",
      "roh":"Romansh"
    },
    "latlng":[
      47,
      8
    ],
    "demonym":"Swiss",
    "landlocked":true,
    "borders":[
      "AUT",
      "FRA",
      "ITA",
      "LIE",
      "DEU"
    ],
    "area":41284
  },
  {
    "name":{
      "common":"Chile",
      "official":"Republic of Chile",
      "native":{
        "spa":{
          "official":"República de Chile",
          "common":"Chile"
        }
      }
    },
    "tld":[
      ".cl"
    ],
    "cca2":"CL",
    "ccn3":"152",
    "cca3":"CHL",
    "cioc":"CHI",
    "currency":[
      "CLF",
      "CLP"
    ],
    "callingCode":[
      "56"
    ],
    "capital":"Santiago",
    "altSpellings":[
      "CL",
      "Republic of Chile",
      "República de Chile"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      -30,
      -71
    ],
    "demonym":"Chilean",
    "landlocked":false,
    "borders":[
      "ARG",
      "BOL",
      "PER"
    ],
    "area":756102
  },
  {
    "name":{
      "common":"China",
      "official":"People's Republic of China",
      "native":{
        "zho":{
          "official":"???????",
          "common":"??"
        }
      }
    },
    "tld":[
      ".cn",
      ".??",
      ".??",
      ".??",
      ".??"
    ],
    "cca2":"CN",
    "ccn3":"156",
    "cca3":"CHN",
    "cioc":"CHN",
    "currency":[
      "CNY"
    ],
    "callingCode":[
      "86"
    ],
    "capital":"Beijing",
    "altSpellings":[
      "CN",
      "Zh?ngguó",
      "Zhongguo",
      "Zhonghua",
      "People's Republic of China",
      "???????",
      "Zh?nghuá Rénmín Gònghéguó"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "zho":"Chinese"
    },
    "latlng":[
      35,
      105
    ],
    "demonym":"Chinese",
    "landlocked":false,
    "borders":[
      "AFG",
      "BTN",
      "MMR",
      "HKG",
      "IND",
      "KAZ",
      "PRK",
      "KGZ",
      "LAO",
      "MAC",
      "MNG",
      "PAK",
      "RUS",
      "TJK",
      "VNM"
    ],
    "area":9706961
  },
  {
    "name":{
      "common":"Ivory Coast",
      "official":"Republic of Côte d'Ivoire",
      "native":{
        "fra":{
          "official":"République de Côte d'Ivoire",
          "common":"Côte d'Ivoire"
        }
      }
    },
    "tld":[
      ".ci"
    ],
    "cca2":"CI",
    "ccn3":"384",
    "cca3":"CIV",
    "cioc":"CIV",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "225"
    ],
    "capital":"Yamoussoukro",
    "altSpellings":[
      "CI",
      "Côte d'Ivoire",
      "Ivory Coast",
      "Republic of Côte d'Ivoire",
      "République de Côte d'Ivoire"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      8,
      -5
    ],
    "demonym":"Ivorian",
    "landlocked":false,
    "borders":[
      "BFA",
      "GHA",
      "GIN",
      "LBR",
      "MLI"
    ],
    "area":322463
  },
  {
    "name":{
      "common":"Cameroon",
      "official":"Republic of Cameroon",
      "native":{
        "eng":{
          "official":"Republic of Cameroon",
          "common":"Cameroon"
        },
        "fra":{
          "official":"République du Cameroun",
          "common":"Cameroun"
        }
      }
    },
    "tld":[
      ".cm"
    ],
    "cca2":"CM",
    "ccn3":"120",
    "cca3":"CMR",
    "cioc":"CMR",
    "currency":[
      "XAF"
    ],
    "callingCode":[
      "237"
    ],
    "capital":"Yaoundé",
    "altSpellings":[
      "CM",
      "Republic of Cameroon",
      "République du Cameroun"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "eng":"English",
      "fra":"French"
    },
    "latlng":[
      6,
      12
    ],
    "demonym":"Cameroonian",
    "landlocked":false,
    "borders":[
      "CAF",
      "TCD",
      "COG",
      "GNQ",
      "GAB",
      "NGA"
    ],
    "area":475442
  },
  {
    "name":{
      "common":"DR Congo",
      "official":"Democratic Republic of the Congo",
      "native":{
        "fra":{
          "official":"République démocratique du Congo",
          "common":"RD Congo"
        },
        "kon":{
          "official":"Repubilika ya Kongo Demokratiki",
          "common":"Repubilika ya Kongo Demokratiki"
        },
        "lin":{
          "official":"Republiki ya Kongó Demokratiki",
          "common":"Republiki ya Kongó Demokratiki"
        },
        "lua":{
          "official":"Ditunga dia Kongu wa Mungalaata",
          "common":"Ditunga dia Kongu wa Mungalaata"
        },
        "swa":{
          "official":"Jamhuri ya Kidemokrasia ya Kongo",
          "common":"Jamhuri ya Kidemokrasia ya Kongo"
        }
      }
    },
    "tld":[
      ".cd"
    ],
    "cca2":"CD",
    "ccn3":"180",
    "cca3":"COD",
    "cioc":"COD",
    "currency":[
      "CDF"
    ],
    "callingCode":[
      "243"
    ],
    "capital":"Kinshasa",
    "altSpellings":[
      "CD",
      "DR Congo",
      "Congo-Kinshasa",
      "Congo, the Democratic Republic of the",
      "DRC"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "fra":"French",
      "kon":"Kikongo",
      "lin":"Lingala",
      "lua":"Tshiluba",
      "swa":"Swahili"
    },
    "latlng":[
      0,
      25
    ],
    "demonym":"Congolese",
    "landlocked":false,
    "borders":[
      "AGO",
      "BDI",
      "CAF",
      "COG",
      "RWA",
      "SSD",
      "TZA",
      "UGA",
      "ZMB"
    ],
    "area":2344858
  },
  {
    "name":{
      "common":"Republic of the Congo",
      "official":"Republic of the Congo",
      "native":{
        "fra":{
          "official":"République du Congo",
          "common":"République du Congo"
        },
        "kon":{
          "official":"Repubilika ya Kongo",
          "common":"Repubilika ya Kongo"
        },
        "lin":{
          "official":"Republíki ya Kongó",
          "common":"Republíki ya Kongó"
        }
      }
    },
    "tld":[
      ".cg"
    ],
    "cca2":"CG",
    "ccn3":"178",
    "cca3":"COG",
    "cioc":"CGO",
    "currency":[
      "XAF"
    ],
    "callingCode":[
      "242"
    ],
    "capital":"Brazzaville",
    "altSpellings":[
      "CG",
      "Congo",
      "Congo-Brazzaville"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "fra":"French",
      "kon":"Kikongo",
      "lin":"Lingala"
    },
    "latlng":[
      -1,
      15
    ],
    "demonym":"Congolese",
    "landlocked":false,
    "borders":[
      "AGO",
      "CMR",
      "CAF",
      "COD",
      "GAB"
    ],
    "area":342000
  },
  {
    "name":{
      "common":"Cook Islands",
      "official":"Cook Islands",
      "native":{
        "eng":{
          "official":"Cook Islands",
          "common":"Cook Islands"
        },
        "rar":{
          "official":"K?ki '?irani",
          "common":"K?ki '?irani"
        }
      }
    },
    "tld":[
      ".ck"
    ],
    "cca2":"CK",
    "ccn3":"184",
    "cca3":"COK",
    "cioc":"COK",
    "currency":[
      "NZD"
    ],
    "callingCode":[
      "682"
    ],
    "capital":"Avarua",
    "altSpellings":[
      "CK",
      "K?ki '?irani"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "rar":"Cook Islands M?ori"
    },
    "latlng":[
      -21.23333333,
      -159.76666666
    ],
    "demonym":"Cook Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":236
  },
  {
    "name":{
      "common":"Colombia",
      "official":"Republic of Colombia",
      "native":{
        "spa":{
          "official":"República de Colombia",
          "common":"Colombia"
        }
      }
    },
    "tld":[
      ".co"
    ],
    "cca2":"CO",
    "ccn3":"170",
    "cca3":"COL",
    "cioc":"COL",
    "currency":[
      "COP"
    ],
    "callingCode":[
      "57"
    ],
    "capital":"Bogotá",
    "altSpellings":[
      "CO",
      "Republic of Colombia",
      "República de Colombia"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      4,
      -72
    ],
    "demonym":"Colombian",
    "landlocked":false,
    "borders":[
      "BRA",
      "ECU",
      "PAN",
      "PER",
      "VEN"
    ],
    "area":1141748
  },
  {
    "name":{
      "common":"Comoros",
      "official":"Union of the Comoros",
      "native":{
        "ara":{
          "official":"??????? ??????",
          "common":"??????"
        },
        "fra":{
          "official":"Union des Comores",
          "common":"Comores"
        },
        "zdj":{
          "official":"Udzima wa Komori",
          "common":"Komori"
        }
      }
    },
    "tld":[
      ".km"
    ],
    "cca2":"KM",
    "ccn3":"174",
    "cca3":"COM",
    "cioc":"COM",
    "currency":[
      "KMF"
    ],
    "callingCode":[
      "269"
    ],
    "capital":"Moroni",
    "altSpellings":[
      "KM",
      "Union of the Comoros",
      "Union des Comores",
      "Udzima wa Komori",
      "al-Itti??d al-Qumur?"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "ara":"Arabic",
      "fra":"French",
      "zdj":"Comorian"
    },
    "latlng":[
      -12.16666666,
      44.25
    ],
    "demonym":"Comoran",
    "landlocked":false,
    "borders":[

    ],
    "area":1862
  },
  {
    "name":{
      "common":"Cape Verde",
      "official":"Republic of Cabo Verde",
      "native":{
        "por":{
          "official":"República de Cabo Verde",
          "common":"Cabo Verde"
        }
      }
    },
    "tld":[
      ".cv"
    ],
    "cca2":"CV",
    "ccn3":"132",
    "cca3":"CPV",
    "cioc":"CPV",
    "currency":[
      "CVE"
    ],
    "callingCode":[
      "238"
    ],
    "capital":"Praia",
    "altSpellings":[
      "CV",
      "Republic of Cabo Verde",
      "República de Cabo Verde"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      16,
      -24
    ],
    "demonym":"Cape Verdian",
    "landlocked":false,
    "borders":[

    ],
    "area":4033
  },
  {
    "name":{
      "common":"Costa Rica",
      "official":"Republic of Costa Rica",
      "native":{
        "spa":{
          "official":"República de Costa Rica",
          "common":"Costa Rica"
        }
      }
    },
    "tld":[
      ".cr"
    ],
    "cca2":"CR",
    "ccn3":"188",
    "cca3":"CRI",
    "cioc":"CRC",
    "currency":[
      "CRC"
    ],
    "callingCode":[
      "506"
    ],
    "capital":"San José",
    "altSpellings":[
      "CR",
      "Republic of Costa Rica",
      "República de Costa Rica"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      10,
      -84
    ],
    "demonym":"Costa Rican",
    "landlocked":false,
    "borders":[
      "NIC",
      "PAN"
    ],
    "area":51100
  },
  {
    "name":{
      "common":"Cuba",
      "official":"Republic of Cuba",
      "native":{
        "spa":{
          "official":"República de Cuba",
          "common":"Cuba"
        }
      }
    },
    "tld":[
      ".cu"
    ],
    "cca2":"CU",
    "ccn3":"192",
    "cca3":"CUB",
    "cioc":"CUB",
    "currency":[
      "CUC",
      "CUP"
    ],
    "callingCode":[
      "53"
    ],
    "capital":"Havana",
    "altSpellings":[
      "CU",
      "Republic of Cuba",
      "República de Cuba"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      21.5,
      -80
    ],
    "demonym":"Cuban",
    "landlocked":false,
    "borders":[

    ],
    "area":109884
  },
  {
    "name":{
      "common":"Curaçao",
      "official":"Country of Curaçao",
      "native":{
        "eng":{
          "official":"Country of Curaçao",
          "common":"Curaçao"
        },
        "nld":{
          "official":"Land Curaçao",
          "common":"Curaçao"
        },
        "pap":{
          "official":"Pais Kòrsou",
          "common":"Pais Kòrsou"
        }
      }
    },
    "tld":[
      ".cw"
    ],
    "cca2":"CW",
    "ccn3":"531",
    "cca3":"CUW",
    "cioc":"",
    "currency":[
      "ANG"
    ],
    "callingCode":[
      "5999"
    ],
    "capital":"Willemstad",
    "altSpellings":[
      "CW",
      "Curacao",
      "Kòrsou",
      "Country of Curaçao",
      "Land Curaçao",
      "Pais Kòrsou"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English",
      "nld":"Dutch",
      "pap":"Papiamento"
    },
    "latlng":[
      12.116667,
      -68.933333
    ],
    "demonym":"Dutch",
    "landlocked":false,
    "borders":[

    ],
    "area":444
  },
  {
    "name":{
      "common":"Christmas Island",
      "official":"Territory of Christmas Island",
      "native":{
        "eng":{
          "official":"Territory of Christmas Island",
          "common":"Christmas Island"
        }
      }
    },
    "tld":[
      ".cx"
    ],
    "cca2":"CX",
    "ccn3":"162",
    "cca3":"CXR",
    "cioc":"",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "61"
    ],
    "capital":"Flying Fish Cove",
    "altSpellings":[
      "CX",
      "Territory of Christmas Island"
    ],
    "region":"Oceania",
    "subregion":"Australia and New Zealand",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -10.5,
      105.66666666
    ],
    "demonym":"Christmas Island",
    "landlocked":false,
    "borders":[

    ],
    "area":135
  },
  {
    "name":{
      "common":"Cayman Islands",
      "official":"Cayman Islands",
      "native":{
        "eng":{
          "official":"Cayman Islands",
          "common":"Cayman Islands"
        }
      }
    },
    "tld":[
      ".ky"
    ],
    "cca2":"KY",
    "ccn3":"136",
    "cca3":"CYM",
    "cioc":"CAY",
    "currency":[
      "KYD"
    ],
    "callingCode":[
      "1345"
    ],
    "capital":"George Town",
    "altSpellings":[
      "KY"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      19.5,
      -80.5
    ],
    "demonym":"Caymanian",
    "landlocked":false,
    "borders":[

    ],
    "area":264
  },
  {
    "name":{
      "common":"Cyprus",
      "official":"Republic of Cyprus",
      "native":{
        "ell":{
          "official":"?????????? ??? ??????",
          "common":"??????"
        },
        "tur":{
          "official":"K?br?s Cumhuriyeti",
          "common":"K?br?s"
        }
      }
    },
    "tld":[
      ".cy"
    ],
    "cca2":"CY",
    "ccn3":"196",
    "cca3":"CYP",
    "cioc":"CYP",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "357"
    ],
    "capital":"Nicosia",
    "altSpellings":[
      "CY",
      "Kıpros",
      "K?br?s",
      "Republic of Cyprus",
      "???????? ??????????",
      "K?br?s Cumhuriyeti"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "ell":"Greek",
      "tur":"Turkish"
    },
    "latlng":[
      35,
      33
    ],
    "demonym":"Cypriot",
    "landlocked":false,
    "borders":[
      "GBR"
    ],
    "area":9251
  },
  {
    "name":{
      "common":"Czech Republic",
      "official":"Czech Republic",
      "native":{
        "ces":{
          "official":"?eská republika",
          "common":"?eská republika"
        },
        "slk":{
          "official":"?eská republika",
          "common":"?eská republika"
        }
      }
    },
    "tld":[
      ".cz"
    ],
    "cca2":"CZ",
    "ccn3":"203",
    "cca3":"CZE",
    "cioc":"CZE",
    "currency":[
      "CZK"
    ],
    "callingCode":[
      "420"
    ],
    "capital":"Prague",
    "altSpellings":[
      "CZ",
      "?eská republika",
      "?esko"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "ces":"Czech",
      "slk":"Slovak"
    },
    "latlng":[
      49.75,
      15.5
    ],
    "demonym":"Czech",
    "landlocked":true,
    "borders":[
      "AUT",
      "DEU",
      "POL",
      "SVK"
    ],
    "area":78865
  },
  {
    "name":{
      "common":"Germany",
      "official":"Federal Republic of Germany",
      "native":{
        "deu":{
          "official":"Bundesrepublik Deutschland",
          "common":"Deutschland"
        }
      }
    },
    "tld":[
      ".de"
    ],
    "cca2":"DE",
    "ccn3":"276",
    "cca3":"DEU",
    "cioc":"GER",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "49"
    ],
    "capital":"Berlin",
    "altSpellings":[
      "DE",
      "Federal Republic of Germany",
      "Bundesrepublik Deutschland"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "deu":"German"
    },
    "latlng":[
      51,
      9
    ],
    "demonym":"German",
    "landlocked":false,
    "borders":[
      "AUT",
      "BEL",
      "CZE",
      "DNK",
      "FRA",
      "LUX",
      "NLD",
      "POL",
      "CHE"
    ],
    "area":357114
  },
  {
    "name":{
      "common":"Djibouti",
      "official":"Republic of Djibouti",
      "native":{
        "ara":{
          "official":"??????? ??????",
          "common":"???????"
        },
        "fra":{
          "official":"République de Djibouti",
          "common":"Djibouti"
        }
      }
    },
    "tld":[
      ".dj"
    ],
    "cca2":"DJ",
    "ccn3":"262",
    "cca3":"DJI",
    "cioc":"DJI",
    "currency":[
      "DJF"
    ],
    "callingCode":[
      "253"
    ],
    "capital":"Djibouti",
    "altSpellings":[
      "DJ",
      "Jabuuti",
      "Gabuuti",
      "Republic of Djibouti",
      "République de Djibouti",
      "Gabuutih Ummuuno",
      "Jamhuuriyadda Jabuuti"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "ara":"Arabic",
      "fra":"French"
    },
    "latlng":[
      11.5,
      43
    ],
    "demonym":"Djibouti",
    "landlocked":false,
    "borders":[
      "ERI",
      "ETH",
      "SOM"
    ],
    "area":23200
  },
  {
    "name":{
      "common":"Dominica",
      "official":"Commonwealth of Dominica",
      "native":{
        "eng":{
          "official":"Commonwealth of Dominica",
          "common":"Dominica"
        }
      }
    },
    "tld":[
      ".dm"
    ],
    "cca2":"DM",
    "ccn3":"212",
    "cca3":"DMA",
    "cioc":"DMA",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1767"
    ],
    "capital":"Roseau",
    "altSpellings":[
      "DM",
      "Dominique",
      "Wai‘tu kubuli",
      "Commonwealth of Dominica"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      15.41666666,
      -61.33333333
    ],
    "demonym":"Dominican",
    "landlocked":false,
    "borders":[

    ],
    "area":751
  },
  {
    "name":{
      "common":"Denmark",
      "official":"Kingdom of Denmark",
      "native":{
        "dan":{
          "official":"Kongeriget Danmark",
          "common":"Danmark"
        }
      }
    },
    "tld":[
      ".dk"
    ],
    "cca2":"DK",
    "ccn3":"208",
    "cca3":"DNK",
    "cioc":"DEN",
    "currency":[
      "DKK"
    ],
    "callingCode":[
      "45"
    ],
    "capital":"Copenhagen",
    "altSpellings":[
      "DK",
      "Danmark",
      "Kingdom of Denmark",
      "Kongeriget Danmark"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "dan":"Danish"
    },
    "latlng":[
      56,
      10
    ],
    "demonym":"Danish",
    "landlocked":false,
    "borders":[
      "DEU"
    ],
    "area":43094
  },
  {
    "name":{
      "common":"Dominican Republic",
      "official":"Dominican Republic",
      "native":{
        "spa":{
          "official":"República Dominicana",
          "common":"República Dominicana"
        }
      }
    },
    "tld":[
      ".do"
    ],
    "cca2":"DO",
    "ccn3":"214",
    "cca3":"DOM",
    "cioc":"DOM",
    "currency":[
      "DOP"
    ],
    "callingCode":[
      "1809",
      "1829",
      "1849"
    ],
    "capital":"Santo Domingo",
    "altSpellings":[
      "DO"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      19,
      -70.66666666
    ],
    "demonym":"Dominican",
    "landlocked":false,
    "borders":[
      "HTI"
    ],
    "area":48671
  },
  {
    "name":{
      "common":"Algeria",
      "official":"People's Democratic Republic of Algeria",
      "native":{
        "ara":{
          "official":"????????? ??????????? ??????? ?????????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".dz",
      "???????."
    ],
    "cca2":"DZ",
    "ccn3":"012",
    "cca3":"DZA",
    "cioc":"ALG",
    "currency":[
      "DZD"
    ],
    "callingCode":[
      "213"
    ],
    "capital":"Algiers",
    "altSpellings":[
      "DZ",
      "Dzayer",
      "Algérie"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      28,
      3
    ],
    "demonym":"Algerian",
    "landlocked":false,
    "borders":[
      "TUN",
      "LBY",
      "NER",
      "ESH",
      "MRT",
      "MLI",
      "MAR"
    ],
    "area":2381741
  },
  {
    "name":{
      "common":"Ecuador",
      "official":"Republic of Ecuador",
      "native":{
        "spa":{
          "official":"República del Ecuador",
          "common":"Ecuador"
        }
      }
    },
    "tld":[
      ".ec"
    ],
    "cca2":"EC",
    "ccn3":"218",
    "cca3":"ECU",
    "cioc":"ECU",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "593"
    ],
    "capital":"Quito",
    "altSpellings":[
      "EC",
      "Republic of Ecuador",
      "República del Ecuador"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      -2,
      -77.5
    ],
    "demonym":"Ecuadorean",
    "landlocked":false,
    "borders":[
      "COL",
      "PER"
    ],
    "area":276841
  },
  {
    "name":{
      "common":"Egypt",
      "official":"Arab Republic of Egypt",
      "native":{
        "ara":{
          "official":"??????? ??? ???????",
          "common":"???"
        }
      }
    },
    "tld":[
      ".eg",
      ".???"
    ],
    "cca2":"EG",
    "ccn3":"818",
    "cca3":"EGY",
    "cioc":"EGY",
    "currency":[
      "EGP"
    ],
    "callingCode":[
      "20"
    ],
    "capital":"Cairo",
    "altSpellings":[
      "EG",
      "Arab Republic of Egypt"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      27,
      30
    ],
    "demonym":"Egyptian",
    "landlocked":false,
    "borders":[
      "ISR",
      "LBY",
      "SDN"
    ],
    "area":1002450
  },
  {
    "name":{
      "common":"Eritrea",
      "official":"State of Eritrea",
      "native":{
        "ara":{
          "official":"???? ??????",
          "common":"???????"
        },
        "eng":{
          "official":"State of Eritrea",
          "common":"Eritrea"
        },
        "tir":{
          "official":"??? ????",
          "common":"????"
        }
      }
    },
    "tld":[
      ".er"
    ],
    "cca2":"ER",
    "ccn3":"232",
    "cca3":"ERI",
    "cioc":"ERI",
    "currency":[
      "ERN"
    ],
    "callingCode":[
      "291"
    ],
    "capital":"Asmara",
    "altSpellings":[
      "ER",
      "State of Eritrea",
      "??? ????",
      "Dawlat Iritriyá",
      "?Ertr?",
      "Iritriy?"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "ara":"Arabic",
      "eng":"English",
      "tir":"Tigrinya"
    },
    "latlng":[
      15,
      39
    ],
    "demonym":"Eritrean",
    "landlocked":false,
    "borders":[
      "DJI",
      "ETH",
      "SDN"
    ],
    "area":117600
  },
  {
    "name":{
      "common":"Western Sahara",
      "official":"Sahrawi Arab Democratic Republic",
      "native":{
        "ber":{
          "official":"Sahrawi Arab Democratic Republic",
          "common":"Western Sahara"
        },
        "mey":{
          "official":"????????? ??????? ????????? ???????????",
          "common":"??????? ???????"
        },
        "spa":{
          "official":"República Árabe Saharaui Democrática",
          "common":"Sahara Occidental"
        }
      }
    },
    "tld":[
      ".eh"
    ],
    "cca2":"EH",
    "ccn3":"732",
    "cca3":"ESH",
    "cioc":"",
    "currency":[
      "MAD",
      "DZD",
      "MRO"
    ],
    "callingCode":[
      "212"
    ],
    "capital":"El Aaiún",
    "altSpellings":[
      "EH",
      "Tane?roft Tutrimt"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ber":"Berber",
      "mey":"Hassaniya",
      "spa":"Spanish"
    },
    "latlng":[
      24.5,
      -13
    ],
    "demonym":"Sahrawi",
    "landlocked":false,
    "borders":[
      "DZA",
      "MRT",
      "MAR"
    ],
    "area":266000
  },
  {
    "name":{
      "common":"Spain",
      "official":"Kingdom of Spain",
      "native":{
        "cat":{
          "official":"Regne d'Espanya",
          "common":"Espanya"
        },
        "eus":{
          "official":"Espainiako Erresuma",
          "common":"Espainia"
        },
        "glg":{
          "official":"Reino de España",
          "common":""
        },
        "oci":{
          "official":"Reialme d'Espanha",
          "common":"Espanha"
        },
        "spa":{
          "official":"Reino de España",
          "common":"España"
        }
      }
    },
    "tld":[
      ".es"
    ],
    "cca2":"ES",
    "ccn3":"724",
    "cca3":"ESP",
    "cioc":"ESP",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "34"
    ],
    "capital":"Madrid",
    "altSpellings":[
      "ES",
      "Kingdom of Spain",
      "Reino de España"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "cat":"Catalan",
      "eus":"Basque",
      "glg":"Galician",
      "oci":"Occitan",
      "spa":"Spanish"
    },
    "latlng":[
      40,
      -4
    ],
    "demonym":"Spanish",
    "landlocked":false,
    "borders":[
      "AND",
      "FRA",
      "GIB",
      "PRT",
      "MAR"
    ],
    "area":505992
  },
  {
    "name":{
      "common":"Estonia",
      "official":"Republic of Estonia",
      "native":{
        "est":{
          "official":"Eesti Vabariik",
          "common":"Eesti"
        }
      }
    },
    "tld":[
      ".ee"
    ],
    "cca2":"EE",
    "ccn3":"233",
    "cca3":"EST",
    "cioc":"EST",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "372"
    ],
    "capital":"Tallinn",
    "altSpellings":[
      "EE",
      "Eesti",
      "Republic of Estonia",
      "Eesti Vabariik"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "est":"Estonian"
    },
    "latlng":[
      59,
      26
    ],
    "demonym":"Estonian",
    "landlocked":false,
    "borders":[
      "LVA",
      "RUS"
    ],
    "area":45227
  },
  {
    "name":{
      "common":"Ethiopia",
      "official":"Federal Democratic Republic of Ethiopia",
      "native":{
        "amh":{
          "official":"?????? ????? ??????? ?????",
          "common":"?????"
        }
      }
    },
    "tld":[
      ".et"
    ],
    "cca2":"ET",
    "ccn3":"231",
    "cca3":"ETH",
    "cioc":"ETH",
    "currency":[
      "ETB"
    ],
    "callingCode":[
      "251"
    ],
    "capital":"Addis Ababa",
    "altSpellings":[
      "ET",
      "??ty???y?",
      "Federal Democratic Republic of Ethiopia",
      "?????? ????? ??????? ?????"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "amh":"Amharic"
    },
    "latlng":[
      8,
      38
    ],
    "demonym":"Ethiopian",
    "landlocked":true,
    "borders":[
      "DJI",
      "ERI",
      "KEN",
      "SOM",
      "SSD",
      "SDN"
    ],
    "area":1104300
  },
  {
    "name":{
      "common":"Finland",
      "official":"Republic of Finland",
      "native":{
        "fin":{
          "official":"Suomen tasavalta",
          "common":"Suomi"
        },
        "swe":{
          "official":"Republiken Finland",
          "common":"Finland"
        }
      }
    },
    "tld":[
      ".fi"
    ],
    "cca2":"FI",
    "ccn3":"246",
    "cca3":"FIN",
    "cioc":"FIN",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "358"
    ],
    "capital":"Helsinki",
    "altSpellings":[
      "FI",
      "Suomi",
      "Republic of Finland",
      "Suomen tasavalta",
      "Republiken Finland"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "fin":"Finnish",
      "swe":"Swedish"
    },
    "latlng":[
      64,
      26
    ],
    "demonym":"Finnish",
    "landlocked":false,
    "borders":[
      "NOR",
      "SWE",
      "RUS"
    ],
    "area":338424
  },
  {
    "name":{
      "common":"Fiji",
      "official":"Republic of Fiji",
      "native":{
        "eng":{
          "official":"Republic of Fiji",
          "common":"Fiji"
        },
        "fij":{
          "official":"Matanitu Tugalala o Viti",
          "common":"Viti"
        },
        "hif":{
          "official":"???????? ?? ????",
          "common":"????"
        }
      }
    },
    "tld":[
      ".fj"
    ],
    "cca2":"FJ",
    "ccn3":"242",
    "cca3":"FJI",
    "cioc":"FIJ",
    "currency":[
      "FJD"
    ],
    "callingCode":[
      "679"
    ],
    "capital":"Suva",
    "altSpellings":[
      "FJ",
      "Viti",
      "Republic of Fiji",
      "Matanitu ko Viti",
      "Fij? Ga?ar?jya"
    ],
    "region":"Oceania",
    "subregion":"Melanesia",
    "languages":{
      "eng":"English",
      "fij":"Fijian",
      "hif":"Fiji Hindi"
    },
    "latlng":[
      -18,
      175
    ],
    "demonym":"Fijian",
    "landlocked":false,
    "borders":[

    ],
    "area":18272
  },
  {
    "name":{
      "common":"Falkland Islands",
      "official":"Falkland Islands",
      "native":{
        "eng":{
          "official":"Falkland Islands",
          "common":"Falkland Islands"
        }
      }
    },
    "tld":[
      ".fk"
    ],
    "cca2":"FK",
    "ccn3":"238",
    "cca3":"FLK",
    "cioc":"",
    "currency":[
      "FKP"
    ],
    "callingCode":[
      "500"
    ],
    "capital":"Stanley",
    "altSpellings":[
      "FK",
      "Islas Malvinas",
      "Falkland Islands (Malvinas)"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -51.75,
      -59
    ],
    "demonym":"Falkland Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":12173
  },
  {
    "name":{
      "common":"France",
      "official":"French Republic",
      "native":{
        "fra":{
          "official":"République française",
          "common":"France"
        }
      }
    },
    "tld":[
      ".fr"
    ],
    "cca2":"FR",
    "ccn3":"250",
    "cca3":"FRA",
    "cioc":"FRA",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "33"
    ],
    "capital":"Paris",
    "altSpellings":[
      "FR",
      "French Republic",
      "République française"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      46,
      2
    ],
    "demonym":"French",
    "landlocked":false,
    "borders":[
      "AND",
      "BEL",
      "DEU",
      "ITA",
      "LUX",
      "MCO",
      "ESP",
      "CHE"
    ],
    "area":551695
  },
  {
    "name":{
      "common":"Faroe Islands",
      "official":"Faroe Islands",
      "native":{
        "dan":{
          "official":"Færøerne",
          "common":"Færøerne"
        },
        "fao":{
          "official":"Føroyar",
          "common":"Føroyar"
        }
      }
    },
    "tld":[
      ".fo"
    ],
    "cca2":"FO",
    "ccn3":"234",
    "cca3":"FRO",
    "cioc":"",
    "currency":[
      "DKK"
    ],
    "callingCode":[
      "298"
    ],
    "capital":"Tórshavn",
    "altSpellings":[
      "FO",
      "Føroyar",
      "Færøerne"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "dan":"Danish",
      "fao":"Faroese"
    },
    "latlng":[
      62,
      -7
    ],
    "demonym":"Faroese",
    "landlocked":false,
    "borders":[

    ],
    "area":1393
  },
  {
    "name":{
      "common":"Micronesia",
      "official":"Federated States of Micronesia",
      "native":{
        "eng":{
          "official":"Federated States of Micronesia",
          "common":"Micronesia"
        }
      }
    },
    "tld":[
      ".fm"
    ],
    "cca2":"FM",
    "ccn3":"583",
    "cca3":"FSM",
    "cioc":"FSM",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "691"
    ],
    "capital":"Palikir",
    "altSpellings":[
      "FM",
      "Federated States of Micronesia",
      "Micronesia, Federated States of"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      6.91666666,
      158.25
    ],
    "demonym":"Micronesian",
    "landlocked":false,
    "borders":[

    ],
    "area":702
  },
  {
    "name":{
      "common":"Gabon",
      "official":"Gabonese Republic",
      "native":{
        "fra":{
          "official":"République gabonaise",
          "common":"Gabon"
        }
      }
    },
    "tld":[
      ".ga"
    ],
    "cca2":"GA",
    "ccn3":"266",
    "cca3":"GAB",
    "cioc":"GAB",
    "currency":[
      "XAF"
    ],
    "callingCode":[
      "241"
    ],
    "capital":"Libreville",
    "altSpellings":[
      "GA",
      "Gabonese Republic",
      "République Gabonaise"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -1,
      11.75
    ],
    "demonym":"Gabonese",
    "landlocked":false,
    "borders":[
      "CMR",
      "COG",
      "GNQ"
    ],
    "area":267668
  },
  {
    "name":{
      "common":"United Kingdom",
      "official":"United Kingdom of Great Britain and Northern Ireland",
      "native":{
        "eng":{
          "official":"United Kingdom of Great Britain and Northern Ireland",
          "common":"United Kingdom"
        }
      }
    },
    "tld":[
      ".uk"
    ],
    "cca2":"GB",
    "ccn3":"826",
    "cca3":"GBR",
    "cioc":"GBR",
    "currency":[
      "GBP"
    ],
    "callingCode":[
      "44"
    ],
    "capital":"London",
    "altSpellings":[
      "GB",
      "UK",
      "Great Britain"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      54,
      -2
    ],
    "demonym":"British",
    "landlocked":false,
    "borders":[
      "IRL"
    ],
    "area":242900
  },
  {
    "name":{
      "common":"Georgia",
      "official":"Georgia",
      "native":{
        "kat":{
          "official":"??????????",
          "common":"??????????"
        }
      }
    },
    "tld":[
      ".ge"
    ],
    "cca2":"GE",
    "ccn3":"268",
    "cca3":"GEO",
    "cioc":"GEO",
    "currency":[
      "GEL"
    ],
    "callingCode":[
      "995"
    ],
    "capital":"Tbilisi",
    "altSpellings":[
      "GE",
      "Sakartvelo"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "kat":"Georgian"
    },
    "latlng":[
      42,
      43.5
    ],
    "demonym":"Georgian",
    "landlocked":false,
    "borders":[
      "ARM",
      "AZE",
      "RUS",
      "TUR"
    ],
    "area":69700
  },
  {
    "name":{
      "common":"Guernsey",
      "official":"Bailiwick of Guernsey",
      "native":{
        "eng":{
          "official":"Bailiwick of Guernsey",
          "common":"Guernsey"
        },
        "fra":{
          "official":"Bailliage de Guernesey",
          "common":"Guernesey"
        },
        "nfr":{
          "official":"Dgèrnésiais",
          "common":"Dgèrnésiais"
        }
      }
    },
    "tld":[
      ".gg"
    ],
    "cca2":"GG",
    "ccn3":"831",
    "cca3":"GGY",
    "cioc":"",
    "currency":[
      "GBP"
    ],
    "callingCode":[
      "44"
    ],
    "capital":"St. Peter Port",
    "altSpellings":[
      "GG",
      "Bailiwick of Guernsey",
      "Bailliage de Guernesey"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "eng":"English",
      "fra":"French",
      "nfr":"Guernésiais"
    },
    "latlng":[
      49.46666666,
      -2.58333333
    ],
    "demonym":"Channel Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":78
  },
  {
    "name":{
      "common":"Ghana",
      "official":"Republic of Ghana",
      "native":{
        "eng":{
          "official":"Republic of Ghana",
          "common":"Ghana"
        }
      }
    },
    "tld":[
      ".gh"
    ],
    "cca2":"GH",
    "ccn3":"288",
    "cca3":"GHA",
    "cioc":"GHA",
    "currency":[
      "GHS"
    ],
    "callingCode":[
      "233"
    ],
    "capital":"Accra",
    "altSpellings":[
      "GH"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      8,
      -2
    ],
    "demonym":"Ghanaian",
    "landlocked":false,
    "borders":[
      "BFA",
      "CIV",
      "TGO"
    ],
    "area":238533
  },
  {
    "name":{
      "common":"Gibraltar",
      "official":"Gibraltar",
      "native":{
        "eng":{
          "official":"Gibraltar",
          "common":"Gibraltar"
        }
      }
    },
    "tld":[
      ".gi"
    ],
    "cca2":"GI",
    "ccn3":"292",
    "cca3":"GIB",
    "cioc":"",
    "currency":[
      "GIP"
    ],
    "callingCode":[
      "350"
    ],
    "capital":"Gibraltar",
    "altSpellings":[
      "GI"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      36.13333333,
      -5.35
    ],
    "demonym":"Gibraltar",
    "landlocked":false,
    "borders":[
      "ESP"
    ],
    "area":6
  },
  {
    "name":{
      "common":"Guinea",
      "official":"Republic of Guinea",
      "native":{
        "fra":{
          "official":"République de Guinée",
          "common":"Guinée"
        }
      }
    },
    "tld":[
      ".gn"
    ],
    "cca2":"GN",
    "ccn3":"324",
    "cca3":"GIN",
    "cioc":"GUI",
    "currency":[
      "GNF"
    ],
    "callingCode":[
      "224"
    ],
    "capital":"Conakry",
    "altSpellings":[
      "GN",
      "Republic of Guinea",
      "République de Guinée"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      11,
      -10
    ],
    "demonym":"Guinean",
    "landlocked":false,
    "borders":[
      "CIV",
      "GNB",
      "LBR",
      "MLI",
      "SEN",
      "SLE"
    ],
    "area":245857
  },
  {
    "name":{
      "common":"Guadeloupe",
      "official":"Guadeloupe",
      "native":{
        "fra":{
          "official":"Guadeloupe",
          "common":"Guadeloupe"
        }
      }
    },
    "tld":[
      ".gp"
    ],
    "cca2":"GP",
    "ccn3":"312",
    "cca3":"GLP",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "590"
    ],
    "capital":"Basse-Terre",
    "altSpellings":[
      "GP",
      "Gwadloup"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      16.25,
      -61.583333
    ],
    "demonym":"Guadeloupian",
    "landlocked":false,
    "borders":[

    ],
    "area":1628
  },
  {
    "name":{
      "common":"Gambia",
      "official":"Republic of the Gambia",
      "native":{
        "eng":{
          "official":"Republic of the Gambia",
          "common":"Gambia"
        }
      }
    },
    "tld":[
      ".gm"
    ],
    "cca2":"GM",
    "ccn3":"270",
    "cca3":"GMB",
    "cioc":"GAM",
    "currency":[
      "GMD"
    ],
    "callingCode":[
      "220"
    ],
    "capital":"Banjul",
    "altSpellings":[
      "GM",
      "Republic of the Gambia"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      13.46666666,
      -16.56666666
    ],
    "demonym":"Gambian",
    "landlocked":false,
    "borders":[
      "SEN"
    ],
    "area":10689
  },
  {
    "name":{
      "common":"Guinea-Bissau",
      "official":"Republic of Guinea-Bissau",
      "native":{
        "por":{
          "official":"República da Guiné-Bissau",
          "common":"Guiné-Bissau"
        }
      }
    },
    "tld":[
      ".gw"
    ],
    "cca2":"GW",
    "ccn3":"624",
    "cca3":"GNB",
    "cioc":"GBS",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "245"
    ],
    "capital":"Bissau",
    "altSpellings":[
      "GW",
      "Republic of Guinea-Bissau",
      "República da Guiné-Bissau"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      12,
      -15
    ],
    "demonym":"Guinea-Bissauan",
    "landlocked":false,
    "borders":[
      "GIN",
      "SEN"
    ],
    "area":36125
  },
  {
    "name":{
      "common":"Equatorial Guinea",
      "official":"Republic of Equatorial Guinea",
      "native":{
        "fra":{
          "official":"République de la Guinée Équatoriale",
          "common":"Guinée équatoriale"
        },
        "por":{
          "official":"República da Guiné Equatorial",
          "common":"Guiné Equatorial"
        },
        "spa":{
          "official":"República de Guinea Ecuatorial",
          "common":"Guinea Ecuatorial"
        }
      }
    },
    "tld":[
      ".gq"
    ],
    "cca2":"GQ",
    "ccn3":"226",
    "cca3":"GNQ",
    "cioc":"GEQ",
    "currency":[
      "XAF"
    ],
    "callingCode":[
      "240"
    ],
    "capital":"Malabo",
    "altSpellings":[
      "GQ",
      "Republic of Equatorial Guinea",
      "República de Guinea Ecuatorial",
      "République de Guinée équatoriale",
      "República da Guiné Equatorial"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "fra":"French",
      "por":"Portuguese",
      "spa":"Spanish"
    },
    "latlng":[
      2,
      10
    ],
    "demonym":"Equatorial Guinean",
    "landlocked":false,
    "borders":[
      "CMR",
      "GAB"
    ],
    "area":28051
  },
  {
    "name":{
      "common":"Greece",
      "official":"Hellenic Republic",
      "native":{
        "ell":{
          "official":"???????? ??????????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".gr"
    ],
    "cca2":"GR",
    "ccn3":"300",
    "cca3":"GRC",
    "cioc":"GRE",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "30"
    ],
    "capital":"Athens",
    "altSpellings":[
      "GR",
      "Elláda",
      "Hellenic Republic",
      "???????? ??????????"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "ell":"Greek"
    },
    "latlng":[
      39,
      22
    ],
    "demonym":"Greek",
    "landlocked":false,
    "borders":[
      "ALB",
      "BGR",
      "TUR",
      "MKD"
    ],
    "area":131990
  },
  {
    "name":{
      "common":"Grenada",
      "official":"Grenada",
      "native":{
        "eng":{
          "official":"Grenada",
          "common":"Grenada"
        }
      }
    },
    "tld":[
      ".gd"
    ],
    "cca2":"GD",
    "ccn3":"308",
    "cca3":"GRD",
    "cioc":"GRN",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1473"
    ],
    "capital":"St. George's",
    "altSpellings":[
      "GD"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      12.11666666,
      -61.66666666
    ],
    "demonym":"Grenadian",
    "landlocked":false,
    "borders":[

    ],
    "area":344
  },
  {
    "name":{
      "common":"Greenland",
      "official":"Greenland",
      "native":{
        "kal":{
          "official":"Kalaallit Nunaat",
          "common":"Kalaallit Nunaat"
        }
      }
    },
    "tld":[
      ".gl"
    ],
    "cca2":"GL",
    "ccn3":"304",
    "cca3":"GRL",
    "cioc":"",
    "currency":[
      "DKK"
    ],
    "callingCode":[
      "299"
    ],
    "capital":"Nuuk",
    "altSpellings":[
      "GL",
      "Grønland"
    ],
    "region":"Americas",
    "subregion":"Northern America",
    "languages":{
      "kal":"Greenlandic"
    },
    "latlng":[
      72,
      -40
    ],
    "demonym":"Greenlandic",
    "landlocked":false,
    "borders":[

    ],
    "area":2166086
  },
  {
    "name":{
      "common":"Guatemala",
      "official":"Republic of Guatemala",
      "native":{
        "spa":{
          "official":"República de Guatemala",
          "common":"Guatemala"
        }
      }
    },
    "tld":[
      ".gt"
    ],
    "cca2":"GT",
    "ccn3":"320",
    "cca3":"GTM",
    "cioc":"GUA",
    "currency":[
      "GTQ"
    ],
    "callingCode":[
      "502"
    ],
    "capital":"Guatemala City",
    "altSpellings":[
      "GT"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      15.5,
      -90.25
    ],
    "demonym":"Guatemalan",
    "landlocked":false,
    "borders":[
      "BLZ",
      "SLV",
      "HND",
      "MEX"
    ],
    "area":108889
  },
  {
    "name":{
      "common":"French Guiana",
      "official":"Guiana",
      "native":{
        "fra":{
          "official":"Guyanes",
          "common":"Guyane française"
        }
      }
    },
    "tld":[
      ".gf"
    ],
    "cca2":"GF",
    "ccn3":"254",
    "cca3":"GUF",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "594"
    ],
    "capital":"Cayenne",
    "altSpellings":[
      "GF",
      "Guiana",
      "Guyane"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      4,
      -53
    ],
    "demonym":"",
    "landlocked":false,
    "borders":[
      "BRA",
      "SUR"
    ],
    "area":83534
  },
  {
    "name":{
      "common":"Guam",
      "official":"Guam",
      "native":{
        "cha":{
          "official":"Guåhån",
          "common":"Guåhån"
        },
        "eng":{
          "official":"Guam",
          "common":"Guam"
        },
        "spa":{
          "official":"Guam",
          "common":"Guam"
        }
      }
    },
    "tld":[
      ".gu"
    ],
    "cca2":"GU",
    "ccn3":"316",
    "cca3":"GUM",
    "cioc":"GUM",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1671"
    ],
    "capital":"Hagåtña",
    "altSpellings":[
      "GU",
      "Guåhån"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "cha":"Chamorro",
      "eng":"English",
      "spa":"Spanish"
    },
    "latlng":[
      13.46666666,
      144.78333333
    ],
    "demonym":"Guamanian",
    "landlocked":false,
    "borders":[

    ],
    "area":549
  },
  {
    "name":{
      "common":"Guyana",
      "official":"Co-operative Republic of Guyana",
      "native":{
        "eng":{
          "official":"Co-operative Republic of Guyana",
          "common":"Guyana"
        }
      }
    },
    "tld":[
      ".gy"
    ],
    "cca2":"GY",
    "ccn3":"328",
    "cca3":"GUY",
    "cioc":"GUY",
    "currency":[
      "GYD"
    ],
    "callingCode":[
      "592"
    ],
    "capital":"Georgetown",
    "altSpellings":[
      "GY",
      "Co-operative Republic of Guyana"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      5,
      -59
    ],
    "demonym":"Guyanese",
    "landlocked":false,
    "borders":[
      "BRA",
      "SUR",
      "VEN"
    ],
    "area":214969
  },
  {
    "name":{
      "common":"Hong Kong",
      "official":"Hong Kong Special Administrative Region of the People's Republic of China",
      "native":{
        "eng":{
          "official":"Hong Kong Special Administrative Region of the People's Republic of China",
          "common":"Hong Kong"
        },
        "zho":{
          "official":"??????????????",
          "common":"??"
        }
      }
    },
    "tld":[
      ".hk",
      ".??"
    ],
    "cca2":"HK",
    "ccn3":"344",
    "cca3":"HKG",
    "cioc":"HKG",
    "currency":[
      "HKD"
    ],
    "callingCode":[
      "852"
    ],
    "capital":"City of Victoria",
    "altSpellings":[
      "HK"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "eng":"English",
      "zho":"Chinese"
    },
    "latlng":[
      22.267,
      114.188
    ],
    "demonym":"Hong Konger",
    "landlocked":false,
    "borders":[
      "CHN"
    ],
    "area":1104
  },
  {
    "name":{
      "common":"Heard Island and McDonald Islands",
      "official":"Heard Island and McDonald Islands",
      "native":{
        "eng":{
          "official":"Heard Island and McDonald Islands",
          "common":"Heard Island and McDonald Islands"
        }
      }
    },
    "tld":[
      ".hm",
      ".aq"
    ],
    "cca2":"HM",
    "ccn3":"334",
    "cca3":"HMD",
    "cioc":"",
    "currency":[
      "AUD"
    ],
    "callingCode":[

    ],
    "capital":"",
    "altSpellings":[
      "HM",
      "Heard Island and McDonald Islands"
    ],
    "region":"",
    "subregion":"",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -53.1,
      72.51666666
    ],
    "demonym":"Heard and McDonald Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":412
  },
  {
    "name":{
      "common":"Honduras",
      "official":"Republic of Honduras",
      "native":{
        "spa":{
          "official":"República de Honduras",
          "common":"Honduras"
        }
      }
    },
    "tld":[
      ".hn"
    ],
    "cca2":"HN",
    "ccn3":"340",
    "cca3":"HND",
    "cioc":"HON",
    "currency":[
      "HNL"
    ],
    "callingCode":[
      "504"
    ],
    "capital":"Tegucigalpa",
    "altSpellings":[
      "HN",
      "Republic of Honduras",
      "República de Honduras"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      15,
      -86.5
    ],
    "demonym":"Honduran",
    "landlocked":false,
    "borders":[
      "GTM",
      "SLV",
      "NIC"
    ],
    "area":112492
  },
  {
    "name":{
      "common":"Croatia",
      "official":"Republic of Croatia",
      "native":{
        "hrv":{
          "official":"Republika Hrvatska",
          "common":"Hrvatska"
        }
      }
    },
    "tld":[
      ".hr"
    ],
    "cca2":"HR",
    "ccn3":"191",
    "cca3":"HRV",
    "cioc":"CRO",
    "currency":[
      "HRK"
    ],
    "callingCode":[
      "385"
    ],
    "capital":"Zagreb",
    "altSpellings":[
      "HR",
      "Hrvatska",
      "Republic of Croatia",
      "Republika Hrvatska"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "hrv":"Croatian"
    },
    "latlng":[
      45.16666666,
      15.5
    ],
    "demonym":"Croatian",
    "landlocked":false,
    "borders":[
      "BIH",
      "HUN",
      "MNE",
      "SRB",
      "SVN"
    ],
    "area":56594
  },
  {
    "name":{
      "common":"Haiti",
      "official":"Republic of Haiti",
      "native":{
        "fra":{
          "official":"République d'Haïti",
          "common":"Haïti"
        },
        "hat":{
          "official":"Repiblik Ayiti",
          "common":"Ayiti"
        }
      }
    },
    "tld":[
      ".ht"
    ],
    "cca2":"HT",
    "ccn3":"332",
    "cca3":"HTI",
    "cioc":"HAI",
    "currency":[
      "HTG",
      "USD"
    ],
    "callingCode":[
      "509"
    ],
    "capital":"Port-au-Prince",
    "altSpellings":[
      "HT",
      "Republic of Haiti",
      "République d'Haïti",
      "Repiblik Ayiti"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "fra":"French",
      "hat":"Haitian Creole"
    },
    "latlng":[
      19,
      -72.41666666
    ],
    "demonym":"Haitian",
    "landlocked":false,
    "borders":[
      "DOM"
    ],
    "area":27750
  },
  {
    "name":{
      "common":"Hungary",
      "official":"Hungary",
      "native":{
        "hun":{
          "official":"Magyarország",
          "common":"Magyarország"
        }
      }
    },
    "tld":[
      ".hu"
    ],
    "cca2":"HU",
    "ccn3":"348",
    "cca3":"HUN",
    "cioc":"HUN",
    "currency":[
      "HUF"
    ],
    "callingCode":[
      "36"
    ],
    "capital":"Budapest",
    "altSpellings":[
      "HU"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "hun":"Hungarian"
    },
    "latlng":[
      47,
      20
    ],
    "demonym":"Hungarian",
    "landlocked":true,
    "borders":[
      "AUT",
      "HRV",
      "ROU",
      "SRB",
      "SVK",
      "SVN",
      "UKR"
    ],
    "area":93028
  },
  {
    "name":{
      "common":"Indonesia",
      "official":"Republic of Indonesia",
      "native":{
        "ind":{
          "official":"Republik Indonesia",
          "common":"Indonesia"
        }
      }
    },
    "tld":[
      ".id"
    ],
    "cca2":"ID",
    "ccn3":"360",
    "cca3":"IDN",
    "cioc":"INA",
    "currency":[
      "IDR"
    ],
    "callingCode":[
      "62"
    ],
    "capital":"Jakarta",
    "altSpellings":[
      "ID",
      "Republic of Indonesia",
      "Republik Indonesia"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "ind":"Indonesian"
    },
    "latlng":[
      -5,
      120
    ],
    "demonym":"Indonesian",
    "landlocked":false,
    "borders":[
      "TLS",
      "MYS",
      "PNG"
    ],
    "area":1904569
  },
  {
    "name":{
      "common":"Isle of Man",
      "official":"Isle of Man",
      "native":{
        "eng":{
          "official":"Isle of Man",
          "common":"Isle of Man"
        },
        "glv":{
          "official":"Ellan Vannin or Mannin",
          "common":"Mannin"
        }
      }
    },
    "tld":[
      ".im"
    ],
    "cca2":"IM",
    "ccn3":"833",
    "cca3":"IMN",
    "cioc":"",
    "currency":[
      "GBP"
    ],
    "callingCode":[
      "44"
    ],
    "capital":"Douglas",
    "altSpellings":[
      "IM",
      "Ellan Vannin",
      "Mann",
      "Mannin"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "eng":"English",
      "glv":"Manx"
    },
    "latlng":[
      54.25,
      -4.5
    ],
    "demonym":"Manx",
    "landlocked":false,
    "borders":[

    ],
    "area":572
  },
  {
    "name":{
      "common":"India",
      "official":"Republic of India",
      "native":{
        "eng":{
          "official":"Republic of India",
          "common":"India"
        },
        "hin":{
          "official":"???? ???????",
          "common":"????"
        },
        "tam":{
          "official":"???????? ????????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".in"
    ],
    "cca2":"IN",
    "ccn3":"356",
    "cca3":"IND",
    "cioc":"IND",
    "currency":[
      "INR"
    ],
    "callingCode":[
      "91"
    ],
    "capital":"New Delhi",
    "altSpellings":[
      "IN",
      "Bh?rat",
      "Republic of India",
      "Bharat Ganrajya",
      "???????"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "eng":"English",
      "hin":"Hindi",
      "tam":"Tamil"
    },
    "latlng":[
      20,
      77
    ],
    "demonym":"Indian",
    "landlocked":false,
    "borders":[
      "AFG",
      "BGD",
      "BTN",
      "MMR",
      "CHN",
      "NPL",
      "PAK",
      "LKA"
    ],
    "area":3287590
  },
  {
    "name":{
      "common":"British Indian Ocean Territory",
      "official":"British Indian Ocean Territory",
      "native":{
        "eng":{
          "official":"British Indian Ocean Territory",
          "common":"British Indian Ocean Territory"
        }
      }
    },
    "tld":[
      ".io"
    ],
    "cca2":"IO",
    "ccn3":"086",
    "cca3":"IOT",
    "cioc":"",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "246"
    ],
    "capital":"Diego Garcia",
    "altSpellings":[
      "IO"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -6,
      71.5
    ],
    "demonym":"Indian",
    "landlocked":false,
    "borders":[

    ],
    "area":60
  },
  {
    "name":{
      "common":"Ireland",
      "official":"Republic of Ireland",
      "native":{
        "eng":{
          "official":"Republic of Ireland",
          "common":"Ireland"
        },
        "gle":{
          "official":"Poblacht na hÉireann",
          "common":"Éire"
        }
      }
    },
    "tld":[
      ".ie"
    ],
    "cca2":"IE",
    "ccn3":"372",
    "cca3":"IRL",
    "cioc":"IRL",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "353"
    ],
    "capital":"Dublin",
    "altSpellings":[
      "IE",
      "Éire",
      "Republic of Ireland",
      "Poblacht na hÉireann"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "eng":"English",
      "gle":"Irish"
    },
    "latlng":[
      53,
      -8
    ],
    "demonym":"Irish",
    "landlocked":false,
    "borders":[
      "GBR"
    ],
    "area":70273
  },
  {
    "name":{
      "common":"Iran",
      "official":"Islamic Republic of Iran",
      "native":{
        "fas":{
          "official":"?????? ?????? ?????",
          "common":"?????"
        }
      }
    },
    "tld":[
      ".ir",
      "?????."
    ],
    "cca2":"IR",
    "ccn3":"364",
    "cca3":"IRN",
    "cioc":"IRI",
    "currency":[
      "IRR"
    ],
    "callingCode":[
      "98"
    ],
    "capital":"Tehran",
    "altSpellings":[
      "IR",
      "Islamic Republic of Iran",
      "Iran, Islamic Republic of",
      "Jomhuri-ye Esl?mi-ye Ir?n"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "fas":"Persian"
    },
    "latlng":[
      32,
      53
    ],
    "demonym":"Iranian",
    "landlocked":false,
    "borders":[
      "AFG",
      "ARM",
      "AZE",
      "IRQ",
      "PAK",
      "TUR",
      "TKM"
    ],
    "area":1648195
  },
  {
    "name":{
      "common":"Iraq",
      "official":"Republic of Iraq",
      "native":{
        "ara":{
          "official":"??????? ??????",
          "common":"??????"
        },
        "arc":{
          "official":"??????? ??????",
          "common":"???????"
        },
        "ckb":{
          "official":"?????? ?????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".iq"
    ],
    "cca2":"IQ",
    "ccn3":"368",
    "cca3":"IRQ",
    "cioc":"IRQ",
    "currency":[
      "IQD"
    ],
    "callingCode":[
      "964"
    ],
    "capital":"Baghdad",
    "altSpellings":[
      "IQ",
      "Republic of Iraq",
      "Jumh?riyyat al-‘Ir?q"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic",
      "arc":"Aramaic",
      "ckb":"Sorani"
    },
    "latlng":[
      33,
      44
    ],
    "demonym":"Iraqi",
    "landlocked":false,
    "borders":[
      "IRN",
      "JOR",
      "KWT",
      "SAU",
      "SYR",
      "TUR"
    ],
    "area":438317
  },
  {
    "name":{
      "common":"Iceland",
      "official":"Iceland",
      "native":{
        "isl":{
          "official":"Ísland",
          "common":"Ísland"
        }
      }
    },
    "tld":[
      ".is"
    ],
    "cca2":"IS",
    "ccn3":"352",
    "cca3":"ISL",
    "cioc":"ISL",
    "currency":[
      "ISK"
    ],
    "callingCode":[
      "354"
    ],
    "capital":"Reykjavik",
    "altSpellings":[
      "IS",
      "Island",
      "Republic of Iceland",
      "Lığveldiğ Ísland"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "isl":"Icelandic"
    },
    "latlng":[
      65,
      -18
    ],
    "demonym":"Icelander",
    "landlocked":false,
    "borders":[

    ],
    "area":103000
  },
  {
    "name":{
      "common":"Israel",
      "official":"State of Israel",
      "native":{
        "ara":{
          "official":"???? ???????",
          "common":"???????"
        },
        "heb":{
          "official":"????? ?????",
          "common":"?????"
        }
      }
    },
    "tld":[
      ".il"
    ],
    "cca2":"IL",
    "ccn3":"376",
    "cca3":"ISR",
    "cioc":"ISR",
    "currency":[
      "ILS"
    ],
    "callingCode":[
      "972"
    ],
    "capital":"Jerusalem",
    "altSpellings":[
      "IL",
      "State of Israel",
      "Med?nat Yisr?'el"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic",
      "heb":"Hebrew"
    },
    "latlng":[
      31.47,
      35.13
    ],
    "demonym":"Israeli",
    "landlocked":false,
    "borders":[
      "EGY",
      "JOR",
      "LBN",
      "SYR"
    ],
    "area":20770
  },
  {
    "name":{
      "common":"Italy",
      "official":"Italian Republic",
      "native":{
        "bar":{
          "official":"Italienische Republik",
          "common":"Italien"
        },
        "ita":{
          "official":"Repubblica italiana",
          "common":"Italia"
        },
        "srd":{
          "official":"Repubbricanu Italia",
          "common":"Italia"
        }
      }
    },
    "tld":[
      ".it"
    ],
    "cca2":"IT",
    "ccn3":"380",
    "cca3":"ITA",
    "cioc":"ITA",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "39"
    ],
    "capital":"Rome",
    "altSpellings":[
      "IT",
      "Italian Republic",
      "Repubblica italiana"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "bar":"Austro-Bavarian German",
      "ita":"Italian",
      "srd":"Sardinian"
    },
    "latlng":[
      42.83333333,
      12.83333333
    ],
    "demonym":"Italian",
    "landlocked":false,
    "borders":[
      "AUT",
      "FRA",
      "SMR",
      "SVN",
      "CHE",
      "VAT"
    ],
    "area":301336
  },
  {
    "name":{
      "common":"Jamaica",
      "official":"Jamaica",
      "native":{
        "eng":{
          "official":"Jamaica",
          "common":"Jamaica"
        },
        "jam":{
          "official":"Jamaica",
          "common":"Jamaica"
        }
      }
    },
    "tld":[
      ".jm"
    ],
    "cca2":"JM",
    "ccn3":"388",
    "cca3":"JAM",
    "cioc":"JAM",
    "currency":[
      "JMD"
    ],
    "callingCode":[
      "1876"
    ],
    "capital":"Kingston",
    "altSpellings":[
      "JM"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English",
      "jam":"Jamaican Patois"
    },
    "latlng":[
      18.25,
      -77.5
    ],
    "demonym":"Jamaican",
    "landlocked":false,
    "borders":[

    ],
    "area":10991
  },
  {
    "name":{
      "common":"Jersey",
      "official":"Bailiwick of Jersey",
      "native":{
        "eng":{
          "official":"Bailiwick of Jersey",
          "common":"Jersey"
        },
        "fra":{
          "official":"Bailliage de Jersey",
          "common":"Jersey"
        },
        "nrf":{
          "official":"Bailliage dé Jèrri",
          "common":"Jèrri"
        }
      }
    },
    "tld":[
      ".je"
    ],
    "cca2":"JE",
    "ccn3":"832",
    "cca3":"JEY",
    "cioc":"",
    "currency":[
      "GBP"
    ],
    "callingCode":[
      "44"
    ],
    "capital":"Saint Helier",
    "altSpellings":[
      "JE",
      "Bailiwick of Jersey",
      "Bailliage de Jersey",
      "Bailliage dé Jèrri"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "eng":"English",
      "fra":"French",
      "nrf":"Jèrriais"
    },
    "latlng":[
      49.25,
      -2.16666666
    ],
    "demonym":"Channel Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":116
  },
  {
    "name":{
      "common":"Jordan",
      "official":"Hashemite Kingdom of Jordan",
      "native":{
        "ara":{
          "official":"??????? ???????? ????????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".jo",
      "??????."
    ],
    "cca2":"JO",
    "ccn3":"400",
    "cca3":"JOR",
    "cioc":"JOR",
    "currency":[
      "JOD"
    ],
    "callingCode":[
      "962"
    ],
    "capital":"Amman",
    "altSpellings":[
      "JO",
      "Hashemite Kingdom of Jordan",
      "al-Mamlakah al-Urdun?yah al-H?shim?yah"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      31,
      36
    ],
    "demonym":"Jordanian",
    "landlocked":false,
    "borders":[
      "IRQ",
      "ISR",
      "SAU",
      "SYR"
    ],
    "area":89342
  },
  {
    "name":{
      "common":"Japan",
      "official":"Japan",
      "native":{
        "jpn":{
          "official":"??",
          "common":"??"
        }
      }
    },
    "tld":[
      ".jp",
      ".???"
    ],
    "cca2":"JP",
    "ccn3":"392",
    "cca3":"JPN",
    "cioc":"JPN",
    "currency":[
      "JPY"
    ],
    "callingCode":[
      "81"
    ],
    "capital":"Tokyo",
    "altSpellings":[
      "JP",
      "Nippon",
      "Nihon"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "jpn":"Japanese"
    },
    "latlng":[
      36,
      138
    ],
    "demonym":"Japanese",
    "landlocked":false,
    "borders":[

    ],
    "area":377930
  },
  {
    "name":{
      "common":"Kazakhstan",
      "official":"Republic of Kazakhstan",
      "native":{
        "kaz":{
          "official":"????????? ????????????",
          "common":"?????????"
        },
        "rus":{
          "official":"?????????? ?????????",
          "common":"?????????"
        }
      }
    },
    "tld":[
      ".kz",
      ".???"
    ],
    "cca2":"KZ",
    "ccn3":"398",
    "cca3":"KAZ",
    "cioc":"KAZ",
    "currency":[
      "KZT"
    ],
    "callingCode":[
      "76",
      "77"
    ],
    "capital":"Astana",
    "altSpellings":[
      "KZ",
      "Qazaqstan",
      "?????????",
      "Republic of Kazakhstan",
      "????????? ????????????",
      "Qazaqstan Respublïkas?",
      "?????????? ?????????",
      "Respublika Kazakhstan"
    ],
    "region":"Asia",
    "subregion":"Central Asia",
    "languages":{
      "kaz":"Kazakh",
      "rus":"Russian"
    },
    "latlng":[
      48,
      68
    ],
    "demonym":"Kazakhstani",
    "landlocked":true,
    "borders":[
      "CHN",
      "KGZ",
      "RUS",
      "TKM",
      "UZB"
    ],
    "area":2724900
  },
  {
    "name":{
      "common":"Kenya",
      "official":"Republic of Kenya",
      "native":{
        "eng":{
          "official":"Republic of Kenya",
          "common":"Kenya"
        },
        "swa":{
          "official":"Republic of Kenya",
          "common":"Kenya"
        }
      }
    },
    "tld":[
      ".ke"
    ],
    "cca2":"KE",
    "ccn3":"404",
    "cca3":"KEN",
    "cioc":"KEN",
    "currency":[
      "KES"
    ],
    "callingCode":[
      "254"
    ],
    "capital":"Nairobi",
    "altSpellings":[
      "KE",
      "Republic of Kenya",
      "Jamhuri ya Kenya"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English",
      "swa":"Swahili"
    },
    "latlng":[
      1,
      38
    ],
    "demonym":"Kenyan",
    "landlocked":false,
    "borders":[
      "ETH",
      "SOM",
      "SSD",
      "TZA",
      "UGA"
    ],
    "area":580367
  },
  {
    "name":{
      "common":"Kyrgyzstan",
      "official":"Kyrgyz Republic",
      "native":{
        "kir":{
          "official":"?????? ????????????",
          "common":"??????????"
        },
        "rus":{
          "official":"?????????? ??????????",
          "common":"????????"
        }
      }
    },
    "tld":[
      ".kg"
    ],
    "cca2":"KG",
    "ccn3":"417",
    "cca3":"KGZ",
    "cioc":"KGZ",
    "currency":[
      "KGS"
    ],
    "callingCode":[
      "996"
    ],
    "capital":"Bishkek",
    "altSpellings":[
      "KG",
      "????????",
      "Kyrgyz Republic",
      "?????? ????????????",
      "Kyrgyz Respublikasy"
    ],
    "region":"Asia",
    "subregion":"Central Asia",
    "languages":{
      "kir":"Kyrgyz",
      "rus":"Russian"
    },
    "latlng":[
      41,
      75
    ],
    "demonym":"Kirghiz",
    "landlocked":true,
    "borders":[
      "CHN",
      "KAZ",
      "TJK",
      "UZB"
    ],
    "area":199951
  },
  {
    "name":{
      "common":"Cambodia",
      "official":"Kingdom of Cambodia",
      "native":{
        "khm":{
          "official":"?????????????????????",
          "common":"Kâmp?chéa"
        }
      }
    },
    "tld":[
      ".kh"
    ],
    "cca2":"KH",
    "ccn3":"116",
    "cca3":"KHM",
    "cioc":"CAM",
    "currency":[
      "KHR"
    ],
    "callingCode":[
      "855"
    ],
    "capital":"Phnom Penh",
    "altSpellings":[
      "KH",
      "Kingdom of Cambodia"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "khm":"Khmer"
    },
    "latlng":[
      13,
      105
    ],
    "demonym":"Cambodian",
    "landlocked":false,
    "borders":[
      "LAO",
      "THA",
      "VNM"
    ],
    "area":181035
  },
  {
    "name":{
      "common":"Kiribati",
      "official":"Independent and Sovereign Republic of Kiribati",
      "native":{
        "eng":{
          "official":"Independent and Sovereign Republic of Kiribati",
          "common":"Kiribati"
        },
        "gil":{
          "official":"Ribaberiki Kiribati",
          "common":"Kiribati"
        }
      }
    },
    "tld":[
      ".ki"
    ],
    "cca2":"KI",
    "ccn3":"296",
    "cca3":"KIR",
    "cioc":"KIR",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "686"
    ],
    "capital":"South Tarawa",
    "altSpellings":[
      "KI",
      "Republic of Kiribati",
      "Ribaberiki Kiribati"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "eng":"English",
      "gil":"Gilbertese"
    },
    "latlng":[
      1.41666666,
      173
    ],
    "demonym":"I-Kiribati",
    "landlocked":false,
    "borders":[

    ],
    "area":811
  },
  {
    "name":{
      "common":"Saint Kitts and Nevis",
      "official":"Federation of Saint Christopher and Nevisa",
      "native":{
        "eng":{
          "official":"Federation of Saint Christopher and Nevisa",
          "common":"Saint Kitts and Nevis"
        }
      }
    },
    "tld":[
      ".kn"
    ],
    "cca2":"KN",
    "ccn3":"659",
    "cca3":"KNA",
    "cioc":"SKN",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1869"
    ],
    "capital":"Basseterre",
    "altSpellings":[
      "KN",
      "Federation of Saint Christopher and Nevis"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      17.33333333,
      -62.75
    ],
    "demonym":"Kittitian or Nevisian",
    "landlocked":false,
    "borders":[

    ],
    "area":261
  },
  {
    "name":{
      "common":"South Korea",
      "official":"Republic of Korea",
      "native":{
        "kor":{
          "official":"??",
          "common":"????"
        }
      }
    },
    "tld":[
      ".kr",
      ".??"
    ],
    "cca2":"KR",
    "ccn3":"410",
    "cca3":"KOR",
    "cioc":"KOR",
    "currency":[
      "KRW"
    ],
    "callingCode":[
      "82"
    ],
    "capital":"Seoul",
    "altSpellings":[
      "KR",
      "Korea, Republic of",
      "Republic of Korea"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "kor":"Korean"
    },
    "latlng":[
      37,
      127.5
    ],
    "demonym":"South Korean",
    "landlocked":false,
    "borders":[
      "PRK"
    ],
    "area":100210
  },
  {
    "name":{
      "common":"Kosovo",
      "official":"Republic of Kosovo",
      "native":{
        "sqi":{
          "official":"Republika e Kosovës",
          "common":"Kosova"
        },
        "srp":{
          "official":"????????? ??????",
          "common":"??????"
        }
      }
    },
    "tld":[

    ],
    "cca2":"XK",
    "ccn3":"",
    "cca3":"UNK",
    "cioc":"KOS",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "383"
    ],
    "capital":"Pristina",
    "altSpellings":[
      "XK",
      "????????? ??????"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "sqi":"Albanian",
      "srp":"Serbian"
    },
    "latlng":[
      42.666667,
      21.166667
    ],
    "demonym":"Kosovar",
    "landlocked":true,
    "borders":[
      "ALB",
      "MKD",
      "MNE",
      "SRB"
    ],
    "area":10908
  },
  {
    "name":{
      "common":"Kuwait",
      "official":"State of Kuwait",
      "native":{
        "ara":{
          "official":"???? ??????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".kw"
    ],
    "cca2":"KW",
    "ccn3":"414",
    "cca3":"KWT",
    "cioc":"KUW",
    "currency":[
      "KWD"
    ],
    "callingCode":[
      "965"
    ],
    "capital":"Kuwait City",
    "altSpellings":[
      "KW",
      "State of Kuwait",
      "Dawlat al-Kuwait"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      29.5,
      45.75
    ],
    "demonym":"Kuwaiti",
    "landlocked":false,
    "borders":[
      "IRQ",
      "SAU"
    ],
    "area":17818
  },
  {
    "name":{
      "common":"Laos",
      "official":"Lao People's Democratic Republic",
      "native":{
        "lao":{
          "official":"???????? ???????? ?????? ???",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".la"
    ],
    "cca2":"LA",
    "ccn3":"418",
    "cca3":"LAO",
    "cioc":"LAO",
    "currency":[
      "LAK"
    ],
    "callingCode":[
      "856"
    ],
    "capital":"Vientiane",
    "altSpellings":[
      "LA",
      "Lao",
      "Lao People's Democratic Republic",
      "Sathalanalat Paxathipatai Paxaxon Lao"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "lao":"Lao"
    },
    "latlng":[
      18,
      105
    ],
    "demonym":"Laotian",
    "landlocked":true,
    "borders":[
      "MMR",
      "KHM",
      "CHN",
      "THA",
      "VNM"
    ],
    "area":236800
  },
  {
    "name":{
      "common":"Lebanon",
      "official":"Lebanese Republic",
      "native":{
        "ara":{
          "official":"????????? ?????????",
          "common":"?????"
        },
        "fra":{
          "official":"République libanaise",
          "common":"Liban"
        }
      }
    },
    "tld":[
      ".lb"
    ],
    "cca2":"LB",
    "ccn3":"422",
    "cca3":"LBN",
    "cioc":"LIB",
    "currency":[
      "LBP"
    ],
    "callingCode":[
      "961"
    ],
    "capital":"Beirut",
    "altSpellings":[
      "LB",
      "Lebanese Republic",
      "Al-Jumh?r?yah Al-Libn?n?yah"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic",
      "fra":"French"
    },
    "latlng":[
      33.83333333,
      35.83333333
    ],
    "demonym":"Lebanese",
    "landlocked":false,
    "borders":[
      "ISR",
      "SYR"
    ],
    "area":10452
  },
  {
    "name":{
      "common":"Liberia",
      "official":"Republic of Liberia",
      "native":{
        "eng":{
          "official":"Republic of Liberia",
          "common":"Liberia"
        }
      }
    },
    "tld":[
      ".lr"
    ],
    "cca2":"LR",
    "ccn3":"430",
    "cca3":"LBR",
    "cioc":"LBR",
    "currency":[
      "LRD"
    ],
    "callingCode":[
      "231"
    ],
    "capital":"Monrovia",
    "altSpellings":[
      "LR",
      "Republic of Liberia"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      6.5,
      -9.5
    ],
    "demonym":"Liberian",
    "landlocked":false,
    "borders":[
      "GIN",
      "CIV",
      "SLE"
    ],
    "area":111369
  },
  {
    "name":{
      "common":"Libya",
      "official":"State of Libya",
      "native":{
        "ara":{
          "official":"?????? ?????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".ly"
    ],
    "cca2":"LY",
    "ccn3":"434",
    "cca3":"LBY",
    "cioc":"LBA",
    "currency":[
      "LYD"
    ],
    "callingCode":[
      "218"
    ],
    "capital":"Tripoli",
    "altSpellings":[
      "LY",
      "State of Libya",
      "Dawlat Libya"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      25,
      17
    ],
    "demonym":"Libyan",
    "landlocked":false,
    "borders":[
      "DZA",
      "TCD",
      "EGY",
      "NER",
      "SDN",
      "TUN"
    ],
    "area":1759540
  },
  {
    "name":{
      "common":"Saint Lucia",
      "official":"Saint Lucia",
      "native":{
        "eng":{
          "official":"Saint Lucia",
          "common":"Saint Lucia"
        }
      }
    },
    "tld":[
      ".lc"
    ],
    "cca2":"LC",
    "ccn3":"662",
    "cca3":"LCA",
    "cioc":"LCA",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1758"
    ],
    "capital":"Castries",
    "altSpellings":[
      "LC"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      13.88333333,
      -60.96666666
    ],
    "demonym":"Saint Lucian",
    "landlocked":false,
    "borders":[

    ],
    "area":616
  },
  {
    "name":{
      "common":"Liechtenstein",
      "official":"Principality of Liechtenstein",
      "native":{
        "deu":{
          "official":"Fürstentum Liechtenstein",
          "common":"Liechtenstein"
        }
      }
    },
    "tld":[
      ".li"
    ],
    "cca2":"LI",
    "ccn3":"438",
    "cca3":"LIE",
    "cioc":"LIE",
    "currency":[
      "CHF"
    ],
    "callingCode":[
      "423"
    ],
    "capital":"Vaduz",
    "altSpellings":[
      "LI",
      "Principality of Liechtenstein",
      "Fürstentum Liechtenstein"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "deu":"German"
    },
    "latlng":[
      47.26666666,
      9.53333333
    ],
    "demonym":"Liechtensteiner",
    "landlocked":true,
    "borders":[
      "AUT",
      "CHE"
    ],
    "area":160
  },
  {
    "name":{
      "common":"Sri Lanka",
      "official":"Democratic Socialist Republic of Sri Lanka",
      "native":{
        "sin":{
          "official":"????? ???? ???????????????? ???????? ?????",
          "common":"????? ?????"
        },
        "tam":{
          "official":"?????? ?????? ???????? ????????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".lk",
      ".??????",
      ".????"
    ],
    "cca2":"LK",
    "ccn3":"144",
    "cca3":"LKA",
    "cioc":"SRI",
    "currency":[
      "LKR"
    ],
    "callingCode":[
      "94"
    ],
    "capital":"Colombo",
    "altSpellings":[
      "LK",
      "ila?kai",
      "Democratic Socialist Republic of Sri Lanka"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "sin":"Sinhala",
      "tam":"Tamil"
    },
    "latlng":[
      7,
      81
    ],
    "demonym":"Sri Lankan",
    "landlocked":false,
    "borders":[
      "IND"
    ],
    "area":65610
  },
  {
    "name":{
      "common":"Lesotho",
      "official":"Kingdom of Lesotho",
      "native":{
        "eng":{
          "official":"Kingdom of Lesotho",
          "common":"Lesotho"
        },
        "sot":{
          "official":"Kingdom of Lesotho",
          "common":"Lesotho"
        }
      }
    },
    "tld":[
      ".ls"
    ],
    "cca2":"LS",
    "ccn3":"426",
    "cca3":"LSO",
    "cioc":"LES",
    "currency":[
      "LSL",
      "ZAR"
    ],
    "callingCode":[
      "266"
    ],
    "capital":"Maseru",
    "altSpellings":[
      "LS",
      "Kingdom of Lesotho",
      "Muso oa Lesotho"
    ],
    "region":"Africa",
    "subregion":"Southern Africa",
    "languages":{
      "eng":"English",
      "sot":"Sotho"
    },
    "latlng":[
      -29.5,
      28.5
    ],
    "demonym":"Mosotho",
    "landlocked":true,
    "borders":[
      "ZAF"
    ],
    "area":30355
  },
  {
    "name":{
      "common":"Lithuania",
      "official":"Republic of Lithuania",
      "native":{
        "lit":{
          "official":"Lietuvos Respublikos",
          "common":"Lietuva"
        }
      }
    },
    "tld":[
      ".lt"
    ],
    "cca2":"LT",
    "ccn3":"440",
    "cca3":"LTU",
    "cioc":"LTU",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "370"
    ],
    "capital":"Vilnius",
    "altSpellings":[
      "LT",
      "Republic of Lithuania",
      "Lietuvos Respublika"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "lit":"Lithuanian"
    },
    "latlng":[
      56,
      24
    ],
    "demonym":"Lithuanian",
    "landlocked":false,
    "borders":[
      "BLR",
      "LVA",
      "POL",
      "RUS"
    ],
    "area":65300
  },
  {
    "name":{
      "common":"Luxembourg",
      "official":"Grand Duchy of Luxembourg",
      "native":{
        "deu":{
          "official":"Großherzogtum Luxemburg",
          "common":"Luxemburg"
        },
        "fra":{
          "official":"Grand-Duché de Luxembourg",
          "common":"Luxembourg"
        },
        "ltz":{
          "official":"Groussherzogtum Lëtzebuerg",
          "common":"Lëtzebuerg"
        }
      }
    },
    "tld":[
      ".lu"
    ],
    "cca2":"LU",
    "ccn3":"442",
    "cca3":"LUX",
    "cioc":"LUX",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "352"
    ],
    "capital":"Luxembourg",
    "altSpellings":[
      "LU",
      "Grand Duchy of Luxembourg",
      "Grand-Duché de Luxembourg",
      "Großherzogtum Luxemburg",
      "Groussherzogtum Lëtzebuerg"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "deu":"German",
      "fra":"French",
      "ltz":"Luxembourgish"
    },
    "latlng":[
      49.75,
      6.16666666
    ],
    "demonym":"Luxembourger",
    "landlocked":true,
    "borders":[
      "BEL",
      "FRA",
      "DEU"
    ],
    "area":2586
  },
  {
    "name":{
      "common":"Latvia",
      "official":"Republic of Latvia",
      "native":{
        "lav":{
          "official":"Latvijas Republikas",
          "common":"Latvija"
        }
      }
    },
    "tld":[
      ".lv"
    ],
    "cca2":"LV",
    "ccn3":"428",
    "cca3":"LVA",
    "cioc":"LAT",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "371"
    ],
    "capital":"Riga",
    "altSpellings":[
      "LV",
      "Republic of Latvia",
      "Latvijas Republika"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "lav":"Latvian"
    },
    "latlng":[
      57,
      25
    ],
    "demonym":"Latvian",
    "landlocked":false,
    "borders":[
      "BLR",
      "EST",
      "LTU",
      "RUS"
    ],
    "area":64559
  },
  {
    "name":{
      "common":"Macau",
      "official":"Macao Special Administrative Region of the People's Republic of China",
      "native":{
        "por":{
          "official":"Região Administrativa Especial de Macau da República Popular da China",
          "common":"Macau"
        },
        "zho":{
          "official":"??????????????",
          "common":"??"
        }
      }
    },
    "tld":[
      ".mo"
    ],
    "cca2":"MO",
    "ccn3":"446",
    "cca3":"MAC",
    "cioc":"",
    "currency":[
      "MOP"
    ],
    "callingCode":[
      "853"
    ],
    "capital":"",
    "altSpellings":[
      "MO",
      "??",
      "Macao",
      "Macao Special Administrative Region of the People's Republic of China",
      "??????????????",
      "Região Administrativa Especial de Macau da República Popular da China"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "por":"Portuguese",
      "zho":"Chinese"
    },
    "latlng":[
      22.16666666,
      113.55
    ],
    "demonym":"Chinese",
    "landlocked":false,
    "borders":[
      "CHN"
    ],
    "area":30
  },
  {
    "name":{
      "common":"Saint Martin",
      "official":"Saint Martin",
      "native":{
        "fra":{
          "official":"Saint-Martin",
          "common":"Saint-Martin"
        }
      }
    },
    "tld":[
      ".fr",
      ".gp"
    ],
    "cca2":"MF",
    "ccn3":"663",
    "cca3":"MAF",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "590"
    ],
    "capital":"Marigot",
    "altSpellings":[
      "MF",
      "Collectivity of Saint Martin",
      "Collectivité de Saint-Martin",
      "Saint Martin (French part)"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      18.08333333,
      -63.95
    ],
    "demonym":"Saint Martin Islander",
    "landlocked":false,
    "borders":[
      "SXM"
    ],
    "area":53
  },
  {
    "name":{
      "common":"Morocco",
      "official":"Kingdom of Morocco",
      "native":{
        "ara":{
          "official":"??????? ????????",
          "common":"??????"
        },
        "ber":{
          "official":"??????? ? ??????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".ma",
      "??????."
    ],
    "cca2":"MA",
    "ccn3":"504",
    "cca3":"MAR",
    "cioc":"MAR",
    "currency":[
      "MAD"
    ],
    "callingCode":[
      "212"
    ],
    "capital":"Rabat",
    "altSpellings":[
      "MA",
      "Kingdom of Morocco",
      "Al-Mamlakah al-Ma?ribiyah"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ara":"Arabic",
      "ber":"Berber"
    },
    "latlng":[
      32,
      -5
    ],
    "demonym":"Moroccan",
    "landlocked":false,
    "borders":[
      "DZA",
      "ESH",
      "ESP"
    ],
    "area":446550
  },
  {
    "name":{
      "common":"Monaco",
      "official":"Principality of Monaco",
      "native":{
        "fra":{
          "official":"Principauté de Monaco",
          "common":"Monaco"
        }
      }
    },
    "tld":[
      ".mc"
    ],
    "cca2":"MC",
    "ccn3":"492",
    "cca3":"MCO",
    "cioc":"MON",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "377"
    ],
    "capital":"Monaco",
    "altSpellings":[
      "MC",
      "Principality of Monaco",
      "Principauté de Monaco"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      43.73333333,
      7.4
    ],
    "demonym":"Monegasque",
    "landlocked":false,
    "borders":[
      "FRA"
    ],
    "area":2.02
  },
  {
    "name":{
      "common":"Moldova",
      "official":"Republic of Moldova",
      "native":{
        "ron":{
          "official":"Republica Moldova",
          "common":"Moldova"
        }
      }
    },
    "tld":[
      ".md"
    ],
    "cca2":"MD",
    "ccn3":"498",
    "cca3":"MDA",
    "cioc":"MDA",
    "currency":[
      "MDL"
    ],
    "callingCode":[
      "373"
    ],
    "capital":"Chi?in?u",
    "altSpellings":[
      "MD",
      "Moldova, Republic of",
      "Republic of Moldova",
      "Republica Moldova"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "ron":"Moldavian"
    },
    "latlng":[
      47,
      29
    ],
    "demonym":"Moldovan",
    "landlocked":true,
    "borders":[
      "ROU",
      "UKR"
    ],
    "area":33846
  },
  {
    "name":{
      "common":"Madagascar",
      "official":"Republic of Madagascar",
      "native":{
        "fra":{
          "official":"République de Madagascar",
          "common":"Madagascar"
        },
        "mlg":{
          "official":"Repoblikan'i Madagasikara",
          "common":"Madagasikara"
        }
      }
    },
    "tld":[
      ".mg"
    ],
    "cca2":"MG",
    "ccn3":"450",
    "cca3":"MDG",
    "cioc":"MAD",
    "currency":[
      "MGA"
    ],
    "callingCode":[
      "261"
    ],
    "capital":"Antananarivo",
    "altSpellings":[
      "MG",
      "Republic of Madagascar",
      "Repoblikan'i Madagasikara",
      "République de Madagascar"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "fra":"French",
      "mlg":"Malagasy"
    },
    "latlng":[
      -20,
      47
    ],
    "demonym":"Malagasy",
    "landlocked":false,
    "borders":[

    ],
    "area":587041
  },
  {
    "name":{
      "common":"Maldives",
      "official":"Republic of the Maldives",
      "native":{
        "div":{
          "official":"?????????????? ????????????",
          "common":"??????????????"
        }
      }
    },
    "tld":[
      ".mv"
    ],
    "cca2":"MV",
    "ccn3":"462",
    "cca3":"MDV",
    "cioc":"MDV",
    "currency":[
      "MVR"
    ],
    "callingCode":[
      "960"
    ],
    "capital":"Malé",
    "altSpellings":[
      "MV",
      "Maldive Islands",
      "Republic of the Maldives",
      "Dhivehi Raajjeyge Jumhooriyya"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "div":"Maldivian"
    },
    "latlng":[
      3.25,
      73
    ],
    "demonym":"Maldivan",
    "landlocked":false,
    "borders":[

    ],
    "area":300
  },
  {
    "name":{
      "common":"Mexico",
      "official":"United Mexican States",
      "native":{
        "spa":{
          "official":"Estados Unidos Mexicanos",
          "common":"México"
        }
      }
    },
    "tld":[
      ".mx"
    ],
    "cca2":"MX",
    "ccn3":"484",
    "cca3":"MEX",
    "cioc":"MEX",
    "currency":[
      "MXN"
    ],
    "callingCode":[
      "52"
    ],
    "capital":"Mexico City",
    "altSpellings":[
      "MX",
      "Mexicanos",
      "United Mexican States",
      "Estados Unidos Mexicanos"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      23,
      -102
    ],
    "demonym":"Mexican",
    "landlocked":false,
    "borders":[
      "BLZ",
      "GTM",
      "USA"
    ],
    "area":1964375
  },
  {
    "name":{
      "common":"Marshall Islands",
      "official":"Republic of the Marshall Islands",
      "native":{
        "eng":{
          "official":"Republic of the Marshall Islands",
          "common":"Marshall Islands"
        },
        "mah":{
          "official":"Republic of the Marshall Islands",
          "common":"M?aje?"
        }
      }
    },
    "tld":[
      ".mh"
    ],
    "cca2":"MH",
    "ccn3":"584",
    "cca3":"MHL",
    "cioc":"MHL",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "692"
    ],
    "capital":"Majuro",
    "altSpellings":[
      "MH",
      "Republic of the Marshall Islands",
      "Aolep?n Aor?kin M?aje?"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "eng":"English",
      "mah":"Marshallese"
    },
    "latlng":[
      9,
      168
    ],
    "demonym":"Marshallese",
    "landlocked":false,
    "borders":[

    ],
    "area":181
  },
  {
    "name":{
      "common":"Macedonia",
      "official":"Republic of Macedonia",
      "native":{
        "mkd":{
          "official":"????????? ??????????",
          "common":"??????????"
        }
      }
    },
    "tld":[
      ".mk"
    ],
    "cca2":"MK",
    "ccn3":"807",
    "cca3":"MKD",
    "cioc":"MKD",
    "currency":[
      "MKD"
    ],
    "callingCode":[
      "389"
    ],
    "capital":"Skopje",
    "altSpellings":[
      "MK",
      "Macedonia, the Former Yugoslav Republic of",
      "Republic of Macedonia",
      "????????? ??????????"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "mkd":"Macedonian"
    },
    "latlng":[
      41.83333333,
      22
    ],
    "demonym":"Macedonian",
    "landlocked":true,
    "borders":[
      "ALB",
      "BGR",
      "GRC",
      "UNK",
      "SRB"
    ],
    "area":25713
  },
  {
    "name":{
      "common":"Mali",
      "official":"Republic of Mali",
      "native":{
        "fra":{
          "official":"République du Mali",
          "common":"Mali"
        }
      }
    },
    "tld":[
      ".ml"
    ],
    "cca2":"ML",
    "ccn3":"466",
    "cca3":"MLI",
    "cioc":"MLI",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "223"
    ],
    "capital":"Bamako",
    "altSpellings":[
      "ML",
      "Republic of Mali",
      "République du Mali"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      17,
      -4
    ],
    "demonym":"Malian",
    "landlocked":true,
    "borders":[
      "DZA",
      "BFA",
      "GIN",
      "CIV",
      "MRT",
      "NER",
      "SEN"
    ],
    "area":1240192
  },
  {
    "name":{
      "common":"Malta",
      "official":"Republic of Malta",
      "native":{
        "eng":{
          "official":"Republic of Malta",
          "common":"Malta"
        },
        "mlt":{
          "official":"Repubblika ta ' Malta",
          "common":"Malta"
        }
      }
    },
    "tld":[
      ".mt"
    ],
    "cca2":"MT",
    "ccn3":"470",
    "cca3":"MLT",
    "cioc":"MLT",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "356"
    ],
    "capital":"Valletta",
    "altSpellings":[
      "MT",
      "Republic of Malta",
      "Repubblika ta' Malta"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "eng":"English",
      "mlt":"Maltese"
    },
    "latlng":[
      35.83333333,
      14.58333333
    ],
    "demonym":"Maltese",
    "landlocked":false,
    "borders":[

    ],
    "area":316
  },
  {
    "name":{
      "common":"Myanmar",
      "official":"Republic of the Union of Myanmar",
      "native":{
        "mya":{
          "official":"??????????? ????? ?????????????????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".mm"
    ],
    "cca2":"MM",
    "ccn3":"104",
    "cca3":"MMR",
    "cioc":"MYA",
    "currency":[
      "MMK"
    ],
    "callingCode":[
      "95"
    ],
    "capital":"Naypyidaw",
    "altSpellings":[
      "MM",
      "Burma",
      "Republic of the Union of Myanmar",
      "Pyidaunzu Thanm?da My?ma Nainngandaw"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "mya":"Burmese"
    },
    "latlng":[
      22,
      98
    ],
    "demonym":"Bamar",
    "landlocked":false,
    "borders":[
      "BGD",
      "CHN",
      "IND",
      "LAO",
      "THA"
    ],
    "area":676578
  },
  {
    "name":{
      "common":"Montenegro",
      "official":"Montenegro",
      "native":{
        "srp":{
          "official":"???? ????",
          "common":"???? ????"
        }
      }
    },
    "tld":[
      ".me"
    ],
    "cca2":"ME",
    "ccn3":"499",
    "cca3":"MNE",
    "cioc":"MNE",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "382"
    ],
    "capital":"Podgorica",
    "altSpellings":[
      "ME",
      "Crna Gora"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "srp":"Montenegrin"
    },
    "latlng":[
      42.5,
      19.3
    ],
    "demonym":"Montenegrin",
    "landlocked":false,
    "borders":[
      "ALB",
      "BIH",
      "HRV",
      "UNK",
      "SRB"
    ],
    "area":13812
  },
  {
    "name":{
      "common":"Mongolia",
      "official":"Mongolia",
      "native":{
        "mon":{
          "official":"?????? ???",
          "common":"?????? ???"
        }
      }
    },
    "tld":[
      ".mn"
    ],
    "cca2":"MN",
    "ccn3":"496",
    "cca3":"MNG",
    "cioc":"MGL",
    "currency":[
      "MNT"
    ],
    "callingCode":[
      "976"
    ],
    "capital":"Ulan Bator",
    "altSpellings":[
      "MN"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "mon":"Mongolian"
    },
    "latlng":[
      46,
      105
    ],
    "demonym":"Mongolian",
    "landlocked":true,
    "borders":[
      "CHN",
      "RUS"
    ],
    "area":1564110
  },
  {
    "name":{
      "common":"Northern Mariana Islands",
      "official":"Commonwealth of the Northern Mariana Islands",
      "native":{
        "cal":{
          "official":"Commonwealth of the Northern Mariana Islands",
          "common":"Northern Mariana Islands"
        },
        "cha":{
          "official":"Sankattan Siha Na Islas Mariånas",
          "common":"Na Islas Mariånas"
        },
        "eng":{
          "official":"Commonwealth of the Northern Mariana Islands",
          "common":"Northern Mariana Islands"
        }
      }
    },
    "tld":[
      ".mp"
    ],
    "cca2":"MP",
    "ccn3":"580",
    "cca3":"MNP",
    "cioc":"",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1670"
    ],
    "capital":"Saipan",
    "altSpellings":[
      "MP",
      "Commonwealth of the Northern Mariana Islands",
      "Sankattan Siha Na Islas Mariånas"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "cal":"Carolinian",
      "cha":"Chamorro",
      "eng":"English"
    },
    "latlng":[
      15.2,
      145.75
    ],
    "demonym":"American",
    "landlocked":false,
    "borders":[

    ],
    "area":464
  },
  {
    "name":{
      "common":"Mozambique",
      "official":"Republic of Mozambique",
      "native":{
        "por":{
          "official":"República de Moçambique",
          "common":"Moçambique"
        }
      }
    },
    "tld":[
      ".mz"
    ],
    "cca2":"MZ",
    "ccn3":"508",
    "cca3":"MOZ",
    "cioc":"MOZ",
    "currency":[
      "MZN"
    ],
    "callingCode":[
      "258"
    ],
    "capital":"Maputo",
    "altSpellings":[
      "MZ",
      "Republic of Mozambique",
      "República de Moçambique"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      -18.25,
      35
    ],
    "demonym":"Mozambican",
    "landlocked":false,
    "borders":[
      "MWI",
      "ZAF",
      "SWZ",
      "TZA",
      "ZMB",
      "ZWE"
    ],
    "area":801590
  },
  {
    "name":{
      "common":"Mauritania",
      "official":"Islamic Republic of Mauritania",
      "native":{
        "ara":{
          "official":"????????? ????????? ???????????",
          "common":"?????????"
        }
      }
    },
    "tld":[
      ".mr"
    ],
    "cca2":"MR",
    "ccn3":"478",
    "cca3":"MRT",
    "cioc":"MTN",
    "currency":[
      "MRO"
    ],
    "callingCode":[
      "222"
    ],
    "capital":"Nouakchott",
    "altSpellings":[
      "MR",
      "Islamic Republic of Mauritania",
      "al-Jumh?riyyah al-?Isl?miyyah al-M?r?t?niyyah"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      20,
      -12
    ],
    "demonym":"Mauritanian",
    "landlocked":false,
    "borders":[
      "DZA",
      "MLI",
      "SEN",
      "ESH"
    ],
    "area":1030700
  },
  {
    "name":{
      "common":"Montserrat",
      "official":"Montserrat",
      "native":{
        "eng":{
          "official":"Montserrat",
          "common":"Montserrat"
        }
      }
    },
    "tld":[
      ".ms"
    ],
    "cca2":"MS",
    "ccn3":"500",
    "cca3":"MSR",
    "cioc":"",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1664"
    ],
    "capital":"Plymouth",
    "altSpellings":[
      "MS"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      16.75,
      -62.2
    ],
    "demonym":"Montserratian",
    "landlocked":false,
    "borders":[

    ],
    "area":102
  },
  {
    "name":{
      "common":"Martinique",
      "official":"Martinique",
      "native":{
        "fra":{
          "official":"Martinique",
          "common":"Martinique"
        }
      }
    },
    "tld":[
      ".mq"
    ],
    "cca2":"MQ",
    "ccn3":"474",
    "cca3":"MTQ",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "596"
    ],
    "capital":"Fort-de-France",
    "altSpellings":[
      "MQ"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      14.666667,
      -61
    ],
    "demonym":"French",
    "landlocked":false,
    "borders":[

    ],
    "area":1128
  },
  {
    "name":{
      "common":"Mauritius",
      "official":"Republic of Mauritius",
      "native":{
        "eng":{
          "official":"Republic of Mauritius",
          "common":"Mauritius"
        },
        "fra":{
          "official":"République de Maurice",
          "common":"Maurice"
        },
        "mfe":{
          "official":"Republik Moris",
          "common":"Moris"
        }
      }
    },
    "tld":[
      ".mu"
    ],
    "cca2":"MU",
    "ccn3":"480",
    "cca3":"MUS",
    "cioc":"MRI",
    "currency":[
      "MUR"
    ],
    "callingCode":[
      "230"
    ],
    "capital":"Port Louis",
    "altSpellings":[
      "MU",
      "Republic of Mauritius",
      "République de Maurice"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English",
      "fra":"French",
      "mfe":"Mauritian Creole"
    },
    "latlng":[
      -20.28333333,
      57.55
    ],
    "demonym":"Mauritian",
    "landlocked":false,
    "borders":[

    ],
    "area":2040
  },
  {
    "name":{
      "common":"Malawi",
      "official":"Republic of Malawi",
      "native":{
        "eng":{
          "official":"Republic of Malawi",
          "common":"Malawi"
        },
        "nya":{
          "official":"Chalo cha Malawi, Dziko la Mala?i",
          "common":"Mala?i"
        }
      }
    },
    "tld":[
      ".mw"
    ],
    "cca2":"MW",
    "ccn3":"454",
    "cca3":"MWI",
    "cioc":"MAW",
    "currency":[
      "MWK"
    ],
    "callingCode":[
      "265"
    ],
    "capital":"Lilongwe",
    "altSpellings":[
      "MW",
      "Republic of Malawi"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English",
      "nya":"Chewa"
    },
    "latlng":[
      -13.5,
      34
    ],
    "demonym":"Malawian",
    "landlocked":true,
    "borders":[
      "MOZ",
      "TZA",
      "ZMB"
    ],
    "area":118484
  },
  {
    "name":{
      "common":"Malaysia",
      "official":"Malaysia",
      "native":{
        "eng":{
          "official":"Malaysia",
          "common":"Malaysia"
        },
        "msa":{
          "official":"??????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".my"
    ],
    "cca2":"MY",
    "ccn3":"458",
    "cca3":"MYS",
    "cioc":"MAS",
    "currency":[
      "MYR"
    ],
    "callingCode":[
      "60"
    ],
    "capital":"Kuala Lumpur",
    "altSpellings":[
      "MY"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "eng":"English",
      "msa":"Malay"
    },
    "latlng":[
      2.5,
      112.5
    ],
    "demonym":"Malaysian",
    "landlocked":false,
    "borders":[
      "BRN",
      "IDN",
      "THA"
    ],
    "area":330803
  },
  {
    "name":{
      "common":"Mayotte",
      "official":"Department of Mayotte",
      "native":{
        "fra":{
          "official":"Département de Mayotte",
          "common":"Mayotte"
        }
      }
    },
    "tld":[
      ".yt"
    ],
    "cca2":"YT",
    "ccn3":"175",
    "cca3":"MYT",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "262"
    ],
    "capital":"Mamoudzou",
    "altSpellings":[
      "YT",
      "Department of Mayotte",
      "Département de Mayotte"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -12.83333333,
      45.16666666
    ],
    "demonym":"Mahoran",
    "landlocked":false,
    "borders":[

    ],
    "area":374
  },
  {
    "name":{
      "common":"Namibia",
      "official":"Republic of Namibia",
      "native":{
        "afr":{
          "official":"Republiek van Namibië",
          "common":"Namibië"
        },
        "deu":{
          "official":"Republik Namibia",
          "common":"Namibia"
        },
        "eng":{
          "official":"Republic of Namibia",
          "common":"Namibia"
        },
        "her":{
          "official":"Republic of Namibia",
          "common":"Namibia"
        },
        "hgm":{
          "official":"Republic of Namibia",
          "common":"Namibia"
        },
        "kwn":{
          "official":"Republic of Namibia",
          "common":"Namibia"
        },
        "loz":{
          "official":"Republic of Namibia",
          "common":"Namibia"
        },
        "ndo":{
          "official":"Republic of Namibia",
          "common":"Namibia"
        },
        "tsn":{
          "official":"Lefatshe la Namibia",
          "common":"Namibia"
        }
      }
    },
    "tld":[
      ".na"
    ],
    "cca2":"NA",
    "ccn3":"516",
    "cca3":"NAM",
    "cioc":"NAM",
    "currency":[
      "NAD",
      "ZAR"
    ],
    "callingCode":[
      "264"
    ],
    "capital":"Windhoek",
    "altSpellings":[
      "NA",
      "Namibië",
      "Republic of Namibia"
    ],
    "region":"Africa",
    "subregion":"Southern Africa",
    "languages":{
      "afr":"Afrikaans",
      "deu":"German",
      "eng":"English",
      "her":"Herero",
      "hgm":"Khoekhoe",
      "kwn":"Kwangali",
      "loz":"Lozi",
      "ndo":"Ndonga",
      "tsn":"Tswana"
    },
    "latlng":[
      -22,
      17
    ],
    "demonym":"Namibian",
    "landlocked":false,
    "borders":[
      "AGO",
      "BWA",
      "ZAF",
      "ZMB"
    ],
    "area":825615
  },
  {
    "name":{
      "common":"New Caledonia",
      "official":"New Caledonia",
      "native":{
        "fra":{
          "official":"Nouvelle-Calédonie",
          "common":"Nouvelle-Calédonie"
        }
      }
    },
    "tld":[
      ".nc"
    ],
    "cca2":"NC",
    "ccn3":"540",
    "cca3":"NCL",
    "cioc":"",
    "currency":[
      "XPF"
    ],
    "callingCode":[
      "687"
    ],
    "capital":"Nouméa",
    "altSpellings":[
      "NC"
    ],
    "region":"Oceania",
    "subregion":"Melanesia",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -21.5,
      165.5
    ],
    "demonym":"New Caledonian",
    "landlocked":false,
    "borders":[

    ],
    "area":18575
  },
  {
    "name":{
      "common":"Niger",
      "official":"Republic of Niger",
      "native":{
        "fra":{
          "official":"République du Niger",
          "common":"Niger"
        }
      }
    },
    "tld":[
      ".ne"
    ],
    "cca2":"NE",
    "ccn3":"562",
    "cca3":"NER",
    "cioc":"NIG",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "227"
    ],
    "capital":"Niamey",
    "altSpellings":[
      "NE",
      "Nijar"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      16,
      8
    ],
    "demonym":"Nigerien",
    "landlocked":true,
    "borders":[
      "DZA",
      "BEN",
      "BFA",
      "TCD",
      "LBY",
      "MLI",
      "NGA"
    ],
    "area":1267000
  },
  {
    "name":{
      "common":"Norfolk Island",
      "official":"Territory of Norfolk Island",
      "native":{
        "eng":{
          "official":"Territory of Norfolk Island",
          "common":"Norfolk Island"
        },
        "pih":{
          "official":"Teratri of Norf'k Ailen",
          "common":"Norf'k Ailen"
        }
      }
    },
    "tld":[
      ".nf"
    ],
    "cca2":"NF",
    "ccn3":"574",
    "cca3":"NFK",
    "cioc":"",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "672"
    ],
    "capital":"Kingston",
    "altSpellings":[
      "NF",
      "Territory of Norfolk Island",
      "Teratri of Norf'k Ailen"
    ],
    "region":"Oceania",
    "subregion":"Australia and New Zealand",
    "languages":{
      "eng":"English",
      "pih":"Norfuk"
    },
    "latlng":[
      -29.03333333,
      167.95
    ],
    "demonym":"Norfolk Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":36
  },
  {
    "name":{
      "common":"Nigeria",
      "official":"Federal Republic of Nigeria",
      "native":{
        "eng":{
          "official":"Federal Republic of Nigeria",
          "common":"Nigeria"
        }
      }
    },
    "tld":[
      ".ng"
    ],
    "cca2":"NG",
    "ccn3":"566",
    "cca3":"NGA",
    "cioc":"NGR",
    "currency":[
      "NGN"
    ],
    "callingCode":[
      "234"
    ],
    "capital":"Abuja",
    "altSpellings":[
      "NG",
      "Nijeriya",
      "Naíjíríà",
      "Federal Republic of Nigeria"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      10,
      8
    ],
    "demonym":"Nigerian",
    "landlocked":false,
    "borders":[
      "BEN",
      "CMR",
      "TCD",
      "NER"
    ],
    "area":923768
  },
  {
    "name":{
      "common":"Nicaragua",
      "official":"Republic of Nicaragua",
      "native":{
        "spa":{
          "official":"República de Nicaragua",
          "common":"Nicaragua"
        }
      }
    },
    "tld":[
      ".ni"
    ],
    "cca2":"NI",
    "ccn3":"558",
    "cca3":"NIC",
    "cioc":"NCA",
    "currency":[
      "NIO"
    ],
    "callingCode":[
      "505"
    ],
    "capital":"Managua",
    "altSpellings":[
      "NI",
      "Republic of Nicaragua",
      "República de Nicaragua"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      13,
      -85
    ],
    "demonym":"Nicaraguan",
    "landlocked":false,
    "borders":[
      "CRI",
      "HND"
    ],
    "area":130373
  },
  {
    "name":{
      "common":"Niue",
      "official":"Niue",
      "native":{
        "eng":{
          "official":"Niue",
          "common":"Niue"
        },
        "niu":{
          "official":"Niu?",
          "common":"Niu?"
        }
      }
    },
    "tld":[
      ".nu"
    ],
    "cca2":"NU",
    "ccn3":"570",
    "cca3":"NIU",
    "cioc":"",
    "currency":[
      "NZD"
    ],
    "callingCode":[
      "683"
    ],
    "capital":"Alofi",
    "altSpellings":[
      "NU"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "niu":"Niuean"
    },
    "latlng":[
      -19.03333333,
      -169.86666666
    ],
    "demonym":"Niuean",
    "landlocked":false,
    "borders":[

    ],
    "area":260
  },
  {
    "name":{
      "common":"Netherlands",
      "official":"Netherlands",
      "native":{
        "nld":{
          "official":"Nederland",
          "common":"Nederland"
        }
      }
    },
    "tld":[
      ".nl"
    ],
    "cca2":"NL",
    "ccn3":"528",
    "cca3":"NLD",
    "cioc":"NED",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "31"
    ],
    "capital":"Amsterdam",
    "altSpellings":[
      "NL",
      "Holland",
      "Nederland"
    ],
    "region":"Europe",
    "subregion":"Western Europe",
    "languages":{
      "nld":"Dutch"
    },
    "latlng":[
      52.5,
      5.75
    ],
    "demonym":"Dutch",
    "landlocked":false,
    "borders":[
      "BEL",
      "DEU"
    ],
    "area":41850
  },
  {
    "name":{
      "common":"Norway",
      "official":"Kingdom of Norway",
      "native":{
        "nno":{
          "official":"Kongeriket Noreg",
          "common":"Noreg"
        },
        "nob":{
          "official":"Kongeriket Norge",
          "common":"Norge"
        },
        "smi":{
          "official":"Norgga gonagasriika",
          "common":"Norgga"
        }
      }
    },
    "tld":[
      ".no"
    ],
    "cca2":"NO",
    "ccn3":"578",
    "cca3":"NOR",
    "cioc":"NOR",
    "currency":[
      "NOK"
    ],
    "callingCode":[
      "47"
    ],
    "capital":"Oslo",
    "altSpellings":[
      "NO",
      "Norge",
      "Noreg",
      "Kingdom of Norway",
      "Kongeriket Norge",
      "Kongeriket Noreg"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "nno":"Norwegian Nynorsk",
      "nob":"Norwegian Bokmål",
      "smi":"Sami"
    },
    "latlng":[
      62,
      10
    ],
    "demonym":"Norwegian",
    "landlocked":false,
    "borders":[
      "FIN",
      "SWE",
      "RUS"
    ],
    "area":323802
  },
  {
    "name":{
      "common":"Nepal",
      "official":"Federal Democratic Republic of Nepal",
      "native":{
        "nep":{
          "official":"????? ????? ???????????? ????????",
          "common":"???"
        }
      }
    },
    "tld":[
      ".np"
    ],
    "cca2":"NP",
    "ccn3":"524",
    "cca3":"NPL",
    "cioc":"NEP",
    "currency":[
      "NPR"
    ],
    "callingCode":[
      "977"
    ],
    "capital":"Kathmandu",
    "altSpellings":[
      "NP",
      "Federal Democratic Republic of Nepal",
      "Lokt?ntrik Ganatantra Nep?l"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "nep":"Nepali"
    },
    "latlng":[
      28,
      84
    ],
    "demonym":"Nepalese",
    "landlocked":true,
    "borders":[
      "CHN",
      "IND"
    ],
    "area":147181
  },
  {
    "name":{
      "common":"Nauru",
      "official":"Republic of Nauru",
      "native":{
        "eng":{
          "official":"Republic of Nauru",
          "common":"Nauru"
        },
        "nau":{
          "official":"Republic of Nauru",
          "common":"Nauru"
        }
      }
    },
    "tld":[
      ".nr"
    ],
    "cca2":"NR",
    "ccn3":"520",
    "cca3":"NRU",
    "cioc":"NRU",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "674"
    ],
    "capital":"Yaren",
    "altSpellings":[
      "NR",
      "Naoero",
      "Pleasant Island",
      "Republic of Nauru",
      "Ripublik Naoero"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "eng":"English",
      "nau":"Nauru"
    },
    "latlng":[
      -0.53333333,
      166.91666666
    ],
    "demonym":"Nauruan",
    "landlocked":false,
    "borders":[

    ],
    "area":21
  },
  {
    "name":{
      "common":"New Zealand",
      "official":"New Zealand",
      "native":{
        "eng":{
          "official":"New Zealand",
          "common":"New Zealand"
        },
        "mri":{
          "official":"Aotearoa",
          "common":"Aotearoa"
        },
        "nzs":{
          "official":"New Zealand",
          "common":"New Zealand"
        }
      }
    },
    "tld":[
      ".nz"
    ],
    "cca2":"NZ",
    "ccn3":"554",
    "cca3":"NZL",
    "cioc":"NZL",
    "currency":[
      "NZD"
    ],
    "callingCode":[
      "64"
    ],
    "capital":"Wellington",
    "altSpellings":[
      "NZ",
      "Aotearoa"
    ],
    "region":"Oceania",
    "subregion":"Australia and New Zealand",
    "languages":{
      "eng":"English",
      "mri":"M?ori",
      "nzs":"New Zealand Sign Language"
    },
    "latlng":[
      -41,
      174
    ],
    "demonym":"New Zealander",
    "landlocked":false,
    "borders":[

    ],
    "area":270467
  },
  {
    "name":{
      "common":"Oman",
      "official":"Sultanate of Oman",
      "native":{
        "ara":{
          "official":"????? ????",
          "common":"????"
        }
      }
    },
    "tld":[
      ".om"
    ],
    "cca2":"OM",
    "ccn3":"512",
    "cca3":"OMN",
    "cioc":"OMA",
    "currency":[
      "OMR"
    ],
    "callingCode":[
      "968"
    ],
    "capital":"Muscat",
    "altSpellings":[
      "OM",
      "Sultanate of Oman",
      "Sal?anat ?Um?n"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      21,
      57
    ],
    "demonym":"Omani",
    "landlocked":false,
    "borders":[
      "SAU",
      "ARE",
      "YEM"
    ],
    "area":309500
  },
  {
    "name":{
      "common":"Pakistan",
      "official":"Islamic Republic of Pakistan",
      "native":{
        "eng":{
          "official":"Islamic Republic of Pakistan",
          "common":"Pakistan"
        },
        "urd":{
          "official":"?????? ??????? ???????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".pk"
    ],
    "cca2":"PK",
    "ccn3":"586",
    "cca3":"PAK",
    "cioc":"PAK",
    "currency":[
      "PKR"
    ],
    "callingCode":[
      "92"
    ],
    "capital":"Islamabad",
    "altSpellings":[
      "PK",
      "P?kist?n",
      "Islamic Republic of Pakistan",
      "Isl?m? Jumh?riya'eh P?kist?n"
    ],
    "region":"Asia",
    "subregion":"Southern Asia",
    "languages":{
      "eng":"English",
      "urd":"Urdu"
    },
    "latlng":[
      30,
      70
    ],
    "demonym":"Pakistani",
    "landlocked":false,
    "borders":[
      "AFG",
      "CHN",
      "IND",
      "IRN"
    ],
    "area":881912
  },
  {
    "name":{
      "common":"Panama",
      "official":"Republic of Panama",
      "native":{
        "spa":{
          "official":"República de Panamá",
          "common":"Panamá"
        }
      }
    },
    "tld":[
      ".pa"
    ],
    "cca2":"PA",
    "ccn3":"591",
    "cca3":"PAN",
    "cioc":"PAN",
    "currency":[
      "PAB",
      "USD"
    ],
    "callingCode":[
      "507"
    ],
    "capital":"Panama City",
    "altSpellings":[
      "PA",
      "Republic of Panama",
      "República de Panamá"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      9,
      -80
    ],
    "demonym":"Panamanian",
    "landlocked":false,
    "borders":[
      "COL",
      "CRI"
    ],
    "area":75417
  },
  {
    "name":{
      "common":"Pitcairn Islands",
      "official":"Pitcairn Group of Islands",
      "native":{
        "eng":{
          "official":"Pitcairn Group of Islands",
          "common":"Pitcairn Islands"
        }
      }
    },
    "tld":[
      ".pn"
    ],
    "cca2":"PN",
    "ccn3":"612",
    "cca3":"PCN",
    "cioc":"",
    "currency":[
      "NZD"
    ],
    "callingCode":[
      "64"
    ],
    "capital":"Adamstown",
    "altSpellings":[
      "PN",
      "Pitcairn",
      "Pitcairn Henderson Ducie and Oeno Islands"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -25.06666666,
      -130.1
    ],
    "demonym":"Pitcairn Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":47
  },
  {
    "name":{
      "common":"Peru",
      "official":"Republic of Peru",
      "native":{
        "aym":{
          "official":"Piruw Suyu",
          "common":"Piruw"
        },
        "que":{
          "official":"Piruw Ripuwlika",
          "common":"Piruw"
        },
        "spa":{
          "official":"República del Perú",
          "common":"Perú"
        }
      }
    },
    "tld":[
      ".pe"
    ],
    "cca2":"PE",
    "ccn3":"604",
    "cca3":"PER",
    "cioc":"PER",
    "currency":[
      "PEN"
    ],
    "callingCode":[
      "51"
    ],
    "capital":"Lima",
    "altSpellings":[
      "PE",
      "Republic of Peru",
      "República del Perú"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "aym":"Aymara",
      "que":"Quechua",
      "spa":"Spanish"
    },
    "latlng":[
      -10,
      -76
    ],
    "demonym":"Peruvian",
    "landlocked":false,
    "borders":[
      "BOL",
      "BRA",
      "CHL",
      "COL",
      "ECU"
    ],
    "area":1285216
  },
  {
    "name":{
      "common":"Philippines",
      "official":"Republic of the Philippines",
      "native":{
        "eng":{
          "official":"Republic of the Philippines",
          "common":"Philippines"
        },
        "fil":{
          "official":"Republic of the Philippines",
          "common":"Pilipinas"
        }
      }
    },
    "tld":[
      ".ph"
    ],
    "cca2":"PH",
    "ccn3":"608",
    "cca3":"PHL",
    "cioc":"PHI",
    "currency":[
      "PHP"
    ],
    "callingCode":[
      "63"
    ],
    "capital":"Manila",
    "altSpellings":[
      "PH",
      "Republic of the Philippines",
      "Repúblika ng Pilipinas"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "eng":"English",
      "fil":"Filipino"
    },
    "latlng":[
      13,
      122
    ],
    "demonym":"Filipino",
    "landlocked":false,
    "borders":[

    ],
    "area":342353
  },
  {
    "name":{
      "common":"Palau",
      "official":"Republic of Palau",
      "native":{
        "eng":{
          "official":"Republic of Palau",
          "common":"Palau"
        },
        "pau":{
          "official":"Beluu er a Belau",
          "common":"Belau"
        }
      }
    },
    "tld":[
      ".pw"
    ],
    "cca2":"PW",
    "ccn3":"585",
    "cca3":"PLW",
    "cioc":"PLW",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "680"
    ],
    "capital":"Ngerulmud",
    "altSpellings":[
      "PW",
      "Republic of Palau",
      "Beluu er a Belau"
    ],
    "region":"Oceania",
    "subregion":"Micronesia",
    "languages":{
      "eng":"English",
      "pau":"Palauan"
    },
    "latlng":[
      7.5,
      134.5
    ],
    "demonym":"Palauan",
    "landlocked":false,
    "borders":[

    ],
    "area":459
  },
  {
    "name":{
      "common":"Papua New Guinea",
      "official":"Independent State of Papua New Guinea",
      "native":{
        "eng":{
          "official":"Independent State of Papua New Guinea",
          "common":"Papua New Guinea"
        },
        "hmo":{
          "official":"Independen Stet bilong Papua Niugini",
          "common":"Papua Niu Gini"
        },
        "tpi":{
          "official":"Independen Stet bilong Papua Niugini",
          "common":"Papua Niugini"
        }
      }
    },
    "tld":[
      ".pg"
    ],
    "cca2":"PG",
    "ccn3":"598",
    "cca3":"PNG",
    "cioc":"PNG",
    "currency":[
      "PGK"
    ],
    "callingCode":[
      "675"
    ],
    "capital":"Port Moresby",
    "altSpellings":[
      "PG",
      "Independent State of Papua New Guinea",
      "Independen Stet bilong Papua Niugini"
    ],
    "region":"Oceania",
    "subregion":"Melanesia",
    "languages":{
      "eng":"English",
      "hmo":"Hiri Motu",
      "tpi":"Tok Pisin"
    },
    "latlng":[
      -6,
      147
    ],
    "demonym":"Papua New Guinean",
    "landlocked":false,
    "borders":[
      "IDN"
    ],
    "area":462840
  },
  {
    "name":{
      "common":"Poland",
      "official":"Republic of Poland",
      "native":{
        "pol":{
          "official":"Rzeczpospolita Polska",
          "common":"Polska"
        }
      }
    },
    "tld":[
      ".pl"
    ],
    "cca2":"PL",
    "ccn3":"616",
    "cca3":"POL",
    "cioc":"POL",
    "currency":[
      "PLN"
    ],
    "callingCode":[
      "48"
    ],
    "capital":"Warsaw",
    "altSpellings":[
      "PL",
      "Republic of Poland",
      "Rzeczpospolita Polska"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "pol":"Polish"
    },
    "latlng":[
      52,
      20
    ],
    "demonym":"Polish",
    "landlocked":false,
    "borders":[
      "BLR",
      "CZE",
      "DEU",
      "LTU",
      "RUS",
      "SVK",
      "UKR"
    ],
    "area":312679
  },
  {
    "name":{
      "common":"Puerto Rico",
      "official":"Commonwealth of Puerto Rico",
      "native":{
        "eng":{
          "official":"Commonwealth of Puerto Rico",
          "common":"Puerto Rico"
        },
        "spa":{
          "official":"Estado Libre Asociado de Puerto Rico",
          "common":"Puerto Rico"
        }
      }
    },
    "tld":[
      ".pr"
    ],
    "cca2":"PR",
    "ccn3":"630",
    "cca3":"PRI",
    "cioc":"PUR",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1787",
      "1939"
    ],
    "capital":"San Juan",
    "altSpellings":[
      "PR",
      "Commonwealth of Puerto Rico",
      "Estado Libre Asociado de Puerto Rico"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English",
      "spa":"Spanish"
    },
    "latlng":[
      18.25,
      -66.5
    ],
    "demonym":"Puerto Rican",
    "landlocked":false,
    "borders":[

    ],
    "area":8870
  },
  {
    "name":{
      "common":"North Korea",
      "official":"Democratic People's Republic of Korea",
      "native":{
        "kor":{
          "official":"?? ???? ?? ???",
          "common":"??"
        }
      }
    },
    "tld":[
      ".kp"
    ],
    "cca2":"KP",
    "ccn3":"408",
    "cca3":"PRK",
    "cioc":"PRK",
    "currency":[
      "KPW"
    ],
    "callingCode":[
      "850"
    ],
    "capital":"Pyongyang",
    "altSpellings":[
      "KP",
      "Democratic People's Republic of Korea",
      "???????????",
      "Chos?n Minjuju?i Inmin Konghwaguk",
      "Korea, Democratic People's Republic of"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "kor":"Korean"
    },
    "latlng":[
      40,
      127
    ],
    "demonym":"North Korean",
    "landlocked":false,
    "borders":[
      "CHN",
      "KOR",
      "RUS"
    ],
    "area":120538
  },
  {
    "name":{
      "common":"Portugal",
      "official":"Portuguese Republic",
      "native":{
        "por":{
          "official":"República português",
          "common":"Portugal"
        }
      }
    },
    "tld":[
      ".pt"
    ],
    "cca2":"PT",
    "ccn3":"620",
    "cca3":"PRT",
    "cioc":"POR",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "351"
    ],
    "capital":"Lisbon",
    "altSpellings":[
      "PT",
      "Portuguesa",
      "Portuguese Republic",
      "República Portuguesa"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      39.5,
      -8
    ],
    "demonym":"Portuguese",
    "landlocked":false,
    "borders":[
      "ESP"
    ],
    "area":92090
  },
  {
    "name":{
      "common":"Paraguay",
      "official":"Republic of Paraguay",
      "native":{
        "grn":{
          "official":"Tetã Paraguái",
          "common":"Paraguái"
        },
        "spa":{
          "official":"República de Paraguay",
          "common":"Paraguay"
        }
      }
    },
    "tld":[
      ".py"
    ],
    "cca2":"PY",
    "ccn3":"600",
    "cca3":"PRY",
    "cioc":"PAR",
    "currency":[
      "PYG"
    ],
    "callingCode":[
      "595"
    ],
    "capital":"Asunción",
    "altSpellings":[
      "PY",
      "Republic of Paraguay",
      "República del Paraguay",
      "Tetã Paraguái"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "grn":"Guaraní",
      "spa":"Spanish"
    },
    "latlng":[
      -23,
      -58
    ],
    "demonym":"Paraguayan",
    "landlocked":true,
    "borders":[
      "ARG",
      "BOL",
      "BRA"
    ],
    "area":406752
  },
  {
    "name":{
      "common":"Palestine",
      "official":"State of Palestine",
      "native":{
        "ara":{
          "official":"???? ??????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".ps",
      "??????."
    ],
    "cca2":"PS",
    "ccn3":"275",
    "cca3":"PSE",
    "cioc":"PLE",
    "currency":[
      "ILS"
    ],
    "callingCode":[
      "970"
    ],
    "capital":"Ramallah",
    "altSpellings":[
      "PS",
      "Palestine, State of",
      "State of Palestine",
      "Dawlat Filas?in"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      31.9,
      35.2
    ],
    "demonym":"Palestinian",
    "landlocked":false,
    "borders":[
      "ISR",
      "EGY",
      "JOR"
    ],
    "area":6220
  },
  {
    "name":{
      "common":"French Polynesia",
      "official":"French Polynesia",
      "native":{
        "fra":{
          "official":"Polynésie française",
          "common":"Polynésie française"
        }
      }
    },
    "tld":[
      ".pf"
    ],
    "cca2":"PF",
    "ccn3":"258",
    "cca3":"PYF",
    "cioc":"",
    "currency":[
      "XPF"
    ],
    "callingCode":[
      "689"
    ],
    "capital":"Papeet?",
    "altSpellings":[
      "PF",
      "Polynésie française",
      "French Polynesia",
      "P?r?netia Far?ni"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -15,
      -140
    ],
    "demonym":"French Polynesian",
    "landlocked":false,
    "borders":[

    ],
    "area":4167
  },
  {
    "name":{
      "common":"Qatar",
      "official":"State of Qatar",
      "native":{
        "ara":{
          "official":"???? ???",
          "common":"???"
        }
      }
    },
    "tld":[
      ".qa",
      "???."
    ],
    "cca2":"QA",
    "ccn3":"634",
    "cca3":"QAT",
    "cioc":"QAT",
    "currency":[
      "QAR"
    ],
    "callingCode":[
      "974"
    ],
    "capital":"Doha",
    "altSpellings":[
      "QA",
      "State of Qatar",
      "Dawlat Qa?ar"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      25.5,
      51.25
    ],
    "demonym":"Qatari",
    "landlocked":false,
    "borders":[
      "SAU"
    ],
    "area":11586
  },
  {
    "name":{
      "common":"Réunion",
      "official":"Réunion Island",
      "native":{
        "fra":{
          "official":"Ile de la Réunion",
          "common":"La Réunion"
        }
      }
    },
    "tld":[
      ".re"
    ],
    "cca2":"RE",
    "ccn3":"638",
    "cca3":"REU",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "262"
    ],
    "capital":"Saint-Denis",
    "altSpellings":[
      "RE",
      "Reunion"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -21.15,
      55.5
    ],
    "demonym":"French",
    "landlocked":false,
    "borders":[

    ],
    "area":2511
  },
  {
    "name":{
      "common":"Romania",
      "official":"Romania",
      "native":{
        "ron":{
          "official":"România",
          "common":"România"
        }
      }
    },
    "tld":[
      ".ro"
    ],
    "cca2":"RO",
    "ccn3":"642",
    "cca3":"ROU",
    "cioc":"ROU",
    "currency":[
      "RON"
    ],
    "callingCode":[
      "40"
    ],
    "capital":"Bucharest",
    "altSpellings":[
      "RO",
      "Rumania",
      "Roumania",
      "România"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "ron":"Romanian"
    },
    "latlng":[
      46,
      25
    ],
    "demonym":"Romanian",
    "landlocked":false,
    "borders":[
      "BGR",
      "HUN",
      "MDA",
      "SRB",
      "UKR"
    ],
    "area":238391
  },
  {
    "name":{
      "common":"Russia",
      "official":"Russian Federation",
      "native":{
        "rus":{
          "official":"??????? ?????????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".ru",
      ".su",
      ".??"
    ],
    "cca2":"RU",
    "ccn3":"643",
    "cca3":"RUS",
    "cioc":"RUS",
    "currency":[
      "RUB"
    ],
    "callingCode":[
      "7"
    ],
    "capital":"Moscow",
    "altSpellings":[
      "RU",
      "Rossiya",
      "Russian Federation",
      "?????????? ?????????",
      "Rossiyskaya Federatsiya"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "rus":"Russian"
    },
    "latlng":[
      60,
      100
    ],
    "demonym":"Russian",
    "landlocked":false,
    "borders":[
      "AZE",
      "BLR",
      "CHN",
      "EST",
      "FIN",
      "GEO",
      "KAZ",
      "PRK",
      "LVA",
      "LTU",
      "MNG",
      "NOR",
      "POL",
      "UKR"
    ],
    "area":17098242
  },
  {
    "name":{
      "common":"Rwanda",
      "official":"Republic of Rwanda",
      "native":{
        "eng":{
          "official":"Republic of Rwanda",
          "common":"Rwanda"
        },
        "fra":{
          "official":"République rwandaise",
          "common":"Rwanda"
        },
        "kin":{
          "official":"Repubulika y'u Rwanda",
          "common":"Rwanda"
        }
      }
    },
    "tld":[
      ".rw"
    ],
    "cca2":"RW",
    "ccn3":"646",
    "cca3":"RWA",
    "cioc":"RWA",
    "currency":[
      "RWF"
    ],
    "callingCode":[
      "250"
    ],
    "capital":"Kigali",
    "altSpellings":[
      "RW",
      "Republic of Rwanda",
      "Repubulika y'u Rwanda",
      "République du Rwanda"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English",
      "fra":"French",
      "kin":"Kinyarwanda"
    },
    "latlng":[
      -2,
      30
    ],
    "demonym":"Rwandan",
    "landlocked":true,
    "borders":[
      "BDI",
      "COD",
      "TZA",
      "UGA"
    ],
    "area":26338
  },
  {
    "name":{
      "common":"Saudi Arabia",
      "official":"Kingdom of Saudi Arabia",
      "native":{
        "ara":{
          "official":"??????? ??????? ????????",
          "common":"??????? ????????"
        }
      }
    },
    "tld":[
      ".sa",
      ".????????"
    ],
    "cca2":"SA",
    "ccn3":"682",
    "cca3":"SAU",
    "cioc":"KSA",
    "currency":[
      "SAR"
    ],
    "callingCode":[
      "966"
    ],
    "capital":"Riyadh",
    "altSpellings":[
      "Saudi",
      "SA",
      "Kingdom of Saudi Arabia",
      "Al-Mamlakah al-‘Arabiyyah as-Su‘?diyyah"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      25,
      45
    ],
    "demonym":"Saudi Arabian",
    "landlocked":false,
    "borders":[
      "IRQ",
      "JOR",
      "KWT",
      "OMN",
      "QAT",
      "ARE",
      "YEM"
    ],
    "area":2149690
  },
  {
    "name":{
      "common":"Sudan",
      "official":"Republic of the Sudan",
      "native":{
        "ara":{
          "official":"??????? ???????",
          "common":"???????"
        },
        "eng":{
          "official":"Republic of the Sudan",
          "common":"Sudan"
        }
      }
    },
    "tld":[
      ".sd"
    ],
    "cca2":"SD",
    "ccn3":"729",
    "cca3":"SDN",
    "cioc":"SUD",
    "currency":[
      "SDG"
    ],
    "callingCode":[
      "249"
    ],
    "capital":"Khartoum",
    "altSpellings":[
      "SD",
      "Republic of the Sudan",
      "Jumh?r?yat as-S?d?n"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ara":"Arabic",
      "eng":"English"
    },
    "latlng":[
      15,
      30
    ],
    "demonym":"Sudanese",
    "landlocked":false,
    "borders":[
      "CAF",
      "TCD",
      "EGY",
      "ERI",
      "ETH",
      "LBY",
      "SSD"
    ],
    "area":1886068
  },
  {
    "name":{
      "common":"Senegal",
      "official":"Republic of Senegal",
      "native":{
        "fra":{
          "official":"République du Sénégal",
          "common":"Sénégal"
        }
      }
    },
    "tld":[
      ".sn"
    ],
    "cca2":"SN",
    "ccn3":"686",
    "cca3":"SEN",
    "cioc":"SEN",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "221"
    ],
    "capital":"Dakar",
    "altSpellings":[
      "SN",
      "Republic of Senegal",
      "République du Sénégal"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      14,
      -14
    ],
    "demonym":"Senegalese",
    "landlocked":false,
    "borders":[
      "GMB",
      "GIN",
      "GNB",
      "MLI",
      "MRT"
    ],
    "area":196722
  },
  {
    "name":{
      "common":"Singapore",
      "official":"Republic of Singapore",
      "native":{
        "zho":{
          "official":"??????",
          "common":"???"
        },
        "eng":{
          "official":"Republic of Singapore",
          "common":"Singapore"
        },
        "msa":{
          "official":"Republik Singapura",
          "common":"Singapura"
        },
        "tam":{
          "official":"??????????? ????????",
          "common":"???????????"
        }
      }
    },
    "tld":[
      ".sg",
      ".???",
      ".???????????"
    ],
    "cca2":"SG",
    "ccn3":"702",
    "cca3":"SGP",
    "cioc":"SIN",
    "currency":[
      "SGD"
    ],
    "callingCode":[
      "65"
    ],
    "capital":"Singapore",
    "altSpellings":[
      "SG",
      "Singapura",
      "Republik Singapura",
      "??????"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "zho":"Chinese",
      "eng":"English",
      "msa":"Malay",
      "tam":"Tamil"
    },
    "latlng":[
      1.36666666,
      103.8
    ],
    "demonym":"Singaporean",
    "landlocked":false,
    "borders":[

    ],
    "area":710
  },
  {
    "name":{
      "common":"South Georgia",
      "official":"South Georgia and the South Sandwich Islands",
      "native":{
        "eng":{
          "official":"South Georgia and the South Sandwich Islands",
          "common":"South Georgia"
        }
      }
    },
    "tld":[
      ".gs"
    ],
    "cca2":"GS",
    "ccn3":"239",
    "cca3":"SGS",
    "cioc":"",
    "currency":[
      "GBP"
    ],
    "callingCode":[
      "500"
    ],
    "capital":"King Edward Point",
    "altSpellings":[
      "GS",
      "South Georgia and the South Sandwich Islands"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -54.5,
      -37
    ],
    "demonym":"South Georgian South Sandwich Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":3903
  },
  {
    "name":{
      "common":"Svalbard and Jan Mayen",
      "official":"Svalbard og Jan Mayen",
      "native":{
        "nor":{
          "official":"Svalbard og Jan Mayen",
          "common":"Svalbard og Jan Mayen"
        }
      }
    },
    "tld":[
      ".sj"
    ],
    "cca2":"SJ",
    "ccn3":"744",
    "cca3":"SJM",
    "cioc":"",
    "currency":[
      "NOK"
    ],
    "callingCode":[
      "4779"
    ],
    "capital":"Longyearbyen",
    "altSpellings":[
      "SJ",
      "Svalbard and Jan Mayen Islands"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "nor":"Norwegian"
    },
    "latlng":[
      78,
      20
    ],
    "demonym":"Norwegian",
    "landlocked":false,
    "borders":[

    ],
    "area":-1
  },
  {
    "name":{
      "common":"Solomon Islands",
      "official":"Solomon Islands",
      "native":{
        "eng":{
          "official":"Solomon Islands",
          "common":"Solomon Islands"
        }
      }
    },
    "tld":[
      ".sb"
    ],
    "cca2":"SB",
    "ccn3":"090",
    "cca3":"SLB",
    "cioc":"SOL",
    "currency":[
      "SBD"
    ],
    "callingCode":[
      "677"
    ],
    "capital":"Honiara",
    "altSpellings":[
      "SB"
    ],
    "region":"Oceania",
    "subregion":"Melanesia",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -8,
      159
    ],
    "demonym":"Solomon Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":28896
  },
  {
    "name":{
      "common":"Sierra Leone",
      "official":"Republic of Sierra Leone",
      "native":{
        "eng":{
          "official":"Republic of Sierra Leone",
          "common":"Sierra Leone"
        }
      }
    },
    "tld":[
      ".sl"
    ],
    "cca2":"SL",
    "ccn3":"694",
    "cca3":"SLE",
    "cioc":"SLE",
    "currency":[
      "SLL"
    ],
    "callingCode":[
      "232"
    ],
    "capital":"Freetown",
    "altSpellings":[
      "SL",
      "Republic of Sierra Leone"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      8.5,
      -11.5
    ],
    "demonym":"Sierra Leonean",
    "landlocked":false,
    "borders":[
      "GIN",
      "LBR"
    ],
    "area":71740
  },
  {
    "name":{
      "common":"El Salvador",
      "official":"Republic of El Salvador",
      "native":{
        "spa":{
          "official":"República de El Salvador",
          "common":"El Salvador"
        }
      }
    },
    "tld":[
      ".sv"
    ],
    "cca2":"SV",
    "ccn3":"222",
    "cca3":"SLV",
    "cioc":"ESA",
    "currency":[
      "SVC",
      "USD"
    ],
    "callingCode":[
      "503"
    ],
    "capital":"San Salvador",
    "altSpellings":[
      "SV",
      "Republic of El Salvador",
      "República de El Salvador"
    ],
    "region":"Americas",
    "subregion":"Central America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      13.83333333,
      -88.91666666
    ],
    "demonym":"Salvadoran",
    "landlocked":false,
    "borders":[
      "GTM",
      "HND"
    ],
    "area":21041
  },
  {
    "name":{
      "common":"San Marino",
      "official":"Most Serene Republic of San Marino",
      "native":{
        "ita":{
          "official":"Serenissima Repubblica di San Marino",
          "common":"San Marino"
        }
      }
    },
    "tld":[
      ".sm"
    ],
    "cca2":"SM",
    "ccn3":"674",
    "cca3":"SMR",
    "cioc":"SMR",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "378"
    ],
    "capital":"City of San Marino",
    "altSpellings":[
      "SM",
      "Republic of San Marino",
      "Repubblica di San Marino"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "ita":"Italian"
    },
    "latlng":[
      43.76666666,
      12.41666666
    ],
    "demonym":"Sammarinese",
    "landlocked":true,
    "borders":[
      "ITA"
    ],
    "area":61
  },
  {
    "name":{
      "common":"Somalia",
      "official":"Federal Republic of Somalia",
      "native":{
        "ara":{
          "official":"??????? ?????????",
          "common":"?????????"
        },
        "som":{
          "official":"Jamhuuriyadda Federaalka Soomaaliya",
          "common":"Soomaaliya"
        }
      }
    },
    "tld":[
      ".so"
    ],
    "cca2":"SO",
    "ccn3":"706",
    "cca3":"SOM",
    "cioc":"SOM",
    "currency":[
      "SOS"
    ],
    "callingCode":[
      "252"
    ],
    "capital":"Mogadishu",
    "altSpellings":[
      "SO",
      "a?-??m?l",
      "Federal Republic of Somalia",
      "Jamhuuriyadda Federaalka Soomaaliya",
      "Jumh?riyyat a?-??m?l al-Fider?liyya"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "ara":"Arabic",
      "som":"Somali"
    },
    "latlng":[
      10,
      49
    ],
    "demonym":"Somali",
    "landlocked":false,
    "borders":[
      "DJI",
      "ETH",
      "KEN"
    ],
    "area":637657
  },
  {
    "name":{
      "common":"Saint Pierre and Miquelon",
      "official":"Saint Pierre and Miquelon",
      "native":{
        "fra":{
          "official":"Collectivité territoriale de Saint-Pierre-et-Miquelon",
          "common":"Saint-Pierre-et-Miquelon"
        }
      }
    },
    "tld":[
      ".pm"
    ],
    "cca2":"PM",
    "ccn3":"666",
    "cca3":"SPM",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "508"
    ],
    "capital":"Saint-Pierre",
    "altSpellings":[
      "PM",
      "Collectivité territoriale de Saint-Pierre-et-Miquelon"
    ],
    "region":"Americas",
    "subregion":"Northern America",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      46.83333333,
      -56.33333333
    ],
    "demonym":"French",
    "landlocked":false,
    "borders":[

    ],
    "area":242
  },
  {
    "name":{
      "common":"Serbia",
      "official":"Republic of Serbia",
      "native":{
        "srp":{
          "official":"????????? ??????",
          "common":"??????"
        }
      }
    },
    "tld":[
      ".rs",
      ".???"
    ],
    "cca2":"RS",
    "ccn3":"688",
    "cca3":"SRB",
    "cioc":"SRB",
    "currency":[
      "RSD"
    ],
    "callingCode":[
      "381"
    ],
    "capital":"Belgrade",
    "altSpellings":[
      "RS",
      "Srbija",
      "Republic of Serbia",
      "????????? ??????",
      "Republika Srbija"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "srp":"Serbian"
    },
    "latlng":[
      44,
      21
    ],
    "demonym":"Serbian",
    "landlocked":true,
    "borders":[
      "BIH",
      "BGR",
      "HRV",
      "HUN",
      "UNK",
      "MKD",
      "MNE",
      "ROU"
    ],
    "area":88361
  },
  {
    "name":{
      "common":"South Sudan",
      "official":"Republic of South Sudan",
      "native":{
        "eng":{
          "official":"Republic of South Sudan",
          "common":"South Sudan"
        }
      }
    },
    "tld":[
      ".ss"
    ],
    "cca2":"SS",
    "ccn3":"728",
    "cca3":"SSD",
    "cioc":"",
    "currency":[
      "SSP"
    ],
    "callingCode":[
      "211"
    ],
    "capital":"Juba",
    "altSpellings":[
      "SS"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      7,
      30
    ],
    "demonym":"South Sudanese",
    "landlocked":true,
    "borders":[
      "CAF",
      "COD",
      "ETH",
      "KEN",
      "SDN",
      "UGA"
    ],
    "area":619745
  },
  {
    "name":{
      "common":"São Tomé and Príncipe",
      "official":"Democratic Republic of São Tomé and Príncipe",
      "native":{
        "por":{
          "official":"República Democrática do São Tomé e Príncipe",
          "common":"São Tomé e Príncipe"
        }
      }
    },
    "tld":[
      ".st"
    ],
    "cca2":"ST",
    "ccn3":"678",
    "cca3":"STP",
    "cioc":"STP",
    "currency":[
      "STD"
    ],
    "callingCode":[
      "239"
    ],
    "capital":"São Tomé",
    "altSpellings":[
      "ST",
      "Democratic Republic of São Tomé and Príncipe",
      "Sao Tome and Principe",
      "República Democrática de São Tomé e Príncipe"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "por":"Portuguese"
    },
    "latlng":[
      1,
      7
    ],
    "demonym":"Sao Tomean",
    "landlocked":false,
    "borders":[

    ],
    "area":964
  },
  {
    "name":{
      "common":"Suriname",
      "official":"Republic of Suriname",
      "native":{
        "nld":{
          "official":"Republiek Suriname",
          "common":"Suriname"
        }
      }
    },
    "tld":[
      ".sr"
    ],
    "cca2":"SR",
    "ccn3":"740",
    "cca3":"SUR",
    "cioc":"SUR",
    "currency":[
      "SRD"
    ],
    "callingCode":[
      "597"
    ],
    "capital":"Paramaribo",
    "altSpellings":[
      "SR",
      "Sarnam",
      "Sranangron",
      "Republic of Suriname",
      "Republiek Suriname"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "nld":"Dutch"
    },
    "latlng":[
      4,
      -56
    ],
    "demonym":"Surinamer",
    "landlocked":false,
    "borders":[
      "BRA",
      "GUF",
      "GUY"
    ],
    "area":163820
  },
  {
    "name":{
      "common":"Slovakia",
      "official":"Slovak Republic",
      "native":{
        "slk":{
          "official":"Slovenská republika",
          "common":"Slovensko"
        }
      }
    },
    "tld":[
      ".sk"
    ],
    "cca2":"SK",
    "ccn3":"703",
    "cca3":"SVK",
    "cioc":"SVK",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "421"
    ],
    "capital":"Bratislava",
    "altSpellings":[
      "SK",
      "Slovak Republic",
      "Slovenská republika"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "slk":"Slovak"
    },
    "latlng":[
      48.66666666,
      19.5
    ],
    "demonym":"Slovak",
    "landlocked":true,
    "borders":[
      "AUT",
      "CZE",
      "HUN",
      "POL",
      "UKR"
    ],
    "area":49037
  },
  {
    "name":{
      "common":"Slovenia",
      "official":"Republic of Slovenia",
      "native":{
        "slv":{
          "official":"Republika Slovenija",
          "common":"Slovenija"
        }
      }
    },
    "tld":[
      ".si"
    ],
    "cca2":"SI",
    "ccn3":"705",
    "cca3":"SVN",
    "cioc":"SLO",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "386"
    ],
    "capital":"Ljubljana",
    "altSpellings":[
      "SI",
      "Republic of Slovenia",
      "Republika Slovenija"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "slv":"Slovene"
    },
    "latlng":[
      46.11666666,
      14.81666666
    ],
    "demonym":"Slovene",
    "landlocked":false,
    "borders":[
      "AUT",
      "HRV",
      "ITA",
      "HUN"
    ],
    "area":20273
  },
  {
    "name":{
      "common":"Sweden",
      "official":"Kingdom of Sweden",
      "native":{
        "swe":{
          "official":"Konungariket Sverige",
          "common":"Sverige"
        }
      }
    },
    "tld":[
      ".se"
    ],
    "cca2":"SE",
    "ccn3":"752",
    "cca3":"SWE",
    "cioc":"SWE",
    "currency":[
      "SEK"
    ],
    "callingCode":[
      "46"
    ],
    "capital":"Stockholm",
    "altSpellings":[
      "SE",
      "Kingdom of Sweden",
      "Konungariket Sverige"
    ],
    "region":"Europe",
    "subregion":"Northern Europe",
    "languages":{
      "swe":"Swedish"
    },
    "latlng":[
      62,
      15
    ],
    "demonym":"Swedish",
    "landlocked":false,
    "borders":[
      "FIN",
      "NOR"
    ],
    "area":450295
  },
  {
    "name":{
      "common":"Swaziland",
      "official":"Kingdom of Swaziland",
      "native":{
        "eng":{
          "official":"Kingdom of Swaziland",
          "common":"Swaziland"
        },
        "ssw":{
          "official":"Kingdom of Swaziland",
          "common":"Swaziland"
        }
      }
    },
    "tld":[
      ".sz"
    ],
    "cca2":"SZ",
    "ccn3":"748",
    "cca3":"SWZ",
    "cioc":"SWZ",
    "currency":[
      "SZL"
    ],
    "callingCode":[
      "268"
    ],
    "capital":"Lobamba",
    "altSpellings":[
      "SZ",
      "weSwatini",
      "Swatini",
      "Ngwane",
      "Kingdom of Swaziland",
      "Umbuso waseSwatini"
    ],
    "region":"Africa",
    "subregion":"Southern Africa",
    "languages":{
      "eng":"English",
      "ssw":"Swazi"
    },
    "latlng":[
      -26.5,
      31.5
    ],
    "demonym":"Swazi",
    "landlocked":true,
    "borders":[
      "MOZ",
      "ZAF"
    ],
    "area":17364
  },
  {
    "name":{
      "common":"Sint Maarten",
      "official":"Sint Maarten",
      "native":{
        "eng":{
          "official":"Sint Maarten",
          "common":"Sint Maarten"
        },
        "fra":{
          "official":"Saint-Martin",
          "common":"Saint-Martin"
        },
        "nld":{
          "official":"Sint Maarten",
          "common":"Sint Maarten"
        }
      }
    },
    "tld":[
      ".sx"
    ],
    "cca2":"SX",
    "ccn3":"534",
    "cca3":"SXM",
    "cioc":"",
    "currency":[
      "ANG"
    ],
    "callingCode":[
      "1721"
    ],
    "capital":"Philipsburg",
    "altSpellings":[
      "SX",
      "Sint Maarten (Dutch part)"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English",
      "fra":"French",
      "nld":"Dutch"
    },
    "latlng":[
      18.033333,
      -63.05
    ],
    "demonym":"St. Maartener",
    "landlocked":false,
    "borders":[
      "MAF"
    ],
    "area":34
  },
  {
    "name":{
      "common":"Seychelles",
      "official":"Republic of Seychelles",
      "native":{
        "crs":{
          "official":"Repiblik Sesel",
          "common":"Sesel"
        },
        "eng":{
          "official":"Republic of Seychelles",
          "common":"Seychelles"
        },
        "fra":{
          "official":"République des Seychelles",
          "common":"Seychelles"
        }
      }
    },
    "tld":[
      ".sc"
    ],
    "cca2":"SC",
    "ccn3":"690",
    "cca3":"SYC",
    "cioc":"SEY",
    "currency":[
      "SCR"
    ],
    "callingCode":[
      "248"
    ],
    "capital":"Victoria",
    "altSpellings":[
      "SC",
      "Republic of Seychelles",
      "Repiblik Sesel",
      "République des Seychelles"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "crs":"Seychellois Creole",
      "eng":"English",
      "fra":"French"
    },
    "latlng":[
      -4.58333333,
      55.66666666
    ],
    "demonym":"Seychellois",
    "landlocked":false,
    "borders":[

    ],
    "area":452
  },
  {
    "name":{
      "common":"Syria",
      "official":"Syrian Arab Republic",
      "native":{
        "ara":{
          "official":"????????? ??????? ???????",
          "common":"?????"
        }
      }
    },
    "tld":[
      ".sy",
      "?????."
    ],
    "cca2":"SY",
    "ccn3":"760",
    "cca3":"SYR",
    "cioc":"SYR",
    "currency":[
      "SYP"
    ],
    "callingCode":[
      "963"
    ],
    "capital":"Damascus",
    "altSpellings":[
      "SY",
      "Syrian Arab Republic",
      "Al-Jumh?r?yah Al-?Arab?yah As-S?r?yah"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      35,
      38
    ],
    "demonym":"Syrian",
    "landlocked":false,
    "borders":[
      "IRQ",
      "ISR",
      "JOR",
      "LBN",
      "TUR"
    ],
    "area":185180
  },
  {
    "name":{
      "common":"Turks and Caicos Islands",
      "official":"Turks and Caicos Islands",
      "native":{
        "eng":{
          "official":"Turks and Caicos Islands",
          "common":"Turks and Caicos Islands"
        }
      }
    },
    "tld":[
      ".tc"
    ],
    "cca2":"TC",
    "ccn3":"796",
    "cca3":"TCA",
    "cioc":"",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1649"
    ],
    "capital":"Cockburn Town",
    "altSpellings":[
      "TC"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      21.75,
      -71.58333333
    ],
    "demonym":"Turks and Caicos Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":948
  },
  {
    "name":{
      "common":"Chad",
      "official":"Republic of Chad",
      "native":{
        "ara":{
          "official":"??????? ????",
          "common":"?????"
        },
        "fra":{
          "official":"République du Tchad",
          "common":"Tchad"
        }
      }
    },
    "tld":[
      ".td"
    ],
    "cca2":"TD",
    "ccn3":"148",
    "cca3":"TCD",
    "cioc":"CHA",
    "currency":[
      "XAF"
    ],
    "callingCode":[
      "235"
    ],
    "capital":"N'Djamena",
    "altSpellings":[
      "TD",
      "Tchad",
      "Republic of Chad",
      "République du Tchad"
    ],
    "region":"Africa",
    "subregion":"Middle Africa",
    "languages":{
      "ara":"Arabic",
      "fra":"French"
    },
    "latlng":[
      15,
      19
    ],
    "demonym":"Chadian",
    "landlocked":true,
    "borders":[
      "CMR",
      "CAF",
      "LBY",
      "NER",
      "NGA",
      "SSD"
    ],
    "area":1284000
  },
  {
    "name":{
      "common":"Togo",
      "official":"Togolese Republic",
      "native":{
        "fra":{
          "official":"République togolaise",
          "common":"Togo"
        }
      }
    },
    "tld":[
      ".tg"
    ],
    "cca2":"TG",
    "ccn3":"768",
    "cca3":"TGO",
    "cioc":"TOG",
    "currency":[
      "XOF"
    ],
    "callingCode":[
      "228"
    ],
    "capital":"Lomé",
    "altSpellings":[
      "TG",
      "Togolese",
      "Togolese Republic",
      "République Togolaise"
    ],
    "region":"Africa",
    "subregion":"Western Africa",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      8,
      1.16666666
    ],
    "demonym":"Togolese",
    "landlocked":false,
    "borders":[
      "BEN",
      "BFA",
      "GHA"
    ],
    "area":56785
  },
  {
    "name":{
      "common":"Thailand",
      "official":"Kingdom of Thailand",
      "native":{
        "tha":{
          "official":"??????????????",
          "common":"?????????"
        }
      }
    },
    "tld":[
      ".th",
      ".???"
    ],
    "cca2":"TH",
    "ccn3":"764",
    "cca3":"THA",
    "cioc":"THA",
    "currency":[
      "THB"
    ],
    "callingCode":[
      "66"
    ],
    "capital":"Bangkok",
    "altSpellings":[
      "TH",
      "Prathet",
      "Thai",
      "Kingdom of Thailand",
      "??????????????",
      "Ratcha Anachak Thai"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "tha":"Thai"
    },
    "latlng":[
      15,
      100
    ],
    "demonym":"Thai",
    "landlocked":false,
    "borders":[
      "MMR",
      "KHM",
      "LAO",
      "MYS"
    ],
    "area":513120
  },
  {
    "name":{
      "common":"Tajikistan",
      "official":"Republic of Tajikistan",
      "native":{
        "rus":{
          "official":"?????????? ???????????",
          "common":"???????????"
        },
        "tgk":{
          "official":"???????? ??????????",
          "common":"??????????"
        }
      }
    },
    "tld":[
      ".tj"
    ],
    "cca2":"TJ",
    "ccn3":"762",
    "cca3":"TJK",
    "cioc":"TJK",
    "currency":[
      "TJS"
    ],
    "callingCode":[
      "992"
    ],
    "capital":"Dushanbe",
    "altSpellings":[
      "TJ",
      "Toçikiston",
      "Republic of Tajikistan",
      "???????? ??????????",
      "Çumhuriyi Toçikiston"
    ],
    "region":"Asia",
    "subregion":"Central Asia",
    "languages":{
      "rus":"Russian",
      "tgk":"Tajik"
    },
    "latlng":[
      39,
      71
    ],
    "demonym":"Tadzhik",
    "landlocked":true,
    "borders":[
      "AFG",
      "CHN",
      "KGZ",
      "UZB"
    ],
    "area":143100
  },
  {
    "name":{
      "common":"Tokelau",
      "official":"Tokelau",
      "native":{
        "eng":{
          "official":"Tokelau",
          "common":"Tokelau"
        },
        "smo":{
          "official":"Tokelau",
          "common":"Tokelau"
        },
        "tkl":{
          "official":"Tokelau",
          "common":"Tokelau"
        }
      }
    },
    "tld":[
      ".tk"
    ],
    "cca2":"TK",
    "ccn3":"772",
    "cca3":"TKL",
    "cioc":"",
    "currency":[
      "NZD"
    ],
    "callingCode":[
      "690"
    ],
    "capital":"Fakaofo",
    "altSpellings":[
      "TK"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "smo":"Samoan",
      "tkl":"Tokelauan"
    },
    "latlng":[
      -9,
      -172
    ],
    "demonym":"Tokelauan",
    "landlocked":false,
    "borders":[

    ],
    "area":12
  },
  {
    "name":{
      "common":"Turkmenistan",
      "official":"Turkmenistan",
      "native":{
        "rus":{
          "official":"????????????",
          "common":"?????????"
        },
        "tuk":{
          "official":"Türkmenistan",
          "common":"Türkmenistan"
        }
      }
    },
    "tld":[
      ".tm"
    ],
    "cca2":"TM",
    "ccn3":"795",
    "cca3":"TKM",
    "cioc":"TKM",
    "currency":[
      "TMT"
    ],
    "callingCode":[
      "993"
    ],
    "capital":"Ashgabat",
    "altSpellings":[
      "TM"
    ],
    "region":"Asia",
    "subregion":"Central Asia",
    "languages":{
      "rus":"Russian",
      "tuk":"Turkmen"
    },
    "latlng":[
      40,
      60
    ],
    "demonym":"Turkmen",
    "landlocked":true,
    "borders":[
      "AFG",
      "IRN",
      "KAZ",
      "UZB"
    ],
    "area":488100
  },
  {
    "name":{
      "common":"Timor-Leste",
      "official":"Democratic Republic of Timor-Leste",
      "native":{
        "por":{
          "official":"República Democrática de Timor-Leste",
          "common":"Timor-Leste"
        },
        "tet":{
          "official":"Repúblika Demokrátika Timór-Leste",
          "common":"Timór-Leste"
        }
      }
    },
    "tld":[
      ".tl"
    ],
    "cca2":"TL",
    "ccn3":"626",
    "cca3":"TLS",
    "cioc":"TLS",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "670"
    ],
    "capital":"Dili",
    "altSpellings":[
      "TL",
      "East Timor",
      "Democratic Republic of Timor-Leste",
      "República Democrática de Timor-Leste",
      "Repúblika Demokrátika Timór-Leste",
      "Timór Lorosa'e",
      "Timor Lorosae"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "por":"Portuguese",
      "tet":"Tetum"
    },
    "latlng":[
      -8.83333333,
      125.91666666
    ],
    "demonym":"East Timorese",
    "landlocked":false,
    "borders":[
      "IDN"
    ],
    "area":14874
  },
  {
    "name":{
      "common":"Tonga",
      "official":"Kingdom of Tonga",
      "native":{
        "eng":{
          "official":"Kingdom of Tonga",
          "common":"Tonga"
        },
        "ton":{
          "official":"Kingdom of Tonga",
          "common":"Tonga"
        }
      }
    },
    "tld":[
      ".to"
    ],
    "cca2":"TO",
    "ccn3":"776",
    "cca3":"TON",
    "cioc":"TGA",
    "currency":[
      "TOP"
    ],
    "callingCode":[
      "676"
    ],
    "capital":"Nuku'alofa",
    "altSpellings":[
      "TO"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "ton":"Tongan"
    },
    "latlng":[
      -20,
      -175
    ],
    "demonym":"Tongan",
    "landlocked":false,
    "borders":[

    ],
    "area":747
  },
  {
    "name":{
      "common":"Trinidad and Tobago",
      "official":"Republic of Trinidad and Tobago",
      "native":{
        "eng":{
          "official":"Republic of Trinidad and Tobago",
          "common":"Trinidad and Tobago"
        }
      }
    },
    "tld":[
      ".tt"
    ],
    "cca2":"TT",
    "ccn3":"780",
    "cca3":"TTO",
    "cioc":"TTO",
    "currency":[
      "TTD"
    ],
    "callingCode":[
      "1868"
    ],
    "capital":"Port of Spain",
    "altSpellings":[
      "TT",
      "Republic of Trinidad and Tobago"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      11,
      -61
    ],
    "demonym":"Trinidadian",
    "landlocked":false,
    "borders":[

    ],
    "area":5130
  },
  {
    "name":{
      "common":"Tunisia",
      "official":"Tunisian Republic",
      "native":{
        "ara":{
          "official":"????????? ????????",
          "common":"????"
        }
      }
    },
    "tld":[
      ".tn"
    ],
    "cca2":"TN",
    "ccn3":"788",
    "cca3":"TUN",
    "cioc":"TUN",
    "currency":[
      "TND"
    ],
    "callingCode":[
      "216"
    ],
    "capital":"Tunis",
    "altSpellings":[
      "TN",
      "Republic of Tunisia",
      "al-Jumh?riyyah at-T?nisiyyah"
    ],
    "region":"Africa",
    "subregion":"Northern Africa",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      34,
      9
    ],
    "demonym":"Tunisian",
    "landlocked":false,
    "borders":[
      "DZA",
      "LBY"
    ],
    "area":163610
  },
  {
    "name":{
      "common":"Turkey",
      "official":"Republic of Turkey",
      "native":{
        "tur":{
          "official":"Türkiye Cumhuriyeti",
          "common":"Türkiye"
        }
      }
    },
    "tld":[
      ".tr"
    ],
    "cca2":"TR",
    "ccn3":"792",
    "cca3":"TUR",
    "cioc":"TUR",
    "currency":[
      "TRY"
    ],
    "callingCode":[
      "90"
    ],
    "capital":"Ankara",
    "altSpellings":[
      "TR",
      "Turkiye",
      "Republic of Turkey",
      "Türkiye Cumhuriyeti"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "tur":"Turkish"
    },
    "latlng":[
      39,
      35
    ],
    "demonym":"Turkish",
    "landlocked":false,
    "borders":[
      "ARM",
      "AZE",
      "BGR",
      "GEO",
      "GRC",
      "IRN",
      "IRQ",
      "SYR"
    ],
    "area":783562
  },
  {
    "name":{
      "common":"Tuvalu",
      "official":"Tuvalu",
      "native":{
        "eng":{
          "official":"Tuvalu",
          "common":"Tuvalu"
        },
        "tvl":{
          "official":"Tuvalu",
          "common":"Tuvalu"
        }
      }
    },
    "tld":[
      ".tv"
    ],
    "cca2":"TV",
    "ccn3":"798",
    "cca3":"TUV",
    "cioc":"TUV",
    "currency":[
      "AUD"
    ],
    "callingCode":[
      "688"
    ],
    "capital":"Funafuti",
    "altSpellings":[
      "TV"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "tvl":"Tuvaluan"
    },
    "latlng":[
      -8,
      178
    ],
    "demonym":"Tuvaluan",
    "landlocked":false,
    "borders":[

    ],
    "area":26
  },
  {
    "name":{
      "common":"Taiwan",
      "official":"Republic of China (Taiwan)",
      "native":{
        "zho":{
          "official":"????",
          "common":"??"
        }
      }
    },
    "tld":[
      ".tw",
      ".??",
      ".??"
    ],
    "cca2":"TW",
    "ccn3":"158",
    "cca3":"TWN",
    "cioc":"TPE",
    "currency":[
      "TWD"
    ],
    "callingCode":[
      "886"
    ],
    "capital":"Taipei",
    "altSpellings":[
      "TW",
      "Táiw?n",
      "Republic of China",
      "????",
      "Zh?nghuá Mínguó",
      "Chinese Taipei for IOC",
      "Taiwan, Province of China"
    ],
    "region":"Asia",
    "subregion":"Eastern Asia",
    "languages":{
      "zho":"Chinese"
    },
    "latlng":[
      23.5,
      121
    ],
    "demonym":"Taiwanese",
    "landlocked":false,
    "borders":[

    ],
    "area":36193
  },
  {
    "name":{
      "common":"Tanzania",
      "official":"United Republic of Tanzania",
      "native":{
        "eng":{
          "official":"United Republic of Tanzania",
          "common":"Tanzania"
        },
        "swa":{
          "official":"Jamhuri ya Muungano wa Tanzania",
          "common":"Tanzania"
        }
      }
    },
    "tld":[
      ".tz"
    ],
    "cca2":"TZ",
    "ccn3":"834",
    "cca3":"TZA",
    "cioc":"TAN",
    "currency":[
      "TZS"
    ],
    "callingCode":[
      "255"
    ],
    "capital":"Dodoma",
    "altSpellings":[
      "TZ",
      "Tanzania, United Republic of",
      "United Republic of Tanzania",
      "Jamhuri ya Muungano wa Tanzania"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English",
      "swa":"Swahili"
    },
    "latlng":[
      -6,
      35
    ],
    "demonym":"Tanzanian",
    "landlocked":false,
    "borders":[
      "BDI",
      "COD",
      "KEN",
      "MWI",
      "MOZ",
      "RWA",
      "UGA",
      "ZMB"
    ],
    "area":945087
  },
  {
    "name":{
      "common":"Uganda",
      "official":"Republic of Uganda",
      "native":{
        "eng":{
          "official":"Republic of Uganda",
          "common":"Uganda"
        },
        "swa":{
          "official":"Republic of Uganda",
          "common":"Uganda"
        }
      }
    },
    "tld":[
      ".ug"
    ],
    "cca2":"UG",
    "ccn3":"800",
    "cca3":"UGA",
    "cioc":"UGA",
    "currency":[
      "UGX"
    ],
    "callingCode":[
      "256"
    ],
    "capital":"Kampala",
    "altSpellings":[
      "UG",
      "Republic of Uganda",
      "Jamhuri ya Uganda"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English",
      "swa":"Swahili"
    },
    "latlng":[
      1,
      32
    ],
    "demonym":"Ugandan",
    "landlocked":true,
    "borders":[
      "COD",
      "KEN",
      "RWA",
      "SSD",
      "TZA"
    ],
    "area":241550
  },
  {
    "name":{
      "common":"Ukraine",
      "official":"Ukraine",
      "native":{
        "rus":{
          "official":"???????",
          "common":"???????"
        },
        "ukr":{
          "official":"???????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".ua",
      ".???"
    ],
    "cca2":"UA",
    "ccn3":"804",
    "cca3":"UKR",
    "cioc":"UKR",
    "currency":[
      "UAH"
    ],
    "callingCode":[
      "380"
    ],
    "capital":"Kiev",
    "altSpellings":[
      "UA",
      "Ukrayina"
    ],
    "region":"Europe",
    "subregion":"Eastern Europe",
    "languages":{
      "rus":"Russian",
      "ukr":"Ukrainian"
    },
    "latlng":[
      49,
      32
    ],
    "demonym":"Ukrainian",
    "landlocked":false,
    "borders":[
      "BLR",
      "HUN",
      "MDA",
      "POL",
      "ROU",
      "RUS",
      "SVK"
    ],
    "area":603500
  },
  {
    "name":{
      "common":"United States Minor Outlying Islands",
      "official":"United States Minor Outlying Islands",
      "native":{
        "eng":{
          "official":"United States Minor Outlying Islands",
          "common":"United States Minor Outlying Islands"
        }
      }
    },
    "tld":[
      ".us"
    ],
    "cca2":"UM",
    "ccn3":"581",
    "cca3":"UMI",
    "cioc":"",
    "currency":[
      "USD"
    ],
    "callingCode":[

    ],
    "capital":"",
    "altSpellings":[
      "UM"
    ],
    "region":"Americas",
    "subregion":"Northern America",
    "languages":{
      "eng":"English"
    },
    "latlng":[

    ],
    "demonym":"American",
    "landlocked":false,
    "borders":[

    ],
    "area":34.2
  },
  {
    "name":{
      "common":"Uruguay",
      "official":"Oriental Republic of Uruguay",
      "native":{
        "spa":{
          "official":"República Oriental del Uruguay",
          "common":"Uruguay"
        }
      }
    },
    "tld":[
      ".uy"
    ],
    "cca2":"UY",
    "ccn3":"858",
    "cca3":"URY",
    "cioc":"URU",
    "currency":[
      "UYI",
      "UYU"
    ],
    "callingCode":[
      "598"
    ],
    "capital":"Montevideo",
    "altSpellings":[
      "UY",
      "Oriental Republic of Uruguay",
      "República Oriental del Uruguay"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      -33,
      -56
    ],
    "demonym":"Uruguayan",
    "landlocked":false,
    "borders":[
      "ARG",
      "BRA"
    ],
    "area":181034
  },
  {
    "name":{
      "common":"United States",
      "official":"United States of America",
      "native":{
        "eng":{
          "official":"United States of America",
          "common":"United States"
        }
      }
    },
    "tld":[
      ".us"
    ],
    "cca2":"US",
    "ccn3":"840",
    "cca3":"USA",
    "cioc":"USA",
    "currency":[
      "USD",
      "USN",
      "USS"
    ],
    "callingCode":[
      "1"
    ],
    "capital":"Washington D.C.",
    "altSpellings":[
      "US",
      "USA",
      "United States of America"
    ],
    "region":"Americas",
    "subregion":"Northern America",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      38,
      -97
    ],
    "demonym":"American",
    "landlocked":false,
    "borders":[
      "CAN",
      "MEX"
    ],
    "area":9372610
  },
  {
    "name":{
      "common":"Uzbekistan",
      "official":"Republic of Uzbekistan",
      "native":{
        "rus":{
          "official":"?????????? ??????????",
          "common":"??????????"
        },
        "uzb":{
          "official":"O'zbekiston Respublikasi",
          "common":"O‘zbekiston"
        }
      }
    },
    "tld":[
      ".uz"
    ],
    "cca2":"UZ",
    "ccn3":"860",
    "cca3":"UZB",
    "cioc":"UZB",
    "currency":[
      "UZS"
    ],
    "callingCode":[
      "998"
    ],
    "capital":"Tashkent",
    "altSpellings":[
      "UZ",
      "Republic of Uzbekistan",
      "O‘zbekiston Respublikasi",
      "?????????? ????????????"
    ],
    "region":"Asia",
    "subregion":"Central Asia",
    "languages":{
      "rus":"Russian",
      "uzb":"Uzbek"
    },
    "latlng":[
      41,
      64
    ],
    "demonym":"Uzbekistani",
    "landlocked":true,
    "borders":[
      "AFG",
      "KAZ",
      "KGZ",
      "TJK",
      "TKM"
    ],
    "area":447400
  },
  {
    "name":{
      "common":"Vatican City",
      "official":"Vatican City State",
      "native":{
        "ita":{
          "official":"Stato della Città del Vaticano",
          "common":"Vaticano"
        },
        "lat":{
          "official":"Status Civitatis Vaticanæ",
          "common":"Vaticanæ"
        }
      }
    },
    "tld":[
      ".va"
    ],
    "cca2":"VA",
    "ccn3":"336",
    "cca3":"VAT",
    "cioc":"",
    "currency":[
      "EUR"
    ],
    "callingCode":[
      "3906698",
      "379"
    ],
    "capital":"Vatican City",
    "altSpellings":[
      "VA",
      "Holy See (Vatican City State)",
      "Vatican City State",
      "Stato della Città del Vaticano"
    ],
    "region":"Europe",
    "subregion":"Southern Europe",
    "languages":{
      "ita":"Italian",
      "lat":"Latin"
    },
    "latlng":[
      41.9,
      12.45
    ],
    "demonym":"Italian",
    "landlocked":true,
    "borders":[
      "ITA"
    ],
    "area":0.44
  },
  {
    "name":{
      "common":"Saint Vincent and the Grenadines",
      "official":"Saint Vincent and the Grenadines",
      "native":{
        "eng":{
          "official":"Saint Vincent and the Grenadines",
          "common":"Saint Vincent and the Grenadines"
        }
      }
    },
    "tld":[
      ".vc"
    ],
    "cca2":"VC",
    "ccn3":"670",
    "cca3":"VCT",
    "cioc":"VIN",
    "currency":[
      "XCD"
    ],
    "callingCode":[
      "1784"
    ],
    "capital":"Kingstown",
    "altSpellings":[
      "VC"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      13.25,
      -61.2
    ],
    "demonym":"Saint Vincentian",
    "landlocked":false,
    "borders":[

    ],
    "area":389
  },
  {
    "name":{
      "common":"Venezuela",
      "official":"Bolivarian Republic of Venezuela",
      "native":{
        "spa":{
          "official":"República Bolivariana de Venezuela",
          "common":"Venezuela"
        }
      }
    },
    "tld":[
      ".ve"
    ],
    "cca2":"VE",
    "ccn3":"862",
    "cca3":"VEN",
    "cioc":"VEN",
    "currency":[
      "VEF"
    ],
    "callingCode":[
      "58"
    ],
    "capital":"Caracas",
    "altSpellings":[
      "VE",
      "Bolivarian Republic of Venezuela",
      "Venezuela, Bolivarian Republic of",
      "República Bolivariana de Venezuela"
    ],
    "region":"Americas",
    "subregion":"South America",
    "languages":{
      "spa":"Spanish"
    },
    "latlng":[
      8,
      -66
    ],
    "demonym":"Venezuelan",
    "landlocked":false,
    "borders":[
      "BRA",
      "COL",
      "GUY"
    ],
    "area":916445
  },
  {
    "name":{
      "common":"British Virgin Islands",
      "official":"Virgin Islands",
      "native":{
        "eng":{
          "official":"Virgin Islands",
          "common":"British Virgin Islands"
        }
      }
    },
    "tld":[
      ".vg"
    ],
    "cca2":"VG",
    "ccn3":"092",
    "cca3":"VGB",
    "cioc":"IVB",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1284"
    ],
    "capital":"Road Town",
    "altSpellings":[
      "VG",
      "Virgin Islands, British"
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      18.431383,
      -64.62305
    ],
    "demonym":"Virgin Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":151
  },
  {
    "name":{
      "common":"United States Virgin Islands",
      "official":"Virgin Islands of the United States",
      "native":{
        "eng":{
          "official":"Virgin Islands of the United States",
          "common":"United States Virgin Islands"
        }
      }
    },
    "tld":[
      ".vi"
    ],
    "cca2":"VI",
    "ccn3":"850",
    "cca3":"VIR",
    "cioc":"ISV",
    "currency":[
      "USD"
    ],
    "callingCode":[
      "1340"
    ],
    "capital":"Charlotte Amalie",
    "altSpellings":[
      "VI",
      "Virgin Islands, U.S."
    ],
    "region":"Americas",
    "subregion":"Caribbean",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      18.35,
      -64.933333
    ],
    "demonym":"Virgin Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":347
  },
  {
    "name":{
      "common":"Vietnam",
      "official":"Socialist Republic of Vietnam",
      "native":{
        "vie":{
          "official":"C?ng hòa xã h?i ch? ngh?a Vi?t Nam",
          "common":"Vi?t Nam"
        }
      }
    },
    "tld":[
      ".vn"
    ],
    "cca2":"VN",
    "ccn3":"704",
    "cca3":"VNM",
    "cioc":"VIE",
    "currency":[
      "VND"
    ],
    "callingCode":[
      "84"
    ],
    "capital":"Hanoi",
    "altSpellings":[
      "VN",
      "Socialist Republic of Vietnam",
      "C?ng hòa Xã h?i ch? ngh?a Vi?t Nam",
      "Viet Nam"
    ],
    "region":"Asia",
    "subregion":"South-Eastern Asia",
    "languages":{
      "vie":"Vietnamese"
    },
    "latlng":[
      16.16666666,
      107.83333333
    ],
    "demonym":"Vietnamese",
    "landlocked":false,
    "borders":[
      "KHM",
      "CHN",
      "LAO"
    ],
    "area":331212
  },
  {
    "name":{
      "common":"Vanuatu",
      "official":"Republic of Vanuatu",
      "native":{
        "bis":{
          "official":"Ripablik blong Vanuatu",
          "common":"Vanuatu"
        },
        "eng":{
          "official":"Republic of Vanuatu",
          "common":"Vanuatu"
        },
        "fra":{
          "official":"République de Vanuatu",
          "common":"Vanuatu"
        }
      }
    },
    "tld":[
      ".vu"
    ],
    "cca2":"VU",
    "ccn3":"548",
    "cca3":"VUT",
    "cioc":"VAN",
    "currency":[
      "VUV"
    ],
    "callingCode":[
      "678"
    ],
    "capital":"Port Vila",
    "altSpellings":[
      "VU",
      "Republic of Vanuatu",
      "Ripablik blong Vanuatu",
      "République de Vanuatu"
    ],
    "region":"Oceania",
    "subregion":"Melanesia",
    "languages":{
      "bis":"Bislama",
      "eng":"English",
      "fra":"French"
    },
    "latlng":[
      -16,
      167
    ],
    "demonym":"Ni-Vanuatu",
    "landlocked":false,
    "borders":[

    ],
    "area":12189
  },
  {
    "name":{
      "common":"Wallis and Futuna",
      "official":"Territory of the Wallis and Futuna Islands",
      "native":{
        "fra":{
          "official":"Territoire des îles Wallis et Futuna",
          "common":"Wallis et Futuna"
        }
      }
    },
    "tld":[
      ".wf"
    ],
    "cca2":"WF",
    "ccn3":"876",
    "cca3":"WLF",
    "cioc":"",
    "currency":[
      "XPF"
    ],
    "callingCode":[
      "681"
    ],
    "capital":"Mata-Utu",
    "altSpellings":[
      "WF",
      "Territory of the Wallis and Futuna Islands",
      "Territoire des îles Wallis et Futuna"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "fra":"French"
    },
    "latlng":[
      -13.3,
      -176.2
    ],
    "demonym":"Wallis and Futuna Islander",
    "landlocked":false,
    "borders":[

    ],
    "area":142
  },
  {
    "name":{
      "common":"Samoa",
      "official":"Independent State of Samoa",
      "native":{
        "eng":{
          "official":"Independent State of Samoa",
          "common":"Samoa"
        },
        "smo":{
          "official":"Malo Sa?oloto Tuto?atasi o S?moa",
          "common":"S?moa"
        }
      }
    },
    "tld":[
      ".ws"
    ],
    "cca2":"WS",
    "ccn3":"882",
    "cca3":"WSM",
    "cioc":"SAM",
    "currency":[
      "WST"
    ],
    "callingCode":[
      "685"
    ],
    "capital":"Apia",
    "altSpellings":[
      "WS",
      "Independent State of Samoa",
      "Malo Sa?oloto Tuto?atasi o S?moa"
    ],
    "region":"Oceania",
    "subregion":"Polynesia",
    "languages":{
      "eng":"English",
      "smo":"Samoan"
    },
    "latlng":[
      -13.58333333,
      -172.33333333
    ],
    "demonym":"Samoan",
    "landlocked":false,
    "borders":[

    ],
    "area":2842
  },
  {
    "name":{
      "common":"Yemen",
      "official":"Republic of Yemen",
      "native":{
        "ara":{
          "official":"????????? ???????",
          "common":"???????"
        }
      }
    },
    "tld":[
      ".ye"
    ],
    "cca2":"YE",
    "ccn3":"887",
    "cca3":"YEM",
    "cioc":"YEM",
    "currency":[
      "YER"
    ],
    "callingCode":[
      "967"
    ],
    "capital":"Sana'a",
    "altSpellings":[
      "YE",
      "Yemeni Republic",
      "al-Jumh?riyyah al-Yamaniyyah"
    ],
    "region":"Asia",
    "subregion":"Western Asia",
    "languages":{
      "ara":"Arabic"
    },
    "latlng":[
      15,
      48
    ],
    "demonym":"Yemeni",
    "landlocked":false,
    "borders":[
      "OMN",
      "SAU"
    ],
    "area":527968
  },
  {
    "name":{
      "common":"South Africa",
      "official":"Republic of South Africa",
      "native":{
        "afr":{
          "official":"Republiek van Suid-Afrika",
          "common":"South Africa"
        },
        "eng":{
          "official":"Republic of South Africa",
          "common":"South Africa"
        },
        "nbl":{
          "official":"IRiphabliki yeSewula Afrika",
          "common":"Sewula Afrika"
        },
        "nso":{
          "official":"Rephaboliki ya Afrika-Borwa ",
          "common":"Afrika-Borwa"
        },
        "sot":{
          "official":"Rephaboliki ya Afrika Borwa",
          "common":"Afrika Borwa"
        },
        "ssw":{
          "official":"IRiphabhulikhi yeNingizimu Afrika",
          "common":"Ningizimu Afrika"
        },
        "tsn":{
          "official":"Rephaboliki ya Aforika Borwa",
          "common":"Aforika Borwa"
        },
        "tso":{
          "official":"Riphabliki ra Afrika Dzonga",
          "common":"Afrika Dzonga"
        },
        "ven":{
          "official":"Riphabu?iki ya Afurika Tshipembe",
          "common":"Afurika Tshipembe"
        },
        "xho":{
          "official":"IRiphabliki yaseMzantsi Afrika",
          "common":"Mzantsi Afrika"
        },
        "zul":{
          "official":"IRiphabliki yaseNingizimu Afrika",
          "common":"Ningizimu Afrika"
        }
      }
    },
    "tld":[
      ".za"
    ],
    "cca2":"ZA",
    "ccn3":"710",
    "cca3":"ZAF",
    "cioc":"RSA",
    "currency":[
      "ZAR"
    ],
    "callingCode":[
      "27"
    ],
    "capital":"Pretoria",
    "altSpellings":[
      "ZA",
      "RSA",
      "Suid-Afrika",
      "Republic of South Africa"
    ],
    "region":"Africa",
    "subregion":"Southern Africa",
    "languages":{
      "afr":"Afrikaans",
      "eng":"English",
      "nbl":"Southern Ndebele",
      "nso":"Northern Sotho",
      "sot":"Southern Sotho",
      "ssw":"Swazi",
      "tsn":"Tswana",
      "tso":"Tsonga",
      "ven":"Venda",
      "xho":"Xhosa",
      "zul":"Zulu"
    },
    "latlng":[
      -29,
      24
    ],
    "demonym":"South African",
    "landlocked":false,
    "borders":[
      "BWA",
      "LSO",
      "MOZ",
      "NAM",
      "SWZ",
      "ZWE"
    ],
    "area":1221037
  },
  {
    "name":{
      "common":"Zambia",
      "official":"Republic of Zambia",
      "native":{
        "eng":{
          "official":"Republic of Zambia",
          "common":"Zambia"
        }
      }
    },
    "tld":[
      ".zm"
    ],
    "cca2":"ZM",
    "ccn3":"894",
    "cca3":"ZMB",
    "cioc":"ZAM",
    "currency":[
      "ZMW"
    ],
    "callingCode":[
      "260"
    ],
    "capital":"Lusaka",
    "altSpellings":[
      "ZM",
      "Republic of Zambia"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "eng":"English"
    },
    "latlng":[
      -15,
      30
    ],
    "demonym":"Zambian",
    "landlocked":true,
    "borders":[
      "AGO",
      "BWA",
      "COD",
      "MWI",
      "MOZ",
      "NAM",
      "TZA",
      "ZWE"
    ],
    "area":752612
  },
  {
    "name":{
      "common":"Zimbabwe",
      "official":"Republic of Zimbabwe",
      "native":{
        "bwg":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "eng":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "kck":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "khi":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "ndc":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "nde":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "nya":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "sna":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "sot":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "toi":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "tsn":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "tso":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "ven":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "xho":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        },
        "zib":{
          "official":"Republic of Zimbabwe",
          "common":"Zimbabwe"
        }
      }
    },
    "tld":[
      ".zw"
    ],
    "cca2":"ZW",
    "ccn3":"716",
    "cca3":"ZWE",
    "cioc":"ZIM",
    "currency":[
      "ZWL"
    ],
    "callingCode":[
      "263"
    ],
    "capital":"Harare",
    "altSpellings":[
      "ZW",
      "Republic of Zimbabwe"
    ],
    "region":"Africa",
    "subregion":"Eastern Africa",
    "languages":{
      "bwg":"Chibarwe",
      "eng":"English",
      "kck":"Kalanga",
      "khi":"Khoisan",
      "ndc":"Ndau",
      "nde":"Northern Ndebele",
      "nya":"Chewa",
      "sna":"Shona",
      "sot":"Sotho",
      "toi":"Tonga",
      "tsn":"Tswana",
      "tso":"Tsonga",
      "ven":"Venda",
      "xho":"Xhosa",
      "zib":"Zimbabwean Sign Language"
    },
    "latlng":[
      -20,
      30
    ],
    "demonym":"Zimbabwean",
    "landlocked":true,
    "borders":[
      "BWA",
      "MOZ",
      "ZAF",
      "ZMB"
    ],
    "area":390757
  }
];

Meteor.methods({
  'fillInitialCountriesData'() {
    if (Countries.find().count() === 0) {
      countries.forEach((country) => Countries.insert(country));
    }
  },
});