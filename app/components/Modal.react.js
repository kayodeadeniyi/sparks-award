import React from 'react'
import closeButton from '../assets/close-modal.svg'
import './modal.styl'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }

  render() {
    if (this.props.visible)
      return(
        <div className='modal-overlay'>
          <div className='modal-box'>
            <div className='modal-content'>
              <div className='overlay' />
              {this.props.closer ? (
                <a onClick={this.props.closer} title="Close" className="modal-close">
                  <div><img src={closeButton}/></div>
                </a>) :
                null
              }
              {this.props.children}
            </div>
          </div>
        </div>
      )
    else
      return(
        <div />
      )
  }
}
