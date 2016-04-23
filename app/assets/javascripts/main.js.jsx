$(document).ready(function () {
  var currents = [
    {
      currentType: "News",
      topic: "Tech Stories",
      stories: [
        {
          title: "Water Crisis",
          body: "There is a water crisis, you guys."
        },
        {
          title: "Lalala",
          body: "There is a bee crisis! You guys!"
        }
      ]
    },

    {
      currentType: "News",
      topic: "Tech Stories",
      stories: [
        {
          title: "Water Crisis",
          body: "There is a water crisis, you guys."
        },
        {
          title: "Lalala",
          body: "There is a bee crisis! You guys!"
        }
      ]
    },

    {
      currentType: "Placeholder",
      label: "Walk the dog"
    }
  ]
  console.log(currents)
  ReactDOM.render(<App currents={currents} />, document.querySelector('#app-container'));
  $(".button-collapse").sideNav();
});
