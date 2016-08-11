/**
 * Created by Thanat on 21/7/2559.
 */

// Fill gateway database with pre-defined data if the database is empty

import { Gateways } from './gateways.js';

// Thaicom 4 Gateways

let thaicom4Gateways = [{
  'name': '10V',
  'city': 'Shanghai',
  'countryName': 'China',
  'latitude': 31.08,
  'longitude': 121.376,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.997,
  'antennaName': 'Shanghai Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '11H',
  'city': 'Seoul',
  'countryName': 'South Korea',
  'latitude': 37.46,
  'longitude': 127.4,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.997,
  'antennaName': 'Seoul Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '12V',
  'city': 'Manila',
  'countryName': 'Philippines',
  'latitude': 15.112,
  'longitude': 120.6075,
  'antennaName': 'Manila Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '13H',
  'city': 'Kuala Lumpur',
  'countryName': 'Malaysia',
  'latitude': 2.987,
  'longitude': 101.716,
  'gatewayAvailability': 0.9938,
  'remoteAvailability': 0.997,
  'antennaName': 'Kuala Lumpur Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '14H',
  'city': 'Taipei',
  'countryName': 'Taiwan',
  'latitude': 23.609003,
  'longitude': 120.948689,
  'gatewayAvailability': 0.9985,
  'remoteAvailability': 0.9975,
  'antennaName': 'Taipei Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '15H',
  'city': 'Hanoi',
  'countryName': 'Vietnam',
  'latitude': 21.02,
  'longitude': 105.41,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.996,
  'antennaName': 'Hanoi Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '16V',
  'city': 'Auckland',
  'countryName': 'New Zealand',
  'latitude': -36.74,
  'longitude': 174.69,
  'gatewayAvailability': 0.9985,
  'remoteAvailability': 0.9975,
  'antennaName': 'Auckland Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '17H',
  'city': 'Rangoon',
  'countryName': 'Myanmar',
  'latitude': 16.861874,
  'longitude': 96.220104,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'antennaName': 'Rangoon Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '18H',
  'city': 'Phnom Penh',
  'countryName': 'Cambodia',
  'latitude': 11.61,
  'longitude': 104.897,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'antennaName': 'Phnom Penh Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '1H',
  'city': 'Delhi',
  'countryName': 'India',
  'latitude': 28.48138889,
  'longitude': 77.71166667,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.996,
  'antennaName': 'Delhi Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '1V',
  'city': 'Delhi',
  'countryName': 'India',
  'latitude': 28.48138889,
  'longitude': 77.71166667,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.996,
  'antennaName': 'Delhi Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '2V',
  'city': 'Bombay',
  'countryName': 'India',
  'latitude': 19.23,
  'longitude': 72.95,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.996,
  'antennaName': 'Bombay Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '3H',
  'city': 'LLK',
  'countryName': 'Thailand',
  'latitude': 14.0847,
  'longitude': 100.4211,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'antennaName': 'LLK Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '3V',
  'city': 'LLK',
  'countryName': 'Thailand',
  'latitude': 14.0847,
  'longitude': 100.4211,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'antennaName': 'LLK Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '4H',
  'city': 'Beijing',
  'countryName': 'China',
  'latitude': 40.03,
  'longitude': 116.16,
  'gatewayAvailability': 0.9985,
  'remoteAvailability': 0.998,
  'antennaName': 'Beijing Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '4V',
  'city': 'Beijing',
  'countryName': 'China',
  'latitude': 40.03,
  'longitude': 116.16,
  'gatewayAvailability': 0.9985,
  'remoteAvailability': 0.998,
  'antennaName': 'Beijing Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '5H',
  'city': 'Guangzhou',
  'countryName': 'China',
  'latitude': 23.00028,
  'longitude': 113.3639,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'antennaName': 'Guangzhou Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '5V',
  'city': 'Guangzhou',
  'countryName': 'China',
  'latitude': 23.00028,
  'longitude': 113.3639,
  'gatewayAvailability': 0.9958,
  'remoteAvailability': 0.997,
  'antennaName': 'Guangzhou Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '6V',
  'city': 'Jakarta',
  'countryName': 'Indonesia',
  'latitude': -6.355051,
  'longitude': 107.144938,
  'gatewayAvailability': 0.9938,
  'remoteAvailability': 0.9969,
  'antennaName': 'Jakarta Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '7V',
  'city': 'Tokyo',
  'countryName': 'Japan',
  'latitude': 36.053554,
  'longitude': 138.9548393,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.998,
  'antennaName': 'Tokyo Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '8H',
  'city': 'Kalgoorie',
  'countryName': 'Australia',
  'latitude': -30.736,
  'longitude': 121.48,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.998,
  'antennaName': 'Kalgoorie Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '8V',
  'city': 'Kalgoorie',
  'countryName': 'Australia',
  'latitude': -30.736,
  'longitude': 121.48,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.998,
  'antennaName': 'Kalgoorie Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': '9V',
  'city': 'Broken Hill',
  'countryName': 'Australia',
  'latitude': -31.97,
  'longitude': 141.48,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.998,
  'antennaName': 'Broken Hill Thaicom 4 Main Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-100-102',
  'city': 'Delhi',
  'countryName': 'India',
  'latitude': 28.48138889,
  'longitude': 77.71166667,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Delhi Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-100-112',
  'city': 'Bombay',
  'countryName': 'India',
  'latitude': 19.23,
  'longitude': 72.95,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Bombay Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-200-205',
  'city': 'Hanoi',
  'countryName': 'Vietnam',
  'latitude': 21.02,
  'longitude': 105.41,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Hanoi Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-200-207',
  'city': 'LLK',
  'countryName': 'Thailand',
  'latitude': 14.0847,
  'longitude': 100.4211,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'LLK Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-300-304',
  'city': 'Beijing',
  'countryName': 'China',
  'latitude': 40.03,
  'longitude': 116.16,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Beijing Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-300-313',
  'city': 'Shanghai',
  'countryName': 'China',
  'latitude': 31.079773,
  'longitude': 121.375832,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Shanghai Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-300-320',
  'city': 'Guangzhou',
  'countryName': 'China',
  'latitude': 23.00028,
  'longitude': 113.3639,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Guangzhou Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-300-322',
  'city': 'Taipei',
  'countryName': 'Taiwan',
  'latitude': 23.609003,
  'longitude': 120.948689,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Taipei Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-400-402',
  'city': 'Tokyo',
  'countryName': 'Japan',
  'latitude': 36.053554,
  'longitude': 138.9548393,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Tokyo Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-500-507',
  'city': 'Kalgoorie',
  'countryName': 'Australia',
  'latitude': -30.736,
  'longitude': 121.48,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Kalgoorie Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-500-NZ',
  'city': 'Auckland',
  'countryName': 'New Zealand',
  'latitude': 36.74,
  'longitude': 174.69,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Auckland Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-600-214',
  'city': 'Kuala Lumpur',
  'countryName': 'Malaysia',
  'latitude': 2.987,
  'longitude': 101.716,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Kuala Lumpur Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-600-604',
  'city': 'Jakarta',
  'countryName': 'Indonesia',
  'latitude': -6.355051,
  'longitude': 107.144938,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Jakarta Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}, {
  'name': 'BC-700-701',
  'city': 'Manila',
  'countryName': 'Philippines',
  'latitude': 15.112,
  'longitude': 120.6075,
  'gatewayAvailability': 0.999,
  'remoteAvailability': 0.996,
  'antennaName': 'Manila Thaicom 4 Broadcast Beam Gateway Antenna',
  'inputFeedLoss': -2,
  'priority': 'main',
  'satelliteName': 'Thaicom 4'
}];

let thaicom4DiversityGateways = [
  {
    'name': '12V-D',
    'city': 'Manila',
    'countryName': 'Philippines',
    'latitude': 14.88105,
    'longitude': 120.7915333,
    'antennaName': 'Manila Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '12V',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '13H-D',
    'city': 'Kuala Lumpur',
    'countryName': 'Malaysia',
    'latitude': 2.562966667,
    'longitude': 102.0439111,
    'antennaName': 'Kuala Lumpur Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '13H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9938,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '7V-D',
    'city': 'Maruyama',
    'countryName': 'Japan',
    'latitude': 35.006,
    'longitude': 139.9756488,
    'antennaName': 'Maruyama Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '7V',
    'priority': 'diversity',
    'gatewayAvailability': 0.999,
    'remoteAvailability': 0.998,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '15H-D',
    'city': 'Hanoi',
    'countryName': 'Vietnam',
    'latitude': 20.33,
    'longitude': 105.5,
    'antennaName': 'Hanoi Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '15H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.996,
    'satelliteName': 'Thaicom 4'
  },
  {
    'name': '17H-D',
    'city': 'Rangoon',
    'countryName': 'Myanmar',
    'latitude': 16.711515,
    'longitude': 96.286824,
    'antennaName': 'Rangoon Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '17H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '18H-D',
    'city': 'Phnom Penh',
    'countryName': 'Cambodia',
    'latitude': 11.61,
    'longitude': 104.897,
    'antennaName': 'Phnom Penh Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '18H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '1H-D',
    'city': 'Delhi',
    'countryName': 'India',
    'latitude': 28.69,
    'longitude': 77.46,
    'antennaName': 'Delhi Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '1H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.996,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '1V-D',
    'city': 'Delhi',
    'countryName': 'India',
    'latitude': 28.69,
    'longitude': 77.46,
    'antennaName': 'Dehli Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '1V',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.996,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '2V-D',
    'city': 'Bombay',
    'countryName': 'India',
    'latitude': 18.61,
    'longitude': 73.82,
    'antennaName': 'Bombay Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '2V',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.996,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '3H-D',
    'city': 'Kaerai',
    'countryName': 'Thailand',
    'latitude': 13.8589,
    'longitude': 100.51388,
    'antennaName': 'Kaerai Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '3H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '3V-D',
    'city': 'Kaerai',
    'countryName': 'Thailand',
    'latitude': 13.8589,
    'longitude': 100.51388,
    'antennaName': 'Kaerai Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '3V',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '5H-D',
    'city': 'Guangzhou',
    'countryName': 'China',
    'latitude': 23,
    'longitude': 113.364,
    'antennaName': 'Guangzhou Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '5H',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  },  {
    'name': '5V-D',
    'city': 'Guangzhou',
    'countryName': 'China',
    'latitude': 23,
    'longitude': 113.364,
    'antennaName': 'Guangzhou Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '5V',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 4'
  }, {
    'name': '6V-D',
    'city': 'Jakarta',
    'countryName': 'Indonesia',
    'latitude': -6.355051,
    'longitude': 107.144938,
    'antennaName': 'Jakarta Thaicom 4 Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': '6V',
    'priority': 'diversity',
    'gatewayAvailability': 0.9938,
    'remoteAvailability': 0.9969,
    'satelliteName': 'Thaicom 4'
  },


]

