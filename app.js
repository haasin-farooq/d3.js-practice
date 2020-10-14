// d3.selectAll("p")
// .style("color", "red");

const canvas = d3.select(".canva");

// var dataArray = [4, 15, 34, 123, 23];

var dataArray = [
    {
        width: 25,
        height: 4,
        fill: 'pink'
    },
    {
        width: 25,
        height: 14,
        fill: 'purple'
    },
    {
        width: 25,
        height: 44,
        fill: 'orange'
    },
    {
        width: 25,
        height: 124,
        fill: 'green'
    },
    {
        width: 25,
        height: 12,
        fill: 'grey'
    }
]

// add an svg element
const svg = canvas.append("svg")
            .attr('width', 600)
            .attr('height', 600);

const rect = svg.selectAll('rect');

rect.data(dataArray)
    .enter().append('rect')
    .attr('width', (d) => d.width)
    .attr('height', (d) => d.height * 2)
    .attr('fill', (d) => d.fill)
    .attr('x', (d, i) => i * (d.width + 2))
    .attr('y', (d) => 100 - (d.height * 2))

// svg.append('circle')
//     .attr('cx', 100)
//     .attr('cy', 100)
//     .attr('r', 50)
//     .attr('fill', 'blue');

// svg.append('rect')
//     .attr('width', 100)
//     .attr('height', 100)
//     .attr('x', 100)
//     .attr('y', 100)
//     .attr('fill', 'red')
//     .attr('rx', 10)
//     .attr('ry', 10);

// svg.append('line')
//     .attr('x1', 100)
//     .attr('x2', 100)
//     .attr('y1', 100)
//     .attr('y2', 46)
//     .attr('stroke', 'gray');

// svg.append('text')
//     .text('Hello')
//     .attr('fill', 'grey')
//     .attr('font-size', 18)
//     .attr('stroke', 'black')
//     .attr('x', 10)
//     .attr('y', 20);

// svg.append('text')
//     .text('There')
//     .attr('fill', 'grey')
//     .attr('font-size', 18)
//     .attr('x', 10)
//     .attr('y', 50);

// svg.append('text')
//     .text('James!')
//     .attr('fill', 'grey')
//     .attr('font-size', 18)
//     .attr('x', 10)
//     .attr('y', 80);

console.log(canvas);