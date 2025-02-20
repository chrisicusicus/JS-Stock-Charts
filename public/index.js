async function main() {
    fetch('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&0b8b024442044c73aa1c5c4df32ba2a7=demo');
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    let GME = result.GME
    let MSFT = result.MSFT
    let DIS = result.DIS
    let BTNX = result.BTNX
    const stocks = [GME, MSFT, DIS, BNTX];
    // Bonus Note: 
    // Another way to write the above lines would to refactor it as:
       // const {GME, MSFT, DIS, BTNX} = result 
    // This is an example of "destructuring" an object
    // "Destructuring" creates new variables from an object or an array
    
    stocks.forEach( stock => stock.values.reverse())
    
    // Time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.reverse().map(value => value.datetime),
            datasets: stocks.map(stock => ({
                label: stock.meta.symbol,
                data: stock.values.reverse().map(value => parseFloat(value.high)),
                backgroundColor:getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    
    function getColor(stock){
        if(stock === "GME"){
            return 'rgba(61, 161, 61, 0.7)'
        }
        if(stock === "MSFT"){
            return 'rgba(209, 4, 25, 0.7)'
        }
        if(stock === "DIS"){
            return 'rgba(18, 4, 209, 0.7)'
        }
        if(stock === "BNTX"){
            return 'rgba(166, 43, 158, 0.7)'
        }
    }
    
}

main()

// 0b8b024442044c73aa1c5c4df32ba2a7
