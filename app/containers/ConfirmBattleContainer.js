var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentDidMount: function () {
    var query = this.props.location.query;
    // Fetch info from Github then update state
    console.log('componentDidMount');
  },

  componentWillMount: function () {
    console.log('componentWillMount');
  },

  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },

  componentWillReceiveProps: function () {
    console.log('componentWillReceiveProps');
  },

  render: function () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo} />
    );
  }
});

module.exports = ConfirmBattleContainer;
