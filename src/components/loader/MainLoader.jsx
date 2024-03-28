import { View } from 'react-native'
import { Swing } from 'react-native-animated-spinkit'


const MainLoader = () => {
  return (
    <View className = " items-center justify-center flex">
      <Swing size={50}  color="#ffbb0b"  />
    </View>
  )
}

export default MainLoader;