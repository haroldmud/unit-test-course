const { prototype } = require("jasmine");

function AddressBook() {
  this.contacts = [];
}

AddressBook,prototype.addContact = function(contact){
  this.contacts.push(contact);
}

AddressBook,prototype.getContact = function(idx){
  return this.contacts[idx];
}
