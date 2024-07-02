class Line {
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;
    stroke_color = "";
    stroke_width = 0;
    //Paramteres are x1, y1, x2, y2, stroke_color, stroke_width.
//    constructor(line_obj, x1, y1, x2, y2, stroke_color, stroke_width) {       
    constructor(svg_obj, x1, y1, x2, y2, stroke_color, stroke_width) {       
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.stroke_color = stroke_color;
        this.stroke_width = stroke_width;
        line_obj = document.createElementNS(null, "line");
//        line_obj = document.createElementNS("http://www.w3.org/2000/svg", "line");
        //Call function for line.
        this.createLine(svg_obj, line_obj, x1, y1, x2, y2, stroke_color, stroke_width)
    }

    createLine(svg_obj, line_obj, x1, y1, x2, y2, stroke_color, stroke_width) {
        //Call public function to set attributes for line.
        line_obj.setAttribute("x1", x1);
        line_obj.setAttribute("y1", y1);
        line_obj.setAttribute("x2", x2);
        line_obj.setAttribute("y2", y2);        
        line_obj.setAttribute("stroke", stroke_color);
        line_obj.setAttribute("stroke-width", stroke_width);
          
        svg_obj.appendChild(line_obj);
    }
    
    
}