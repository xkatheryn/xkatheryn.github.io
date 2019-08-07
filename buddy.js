$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

function myInfo(){
  var city = document.getElementById("city").value;
  document.getElementById("demo").innerHTML = city;

  var budget = document.getElementById("budget").value;
  document.getElementById("demo1").innerHTML = budget;

  getResturants(city,budget);

  var relax = document.getElementById("relax").value;

  var thrill = document.getElementById("thrill").value;

  var adventure = document.getElementById("adventure").value;

  var historical = document.getElementById("historical").value;

  getActivities(city, budget,relax,thrill,adventure,historical);

  var start1 = document.getElementById("start1").value;
  document.getElementById("demo6").innerHTML = start1;

  var end1 = document.getElementById("end1").value;
  document.getElementById("demo7").innerHTML = end1;


}

function getResturants(city, budget){
  if (city=="Chicago, IL"){
    if (budget=="$0-$500"){
      document.getElementById("restaurant1").innerHTML ="Portillos"
      document.getElementById("restaurant2").innerHTML ="Epic Burger"
      document.getElementById("restaurant3").innerHTML ="Velvet Taco"
    }
    if (budget=="$500-$1,000"){
      document.getElementById("restaurant1").innerHTML ="The Purple Pig"
      document.getElementById("restaurant2").innerHTML ="The Hampton Social"
      document.getElementById("restaurant3").innerHTML ="Frontera Grill"
    }
    if (budget=="$1,000+"){
      document.getElementById("restaurant1").innerHTML ="The Signature Rooom"
      document.getElementById("restaurant2").innerHTML ="The Capital Grill"
      document.getElementById("restaurant3").innerHTML ="Shanghai Terrace"
    }
  }
  if (city=="Orlando, FL"){
    if (budget=="$0-$500"){
      document.getElementById("restaurant1").innerHTML ="Krispy Kreme"
      document.getElementById("restaurant2").innerHTML ="Pineapple Lanair"
      document.getElementById("restaurant3").innerHTML ="Border Grill Fresh Mex"
    }
    if (budget=="$500-$1,000"){
      document.getElementById("restaurant1").innerHTML ="Keke's Breakfast Cafe"
      document.getElementById("restaurant2").innerHTML ="The Sanctum Cafe"
      document.getElementById("restaurant3").innerHTML ="Hempishere Restaurant"
    }
    if (budget=="$1,000+"){
      document.getElementById("restaurant1").innerHTML ="The Melting Pot"
      document.getElementById("restaurant2").innerHTML ="Norman's"
      document.getElementById("restaurant3").innerHTML ="Kadence"
    }
  }
  if (city=="Los Angeles, CA"){
    if (budget=="$0-$500"){
      document.getElementById("restaurant1").innerHTML ="In n Out"
      document.getElementById("restaurant2").innerHTML ="Phliz Coffee"
      document.getElementById("restaurant3").innerHTML ="Sonaratown"
    }
    if (budget=="$500-$1,000"){
      document.getElementById("restaurant1").innerHTML ="Urth Cafe"
      document.getElementById("restaurant2").innerHTML ="The Exchange"
      document.getElementById("restaurant3").innerHTML ="Badmaash"
    }
    if (budget=="$1,000+"){
      document.getElementById("restaurant1").innerHTML ="Nobu"
      document.getElementById("restaurant2").innerHTML ="Providence"
      document.getElementById("restaurant3").innerHTML ="The Palms"
    }
  }

  if (city=="Cancun, MX"){
    if (budget=="$0-$500"){
      document.getElementById("restaurant1").innerHTML ="The Sufrin' Burrito"
      document.getElementById("restaurant2").innerHTML ="Pescadillo el Galeon"
      document.getElementById("restaurant3").innerHTML ="Gory Tacos"
    }
    if (budget=="$500-$1,000"){
      document.getElementById("restaurant1").innerHTML ="La Destileria"
      document.getElementById("restaurant2").innerHTML ="Labna"
      document.getElementById("restaurant3").innerHTML ="La Parilla Cancun"
    }
    if (budget=="$1,000+"){
      document.getElementById("restaurant1").innerHTML ="Lorenzillo's"
      document.getElementById("restaurant2").innerHTML ="Bovino's"
      document.getElementById("restaurant3").innerHTML ="Traitoria Limoncello"
    }
  }
}




