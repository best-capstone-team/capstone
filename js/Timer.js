import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimerCountdown from 'react-native-timer-countdown';

const Timer = () => (
  <View style={styles.container}>
    <TimerCountdown
      initialMilliseconds={1000 * 10}
      onTick={milliseconds => console.log('tick', milliseconds)}
      onExpire={() => alert('complete')}
      formatMilliseconds={milliseconds => {
        const remainingSec = Math.round(milliseconds / 1000);
        const seconds = parseInt((remainingSec % 60).toString(), 10);
        const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
        // const hours = parseInt((remainingSec / 3600).toString(), 10);
        const s = seconds < 10 ? '0' + seconds : seconds;
        const m = minutes < 10 ? '0' + minutes : minutes;
        return m + ':' + s;
        // return h + m + ':' + s;
      }}
      allowFontScaling={true}
      style={{ fontSize: 20 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Timer;
