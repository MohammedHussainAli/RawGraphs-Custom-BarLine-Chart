import data from '../datasets/population_2019.csv'
import chart from 'customcharts/barLine'

export default {
  chart,
  data,
  dataTypes: {
    Year: {
      type: 'date',
      dateFormat: 'YYYY',
    },
    Age: 'string',
    Male: 'number',
    Female: 'number',
  },
mapping: {
  x: { value: ['Age'] }, 
  bar: { value: ['Male'] }, 
  line: { value: ['Female'] },
},

visualOptions: {
  width: 1000,
  height: 500, 
  marginTop: 50,
  marginBottom: 50,
  marginLeft: 70,
  marginRight: 70,
  padding: 5,
  dotsDiameter: 6,
  showPoints: true,
  tickRotation: 0,
  dataLabelBar: true,
  dataLabelLine: true,
  dataLabelPositionBar: 'center',
  dataLabelVerticalPositionBar: 'middle',
  dataLabelPositionLine:'end',
  dataLabelOffsetX: 0,
  dataLabelOffsetY: 3,
  dataLabelFontSize: 9,
  dataLabelColor: '#000',
  dataLabelVerticalPositionLine: 'bottom',
  labelLeftRotation: 45,
  labelLeftAlignment: 'start',
  background: 'white',
  title: 'My title',
  tickSize: 6,
  showAxisLabels: true,
}
}
