import { StyleSheet } from 'react-native'
import { regular, semiBold } from '../../style/fonts';
import commonStyle from '../../style/commonStyle';


const dashboardStyle = StyleSheet.create({
     container:{
        backgroundColor:'#ffffff',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        padding:10,
     },
     imageContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
     },
     detailsContainer:{
      flex:3,
     },
     cartBtnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:200,
        marginTop:10,
     },
     buyAddtocartBtn:{
        backgroundColor:'green',
        width:80,
        padding:5,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
     },
     btnText:{
      fontFamily:regular,
      color:'#ffffff',
      fontSize:12,
     },
     productTitle:{
        fontSize:14,
        fontFamily:semiBold,
     },
     productDescriptionText:{
        fontFamily:regular,
        fontSize:12,
     },
     noMatchTextContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
     },
     noMatchText:{
      fontSize:14,
      fontFamily:regular,
     }
   
})
export  default dashboardStyle;