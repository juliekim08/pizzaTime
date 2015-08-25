$(function() {
    var pizzaOptions = {
        "SanFrancisco": {
            city: "San Francisco",
            name: "Michaelangelo Says",
            about: "San Francisco\'s location and home to the sourdough crust",
            detailedLocation: "Greenwich and Fillmore, San Francisco, CA",
            pizzas: [
                {
                    name: 'Meatballs on Meatballs on More Meatballs',
                    toppings: 'Pepperoni Meatball, Chorizo Meatball, Turkey Meatball'
                }, {
                    name: 'You Don\'t Make Friends with Salad',
                    toppings: 'Mushrooms'
                }, {
                    name: 'More Cheese Please',
                    toppings: 'Mozaraella, Asiago, Pepperjack, Cheddar, Goat Cheese, Prolone'
                }]
        },
        "Chicago": {
            city: "Chicago",
            name: "Leonardo\s Pizza Loft",
            about: "Chicago is the first location and home of the deep dish pretzel crust.",
            detailedLocation: "Division and Milwaukee, Chicago, IL",
            pizzas: [
                {
                    name: 'Meat Mania',
                    toppings: 'Hamburger, Steak, Bacon, Pepperoni and Ham'
                }, {
                    name: 'Veggie-tastic',
                    toppings: 'Broccoli, Onions, Mushrooms and Red Pepper'
                }, {
                    name: 'Pretzel Pie',
                    toppings: 'Cheddar and Mozaraella'
                }]
        },
        "NewYork": {
            city: "New York",
            name: "Raphael's Refuge",
            about: "New York location and home of the foccaccia",
            detailedLocation: "E. 6th St and 2nd Ave , New York, NY",
            pizzas: [
                {
                    name: 'You\'re So Fancy',
                    toppings: 'Bacon, Pepperoni, Garlic and Truffle Oil'
                }, {
                    name: 'Hot Sauce On My Hot Sauce',
                    toppings: 'Habanero, Siracha, Asparagus and Mushrooms'
                }, {
                    name: 'The Classic',
                    toppings: 'Mozaraella and Basil'
                }]
        }

    };

    function populateToppings(pos) {
        var index = 0;
        $("#pizzaType option:selected").each(function(i, item) {
            index = item.index;
        });
        var toppings = pos["pizzas"][index]["toppings"];
        $("#pizza-description").html(toppings);
    }

    function populateCityAttributes(city) {
        var pos = pizzaOptions[city], $pizzaType = $("#pizzaType");
        $("#title").html(pos["name"]);
        $("#city-detail-location").html(pos["detailedLocation"]);
        $pizzaType.html("");
        $.each(pos["pizzas"], function(idx, item) {
            $pizzaType.append("<option value=" + idx +">" + item["name"] + "</option>");
        });
        $pizzaType.change(function() {
            populateToppings(pos);
        });
        populateToppings(pos);
    }

    $('.city-links li a').on('click', function() {
        $('a').removeClass('active');
        if ($(this).hasClass('active') === false) {
            $(this).addClass('active');
        }
        $('.banner').slideUp();
        var city = $(this).attr("href").substring(1);
        if (city) {
            $("#default").addClass("hidden");
            $("#city-template").removeClass("hidden");
            populateCityAttributes(city);
        } else {
            $("#city-template").addClass("hidden");
            $("#default").removeClass("hidden");
        }
    });

    $('.header').on('click',function(){
        $('.city-content > div').addClass('hidden').hide();
        $('.banner').slideDown();
    });

    if (window.location.hash.substring(1)) {
        populateCityAttributes(window.location.hash.substring(1));
    }

});
