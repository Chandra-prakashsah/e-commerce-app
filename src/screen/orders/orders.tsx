import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';
import SwitchSelector from 'react-native-switch-selector';

const PAGE_SIZE = 20; // Number of items per page
const API_URL = 'https://fakestoreapi.com';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const ListItem = React.memo(({ item, index }: { item: Product, index: number }) => (
  <View style={{ margin: 10, backgroundColor: 'green', padding: 20 }}>
    <Text>{item.title}</Text>
  </View>
));

const Orders: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Product[]>([]);
  const [isProductsTab, setIsProductsTab] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const endpoint = isProductsTab ? 'products' : 'products';
      const response = await axios.get(`${API_URL}/${endpoint}?limit=${PAGE_SIZE}&page=${currentPage}`);
      const jsonData: Product[] = response.data;

      setData(prevData => [...prevData, ...jsonData]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(data.length)
  }, [currentPage, isProductsTab]);

  const handleLoadMore = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      const filtered = data.filter((item: Product) =>
        item.title?.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SwitchSelector
        options={[
          { label: 'Location', value: 'locations' },
          { label: 'Products', value: 'products' },
        ]}
        initial={isProductsTab ? 0 : 1}
        onPress={(value: string) => {
          setData([]);
          setFilteredData([]);
          setCurrentPage(1);
          setIsProductsTab(value === 'locations');
        }}
      />
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={{ width: '100%', borderWidth: 1, padding: 10, margin: 10 }}
      />
      <FlatList
        data={searchQuery ? filteredData : data}
        renderItem={({ item, index }) => <ListItem index={index} item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={
          loadingMore ? (
            <ActivityIndicator size="large" style={{ marginVertical: 10 }} />
          ) : null
        }
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={<Text>No items to display.</Text>}
      />
    </View>
  );
};

export default Orders;
