/**
 * Created by Thanat on 14/7/2559.
 */

import { Transponders } from './transponders.js';
import { check } from 'meteor/check'

export const forwardTransponders = [{
  "name": "100",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.23,
  "downlinkPolarization": "V",
  "twta": "3310L1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.89,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "100-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.79 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.77
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.89 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "101",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310L1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.89,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "101-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 21.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.35 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.77
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.95 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "102",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.87,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310N1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "102-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.45 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.26
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.42 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "103",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.63,
  "downlinkPolarization": "V",
  "twta": "3310L1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.89,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "103-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.46 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.77
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.74 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "104",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.33,
  "downlinkPolarization": "V",
  "twta": "3310L2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.89,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "104-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.35 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.77
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.64 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "105",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.73,
  "downlinkPolarization": "V",
  "twta": "3310L2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.89,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "105-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.52 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.77
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.44 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "106",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.87,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.93,
  "downlinkPolarization": "V",
  "twta": "3310N1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "106-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.26
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.4 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "107",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.87,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.43,
  "downlinkPolarization": "V",
  "twta": "3310N2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "107-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.99 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.26
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.65 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "108",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.93,
  "downlinkPolarization": "V",
  "twta": "3310L2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.89,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "108-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.47 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.77
  }],
  "definedContours": [{ "location": "50%", "value": -2 }, { "location": "eoc", "value": -4.17 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "109",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.87,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.03,
  "downlinkPolarization": "V",
  "twta": "3310N1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "109-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.85 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.26
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.46 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "110",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.87,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.73,
  "downlinkPolarization": "V",
  "twta": "3310N2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "110-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.49 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.26
  }],
  "definedContours": [{ "location": "50%", "value": -1.9 }, { "location": "eoc", "value": -3.98 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "111",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.87,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310N2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "1H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "111-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.1 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.26
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.35 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "112",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.08,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.19,
  "downlinkPolarization": "V",
  "twta": "32900",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.66,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "2V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "112-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.45 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.39
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.33 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "113",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.08,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310P1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.66,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "2V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "113-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.39
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.66 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "114",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.08,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310P1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.66,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "2V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "114-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.66 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.39
  }],
  "definedContours": [{ "location": "50%", "value": -1.8 }, { "location": "eoc", "value": -3.85 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "115",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.08,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.93,
  "downlinkPolarization": "V",
  "twta": "3310P1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.66,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["India"],
  "defaultGatewayName": "2V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "115-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 23.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.2 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.39
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.32 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "201",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 17.82,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310P2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -65.75,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Myanmar"],
  "defaultGatewayName": "17H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "201-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.46 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 26.3
  }],
  "definedContours": [{ "location": "50%", "value": -1.9 }, { "location": "eoc", "value": -3.98 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "202",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 17.82,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310P2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -65.75,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Myanmar"],
  "defaultGatewayName": "17H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "202-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.62 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 26.3
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.62 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "203",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.3,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.93,
  "downlinkPolarization": "V",
  "twta": "3310R2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.27,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "3H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.9, "intermod": 20 }],
  "type": "spot",
  "beam": "203-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.98 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.69
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.51 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "204",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.3,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.53,
  "downlinkPolarization": "V",
  "twta": "3310R2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.27,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "3H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.9, "intermod": 20 }],
  "type": "spot",
  "beam": "204-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.83 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.69
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.43 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "205",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.33,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.13,
  "downlinkPolarization": "V",
  "twta": "3310T1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.07,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Vietnam"],
  "defaultGatewayName": "15H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "205-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.49 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.13
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.38 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "206",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.33,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.63,
  "downlinkPolarization": "V",
  "twta": "3310T1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.07,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Vietnam"],
  "defaultGatewayName": "15H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "206-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 16.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.69 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.13
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.75 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "207",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.3,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.13,
  "downlinkPolarization": "V",
  "twta": "3310R2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.27,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "3H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.9, "intermod": 20 }],
  "type": "spot",
  "beam": "207-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.8
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18.14 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.69
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.5 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "208",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.96,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310P2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -65.31,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Cambodia"],
  "defaultGatewayName": "18H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "208-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.51 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.87
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.81 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "209",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 22.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310T1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -59.74,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "3V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.9, "intermod": 20 }],
  "type": "spot",
  "beam": "209-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.22 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.14
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.87 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "210",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.33,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.49,
  "downlinkPolarization": "V",
  "twta": "3290G1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.07,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["Vietnam"],
  "defaultGatewayName": "15H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "210-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.45 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.13
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.6 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "211",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.33,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.69,
  "downlinkPolarization": "V",
  "twta": "3290G1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.07,
  "defaultEirpUpPerTransponder": 72.74273412,
  "countriesName": ["Vietnam"],
  "defaultGatewayName": "15H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "211-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.13
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.53 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "213",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.22,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.03,
  "downlinkPolarization": "V",
  "twta": "3310R1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.29,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "213-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.73 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.9 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "214",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.22,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.23,
  "downlinkPolarization": "V",
  "twta": "3310R1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.29,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "214-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.47 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.47 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "215",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.22,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.53,
  "downlinkPolarization": "V",
  "twta": "3310T2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.29,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "215-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 17.2 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.29 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "216",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.22,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.93,
  "downlinkPolarization": "V",
  "twta": "3310T2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.29,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "216-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18.73 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.64 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "217",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.22,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.53,
  "downlinkPolarization": "V",
  "twta": "3310T2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.29,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "217-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.78 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.35 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "301",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.68,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.53,
  "downlinkPolarization": "V",
  "twta": "3310A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.7,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "301-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.91 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 24.19
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.52 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "302",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.68,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.43,
  "downlinkPolarization": "V",
  "twta": "3310A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.7,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "302-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.29 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 24.19
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.91 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "303",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.68,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.53,
  "downlinkPolarization": "V",
  "twta": "3310A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.7,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "303-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.38 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 24.19
  }],
  "definedContours": [{ "location": "50%", "value": -2 }, { "location": "eoc", "value": -4.2 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "304",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.3,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.73,
  "downlinkPolarization": "V",
  "twta": "3310A2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.64,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "304-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 16.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.45 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.16
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.45 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "305",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.3,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.73,
  "downlinkPolarization": "V",
  "twta": "3310A2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.64,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "305-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 15
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 10.69 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.16
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.67 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "306",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.68,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310B1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.7,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "306-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 15.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.33 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 24.19
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.69 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "307",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.68,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.33,
  "downlinkPolarization": "V",
  "twta": "3310B1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.7,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "307-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 15.8
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.38 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 24.19
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.7 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "308",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.3,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.33,
  "downlinkPolarization": "V",
  "twta": "3310A2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.64,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "308-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 14.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.09 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.16
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.47 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "309",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.75,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.93,
  "downlinkPolarization": "V",
  "twta": "3310D2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.81,
  "defaultEirpUpPerTransponder": 70.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "309-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.8
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.94 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.33
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.52 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "310",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.68,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.03,
  "downlinkPolarization": "V",
  "twta": "3310C1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.4,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "310-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 16.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.86 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.93
  }],
  "definedContours": [{ "location": "50%", "value": -2.6 }, { "location": "eoc", "value": -5.15 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "311",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.68,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310B1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -63.7,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "4H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "311-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 14.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.32 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 24.19
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.31 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "312",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.73,
  "downlinkPolarization": "V",
  "twta": "3310B2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.53,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "312-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 15.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.58 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.55 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "313",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.03,
  "downlinkPolarization": "V",
  "twta": "3310B2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.53,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "313-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 13.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 10.52 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.95 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "314",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.75,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.23,
  "downlinkPolarization": "V",
  "twta": "3310D2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.81,
  "defaultEirpUpPerTransponder": 70.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "314-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.4 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.33
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.71 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "315",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.75,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.93,
  "downlinkPolarization": "V",
  "twta": "3310D2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.81,
  "defaultEirpUpPerTransponder": 70.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "315-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 15.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.45 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.33
  }],
  "definedContours": [{ "location": "50%", "value": -2 }, { "location": "eoc", "value": -4.12 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "316",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.68,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310C1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.4,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "316-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 14.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 10.96 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.93
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.94 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "317",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.53,
  "downlinkPolarization": "V",
  "twta": "3310D1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.53,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "317-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 14.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 10.86 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.97 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "318",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310D1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.53,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "318-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 16.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.92 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.36 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "319",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.68,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.39,
  "downlinkPolarization": "V",
  "twta": "3290A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.4,
  "defaultEirpUpPerTransponder": 70.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "319-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 14.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 10.99 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.93
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.43 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "320",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.68,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.53,
  "downlinkPolarization": "V",
  "twta": "3310C1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.4,
  "defaultEirpUpPerTransponder": 71.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "320-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 16.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.66 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.93
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.4 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "321",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.13,
  "downlinkPolarization": "V",
  "twta": "3310D1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.53,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "321-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.36 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.48 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "322",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.4,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.39,
  "downlinkPolarization": "V",
  "twta": "32900",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.24,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Taiwan"],
  "defaultGatewayName": "14H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "322-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.73 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.59
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -5.11 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "323",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.68,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.39,
  "downlinkPolarization": "V",
  "twta": "3290A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.4,
  "defaultEirpUpPerTransponder": 70.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "5V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "323-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 17.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.15 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.93
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.75 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "328",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 54.16,
  "downlinkPolarization": "H",
  "twta": "3300A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -59.88,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "shape",
  "beam": "328-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 28
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 25.55 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -1.3 }, { "location": "eoc", "value": -2.66 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "401",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.419,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 20.04,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.79,
  "downlinkPolarization": "V",
  "twta": "3310F1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.69,
  "defaultEirpUpPerTransponder": 75.60406609,
  "countriesName": ["Japan"],
  "defaultGatewayName": "7V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.5, "intermod": 20 }],
  "type": "spot",
  "beam": "401-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 21.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.51 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.83
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.63 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "402",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.631,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 20.04,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.69,
  "downlinkPolarization": "V",
  "twta": "331000",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.69,
  "defaultEirpUpPerTransponder": 76.60406609,
  "countriesName": ["Japan"],
  "defaultGatewayName": "7V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.5, "intermod": 20 }],
  "type": "spot",
  "beam": "402-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.09 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.83
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.31 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "403",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.919,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 20.04,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 63,
  "downlinkPolarization": "V",
  "twta": "3290C1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.69,
  "defaultEirpUpPerTransponder": 76.60406609,
  "countriesName": ["Japan"],
  "defaultGatewayName": "7V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "403-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.3 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.83
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.53 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "404",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.131,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 20.04,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.99,
  "downlinkPolarization": "V",
  "twta": "3310F1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.69,
  "defaultEirpUpPerTransponder": 75.60406609,
  "countriesName": ["Japan"],
  "defaultGatewayName": "7V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.5, "intermod": 20 }],
  "type": "spot",
  "beam": "404-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.27 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.83
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.24 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "405",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.919,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 20.4,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 61.69,
  "downlinkPolarization": "V",
  "twta": "331000",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.62,
  "defaultEirpUpPerTransponder": 75.60406609,
  "countriesName": ["South Korea"],
  "defaultGatewayName": "11H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.5, "intermod": 20 }],
  "type": "spot",
  "beam": "405-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 14.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.73 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.57
  }],
  "definedContours": [{ "location": "50%", "value": -2.7 }, { "location": "eoc", "value": -5.01 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "406",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 20.8,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.33,
  "downlinkPolarization": "V",
  "twta": "3310B2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.53,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["China"],
  "defaultGatewayName": "10V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "406-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.01 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.7
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.77 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "501",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.919,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 18.54,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.63,
  "downlinkPolarization": "V",
  "twta": "3310F2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.41,
  "defaultEirpUpPerTransponder": 70.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "501-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 31.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 25.96 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 28.34
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.99 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "502",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.419,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 18.84,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.82,
  "downlinkPolarization": "V",
  "twta": "3310G1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.31,
  "defaultEirpUpPerTransponder": 69.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "502-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 28.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 23.59 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.63
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.44 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "503",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.631,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 18.54,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.18,
  "downlinkPolarization": "V",
  "twta": "3310F2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.41,
  "defaultEirpUpPerTransponder": 70.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "503-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 24.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.37 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 28.34
  }],
  "definedContours": [{ "location": "50%", "value": -1.9 }, { "location": "eoc", "value": -3.99 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "504",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.919,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 18.84,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 61.16,
  "downlinkPolarization": "V",
  "twta": "3310G2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.31,
  "defaultEirpUpPerTransponder": 70.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "504-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 24.6
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.13 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.63
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.52 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "505",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.131,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 18.84,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 61.35,
  "downlinkPolarization": "V",
  "twta": "3310G1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.31,
  "defaultEirpUpPerTransponder": 69.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "505-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.4 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.63
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.32 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "506",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.419,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 19.36,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.58,
  "downlinkPolarization": "V",
  "twta": "3310J1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.74,
  "defaultEirpUpPerTransponder": 71.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "9V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "506-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 21.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 17.23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.62
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.95 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "507",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.631,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 18.84,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 61.59,
  "downlinkPolarization": "V",
  "twta": "3310G2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.31,
  "defaultEirpUpPerTransponder": 70.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "507-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.84 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 31.63
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.45 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "508",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.919,
  "downlinkCenterFrequency": 12.619,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 19.36,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.53,
  "downlinkPolarization": "V",
  "twta": "3310J2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.74,
  "defaultEirpUpPerTransponder": 72.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "9V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "508-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 25.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.62
  }],
  "definedContours": [{ "location": "50%", "value": -2.4 }, { "location": "eoc", "value": -4.92 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "509",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.131,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 19.36,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.34,
  "downlinkPolarization": "V",
  "twta": "3310J1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.74,
  "defaultEirpUpPerTransponder": 71.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "9V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "509-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.6 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.62
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.27 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "510",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.631,
  "downlinkCenterFrequency": 12.331,
  "bandwidth": 262.5,
  "path": "forward",
  "gtPeak": 19.36,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.5,
  "downlinkPolarization": "V",
  "twta": "3310J2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.74,
  "defaultEirpUpPerTransponder": 72.60406609,
  "countriesName": ["Australia"],
  "defaultGatewayName": "9V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "510-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 15.4 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.62
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.28 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "514",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 18.5,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 54.13,
  "downlinkPolarization": "V",
  "twta": "3320A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.66,
  "defaultEirpUpPerTransponder": 74.8921731,
  "countriesName": ["Australia"],
  "defaultGatewayName": "8V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "shape",
  "beam": "514-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 28
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 21.47 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 28.34
  }],
  "definedContours": [{ "location": "50%", "value": -1.2 }, { "location": "eoc", "value": -2.53 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "601",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.03,
  "downlinkPolarization": "V",
  "twta": "3310V1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.16,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "601-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.72 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.61 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "602",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 58.83,
  "downlinkPolarization": "V",
  "twta": "3310V1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.16,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "602-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 21.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18.53 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.64 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "603",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 58.43,
  "downlinkPolarization": "V",
  "twta": "3310V1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.16,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "603-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.8
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.17 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.33 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "604",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.775,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 58.23,
  "downlinkPolarization": "V",
  "twta": "3310V2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.16,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "604-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.76 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.45 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "605",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 58.53,
  "downlinkPolarization": "V",
  "twta": "3310V2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.16,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "605-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 25.2
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.61 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.5 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "606",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.586,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 57.53,
  "downlinkPolarization": "V",
  "twta": "3310K1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.16,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "606-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 24.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18.77 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -2.2 }, { "location": "eoc", "value": -4.31 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "608",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 21.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 50.6,
  "downlinkPolarization": "H",
  "twta": "3310K1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -59.51,
  "defaultEirpUpPerTransponder": 79.3921731,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "6V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "shape",
  "beam": "608-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 28
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 26.24 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.03
  }],
  "definedContours": [{ "location": "50%", "value": -1 }, { "location": "eoc", "value": -1.8 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "701",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.97,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 63.3,
  "downlinkPolarization": "V",
  "twta": "3310K1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.53,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Philippines"],
  "defaultGatewayName": "12V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "701-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.9
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 17.79 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.69
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.91 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "702",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.97,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 62.29,
  "downlinkPolarization": "V",
  "twta": "3310K1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.53,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Philippines"],
  "defaultGatewayName": "12V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "702-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 24.8
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.52 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.69
  }],
  "definedContours": [{ "location": "50%", "value": -2.6 }, { "location": "eoc", "value": -4.93 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "703",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.086,
  "downlinkCenterFrequency": 12.286,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 21.97,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.19,
  "downlinkPolarization": "V",
  "twta": "3310K1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.53,
  "defaultEirpUpPerTransponder": 77.74273412,
  "countriesName": ["Philippines"],
  "defaultGatewayName": "12V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "spot",
  "beam": "703-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 26.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.99 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.69
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.22 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "112-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 19.08,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.9,
  "downlinkPolarization": "V",
  "twta": "3280K1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.01,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["India"],
  "defaultGatewayName": "2V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -6, "intermod": 26 }],
  "type": "augment",
  "beam": "112-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 28.59
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 26.84 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.39
  }],
  "definedContours": [{ "location": "50%", "value": -1.8 }, { "location": "eoc", "value": -3.58 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "207-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 22.72,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.6,
  "downlinkPolarization": "V",
  "twta": "3280H1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -58.09,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "3V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.4, "intermod": 20 }],
  "type": "augment",
  "beam": "207-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20.65
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18.79 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.14
  }],
  "definedContours": [{ "location": "50%", "value": -2 }, { "location": "eoc", "value": -3.86 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "212-13H",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.465,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.2,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 59.73,
  "downlinkPolarization": "V",
  "twta": "3310R1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -64.31,
  "defaultEirpUpPerTransponder": 73.74273412,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "212-13H-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 12.91 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -2.8 }, { "location": "eoc", "value": -5.41 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "212-3V",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 29.965,
  "downlinkCenterFrequency": 12.665,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 19.7,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.83,
  "downlinkPolarization": "V",
  "twta": "3310R1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -62.76,
  "defaultEirpUpPerTransponder": 74.74273412,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "3V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "212-3V-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 19.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.17 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.14
  }],
  "definedContours": [{ "location": "50%", "value": -2.8 }, { "location": "eoc", "value": -5.41 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "214-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 21.22,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.6,
  "downlinkPolarization": "V",
  "twta": "32800",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -59.64,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "13H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "augment",
  "beam": "214-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.08
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.41 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 33.28
  }],
  "definedContours": [{ "location": "50%", "value": -1.7 }, { "location": "eoc", "value": -3.32 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "304-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 19.3,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 60.6,
  "downlinkPolarization": "V",
  "twta": "3280A1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -61.99,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["China"],
  "defaultGatewayName": "4V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "augment",
  "beam": "304-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.56
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.82 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.16
  }],
  "definedContours": [{ "location": "50%", "value": -1.8 }, { "location": "eoc", "value": -3.5 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "320-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 21.68,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 61.3,
  "downlinkPolarization": "V",
  "twta": "3280C1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -59.75,
  "defaultEirpUpPerTransponder": 72.8921731,
  "countriesName": ["China"],
  "defaultGatewayName": "5V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "augment",
  "beam": "320-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 12.98
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 11.01 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.93
  }],
  "definedContours": [{ "location": "50%", "value": -2.1 }, { "location": "eoc", "value": -4.06 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "322-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 21.4,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.7,
  "downlinkPolarization": "V",
  "twta": "3280D1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -59.59,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["China"],
  "defaultGatewayName": "14H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "augment",
  "beam": "322-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 15.5
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 13.79 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.59
  }],
  "definedContours": [{ "location": "50%", "value": -1.7 }, { "location": "eoc", "value": -3.36 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "402-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 20.04,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.8,
  "downlinkPolarization": "V",
  "twta": "3280F1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.9,
  "defaultEirpUpPerTransponder": 75.8921731,
  "countriesName": ["Japan"],
  "defaultGatewayName": "7V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.5, "intermod": 20 }],
  "type": "augment",
  "beam": "402-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22.1
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.45 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29.83
  }],
  "definedContours": [{ "location": "50%", "value": -1.7 }, { "location": "eoc", "value": -3.36 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "405-2",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 28.475,
  "downlinkCenterFrequency": 11.075,
  "bandwidth": 250,
  "path": "forward",
  "gtPeak": 20.4,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.3,
  "downlinkPolarization": "V",
  "twta": "3280G1",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -60.83,
  "defaultEirpUpPerTransponder": 74.8921731,
  "countriesName": ["South Korea"],
  "defaultGatewayName": "11H",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "augment",
  "beam": "405-2-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 16.04
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 14.4 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 27.57
  }],
  "definedContours": [{ "location": "50%", "value": -1.6 }, { "location": "eoc", "value": -3.25 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "511",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.0855,
  "downlinkCenterFrequency": 12.2855,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.6,
  "downlinkPolarization": "V",
  "twta": "3310J2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -64.67,
  "defaultEirpUpPerTransponder": 73.24273412,
  "countriesName": ["New Zealand"],
  "defaultGatewayName": "16V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "511-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 23.4
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 17.46 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.1
  }],
  "definedContours": [{ "location": "50%", "value": -2.5 }, { "location": "eoc", "value": -4.72 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "512",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.275,
  "downlinkCenterFrequency": 12.475,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.82,
  "downlinkPolarization": "V",
  "twta": "3310J2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -64.67,
  "defaultEirpUpPerTransponder": 73.24273412,
  "countriesName": ["New Zealand"],
  "defaultGatewayName": "16V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "512-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 25.8
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 19.6 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.1
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.61 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "513",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 27.4645,
  "downlinkCenterFrequency": 12.6645,
  "bandwidth": 171,
  "path": "forward",
  "gtPeak": 18.01,
  "uplinkPolarization": "V",
  "saturatedEirpPeak": 59.95,
  "downlinkPolarization": "V",
  "twta": "3310J2",
  "dynamicRange": 25,
  "operatingMode": "alc",
  "saturatedFluxDensity": -64.67,
  "defaultEirpUpPerTransponder": 73.24273412,
  "countriesName": ["New Zealand"],
  "defaultGatewayName": "16V",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4, "intermod": 20 }],
  "type": "spot",
  "beam": "513-FWD",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 27.3
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20.83 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 30.1
  }],
  "definedContours": [{ "location": "50%", "value": -2.3 }, { "location": "eoc", "value": -4.76 }],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-100-102",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.56,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.31,
  "downlinkPolarization": "V",
  "twta": "3830A1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.49,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["India"],
  "defaultGatewayName": "BC-100-102",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-100-102",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 25
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-100-112",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.07,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.31,
  "downlinkPolarization": "V",
  "twta": "3830A1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.79,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["India"],
  "defaultGatewayName": "BC-100-112",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-100-112",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 25
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-200-205-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.08,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.85,
  "downlinkPolarization": "V",
  "twta": "3830C1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.54,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Vietnam"],
  "defaultGatewayName": "BC-200-205",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-200-205-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 24
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 22 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-200-207-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.37,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.81,
  "downlinkPolarization": "V",
  "twta": "3830C1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.94,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "BC-200-207",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.9, "intermod": 20 }],
  "beam": "BC-200-207-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-200-205-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.08,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.85,
  "downlinkPolarization": "V",
  "twta": "3830C1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.54,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Vietnam"],
  "defaultGatewayName": "BC-200-205",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-200-205-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 24
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 22 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-200-207-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.37,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.81,
  "downlinkPolarization": "V",
  "twta": "3830C1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.94,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Thailand"],
  "defaultGatewayName": "BC-200-207",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -4.9, "intermod": 20 }],
  "beam": "BC-200-207-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 22
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 20 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 29
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-304-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 12.37,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.04,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -68.4,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["China"],
  "defaultGatewayName": "BC-300-304",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-304-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.4
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-313-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 9.53,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.07,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -70.2,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["China"],
  "defaultGatewayName": "BC-300-313",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-313-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 26.6
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-320-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 12.79,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.04,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.9,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["China"],
  "defaultGatewayName": "BC-300-320",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-320-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 21.6
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-322-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 10.39,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.07,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -69.82,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Taiwan"],
  "defaultGatewayName": "BC-300-322",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-322-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 19.7
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-304-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 12.37,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.04,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -68.4,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["China"],
  "defaultGatewayName": "BC-300-304",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-304-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 25.4
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-313-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 9.53,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.07,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -70.2,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["China"],
  "defaultGatewayName": "BC-300-313",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-313-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 26.6
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-320-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 12.79,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.04,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.9,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["China"],
  "defaultGatewayName": "BC-300-320",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-320-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 21.6
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-300-322-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 10.39,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.07,
  "downlinkPolarization": "V",
  "twta": "38300",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -69.82,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Taiwan"],
  "defaultGatewayName": "BC-300-322",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-300-322-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 18.7
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 16.7 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 19.7
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-400-402",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 19.58,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.64,
  "downlinkPolarization": "V",
  "twta": "3820A",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.3,
  "defaultEirpUpPerTransponder": 69.92307297,
  "countriesName": ["Japan"],
  "defaultGatewayName": "BC-400-402",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-400-402",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 29
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 27 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 22.3
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-500-507",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 20.48,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.67,
  "downlinkPolarization": "V",
  "twta": "3830G1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -66.2,
  "defaultEirpUpPerTransponder": 69.92307297,
  "countriesName": ["Australia"],
  "defaultGatewayName": "BC-500-507",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-500-507",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 33
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 31 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 40
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-500-NZ",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 20.48,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.67,
  "downlinkPolarization": "V",
  "twta": "3830G1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -66.2,
  "defaultEirpUpPerTransponder": 69.92307297,
  "countriesName": ["New Zealand"],
  "defaultGatewayName": "BC-500-NZ",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-500-NZ",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 33
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 31 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 40
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-600-214-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.76,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.12,
  "downlinkPolarization": "V",
  "twta": "3830D1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.6,
  "defaultEirpUpPerTransponder": 75.42307297,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "BC-600-214",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-600-214-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 28
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-600-604-LB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 14.25,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.79,
  "downlinkPolarization": "V",
  "twta": "3830D1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -69.1,
  "defaultEirpUpPerTransponder": 75.42307297,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "BC-600-604",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -3, "intermod": 20 }],
  "beam": "BC-600-604-LB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.7
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-600-214-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 16.76,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 58.12,
  "downlinkPolarization": "V",
  "twta": "3830D1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -67.6,
  "defaultEirpUpPerTransponder": 75.42307297,
  "countriesName": ["Malaysia"],
  "defaultGatewayName": "BC-600-214",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-600-214-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 28
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-600-604-HB",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 14.25,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 57.79,
  "downlinkPolarization": "V",
  "twta": "3830D1",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -69.1,
  "defaultEirpUpPerTransponder": 75.42307297,
  "countriesName": ["Indonesia"],
  "defaultGatewayName": "BC-600-604",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -3, "intermod": 20 }],
  "beam": "BC-600-604-HB",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 20
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 18 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 32.7
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}, {
  "name": "BC-700-701",
  "satelliteName": "Thaicom 4",
  "uplinkCenterFrequency": 13.875,
  "downlinkCenterFrequency": 11.65,
  "bandwidth": 200,
  "path": "forward",
  "type": "broadcast",
  "gtPeak": 20.16,
  "uplinkPolarization": "H",
  "saturatedEirpPeak": 60.11,
  "downlinkPolarization": "V",
  "twta": "3820C",
  "dynamicRange": 20,
  "operatingMode": "alc",
  "saturatedFluxDensity": -66.8,
  "defaultEirpUpPerTransponder": 72.92307297,
  "countriesName": ["Philippines"],
  "defaultGatewayName": "BC-700-701",
  "defaultNumberOfCarriers": "multi",
  "backoffSettings": [{
    "numberOfCarriers": "single",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, {
    "numberOfCarriers": "two",
    "inputBackoff": 0,
    "outputBackoff": -3,
    "intermod": 17
  }, { "numberOfCarriers": "multi", "inputBackoff": 0, "outputBackoff": -5, "intermod": 20 }],
  "beam": "BC-700-701",
  "uplinkFrequencyBandName": "ka-band",
  "downlinkFrequencyBandName": "ku-band",
  "carrierOverInterferences": [{
    "type": "adj-cells",
    "path": "downlink",
    "location": "50%",
    "value": 25
  }, { "type": "adj-cells", "path": "downlink", "location": "eoc", "value": 23 }, {
    "type": "adj-cells",
    "path": "uplink",
    "location": "eoc",
    "value": 21.6
  }],
  "definedContours": [],
  "operatingModeOptions": ["alc", "fgm"]
}];

export const returnTransponders = [{"name":"100","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.7,"uplinkPolarization":"H","saturatedEirpPeak":57.2,"downlinkPolarization":"V","twta":"3610C1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.09542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"100-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":25.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.5},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-3.18},{"location":"eoc","value":-5.94}],"operatingModeOptions":["alc","fgm"]},{"name":"101","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":57.2,"downlinkPolarization":"V","twta":"3610C1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.04542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"101-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.46},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-3.29},{"location":"eoc","value":-6.49}],"operatingModeOptions":["alc","fgm"]},{"name":"102","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"H","twta":"3610B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.85542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"102-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.04},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.7}],"definedContours":[{"location":"50%","value":-2.89},{"location":"eoc","value":-5.9}],"operatingModeOptions":["alc","fgm"]},{"name":"103","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":57.2,"downlinkPolarization":"V","twta":"3610C1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.40542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"103-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.4},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-2.92},{"location":"eoc","value":-5.85}],"operatingModeOptions":["alc","fgm"]},{"name":"104","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":57.2,"downlinkPolarization":"V","twta":"3610C1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.44542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"104-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.74},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-2.8},{"location":"eoc","value":-5.89}],"operatingModeOptions":["alc","fgm"]},{"name":"105","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":57.2,"downlinkPolarization":"V","twta":"3610C1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.24542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"105-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.92},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-2.72},{"location":"eoc","value":-5.69}],"operatingModeOptions":["alc","fgm"]},{"name":"106","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":19.2,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"H","twta":"3610B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.38542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"106-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.8},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.7}],"definedContours":[{"location":"50%","value":-2.75},{"location":"eoc","value":-5.73}],"operatingModeOptions":["alc","fgm"]},{"name":"107","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"H","twta":"3610B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.31542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"107-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.37},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.7}],"definedContours":[{"location":"50%","value":-2.8},{"location":"eoc","value":-5.76}],"operatingModeOptions":["alc","fgm"]},{"name":"108","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.1,"uplinkPolarization":"H","saturatedEirpPeak":57.2,"downlinkPolarization":"V","twta":"3610C1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.27542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"108-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.82},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-2.62},{"location":"eoc","value":-5.52}],"operatingModeOptions":["alc","fgm"]},{"name":"109","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19.2,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"H","twta":"3610B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.45542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"109-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.46},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.7}],"definedContours":[{"location":"50%","value":-2.84},{"location":"eoc","value":-5.8}],"operatingModeOptions":["alc","fgm"]},{"name":"110","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.1,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"H","twta":"3610B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.29542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"110-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.07},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.7}],"definedContours":[{"location":"50%","value":-2.62},{"location":"eoc","value":-5.54}],"operatingModeOptions":["alc","fgm"]},{"name":"111","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.5,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"H","twta":"3610B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.72542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"1H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"111-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.57},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.7}],"definedContours":[{"location":"50%","value":-3.05},{"location":"eoc","value":-6.37}],"operatingModeOptions":["alc","fgm"]},{"name":"112","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.4,"uplinkPolarization":"H","saturatedEirpPeak":57.8,"downlinkPolarization":"V","twta":"3610L1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.76542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"2V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"112-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.67},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.82}],"definedContours":[{"location":"50%","value":-3.14},{"location":"eoc","value":-6.31}],"operatingModeOptions":["alc","fgm"]},{"name":"113","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19.4,"uplinkPolarization":"H","saturatedEirpPeak":57.8,"downlinkPolarization":"V","twta":"3610L1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.70542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"2V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"113-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.43},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.82}],"definedContours":[{"location":"50%","value":-2.97},{"location":"eoc","value":-6.25}],"operatingModeOptions":["alc","fgm"]},{"name":"114","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":57.8,"downlinkPolarization":"V","twta":"3610L1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.44542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"2V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"114-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":21.56},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.82}],"definedContours":[{"location":"50%","value":-2.54},{"location":"eoc","value":-5.49}],"operatingModeOptions":["alc","fgm"]},{"name":"115","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":57.8,"downlinkPolarization":"V","twta":"3610L1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.59542011,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"2V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"115-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.63},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.82}],"definedContours":[{"location":"50%","value":-2.75},{"location":"eoc","value":-5.74}],"operatingModeOptions":["alc","fgm"]},{"name":"201","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":55.4,"downlinkPolarization":"H","twta":"3610J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.48542011,"designedAlcDeepin":9,"countriesName":["Myanmar"],"defaultGatewayName":"17H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"201-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.41},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-2.49},{"location":"eoc","value":-5.43}],"operatingModeOptions":["alc","fgm"]},{"name":"202","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":55.4,"downlinkPolarization":"H","twta":"3610J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.81542011,"designedAlcDeepin":9,"countriesName":["Myanmar"],"defaultGatewayName":"17H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"202-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.66},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-2.87},{"location":"eoc","value":-5.96}],"operatingModeOptions":["alc","fgm"]},{"name":"203","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19.2,"uplinkPolarization":"H","saturatedEirpPeak":58.4,"downlinkPolarization":"H","twta":"3610J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.65542011,"designedAlcDeepin":9,"countriesName":["Thailand"],"defaultGatewayName":"3H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"203-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.4},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.64}],"definedContours":[{"location":"50%","value":-2.85},{"location":"eoc","value":-6}],"operatingModeOptions":["alc","fgm"]},{"name":"204","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":58.4,"downlinkPolarization":"H","twta":"3610J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.90542011,"designedAlcDeepin":9,"countriesName":["Thailand"],"defaultGatewayName":"3H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"204-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.25},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.64}],"definedContours":[{"location":"50%","value":-2.86},{"location":"eoc","value":-5.95}],"operatingModeOptions":["alc","fgm"]},{"name":"205","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":61,"downlinkPolarization":"H","twta":"3610K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.03542011,"designedAlcDeepin":9,"countriesName":["Vietnam"],"defaultGatewayName":"15H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"205-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":15.53},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.46}],"definedContours":[{"location":"50%","value":-2.65},{"location":"eoc","value":-5.48}],"operatingModeOptions":["alc","fgm"]},{"name":"206","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.6,"uplinkPolarization":"H","saturatedEirpPeak":61,"downlinkPolarization":"H","twta":"3610K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-70.84542011,"designedAlcDeepin":9,"countriesName":["Vietnam"],"defaultGatewayName":"15H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"206-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":17.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":14.54},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.46}],"definedContours":[{"location":"50%","value":-2.66},{"location":"eoc","value":-5.59}],"operatingModeOptions":["alc","fgm"]},{"name":"207","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":62,"downlinkPolarization":"V","twta":"3610H1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.25542011,"designedAlcDeepin":9,"countriesName":["Thailand"],"defaultGatewayName":"3H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"207-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.25},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.69}],"definedContours":[{"location":"50%","value":-3.5},{"location":"eoc","value":-6.7}],"operatingModeOptions":["alc","fgm"]},{"name":"208","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":57.4,"downlinkPolarization":"H","twta":"3610J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.84542011,"designedAlcDeepin":9,"countriesName":["Cambodia"],"defaultGatewayName":"18H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"208-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":15.51},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.77}],"definedContours":[{"location":"50%","value":-2.91},{"location":"eoc","value":-5.89}],"operatingModeOptions":["alc","fgm"]},{"name":"209","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.9,"uplinkPolarization":"H","saturatedEirpPeak":62,"downlinkPolarization":"V","twta":"3610H1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.40542011,"designedAlcDeepin":9,"countriesName":["Thailand"],"defaultGatewayName":"3V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"209-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.3},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.3}],"definedContours":[{"location":"50%","value":-3.1},{"location":"eoc","value":-6.45}],"operatingModeOptions":["alc","fgm"]},{"name":"210","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.5,"uplinkPolarization":"H","saturatedEirpPeak":61,"downlinkPolarization":"H","twta":"3610K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.83542011,"designedAlcDeepin":9,"countriesName":["Vietnam"],"defaultGatewayName":"15H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"210-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.6},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.39},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.46}],"definedContours":[{"location":"50%","value":-2.76},{"location":"eoc","value":-5.48}],"operatingModeOptions":["alc","fgm"]},{"name":"211","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.7,"uplinkPolarization":"H","saturatedEirpPeak":61,"downlinkPolarization":"H","twta":"3610K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.91542011,"designedAlcDeepin":9,"countriesName":["Vietnam"],"defaultGatewayName":"15H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"211-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.59},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.46}],"definedContours":[{"location":"50%","value":-2.86},{"location":"eoc","value":-5.76}],"operatingModeOptions":["alc","fgm"]},{"name":"213","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.6,"uplinkPolarization":"H","saturatedEirpPeak":61.6,"downlinkPolarization":"H","twta":"3610T1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.86542011,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"213-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.6},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.91},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-3.28},{"location":"eoc","value":-6.61}],"operatingModeOptions":["alc","fgm"]},{"name":"214","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.5,"uplinkPolarization":"H","saturatedEirpPeak":61.6,"downlinkPolarization":"H","twta":"3610T1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.10542011,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"214-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.15},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-3.52},{"location":"eoc","value":-6.75}],"operatingModeOptions":["alc","fgm"]},{"name":"215","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.1,"uplinkPolarization":"H","saturatedEirpPeak":62.8,"downlinkPolarization":"H","twta":"3610R1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.89542011,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"215-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":21.33},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-2.56},{"location":"eoc","value":-5.14}],"operatingModeOptions":["alc","fgm"]},{"name":"216","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":18.3,"uplinkPolarization":"H","saturatedEirpPeak":62.8,"downlinkPolarization":"H","twta":"3610R1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.94542011,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"216-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.87},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-2.75},{"location":"eoc","value":-5.39}],"operatingModeOptions":["alc","fgm"]},{"name":"217","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18,"uplinkPolarization":"H","saturatedEirpPeak":62.8,"downlinkPolarization":"H","twta":"3610R1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.70542011,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"217-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.39},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-3.04},{"location":"eoc","value":-5.85}],"operatingModeOptions":["alc","fgm"]},{"name":"301","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":18.7,"uplinkPolarization":"H","saturatedEirpPeak":55.6,"downlinkPolarization":"H","twta":"3620K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.50542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"301-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.48},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.56}],"definedContours":[{"location":"50%","value":-3.12},{"location":"eoc","value":-6.35}],"operatingModeOptions":["alc","fgm"]},{"name":"302","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":18.6,"uplinkPolarization":"H","saturatedEirpPeak":55.6,"downlinkPolarization":"H","twta":"3620K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-73.00542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"302-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.4},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.56}],"definedContours":[{"location":"50%","value":-3.44},{"location":"eoc","value":-6.75}],"operatingModeOptions":["alc","fgm"]},{"name":"303","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":55.6,"downlinkPolarization":"H","twta":"3620K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.64542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"303-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.55},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.56}],"definedContours":[{"location":"50%","value":-2.66},{"location":"eoc","value":-5.59}],"operatingModeOptions":["alc","fgm"]},{"name":"304","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.7,"uplinkPolarization":"H","saturatedEirpPeak":58.3,"downlinkPolarization":"V","twta":"3620J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.31542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"304-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.31},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.62}],"definedContours":[{"location":"50%","value":-3.03},{"location":"eoc","value":-6.16}],"operatingModeOptions":["alc","fgm"]},{"name":"305","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":58.3,"downlinkPolarization":"V","twta":"3620J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.92542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"305-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":15.7},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.62}],"definedContours":[{"location":"50%","value":-3.1},{"location":"eoc","value":-6.37}],"operatingModeOptions":["alc","fgm"]},{"name":"306","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":55.6,"downlinkPolarization":"H","twta":"3620K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.89542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"306-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.25},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.56}],"definedContours":[{"location":"50%","value":-2.81},{"location":"eoc","value":-5.84}],"operatingModeOptions":["alc","fgm"]},{"name":"307","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19.1,"uplinkPolarization":"H","saturatedEirpPeak":55.6,"downlinkPolarization":"H","twta":"3620K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.80542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"307-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.04},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.56}],"definedContours":[{"location":"50%","value":-2.89},{"location":"eoc","value":-6.05}],"operatingModeOptions":["alc","fgm"]},{"name":"308","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":58.3,"downlinkPolarization":"V","twta":"3620J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.37542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"308-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.7},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.62}],"definedContours":[{"location":"50%","value":-2.82},{"location":"eoc","value":-5.82}],"operatingModeOptions":["alc","fgm"]},{"name":"309","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.6,"uplinkPolarization":"H","saturatedEirpPeak":58.7,"downlinkPolarization":"H","twta":"3610F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.99542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"309-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.01},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.1}],"definedContours":[{"location":"50%","value":-2.78},{"location":"eoc","value":-5.74}],"operatingModeOptions":["alc","fgm"]},{"name":"310","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.7,"uplinkPolarization":"H","saturatedEirpPeak":57.4,"downlinkPolarization":"V","twta":"3620A1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.37542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"310-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.58},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.72}],"definedContours":[{"location":"50%","value":-3.07},{"location":"eoc","value":-6.22}],"operatingModeOptions":["alc","fgm"]},{"name":"311","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.7,"uplinkPolarization":"H","saturatedEirpPeak":55.6,"downlinkPolarization":"H","twta":"3620K1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.72542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"311-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":19.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.82},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.56}],"definedContours":[{"location":"50%","value":-2.69},{"location":"eoc","value":-5.57}],"operatingModeOptions":["alc","fgm"]},{"name":"312","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.6,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.04542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"312-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":19.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.08},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-2.74},{"location":"eoc","value":-5.79}],"operatingModeOptions":["alc","fgm"]},{"name":"313","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19.2,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.91542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"313-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":14.93},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-3.02},{"location":"eoc","value":-6.26}],"operatingModeOptions":["alc","fgm"]},{"name":"314","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":58.7,"downlinkPolarization":"H","twta":"3610F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.35542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"314-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.24},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.1}],"definedContours":[{"location":"50%","value":-3.07},{"location":"eoc","value":-6.3}],"operatingModeOptions":["alc","fgm"]},{"name":"315","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.7,"uplinkPolarization":"H","saturatedEirpPeak":58.7,"downlinkPolarization":"H","twta":"3610F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.45542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"315-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.35},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.1}],"definedContours":[{"location":"50%","value":-2.48},{"location":"eoc","value":-5.3}],"operatingModeOptions":["alc","fgm"]},{"name":"316","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.7,"uplinkPolarization":"H","saturatedEirpPeak":57.4,"downlinkPolarization":"V","twta":"3620A1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.49542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"316-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.6},{"type":"adj-cells","path":"uplink","location":"eoc","value":15.47},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.72}],"definedContours":[{"location":"50%","value":-3.09},{"location":"eoc","value":-6.34}],"operatingModeOptions":["alc","fgm"]},{"name":"317","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.5,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.12542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"317-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":15.69},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-3.29},{"location":"eoc","value":-6.77}],"operatingModeOptions":["alc","fgm"]},{"name":"318","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.38542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"318-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.29},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-2.78},{"location":"eoc","value":-5.83}],"operatingModeOptions":["alc","fgm"]},{"name":"319","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":57.4,"downlinkPolarization":"V","twta":"3620A1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.61542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"319-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":19.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.12},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.72}],"definedContours":[{"location":"50%","value":-2.67},{"location":"eoc","value":-5.76}],"operatingModeOptions":["alc","fgm"]},{"name":"320","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":19.5,"uplinkPolarization":"H","saturatedEirpPeak":57.4,"downlinkPolarization":"V","twta":"3620A1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.15542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"320-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.52},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.72}],"definedContours":[{"location":"50%","value":-3},{"location":"eoc","value":-5.8}],"operatingModeOptions":["alc","fgm"]},{"name":"321","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.94542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"321-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":19.6},{"type":"adj-cells","path":"uplink","location":"eoc","value":16.57},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-3.05},{"location":"eoc","value":-6.39}],"operatingModeOptions":["alc","fgm"]},{"name":"322","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":19.6,"uplinkPolarization":"H","saturatedEirpPeak":59.6,"downlinkPolarization":"H","twta":"3610F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.58542011,"designedAlcDeepin":9,"countriesName":["Taiwan"],"defaultGatewayName":"14H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"322-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.09},{"type":"adj-cells","path":"downlink","location":"eoc","value":27.7}],"definedContours":[{"location":"50%","value":-3.12},{"location":"eoc","value":-6.33}],"operatingModeOptions":["alc","fgm"]},{"name":"323","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":57.4,"downlinkPolarization":"V","twta":"3620A1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.01542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"323-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.47},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.72}],"definedContours":[{"location":"50%","value":-2.99},{"location":"eoc","value":-6.06}],"operatingModeOptions":["alc","fgm"]},{"name":"328","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"shape","gtPeak":8,"uplinkPolarization":"V","saturatedEirpPeak":57.1,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.52725133,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"328-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":32},{"type":"adj-cells","path":"uplink","location":"eoc","value":28.98},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-1.7},{"location":"eoc","value":-3.3}],"operatingModeOptions":["alc","fgm"]},{"name":"401","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":18.5855,"bandwidth":179,"type":"spot","gtPeak":18,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.11146969,"designedAlcDeepin":9,"countriesName":["Japan"],"defaultGatewayName":"7V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"401-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.77},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-3.19},{"location":"eoc","value":-6.14}],"operatingModeOptions":["alc","fgm"]},{"name":"402","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":19.7895,"bandwidth":179,"type":"spot","gtPeak":18.6,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-70.30146969,"designedAlcDeepin":9,"countriesName":["Japan"],"defaultGatewayName":"7V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"402-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.86},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-3.12},{"location":"eoc","value":-5.93}],"operatingModeOptions":["alc","fgm"]},{"name":"403","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":19.9855,"bandwidth":179,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-70.10146969,"designedAlcDeepin":9,"countriesName":["Japan"],"defaultGatewayName":"7V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"403-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.49},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-3.1},{"location":"eoc","value":-6.13}],"operatingModeOptions":["alc","fgm"]},{"name":"404","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":18.3895,"bandwidth":179,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.93146969,"designedAlcDeepin":9,"countriesName":["Japan"],"defaultGatewayName":"7V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"404-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.42},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-2.88},{"location":"eoc","value":-5.76}],"operatingModeOptions":["alc","fgm"]},{"name":"405","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":19.9855,"bandwidth":179,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":60.2,"downlinkPolarization":"H","twta":"3610D1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-70.22146969,"designedAlcDeepin":9,"countriesName":["South Korea"],"defaultGatewayName":"11H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"405-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":18.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":14.99},{"type":"adj-cells","path":"downlink","location":"eoc","value":27.55}],"definedContours":[{"location":"50%","value":-3.44},{"location":"eoc","value":-6.55}],"operatingModeOptions":["alc","fgm"]},{"name":"406","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.3,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"36100","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.76542011,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"10V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"406-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.72},{"type":"adj-cells","path":"downlink","location":"eoc","value":20.1}],"definedContours":[{"location":"50%","value":-3.12},{"location":"eoc","value":-6.21}],"operatingModeOptions":["alc","fgm"]},{"name":"501","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":19.9855,"bandwidth":179,"type":"spot","gtPeak":18.1,"uplinkPolarization":"H","saturatedEirpPeak":55,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-70.98146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"501-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":33.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":25.28},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.03}],"definedContours":[{"location":"50%","value":-3.07},{"location":"eoc","value":-6.11}],"operatingModeOptions":["alc","fgm"]},{"name":"502","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":18.5855,"bandwidth":179,"type":"spot","gtPeak":18.2,"uplinkPolarization":"H","saturatedEirpPeak":55.9,"downlinkPolarization":"H","twta":"3620D1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-70.48146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"502-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":31.5},{"type":"adj-cells","path":"uplink","location":"eoc","value":26.27},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.49}],"definedContours":[{"location":"50%","value":-2.97},{"location":"eoc","value":-5.71}],"operatingModeOptions":["alc","fgm"]},{"name":"503","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":19.7895,"bandwidth":179,"type":"spot","gtPeak":18.7,"uplinkPolarization":"H","saturatedEirpPeak":55,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.91146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"503-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":25},{"type":"adj-cells","path":"uplink","location":"eoc","value":21.93},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.03}],"definedContours":[{"location":"50%","value":-2.72},{"location":"eoc","value":-5.64}],"operatingModeOptions":["alc","fgm"]},{"name":"504","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":19.9855,"bandwidth":179,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":55.9,"downlinkPolarization":"H","twta":"3620D1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.54146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"504-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":26.6},{"type":"adj-cells","path":"uplink","location":"eoc","value":23.42},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.49}],"definedContours":[{"location":"50%","value":-2.81},{"location":"eoc","value":-5.87}],"operatingModeOptions":["alc","fgm"]},{"name":"505","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":18.3895,"bandwidth":179,"type":"spot","gtPeak":19.1,"uplinkPolarization":"H","saturatedEirpPeak":55.9,"downlinkPolarization":"H","twta":"3620D1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.66146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"505-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":21.56},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.49}],"definedContours":[{"location":"50%","value":-2.78},{"location":"eoc","value":-5.79}],"operatingModeOptions":["alc","fgm"]},{"name":"506","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":18.5855,"bandwidth":179,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.78146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"9V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"506-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":21.3},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.98}],"definedContours":[{"location":"50%","value":-2.73},{"location":"eoc","value":-5.81}],"operatingModeOptions":["alc","fgm"]},{"name":"507","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":19.7895,"bandwidth":179,"type":"spot","gtPeak":19.9,"uplinkPolarization":"H","saturatedEirpPeak":55.9,"downlinkPolarization":"H","twta":"3620D1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-68.75146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"507-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.86},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.49}],"definedContours":[{"location":"50%","value":-2.7},{"location":"eoc","value":-5.68}],"operatingModeOptions":["alc","fgm"]},{"name":"508","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.2855,"downlinkCenterFrequency":19.9855,"bandwidth":179,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.62146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"9V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"508-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":27.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":23.37},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.98}],"definedContours":[{"location":"50%","value":-2.84},{"location":"eoc","value":-5.95}],"operatingModeOptions":["alc","fgm"]},{"name":"509","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":18.3895,"bandwidth":179,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.46146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"9V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"509-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.61},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.98}],"definedContours":[{"location":"50%","value":-2.6},{"location":"eoc","value":-5.49}],"operatingModeOptions":["alc","fgm"]},{"name":"510","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.0895,"downlinkCenterFrequency":19.7895,"bandwidth":179,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":56.3,"downlinkPolarization":"V","twta":"3620F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-69.51146969,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"9V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"510-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.17},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.98}],"definedContours":[{"location":"50%","value":-2.82},{"location":"eoc","value":-5.84}],"operatingModeOptions":["alc","fgm"]},{"name":"514","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"shape","gtPeak":4.9,"uplinkPolarization":"H","saturatedEirpPeak":52.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-74.58725133,"designedAlcDeepin":9,"countriesName":["Australia"],"defaultGatewayName":"8V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"514-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":20},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.64},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.03}],"definedContours":[{"location":"50%","value":-1.8},{"location":"eoc","value":-3.94}],"operatingModeOptions":["alc","fgm"]},{"name":"601","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":19.1,"uplinkPolarization":"H","saturatedEirpPeak":62.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.90542011,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"601-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":18.73},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-3.14},{"location":"eoc","value":-6.15}],"operatingModeOptions":["alc","fgm"]},{"name":"602","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":19,"uplinkPolarization":"H","saturatedEirpPeak":62.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.34542011,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"602-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.4},{"type":"adj-cells","path":"uplink","location":"eoc","value":20.08},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-2.72},{"location":"eoc","value":-5.49}],"operatingModeOptions":["alc","fgm"]},{"name":"603","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.3,"uplinkPolarization":"H","saturatedEirpPeak":62.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.21542011,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"603-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.1},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.33},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-2.91},{"location":"eoc","value":-5.66}],"operatingModeOptions":["alc","fgm"]},{"name":"604","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":19.8875,"bandwidth":116,"type":"spot","gtPeak":18,"uplinkPolarization":"H","saturatedEirpPeak":61.7,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.53542011,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"604-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.85},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-2.94},{"location":"eoc","value":-5.68}],"operatingModeOptions":["alc","fgm"]},{"name":"605","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":17.9,"uplinkPolarization":"H","saturatedEirpPeak":61.7,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.39542011,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"605-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":24.9},{"type":"adj-cells","path":"uplink","location":"eoc","value":21.33},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-2.86},{"location":"eoc","value":-5.44}],"operatingModeOptions":["alc","fgm"]},{"name":"606","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":19.758,"bandwidth":116,"type":"spot","gtPeak":17.4,"uplinkPolarization":"H","saturatedEirpPeak":61.7,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.96542011,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"606-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.96},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-2.91},{"location":"eoc","value":-5.51}],"operatingModeOptions":["alc","fgm"]},{"name":"608","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"shape","gtPeak":6.4,"uplinkPolarization":"V","saturatedEirpPeak":61.5,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-74.02725133,"designedAlcDeepin":9,"countriesName":["Indonesia"],"defaultGatewayName":"6V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"608-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":22},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.97},{"type":"adj-cells","path":"downlink","location":"eoc","value":29.04}],"definedContours":[{"location":"50%","value":-2.2},{"location":"eoc","value":-4.4}],"operatingModeOptions":["alc","fgm"]},{"name":"701","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":19.3,"uplinkPolarization":"H","saturatedEirpPeak":59.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.74542011,"designedAlcDeepin":9,"countriesName":["Philippines"],"defaultGatewayName":"12V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"701-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":23.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":19.86},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.14}],"definedContours":[{"location":"50%","value":-3.22},{"location":"eoc","value":-6.19}],"operatingModeOptions":["alc","fgm"]},{"name":"702","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":59.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.37542011,"designedAlcDeepin":9,"countriesName":["Philippines"],"defaultGatewayName":"12V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"702-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":26.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":22.4},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.14}],"definedContours":[{"location":"50%","value":-3.26},{"location":"eoc","value":-6.32}],"operatingModeOptions":["alc","fgm"]},{"name":"703","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.1,"uplinkPolarization":"H","saturatedEirpPeak":59.9,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.34542011,"designedAlcDeepin":9,"countriesName":["Philippines"],"defaultGatewayName":"12V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"703-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":29.2},{"type":"adj-cells","path":"uplink","location":"eoc","value":25.55},{"type":"adj-cells","path":"downlink","location":"eoc","value":28.14}],"definedContours":[{"location":"50%","value":-2.8},{"location":"eoc","value":-5.59}],"operatingModeOptions":["alc","fgm"]},{"name":"112-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.7,"uplinkPolarization":"H","saturatedEirpPeak":57.7,"downlinkPolarization":"V","twta":"3610L1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.47725133,"designedAlcDeepin":9,"countriesName":["India"],"defaultGatewayName":"2V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"112-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":30.31},{"type":"adj-cells","path":"uplink","location":"eoc","value":27.14},{"type":"adj-cells","path":"downlink","location":"eoc","value":24.82}],"definedContours":[{"location":"50%","value":-2.98},{"location":"eoc","value":-6.15}],"operatingModeOptions":["alc","fgm"]},{"name":"207-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.7,"uplinkPolarization":"H","saturatedEirpPeak":61.8,"downlinkPolarization":"V","twta":"3610H1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.14725133,"designedAlcDeepin":9,"countriesName":["Thailand"],"defaultGatewayName":"3V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"207-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":27.68},{"type":"adj-cells","path":"uplink","location":"eoc","value":24.39},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.3}],"definedContours":[{"location":"50%","value":-3.53},{"location":"eoc","value":-6.82}],"operatingModeOptions":["alc","fgm"]},{"name":"212-13H","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":20.1,"uplinkPolarization":"H","saturatedEirpPeak":61.6,"downlinkPolarization":"H","twta":"3610T1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.22542011,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"212-13H-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.89},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-3.74},{"location":"eoc","value":-7.47}],"operatingModeOptions":["alc","fgm"]},{"name":"212-3V","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":20.017,"bandwidth":116,"type":"spot","gtPeak":20.1,"uplinkPolarization":"H","saturatedEirpPeak":62,"downlinkPolarization":"V","twta":"3610H1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.22542011,"designedAlcDeepin":9,"countriesName":["Thailand"],"defaultGatewayName":"3V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"212-3V-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":21.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":17.89},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.3}],"definedContours":[{"location":"50%","value":-3.74},{"location":"eoc","value":-7.47}],"operatingModeOptions":["alc","fgm"]},{"name":"214-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.9,"uplinkPolarization":"H","saturatedEirpPeak":61.4,"downlinkPolarization":"H","twta":"3610T1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.11725133,"designedAlcDeepin":9,"countriesName":["Malaysia"],"defaultGatewayName":"13H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"214-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":28.47},{"type":"adj-cells","path":"uplink","location":"eoc","value":25.2},{"type":"adj-cells","path":"downlink","location":"eoc","value":26.87}],"definedContours":[{"location":"50%","value":-3.72},{"location":"eoc","value":-6.99}],"operatingModeOptions":["alc","fgm"]},{"name":"304-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.9,"uplinkPolarization":"H","saturatedEirpPeak":58.1,"downlinkPolarization":"V","twta":"3620J1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.43725133,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"4V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"304-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":28.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":25.2},{"type":"adj-cells","path":"downlink","location":"eoc","value":22.62}],"definedContours":[{"location":"50%","value":-3.21},{"location":"eoc","value":-6.31}],"operatingModeOptions":["alc","fgm"]},{"name":"320-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.8,"uplinkPolarization":"H","saturatedEirpPeak":57.3,"downlinkPolarization":"V","twta":"3620A1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.26725133,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"5V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"320-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":27.79},{"type":"adj-cells","path":"uplink","location":"eoc","value":24.73},{"type":"adj-cells","path":"downlink","location":"eoc","value":21.72}],"definedContours":[{"location":"50%","value":-2.98},{"location":"eoc","value":-6.04}],"operatingModeOptions":["alc","fgm"]},{"name":"322-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.6,"uplinkPolarization":"H","saturatedEirpPeak":59.5,"downlinkPolarization":"H","twta":"3610F1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.54725133,"designedAlcDeepin":9,"countriesName":["China"],"defaultGatewayName":"14H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"322-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":26.3},{"type":"adj-cells","path":"uplink","location":"eoc","value":23.14},{"type":"adj-cells","path":"downlink","location":"eoc","value":27.7}],"definedContours":[{"location":"50%","value":-2.96},{"location":"eoc","value":-6.12}],"operatingModeOptions":["alc","fgm"]},{"name":"402-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":54.2,"downlinkPolarization":"V","twta":"3620B1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.14725133,"designedAlcDeepin":9,"countriesName":["Japan"],"defaultGatewayName":"7V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"402-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":27.71},{"type":"adj-cells","path":"uplink","location":"eoc","value":24.66},{"type":"adj-cells","path":"downlink","location":"eoc","value":25.73}],"definedContours":[{"location":"50%","value":-2.97},{"location":"eoc","value":-6.02}],"operatingModeOptions":["alc","fgm"]},{"name":"405-2","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.4443,"downlinkCenterFrequency":20.1443,"bandwidth":111.5,"type":"augment","gtPeak":19.5,"uplinkPolarization":"H","saturatedEirpPeak":58.6,"downlinkPolarization":"H","twta":"3610D1","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.72725133,"designedAlcDeepin":9,"countriesName":["South Korea"],"defaultGatewayName":"11H","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"405-2-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":25.91},{"type":"adj-cells","path":"uplink","location":"eoc","value":22.79},{"type":"adj-cells","path":"downlink","location":"eoc","value":27.55}],"definedContours":[{"location":"50%","value":-3.08},{"location":"eoc","value":-6.2}],"operatingModeOptions":["alc","fgm"]},{"name":"511","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.058,"downlinkCenterFrequency":18.358,"bandwidth":116,"type":"spot","gtPeak":18.9,"uplinkPolarization":"H","saturatedEirpPeak":53.1,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.28542011,"designedAlcDeepin":9,"countriesName":["New Zealand"],"defaultGatewayName":"16V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"511-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":25.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":22.03},{"type":"adj-cells","path":"downlink","location":"eoc","value":32.51}],"definedContours":[{"location":"50%","value":-3.22},{"location":"eoc","value":-6.33}],"operatingModeOptions":["alc","fgm"]},{"name":"512","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.1875,"downlinkCenterFrequency":18.4875,"bandwidth":116,"type":"spot","gtPeak":18.8,"uplinkPolarization":"H","saturatedEirpPeak":53.1,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-71.91542011,"designedAlcDeepin":9,"countriesName":["New Zealand"],"defaultGatewayName":"16V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"512-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":27.7},{"type":"adj-cells","path":"uplink","location":"eoc","value":23.7},{"type":"adj-cells","path":"downlink","location":"eoc","value":32.51}],"definedContours":[{"location":"50%","value":-2.87},{"location":"eoc","value":-5.86}],"operatingModeOptions":["alc","fgm"]},{"name":"513","satelliteName":"Thaicom 4","uplinkCenterFrequency":14.317,"downlinkCenterFrequency":18.617,"bandwidth":116,"type":"spot","gtPeak":18.6,"uplinkPolarization":"H","saturatedEirpPeak":53.1,"downlinkPolarization":"V","twta":"36200","dynamicRange":25,"operatingMode":"alc","saturatedFluxDensity":-72.38542011,"designedAlcDeepin":9,"countriesName":["New Zealand"],"defaultGatewayName":"16V","defaultNumberOfCarriers":"multi","backoffSettings":[{"numberOfCarriers":"single","inputBackoff":0,"outputBackoff":-3.5,"intermod":16},{"numberOfCarriers":"two","inputBackoff":0,"outputBackoff":-6.5,"intermod":26},{"numberOfCarriers":"multi","inputBackoff":0,"outputBackoff":-9.5,"intermod":32}],"path":"return","beam":"513-RTN","uplinkFrequencyBandName":"ku-band","downlinkFrequencyBandName":"ka-band","carrierOverInterferences":[{"type":"adj-cells","path":"uplink","location":"50%","value":28.8},{"type":"adj-cells","path":"uplink","location":"eoc","value":24.26},{"type":"adj-cells","path":"downlink","location":"eoc","value":32.51}],"definedContours":[{"location":"50%","value":-2.94},{"location":"eoc","value":-6.12}],"operatingModeOptions":["alc","fgm"]}];
