import { styled } from "styled-components";


const StyledUl = styled.ul`
list-style: none;
padding-left: 0;
& li {
    margin-bottom: 10px;   
}
& i {
    margin-right: 10px;
}
`
const Button = styled.button`
height: 30px;
padding-left: 20px;
padding-right: 20px;
margin-left: 20px;
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

export const ContactsList = ({ filteredContacts, handleDeleteContact }) => {

    return (
        <div>
            <StyledUl>
                {filteredContacts.length>0 ? filteredContacts.map(contact =>
                    <li key={contact.id}>
                        <i class="bi bi-person-lines-fill"></i>
                        {contact.name}: {contact.number}
                        <Button type="button" onClick={() => handleDeleteContact(contact.id)}>Delete</Button>
                    </li>) : "No contacts"}
            </StyledUl>
        </div>
        
    )
}