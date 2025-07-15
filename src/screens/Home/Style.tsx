import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 20,
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 15,
  }
});

export default styles