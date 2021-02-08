import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  // Adds a single string passed in as parameter to array stored in "this.props.menu".
  addMenuItem () {
   
      // TODO: 3. Add a new menu item to the correct variable associated with this class. This involves adding a parameter and changing a class instance variable (props).
    }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // TODO: 1. Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li> tags.
    });

    return responseHTML;
  }
}

export default Sidebar;