let thaicom5Gateways = [
  {
    name: 'Thaicom 5 Ku-Band Main Gateway',
    city: 'LLK',
    countryName: 'Thailand',
    'latitude': 14.0847,
    'longitude': 100.4211,
    'gatewayAvailability': 0.9998,
    'remoteAvailability': 0.996,
    'antennaName': 'Thaicom 5 Ku-Band Main Gateway Antenna',
    'inputFeedLoss': -2,
    'priority': 'main',
    'satelliteName': 'Thaicom 5'
  },
  {
    name: 'Thaicom 5 Ku-Band Diversity Gateway',
    city: 'Kaerai',
    countryName: 'Thailand',
    'latitude': 13.8589,
    'longitude': 100.51388,
    'antennaName': 'Thaicom 5 Ku-Band Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': 'Thaicom 5 Ku-Band Main Gateway',
    'priority': 'diversity',
    'gatewayAvailability': 0.9998,
    'remoteAvailability': 0.996,
    'satelliteName': 'Thaicom 5'
  },
  {
    name: 'Thaicom 5 C-Band Main Gateway',
    city: 'LLK',
    countryName: 'Thailand',
    'latitude': 14.0847,
    'longitude': 100.4211,
    'gatewayAvailability': 0.9999,
    'remoteAvailability': 0.9999,
    'antennaName': 'Thaicom 5 C-Band Main Gateway Antenna',
    'inputFeedLoss': -2,
    'priority': 'main',
    'satelliteName': 'Thaicom 5'
  },
];
let thaicom6Gateways = [
  {
    name: 'Thaicom 6 Ku-Band Main Gateway',
    city: 'LLK',
    countryName: 'Thailand',
    'latitude': 14.0847,
    'longitude': 100.4211,
    'gatewayAvailability': 0.9998,
    'remoteAvailability': 0.996,
    'antennaName': 'Thaicom 6 Ku-Band Main Gateway Antenna',
    'inputFeedLoss': -2,
    'priority': 'main',
    'satelliteName': 'Thaicom 6'
  },
  {
    name: 'Thaicom 6 Ku-Band Diversity Gateway',
    city: 'Kaerai',
    countryName: 'Thailand',
    'latitude': 13.8589,
    'longitude': 100.51388,
    'antennaName': 'Thaicom 6 Ku-Band Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': 'Thaicom 6 Ku-Band Main Gateway',
    'priority': 'diversity',
    'gatewayAvailability': 0.9998,
    'remoteAvailability': 0.996,
    'satelliteName': 'Thaicom 6'
  },
  {
    name: 'Thaicom 6 C-Band Main Gateway',
    city: 'LLK',
    countryName: 'Thailand',
    'latitude': 14.0847,
    'longitude': 100.4211,
    'gatewayAvailability': 0.9999,
    'remoteAvailability': 0.9999,
    'antennaName': 'Thaicom 6 C-Band Main Gateway Antenna',
    'inputFeedLoss': -2,
    'priority': 'main',
    'satelliteName': 'Thaicom 6'
  },
];
let thaicom7Gateways = [
  {
    name: 'Thaicom 7 C-Band Main Gateway',
    city: 'LLK',
    countryName: 'Thailand',
    'latitude': 14.0847,
    'longitude': 100.4211,
    'gatewayAvailability': 0.9999,
    'remoteAvailability': 0.9999,
    'antennaName': 'Thaicom 7 C-Band Main Gateway Antenna',
    'inputFeedLoss': -2,
    'priority': 'main',
    'satelliteName': 'Thaicom 7'
  },
];

