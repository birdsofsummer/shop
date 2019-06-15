import moment from "moment"

function createChart(id='container',seriesOptions) {
  Highcharts.stockChart(id, {
    rangeSelector: { selected: 0 },
    yAxis: {
      labels: { formatter: function () { return this.value } },
      plotLines: [{ value: 0, width: 2, color: 'silver' }]
    },
    plotOptions: {
      series: {
        //compare: 'percent',
        showInNavigator: true
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {unix2tz(point.x)}<br/>',
      valueDecimals: 2,
      split: true
    },
    series: seriesOptions
  });
}
const tz2unix=(t)=>moment(t).unix()*1000
const unix2tz=(t)=>`${moment.unix(t/1000)}`
const add_unix=(t)=>t.map(x=>({...x,"unix":tz2unix(x.since)}))

function format7(d){
    if (d.timeseries){
       let d1=add_unix(d.timeseries)
       let pick=(f)=>d1.map(x=>[x.unix,f(x)])
       let s=[
           {name:"uniques",data:pick(x=>x.uniques.all)},
           {name:"bandwidth",data:pick(x=>x.bandwidth.all/1e6)},
           {name:"cached",data:pick(x=>x.bandwidth.cached/1e6)},
           {name:"pageviews",data:pick(x=>x.pageviews.all)},
           {name:"requests",data:pick(x=>x.requests.all)},
       ]
       return s
    }
    return []
}
function draw(d){
    let s=format7(d)
    createChart('container',s)
}
export {draw,add_unix}