function getActivities(city, budget,relax,thrill,adventure,historical){
  if (city=="Chicago, IL"){
    if (relax=="yes"){
      document.getElementById("activity1").innerHTML ="The Chicago Theatre"
      document.getElementById("activity2").innerHTML ="The Peninsula Spa"
      document.getElementById("activity3").innerHTML ="Oxygen Spa"

    } else {
      document.getElementById("activity1").innerHTML = ""
      document.getElementById("activity2").innerHTML = ""
      document.getElementById("activity3").innerHTML = ""
    }

    if (thrill=="yes"){
      document.getElementById("activity4").innerHTML ="Six Flags Great America"
      document.getElementById("activity5").innerHTML ="IFly"
      document.getElementById("activity6").innerHTML ="13th Floor Haunted House"
    } else {
      document.getElementById("activity4").innerHTML =""
      document.getElementById("activity5").innerHTML =""
      document.getElementById("activity6").innerHTML =""
    }

    if (adventure=="yes"){
      document.getElementById("activity7").innerHTML ="Starved Rock"
      document.getElementById("activity8").innerHTML ="Lake Michigan"
      document.getElementById("activity9").innerHTML ="Millenium Park"
    } else {
      document.getElementById("activity7").innerHTML =""
      document.getElementById("activity8").innerHTML =""
      document.getElementById("activity9").innerHTML =""
    }

    if (historical=="yes"){
      document.getElementById("activity10").innerHTML ="Science and Industry Museum"
      document.getElementById("activity11").innerHTML ="Art Institute Museum"
      document.getElementById("activity12").innerHTML ="The Field Museum"
    } else {
      document.getElementById("activity10").innerHTML =""
      document.getElementById("activity11").innerHTML =""
      document.getElementById("activity12").innerHTML =""
    }
  }

  if (city=="Orlando, FL"){
    if (relax=="yes"){
      document.getElementById("activity1").innerHTML ="The Ritz-Carlton Spa"
      document.getElementById("activity2").innerHTML ="Orlando Float and Massage"
      document.getElementById("activity3").innerHTML ="Serenity Spa"
    } else {
      document.getElementById("activity1").innerHTML =""
      document.getElementById("activity2").innerHTML =""
      document.getElementById("activity3").innerHTML =""
    }
    if (thrill=="yes"){
      document.getElementById("activity4").innerHTML ="Universal Studios"
      document.getElementById("activity5").innerHTML ="Disney World"
      document.getElementById("activity6").innerHTML ="Sea World"
    }else {
      document.getElementById("activity4").innerHTML =""
      document.getElementById("activity5").innerHTML =""
      document.getElementById("activity6").innerHTML =""
    }
    if (adventure=="yes"){
      document.getElementById("activity7").innerHTML ="Discovery Cove"
      document.getElementById("activity8").innerHTML ="Sea Life"
      document.getElementById("activity9").innerHTML ="Daytona Beach"
    }else {
      document.getElementById("activity7").innerHTML =""
      document.getElementById("activity8").innerHTML =""
      document.getElementById("activity9").innerHTML =""
    }
    if (historical=="yes"){
      document.getElementById("activity10").innerHTML ="Titanic: The Artifact Exhibition"
      document.getElementById("activity11").innerHTML ="The Holocaust Museum"
      document.getElementById("activity12").innerHTML ="The Holy Land Experience"
    }else {
      document.getElementById("activity10").innerHTML =""
      document.getElementById("activity11").innerHTML =""
      document.getElementById("activity12").innerHTML =""
    }
  }

  if (city=="Los Angeles, CA"){
    if (relax=="yes"){
      document.getElementById("activity1").innerHTML ="Wi Spa"
      document.getElementById("activity2").innerHTML ="Ciel Spa"
      document.getElementById("activity3").innerHTML ="Grand Spa"
    } else {
      document.getElementById("activity1").innerHTML =""
      document.getElementById("activity2").innerHTML =""
      document.getElementById("activity3").innerHTML =""
    }
    if (thrill=="yes"){
      document.getElementById("activity4").innerHTML ="Universal Studios"
      document.getElementById("activity5").innerHTML ="Disney Land"
      document.getElementById("activity6").innerHTML ="OUE SkySpace LA"
    }else {
      document.getElementById("activity4").innerHTML =""
      document.getElementById("activity5").innerHTML =""
      document.getElementById("activity6").innerHTML =""
    }
    if (adventure=="yes"){
      document.getElementById("activity7").innerHTML ="Hollywood Sign"
      document.getElementById("activity8").innerHTML ="Venice Beach"
      document.getElementById("activity9").innerHTML ="Warner Bros. Studios"
    }else {
      document.getElementById("activity7").innerHTML =""
      document.getElementById("activity8").innerHTML =""
      document.getElementById("activity9").innerHTML =""
    }
    if (historical=="yes"){
      document.getElementById("activity10").innerHTML ="The Broad"
      document.getElementById("activity11").innerHTML ="MODS Musuem"
      document.getElementById("activity12").innerHTML ="The Museuem of Contemporary Art"
    }else {
      document.getElementById("activity10").innerHTML =""
      document.getElementById("activity11").innerHTML =""
      document.getElementById("activity12").innerHTML =""
    }
  }

  if (city=="Cancun, MX"){
    if (relax=="yes"){
      document.getElementById("activity1").innerHTML ="The Spa"
      document.getElementById("activity2").innerHTML ="Stones Hair and Spa"
      document.getElementById("activity3").innerHTML ="It's Yoga"
    } else {
      document.getElementById("activity1").innerHTML =""
      document.getElementById("activity2").innerHTML =""
      document.getElementById("activity3").innerHTML =""
    }
    if (thrill=="yes"){
      document.getElementById("activity4").innerHTML ="Xplor Park Ziplining"
      document.getElementById("activity5").innerHTML ="Cancun ATV"
      document.getElementById("activity6").innerHTML ="Boca del Puma"
    }else {
      document.getElementById("activity4").innerHTML =""
      document.getElementById("activity5").innerHTML =""
      document.getElementById("activity6").innerHTML =""
    }
    if (adventure=="yes"){
      document.getElementById("activity7").innerHTML ="Chichen Itza"
      document.getElementById("activity8").innerHTML ="Playa Tortugas"
      document.getElementById("activity9").innerHTML ="Biosphere Reserve"
    }else {
      document.getElementById("activity7").innerHTML =""
      document.getElementById("activity8").innerHTML =""
      document.getElementById("activity9").innerHTML =""
    }
    if (historical=="yes"){
      document.getElementById("activity10").innerHTML ="Mueso Maya"
      document.getElementById("activity11").innerHTML ="Cancun Underwater Musuem"
      document.getElementById("activity12").innerHTML ="Casa de la Cultura"
    }else {
      document.getElementById("activity10").innerHTML =""
      document.getElementById("activity11").innerHTML =""
      document.getElementById("activity12").innerHTML =""
    }
  }
}

