import { Component } from "react"
import { styled } from "styled-components";
import { AddContact } from "./AddContact";
import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList";
import { FilterContacts } from "./FilterContacts";


const Wrapper = styled.div`
padding: 30px;
`

export class App extends Component {
  
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    {id: 'id-5', name: 'Rosieq Simpson', number: '459-12-56'},
    {id: 'id-6', name: 'Hermioqne Kline', number: '443-89-12'},
    {id: 'id-7', name: 'Edqen Clements', number: '645-17-79'},
    {id: 'id-8', name: 'Annqie Copeland', number: '227-91-26'},
  ],
  filter: ''
}
  
  handleAddContact = contactData => {
    const isExist = this.state.contacts.some(
      contact => contact.name === contactData.name);
    if (isExist) {
    alert(`${contactData.name} is already in contacts.`);
    return
    };
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, finalContact],
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };
  

  filteredContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
  
  addToFilter = value => this.setState({
      filter: value,
    });
  
  render() {
    return (<Wrapper>
      <h1>Phonebook</h1>
      <AddContact handleAddContact={this.handleAddContact} />
      <h2>Contacts</h2>
      <FilterContacts addToFilter={this.addToFilter} />
      <ContactsList filteredContacts={this.filteredContacts()} handleDeleteContact={this.handleDeleteContact} />
    </Wrapper>
    )
  }
}