import { StyleSheet } from 'react-native'
import { verticalScale, horizontalScale, moderateScale } from '../../style/responsive-style';
import { Regular,Bold } from '../../style/fonts';
const loginScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#800080'
    },
    subContainer: {
        marginLeft:horizontalScale(20),
        marginRight:horizontalScale(20),
        backgroundColor: '#ffffff',
        height: verticalScale(450),
        width:'90%',
        paddingLeft:horizontalScale(20),
        paddingRight:horizontalScale(20),
        paddingTop:verticalScale(20),
        paddingBottom:verticalScale(20),
        borderRadius:moderateScale(20)
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: verticalScale(45),
        width: '100%',
        borderWidth: 1,
        borderColor:'#800080',
        marginTop: verticalScale(30),
        paddingHorizontal:horizontalScale(10),
        color:'#800080',
        borderRadius:moderateScale(10),
        fontFamily:Regular
    },
    btn: {
        backgroundColor: '#800080',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:horizontalScale(10),
        paddingRight:horizontalScale(10),
        paddingTop:verticalScale(10),
        paddingBottom:verticalScale(10),
        marginTop: verticalScale(30),
        borderRadius:moderateScale(10)
    },
    btnText:{
        color:'#ffffff',
        fontSize:moderateScale(16),
        fontFamily:Regular
    },
    headerText:{
        color:'#800080',
        fontSize:moderateScale(20),
        fontFamily:Regular
    },
    fingerImg:{
        width:horizontalScale(50),
        height:verticalScale(50),
        marginTop:verticalScale(10)
    },
    orText:{
        textAlign:'center',
        marginTop:verticalScale(20),
        fontSize:moderateScale(16),
        fontFamily:Regular
    },
    donotacoount:{
        marginTop:verticalScale(15),
        textAlign:'center',
        fontSize:moderateScale(16),
        fontFamily:Regular,
        textDecorationLine:'underline',
        textDecorationColor:'#800080'
    }
})
export default loginScreenStyle;