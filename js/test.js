google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
var a=0;
var b=0;
function check() {
 var radio1=document.getElementsByName("v1");
 var radio2=document.getElementsByName("v2");
 var radio3=document.getElementsByName("v3");
 var radio4=document.getElementsByName("v4");
 var radio5=document.getElementsByName("v5");
 var radio6=document.getElementsByName("v6");
 var radio7=document.getElementsByName("v7");
 var radio8=document.getElementsByName("v8");
 var radio9=document.getElementsByName("v9");
 var radio10=document.getElementsByName("v10"); 

for(var i=0;i<radio1.length;i++)
{
    if(radio1.item(i).checked==true)
    {
       flag1=1+i;
       if(flag1==2){a=a+1;}
       else if(flag1==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

for(var i=0;i<radio2.length;i++)
{
    if(radio2.item(i).checked==true)
    {
       flag2=1+i;
       if(flag2==3){a=a+1;}
       else if(flag2==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

for(var i=0;i<radio3.length;i++)
{
    if(radio3.item(i).checked==true)
    {
       flag3=1+i;
       if(flag3==3){a=a+1;}
       else if(flag3==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

for(var i=0;i<radio4.length;i++)
{
    if(radio4.item(i).checked==true)
    {
       flag4=1+i;
       if(flag4==1){a=a+1;}
       else if(flag4==2){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

for(var i=0;i<radio5.length;i++)
{
     if(radio5.item(i).checked==true)
    {
       flag5=1+i;
       if(flag5==2){a=a+1;}
       else if(flag5==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

for(var i=0;i<radio6.length;i++)
{
     if(radio6.item(i).checked==true)
    {
       flag6=1+i;
       if(flag6==1){a=a+1;}
       else if(flag6==2){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}
for(var i=0;i<radio7.length;i++)
{
     if(radio7.item(i).checked==true)
    {
       flag7=1+i;
       if(flag7==1){a=a+1;}
       else if(flag7==2){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}
for(var i=0;i<radio8.length;i++)
{
     if(radio8.item(i).checked==true)
    {
       flag8=1+i;
       if(flag8==3){a=a+1;}
       else if(flag8==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}
for(var i=0;i<radio9.length;i++)
{
     if(radio9.item(i).checked==true)
     {
       flag9=1+i;
       if(flag9==2){a=a+1;}
       else if(flag9==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

for(var i=0;i<radio10.length;i++)
{
     if(radio10.item(i).checked==true)
    {
       flag10=1+i;
       if(flag10==2){a=a+1;}
       else if(flag10==1){b=b+1;}
       else{b=b+1;}
       //alert(radio1.item(i).value);
       break;
    }
}

if(a+b==9){alert("你有一個選項沒選到")}
else if(a+b==8){alert("你有兩個選項沒選到")}
else if(a+b==7){alert("你有三個選項沒選到")}
else if(a+b==6){alert("你有四個選項沒選到")}
else if(a+b==5){alert("你有五個選項沒選到")}
else if(a+b==4){alert("你有六個選項沒選到")}
else if(a+b==3){alert("你有七個選項沒選到")}
else if(a+b==2){alert("你有八個選項沒選到")}
else if(a+b==1){alert("你有九個選項沒選到")}
else if(a+b==0){alert("你有十個選項沒選到")}

}
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', '測驗結果'],
          ['答對了！',     a],
          ['答錯了！',     b]
        ]);

        var options = {
          title:'測驗結果',
          is3D: false,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }