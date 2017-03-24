

var opt = "<input type='radio' id='rad1' name='radio' value='true'>True<br>";
opt += "<input type='radio' id='rad2' name='radio' value='false'>False<br>";
var counter = 0;
function loadData(){
	var xhttp = new XMLHttpRequest;
	xhttp.onreadystatechange = function (){
		if(this.status == 200 && this.readyState == 4){
			handleResponse(this);
		}
	};



	function handleResponse(obj){
		var name = document.getElementById("name").value.toLowerCase();	
		var name = document.getElementById("subject name").value.toLowerCase();			
		var flag = 1;
		var data = JSON.parse(obj.responseText);
		var buttonName =  document.getElementById("button");

		console.log(buttonName.innerHTML);
		




		if(buttonName.innerHTML == "Attendence Record"){
			for(var i = 0; i < data.length ; i++){
				if (data[i].name == name){ 
					buttonName.innerHTML = "Attendence Record";
					document.getElementById("select").innerHTML = "theory lectures conducted : "+data[i].theory lectures conducted;
					document.getElementById("radioButtons").innerHTML = opt;
					flag = 1;
					break;	
				}else{
					flag = 0;
				}
				counter++;
				console.log("Value Of counter : "+counter);
			}
			if (flag == 0) {
					document.getElementById("select").innerHTML = "Invalid<br>"
			}
		}else if(buttonName.innerHTML == "Attendence Record"){
			var rad1 = document.getElementById("rad1").checked;
			var rad2 = document.getElementById("rad2").checked;
			console.log("True Radio : "+rad1);
			console.log("False Radio : "+rad2);
			console.log("Value Of counter : "+counter);
			if(rad1 == false && rad2 == false){
				document.getElementById("subject name").innerHTML ="WP";
			
			else{
				document.getElementById("answer").innerHTML ="theory lectures attended";
				buttonName.innerHTML = "Next";
			}
		}else if(buttonName.innerHTML == "Next")





		{
			buttonName.innerHTML = "Attendence Record";
			document.getElementById("select").innerHTML = "labs practical conducted: "+data[counter].labs practical conducted;
			document.getElementById("answer").innerHTML ="";
		}else if(buttonName.innerHTML == "Submit Question 2"){
			var rad1 = document.getElementById("rad1").checked;
			var rad2 = document.getElementById("rad2").checked;
			console.log("True Radio : "+rad1);
			console.log("False Radio : "+rad2);
			console.log("Value Of counter : "+counter);
			if(rad1 == false && rad2 == false){
				document.getElementById("subject name").innerHTML ="WP";
			
			else{
				document.getElementById("answer").innerHTML ="labs practical attended";
			}
		}
	}
	xhttp.open("GET","data/data.json");
	xhttp.send();
}