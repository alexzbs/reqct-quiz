import React, { Component } from 'react'
import classes from './Layout.css'
import MenuToggle from "../../components/UI/Navigation/MenuToggle/MenuToggle"

class Layout extends Component {
  state = {
    menu: false
  }

  toggleMenuHandler = () => {
    this.setState((state, props) => { return { menu: !this.state.menu } })

  }
  render() {
    return (
      <div className={classes.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        ></MenuToggle>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout