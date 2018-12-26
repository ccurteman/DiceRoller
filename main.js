// Populating dice objects
const rollMult = 1000;
let rolls = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0,
    nine: 0,
    ten: 0,
    eleven: 0,
    twelve: 0,
    thirteen: 0,
    fourteen: 0,
    fifteen: 0,
    sixteen: 0,
    seventeen: 0,
    eighteen: 0,
    nineteen: 0,
    twenty: 0,
}
// Rolling the dice and adding value to the rolls object
function rollDice() {
    for (let i = 0; i < rollMult; i++) {
        let roll = Math.floor(Math.random() * 20) + 1;
        sortRolls(roll);
    }
}
// Sorting the roll by value and adding value to dict object
function sortRolls(roll) {
    if (roll === 1) {
        rolls.one++;
    }
    if (roll === 2) {
        rolls.two++;
    }
    if (roll === 3) {
        rolls.three++;
    }
    if (roll === 4) {
        rolls.four++;
    }
    if (roll === 5) {
        rolls.five++;
    }
    if (roll === 6) {
        rolls.six++;
    }
    if (roll === 7) {
        rolls.seven++;
    }
    if (roll === 8) {
        rolls.eight++;
    }
    if (roll === 9) {
        rolls.nine++;
    }
    if (roll === 10) {
        rolls.ten++;
    }
    if (roll === 11) {
        rolls.eleven++;
    }
    if (roll === 12) {
        rolls.twelve++;
    }
    if (roll === 13) {
        rolls.thirteen++;
    }
    if (roll === 14) {
        rolls.fourteen++;
    }
    if (roll === 15) {
        rolls.fifteen++;
    }
    if (roll === 16) {
        rolls.sixteen++;
    }
    if (roll === 17) {
        rolls.seventeen++;
    }
    if (roll === 18) {
        rolls.eighteen++;
    }
    if (roll === 19) {
        rolls.nineteen++;
    }
    if (roll === 20) {
        rolls.twenty++;
    }
}
// Initializing dice rolls
rollDice();
console.log(rolls);
// Destructuring the rolls Object into an array to be passed to charts
let rollData = [];
for (var key in rolls) {
    rollData.push(rolls[key]);
}
console.log(rollData);


// Chart Options
const options = {
    // Options to style the chart
    chart: {
        height: 450,
        width: '100%',
        type: 'line',
        background: '#f4f4f4',
        zoom: {
            enabled: false
        }
    },
    // An array of objects to define the data
    series: [{
        name: 'Average of 100 D20 Rolls',
        data: rollData
    }],
    // Controls the labels to be placed on the x-axis
    xaxis: {
        categories: [
            "One",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Eleven",
            "Twelve",
            "Thirteen",
            "Fourteen",
            "Fifteen",
            "Sixteen",
            "Seventeen",
            "Eighteen",
            "Nineteen",
            "Twenty"
        ],
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    fill: {
        colors: ['#f44336']
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Average of 1000 20-Sided Dice Rolls',
        align: 'center',
        margin: 20,
        offsetY: 20,
        style: {
            fontSize: '25px'
        }
    }
};

// Initalize Chart
const chart = new ApexCharts(document.querySelector('#chart'), options);
// Render Chart
chart.render();

// TODO Roll Dice Again Feature