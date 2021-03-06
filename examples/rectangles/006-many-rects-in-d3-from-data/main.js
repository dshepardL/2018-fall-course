/**
 * ADD YOUR CODE BELOW
 * LIKE LEGO BLOCKS, PIECE BY PIECE!
 */

const width = 720;
const height = 600;
const margin = { top: 20, right: 40, bottom: 20, left: 40 };
let drawing;
let drawingArea;
let rectangleData = [];

async function setup() {
  try {
    // create your drawing area and add it to the page
    // NOTE: we have a <div id="drawing"></div> on index.html
    drawing = d3.select("#drawing").append("svg");
    // set the size of your drawing area
    drawing
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .style("background", "#D8D8D8");

    // add a group to your drawing
    drawingArea = drawing.append("g");
    // move your drawing area to have padding
    // don't add .style here unless you want
    // those styles to propogate down
    drawingArea.attr("transform", `translate(${margin.left}, ${margin.top})`);

    for (let i = 0; i < 30; i++) {
      let d = {
        category: `blah${i}`,
        z: d3.randomUniform(6, 200)()
      };
      rectangleData.push(d);
    }

    return rectangleData;
  } catch (err) {
    return err;
  }
}

function make(rectangleData) {
  let myBars = drawingArea.selectAll(".myBars").data(rectangleData);

  let barWidth = 20;

  myBars
    .enter()
    .append("rect")
    .attr("class", ".myBars")
    .attr("x", (d, idx) => idx * barWidth + 2)
    .attr("y", d => height - d.z)
    .attr("width", barWidth)
    .attr("height", d => d.z)
    .style("fill", "#black")
    .style("stroke", "#F6FFFE")
    .style("stroke-width", 4);
}

setup().then(make);
