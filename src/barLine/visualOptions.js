export const visualOptions = {
  background: {
    type: 'color',
    label: 'Background color',
    default: '#ffffff',
    group: 'artboard',
  },
  width: {
    type: 'number',
    label: 'Width',
    default: 950,
    group: 'artboard',
  },
  height: {
    type: 'number',
    label: 'Height',
    default: 600,
    group: 'artboard',
  },
  marginTop: {
    type: 'number',
    label: 'Top margin',
    default: 20,
    group: 'margin',
  },
  marginBottom: {
    type: 'number',
    label: 'Bottom margin',
    default: 50,
    group: 'margin',
  },
  marginLeft: {
    type: 'number',
    label: 'Left margin',
    default: 70,
    group: 'margin',
  },
  marginRight: {
    type: 'number',
    label: 'Right margin',
    default: 70,
    group: 'margin',
  },
  //chart
  barColor: {
    type: 'color',
    label: 'Bar color',
    default: '#3498db',
    group: 'chart',
  },
  lineColor: {
    type: 'color',
    label: 'Line color',
    default: '#e74c3c',
    group: 'chart',
  },
  padding: {
    type: 'number',
    label: 'Padding Bars',
    default: 2,
    group: 'chart',
  },
  showPoints: {
    type: 'boolean',
    label: 'Show dots on data values',
    default: true,
    group: 'chart',
  },
  dotsDiameter: {
    type: 'number',
    label: 'Dots diameter',
    default: 6,
    group: 'chart',
  },
  tickRotation: {
    type: 'number',
    label: 'X-Axis Tick Rotation',
    default: 0,
    group: 'axis',
  },
  tickSize: {
    type: 'number',
    label: 'Tick Size',
    default: 6, // Default tick size
    group: 'axis',
  },
  showAxisLabels: {
    type: 'boolean',
    label: 'Show Axis Labels',
    default: true, // Show axis labels by default
    group: 'axis',
  },
    // Existing options...
    dataLabelBar: {
      type: 'boolean',
      label: 'Show data labels for bars',
      default: false,
      group: 'dataLabels',
    },
    dataLabelLine: {
      type: 'boolean',
      label: 'Show data labels for line',
      default: false,
      group: 'dataLabels',
    },
    dataLabelPositionBar: {
      type: 'text',
      label: 'Horizontal position for bar data labels',
      group: 'dataLabels',
      options: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
      default: 'center',
    },
    dataLabelVerticalPositionBar: {
      type: 'text',
      label: 'Vertical position for bar data labels',
      group: 'dataLabels',
      options: [
        { label: 'Top', value: 'top' },
        { label: 'Middle', value: 'middle' },
        { label: 'Bottom', value: 'bottom' },
      ],
      default: 'middle',
    },
    dataLabelPositionLine: {
      type: 'text',
      label: 'Horizontal position for line data labels',
      group: 'dataLabels',
      options: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
      default: 'center',
    },
    dataLabelVerticalPositionLine: {
      type: 'text',
      label: 'Vertical position for line data labels',
      group: 'dataLabels',
      options: [
        { label: 'Top', value: 'top' },
        { label: 'Middle', value: 'middle' },
        { label: 'Bottom', value: 'bottom' },
      ],
      default: 'middle',
    },
    dataLabelFontSize: {
      type: 'number',
      label: 'Font size for data labels',
      group: 'dataLabels',
      default: 12,
    },
    dataLabelColor: {
      type: 'color',
      label: 'Color for data labels',
      group: 'dataLabels',
      default: '#000',
    },
    dataLabelOffsetX: {
      type: 'number',
      label: 'Horizontal offset for data labels',
      group: 'dataLabels',
      default: 0,
    },
    dataLabelOffsetY: {
      type: 'number',
      label: 'Vertical offset for data labels',
      group: 'dataLabels',
      default: 0,
    },
}
