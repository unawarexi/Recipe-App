import { View } from 'react-native'
import { Grid } from 'react-native-animated-spinkit'


const SubLoader = () => {
  return (
    <View className = " items-center justify-center flex">
      <Grid size={50}  color="#ffbb0b"  />
    </View>
  )
}

export default SubLoader;