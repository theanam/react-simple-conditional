## Conditional render component for React
This simple conditional components only renders its children if the `condition` prop has a value that is `true` or **truthy** in JavaScript. If the condition prop has a value that interpretes as `false`, nothing (`null`) will be rendered.

The component renders nothing by itself, it uses [React Fragments](https://reactjs.org/docs/fragments.html) . All the *props* and *children* that you supply to the component gets passed to the div. 

Usage: 

### To istall the component simply run: 

    npm install --save react-simple-conditional

### Import it using:

    import Conditional from 'react-simple-conditional'

### Use it in JSX:

    <Conditional condition={someCondition}>
        <p>This will be rendered if 'someCondition' is true</p>
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
            condition={this.state.renderCondition}>
                <h1>Hello World</h1>
            </Conditional>
        );
    }
    }

    export default App;

### License:

This project is distributed under the [MIT License](https://opensource.org/licenses/MIT)