let thaicom8Gateways = [
  {
    name: 'Thaicom 8 Ku-Band Main Gateway',
    city: 'LLK',
    countryName: 'Thailand',
    'latitude': 14.0847,
    'longitude': 100.4211,
    'gatewayAvailability': 0.9998,
    'remoteAvailability': 0.996,
    'antennaName': 'Thaicom 8 Ku-Band Main Gateway Antenna',
    'inputFeedLoss': -2,
    'priority': 'main',
    'satelliteName': 'Thaicom 8'
  },
  {
    name: 'Thaicom 8 Ku-Band Diversity Gateway',
    city: 'Kaerai',
    countryName: 'Thailand',
    'latitude': 13.8589,
    'longitude': 100.51388,
    'antennaName': 'Thaicom 8 Ku-Band Diversity Gateway Antenna',
    'inputFeedLoss': -2,
    'distanceFromMainSiteInKm': 40,
    'mainGateway': 'Thaicom 8 Ku-Band Main Gateway',
    'priority': 'diversity',
    'gatewayAvailability': 0.9958,
    'remoteAvailability': 0.997,
    'satelliteName': 'Thaicom 8'
  },
];


Meteor.methods({
  'fillInitialGatewaysData'() {
    if (Gateways.find().count() === 0) {
      // Validate and insert Thaicom 4 Gateways
      ValidateGateways(thaicom4Gateways);
      thaicom4Gateways.forEach((gateway) => Gateways.insert(gateway));

      // Validate and insert Thaicom 5 Gateways
      ValidateGateways(thaicom5Gateways);
      thaicom5Gateways.forEach((gateway) => Gateways.insert(gateway));

      // Validate and insert Thaicom 6 Gateways
      ValidateGateways(thaicom6Gateways);
      thaicom6Gateways.forEach((gateway) => Gateways.insert(gateway));

      // Validate and insert Thaicom 7 Gateways
      ValidateGateways(thaicom7Gateways);
      thaicom7Gateways.forEach((gateway) => Gateways.insert(gateway));

      // Validate and insert Thaicom 8 Gateways
      ValidateGateways(thaicom8Gateways);
      thaicom8Gateways.forEach((gateway) => Gateways.insert(gateway));
    }
  },
});

function ValidateGateways(arrayOfGateways) {
  arrayOfGateways.forEach((doc) => {
    check(doc, Gateways.schema);
    console.log(`${doc.name} check result: ${Match.test(doc, Gateways.schema)}`);
  });
}