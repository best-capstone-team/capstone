import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { gamePausedThunk, gameEndedThunk } from "../../store/gameReducer";
import { Button } from "react-native-material-ui";
import styles from "./styles";
import Timer from "./Timer";
import PointCount from "./PointCount";

class ButtonBar extends Component {
  constructor() {
    super();
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handlePassword() {
    const { history, pauseGame } = this.props;
    pauseGame();
    history.push("/password");
  }

  handlePause() {
    const { history, pauseGame } = this.props;
    pauseGame();
    history.push("/pause");
  }

  handleResume() {
    const { history, resumeGame } = this.props;
    resumeGame();
    history.goBack();
  }

  handleExit() {
    const { history, endGame } = this.props;
    endGame();
    history.push("/");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Timer history={this.props.history} />
          <PointCount />
        </View>
        <View style={styles.secondRowContainer}>
          <Button accent text="enter password" onPress={this.handlePassword} />
          <Button accent text="exit" onPress={this.handleExit} />
        </View>
      </View>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    pauseGame: () => dispatch(gamePausedThunk()),
    endGame: () => dispatch(gameEndedThunk())
  };
};

export default connect(
  null,
  mapDispatch
)(ButtonBar);
