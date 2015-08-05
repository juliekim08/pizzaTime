$(function() {
    var city = '';

    $('.city-links li a').on('click', function() {
        $('a').removeClass('active');
        if ($(this).hasClass('active') === false) {
            $(this).addClass('active');
        }
        $('.banner').slideUp();
        window.city = $(this).attr('href');

        if (window.city != "") {
            var newCity = $('div.city-content').find(window.city);
        }
        newCity.show().siblings().hide();
        newCity.siblings().addClass('hidden');
        newCity.removeClass('hidden');
        return window.city;
    });

     $('.header').on('click',function(){
        $('.city-content > div').addClass('hidden').hide();
        $('.banner').slideDown();
    });

  //    var pizzaOptions = [
  //   {
  //     name: 'Meatballs on Meatballs on More Meatballs',
  //     toppings: 'Pepperoni Meatball, Chorizo Meatball, Turkey Meatball'
  //   },
  //   {
  //     name: 'You Don\'t Make Friends with Salad',
  //     toppings: 'Mushrooms'
  //   },
  //   {
  //     name: 'More Cheese Please',
  //     toppings: 'Mozaraella, Asiago, Pepperjack, Cheddar, Goat Cheese, Prolone'
  //   }
  // ]
  // for (var i = 0; i < pizzaOptions.length; i++){
  //   $('#pizzaType').append('<option value="' + i + '">' + pizzaOptions[i]['name']+'</option>');
//   $('.pizzaDisplay').append('<option value="' + i + '">' + pizzaOptions[i]['name']+'</option>')
  // }

});
    //Future Feature: Easy City Add for New Franchase. In Testing for Q4
    // var cityArray = ["San Francisco", "Chicago", "New York"];
    // //To add a list of the new Franchise city, enter the city name between the "" and uncomment the link below.
    // // cityArray.push("Enter new City Here");
    // for (var i = 0; i < cityArray.length; i++) {
    // $('.city-links').append('<li><a href="#' + cityArray[i] +'">'+cityArray[i]+'</a></li>');
    // }
    //Future Feature: Online Order. Still in progress for Q3 Release
    // var price = '';
    // if ($('#pizzaType').val() == 'pizza1') {
    //     price = 10;
    // } else if ($('#pizzaType').val() == 'pizza2') {
    //     price = 12;
    // } else if ($('#pizzaType').val() == 'pizza3') {
    //     price = 14;
    // }
    // var qty = '';
    // if ($('#pizzaQty').val() == '1') {
    //     qty = 1;
    // } else if ($('#pizzaQty').val() == '2') {
    //     qty = 2;
    // } else if ($('#pizzaQty').val() == '3') {
    //     qty = 3;
    // }
    // var pizzaTotal = price * qty;
    // console.log(pizzaTotal);

    //For Versioning Control Purposes Only. Code was adjusted on 8/4/2015

    // $('.city-links li a').on('click', function() {
    //     $('a').removeClass('active');
    //     if ($(this).hasClass('active') === false) {
    //         $(this).addClass('active');
    //     }
    //     $('.banner').slideUp();
    //     window.city = $(this).attr('href');
    //     if (window.city == '#SanFrancisco') {
    //         $('#SanFrancisco').show().siblings().hide();
    //         $('#SanFrancisco').siblings().addClass('hidden');
    //         $('#SanFrancisco').removeClass('hidden');
    //     } else if (window.city == '#Chicago') {
    //         $('#Chicago').show().siblings().hide();
    //         $('#Chicago').siblings().addClass('hidden');
    //         $('#Chicago').removeClass('hidden');
    //     } else if (window.city == '#NewYork') {
    //         $('#NewYork').show().siblings().hide();
    //         $('#NewYork').siblings().addClass('hidden');
    //         $('#NewYork').removeClass('hidden');
    //     }
    //     return window.city;
    // });








