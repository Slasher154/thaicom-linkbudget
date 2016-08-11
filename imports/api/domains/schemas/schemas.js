/**
 * Created by Thanat on 4/7/2559.
 */

import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// Define custom schemas for multiple usage

export const LongitudeField = {
  type: Number,
  decimal: true,
  min: -180,
  max: 180,
};

export const LatitudeField = {
  type: Number,
  decimal: true,
  min: -90,
  max: 90,
};

export const FrequencyField = {
  type: Number,
  decimal: true,
  min: 0,
};

export const BandwidthField = {
  type: Number,
  decimal: true,
  min: 0,
};

export const FrequencyBandField = {
  type: String,
  allowedValues: ['c-band', 'ku-band', 'ka-band'],
  autoform: {
    options: [
      { label: 'C-Band', value: 'c-band' },
      { label: 'Ku-Band', value: 'ku-band' },
      { label: 'Ka-Band', value: 'ka-band' },
    ],
    type: 'select2',
  },
};

export const FrequencyBandsField = {
  type: [String],
  autoform: {
    options: [
      { label: 'C-Band', value: 'c-band' },
      { label: 'Ku-Band', value: 'ku-band' },
      { label: 'Ka-Band', value: 'ka-band' },
    ],
    type: 'select2',
    afFieldInput: {
      multiple: true,
    },
  },
};

export const PolarizationField = {
  type: String,
  allowedValues: ['V', 'H', 'RHCP', 'LHCP'],
  autoform: {
    type: 'select2',
  }
};

export const PolarizationsField = {
  type: [String],
  allowedValues: ['V', 'H', 'RHCP', 'LHCP'],
  autoform: {
    type: 'select2',
    afFieldInput: {
      multiple: true,
    },
  },
};

export const NumberOfCarriersField = {
  type: String,
  allowedValues: ['single', 'two', 'multi'],
  autoform: {
    options: [
      { label: 'Single Carrier', value: 'single' },
      { label: 'Two Carriers', value: 'two' },
      { label: 'Multiple Carriers', value: 'multi' },
    ],
    type: 'select2',
  },
 };

// Backoff value in this app is negative value only
export const BackoffField = {
  type: Number,
  decimal: true,
  max: 0,
};

export const InterferenceTypeField = {
  type: String,
  allowedValues: ['xpd','adj-sat', 'adj-cells'],
  autoform: {
    options: [
      { label: 'XPD', value: 'xpd' },
      { label: 'Adjacent Satellites', value: 'adj-sat'},
      { label: 'Cross Cells', value: 'adj-cells' },
    ],
    type: 'select2',
  },
};

export const SatelliteOperationModeField = {
  type: String,
  allowedValues: ['fgm', 'alc'],
  autoform: {
    options: [
      { label: 'FGM', value: 'fgm' },
      { label: 'ALC', value: 'alc' },
    ]
  },
};

export const DefinedContoursField = {
  type: String,
  allowedValues: ['peak', '50%', 'eoc', 'eoc-2'],
  autoform: {
    options: [
      { label: 'Peak', value: 'peak' },
      { label: '50%', value: '50%' },
      { label: 'EOC', value: 'eoc' },
      { label: 'EOC-2', value: 'eoc-2' },
    ]
  },
};

export const CountryField = {
  type: String,
}

export const LossField = {
  type: Number,
  decimal: true,
  max: 0,
}

export const HpaSchema = new SimpleSchema({
  type: {
    type: 'String',
    allowedValues: ['hpa', 'buc'],
    autoform: {
      options: [
        { label: 'HPA', value: 'hpa' },
        { label: 'BUC', value: 'buc' },
      ],
    },
  },
  sizingInWatts: {
    type: Number,
    decimal: true,
    label: 'HPA Sizing in Watts',
  },
  outputBackoff: Object.assign(BackoffField, { label: 'HPA Output Backoff in dB'}),
  inputFeedLoss: Object.assign(LossField, { label: 'Input feed loss in dB (must be negative)'}),
  intermod: {
    type: Number,
    decimal: true,
    label: 'Intermodulation of HPA',
  },
  intermodRain: {
    type: Number,
    decimal: true,
    label: 'Intermodulation of HPA at Rain Fade',
  },
  upc: {
    type: Number,
    decimal: true,
    label: 'Uplink Power Control in dB',
  },
});