var Spinner = React.createClass({
  render: function () {
    return (
      <div id="main-loader" className="preloader-wrapper small active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div><div className="gap-patch">
            <div className="circle"></div>
          </div><div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      );
  }
});
