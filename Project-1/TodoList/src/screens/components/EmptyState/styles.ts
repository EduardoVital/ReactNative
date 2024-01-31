import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 34,
  },
  emptyStatusWrapper: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#333',
  },
  emptyStatus: {
    paddingVertical: 48,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    marginBottom: 16,
  },
  textBold: {
    color: '#808080',
    fontWeight: '700',
    fontSize: 14,
  },
  text: {
    color: '#808080',
    fontSize: 14,
  }
})