var final = [];
var finalrest=[];
function myFinal(){
  var checkbox1 = document.getElementById("checkbox1");
// If the checkbox is checked, display the output text
if (checkbox1.checked == true){
  var act1 = document.getElementById("activity1").innerText;
  final.push(act1);
}


var checkbox2 = document.getElementById("checkbox2");
if (checkbox2.checked == true){
  var act2 = document.getElementById("activity2").innerText;
  final.push(act2);
}

var checkbox3 = document.getElementById("checkbox3");
if (checkbox3.checked == true){
  var act3 = document.getElementById("activity3").innerText;
  final.push(act3);
}

var checkbox4 = document.getElementById("checkbox4");
if (checkbox4.checked == true){
  var act4 = document.getElementById("activity4").innerText;
  final.push(act4);
}

var checkbox5 = document.getElementById("checkbox5");
if (checkbox5.checked == true){
  var act5 = document.getElementById("activity5").innerText;
  final.push(act5);
}

var checkbox6 = document.getElementById("checkbox6");
if (checkbox6.checked == true){
  var act6 = document.getElementById("activity6").innerText;
  final.push(act6);
}

var checkbox7 = document.getElementById("checkbox7");
if (checkbox7.checked == true){
  var act7 = document.getElementById("activity7").innerText;
  final.push(act7);
}


var checkbox8 = document.getElementById("checkbox8");
if (checkbox8.checked == true){
  var act8 = document.getElementById("activity8").innerText;
  final.push(act8);
}

var checkbox9 = document.getElementById("checkbox9");
if (checkbox9.checked == true){
  var act9 = document.getElementById("activity9").innerText;
  final.push(act9);
}

var checkbox10 = document.getElementById("checkbox10");
if (checkbox10.checked == true){
  var act10 = document.getElementById("activity10").innerText;
  final.push(act10);
}

var checkbox11 = document.getElementById("checkbox11");
if (checkbox11.checked == true){
  var act11 = document.getElementById("activity11").innerText;
  final.push(act11);
}

var checkbox12 = document.getElementById("checkbox12");
if (checkbox12.checked == true){
  var act12 = document.getElementById("activity12").innerText;
  final.push(act12);
}

var checkbox13 = document.getElementById("checkbox13");
if (checkbox13.checked == true){
  var rest1 = document.getElementById("restaurant1").innerText;
  finalrest.push(rest1);
}


var checkbox14 = document.getElementById("checkbox14");
if (checkbox14.checked == true){
  var rest2 = document.getElementById("restaurant2").innerText;
  finalrest.push(rest2);
}

var checkbox15 = document.getElementById("checkbox15");
if (checkbox15.checked == true){
  var rest3 = document.getElementById("restaurant3").innerText;
  finalrest.push(rest3);
}

actlen = final.length;
text1 = "<ul>";
for (i = 0; i < actlen; i++) {
  text1 += "<li>" + final[i] + "</li>";
}
text1 += "</ul>";

document.getElementById("demo25").innerHTML = text1;

restlen = finalrest.length;
text2 = "<ul>";
for (i = 0; i < restlen; i++) {
  text2 += "<li>" + finalrest[i] + "</li>";
}
text2 += "</ul>";

document.getElementById("demo26").innerHTML=text2;

}

