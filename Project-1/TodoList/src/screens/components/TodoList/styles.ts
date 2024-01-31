import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  todoListWrapper: {
    width: '100%',
    backgroundColor: '#262626',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  text: {
    color: '#F2F2F2',
    fontSize: 14,
    width: '78%',
    lineHeight: 20,
  },
  textChecked: {
    color: '#808080',
    fontSize: 14,
    width: '78%',
    lineHeight: 20,
    textDecorationLine: 'line-through',
    // text-decoration: line-through;
  },
  checkbox: {
    width: 17,
    height: 17,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginRight: 8,
  },
  checked: {
    width: 17,
    height: 17,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
    marginRight: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})