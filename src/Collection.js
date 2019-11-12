import React, { Component } from 'react';
import style from './Collection.module.scss';

const row = "row";
const my_3 = "my-3"
const flex_reverse = "flex-row-reverse";

class Collection extends Component {
  render() {
    return (
      <div className="container">
        <div className={style.timelineSection}>
          <div className={row+" "+my_3+" "+ style.timelinePointer}>
            <div className="col-sm-6">
              <h3>...</h3>
              <p>...</p>
            </div>
            <div className="col-6">
              <div className={style.img}></div>
            </div>
          </div>

          <div className={row+" "+my_3+" "+flex_reverse+" "+ style.timelinePointer}>
            <div className="col-sm-6">
              <h3>...</h3>
              <p>...</p>
            </div>
            <div className="col-6">
              <div className={style.img}></div>
            </div>
          </div>

          <div className={row+" "+my_3+" "+ style.timelinePointer}>
            <div className="col-sm-6">
              <h3>...</h3>
              <p>...</p>
            </div>
            <div className="col-6">
              <div className={style.img}></div>
            </div>
          </div>

          <div className={row+" "+my_3+" "+flex_reverse+" "+ style.timelinePointer}>
            <div className="col-sm-6">
              <h3>...</h3>
              <p>...</p>
            </div>
            <div className="col-6">
              <div className={style.img}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;