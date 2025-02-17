import React, { Component } from 'react';
import styles from "../styles/css/ContentDetail.module.css";

class ImageSlide extends Component {
  constructor() {
    super();
    this.state = {
      imageCurrentNo: 0,
    };
  }

  onChangeImage = index => {
    if (this.props.images.length <= index) index = 0;
    if (index < 0) index = this.props.images.length - 1;

    this.setState({ imageCurrentNo: index });
  };

  render() {
    const { images } = this.props;
    return (
      <div className={styles.imageSlide}>
        <div className={styles.navBox}>
          <span>{this.state.imageCurrentNo + 1}</span>
          <span>/</span>
          <span>{images && images.length}</span>
        </div>

        <div className={styles.slideBox}>
          <div
            className={styles.slideList}
            style={{
              width: `${(this.state.imageCurrentNo + 1) * 550}px`,
              transform: `translate3d(
                ${this.state.imageCurrentNo * -550}px, 0px, 0px`,
            }}
          >
            {images?.map((image, no) => (
              <div className={styles.slideContent} key={no}>
                <picture>
                  <img className={styles.slideImg} src={image} />
                </picture>
              </div>
            ))}
          </div>

          <div
            className={styles.buttonPrev}
            onClick={() => this.onChangeImage(this.state.imageCurrentNo - 1)}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            className={styles.buttonNext}
            onClick={() => this.onChangeImage(this.state.imageCurrentNo + 1)}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlide;