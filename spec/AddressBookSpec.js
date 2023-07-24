describe('Address Book', function(){
  it('Should be able to add a contact', function(){
    var addressBook = new AddressBook(),
        thisContact = new Contact();
    addressBook.addContact(thisContact);
    
    expect(addressBook.getContact(0)).toBe(thisContact);
  });
});

describe('async Address Book', function() {
  it('should grab initial contacts', function(){
    var addressBook = new AddressBook();

    addressBook.getInitialContacts();
    expects(addressBook.initialComplete).toBe(true);
  })
})
