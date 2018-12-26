# DiceRoller
This is a simple program that rolls a random number between 1 and 20 to simulate twenty-sided dice being rolled. The 'dice' are rolled 1000 times, and the results are then displayed to the page via ApexCharts.

The core of the program utilizes the function Math.random to generate dice rolls. The function is constrained between 1 and 20. The dice rolling function then calls a sorting function which falls through a series of if statements to check the roll value. When the roll value is matched, a counter is incremented by one to store the roll in an object.

Once the dice have all been rolled, the object storing the results is destructed into a simple array, which is passed to the ApexChart. Finally, the chart is rendered onto the page.

https://apexcharts.com/

