var jribbble;!function(a){"undefined"!=typeof module&&module.exports?module.exports=a:"function"==typeof define?define(a):jribbble=a}(function(){"use strict";var a={},b=function(){var a=[],b="0123456789ABCDEF",c=0;for(c=0;32>c;c+=1)a[c]=b.substr(Math.floor(16*Math.random()),1);return a[12]="4",a[16]=b.substr(8|3&a[16],1),a.join("")},c=function(a,c){var d=document.createElement("script"),e="jribbble_"+b(),f="http://api.dribbble.com"+a+"?callback="+e;if(c.length>1)for(var g in c[1])f+="&"+g+"="+c[1][g];window[e]=function(a){"undefined"==typeof a?c[0]({error:!0}):c[0](a),d.parentNode.removeChild(d),window[e]=void 0},d.setAttribute("src",f),document.getElementsByTagName("head")[0].appendChild(d)},d={getShotById:"/shots/$/",getReboundsOfShot:"/shots/$/rebounds/",getShotsByList:"/shots/$/",getShotsByPlayerId:"/players/$/shots/",getShotsThatPlayerFollows:"/players/$/shots/following/",getPlayerById:"/players/$/",getPlayerFollowers:"/players/$/followers/",getPlayerFollowing:"/players/$/following/",getPlayerDraftees:"/players/$/draftees/",getCommentsOfShot:"/shots/$/comments/",getShotsThatPlayerLikes:"/players/$/shots/likes/"},e=function(a){return function(){var b=[].slice.call(arguments),d=a.replace("$",b.shift());c(d,b)}};for(var f in d)a[f]=e(d[f]);return a}());