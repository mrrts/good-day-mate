var EveningScreen = React.createClass({
  getInitialState: function(){
    return {}
  },
  componentDidMount: function(){
    window.mySwipe = Swipe(document.getElementById('slider'), {
      continuous: false,
      callback: this.swipeCallback
    });
    $.get('/check_ins/new', function(response){
     var auth_token = $(response).find('input[name="authenticity_token"]').val()
      this.setState({authenticity_token: auth_token})
    }.bind(this))
  },
  handleLastStreamSubmit: function(event){
    this.props.onUpdate('goodnight')
  },
  handleFormSubmit: function(event){
    event.preventDefault();
    var here = $(event.target);
    if (here.attr('id') === 'form-1') {
      window.mySwipe.next();
    } else if (here.attr('id') === 'form-2') {
      window.mySwipe.next();
    }
    else if (here.attr('id') === 'form-3') {
       var data = {check_in: {feeling: $('#check_in_feeling').val(), thankful1: $('#check_in_thankful1').val(), thankful2:$('#check_in_thankful2').val(), thankful3:$('#check_in_thankful3').val(), horizon: $('#check_in_horizon').val()}, authenticity_token: $('#auth-token').val()}
       console.log(data)
      $.ajax({
        method: 'POST',
        url: '/check_ins',
        data: data
      }).done(function(resp){
        this.props.onUpdate('build');
      }.bind(this))
    }
  },
  swipeCallback: function (index, elem) {
    setTimeout(function(){
      $(elem).find('input:not([type=hidden]):first').focus();
    }, 500);
  },
  render: function(){
    return (
    <div>
      <div id='evening-check-in-form' className='container flow-text row' onSubmit={this.handleFormSubmit}>
        <h4>Good Evening</h4>
          <div id="slider" className="row swipe">
            <div className='swipe-wrap'>



            <div>
              <form id='form-1' className='center-align col s12'>
                  <div className='row'>
                    <div className='input-field col s10 offset-s1 card'>
                      <div className="card-content">
                        <h5>I am feeling:</h5>
                        <input type="text" name="check_in[feeling]" id="check_in_feeling" />
                      </div>
                    </div>
                      <button className="build btn-floating waves-effect waves-light" type="submit" name="commit"><i className="material-icons">navigate_next</i></button>
                  </div>
              </form>
            </div>


            <div>
              <form id='form-2' className='center-align col s12'>
                  <div className='row'>
                    <div className='input-field col s10 offset-s1 card'>
                      <div className="card-content">
                        <h5>Things I&#39;m thankful for:</h5>
                        <div className="input-field">
                          <input type="text" name="check_in[thankful1]" id="check_in_thankful1" />
                          <label htmlFor="check_in_thankful1">1.</label>
                        </div>
                        <div className="input-field">
                          <input type="text" name="check_in[thankful2]" id="check_in_thankful2" />
                          <label htmlFor="check_in_thankful2">2.</label>
                        </div>
                        <div className="input-field">
                          <input type="text" name="check_in[thankful3]" id="check_in_thankful3" />
                          <label htmlFor="check_in_thankful3">3.</label>
                        </div>
                      </div>
                    </div>
                      <button className="build btn-floating waves-effect waves-light" type="submit" name="commit"><i className="material-icons">navigate_next</i></button>
                  </div>
              </form>
            </div>



            <div>
              <form id='form-3' className='center-align col s12' acceptCharset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input id='auth-token' type="hidden" name="authenticity_token" value={this.state.authenticity_token} />
                  <div className='row'>
                    <div className='input-field col s10 offset-s1'>
                      <div className="card">
                        <div className="card-content">
                          <div>
                            <h5>Tomorrow, I&#39;m looking forward to:</h5>
                            <input type="text" name="check_in[horizon]" id="check_in_horizon" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className='container valign-wrapper'>
                          <div className='valign'>
                            <div id="build-button"className="center-align">
                              <button className="build btn-large waves-effect waves-light" type="submit" name="commit">Build Tomorrow</button>
                            </div>
                            <div id="use-last-button" className="center-align">
                              <a onClick={this.handleLastStreamSubmit}className="build btn-large waves-effect waves-light" type="submit" name="commit">Use Last Stream</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </form>
            </div>



            </div>
          </div>
        </div>
      </div>
    )
  }
})
