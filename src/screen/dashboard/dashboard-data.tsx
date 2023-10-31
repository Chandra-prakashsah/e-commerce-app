
import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { fetchData } from '../../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store/store'
import { getApiData } from '../../redux/reducers/fakeData';
import Loading from '../../component/loader';
import dashboardStyle from './dashboard-style';
import { FontAwesome } from '@expo/vector-icons';
import commonStyle from '../../style/commonStyle';
import Header from '../header';
import SortModal from '../../component/modal';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../type';
import { showToast } from '../../redux/reducers/toastSlice';


const MyComponent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.api.loading);
  const error = useSelector((state: RootState) => state.api.error);
  const data = useSelector((state: RootState) => state.api.data);
  const [productData, setProductData] = useState(data);
  const [searchText, setSerachText] = useState<string>('');
  const navigation=useNavigation<NavigationProp<RootStackParamList>>();
  useEffect(() => {
    setProductData(data);
  }, [data]);
  useEffect(() => {
    dispatch(getApiData());
  }, [dispatch])

  const handleSearch = (txt: string) => {
    setSerachText(txt);
    const res = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(txt.toLowerCase()) ||
        item.category.toLowerCase().includes(txt.toLowerCase())
      );
    });
    if (txt === "") {
      setProductData(data)
    } else {
      setProductData(res)
    }
  }
  const sortHandler = (title: string) => {
    if (title === 'Sort by price.') {
      const sortedData = [...productData].sort((a, b) =>
        a.price - b.price
      );
      setProductData(sortedData);
    }
    if (title === 'Sort by name.') {
      const sortedData = [...productData].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setProductData(sortedData);
    }
    if (title === 'Sort by rating.') {
      const sortedData = [...productData].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      setProductData(sortedData);
    }
  }

  const handleToast=()=>{
    dispatch(showToast({message:"fetch successfully",type:'success' }))
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Header onSearch={handleSearch} setIsVisible={setIsVisible} />
      <SortModal isVisible={isVisible} onSort={sortHandler} setIsVisible={setIsVisible} />
      {
        productData.length === 0 && !!searchText? <View style={dashboardStyle.noMatchTextContainer}><Text style={dashboardStyle.noMatchText}>No matching items found.</Text></View>:
      <FlatList data={productData} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
        return (
          <View style={[dashboardStyle.container, commonStyle.boxShadow]}>
            <View style={dashboardStyle.imageContainer}>
              <Image source={{ uri: item.image }} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
            </View>
            <View style={dashboardStyle.detailsContainer}>
              <Text style={dashboardStyle.productTitle}>{item.title}</Text>
              <Text style={dashboardStyle.productDescriptionText}>{item.description}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 100, marginTop: 10 }}>
                <Text>${item.price}</Text>
                <Text>{item.rating.rate}<FontAwesome name='star' size={15} color='green' /></Text>
              </View>
              <View style={dashboardStyle.cartBtnContainer}>
                <TouchableOpacity style={dashboardStyle.buyAddtocartBtn} onPress={()=>navigation.navigate("Orders",{screen:'BuyNow'})}>
                  <Text style={dashboardStyle.btnText}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={dashboardStyle.buyAddtocartBtn} onPress={handleToast}>
                  <Text style={dashboardStyle.btnText}>Buy</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )
      }} />
    }
    </View>
  );
};

export default MyComponent;
