import React from 'react'
import Modal from './Modal.react'
import NavBar from './NavBar.react'
import AwardActions from '../actions/AwardActions'
import AwardStore from '../stores/AwardStore'
import './category.styl'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {openModal: false}
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
    var data = AwardStore.getState().data

    if (data.openModal) {
      this.setState({
        openModal: data.openModal,
        title: data.modalContent.title,
        desc: data.modalContent.desc
      })
    }
  }
  closeModal() {
    this.setState({openModal: false})
  }

  render() {
    console.log(this.state);
    var array = [1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    var array2 = array.map(f => <Category title={`Title ${f}`} desc={`This is description ${f}`}/>)

    return (
      <div className='container'>
        <NavBar />
        <Style show={false}/>
        { array2 }
        <Modal visible={this.state.openModal} closer={this.closeModal}>
          <div className='cat-modal'>
            <h1>{this.state.title}</h1>
            <p>{this.state.desc}</p>
          </div>
        </Modal>
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
    var data = { title: this.props.title, desc: this.props.desc}
    AwardActions.openModal(data)
  }

  render() {
    return(
      <div className='category' onClick={this.showModal}>
        <div className='overlay'></div>
        <div className='details'>
          <h1>{this.props.title}</h1>
          <p><i>{this.props.desc}</i></p>
        </div>
      </div>
    )
  }
}

const Style = props => {
  var dangerousStyleTag = () => {
    return {__html: `
      .modal-content, .category {
        background: url(http://res.cloudinary.com/kaybaba/image/upload/v1464776659/coffee-guy_f6ganj.jpg)
      }
      .modal-overlay {
        display: ${props.show}
      }
      `
    }
  }
  return <style dangerouslySetInnerHTML={dangerousStyleTag()} />
}
