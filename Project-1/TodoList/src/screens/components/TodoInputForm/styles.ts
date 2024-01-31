import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 5,
    marginTop: -25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
    padding: 16,
    borderRadius: 6,
    color: '#F2F2F2',
    width: '85%',
  },
  button: {
    padding: 18,
    backgroundColor: '#1E6F9F',
    color: '#F2F2F2',
    borderRadius: 6,
    width: '15%',
  }
})