//document.addEventListener("DOMContentLoaded", init_svg);
document.addEventListener("DOMContentLoaded", () =>
{
    let button_svg = document.getElementById("button_svg");
    if(button_svg) {
        button_svg.addEventListener("click", function (e) {writeTriangle(e);}, false);
    }
   
});

function writeTriangle(event) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    let line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    let triangle_svg = document.getElementById("triangle_svg"); 
    
//    svg.setAttribute("width", "800");
//    svg.setAttribute("height", "400");
//    line1.setAttribute("x1", "0");
//    line1.setAttribute("y1", "10");
//    line1.setAttribute("x2", "100");
//    line1.setAttribute("y2", "10");
//    line1.setAttribute("stroke", "#ff0000");
//    line1.setAttribute("stroke-width", "2");
//    
//    line2.setAttribute("x1", "0");
//    line2.setAttribute("y1", "20");
//    line2.setAttribute("x2", "100");
//    line2.setAttribute("y2", "20");
//    line2.setAttribute("stroke", "#ff0000");
//    line2.setAttribute("stroke-width", "2");
let ct = document.getElementById("container");
//    let l1 = new Line(line1, triangle_svg, "0", "10", "100","10", "#000", .1);
    let l1 = new Line(triangle_svg, "0", "10", "100","10", "#000", .1);
//ct.appendChild(triangle_svg);
//    let l2 = new Line(line2, triangle_svg, "0", "20", "100","20", "#f00", .2);
    ct.appendChild(triangle_svg);
    
//    triangle_svg.appendChild(l1);
//    triangle_svg.appendChild(l2);
//     triangle_svg.appendChild(line1);
//     triangle_svg.appendChild(line2);
    
//    ct.appendChild(triangle_svg);
    
}
