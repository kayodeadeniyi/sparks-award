import React from 'react'
import Modal from './Modal.react'
import AwardActions from '../actions/AwardActions'
import AwardStore from '../stores/AwardStore'
import './category.styl'

export default class Categories extends React.Component {
  constructor(props) {
    super(props)

    this.state = {openModal: false}
    this.onUpdate = this.onUpdate.bind(this)
  }
  componentDidMount() {
    AwardStore.addChangeListener(this.onUpdate)
  }
  componentWillUnmount() {
    AwardStore.removeChangeListener(this.onUpdate)
  }
  onUpdate() {
    this.setState({openModal: AwardStore.getState().data.openModal})
  }
  closeModal() {
    this.setState({openModal: false})
  }

  render() {
    var array = [1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    var array2 = array.map(f => <Category />)
    console.log(this.state.openModal);
    return (
      <div className='container'>
        <Style show={false}/>
        { array2 }
        <Modal visible={this.state.openModal} >
          <div className='cat-modal'>
            Hello World
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
    AwardActions.openModal()
  }

  render() {
    return(
      <div className='category' onClick={this.showModal}>
        <div className='overlay'></div>
        <div className='details'>
          <h1>The Caffeinator</h1>
          <p><i>For the one that drinks the most coffee in a day</i></p>
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
