$(document).ready(function () {
    var slide = 0; //varijabla koja sprema trenutnu vrijednost left propertyja

    $('#next').on('click', function () {
        var currentImg = $('.active')
        var nextImg = currentImg.next() //postavljanje trenutne i sljedece slike

        if(nextImg.length){
            slide -= $(".active").width();
            $('#slider').animate({left: slide}, 500) //racunanje slidea za duljinu slike i animacija
            currentImg.removeClass('active')
            nextImg.addClass('active') //sljedeca slika je postavljena kao trenutno aktivna (u fokusu)
        }

        if(!nextImg.next().length){
            $('#next').attr("src", "./assets/arrow-gray-right.png") //ukoliko je slider na zadnjoj slici, repozicioniraj slide i postavi strelicu na sivu
            $('#slider').animate({left: -250}, 500)
            slide = -250;
        }else $('#prev').attr("src", "./assets/arrow-blue-left.png")
    })

    $('#prev').on('click', function () {
        var currentImg = $('.active')
        var prevImg = currentImg.prev()

        if(prevImg.length){
            slide += $(".active").width();
            $('#slider').animate({left: slide}, 500)
            currentImg.removeClass('active')
            prevImg.addClass('active')
        }
        console.log(slide)
        if(!prevImg.prev().length){
            $('#prev').attr("src", "./assets/arrow-gray-left.png")
            $('#slider').animate({left: 975}, 500)
            slide = 975;
        }else $('#next').attr("src", "./assets/arrow-blue-right.png")
    })
});