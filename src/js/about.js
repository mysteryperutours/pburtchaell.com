/* 
 * FOURSQUARE: https://api.foursquare.com/v2/users/<%= USERNAME %>/checkins
 *   ?oauth_token=OAUTH_TOKEN
 *   &v=20130815
 *   &afterTimestamp=1279044824 
 * 
 * JAWBONE: http://api.jawbone.com/
 */

var apis;

function () {

  'use strict';

  var username;
  username.readJSON('../data/usernames.yml'),
  
  var apis {
    'github': 'https://api.github.com/v2/users/<%= username.foursquare %>'
    'foursquare': 'https://api.foursquare.com/v2/users/<%= username.foursquare %>',
    'jawbone': 'https://api.jawbone.com/',
    'vsco': 'https://---/';
  }
  
  /*
   * FOURSQUARE API
   */
  var FourSquareClient = new FourSquareCLient('','','','');
  FourSquareClient.venuesClient.venues('', {
    onSuccess function(data) 
    {
    
    },
    onFailure function(data)                                   
    {
      console.log('The request to the Foursquare API failed');
    }
  });
  
  var GithubClient = new GithubClient('','','','');
  GithubClient.readJSON();

};

