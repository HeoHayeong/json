// loadData('../Json/char.json');
$(".spao").hide();

$(".spaobtn").click(function(){
    $(".spao").show();
    $(".basic").hide();
})

$(".basicbtn").click(function(){
    $(".basic").show();
    $(".spao").hide();
})

$(".korea").hide();
$(".rabbit").hide();

$(".korbtn").click(function(){
    $(".korea").show();
    $(".fruit").hide();
    $(".rabbit").hide();
})

$(".frubtn").click(function(){
    $(".fruit").show();
    $(".korea").hide();
    $(".rabbit").hide();
})

$(".rabtn").click(function(){
    $(".rabbit").show();
    $(".fruit").hide();
    $(".korea").hide();
})





$('.portfolio-item').click(function(){

    var charindex = parseInt($(event.target).parents(".portfolioAll").children(".portfolio-item").attr("data-number"));
    loadData('../Json/char.json',charindex, "character/");
    // console.log($(event.target))

})

$('.kart-item').click(function(){
    var kartindex = parseInt($(event.target).parents(".kartAll").children(".kart-item").attr("data-number"));
    console.log(kartindex)
    loadData('../Json/kart.json',kartindex, "kart/");
  
})




function loadData(url,index, imagePath){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(JSON.parse(this.responseText), index, imagePath);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function parseXML(data, index, imagePath){
    
    $(".name").text(data[0].members[index].name);
    $(".img2").attr("src", 'assets/img/'+imagePath + data[0].members[index].img2);
    $(".strength").text(data[0].members[index].strength);
    $(".intro").text(data[0].members[index].intro);
    $(".type").text(data[0].members[index].type);
    $(".func").text(data[0].members[index].func);
    

    // $(".kname").text(data[0].karts[kartindex].kname);
}
