const startDate = new Date(2021, 11, 27); //2021年12月27日
//const endDate = new Date(2021, 5, 20); //2021年6月20日
var today = new Date();

$(function(){
    var d = new Date();
    var i = new Number();

    d.setTime(startDate.getTime());
    i = 0;
    while(d<=today)
    {
        if(d>submitDate[i].date)
        {
            i++;
        }
        $("<div/>", {
            style: "background: " + submitDate[i].bgColor + "; color: " + submitDate[i].fontColor,
            class: "daybox",
            text: d.getDate()
        }).appendTo("#data");
        d.setDate(d.getDate()+1);
    }

    d.setTime(startDate.getTime());
    while(d<=today)
    {
        para = $("<div/>", {class: "monthbox"})
        if(d.getDate()<=7)
        {
            para.text((d.getMonth()+1)+"月");
        }
        $("#month").append(para);

        d.setDate(d.getDate()+7);
    }

    d.setTime(startDate.getTime());
    d.setDate(d.getDate()+6);
    i = 0;
    while(i<submitDate.length-1)
    {
        var para = $("<div/>", {class: "indexbox"});
        if(d>submitDate[i].date)
        {
            i++;
            if(submitDate[i].index>0)
            {
                $("<span/>", {
                    text: "●",
                    style: "color: "+submitDate[i].bgColor
                }).prependTo(para);

                var str = " " +submitDate[i].index+"　"+submitDate[i].name;
                if(i<submitDate.length-1)
                {
                    day = (submitDate[i].date-submitDate[i-1].date)/86400000;
                    if(day<1)
                    {
                        str += "（<1天）";
                    }else{
                        str += "（"+ day +"天）";
                    }
                }else{
                    str += "（"+Math.floor((today-submitDate[i-1].date)/86400000)+"天，进行中）";
                }
                para.append(str);
            }else{
                continue;
            }
        }
        $("#index").append(para);

        d.setDate(d.getDate()+7);
    }
});