import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet } from "react-native";
import NewsCard from './src/components/NewsCard/NewsCard'

import news_data from './src/news_data.json';


const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <View>
        
        <FlatList
          data={news_data}
          renderItem={({item}) => <NewsCard news={item}/>}
        />

      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
})