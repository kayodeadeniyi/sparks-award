import React from 'react'
import Modal from './Modal.react'
import NavBar from './NavBar.react'
import { SimpleSelect } from 'react-selectize'
import $ from 'jquery'

import AwardActions from '../actions/AwardActions'
import AwardStore from '../stores/AwardStore'


import './category.styl'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {data: []}
    this.onUpdate = this.onUpdate.bind(this)
  }
  componentDidMount() {
    AwardStore.addChangeListener(this.onUpdate)
  }
  componentWillUnmount() {
    AwardStore.removeChangeListener(this.onUpdate)
  }
  onUpdate() {
    var storeData = AwardStore.getState()
    if (!$.isEmptyObject(storeData.data)) {
      this.setState({data: storeData.data})
    }
  }

  render() {
    var categories
    if (!$.isEmptyObject(this.state.data)) {
      categories = this.state.data.map((category, index) => <Category title={category.title} key={index} names={[]} emails={[]} desc={category.short_description} image_url={category.imageUrl} index={index} />)
    }

    return (
      <div className='main'>
        <NavBar />
        <div className='container'>
          {categories}
        </div>
        <button>Submit</button>
      </div>
    )
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var options = this.props.emails.map((email, i) => <option value={email}>{this.props.names[i]}</option>)

    return(
      <div className={`category${this.props.index} category`}>
        <Style image_url={this.props.image_url} index={this.props.index} className='category' />
        <div className='overlay'></div>
        <div className='details'>
          <div>
            <h1>{this.props.title}</h1>
            <p><i>{this.props.desc}</i></p>
          </div>
          <SimpleSelect placeholder = 'e.g John Doe'
            className='simple-container'
            onValueChange = {function(value, callback){
              // this.props.valueChange(value.value,this.props.title)
              console.log(value, 'value');
              callback();
            }.bind(this)}
          >
            {options}
          </SimpleSelect>
        </div>
      </div>
    )
  }
}

const Style = props => {
  var dangerousStyleTag = () => {
    if (props.image_url) {
      var index = ''
      if (props.index)
        index = props.index
      return {__html: `
        .${props.className}${index} {
          background: url(${props.image_url});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        `
      }
    } else {
      return null
    }
  }
  return <style dangerouslySetInnerHTML={dangerousStyleTag()} />
}

{/*<Modal visible={this.state.openModal} closer={this.closeModal}>
  <Style image_url={this.state.image_url} className='modal-content' />
  <div className='cat-modal'>
    <h1>{this.state.title}</h1>
    <p>{this.state.desc}</p>
  </div>
</Modal>*/}
