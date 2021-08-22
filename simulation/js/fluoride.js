var can;
var stop=true;
var end=false;

var f=[0.12,0.13,0.11,0.10,0.14];

var p = Math.floor(Math.random()*5);

var ca;
var questions=["What does TISAB stands for ",
			   "Which of the following Fluoride electrode </br> is used in the experiment?",
			   "Which solution is filled in pH electrode?",
			   "pH probes measure pH by measuring the ___________</br>of the solution in which it is dipped.",
			   "Higher concentration of Fluorides can be determined by ________"];
			   
var options2=[["Total Isolation Strength Absolute Buffer","Total Ionic Strength Absolute Buffer","Total Ionic Strength Adjustment Buffer","Total Isolation Strength Adjustment Buffer"],//Total Ionic Strength Adjustment Buffer(2)
			  ["Ion chromatic sensor","Ion-selective sensor","Displacement  sensor","Discharge  sensor"],//Ion-selective(1)
			  ["3M KCl","5M KCl","3M AgCl","5M AgCl"],//3M KCl
			  ["Oxygen ion difference","Hydroxide ion difference","Voltage or potential difference","None of the above"],//Voltage or potential difference
			  ["Titrimetric method","Ion chromatography method","Electrolytic method","Ion Selective method"]];//Ion Selective method
			  
function validateAnswer(qn,ans,left,top)
{
	 $("#answer").empty();
	document.getElementById("a").innerHTML="";
	document.getElementById("questDiv").style="position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:"+left+";top:"+top+";";
	document.getElementById("q").innerHTML=questions[qn];
	el = document.createElement("option");
	el.textContent = " ";
	el.value = " ";
	answer.appendChild(el);
  
	for(j=0;j<options2[qn].length;j++)
	{
		opt = options2[qn][j];

		el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		answer.appendChild(el);
		$("#answer").change(function()
		{
			ca=$(this).children("option:selected").val();
			if(options2[qn][ans]==ca)
			{
				document.getElementById("a").innerHTML="Correct Answer!";
			}
			else
			{
				document.getElementById("a").innerHTML="Wrong! Answer is "+options2[qn][ans];
			}
			setTimeout(function()
			{
				document.getElementById("questDiv").style.visibility="hidden";
				document.getElementById("nextButton").style.visibility="visible";
			},1500);
		});
	}
}

//to prevent entering non-integer values and alphabets
$(function()
{
	$('input').on('input', function() {
		this.value = this.value.match(/\d*(\.\d*)?/)[0];
	});
});

