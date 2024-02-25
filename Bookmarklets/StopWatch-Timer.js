javascript:var link = document.createElement('link'); link.setAttribute('rel', 'stylesheet'); link.setAttribute('type', 'text/css'); link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:400%27); document.head.appendChild(link); var myElem = document.getElementById(%27abonzerToolKit%27); if (myElem !== null) { document.getElementById("abonzerToolKit").outerHTML = ""; }; var divX = document.createElement(%27div%27); divX.innerHTML = "<style>.navTabX{color: #fff; padding: 14px 10px; display: inline-block; font-size: 15px;border: none; cursor: pointer; margin: 0px 2px;}.fit{margin: auto; width: fit-content; margin-top: 12px;}.inputDiv{display: inline-block; width: 100px; vertical-align: middle;height: 70px; margin-top: 4px;}.clockT{padding: 8px 12px; border: 1px solid rgb(204, 204, 204); background: rgb(255, 255, 255); position: relative; margin: 4px auto; text-align: center; border-radius: 2px; width: 250px;} #stopwatchTimeBox, #viewTimer{height: 80px; font-size: 52px; color: rgb(255, 87, 34); line-height: 80px; cursor: pointer; transition: all 0.4s ease-in 0s, box-shadow 0.2s ease 0s;}.btnControl{color: #111;padding: 5px 12px;margin: 4px;cursor: pointer;display: inline-block;background: #efefef;}input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {-webkit-appearance: none; margin: 0; }.input-Timer{ color:#3f51b5; text-align: center; background-color: transparent; border: none; outline: none; height: 3rem; width: 100px; font-size: 52px; padding: 0; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; box-sizing: content-box; -webkit-transition: 0.3s; -moz-transition: 0.3s; -o-transition: 0.3s; -ms-transition: 0.3s; transition: 0.3s;} input:placeholder-shown + lable.lableTxt{ display:none;} .lableTxt{color: #673AB7; padding-right: 0px;} ::placeholder {color: #a3a3a3c7; font-size: 22px;} :-ms-input-placeholder {color: #a3a3a3c7;} ::-ms-input-placeholder {color: #a3a3a3c7;}  .displayTimeLableHMS i{font-size: 16px;font-style: normal; margin-right: 8px;}</style><div id='abonzerToolKit'><div id='abonzerDragableDIV' style='user-select: none; text-align: center; z-index: 10000800; top: 60px;position: fixed;width:320px;'><div style='padding:8px;background: rgba(238, 238, 238, 0.80);box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);font-family: Roboto;border: 1px solid #d3d3d375;'><div id='abonzerDragableDIVheader' style='cursor: move; background-color: #cccccc4d; color: #616161; height: 18px;margin-bottom:2px; width: calc(100% - 30px); display:inline-block;'>• • •</div><div style='width:30px;display:inline-block; cursor:pointer;' onclick='hideabTolos();'>x</div> <div id='HeaderNav' style=' background: #ff5722; width: 100%; margin: 0;transition: background-color 0.4s;'><div class='fit' style='margin-top: 0px;'><span id='StopwatchBtn' class='navTabX' style='background: rgba(238, 238, 238, 0.2);' onclick='showStopwatch();'>Stopwatch</span><span id='TimerBtn' class='navTabX' style='background: transparent;' onclick='showTimer();'>Timer</span></div></div><div id='appContainer'><div id='containerStopwatch' style='display: block;'><div class='fit' ><div id='stopwatch-btn-start' class='btnControl' onclick='startStopwatch();'>Start</div><div id='stopwatch-btn-pause' class='btnControl' onclick='pauseStopwatch();'>Pause</div><div id='stopwatch-btn-reset' class='btnControl' onclick='resetStopwatch();'>Reset</div><div id='stopwatchTimeBox' class='clockT' style='display: block;' onclick='stopwatchToggle()'><span id='SetStopwatchTimer'>0:00:00.0</span></div> </div></div><div id='containerTimer' style='display: none;'><div class='fit'><div id='stimer-btn-start' class='btnControl' onclick='startTimer();'>Start</div><div id='stimer-btn-pause' class='btnControl' onclick='pauseTimer();'>Pause</div><div id='stimer-btn-reset' class='btnControl' onclick='resetTimer();'>Reset</div><div id='viewTimer' class='displayTime clockT' style='display: none;' onclick='timerToggle();'><span>0:00:00</span></div><div id='setNewTimer' class='clockT' style='cursor: none; margin-top: 6px!important; display: block; background-color: #fff;'><div class='inputDiv'><input id='timer-input-hh' class='input-Timer' type='number'placeholder='Hours'><lable for='timer-input-hh' class='lableTxt'>Hours</lable></div><div class='inputDiv'><input id='timer-input-mm' class='input-Timer' type='number' placeholder='Minutes'><lable for='timer-input-mm' class='lableTxt'>Minutes</lable></div></div></div></div></div> </div></div></div>"; document.body.appendChild(divX); var borderColor ="#e66465"; var borderSize =2; function hideToolkitDiv() { document.getElementById("abonzerToolKit").outerHTML=""; } dragElement(document.getElementById("abonzerDragableDIV")); function dragElement(elmnt) { var pos1=0, pos2=0, pos3=0, pos4=0; if (document.getElementById(elmnt.id + "header")) { document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown; } else { elmnt.onmousedown=dragMouseDown; } function dragMouseDown(e) { e=e || window.event; e.preventDefault(); pos3=e.clientX; pos4=e.clientY; document.onmouseup=closeDragElement; document.onmousemove=elementDrag; } function elementDrag(e) { e=e || window.event; e.preventDefault(); pos1= pos3 - e.clientX; pos2= pos4 - e.clientY; pos3= e.clientX; pos4= e.clientY; elmnt.style.top= (elmnt.offsetTop - pos2) +"px"; elmnt.style.left= (elmnt.offsetLeft - pos1) +"px"; } function closeDragElement() { document.onmouseup =null; document.onmousemove =null; } } function hideabTolos() {document.getElementById("abonzerToolKit").outerHTML ="";} var headNav = document.getElementById("HeaderNav"); var timerBTN = document.getElementById("TimerBtn"); var swBTN = document.getElementById("StopwatchBtn"); var swTimeBox = document.getElementById("stopwatchTimeBox"); var contSW = document.getElementById("containerStopwatch"); var contTimer = document.getElementById("containerTimer"); var swSETtimer= document.getElementById("SetStopwatchTimer"); function showTimer(){ headNav.style.background = '#3f51b5'; timerBTN.style.background = 'rgba(238, 238, 238, 0.2)'; swBTN.style.background = 'rgba(238, 238, 238, 0)'; contTimer .style.display = 'block'; contSW .style.display = 'none'; } function showStopwatch(){ headNav.style.background = '#ff5722'; swBTN.style.background = 'rgba(238, 238, 238, 0.2)'; timerBTN.style.background = 'rgba(238, 238, 238, 0)'; contSW .style.display = 'block'; contTimer .style.display = 'none'; } var swRunTimer,swStartTime,swDistance,swTime; function stopwatchToggle(){ if(swRunTimer== "Play"){ pauseStopwatch(); } else if(swRunTimer== "Pause"){ startStopwatch(); } } function startStopwatch(){ if(swRunTimer!= "Play"){ swStartTime = new Date().getTime(); swRunTimer= "Play"; if (swTime == null){swTime = 0;} swTimeBox .style.color ='#0277BD'; StopwatchTimer(); } } function pauseStopwatch(){ if(swRunTimer== "Play"){ swRunTimer= "Pause"; swTime = swDistance; swTimeBox .style.color ='#9e9e9e'; } } function resetStopwatch(){ swRunTimer= "Pause"; swTime= 0; swSETtimer.innerHTML ="0:00:00.0"; swTimeBox .style.color ='#9e9e9e'; } function StopwatchTimer(){ var countUpTimer = setInterval(function() { var now = new Date().getTime(); var distance =  now - swStartTime+ swTime ; swDistance= distance; if( swRunTimer=="Pause"){ clearInterval(countUpTimer); } var time=MStoTimeConvert(distance); if( swRunTimer!= "Pause"){ swSETtimer.innerHTML =  time.h +":"+ time.m +":"+ time.s +"."+ time.ms; } }, 100); } function MStoTimeConvert(msec){ var hr =Math.floor((msec % (1000*60*60*24)) / (1000*60*60)); var min =Math.floor((msec % (1000*60*60)) / (1000*60)); var sec =Math.floor((msec % (1000*60)) / 1000); var mSec = Math.floor((msec % (1000)) / 100); if(min<10){ min="0" + min; } if(sec<10){ sec="0" + sec; } return { "ms": mSec, "s":sec, "m":min, "h":hr }; } var displayTimerDiv =document.getElementById("viewTimer"); var defTimeStr ="<span class='displayTimeLableHMS'>0<i>h</i>00<i>m</i>00<i>s</i></span>"; var setTimerDiv=document.getElementById("setNewTimer"); var RunTimer,TotalTimeMin,TimersTime,distance,xTimer; function calculateTimerMins(){ var MM=document.getElementById('timer-input-mm').value; var HH=document.getElementById('timer-input-hh').value; if(HH ==""){var HrMin = 0;}else {var HrMin = Number(HH )*60;} if(MM ==""){var Mins = 0;}else {var Mins = Number(MM );} var TotalMin =   HrMin+Mins; return TotalMin ; } function timerToggle(){ if(RunTimer== 'Play'){ pauseTimer(); } else if(RunTimer =="Pause"){ startTimer(); } } function startTimer(){ if(RunTimer != 'Play'){ if (TimersTime == null) { TimersTime = 0; } var getTime =calculateTimerMins(); if(getTime>0){ RunTimer = 'Play'; TotalTimeMin= getTime; setTimerDiv.style.display ='none'; displayTimerDiv.style.display ='block'; runTimerNow(); displayTimerDiv.style.color ='#0277BD'; } } } function pauseTimer(){ if(RunTimer == 'Play'){ RunTimer="Pause"; clearInterval(xTimer); displayTimerDiv.style.color ='#9e9e9e'; TimersTime =distance; } } function resetTimer(){ RunTimer = "reset"; clearInterval(xTimer); TimersTime = 0; displayTimerDiv.innerHTML = defTimeStr ; displayTimerDiv.style.display = 'none'; setTimerDiv.style.display = 'block'; } function runTimerNow(){ var d1 = new Date (), d2 = new Date (d1); var SecTotalTime = parseInt(TotalTimeMin*60); d2.setSeconds(d1.getSeconds() + SecTotalTime); var countDownDate = d2; if(RunTimer == "Play" && TimersTime!==0){ countDownDate =  TimersTime + new Date().getTime(); } xTimer = setInterval(function() { var now = new Date().getTime(); distance = countDownDate - now; var time =  MStoTimeConvert(distance); displayTimerDiv.innerHTML =  "<span class='displayTimeLableHMS'>"+ time.h +"<i>hrs</i>"+ time.m + "<i>min</i>"+ time.s +"<i>sec</i></span>"; var alertSec= 10; if (distance < (alertSec*1000)) { displayTimerDiv.style.color = "#ff5722"; } if (distance < 0) { clearInterval(xTimer); RunTimer = "End"; displayTimerDiv.innerHTML = defTimeStr; } }, 100); }