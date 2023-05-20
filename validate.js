function validateName(str)
{
 var reg=/[a-zA-Z " "]+$/;
 var result=str.match(reg);
  //alert(result);
  if(result==null)
  {
	var span=document.getElementById("s");
	span.innerHTML="Name should contain only alphabet";
	span.style.color="red";
	document.getElementById("name").value="";
	  
  }	
  else
  {
	var span=document.getElementById("s");
	span.innerHTML="valid name";
	span.style.color="green";
  }
}
function validateEmail(str)
{
	
	var reg=/[^A-Z'' " # ? % $ & * () ! > < >= <= =]+$/
	var index=str.indexOf("@");
	var s=str.substring(index,str.length);
	var dotIndex=s.indexOf(".");
	
	if((dotIndex!=s.length-3)&&(s.indexOf(".")!=s.length-4) || str.match(reg)==null || ((str.match(/@/g)!=null) && (index==0 || str.match(/@/g).length>1)))
	{
		var span=document.getElementById("e");
		span.innerHTML="Invalid Email";
		span.style.color="red";
	}
	else
	{
		var span=document.getElementById("e");
		span.innerHTML="Valid Email";
		span.style.color="green";
	}
}
function validateContact(str)
{
	var reg=/^[0-9]+$/;
	if(str.length==10 && str.match(reg)!=null)
	{
		var span=document.getElementById("c");
	span.innerHTML="valid contact";	
	span.style.color="green";
	}
	else
	{
		var span=document.getElementById("c");
	    span.innerHTML="invalid contact";
	    span.style.color="red";	
	}	
}

function validateDob(str)
{
	var dobArr=str.split("-"); //0th year,1 month,2 date
	var d=new Date();
	var year=d.toLocaleDateString();
	var sysDate=year.split("/"); //0th month,1 date,2 year
	if(parseInt(dobArr[0])<parseInt(sysDate[2]))
	{
		var span=document.getElementById("d");
		span.innerHTML="valid birth date";
		span.style.color="green";
		
	}
	else if(parseInt(dobArr[0])==parseInt(sysDate[2]))
	{
		if(parseInt(dobArr[1])<=parseInt(sysDate[0]))
		{
			if(parseInt(dobArr[2])<parseInt(sysDate[1]))
			{
				var span=document.getElementById("d");
				span.innerHTML="";
			
			}
			else
			{
			 var span=document.getElementById("d");
             span.innerHTML="invalid birth date";
             span.style.color="red";
			}
			
		}
	}	
}

function ajaxCall(str)
{
	//alert(str);
	let xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function()
     {
		console.log(this.readyState);
		console.log(this.status);
		if(this.readyState==4 && this.status==200)
		{
         document.getElementById("e1").innerHTML=this.responseText;
         document.getElementById("e1").style.color="red";
          //alert(this.responseText);
		}
	 };	
    xhttp.open("GET",'verifyEmail?email='+str,true);
    xhttp.send();
}
function searchUser(str)
{
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange=function()
	{
		if(this.readyState=4 && this.status==200)
		{
			document.getElementById("d").innerHTML=this.responseText;	
		}
	};
	xhttp.open("GET","search?data="+str,true);
	xhttp.send();
}

