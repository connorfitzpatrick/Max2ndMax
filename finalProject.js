	function calculatePace() {
		
		var theMinutes1 = document.getElementById("minute1");
		var theSeconds1 = document.getElementById("seconds1");
		var theDistance1 = document.getElementById("distance1");
		
		var myMinutes4Pace = parseFloat(theMinutes1.value);
		var mySeconds4Pace = parseFloat(theSeconds1.value);
		var myDistance4Pace = parseFloat(theDistance1.value);
		
		var totalMinutes = myMinutes4Pace + mySeconds4Pace / 60;
		var thePace = totalMinutes / myDistance4Pace;
				
		var minutesPace = Math.floor(thePace);
		var secondsPace = Math.round((thePace - minutesPace) * 60);
		
		
		if (secondsPace == 60) {
			var secondsPace = 00;
			var minutesPace = minutesPace + 1;
		}
		
		if (secondsPace < 10) {
			var secondsPace = "0" + secondsPace;
		}
		
		var realPace = minutesPace + ":" + secondsPace;
		
		document.getElementById("calculatedPace").value = realPace;
	}
	
	function calculateTime() {
		
		var theMinutes2 = document.getElementById("minutes2");
		var theSeconds2 = document.getElementById("seconds2");
		var theDistance2 = document.getElementById("distance2");
		
		var myMinutes4Time = parseFloat(theMinutes2.value);
		var mySeconds4Time = parseFloat(theSeconds2.value);
		var myDistance4Time = parseFloat(theDistance2.value);
		
		var totalMinutes2 = myMinutes4Time + mySeconds4Time / 60;
		var theTime = totalMinutes2 * myDistance4Time;
		
		var minutesTime = Math.floor(theTime);
		var secondsTime = Math.floor((theTime - minutesTime) * 60);
		
		if (secondsTime < 10) {
			var secondsTime = "0" + secondsTime;
		}
		
		if (secondsTime == 60) {
			var secondsTime = "00";
			var minutesTime = minutesTime + 1;
		}
		
		var realTime = minutesTime + ":" + secondsTime;
		
		document.getElementById("calculatedTime").value = realTime;
	}
		
	var xcGraph = new Array();
		xcGraph[0] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 4000 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">13:09.84</th><th class = "tableBorder">CHSAA Intersectionals</th><th class = "tableBorder">11/12/16</th><tr class = "tableBorder"><th class = "tableBorder">13:27.70</th><th class = "tableBorder">Manhattan Invitational</th><th class = "tableBorder">10/8/16</th><tr class = "tableBorder"><th class = "tableBorder">13:33.10</th><th class = "tableBorder">CHSAA Intersectionals</th><th class = "tableBorder">11/12/16</th></tr></tfoot></table>';
		xcGraph[1] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 5000 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">16:48.02</th><th class = "tableBorder">Nassau Coaches Invitational</th><th class = "tableBorder">10/15/16</th><tr class = "tableBorder"><th class = "tableBorder">13:27.70</th><th class = "tableBorder">NSCHSAA League Championships</th><th class = "tableBorder">10/8/16</th><tr class = "tableBorder"><th class = "tableBorder">13:33.10</th><th class = "tableBorder">NY Federation Championships</th><th class = "tableBorder">11/19/15</th></tr></tfoot></table>';
		xcGraph[2] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 6000 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">20:16.30</th><th class = "tableBorder">Marist Season Opener</th><th class = "tableBorder">9/2/17</th></tfoot></table>';
		xcGraph[3] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 8000 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">26:33.60</th><th class = "tableBorder">Stony Brook University Wolfe XC Invitational</th><th class = "tableBorder">9/9/17</th><tr class = "tableBorder"><th class = "tableBorder">27:10.14</th><th class = "tableBorder">Paul Short Run</th><th class = "tableBorder">9/27/17</th><tr class = "tableBorder"><th class = "tableBorder">28:37.27</th><th class = "tableBorder">Metro Atlantic Conference Championships</th><th class = "tableBorder">11/19/15</th></tr></tfoot></table>';
		
	function xc4kTimes() {
		var my4kTimes = xcGraph[0];
		document.getElementById("myXcInfo").innerHTML = my4kTimes;
	}
	
	function xc5kTimes() {
		var my5kTimes = xcGraph[1];
		document.getElementById("myXcInfo").innerHTML = my5kTimes;
	}
	
	function xc6kTimes() {
		var my6kTimes = xcGraph[2];
		document.getElementById("myXcInfo").innerHTML = my6kTimes;
	}
	
	function xc8kTimes() {
		var my8kTimes = xcGraph[3];
		document.getElementById("myXcInfo").innerHTML = my8kTimes;
	}
	
	function allXCEvents() {
		var myXCEvents = xcGraph[0] + xcGraph[1] + xcGraph[2] + xcGraph[3];
		document.getElementById("myXcInfo").innerHTML = myXCEvents;
	}
	
	var wtGraph = new Array();
		wtGraph[0] = '<table><thead><tr  class = "tableBorder"><th colspan = 3 class = "tableBorder">My 800 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">2:09.04</th><th class = "tableBorder">NSCHSAA Championships</th><th class = "tableBorder">2/14/16</th></tr></tfoot></table>';
		wtGraph[1] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 1600 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">4:53.01</th><th class = "tableBorder">Saint Anthonys Developmental Meet</th><th class = "tableBorder">1/9/16</th><tr class = "tableBorder"><th class = "tableBorder">4:54.85</th><th class = "tableBorder">NSCHSAA League Champs</th><th class = "tableBorder">2/7/16</th><tr class = "tableBorder"><th class = "tableBorder">4:57.09</th><th class = "tableBorder">Molloy Stanner Games</th><th class = "tableBorder">1/14/17</th></tr></tfoot></table>';
		wtGraph[2] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 3000 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">9:38.03</th><th class = "tableBorder">Yale Track Classic</th><th class = "tableBorder">1/21/17</th></tr></tfoot></table>';
		wtGraph[3] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 3200 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">10:14.28</th><th class = "tableBorder">NSCHSAA League Champs</th><th class = "tableBorder">2/7/16</th><tr class = "tableBorder"><th class = "tableBorder">10:28.99</th><th class = "tableBorder">NSCHSAA Christmas Classic</th><th class = "tableBorder">12/18/15</th><tr class = "tableBorder"><th class = "tableBorder">10:30.71</th><th class = "tableBorder">Bishop Loughlin Games</th><th class = "tableBorder">12/17/16</th></tr></tfoot></table>';
		
	function wt800Times() {
		var mywt800Times = wtGraph[0];
		document.getElementById("mywtInfo").innerHTML = mywt800Times;
	}
	
	function wt1600Times() {
		var mywt1600Times = wtGraph[1];
		document.getElementById("mywtInfo").innerHTML = mywt1600Times;
	}
	
	function wt3000Times() {
		var mywt3000Times = wtGraph[2];
		document.getElementById("mywtInfo").innerHTML = mywt3000Times;
	}
	
	function wt3200Times() {
		var mywt3200Times = wtGraph[3];
		document.getElementById("mywtInfo").innerHTML = mywt3200Times;
	}
	
	function allWTEvents() {
		var myWTEvents = wtGraph[0] + wtGraph[1] + wtGraph[2] + wtGraph[3];
		document.getElementById("mywtInfo").innerHTML = myWTEvents;
	}
	
	var stGraph = new Array();
		stGraph[0] = '<table><thead><tr class = "tableBorder"><th colspan = 3  class = "tableBorder">My 1600 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">4:40.83</th><th class = "tableBorder">North Shore Invitational</th><th class = "tableBorder">5/14/16</th><tr class = "tableBorder"><th class = "tableBorder">4:40.87</th><th class = "tableBorder">Nassau Coaches Meet</th><th class = "tableBorder">4/30/16</th><tr class = "tableBorder"><th class = "tableBorder">4:49.69</th><th class = "tableBorder">Saint Anthonys Invite</th><th class = "tableBorder">4/23/16</th></tr></tfoot></table>';
		stGraph[1] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 3200 Meter Run Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">9:55.34</th><th class = "tableBorder">NSCHSAA Sectional Championships</th><th class = "tableBorder">5/21/16</th><tr class = "tableBorder"><th class = "tableBorder">10:26.28</th><th class = "tableBorder">CHSAA Varsity Outdoor Intersectional City Championship</th><th class = "tableBorder">5/28/16</th><tr class = "tableBorder"><th class = "tableBorder">10:27.99</th><th class = "tableBorder">Suffolk Boys Coaches Meet</th><th class = "tableBorder">4/16/16</th></tr></tfoot></table>';
		stGraph[2] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 2000 Meter Steeplechase Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">6:41.40</th><th class = "tableBorder">NSCHSAA Easter Classic</th><th class = "tableBorder">4/18/17</th><tr class = "tableBorder"><th class = "tableBorder">6:58.91</th><th class = "tableBorder">Port Jeff Steeplefest</th><th class = "tableBorder">4/8/15</th><tr class = "tableBorder"><th class = "tableBorder">6:59.51</th><th class = "tableBorder">NSCHSAA Boys Frosh/Soph Championships</th><th class = "tableBorder">3/29/16</th></tr></tfoot></table>';
		stGraph[3] = '<table><thead><tr class = "tableBorder"><th colspan = 3 class = "tableBorder">My 3000 Meter Steeplechase Times</th></tr><tr class = "tableBorder"><th class = "tableBorder">Time</th><th class = "tableBorder">Meet</th><th class = "tableBorder">Date</th></thead><tfoot><tr class = "tableBorder"><th class = "tableBorder">10:32.06</th><th class = "tableBorder">NSCHSAA Sectional Championships</th><th class = "tableBorder">5/16/15</th><tr class = "tableBorder"><th class = "tableBorder">10:41.80</th><th class = "tableBorder">CHSAA Freshman & Sophomore Intersectional Champs</th><th class = "tableBorder">5/9/15</th><tr class = "tableBorder"><th class = "tableBorder">10:53.51</th><th class = "tableBorder">Suffolk Boys Coaches Meet</th><th class = "tableBorder">4/18/15</th></tr></tfoot></table>';
		
	function st1600times() {
		var myst1600Times = stGraph[0];
		document.getElementById("mystInfo").innerHTML = myst1600Times;
	}
	
	function st3200times() {
		var myst3200Times = stGraph[1];
		document.getElementById("mystInfo").innerHTML = myst3200Times;
	}
	
	function st2000times() {
		var myst2000Times = stGraph[2];
		document.getElementById("mystInfo").innerHTML = myst2000Times;
	}
	
	function st3000times() {
		var myst3000Times = stGraph[3];
		document.getElementById("mystInfo").innerHTML = myst3000Times;
	}
	
	function allSTEvents() {
		var mySTEvents = stGraph[0] + stGraph[1] + stGraph[2] + stGraph[3];
		document.getElementById("mystInfo").innerHTML = mySTEvents;
	}
		