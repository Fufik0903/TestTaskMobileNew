import { StyleSheet, View } from 'react-native';
import BannerCarousel from './components/Banners/BannerCarousel';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import BottomSheetContainer from './components/BottomSheet/BottomSheetContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

const AppContent = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.safeAreaContainer} edges={['bottom']}>
        <View style={styles.container}>
          <BannerCarousel />
          <BottomSheetContainer />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};
function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContent />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#f2f3f7',
    paddingBottom: 22,
  },
});

export default App;
