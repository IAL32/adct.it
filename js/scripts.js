var translations = {
    "it": {
        "translation": {
            "me": {
                "name_surname": "Adrian David Castro Tenemaya",
                "title": "Imprenditore, Sviluppatore",
                "description": "Sono un ragazzo intraprendente, sicuro della strada che voglio intraprendere e del futuro che voglio ottenere. Puntuale, organizzato e moderato sono le mie caratteristiche professionali, ma sono anche un ottimo amico con le battute pessime facili."
            },
            "expertise": {
                "h2": "Esperienza",
                "alpha": {
                    "title": "Startup",
                    "description": "Ho lavorato in diverse startup nel corso degli anni, imparando tantissimo durante l'intero percorso di crescita di queste ultime."
                },
                "beta": {
                    "title": "Adattamento",
                    "description": "Ho vissuto in diverse città in Europa e nel mondo, aprendo la mente a diversi modi di affrontare le difficoltà e di superarle."
                },
                "charlie": {
                    "title": "Apertura Mentale",
                    "description": "Dall'Ecuador in Italia, dall'Italia in Germania ed a San Francisco. Queste sono solo alcune delle mete che mi hanno aperto la mente in una maniera sbalorditiva, mostrandomi nuovi orizzonti e modi di affrontare problemi. Evito le bolle sociali, e cerco sempre di essere coinvolto in attività multiculturali."
                },
                "delta": {
                    "title": "Leadership",
                    "description": "Analitico e cordiale, porto il team a raggiungere degli obiettivi prefissati, nonostante le difficoltà. Se si pensa di avere tutto sotto controllo, non si sta correndo abbastanza velocemente."
                }
            },
            "skills": {
                "h2": "Skills"
            },
            "education": {
                "h2": "Educazione",
                "tum": {
                    "date": "2019 - Presente"
                }
            },
            "experience": {
                "h2": "Esperienza Lavorativa"
            },
            "contact": {
                "h2": "Contatti",
                "mobile": {
                    "text": "Telefono Cellulare"
                }
            },
            "interest": {
                "h2": "Interessi",
                "movies": {
                    "text": "Film",
                    "content": "Sono cresciuto con Harry Potter, Il Signore degli Anelli, 2001 Odissea nello Spazio, e molti altri film fantasy o fanta-scientifici."
                },
                "sports": {
                    "text": "Sports",
                    "content": "Ho giocato a basket agonisticamente per 7 anni, ed è stato meraviglioso. Per un anno ho fatto tiro con l'arco, ma ero abbastanza una frana, ed ho smesso. Adesso mi sono buttato nel kickboxing, e vorrei continuare in maniera attiva."
                },
                "cooking": {
                    "text": "Cuncina",
                    "content": "Io AMO cucinare. Spendo un sacco di tempo a casa anche solo pensando a cosa cucinerò per cena, o per il pranzo del giorno dopo. Mi piace mangiare praticamente di tutto, e sono sempre pronto a provare cose nuove!"
                }
            },
        }
    },
    "en": {
        "translation": {
            "me": {
                "name_surname": "Adrian David Castro Tenemaya",
                "title": "Entrepreneur, Developer",
                "description": "I am an entreprenurial guy. I am very sure about the path and the goals I want to achieve. On time, organized and moderated are my professional aspects, but I can also be a good friend who occasionally says bad jokes."
            },
            "expertise": {
                "h2": "Experience",
                "alpha": {
                    "title": "Startup",
                    "description": "I have worked in different startups over the years, learning a lot during the entire growth of the company."
                },
                "beta": {
                    "title": "Adaptiveness",
                    "description": "I have lived in different cities in Europe and around the world, opening my mind to different kinds methods of facing up challenges and how to overcome them."
                },
                "charlie": {
                    "title": "Open Minded",
                    "description": "From Ecuador to Italy, from Italy to Germany and San Francisco. This are just some of the destinations that drastically opened my mind, showing me new horizons and ways to confront problems. I avoid social bubbles, and I always try to be involved in multicultural activities."
                },
                "delta": {
                    "title": "Leadership",
                    "description": "Analytic and kind, I take the team to reach its predefined objectives, despite difficulties. If you think you have everything under control, you are not going fast enough."
                }
            },
            "skills": {
                "h2": "Skills"
            },
            "education": {
                "h2": "Education",
                "tum": {
                    "date": "2019 - Current"
                }
            },
            "experience": {
                "h2": "Work Experience"
            },
            "contact": {
                "h2": "Contact",
                "mobile": {
                    "text": "Mobile Number"
                }
            },
            "interest": {
                "h2": "Interest",
                "movies": {
                    "text": "Movies",
                    "content": "I have grown up with Harry Potter, Lord of The Rings, 2001 Space Odissey, an many other fantasy or sci-fi movies."
                },
                "sports": {
                    "text": "Sports",
                    "content": "I played basketball agonistically for 7 years of my life, and it was wounderful and I still play it sometimes. For one year I was doing archery, but I kind of sucked, and moved on. Now I am into kickboxing, and would like to continue actively."
                },
                "cooking": {
                    "text": "Cooking",
                    "content": "I LOVE cooking. I spend a lot of time at home just thinking about what I will cook for dinner, or for lunch the next day. I enjoy eating pretty much everything, and I am always willing to try new stuff!"
                }
            },
        }
    }
};

(function (window, $) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    // $('.left-col-block, .right-col-block').theiaStickySidebar();


    // --------------------------------------------------------------------
    // Internationalization
    // --------------------------------------------------------------------

    i18next.init({
        "lng": 'en',
        "resources": translations,
        "fallbackLng": ['en', 'it'],
        // "debug": true
    });
    jqueryI18next.init(i18next, $, {
        tName: 't', // --> appends $.t = i18next.t
        i18nName: 'i18n', // --> appends $.i18n = i18next
        handleName: 'localize', // --> appends $(selector).localize(opts);
        selectorAttr: 'data-i18n', // selector for translating elements
        targetAttr: 'i18n-target', // data-() attribute to grab target element to translate (if different than itself)
        optionsAttr: 'i18n-options', // data-() attribute that contains options, will load/set if useOptionsAttr = true
        useOptionsAttr: false, // see optionsAttr
        parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
    });

    $('body').localize();

    $('.lang').click(function (e) {
        e.preventDefault();
        var lang = $(this).attr('data-lang');
        i18next.init({
            lng: lang
        }, function (t) {
            $('body').localize();
        });
    });

    $(".button-save-pdf").click(function (e) {
        e.preventDefault();

        window.print();
    });

})(window, window.jQuery); // JQuery end