var ReviewScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  handleStartClick: function(event){
    this.props.onUpdate('start')
  },
  handleNextClick: function(event){
    window.mySwipe.next();
  },
  componentDidMount: function() {
    window.mySwipe = Swipe(document.getElementById('slider'), {
      continuous: false,
      callback: this.swipeCallback
     });
    $.get("/check_ins/show", function(response){
      this.setState({
        feeling: response.review.feeling,
        thankful1: response.review.thankful1,
        thankful2: response.review.thankful2,
        thankful3: response.review.thankful3,
        horizon: response.review.horizon,
      });
    }.bind(this))
  },
  render: function(){
    return (
      <div id='review-view' className='container flow-text'>
        <h4 className='center-align'>Yesterday</h4>
        <div id="slider" className="row swipe">
          <div className='swipe-wrap'>
            <div>
              <div className='center-align col s12'>
                <div className='row'>
                  <div className="card col s10 offset-s1">
                    <div className="card-content">
                      <p className='review-header'>I was feeling</p>
                      <p className='review-input'>{this.state.feeling}</p>
                    </div>
                  </div>
                  <button onClick={this.handleNextClick} id='next-icon' className="build btn-floating waves-effect waves-light" type="submit" name="commit"><i className="material-icons">navigate_next</i></button>
                </div>
              </div>
            </div>


            <div>
              <div className='center-align col s12'>
                <div className='row'>
                  <div className='card col s10 offset-s1'>
                    <div className="card-content">
                      <p className='review-header'>I was thankful for</p>
                      <p className='review-input'>{this.state.thankful1}</p>
                      <p className='review-input'>{this.state.thankful2}</p>
                      <p className='review-input'>{this.state.thankful3}</p>
                    </div>
                  </div>
                  <button onClick={this.handleNextClick} id='next-icon' className="build btn-floating waves-effect waves-light" type="submit" name="commit"><i className="material-icons">navigate_next</i></button>
                </div>
              </div>
            </div>

            <div>
              <div className='center-align col s12'>
                <div className='row'>
                  <div className='card col s10 offset-s1'>
                    <div className="card-content">
                      <p className='review-header'>I was looking forward to</p>
                      <p className='review-input'>{this.state.horizon}</p>
                    </div>
                  </div>
                  <div id="start-day-button" className='container'>
                    <div className="center-align">
                     <a onClick={this.handleStartClick} className='start-day btn-large waves-effect waves-light' id='start-day-button'>Start My Day</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
})
