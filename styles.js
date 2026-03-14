import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  productList: {
    paddingHorizontal: 5,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    alignItem: 'center',
    justifyContent: 'center',
  },
  productCard: {
    width: '47%',
    marginBottom: 5,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  productPrice: {
    fontSize: 10,
    fontFamily: 'monospace',
    marginLeft: 10,
  },
  imagePortrait: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    width: '100%',
    height: 100,
    backgroundColor: '#d8dce3',
  },
  buttonSmall: {
    backgroundColor: '#4284b3',   
    width: 90,
    height: 30,
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 5,
  },
  textSmall: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 23,
    marginBottom: 10,
    marginHorizontal: 3,
  },
  qtyTextInput: {
    marginLeft: 6,
    fontSize: 10,
    width: '30%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5
  },
  cartContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '95%'
  },
  cartItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  cartItemName: {
    fontFamily: 'monospace',
    width: '50%',
  },
  cartItemPrice: {
    fontFamily: 'serif',
    fontSize: 10,
  },
  spacerSmall: {
    marginTop: 10,
    marginBottom: 10,
  },
  deleteButton: {
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  total: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    marginLeft: '54%',
    marginTop: 20,
  },
  checkOut: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    width: 100,
    backgroundColor: '#28d439',
    borderRadius: 10,
    marginTop: 20,
  }
});

export default styles