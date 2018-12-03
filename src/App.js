import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500'
]

export default class LightboxExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  render () {
    const { photoIndex, isOpen } = this.state

    return (
      <div>
        <div style={{ height: '100px', width: '400px', background: '#ccc' }}>

        </div>
        <div tabIndex="-1" style={{ height: '1000px', width: '400px', background: '#ddd' }}
             onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </div>

        {isOpen && (
          <Lightbox
            // 该prop解决关闭弹窗后下层元素滑动
            reactModalProps={{ shouldReturnFocusAfterClose: false }}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    )
  }
}
