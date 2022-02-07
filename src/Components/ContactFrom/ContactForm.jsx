import { Component } from "react";
import s from './ContactForm.module.css'

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
    


    state = {
    ...INITIAL_STATE,
    };

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
        console.log(this.state)
    }

    render() {

        const { name, number } = this.state;

        return (
            <form>
                <label className={s.labelFrom}>
                    Name
                     <input
                    className={s.input}
                    type="text" 
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                          value={name}
                          onChange={this.handleInputChange}
                          className={s.input}
                    />
                </label>
               
                <button onClick={event => console.log(event)} className={s.button} type="button">Add Contact</button>

                 <label className={s.label}>
          Number
          <input
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
                value={number}
                onChange={this.handleInputChange}
                className={s.input}
          />
        </label>        
            </form>
        )
    }
}



export default ContactForm