import { Component } from 'react';
import ContactForm from './Components/ContactFrom/ContactForm';
import Container from './Components/Container/Container';
import Section from './Components/Section/Section';



class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <Container>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm />
        </Section>
      </Container>
    )
  }

}

export default App