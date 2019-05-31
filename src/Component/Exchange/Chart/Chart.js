import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import DarkUnica from 'highcharts/themes/dark-unica'
import Axios from 'axios'
import './Chart.css'

DarkUnica(Highcharts);

class Chart extends Component {
    state = {
        data: [],
        volume: []
    }
    render() {
        let options = {
            rangeSelector: {
                selected: 1
            },
            title: {
                text: 'Trading Chart'
            },
            chart: {
                style: { "height": "500px" }
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Value'
                },
                height: '60%',
                lineWidth: 2,
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

            tooltip: {
                split: true
            },
            series: [{
                type: 'candlestick',
                name: 'Value',
                data: this.state.data,
            }, {
                type: 'column',
                name: 'Volume',
                data: this.state.volume,
                yAxis: 1,
            }]
        }
        if (options.series[0].data.length === 0) {
            return (
                <div className="spinner-border __Center">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        else {
            return (
                <HighchartsReact
                    className="__Chart"
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={options}
                />
            )
        }
    }

    componentDidMount = () => {
        this._getchartdata();
        setInterval(() => {
            this._getchartdata();
        }, 1500);
    }

    _getchartdata = async () => {
        const res = await Axios.get('https://cors-anywhere.herokuapp.com/https://www.bithumb.com/resources/chart/EOS_xcoinTrade_30M.json?symbol=EOS&resolution=0.5&from=1555673274&to=1558265334&strTime=1558265274200')
        let valueall = [];
        let volumeall = [];
        res.data.map(response => {
            let value = []
            let volume = []
            value.push(response[0], Number(response[1]), Number(response[2]), Number(response[3]), Number(response[4]))
            volume.push(response[0], Number(response[5]))
            valueall.push(value);
            volumeall.push(volume);
            return ""
        })
        this.setState({ ...this.state, data: valueall, volume: volumeall })   
    }
}

export default Chart;