function on(){
  document.getElementById("overlay").style.display="block";
}
function off(){
  document.getElementById("overlay").style.display="none";
}


//   if city=="Chicago, IL"{
//     if budget=="$0-$500"{
//       document.getElementById("restaurant1").innerHTML ="Portillos"
//       document.getElementById("restaurant2").innerHTML ="Epic Burger"
//       document.getElementById("restaurant3").innerHTML ="Velvet Taco"
//     }
//     if budget=="$500-$1,000"{
//       document.getElementById("restaurant1").innerHTML ="The Purple Pig"
//       document.getElementById("restaurant2").innerHTML ="The Hampton Social"
//       document.getElementById("restaurant3").innerHTML ="Frontera Grill"
//     }
//     if budget=="$1,000+"{
//       document.getElementById("restaurant1").innerHTML ="The Signature Rooom"
//       document.getElementById("restaurant2").innerHTML ="The Capital Grill"
//       document.getElementById("restaurant3").innerHTML ="Shanghai Terrace"
//     }
//     if relax=="yes"{
//       document.getElementById("activity1").innerHTML ="The Chicago Theatre"
//       document.getElementById("activity2").innerHTML ="The Peninsula Spa"
//       document.getElementById("activity3").innerHTML ="Oxygen Spa"
//     }
//     if thrill=="yes"{
//       document.getElementById("activity1").innerHTML ="Six Flags Great America""
//       document.getElementById("activity2").innerHTML ="IFly"
//       document.getElementById("activity3").innerHTML ="13th Floor Haunted House"
//     }
//     if adventure=="yes"{
//       document.getElementById("activity1").innerHTML ="Starved Rock"
//       document.getElementById("activity2").innerHTML ="Lake Michigan"
//       document.getElementById("activity3").innerHTML ="Millenium Park"
//     }
//     if historical=="yes"{
//       document.getElementById("activity1").innerHTML ="Science and Industry Museum"
//       document.getElementById("activity2").innerHTML ="Art Institute Museum"
//       document.getElementById("activity3").innerHTML ="The Field Museum"
//     }
//     if city=="Chicago, IL"{
//       if budget=="$0-$500"{
//         document.getElementById("restaurant1").innerHTML ="Portillos"
//         document.getElementById("restaurant2").innerHTML ="Epic Burger"
//         document.getElementById("restaurant3").innerHTML ="Velvet Taco"
//       }
//       if budget=="$500-$1,000"{
//         document.getElementById("restaurant1").innerHTML ="The Purple Pig"
//         document.getElementById("restaurant2").innerHTML ="The Hampton Social"
//         document.getElementById("restaurant3").innerHTML ="Frontera Grill"
//       }
//       if budget=="$1,000+"{
//         document.getElementById("restaurant1").innerHTML ="The Signature Rooom"
//         document.getElementById("restaurant2").innerHTML ="The Capital Grill"
//         document.getElementById("restaurant3").innerHTML ="Shanghai Terrace"
//       }
//       if relax=="yes"{
//         document.getElementById("activity1").innerHTML ="The Chicago Theatre"
//         document.getElementById("activity2").innerHTML ="The Peninsula Spa"
//         document.getElementById("activity3").innerHTML ="Oxygen Spa"
//       }
//       if thrill=="yes"{
//         document.getElementById("activity1").innerHTML ="Six Flags Great America""
//         document.getElementById("activity2").innerHTML ="IFly"
//         document.getElementById("activity3").innerHTML ="13th Floor Haunted House"
//       }
//       if adventure=="yes"{
//         document.getElementById("activity1").innerHTML ="Starved Rock"
//         document.getElementById("activity2").innerHTML ="Lake Michigan"
//         document.getElementById("activity3").innerHTML ="Millenium Park"
//       }
//       if historical=="yes"{
//         document.getElementById("activity1").innerHTML ="Science and Industry Museum"
//         document.getElementById("activity2").innerHTML ="Art Institute Museum"
//         document.getElementById("activity3").innerHTML ="The Field Museum"
//       }
//     }
// }
  //var breakfast = document.getElementById("breakfast").value;
  //document.getElementById("demo6").innerHTML = breakfast;

  //var lunch = document.getElementById("lunch").value;
  //document.getElementById("demo7").innerHTML = lunch;

  //var dinner = document.getElementById("dinner").value;
  //document.getElementById("demo8").innerHTML = dinner;
