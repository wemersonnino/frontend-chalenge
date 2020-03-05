$(document).ready(function() {

    $(".btn-menu").click(function() {
        $(".menu").show();
    });
    $(".btn-close").click(function() {
        $(".menu").hide();
    });

    //function get dados api
    /*function function_name(argument) {
        // body... 
    }*/

    let url = 'https://swapi.co/api/people/';
    $.getJSON(url, function(cardStarWars) {
        //console.log(cardStarWars.results);
        let v = cardStarWars.results;
        for (var i = 0; i < v.length; i++) {
            //console.log(v[i]);
        };
        $("input:nth-child(1)").attr('value', cardStarWars.name);
        $("input:nth-child(2)").attr('value', cardStarWars.birth_year);
        $('input:nth-child(3)').attr('value', cardStarWars.eye_color);
        $('input:nth-child(4)').attr('value', cardStarWars.gender);
        $('input:nth-child(5)').attr('value', cardStarWars.hair_color);
        $('input:nth-child(6)').attr('value', cardStarWars.height);
        $('input:nth-child(7)').attr('value', cardStarWars.mass);
        $('input:nth-child(8)').attr('value', cardStarWars.skin_color);
        $('input:nth-child(9)').attr('value', cardStarWars.homeworld);
        $('input:nth-child(10)').attr('value', cardStarWars.films);
        $('input:nth-child(11)').attr('value', cardStarWars.species);
    });

    //# pesquisa catalogo
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
    };

    //# function get url id
    var id = getUrlParameter('id');
    var urlId = 'https://swapi.co/api/people/' + id;
    $.getJSON(urlId, function(cardStarWars) {
        //console.log(cardStarWars.name);
        $("input:nth-child(1)").attr('value', cardStarWars.name);
        $("input:nth-child(2)").attr('value', cardStarWars.birth_year);
        $('input:nth-child(3)').attr('value', cardStarWars.species);
    })

    $('#btNext').click(function() {
            var id = getUrlParameter('id');
            id++;
            window.location.href = 'catalogo.html?id=' + id;
            return false;
        }) //# fim pesquisa catalogo


    //# resultado page
    function resultPage() {
        // body... 
        let url = 'https://swapi.co/api/people/1/';
        $.getJSON(url, function(cardStarWars) {
            //console.log(cardStarWars.name);
            $("input:nth-child(1)").attr('value', cardStarWars.name);
            $("input:nth-child(2)").attr('value', cardStarWars.birth_year);
            $('input:nth-child(3)').attr('value', cardStarWars.eye_color);
            $('input:nth-child(4)').attr('value', cardStarWars.gender);
            $('input:nth-child(5)').attr('value', cardStarWars.hair_color);
            $('input:nth-child(6)').attr('value', cardStarWars.height);
            $('input:nth-child(7)').attr('value', cardStarWars.mass);
            $('input:nth-child(8)').attr('value', cardStarWars.skin_color);
            $('input:nth-child(9)').attr('value', cardStarWars.homeworld);
            $('input:nth-child(10)').attr('value', ...cardStarWars.films);
            $('input:nth-child(11)').attr('value', cardStarWars.species);
        });
    }
    resultPage();


    //#Page pesquisa
    // AJAX - Send a Request To a SWAPI -->
    function UserAction() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText)
                json = JSON.parse(this.responseText)
                return json
            }
        }
        xhttp.open("POST", "https://swapi.co/api/people", true)
        xhttp.setRequestHeader("Content-type", "application/json")
        xhttp.send("Your JSON Data Here")
    }

    //let url = 'https://swapi.co/api/people/1';
    $.getJSON(url, function(cardStarWars) {
        //console.log(cardStarWars);
        //$("select option:nth-child(1)").append('<option value=' + cardStarWars.name + '>' + cardStarWars.name+ '</option>');
        var contador = cardStarWars.count;
        var proximo = cardStarWars.next;
        $("select:nth-child(1)").append('<option value=' + cardStarWars.next + '>' + cardStarWars.name + '</option>');
    });

    /*$('#btPesquisar').click(function() {
        window.location.href = 'resultado.html';
        return false;
    });*/

    $.getJSON(url, function(cardStarWars) {
        //console.log(cardStarWars.results);
        let v = [];
        v = cardStarWars.results;
        for (var i = 0; i < v.length; i++) {
            console.log(v[i]);
            $('#pesquisar').append($("<option></option>").attr('value', i).text(v[i].name));

        };

        //#pega o valor de option do select e o nome do personagem
        $('#btPesquisar').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.each($("#pesquisar option:selected"), function() {
                //se quiser pegar o valor de option (.val())
                v = $(this).text();
            });
            alert("You have selected the personagem - " + v);
        });

    });



});