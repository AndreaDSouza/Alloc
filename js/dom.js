var rows = "<div class='rows'>";
var tableDetails;
        
function generateLeft(tableIndex,tableDoms)
{
    var leftEle = tableDoms[tableIndex].getElementsByClassName('left_ele');
    var i, j, k=0;
    var rowEle,eleEle;
    for( i = 0; i < tableDetails[tableIndex].leftCount.length ; i++)
    {
        for( j = 0; j < tableDetails[tableIndex].leftCount[i]; j ++)
        {
            leftEle[k].innerHTML = tableDetails[tableIndex].left[i];
            k ++;
        }
    }
}

function generateRight(tableIndex,tableDoms)
{
    var rightEle = tableDoms[tableIndex].getElementsByClassName('right_ele');
    var i, j, k=0;
    var rowEle,eleEle;
    for( i = 0; i < tableDetails[tableIndex].rightCount.length ; i++)
    {
        for( j = 0; j < tableDetails[tableIndex].rightCount[i]; j ++)
        {
            rightEle[k].innerHTML = tableDetails[tableIndex].right[i];
            k ++;
        }
    }
}

function logger( ev )
{
    console.log(ev.clientY);
    
}
    






function getDetails()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            tableDetails = JSON.parse(xhttp.responseText);
            generateOnLoad();
        }
    }
    xhttp.open("GET","js/tableDetails.json",true);
    xhttp.send();
}

function generateOnLoad()
{
    targetDiv = document.body;
    tableDoms = targetDiv.getElementsByClassName('table');
    
    //creating table divs
    for (var i = 0; i < tableDetails.length; i++)
       targetDiv.innerHTML += "<div class='table'></div><br>";
   
    for ( i = 0; i < tableDoms.length; i ++)
    {   
       for( var j = 0; j < tableDetails[i].count; j++)
       {
           rows += "<div class='left_ele'>" +"-"+ "</div>";
           rows += "<div class='right_ele'>" +"-"+ "</div>";
           tableDoms[i].innerHTML += rows ;
           rows = rows.substring(0, 18);
       }
       
       generateLeft(i,tableDoms);
       generateRight(i,tableDoms);
    }
    
    //generate slider
    
    $(tableDoms[0]).after('<br><div id="slider" draggable = "true" ondrag = "logger( event )"><div>srgef</div></div>');
    
}


window.onload = function(){
    getDetails();
};