function navNext()
{
	for(temp=0;temp<=15;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	console.log(simsubscreennum);
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
     if (document.getElementById('arrow1').style.visibility=="hidden")
         document.getElementById('arrow1').style.visibility="visible";
     else
         document.getElementById('arrow1').style.visibility="hidden";
}

//stop blinking arrow
function myStopFunction() 
{
     clearInterval(myInt);
     document.getElementById('arrow1').style.visibility="hidden";
}

//Simulation screen actions
function magic()
{
	if(simsubscreennum==1) //display heading
	{
		$("#1-1").fadeIn(500);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},700);
	}
	
	if(simsubscreennum==2) //prepare std sulphate solution
	{
		setTimeout(function()
		{
			//Open sulphate sulotion bottle
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:550px; top:310px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			 // Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			$("#2-1").click(function()
			{
				myStopFunction();
				$("#2-1").off("click");	
				$("#2-1").animate({"position":"absolute","top":"265px"},250,
				function()
				{
					$("#2-1").animate({"position":"absolute","left":"560px"},300,
					function()
					{
						$("#2-1").animate({"position":"absolute","top":"385px"},750,
						function()
						{
							$("#2-5").fadeIn(500,
							function()
							{
								myInt = setInterval(function(){ animatearrow(); }, 500);
								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:140px; height: 30px; z-index: 10;";
								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
								// Code for IE9
								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
								 // Standard syntax
								document.getElementById("arrow1").style.transform = "rotate(180deg)";
								$("#2-5").click(function()
								{
									myStopFunction();
									$("#2-5").off("click");	
									$("#2-5").animate({"position":"absolute","top":"150px"},750,
									function()
									{
										$("#2-61").css({"visibility":"visible"});
										$("#2-62").css({"visibility":"visible"});
										$("#2-63").css({"visibility":"visible"});
										$("#p2-1").css({"visibility":"visible"});
										myInt = setInterval(function(){ animatearrow(); }, 500);
										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
										// Code for IE9
										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
										 // Standard syntax
										document.getElementById("arrow1").style.transform = "rotate(180deg)";
										$("#2-62").click(function()
										{
											myStopFunction();
											$("#2-62").off("click");
											$("#2-61").css({"visibility":"hidden"});
											$("#2-62").css({"visibility":"hidden"});
											$("#2-63").css({"visibility":"hidden"});
											$("#p2-1").css({"visibility":"hidden"});	
											$("#2-51").animate({"position":"absolute","top":"320px"},750);
											$("#2-3").animate({"position":"absolute","top":"360px"},750,
											function()
											{
												//fill flask1 with 2.5ml solution
												myInt = setInterval(function(){ animatearrow(); }, 500);
												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:210px; height: 30px; z-index: 10;";
												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
												// Code for IE9
												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
												 // Standard syntax
												document.getElementById("arrow1").style.transform = "rotate(180deg)";
												$("#2-5").click(function()
												{
													myStopFunction();
													$("#2-5").off("click");	
													$("#2-5").animate({"position":"absolute","top":"75px"},750);
													$("#2-51").animate({"position":"absolute","top":"245px"},750,
													function()
													{
														$("#2-5").animate({"position":"absolute","left":"70px"},1200);
														$("#2-51").animate({"position":"absolute","left":"87px"},1200,
														function()
														{
															$("#2-5").animate({"position":"absolute","top":"130px"},750);
															$("#2-51").animate({"position":"absolute","top":"300px"},750,
															function()
															{
																//pippete
																$("#2-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																$("#2-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																$("#2-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																$("#p2-2").css({"visibility":"visible"});
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																 // Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																$("#2-63").click(function()
																{
																	myStopFunction();
																	$("#2-63").off("click");
																	$("#2-61").css({"visibility":"hidden"});
																	$("#2-62").css({"visibility":"hidden"});
																	$("#2-63").css({"visibility":"hidden"});
																	$("#p2-2").css({"visibility":"hidden"});	
																	document.getElementById("p2-1").innerHTML=" ";
																	$("#2-51").animate({"position":"absolute","top":"430px"},1250);
																	setTimeout(function()
																	{
																		$("#2-51").css({"visibility":"hidden"});
																		document.getElementById("p2-4").style.visibility="visible";
																		$("#2-411").animate({"position":"absolute","top":"420px"},750,
																		function()
																		{
																			$("#2-5").fadeOut(500,
																			function()
																			{
																				//Dilute flask1 by adding distilled water
																				$("#p2-3").css({"visibility":"visible"});
																				$("#2-7").css({"visibility":"visible"});
																				$("#2-71").css({"visibility":"visible"});	
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:250px; top:380px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																				 // Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(0deg)";
																				$("#2-7").click(function()
																				{
																					myStopFunction();
																					$("#2-7").off("click");
																					$("#p2-3").css({"visibility":"hidden"});
																					$("#2-72").css({"visibility":"visible"});
																					$("#2-411").animate({"position":"absolute","top":"374px"},1500);
																					$("#2-71").animate({"position":"absolute","top":"385px"},1500,
																					function()
																					{
																						$("#2-72").css({"visibility":"hidden"});
																						$("#2-7").css({"visibility":"hidden"});
																						$("#2-71").css({"visibility":"hidden"});

																						//fill flask2 with 5ml sulphate solution	
																						setTimeout(function()
																						{
																							
																							$("#2-42").css({"visibility":"visible"});
																							$("#2-421").css({"visibility":"visible"});
																							$("#2-5").css({"position":"absolute","left":"497px","top":"80px"});
																							$("#2-5").fadeIn(500,
																							function()
																							{
																								myInt = setInterval(function(){ animatearrow(); }, 500);
																								document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:140px; height: 30px; z-index: 10;";
																								document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																								// Code for IE9
																								document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																								 // Standard syntax
																								document.getElementById("arrow1").style.transform = "rotate(180deg)";
																								$("#2-5").click(function()
																								{
																									myStopFunction();
																									$("#2-5").off("click");	
																									$("#2-5").animate({"position":"absolute","top":"180px"},750,
																									function()
																									{
																										$("#2-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
																										$("#2-62").css({"visibility":"visible","left":"302px","top":"208px"});
																										$("#2-63").css({"visibility":"visible","left":"314px","top":"220px"});
																										document.getElementById("p2-1").innerHTML="Press the up arrow on the bulb </br></br>to take 5ml of flouride solution</br></br> up into the pipette ";
																										$("#p2-1").css({"visibility":"visible"});
																										myInt = setInterval(function(){ animatearrow(); }, 500);
																										document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
																										document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																										// Code for IE9
																										document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																										 // Standard syntax
																										document.getElementById("arrow1").style.transform = "rotate(180deg)";
																										$("#2-62").click(function()
																										{
																											myStopFunction();
																											$("#2-62").off("click");
																											$("#2-61").css({"visibility":"hidden"});
																											$("#2-62").css({"visibility":"hidden"});
																											$("#2-63").css({"visibility":"hidden"});
																											$("#2-51").css({"visibility":"hidden"});	
																											$("#p2-1").css({"visibility":"hidden"});	
																											$("#2-52").animate({"position":"absolute","top":"325px"},750);
																											$("#2-3").animate({"position":"absolute","top":"365px"},750,
																											function()
																											{
																												myInt = setInterval(function(){ animatearrow(); }, 500);
																												document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
																												document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																												// Code for IE9
																												document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																												 // Standard syntax
																												document.getElementById("arrow1").style.transform = "rotate(180deg)";
																												$("#2-5").click(function()
																												{
																													myStopFunction();
																													$("#2-5").off("click");	
																													$("#2-5").animate({"position":"absolute","top":"75px"},750);
																													$("#2-52").animate({"position":"absolute","top":"215px"},750,
																													function()
																													{
																														$("#2-5").animate({"position":"absolute","left":"200px"},1200);
																														$("#2-52").animate({"position":"absolute","left":"218px"},1200,
																														function()
																														{
																															$("#2-5").animate({"position":"absolute","top":"125px"},750);
																															$("#2-52").animate({"position":"absolute","top":"267px"},750,
																															function()
																															{
																																$("#2-61").css({"visibility":"visible","position":"absolute","left":"420px"});
																																$("#2-62").css({"visibility":"visible","position":"absolute","left":"472px"});
																																$("#2-63").css({"visibility":"visible","position":"absolute","left":"484px"});
																																//$("#p2-2").css({"visibility":"visible"});
																																myInt = setInterval(function(){ animatearrow(); }, 500);
																																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
																																document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
																																// Code for IE9
																																document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
																																 // Standard syntax
																																document.getElementById("arrow1").style.transform = "rotate(180deg)";
																																$("#2-63").click(function()
																																{
																																									myStopFunction();
					$("#2-63").off("click");
					$("#2-61").css({"visibility":"hidden"});
					$("#2-62").css({"visibility":"hidden"});
					$("#2-63").css({"visibility":"hidden"});
					document.getElementById("p2-1").innerHTML=" ";
					$("#2-52").animate({"position":"absolute","top":"400px"},1250);
					setTimeout(function()
					{
						$("#2-52").css({"visibility":"hidden"});
						document.getElementById("p2-4").innerHTML="2.5ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5ml";
						document.getElementById("p2-4").style.visibility="visible";
						$("#2-421").animate({"position":"absolute","top":"418px"},750,
						function()
						{
								$("#2-5").fadeOut(500);
								$("#2-52").css({"visibility":"hidden"});
								$("#2-51").css({"visibility":"hidden"});
																				//Dilute flask2 by adding distilled water
																				setTimeout(function()
																				{
																				$("#p2-3").css({"visibility":"visible"});
																				$("#2-7").css({"visibility":"visible","position":"absolute","left":"220px"});
																				$("#2-71").css({"visibility":"visible","position":"absolute","left":"269px","top":"345px"});	
																				myInt = setInterval(function(){ animatearrow(); }, 500);
																				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:380px; top:380px; height: 30px; z-index: 10;";
																				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																				// Code for IE9
																				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																				 // Standard syntax
																				document.getElementById("arrow1").style.transform = "rotate(0deg)";
																				$("#2-7").click(function()
																				{
																					myStopFunction();
																					$("#2-7").off("click");
																					$("#p2-3").css({"visibility":"hidden"});
																					$("#2-72").css({"visibility":"visible","position":"absolute","left":"203.5px"});
																					$("#2-421").animate({"position":"absolute","top":"374px"},1700);
																					$("#2-71").animate({"position":"absolute","top":"375px"},1700,
																					function()
																					{
																						$("#2-72").css({"visibility":"hidden"});
																						$("#2-7").css({"visibility":"hidden"});
																						$("#2-71").css({"visibility":"hidden"});
																				
																						fillThirdBeaker();	
																			
																					});
																				});
																			},500);															});
																																	},700);
																																});
																															});
																														});
																													});
																												});
																											});
																										});
																									});
																								});
																							});
																						},200);
																					});
																				});
																			});
																		});
																	},800);
																});
															});
														});
													});
												});
											});	
										});
									});
								});
							});
						});
					});
				});	
			});
		},500);
	}
	if(simsubscreennum==3)
	{
		document.getElementById("p2-4").style.visibility="hidden";
		$("#2-43").css({"visibility":"hidden"});
		$("#2-431").css({"visibility":"hidden"});
		$("#2-42").css({"visibility":"hidden"});
		$("#2-421").css({"visibility":"hidden"});
		//pour 25ml of water sample to flask
		$("#13-42").css({"visibility":"visible"});
		$("#13-421").css({"visibility":"visible"});
		$("#p13-10").css({"visibility":"visible"});
		can=13;
		pourWaterSampletoFalsk();																							
	}
	if(simsubscreennum==4)
	{
		$("#13-1").css({"visibility":"hidden"});
		$("#13-2").css({"visibility":"hidden"});
		$("#13-3").css({"visibility":"hidden"});
		$("#13-8b").css({"visibility":"hidden"});
		$("#p13-9").css({"visibility":"hidden"});
		$("#p13-10").css({"visibility":"hidden"});
		$("#13-42").css({"visibility":"hidden"});
		$("#13-421").css({"visibility":"hidden"});
		
		$("#3-42").css({"visibility":"visible"});
		$("#3-421").css({"visibility":"visible"});
		$("#p3-10").css({"visibility":"visible"});
		can=3;
		pourWaterSampletoFalsk();
	
	}
	if(simsubscreennum==5)
	{
		$("#3-42").css({"visibility":"hidden"});
		$("#3-421").css({"visibility":"hidden"});
		$("#p3-10").css({"visibility":"hidden"});
		$("#3-1").css({"visibility":"hidden"});
		$("#3-2").css({"visibility":"hidden"});
		$("#3-3").css({"visibility":"hidden"});
		$("#3-8b").css({"visibility":"hidden"});
		$("#5-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==6)
	{
		can=6;
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:430px; top:305px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(325deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(325deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(325deg)";
		document.getElementById("6-1").onclick=function()
		{
			myStopFunction();
			document.getElementById("6-1").onclick="";
			$("#6-1").animate({"position":"absolute","top":"75px"},300,
			function()
			{
				$("#6-1").animate({"position":"absolute","left":"247.5px","top":"135px"},500,
				function()
				{
					//clean with distilled water
					cleanElectrode();
				});
			});
		}
	}
	if(simsubscreennum==7)
	{
		can=7;
		placeBeakerOnStirrer();
	}
	if(simsubscreennum==8)
	{
		document.getElementById("7-6b").style.visibility="hidden";		
		can=8;
		cleanElectrode();
	}
	if(simsubscreennum==9)
	{
		can=9;
		placeBeakerOnStirrer();
	}
	if(simsubscreennum==10)
	{
		document.getElementById("9-6b").style.visibility="hidden";
		can=10;
		cleanElectrode();
	}
	if(simsubscreennum==11)
	{
		can=11;
		placeBeakerOnStirrer();
	}
	if(simsubscreennum==12)
	{
		document.getElementById("11-6b").style.visibility="hidden";
		$("#12-1").fadeIn(1000);
		setTimeout(function()
		{
			document.getElementById("nextButton").style.visibility="visible";
		},2000);
	}
	if(simsubscreennum==13)
	{
		can=15;
		cleanElectrode();
	}
	if(simsubscreennum==14)
	{
		can=14;
		placeBeakerOnStirrer();
	}
	if(simsubscreennum==15)
	{
		document.getElementById("14-6b").style.visibility="hidden";
		document.getElementById("p16-1").innerHTML="Concentration of Fluoride in the given water sample = "+f[p]+" mg/l"; 
	}
}

//canvas 3
function pourWaterSampletoFalsk()
{
	setTimeout(function()
	{
		$("#"+can+"-1").css({"visibility":"visible"});
		$("#"+can+"-2").css({"visibility":"visible"});
		$("#"+can+"-3").css({"visibility":"visible","position":"absolute","top":"360px"});
		$("#"+can+"-8b").css({"visibility":"visible"});
		$("#"+can+"-5").css({"position":"absolute","left":"477px","top":"80px"});
		//Open distilled water bottle
		myInt = setInterval(function(){ animatearrow(); }, 500);
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:530px; top:315px; height: 30px; z-index: 10;";
		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
		// Code for IE9
		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
		 // Standard syntax
		document.getElementById("arrow1").style.transform = "rotate(270deg)";
		$("#"+can+"-1").click(function()
		{
			myStopFunction();
			$("#"+can+"-1").off("click");	
			$("#"+can+"-1").animate({"position":"absolute","top":"275px"},250,
			function()
			{
				$("#"+can+"-1").animate({"position":"absolute","left":"540px"},300,
				function()
				{
					$("#"+can+"-1").animate({"position":"absolute","top":"390px"},750,
					function()
					{
						$("#"+can+"-5").fadeIn(500,
						function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
							// Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							$("#"+can+"-5").click(function()
							{
								myStopFunction();
								$("#"+can+"-5").off("click");	
								$("#"+can+"-5").animate({"position":"absolute","top":"150px"},750,
								function()
								{
									$("#"+can+"-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
									$("#"+can+"-62").css({"visibility":"visible","position":"absolute","left":"302px","top":"208px"});
									$("#"+can+"-63").css({"visibility":"visible","position":"absolute","left":"314px","top":"220px"});
									$("#p"+can+"-1").css({"visibility":"visible"});
									myInt = setInterval(function(){ animatearrow(); }, 500);
									document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
									document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
									// Code for IE9
									document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
									// Standard syntax
									document.getElementById("arrow1").style.transform = "rotate(180deg)";
									$("#"+can+"-62").click(function()
									{
										myStopFunction();
										$("#"+can+"-62").off("click");
										$("#"+can+"-52").css({"visibility":"visible"});
										$("#"+can+"-61").css({"visibility":"hidden"});
										$("#"+can+"-62").css({"visibility":"hidden"});
										$("#"+can+"-63").css({"visibility":"hidden"});
										$("#p"+can+"-1").css({"visibility":"hidden"});	
										$("#"+can+"-52").animate({"position":"absolute","top":"260px"},750);
										$("#"+can+"-3").animate({"position":"absolute","top":"370px"},750,
										function()
										{
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:240px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											$("#"+can+"-5").click(function()
											{
												myStopFunction();
												$("#"+can+"-5").off("click");	
												$("#"+can+"-5").animate({"position":"absolute","top":"85px"},750);
												$("#"+can+"-52").animate({"position":"absolute","top":"195px"},750,
												function()
												{
													$("#"+can+"-5").animate({"position":"absolute","left":"200px"},1200);
													$("#"+can+"-52").animate({"position":"absolute","left":"218px"},1200,
													function()
													{
														$("#"+can+"-5").animate({"position":"absolute","top":"120px"},750);
														$("#"+can+"-52").animate({"position":"absolute","top":"230px"},750,
														function()
														{
															$("#"+can+"-61").css({"visibility":"visible","position":"absolute","left":"420px"});
															$("#"+can+"-62").css({"visibility":"visible","position":"absolute","left":"472px"});
															$("#"+can+"-63").css({"visibility":"visible","position":"absolute","left":"484px"});
															myInt = setInterval(function(){ animatearrow(); }, 500);
															document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
															document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
															// Code for IE9
															document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
															// Standard syntax
															document.getElementById("arrow1").style.transform = "rotate(180deg)";
															$("#"+can+"-63").click(function()
															{
																myStopFunction();
																$("#"+can+"-63").off("click");
																$("#"+can+"-61").css({"visibility":"hidden"});
																$("#"+can+"-62").css({"visibility":"hidden"});
																$("#"+can+"-63").css({"visibility":"hidden"});
																document.getElementById("p13-1").innerHTML=" ";
																$("#"+can+"-52").animate({"position":"absolute","top":"415px"},1250);
																setTimeout(function()
																{
																	if(can==13)
																	{
																		$("#"+can+"-421").animate({"position":"absolute","top":"410px"},750);
																	}
																	if(can==3)
																	{
																		$("#"+can+"-421").animate({"position":"absolute","top":"398px"},750);
																	}
																	setTimeout(function()
																	{
																		$("#"+can+"-5").fadeOut(500);
																		$("#"+can+"-52").css({"visibility":"hidden"});
																		$("#"+can+"-51").css({"visibility":"hidden"});
																		//close distilled water bottle
																		myInt = setInterval(function(){ animatearrow(); }, 500);
																		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:597.5px; top:405px; height: 30px; z-index: 10;";
																		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																		// Code for IE9
																		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																		// Standard syntax
																		document.getElementById("arrow1").style.transform = "rotate(270deg)";
																		$("#"+can+"-1").click(function()
																		{
																			myStopFunction();
																			$("#"+can+"-1").off("click");
																			$("#"+can+"-1").animate({"position":"absolute","top":"275px"},750,
																			function()
																			{
																				$("#"+can+"-1").animate({"position":"absolute","left":"472.5px"},300,
																				function()
																				{
																					$("#"+can+"-1").animate({"position":"absolute","top":"300px"},750,
																					function()
																					{
																						if(can==13)
																						{
																							$("#nextButton").css({"visibility":"visible"});
																						}
																						if(can==3)
																						{
																							document.getElementById("d3-1").style.visibility="visible";
																							document.getElementById("ok3-1").onclick=function()
																							{
																								document.getElementById("d3-1").style.visibility="hidden";
																								validateAnswer(0,2,"200px","100px");
																							}
																						}
																					});
																				});
																			});
																		});
																	},750);
																},700);
															});
														});
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	},500);
}



function fillThirdBeaker()
{
	//fill beaker3 with 10ml fluoride solution	
	setTimeout(function()
	{
		$("#2-43").css({"visibility":"visible"});
		$("#2-431").css({"visibility":"visible"});
		$("#2-52").css({"visibility":"visible","left":"515px","top":"370px"});
		$("#2-5").css({"position":"absolute","left":"497px","top":"80px"});
		$("#2-5").fadeIn(500,
		function()
		{
			myInt = setInterval(function(){ animatearrow(); }, 500);
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:490px; top:140px; height: 30px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			// Code for IE9
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			// Standard syntax
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			$("#2-5").click(function()
			{
				myStopFunction();
				$("#2-5").off("click");	
				$("#2-5").animate({"position":"absolute","top":"180px"},750,
				function()
				{
					$("#2-61").css({"visibility":"visible","position":"absolute","left":"250px","top":"100px"});
					$("#2-62").css({"visibility":"visible","left":"302px","top":"208px"});
					$("#2-63").css({"visibility":"visible","left":"314px","top":"220px"});
					document.getElementById("p2-1").innerHTML="Press the up arrow on the bulb </br></br>to take 10ml of flouride solution</br></br> up into the pipette ";
					$("#p2-1").css({"visibility":"visible"});
					
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:310px; top:245px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(180deg)";
					$("#2-62").click(function()
					{
						myStopFunction();
						$("#2-62").off("click");
						$("#2-61").css({"visibility":"hidden"});
						$("#2-62").css({"visibility":"hidden"});
						$("#2-63").css({"visibility":"hidden"});
						$("#2-51").css({"visibility":"hidden"});	
						$("#p2-1").css({"visibility":"hidden"});	
						$("#2-52").animate({"position":"absolute","top":"315px"},750);
						$("#2-3").animate({"position":"absolute","top":"382px"},750,
						function()
						{
							myInt = setInterval(function(){ animatearrow(); }, 500);
							document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:240px; height: 30px; z-index: 10;";
							document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
						    // Code for IE9
							document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
							// Standard syntax
							document.getElementById("arrow1").style.transform = "rotate(180deg)";
							$("#2-5").click(function()
							{
								myStopFunction();
								$("#2-5").off("click");	
								$("#2-5").animate({"position":"absolute","top":"75px"},750);
								$("#2-52").animate({"position":"absolute","top":"215px"},750,
								function()
								{
									$("#2-5").animate({"position":"absolute","left":"330px"},1200);
									$("#2-52").animate({"position":"absolute","left":"348px"},1200,
									function()
									{
										$("#2-5").animate({"position":"absolute","top":"125px"},750);
										$("#2-52").animate({"position":"absolute","top":"267px"},750,
										function()
										{
											$("#2-61").css({"visibility":"visible","position":"absolute","left":"420px"});
											$("#2-62").css({"visibility":"visible","position":"absolute","left":"472px"});
											$("#2-63").css({"visibility":"visible","position":"absolute","left":"484px"});
											
											myInt = setInterval(function(){ animatearrow(); }, 500);
											document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:257.5px; height: 30px; z-index: 10;";
											document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
											// Code for IE9
											document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
											// Standard syntax
											document.getElementById("arrow1").style.transform = "rotate(180deg)";
											$("#2-63").click(function()
											{
												myStopFunction();
												$("#2-63").off("click");
												$("#2-61").css({"visibility":"hidden"});
												$("#2-62").css({"visibility":"hidden"});
												$("#2-63").css({"visibility":"hidden"});
												document.getElementById("p2-1").innerHTML=" ";
												$("#2-52").animate({"position":"absolute","top":"400px"},1250);
												setTimeout(function()
												{
													document.getElementById("p2-4").innerHTML="2.5ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5ml&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10ml";
													document.getElementById("p2-4").style.visibility="visible";
													$("#2-431").animate({"position":"absolute","top":"416px"},750,
													function()
													{
															$("#2-5").fadeOut(500);
															$("#2-52").css({"visibility":"hidden"});
															$("#2-51").css({"visibility":"hidden"});
															//Dilute flask3 by adding distilled water
															setTimeout(function()
															{
																$("#p2-3").css({"visibility":"visible"});
																$("#2-7").css({"visibility":"visible","position":"absolute","left":"350px"});
																$("#2-71").css({"visibility":"visible","position":"absolute","left":"399px","top":"345px"});	
																				
																myInt = setInterval(function(){ animatearrow(); }, 500);
																document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:500px; top:380px; height: 30px; z-index: 10;";
																document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
																// Code for IE9
																document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
																// Standard syntax
																document.getElementById("arrow1").style.transform = "rotate(0deg)";
																$("#2-7").click(function()
																{
																	myStopFunction();
																	$("#2-7").off("click");
																	$("#p2-3").css({"visibility":"hidden"});
																	$("#2-72").css({"visibility":"visible","position":"absolute","left":"333.5px","top":"299.49px"});
																	$("#2-431").animate({"position":"absolute","top":"374px"},1700);
																	$("#2-71").animate({"position":"absolute","top":"375px"},1700,
																	function()
																	{
																		$("#2-72").css({"visibility":"hidden"});
																		$("#2-7").css({"visibility":"hidden"});
																		$("#2-71").css({"visibility":"hidden"});
																		
																		//close sulphate solution bottle
																		myInt = setInterval(function(){ animatearrow(); }, 500);
																		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:617.5px; top:400px; height: 30px; z-index: 10;";
																		document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
																		// Code for IE9
																		document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
																		// Standard syntax
																		document.getElementById("arrow1").style.transform = "rotate(270deg)";
																		$("#2-1").click(function()
																		{
																			myStopFunction();
																			$("#2-1").off("click");
																			$("#2-1").animate({"position":"absolute","top":"265px"},750,
																			function()
																			{
																				$("#2-1").animate({"position":"absolute","left":"492.5px"},300,
																				function()
																				{
																					$("#2-1").animate({"position":"absolute","top":"300px"},750,
																					function()
																					{
																						$("#d2-1").fadeIn(250);
																						$("#ok2-1").click(function()
																						{
																							$("#d2-1").css({"visibility":"hidden"});
																							//$("#nextButton").css({"visibility":"visible"});
																							validateAnswer(4,3,"150px","150px");
																						});
																					});
																				});
																			});
																		});
			
																	});
																});
															},500);															
														});
													},700);
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		},200);
}

function cleanElectrode()
{
	document.getElementById(can+"-2").style.visibility="visible";
	document.getElementById(can+"-3").style.visibility="visible";
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:715px; top:380px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(0deg)";
	document.getElementById(can+"-3").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-3").onclick="";
		document.getElementById(can+"-4").style.visibility="visible";
		$("#"+can+"-2").animate({"position":"absolute","top":"370px"},750);
		setTimeout(function()
		{
			$("#"+can+"-5").animate({"position":"absolute","top":"410px"},750,
			function()
			{
				document.getElementById(can+"-4").style.visibility="hidden";
				setTimeout(function()
				{
					document.getElementById(can+"-2").style.visibility="hidden";
					document.getElementById(can+"-3").style.visibility="hidden";
					document.getElementById("note"+can+"-1").style.visibility="visible";
					document.getElementById("b"+can+"-1").onclick=function()
					{
						document.getElementById("note"+can+"-1").style.visibility="hidden";
						document.getElementById(can+"-7a").style.visibility="visible"
						document.getElementById(can+"-7b").style.visibility="visible";
						$("#"+can+"-1").animate({"position":"absolute","top":"100px"},350,
						function()
						{
							document.getElementById(can+"-7a").style.animation="moveTissue1 0.75s 3";
							document.getElementById(can+"-7b").style.animation="moveTissue2 0.75s 3";
							setTimeout(function()
							{
								document.getElementById(can+"-7a").style.visibility="hidden";
								document.getElementById(can+"-7b").style.visibility="hidden";
								if(can==15)
								{
									validateAnswer(1,1,"445px","100px");
								}
								if(can==8)
								{
									validateAnswer(2,0,"445px","100px");
								}
								if(can==10)
								{
									validateAnswer(3,2,"350px","100px");
								}
								if(can==6)
								{
									document.getElementById("nextButton").style.visibility="visible";
								}
							},2500);
						});
					}
				},300);
			});
		},150);
	}
}

function placeBeakerOnStirrer()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:655px; top:415px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(0deg)";
	document.getElementById(can+"-2").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-2").onclick="";
		document.getElementById(can+"-3").style.visibility="visible";
		setTimeout(function()
		{
			if(can==7 || can==9 || can==11)
			{
				$("#"+can+"-1").animate({"position":"absolute","left":"348.5px","top":"372px"},670);
			}
			if(can==14)
			{
				$("#"+can+"-1").animate({"position":"absolute","left":"348.5px","top":"397px"},670);
			}
			$("#"+can+"-2").animate({"position":"absolute","left":"340px","top":"349px"},650);
			$("#"+can+"-3").animate({"position":"absolute","left":"381.5px","top":"360px"},650,
			function()
			{
				document.getElementById(can+"-3").style.visibility="hidden";
				document.getElementById("note"+can+"-1").style.visibility="visible";
				document.getElementById("b"+can+"-1").onclick=function()
				{
					document.getElementById("note"+can+"-1").style.visibility="hidden";
					document.getElementById(can+"-6a").style.visibility="visible";
					document.getElementById(can+"-6b").style.visibility="visible";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:642.5px; top:418px; height: 30px; z-index: 10;";
					document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
					// Code for IE9
					document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
					// Standard syntax
					document.getElementById("arrow1").style.transform = "rotate(270deg)";
					document.getElementById(can+"-6b").onclick=function()
					{
						myStopFunction();
						document.getElementById(can+"-6b").onclick="";
						document.getElementById(can+"-6b").style.visibility="hidden";
						document.getElementById(can+"-6c").style.visibility="visible";
						$("#"+can+"-6c").animate({"position":"absolute","left":"367.5px","top":"282px"},500,
						function()
						{
							document.getElementById(can+"-6b").style="position:absolute; left:365px; top:347.5px;";
							document.getElementById(can+"-6b").style.visibility="visible";
							document.getElementById(can+"-6c").style.visibility="hidden";
							$("#"+can+"-6b").animate({"position":"absolute","top":"412px"},300,
							function()
							{
								document.getElementById(can+"-6a").style.visibility="hidden";
								
								if(can==7)
								{
									//switching on ISEM
									switchOnIsem();
								}
								if(can==9 || can==11 || can==14)
								{
									dipElectrode();
								}
							});
						});
					}
				}
			});
		},100);
	}
}

function switchOnIsem()
{
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:175px; top:320px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(270deg)";
	document.getElementById(can+"-7a").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-7a").onclick="";
		document.getElementById(can+"-5").style.backgroundColor="#D3D3D3";
		document.getElementById("p"+can+"-5").innerHTML="F<sup>-</sup>";
		setTimeout(function()
		{
			document.getElementById("p"+can+"-5").innerHTML="0.000";
			// dip the electrode in the beaker
			document.getElementById("p"+can+"-1").innerHTML="Immerse the electrode properly in the solution.";
			document.getElementById("note"+can+"-1").style.visibility="visible";
			document.getElementById("b"+can+"-1").onclick=function()
			{
				document.getElementById("note"+can+"-1").style.visibility="hidden";
				dipElectrode();
			}
		},500);
	}
}

function dipElectrode()
{
	if(can==7)
	{
		num=2.3;
	}
	if(can==9)
	{
		num=4.8;	
	}
	if(can==11)
	{
		num=9.8;	
	}
	if(can==14)
	{
		num=f[p];	
	}
	myInt = setInterval(function(){ animatearrow(); }, 500);
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:595px; top:240px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
	// Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
	// Standard syntax
	document.getElementById("arrow1").style.transform = "rotate(0deg)";
	document.getElementById(can+"-4").onclick=function()
	{
		myStopFunction();
		document.getElementById(can+"-4").onclick="";
		$("#"+can+"-4").animate({"position":"absolute","left":"88.5px","top":"75px"},500,
		function()
		{
			$("#"+can+"-4").animate({"position":"absolute","top":"190px"},500,
			function()
			{
				document.getElementById("p"+can+"-5").innerHTML=(num).toFixed(2);	
				//On the stirrer
				myInt = setInterval(function(){ animatearrow(); }, 500);
				document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:530px; height: 30px; z-index: 10;";
				document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
				// Code for IE9
				document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
				// Standard syntax
				document.getElementById("arrow1").style.transform = "rotate(0deg)";
				document.getElementById(can+"-7b").onclick=function()
				{
					myStopFunction();
					document.getElementById(can+"-7b").onclick="";
					document.getElementById(can+"-7c").style.visibility="visible";
					document.getElementById(can+"-6b").style.animation="rotateStirBar 15s infinite linear";
					document.getElementById(can+"-1").style.animation="shake 2.5s infinite linear";
					if(can==14)
					{
						document.getElementById("p"+can+"-5").innerHTML=(f[p]).toFixed(2);
					}
					if(can==7 || can==9 || can==11)
					{
						document.getElementById("p"+can+"-5").innerHTML=(num+0.2).toFixed(2);
					}
					document.getElementById("p"+can+"-2").style.visibility="visible";
					setTimeout(function()
					{
						myInt = setInterval(function(){ animatearrow(); }, 500);
						document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:435px; top:530px; height: 30px; z-index: 10;";
						document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
						// Code for IE9
						document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
						// Standard syntax
						document.getElementById("arrow1").style.transform = "rotate(0deg)";
						document.getElementById(can+"-7b").onclick=function()
						{
							myStopFunction();
							document.getElementById(can+"-7b").onclick="";
							document.getElementById("p"+can+"-2").style.visibility="hidden";
							// document.getElementById("note"+can+"-1").style.visibility="visible";
							document.getElementById(can+"-7c").style.visibility="hidden";
							document.getElementById(can+"-6b").style.animation="rotateStirBar 50s 1 linear";
							document.getElementById(can+"-1").style.animation="shake 5s 5 linear";
							setTimeout(function()
							{
								document.getElementById(can+"-6b").style.animation="";
								document.getElementById(can+"-1").style.animation="";
								document.getElementById("nextButton").style.visibility="visible";
							},2000);
						}
					},2000);
				}
			});
		});
	}
}

function checkInference()
{
	var str;
	document.getElementById("ans").style.visibility="visible";
	if($("input[name='inf']:checked").val()==1)
	{
		document.getElementById("ans").innerHTML="Correct answer!";
	}
	else
	{
		document.getElementById("ans").innerHTML="Wrong! Answer is &lt;1mg/l";
	}

	setTimeout(function()
	{
		// document.getElementById("p16-1").style.visibility="hidden";
		document.getElementById("inference").style.visibility="hidden";
		if(f[p]<=1)
		{
			str="suitable";
			str=str.fontcolor("green");
			document.getElementById("infAns").innerHTML="Permissible limit of Fluoride in water is &lt;1mg/l. The water sample given has Fluoride level = "+f[p]+"mg/l, so it is "+ str +" for drinking.";
		}
		else 
		{
			str="not suitable";
			str=str.fontcolor("red");
			document.getElementById("infAns").innerHTML="Permissible limit of Fluoride in water is &lt;1mg/l. The water sample given has Fluoride level = "+f[p]+"mg/l, so it is "+ str +" for drinking.";
		}
		$("#infAns").fadeIn(750);
	},1000);
}