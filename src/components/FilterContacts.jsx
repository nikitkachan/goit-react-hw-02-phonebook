import { styled } from "styled-components";

const Input = styled.input`
border: 1px solid grey;
    border-radius: 5px;
`

export const FilterContacts = ({ addToFilter,  }) => {
    
  const handleInputChange = event => {
    
    const value = event.target.value;
    addToFilter(value);
    };

    return (
            <div>
                <h3>Find contacts by name</h3>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

                />
            </div>
        )
    
}