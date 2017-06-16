<script> 
function land(ref, target) 
 
if(target=="_self") {window.location=loc} 
else if (target=="_top") {top.location=loc} 
else if (target=="_blank") {window.open(loc)} 
else if (target=="_parent") {parent.location=loc} 
else {parent.frames[target].location=loc}; 
}} 
} 
function jump(menu) 
 
ref=menu.choice.options[menu.choice.selectedIndex].value; 
splitc=ref.lastIndexOf("&"); 
target=""; 
if (splitc!=-1) 
loc=ref. substring(0,splitc);
target=ref.substring(splitc+1,1000).toLowerCase();} 
else loc=ref; target="_self"}; 
if (ref != "") {land(loc,target)} 
} 
</script> 