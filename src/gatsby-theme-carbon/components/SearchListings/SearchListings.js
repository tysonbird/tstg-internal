import React, { Component } from "react";
import { Form, Button, TextInput } from "carbon-components-react";

class SearchListings extends Component {
 state = {
   query: '',
 }

 handleInputChange = () => {
   this.setState({
     query: this.search.value
   })
 }

 render() {
   return (
    <Form>
        <TextInput
        helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
        id="test2"
        invalidText="Invalid error message."
        labelText="Text input label"
        placeholder="Placeholder text"
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        />
        <Button
            kind="primary"
            tabIndex={0}
            type="submit">
        Click
        </Button>
        <p>{this.state.query}</p>
    </Form>
   )
 }
}

export default SearchListings