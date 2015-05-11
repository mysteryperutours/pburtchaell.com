import firebase from 'works/firebase';

export default class Data {

  constructor() {
    this.ref = firebase;
    this.user = {};
    this.refs = {};
  }

}