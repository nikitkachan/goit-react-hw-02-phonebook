import { Component } from "react"
import { styled } from "styled-components"

const Button = styled.button`
display: block;
height: 30px;
padding-left: 20px;
padding-right: 20px;
margin: 15px 0 5px 20px; 
border: 1px solid #555;
border-radius: 5px;
box-shadow: 0px 2px 9px -4px rgba(0,0,0,0.42);
background-color: white;
cursor: pointer;
text-transform: capitalize;
transition: border 250ms linear, background-color 250ms linear;

&:hover {
    border: 1px solid #0088ff;
    background-color: #0088ff;
    color: white;

}
`
const StyledDiv = styled.div`
padding: 10px;
width: 300px;
box-shadow: 0px 2px 9px -4px rgba(0,0,0,0.42);
border-radius: 10px;

& h3  {
margin: 5px 0 5px 20px;
}

& input {
    border: 1px solid grey;
    border-radius: 5px;
    margin-left: 5px;
}

`

export class AddContact extends Component {
    state = {
    name: '',
    number: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    
      const contactData = {
          name: this.state.name,
          number: this.state.number
          
    };
      this.props.handleAddContact(contactData);
      this.formReset();
  };
    
    handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    };
    
    formReset = () => {
        this.setState({
            name: '',
            number: ''
    });
    }
    
    render() {
        return(
                <StyledDiv>
                <form onSubmit={this.handleSubmit} >    
                    <label htmlFor="name">
                        <h3>Name</h3>
                        <i class="bi bi-person"></i>
                        <input
                                id="name"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                            />
                    </label>
                    <label htmlFor="number">
                        <h3>Phone</h3>
                        <i class="bi bi-telephone"></i>
                            <input
                                type="tel"
                                name="number"
                                value={this.state.number}
                                onChange={this.handleInputChange}
                                pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                                />
                    </label>
                <Button type="submit" >Add contact</Button>
                </form>
                </StyledDiv>
                )
            }
    
}