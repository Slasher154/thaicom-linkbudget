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
  allowedValues: ['c-band','ku-band','ka-band'],
  autoform: {
    options: [
      { label: 'C-Band', value: 'c-band' },
      { label: 'Ku-Band', value: 'ku-band' },
      { label: 'Ka-Band', value: 'ka-band' },
    ]
  },

}

export const PolarizationField = {
  type: String,
  allowedValues: ['V', 'H', 'RHCP', 'LHCP'],
};

export const NumberOfCarriersField = {
  type: String,
  allowedValues: ['single', 'two', 'multi'],
  autoform: {
    options: [
      { label: 'Single Carrier', value: 'single' },
      { label: 'Two Carriers', value: 'two' },
      { label: 'Multiple Carriers', value: 'multi' },
    ]
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
    ]
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