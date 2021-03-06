/**
 * ADD YOUR CODE BELOW
 * LIKE LEGO BLOCKS, PIECE BY PIECE!
 */

const width = 720;
const height = 600;
const margin = {top: 20, right: 40, bottom: 20, left: 40};
let drawing;

function setup(){
  // create your drawing area and add it to the page
  // NOTE: we have a <div id="drawing"></div> on index.html
  drawing = d3.select("#drawing").append("svg");
  // set the size of your drawing area
  drawing
    .attr("width", width)
    .attr("height", height)
    .style("background", "#D8D8D8")

}


function make(){

  let rectangle1 = drawing.append("rect")
  let rectangle2 = drawing.append("rect")
  let rectangle3 = drawing.append("rect")

  rectangle1
    .attr("x", width/2)
    .attr("y", height/2 - 100)
    .attr("width", 20)
    .attr("height", 100)
    .style("fill", "#E8FDF5")
    .style("stroke", "#F6FFFE")
    .style("stroke-width", 4)

  rectangle2
    .attr("x", width/2 + 20 + 5)
    .attr("y", height/2 - 75)
    .attr("width", 20)
    .attr("height", 75)
    .style("fill", "#FFDFDF")
    .style("stroke", "#F6FFFE")
    .style("stroke-width", 4)

  rectangle3
    .attr("x", width/2 + 20 + 20 + 10)
    .attr("y", height/2 - 25)
    .attr("width", 20)
    .attr("height", 25)
    .style("fill", "#FFFCEB")
    .style("stroke", "#F6FFFE")
    .style("stroke-width", 4)

}


setup();
make();
