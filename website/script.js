
function randInt(min, qtd){
    return Math.floor(Math.random() * (qtd - min) + min);
}

function randColor(){
    return [randInt(0, 256), randInt(0, 256), randInt(0, 256)];
}

function colorString(red, green, blue){
    return `rgb(${red},${green},${blue})`
}

function compColor(red, green, blue){
    return [255 - red, 255 - green, 255 - blue];
}



function test(){
    let color = randColor();
    let comp_color = compColor(...color);
    document.querySelector(".container").style['background'] = colorString(...color);
    document.querySelector("button").style['background'] = colorString(...comp_color);
    document.querySelector("button").style['color'] = colorString(...comp_color);
}