import firebase from 'works/firebase';

export default class Auth {

  constructor() {
    this.ref = firebase;
  }

  auth(provider) {
    /*this.ref.authWithOAuthPopup(provider, function (error) {
      if (error) {
        if (error.code === 'TRANSPORT_UNAVAILABLE') {
          ref.authWithOAuthRedirect(provider, function(error) {
            console.error(error);
          });
        } else {
          console.error(error);
        }
      }
    });*/
  }

  unauth() {
    //this.ref.unauth();
  }

}
