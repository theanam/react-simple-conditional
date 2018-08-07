## React Simple Conditional Component that behaves like a div.

This simple conditional components only renders if the `condition` prop has a value that is `true` or **truthy** in JavaScript. If the condition prop has a value that interpretes as `false`, nothing will be rendered.

The component renders a standard `<div>` and supports children like regular `<div>`. All the *props* and *children* that you supply to the component gets passed to the div. 

Usage: 

### To istall the component simply run: 

    npm install --save react-simple-conditional

### Import it using:

    import Conditional from 'react-simple-conditional'

### Use it in JSX:

    <Conditional condition={someCondition}>
        <p>This will be rendered if 'someCondition' is true</p>
    </Conditional>

### Or use other props:

    <Conditional style={{color:'#F00'}} condition={someCondition}>
        This red text will only appear if 'someCondition' is true
    </Conditional>

### Full Example: 

    import React, { Component } from 'react';
    import Conditional from 'react-simple-conditional';
    class App extends Component {
        state={
            renderCondition:true
        }
    render() {
        return (
            <Conditional 
            condition={this.state.renderCondition}
            style={{color:'red'}}>
                <h1>Hello World</h1>
            </Conditional>
        );
    }
    }

    export default App;

### License:

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT)