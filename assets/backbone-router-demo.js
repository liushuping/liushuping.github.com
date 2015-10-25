/* global Router */
/* global $ */
/* global Backbone */
location.hash='';
var root = '/2015/08/09/Backbone-router-demo/';
Backbone.history.start({ pushState: true, root: root });

var AppRouter = Backbone.Router.extend({  
    routes : {  
        'help': 'help',  
        'search/:query': 'search', 
        'search/:query/:page': 'search'
    },   
    
    help: function() {
        alert('help link is clicked');
    },

    search: function(query, page) {
        if (page == null) {
          alert('query: ' + query);
        } else {
          alert('query: ' + query + ', page: ' + page);
        }
    }
});

var router = new AppRouter();

$(document).on('click', 'a[href*="#"]', function (e) {
    var href = $(this).prop('href')
    var splits = href.split('#');
    e.preventDefault();
    router.navigate(splits[1], true);
});