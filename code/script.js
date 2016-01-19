// JavaScript Document
$(document).ready(function(){
	var pageNum = 0;
	var muted=true;
	var currentPage = $("#book>div:nth-child("+pageNum+")"); // this will be kept in sync
	//
	var goToPage = function(whichPage) {
		currentPage.hide();
		currentPage.trigger('cleanup');
		pageNum = whichPage;
		currentPage = $("#book>div:nth-child("+pageNum+")");
		currentPage.trigger('setup');
		currentPage.show();
		currentPage.trigger('run');
	};
	//
	var turnPage = function(direction){
		goToPage(pageNum + direction);
	};
	//
	var clickNext = function(){
		if (pageNum == 10) {
			return;
		}
		turnPage(1);
	};
	//
	var clickPrev = function(){
		if (pageNum == 1) {
			return;
		}
		turnPage(-1);
	};
	//
	$("#next").click(clickNext);
	$("#prev").click(clickPrev);
	//
	
	/* You probably shouldn't mess with the code above too much...*/
	//
	$('#one').bind('setup', function() {
		console.log("page 1 setup");

	});
	$('#one').bind('run', function() {
		console.log("page 1 run");
		currentPage.css({fontSize: "20px"});
	});
	
	
	$('#two').bind('setup', function() {
		console.log("page 2 setup");
		$("#robbieside").css({opacity:"0"});
	});
	
	
	$('#two').bind('run', function() {
		console.log("page 2 run");
		currentPage.css({fontSize: "20px"});
		$("#robbie").css({left:"-300px",top:"520px"});
		$("#robot1").css({left:"1000px",top:"480px"});
		$("#robot2").css({left:"1000px",top:"600px"});
		$("#robbieside").css({left:"250px",top:"520px"});
		$("#plane").css({left:"1050px",top:"300px"});
		$("#robbie").animate({left:"250px"},5000);
		$("#robot1").animate({left:"570px"},5000);
		$("#robot2").animate({left:"470px"},5000);
		$("#robbie").animate({opacity:"0"},500);
		$("#robbieside").delay(5800).animate({opacity:"1"},500);
		$("#robbieside").animate({left:"-300px"},5000);
		$("#plane").animate({left:"570px"},5000);
		
		
		var i;
		for (i=0;i<9;i++){		
			$("#plane").delay(500).animate({top:"-=100px"},50).delay(100).animate({top:"+=40px"},500);
		};
		
		    
		
		$("#two .story").delay(3000).animate({scrollTop:"400"}, 10000);
		});
		
	$('#two').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 2 cleanup");
	});
	
	$('#three').bind('setup', function() {
		console.log("page 3 setup");
		currentPage.css({fontSize: "14px"});
		$("#side_left").css({left:"380px", top:"430px"});
		
		$("#side_right").css({opacity:"0"});
		$("#red_button").css({opacity:"0"});
		$("#Big_ben").css({opacity:"0"});
		$("#Rob-E").css({opacity:"0"});
		$(".story").css({scrollTop:"0"});
		
	});
	$('#three').bind('run', function() {
		console.log("page 3 run");
		$("#side_left").delay(2500).fadeOut(100);		
		$("#side_right").delay(2500).animate({opacity:"1"},500);
		$("#side_right").delay(5500).animate({opacity:"0"},500);
		$("#red_button").delay(8500).animate({opacity:"1"},500);
		$("#red_button").css({border:"4px solid black"});
		$("#red_button").delay(2500).animate({opacity:"0"},500);
		$("#off_ben").delay(11500).animate({opacity:"0"},500);
		$("#Big_ben").delay(11500).animate({opacity:"1"},500);
		$("#Rob-E").delay(12500).animate({opacity:"1"},500);
		
		var i;
		for (i=0;i<3;i++){		
			$("#Rob-E").delay(500).animate({top:"-=40px"},50).delay(100).animate({top:"+=40px"},50);	
		}
		$("#three .story").delay(3000).animate({scrollTop:"400"}, 10000);

	});
	$('#three').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 3 cleanup");
	});
	
	
	$('#four').bind('setup', function() {
		console.log("page 4 setup");
		currentPage.css({fontSize: "18px"});
		$("#dead").css({opacity:"0"});
		
		
		
		
	});
	$('#four').bind('run', function() {
		console.log("page 4 run");
		$("#bigbenside").css({left:"-50px", top:"280px"});
		$("#robbies").css({left:"670px", top:"400px"});
		$("#ball").css({left:"650px", top:"470px"});
		$("#dead").css({left:"750px",top:"470px"});
		$("#ball").animate({left:"100px"},3000);
		$("#ball").delay(2000).animate({left:"750px"},2000);
		$("#robbies").delay(7800).fadeOut(100);		
		$("#dead").delay(8000).animate({opacity:"1"},500);
		
		
		
		$("#four .story").delay(3000).animate({scrollTop:"400"}, 10000);

	});
	$('#four').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 4 cleanup");
	});
	
	
	
		$('#five').bind('setup', function() {
		console.log("page 5 setup");
		currentPage.css({fontSize: "14px"});
		$("#wheely").css({left:"-200px", top:"200px"});
		$("#balloonswap").css({opacity:"0"});
	});
	
	
	
	$('#six').bind('setup', function() {
		console.log("page 6 setup");
		currentPage.css({fontSize: "18px"});
		
		
		
		
		
	});
	$('#six').bind('run', function() {
		console.log("page 6 run");
		$("#bigbenpark").css({left:"50px", top:"280px"});
		$("#enemy1").css({left:"570px", top:"280px"});
		$("#enemy2").css({left:"440px", top:"410px"});
		$("#enemy3").css({left:"330px",top:"290px"});
		
		
		
		
		$("#six .story").delay(3000).animate({scrollTop:"400"}, 10000);

	});
	$('#six').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 6 cleanup");
	});
	
	
	
	
	
	
			//var f=function(){                to change the animation source
				//$("#wheely").attr("src","balloons.svg"};
		
	
	$('#eight').bind('setup', function() {
		console.log("page 8 setup");
		currentPage.css({fontSize: "18px"});
		$("#bennyend").css({opacity:"0"});
		$("#magic").css({opacity:"0"});
		$("#fairyback").css({opacity:"0"});
		$("#robotel").css({opacity:"0"});
		$(".story").css({scrollTop:"0"});
		
		
		
		
	});
	$('#eight').bind('run', function() {
		console.log("page 8 run");
		$("#benny").css({left:"670px", top:"460px"});
		$("#bennyend").css({left:"670px", top:"460px"});
		$("#ffairy").css({left:"20px", top:"510px"});
		$("#fairyback").css({left:"500px", top:"510px"});
		$("#robotel").css({left:"-50px", top:"510px"});
		$("#ffairy").animate({left:"500px"},5000);
		$("#magic").delay(5500).animate({opacity:"1"},2000);
		$("#benny").delay(6000).fadeOut(2000);
		$("#bennyend").delay(8000).animate({opacity:"1"},2000);
		$("#ffairy").delay(5000).fadeOut(2000);
		$("#magic").delay(3500).fadeOut();
		$("#fairyback").delay(11000).animate({opacity:"1"},2000);
		$("#robotel").delay(13000).animate({opacity:"1"},2000);
		$("#fairyback").animate({left:"100px"},5000);
		
		
		
		
		
		
		$("#eight .story").delay(3000).animate({scrollTop:"400"}, 10000);

	});
	$('#eight').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 8 cleanup");
	});
	
	
		$('#eight').bind('setup', function() {
		console.log("page 8 setup");
		currentPage.css({fontSize: "18px"});
		$("#bennyend").css({opacity:"0"});
		$("#magic").css({opacity:"0"});
		$("#fairyback").css({opacity:"0"});
		$("#robotel").css({opacity:"0"});
		$(".story").css({scrollTop:"0"});
		
		
		
		
	});
	$('#ten').bind('run', function() {
		console.log("page 10 run");
		$("#BBfinal").css({left:"630px", top:"180px"});
		$("#RobEfinal").css({left:"350px", top:"320px"});
		$("#frenemy5").css({left:"20px", top:"320px"});
		$("#frenemy6").css({left:"130px", top:"420px"});
		
		
		
		
		
		
		$("#ten .story").delay(3000).animate({scrollTop:"400"}, 10000);

	});
	$('#ten').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 10 cleanup");
	});
	
	
	
		$('#one').bind('setup', function() {
		console.log("page 1 setup");
		currentPage.css({fontSize: "12px"});
		$("#wheely").css({left:"-200px", top:"200px"});
		$("#balloonswap").css({opacity:"0"});
	});
	$('#one').bind('run', function() {
		console.log("page 1 run");
		var f=function(){
			$("#balloonswap").css({left:"-200px", top:"200px"});
			$("#balloonswap").delay(2000).animate ({opacity:"0"},1000);
			$("wheely").fadeOut(1000);
			};

		var ff=function(){
			$("#wheely").animate({left:"0px"},3000)
			};
			//var f=function(){                to change the animation source
				//$("#wheely").attr("src","balloons.svg"};
		currentPage.animate({fontSize: "18px"}, 1000);
		$("#wheely").animate({left:"220px"},3000,f);
	});
	$('#one').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 1 cleanup");
	});
	
	
	
		$('#one').bind('setup', function() {
		console.log("page 1 setup");
		currentPage.css({fontSize: "12px"});
		$("#wheely").css({left:"-200px", top:"200px"});
		$("#balloonswap").css({opacity:"0"});
	});
	$('#one').bind('run', function() {
		console.log("page 1 run");
		var f=function(){
			$("#balloonswap").css({left:"-200px", top:"200px"});
			$("#balloonswap").delay(2000).animate ({opacity:"0"},1000);
			$("wheely").fadeOut(1000);
			};

		var ff=function(){
			$("#wheely").animate({left:"0px"},3000)
			};
			//var f=function(){                to change the animation source
				//$("#wheely").attr("src","balloons.svg"};
		currentPage.animate({fontSize: "18px"}, 1000);
		$("#wheely").animate({left:"220px"},3000,f);
	});
	$('#one').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 1 cleanup");
	});
	
	
	
		$('#one').bind('setup', function() {
		console.log("page 1 setup");
		currentPage.css({fontSize: "12px"});
		$("#wheely").css({left:"-200px", top:"200px"});
		$("#balloonswap").css({opacity:"0"});
	});
	$('#one').bind('run', function() {
		console.log("page 1 run");
		var f=function(){
			$("#balloonswap").css({left:"-200px", top:"200px"});
			$("#balloonswap").delay(2000).animate ({opacity:"0"},1000);
			$("wheely").fadeOut(1000);
			};

		var ff=function(){
			$("#wheely").animate({left:"0px"},3000)
			};
			//var f=function(){                to change the animation source
				//$("#wheely").attr("src","balloons.svg"};
		currentPage.animate({fontSize: "18px"}, 1000);
		$("#wheely").animate({left:"220px"},3000,f);
	});
	$('#one').bind('cleanup', function() {
		//turn off music or sound effects here!
		console.log("page 1 cleanup");
	});
	goToPage(2);
});

// $('#two').bind('run', function() {
		//currentPage.animate({fontSize: "18px"}, 1000);
		// $("#cat").get(0).play();
		//var la=function(){
			//if ($("#cat").get(0).currentTime)>3){
			//alert("do something");}
			//};
			//setInterval(la,100);
	//});
if(!muted){
	$("#mice").get(0).play();
	$("#mice").get(0).onended=function(){
		alert ("the sound just finished");
		};
	}