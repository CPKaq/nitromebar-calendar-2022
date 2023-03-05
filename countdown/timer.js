img = ["LED_digit_0.png", "LED_digit_1.png", "LED_digit_2.png", "LED_digit_3.png", "LED_digit_4.png", 
"LED_digit_5.png", "LED_digit_6.png", "LED_digit_7.png", "LED_digit_8.png", "LED_digit_9.png"];

function getCd(){
    var now = new Date().getTime() / 1000;
    var ddl = 1678447112;
    delta =  Math.abs(ddl - now);
    hour = Math.floor(delta / 3600);
    minute = Math.floor(delta % 3600 /60);
    second = Math.floor(delta % 60);
    return hour.toString().padStart(4, '0') + minute.toString().padStart(2, '0') + second.toString().padStart(2, '0');
}

function time(){
    cd = getCd()
    stack = [$('#c0'), $('#c1'), $('#c2'), $('#c3'), $('#c5'), $('#c6'), $('#c8'), $('#c9')]
    for(var i=0; i<8; i++){
        stack[i].empty();
        stack[i].append($('<img />', {src: img[parseInt(cd[i])]}));
    }
    return stack;
}

$(function(){
    time();
    setInterval("time()",1000);
});