document.addEventListener("DOMContentLoaded", () => {
 

// access all the classes that start from chai-
const html_elements = document.querySelectorAll("[class*='chai-']");

html_elements.forEach(element => {
    const classes = element.className.split(" ");

    classes.forEach(clas => {
        if (clas.startsWith("chai-")) {
            apply_inline_Style_CSS(element, clas);
        }
    });
});


function apply_inline_Style_CSS(element, clas) {
    const each_class = clas.split("-");

    if (each_class[1] === "bg") {
        element.style.backgroundColor = each_class[2];
    }



    if (each_class[1] === "textcol") {
        element.style.color = each_class[2];
    }



    if (each_class[1] === 'p') {
        element.style.padding = each_class[2] + "px";
    }



    if (each_class[1] === 'm') {
        element.style.margin = each_class[2] + "px";
    }



    if (each_class[1] === 'w') {
        element.style.width = each_class[2] + "px";
    }



    if (each_class[1] === 'h') {
        element.style.height = each_class[2] + "px";
    }


    if (each_class[1] === 'fs') {
        element.style.fontSize = each_class[2] + "px";
    }

    if (each_class[1] === 'text') {
        element.style.textAlign = each_class[2];
    }


    if (each_class[1] === 'br') {
        element.style.borderRadius = each_class[2] + "px";
    }

   

    if (clas === 'chai-flex') {
        element.style.display = "flex";
    }

    if (clas === 'chai-center') {
        element.style.display = "flex";
        element.style.justifyContent = "center";
        element.style.alignItems = "center";
    }

    if (clas === 'chai-between') {
        element.style.display = "flex";
        element.style.justifyContent = "space-between";
    }

    if (clas === "chai-col") {
        element.style.display = "flex";
        element.style.flexDirection = "column";
    }

   

    if (clas === "chai-grid") {
        element.style.display = "grid";
    }

    if (each_class[1] === "rows") {
    element.style.display = "grid";
    element.style.gridTemplateRows = "repeat(" + each_class[2] + ", 1fr)";
}

    if (each_class[1] === "cols") {
        element.style.display = "grid";
        element.style.gridTemplateColumns = "repeat(" + each_class[2] + ", 1fr)";
    }

 

        if (each_class[1] === "gap") {
        element.style.gap = each_class[2] + "px";
    }
}


});
