
var sheetID = "1XPmeY6xjK4VGTGxjff_NrPkpzwKk3U0x6p90cqg09dc"  
var url = "https://spreadsheets.google.com/feeds/list/" + sheetID +"/1/public/values?alt=json";

  
  $.getJSON(url, function(data) {
	  
	var entry = data.feed.entry;

  $(entry).each(function(){
  
  var x = data.feed.entry[0].gsx$lunes.$t;
  var y = data.feed.entry[0].gsx$martes.$t;
  var w = data.feed.entry[0].gsx$miercoles.$t;
  var j = data.feed.entry[0].gsx$jueves.$t;
  var v = data.feed.entry[0].gsx$viernes.$t;
  var s = data.feed.entry[0].gsx$sabado.$t;
  var d = data.feed.entry[0].gsx$domingo.$t;

  
  document.getElementById("l0").innerHTML=x;
  document.getElementById("m0").innerHTML=y;
  document.getElementById("w0").innerHTML=w;
  document.getElementById("j0").innerHTML=j;
  document.getElementById("v0").innerHTML=v;
  document.getElementById("s0").innerHTML=s;
  document.getElementById("d0").innerHTML=d;


  var x1 = data.feed.entry[1].gsx$lunes.$t;
  var y1 = data.feed.entry[1].gsx$martes.$t;
  var w1 = data.feed.entry[1].gsx$miercoles.$t;
  var j1 = data.feed.entry[1].gsx$jueves.$t;
  var v1 = data.feed.entry[1].gsx$viernes.$t;
  var s1 = data.feed.entry[1].gsx$sabado.$t;
  var d1 = data.feed.entry[1].gsx$domingo.$t;

  
  document.getElementById("l1").innerHTML=x1;
  document.getElementById("m1").innerHTML=y1;
  document.getElementById("w1").innerHTML=w1;
  document.getElementById("j1").innerHTML=j1;
  document.getElementById("v1").innerHTML=v1;
  document.getElementById("s1").innerHTML=s1;
  document.getElementById("d1").innerHTML=d1;



  var x2 = data.feed.entry[2].gsx$lunes.$t;
  var y2 = data.feed.entry[2].gsx$martes.$t;
  var w2 = data.feed.entry[2].gsx$miercoles.$t;
  var j2 = data.feed.entry[2].gsx$jueves.$t;
  var v2 = data.feed.entry[2].gsx$viernes.$t;
  var s2 = data.feed.entry[2].gsx$sabado.$t;
  var d2 = data.feed.entry[2].gsx$domingo.$t;

  
  document.getElementById("l2").innerHTML=x2;
  document.getElementById("m2").innerHTML=y2;
  document.getElementById("w2").innerHTML=w2;
  document.getElementById("j2").innerHTML=j2;
  document.getElementById("v2").innerHTML=v2;
  document.getElementById("s2").innerHTML=s2;
  document.getElementById("d2").innerHTML=d2;



  var x3 = data.feed.entry[3].gsx$lunes.$t;
  var y3 = data.feed.entry[3].gsx$martes.$t;
  var w3 = data.feed.entry[3].gsx$miercoles.$t;
  var j3 = data.feed.entry[3].gsx$jueves.$t;
  var v3 = data.feed.entry[3].gsx$viernes.$t;
  var s3 = data.feed.entry[3].gsx$sabado.$t;
  var d3 = data.feed.entry[3].gsx$domingo.$t;

  
  document.getElementById("l3").innerHTML=x3;
  document.getElementById("m3").innerHTML=y3;
  document.getElementById("w3").innerHTML=w3;
  document.getElementById("j3").innerHTML=j3;
  document.getElementById("v3").innerHTML=v3;
  document.getElementById("s3").innerHTML=s3;
  document.getElementById("d3").innerHTML=d3;



  
  var x4 = data.feed.entry[4].gsx$lunes.$t;
  var y4 = data.feed.entry[4].gsx$martes.$t;
  var w4 = data.feed.entry[4].gsx$miercoles.$t;
  var j4 = data.feed.entry[4].gsx$jueves.$t;
  var v4 = data.feed.entry[4].gsx$viernes.$t;
  var s4 = data.feed.entry[4].gsx$sabado.$t;
  var d4 = data.feed.entry[4].gsx$domingo.$t;

  
  document.getElementById("l4").innerHTML=x4;
  document.getElementById("m4").innerHTML=y4;
  document.getElementById("w4").innerHTML=w4;
  document.getElementById("j4").innerHTML=j4;
  document.getElementById("v4").innerHTML=v4;
  document.getElementById("s4").innerHTML=s4;
  document.getElementById("d4").innerHTML=d4;



  
  var x5 = data.feed.entry[5].gsx$lunes.$t;
  var y5 = data.feed.entry[5].gsx$martes.$t;
  var w5 = data.feed.entry[5].gsx$miercoles.$t;
  var j5 = data.feed.entry[5].gsx$jueves.$t;
  var v5 = data.feed.entry[5].gsx$viernes.$t;
  var s5 = data.feed.entry[5].gsx$sabado.$t;
  var d5 = data.feed.entry[5].gsx$domingo.$t;

  
  document.getElementById("l5").innerHTML=x5;
  document.getElementById("m5").innerHTML=y5;
  document.getElementById("w5").innerHTML=w5;
  document.getElementById("j5").innerHTML=j5;
  document.getElementById("v5").innerHTML=v5;
  document.getElementById("s5").innerHTML=s5;
  document.getElementById("d5").innerHTML=d5;


  
  var x6 = data.feed.entry[6].gsx$lunes.$t;
  var y6 = data.feed.entry[6].gsx$martes.$t;
  var w6 = data.feed.entry[6].gsx$miercoles.$t;
  var j6 = data.feed.entry[6].gsx$jueves.$t;
  var v6 = data.feed.entry[6].gsx$viernes.$t;
  var s6 = data.feed.entry[6].gsx$sabado.$t;
  var d6 = data.feed.entry[6].gsx$domingo.$t;

  
  document.getElementById("l6").innerHTML=x6;
  document.getElementById("m6").innerHTML=y6;
  document.getElementById("w6").innerHTML=w6;
  document.getElementById("j6").innerHTML=j6;
  document.getElementById("v6").innerHTML=v6;
  document.getElementById("s6").innerHTML=s6;
  document.getElementById("d6").innerHTML=d6;



  
  var x7 = data.feed.entry[7].gsx$lunes.$t;
  var y7 = data.feed.entry[7].gsx$martes.$t;
  var w7 = data.feed.entry[7].gsx$miercoles.$t;
  var j7 = data.feed.entry[7].gsx$jueves.$t;
  var v7 = data.feed.entry[7].gsx$viernes.$t;
  var s7 = data.feed.entry[7].gsx$sabado.$t;
  var d7 = data.feed.entry[7].gsx$domingo.$t;

  
  document.getElementById("l7").innerHTML=x7;
  document.getElementById("m7").innerHTML=y7;
  document.getElementById("w7").innerHTML=w7;
  document.getElementById("j7").innerHTML=j7;
  document.getElementById("v7").innerHTML=v7;
  document.getElementById("s7").innerHTML=s7;
  document.getElementById("d7").innerHTML=d7;



  
  var x8 = data.feed.entry[8].gsx$lunes.$t;
  var y8 = data.feed.entry[8].gsx$martes.$t;
  var w8 = data.feed.entry[8].gsx$miercoles.$t;
  var j8 = data.feed.entry[8].gsx$jueves.$t;
  var v8 = data.feed.entry[8].gsx$viernes.$t;
  var s8 = data.feed.entry[8].gsx$sabado.$t;
  var d8 = data.feed.entry[8].gsx$domingo.$t;

  
  document.getElementById("l8").innerHTML=x8;
  document.getElementById("m8").innerHTML=y8;
  document.getElementById("w8").innerHTML=w8;
  document.getElementById("j8").innerHTML=j8;
  document.getElementById("v8").innerHTML=v8;
  document.getElementById("s8").innerHTML=s8;
  document.getElementById("d8").innerHTML=d8;



  var x9 = data.feed.entry[9].gsx$lunes.$t;
  var y9 = data.feed.entry[9].gsx$martes.$t;
  var w9 = data.feed.entry[9].gsx$miercoles.$t;
  var j9 = data.feed.entry[9].gsx$jueves.$t;
  var v9 = data.feed.entry[9].gsx$viernes.$t;
  var s9 = data.feed.entry[9].gsx$sabado.$t;
  var d9 = data.feed.entry[9].gsx$domingo.$t;

  
  document.getElementById("l9").innerHTML=x9;
  document.getElementById("m9").innerHTML=y9;
  document.getElementById("w9").innerHTML=w9;
  document.getElementById("j9").innerHTML=j9;
  document.getElementById("v9").innerHTML=v9;
  document.getElementById("s9").innerHTML=s9;
  document.getElementById("d9").innerHTML=d9;


  var x10 = data.feed.entry[10].gsx$lunes.$t;
  var y10 = data.feed.entry[10].gsx$martes.$t;
  var w10 = data.feed.entry[10].gsx$miercoles.$t;
  var j10 = data.feed.entry[10].gsx$jueves.$t;
  var v10 = data.feed.entry[10].gsx$viernes.$t;
  var s10 = data.feed.entry[10].gsx$sabado.$t;
  var d10 = data.feed.entry[10].gsx$domingo.$t;

  
  document.getElementById("l10").innerHTML=x10;
  document.getElementById("m10").innerHTML=y10;
  document.getElementById("w10").innerHTML=w10;
  document.getElementById("j10").innerHTML=j10;
  document.getElementById("v10").innerHTML=v10;
  document.getElementById("s10").innerHTML=s10;
  document.getElementById("d10").innerHTML=d10;
  



  var x11 = data.feed.entry[11].gsx$lunes.$t;
  var y11 = data.feed.entry[11].gsx$martes.$t;
  var w11 = data.feed.entry[11].gsx$miercoles.$t;
  var j11 = data.feed.entry[11].gsx$jueves.$t;
  var v11 = data.feed.entry[11].gsx$viernes.$t;
  var s11 = data.feed.entry[11].gsx$sabado.$t;
  var d11 = data.feed.entry[11].gsx$domingo.$t;

  
  document.getElementById("l11").innerHTML=x11;
  document.getElementById("m11").innerHTML=y11;
  document.getElementById("w11").innerHTML=w11;
  document.getElementById("j11").innerHTML=j11;
  document.getElementById("v11").innerHTML=v11;
  document.getElementById("s11").innerHTML=s11;
  document.getElementById("d11").innerHTML=d11;
  


  
  var x12 = data.feed.entry[12].gsx$lunes.$t;
  var y12 = data.feed.entry[12].gsx$martes.$t;
  var w12 = data.feed.entry[12].gsx$miercoles.$t;
  var j12 = data.feed.entry[12].gsx$jueves.$t;
  var v12 = data.feed.entry[12].gsx$viernes.$t;
  var s12 = data.feed.entry[12].gsx$sabado.$t;
  var d12 = data.feed.entry[12].gsx$domingo.$t;

  
  document.getElementById("l12").innerHTML=x12;
  document.getElementById("m12").innerHTML=y12;
  document.getElementById("w12").innerHTML=w12;
  document.getElementById("j12").innerHTML=j12;
  document.getElementById("v12").innerHTML=v12;
  document.getElementById("s12").innerHTML=s12;
  document.getElementById("d12").innerHTML=d12;
  
  
  
  
  





  
  });

	
	
	

	
  });

  