import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 34,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  created: {
    color: '#4EA8DE',
    fontWeight: '700',
  },
  completed: {
    color: '#8284FA',
    fontWeight: '700'
  },
  numberContainer: {
    backgroundColor: '#333',
    borderRadius: 50,
  },
  number: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    color: '#D9D9D9',
    fontSize: 12,
    fontWeight: '700',
  },

})