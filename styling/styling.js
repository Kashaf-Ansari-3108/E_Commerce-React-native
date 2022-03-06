import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();
const darkTheme = colorScheme === 'dark' ? true : false;

let _dark = darkTheme ? '#fff' : '#B22222';
let _light = 'rgba(255,255,255,.2)';
const styling = {
  headerTitle: {
    fontSize: 25,
    color: _dark,
    textAlign: 'left',
    borderBottomWidth: 2,
    borderBottomColor: _dark,
  },
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  container3: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  container4: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
  container5: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  w100: {
    width: '100%',
  },
  w75: {
    width: '75%',
  },
  w50: {
    width: '50%',
  },
  w25: {
    width: '25%',
  },
  h100: {
    height: '100%',
  },
  h75: {
    height: '75%',
  },
  h50: {
    height: '50%',
  },
  h25: {
    height: '25%',
  },
  _h1: {
    fontSize: 32,
  },
  _h2: {
    fontSize: 26,
  },
  dark: {
    color: _dark,
  },
  bgdark: {
    backgroundColor: _dark,
  },
  bglight: {
    backgroundColor: _light,
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  light: {
    color: 'white',
  },
  main: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,.2)',
    color: 'white',
    padding: 15,
    margin: 10,
  },
  input: {
    height: 50,
    width: '100%',
    padding: 15,
    fontSize: 16,
    borderRadius: 25,
    backgroundColor: darkTheme ? '#d7e3fc' : 'rgb(255,255,255)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    color: darkTheme ? _light : 'black',
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  inputBox: {
    paddingVertical: 10,
  },
  logo: {
    width: 160,
    height: 70,
  },
  headerLogo: {
    width: 100,
    height: 45,
  },
  logoBox: {
    paddingVertical: 40,
  },
  btn: {
    backgroundColor: _dark,
    color: 'white',
    width: '100%',
    padding: 15,
    fontSize: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  roundedBtn: {
    backgroundColor: _dark,
    color: 'white',
    height: 50,
    width: 50,
    padding: 12,
    fontSize: 16,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  badge: {
    width: 25,
    height: 25,
    fontSize: 13,
    backgroundColor: 'white',
    color: _dark,
    borderRadius: 15,
    padding: 3,
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    left: -10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  txtWhite: {
    color: 'white',
  },
  text_white: {
    color: 'white',
  },
  txtprime: {
    color: _dark,
  },
  signUpTxt: {
    fontSize: 25,
    color: _dark,
  },
  fs: {
    fontSize: 16,
  },
  fs1: {
    fontSize: 32,
  },
  fs2: {
    fontSize: 26,
  },
  fs3: {
    fontSize: 22,
  },
  fs4: {
    fontSize: 20,
  },
  fs5: {
    fontSize: 18,
  },
  shadow1: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadow2: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadow3: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  shadow4: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  shadow5: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  shadow6: {
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  p1: {
    padding: 10,
  },
  p2: {
    padding: 20,
  },
  p3: {
    padding: 30,
  },
  p4: {
    padding: 40,
  },
  p5: {
    padding: 50,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
  py3: {
    paddingVertical: 30,
  },
  py4: {
    paddingVertical: 40,
  },
  py5: {
    paddingVertical: 50,
  },
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  px3: {
    paddingHorizontal: 30,
  },
  px4: {
    paddingHorizontal: 40,
  },
  px5: {
    paddingHorizontal: 50,
  },
  ps1: {
    paddingLeft: 10,
  },
  ps2: {
    paddingLeft: 20,
  },
  ps3: {
    paddingLeft: 30,
  },
  ps4: {
    paddingLeft: 40,
  },
  ps5: {
    paddingLeft: 50,
  },
  pt1: {
    paddingTop: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pt3: {
    paddingTop: 30,
  },
  pt4: {
    paddingTop: 40,
  },
  pt5: {
    paddingTop: 50,
  },
  pe1: {
    paddingEnd: 10,
  },
  pe2: {
    paddingEnd: 20,
  },
  pe3: {
    paddingEnd: 30,
  },
  pe4: {
    paddingEnd: 40,
  },
  pe5: {
    paddingEnd: 50,
  },
  m1: {
    margin: 10,
  },
  m2: {
    margin: 20,
  },
  m3: {
    margin: 30,
  },
  m4: {
    margin: 40,
  },
  m5: {
    margin: 50,
  },
  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
  },
  my3: {
    marginVertical: 30,
  },
  my4: {
    marginVertical: 40,
  },
  my5: {
    marginVertical: 50,
  },
  mx1: {
    marginHorizontal: 10,
  },
  mx2: {
    marginHorizontal: 20,
  },
  mx3: {
    marginHorizontal: 30,
  },
  mx4: {
    marginHorizontal: 40,
  },
  mx5: {
    marginHorizontal: 50,
  },
  ms1: {
    marginLeft: 10,
  },
  ms2: {
    marginLeft: 20,
  },
  ms3: {
    marginLeft: 30,
  },
  ms4: {
    marginLeft: 40,
  },
  ms5: {
    marginLeft: 50,
  },
  me1: {
    marginEnd: 10,
  },
  me2: {
    marginEnd: 20,
  },
  me3: {
    marginEnd: 30,
  },
  me4: {
    marginEnd: 40,
  },
  me5: {
    marginEnd: 50,
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mt5: {
    marginTop: 50,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mb5: {
    marginBottom: 50,
  },
  largeText: {
    fontSize: 40,
    marginBottom: 20,
    color: _dark,
    borderBottomColor: _dark,
    borderBottomWidth: 2,
  },
  dflex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  textRight: {
    textAlign: 'right',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentStart: {
    justifyContent: 'flex-start',
  },
  justifyContentEnd: {
    justifyContentEnd: true,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  _flexDirectionColumn: {
    flexDirection: 'column',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentAround: {
    justifyContent: 'space-around',
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: _dark,
  },
  borderBottom1: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  borderDark: {
    borderWidth: 1,
    borderColor: _dark,
  },
  rounded: {
    borderRadius: 20,
  },
  rounded1: {
    borderRadius: 10,
  },
  roundedPill: {
    borderRadius: 200,
  },
  serviceParent: {
    height: '100%',
    width: 350,
    flex: 1,
  },
  centeredView: {
    width: '90%',
    height: '90%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  modalHeader: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeading: {
    fontSize: 25,
  },
  modalBtn: {
    width: 30,
    height: 30,
    fontSize: 20,
    backgroundColor: _dark,
    color: 'white',
    borderRadius: 20,
  },
  serviceCard: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  labs: {
    height: 380,
    paddingVertical: 20,
  },
  labList: {
    fontSize: 20,
    padding: 12,
    margin: 8,
    backgroundColor: _dark,
    color: 'white',
    borderRadius: 8,
  },
  labCardParent: {
    height: '100%',
    width: 380,
  },
  labCardImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 15,
  },
  labCardTextDec: {
    fontSize: 16,
    color: 'white',
  },
  labCover: {
    height: 300,
  },
  whiteTransparent: {
    backgroundColor: 'rgba(255,255,255,.3)',
  },
  blackTransparent: {
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  feedbackCard: {
    height: 200,
    borderRadius: 10,
  },
  label: {
    fontSize: 18,
    borderRadius: 5,
    paddingLeft: 10,
    color: _dark,
  },
  chips: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: _dark,
    borderRadius: 20,
    margin: 2,
  },
  darkColor: _dark,
};
export default styling;