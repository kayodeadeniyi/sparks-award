import React from 'react'
import Modal from './Modal.react'
import NavBar from './NavBar.react'
import { SimpleSelect } from 'react-selectize'

import AwardActions from '../actions/AwardActions'
import AwardStore from '../stores/AwardStore'


import './category.styl'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
      title: null,
      desc: null,
      data: {}
    }
    this.onUpdate = this.onUpdate.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
    AwardStore.addChangeListener(this.onUpdate)
  }
  componentWillUnmount() {
    AwardStore.removeChangeListener(this.onUpdate)
  }
  onUpdate() {
    var storeData = AwardStore.getState().data
    if (storeData.data && storeData.data.title) {
      this.setState({data: storeData.data})
    }
    if (storeData.openModal) {
      this.setState({
        openModal: storeData.openModal,
        title: storeData.modalContent.title,
        desc: storeData.modalContent.desc,
        image_url: storeData.modalContent.image_url
      })
    }
  }
  closeModal() {
    this.setState({openModal: false})
  }

  render() {
    var categories
    if (this.state.data && this.state.data.title) {
      var title = this.state.data.title
      var desc = this.state.data.desc
      var image_url = this.state.data.image
      var emails = this.state.data.email
      var names = this.state.data.name
      categories = title.map((t, i) => <Category key={i} title={t} names={names} emails={emails} desc={desc[i]} image_url={image_url[i]} index={i} />)
    }

    return (
      <div className='container'>
        <NavBar />
        { categories }
        <button>Submit</button>
      </div>
    )
  }
}

class Category extends React.Component {
  constructor(props) {
    super(props)

    this.state = {show: false}
    this.showModal = this.showModal.bind(this)
  }
  showModal() {
    var data = {
      title: this.props.title,
      desc: this.props.desc,
      image_url: this.props.image_url
    }
    AwardActions.openModal(data)
  }

  render() {
    var options = this.props.emails.map((email, i) => <option value={email}>{this.props.names[i]}</option>)

    return(
      <div className={`category${this.props.index} category`} onClick={this.showModal}>
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
