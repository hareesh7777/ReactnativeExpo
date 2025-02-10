import Theme, { rMS, rS, rVS } from "@/utils/Theme";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
      <Text style={{fontFamily: 'sand', fontSize: Theme.fontSize.sixteen}}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={{fontFamily: 'sand', fontSize: Theme.fontSize.sixteen}}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={{fontFamily: 'sand', fontSize: Theme.fontSize.sixteen}}>Edit app/index.tsx to edit this screen.</Text>
      <Image source={require('../assets/images/react-logo.png')} style={{backgroundColor: 'red',width: rS(100), height: rVS(100)}} />
      <Text style={{fontFamily: 'sand', fontSize: Theme.fontSize.sixteen}}>Edit app/index.tsx to edit this screen.</Text>
      <Image source={require('../assets/images/react-logo.png')} style={{backgroundColor: 'red',width: rS(100), height: rVS(100)}} />
      <Text style={{fontFamily: 'sand', fontSize: Theme.fontSize.sixteen}}>Edit app/index.tsx to edit this screen.</Text>
      <Image source={require('../assets/images/react-logo.png')} style={{backgroundColor: 'red',width: rS(100), height: rVS(100)}} />
      <Image source={require('../assets/images/react-logo.png')} style={{backgroundColor: 'red',width: rS(100), height: rVS(100)}} />
      <Image source={require('../assets/images/react-logo.png')} style={{backgroundColor: 'red',width: rS(100), height: rVS(100)}} />
      <Image source={require('../assets/images/react-logo.png')} style={{backgroundColor: 'red',width: rS(100), height: rVS(100)}} />
    </ScrollView>
    </SafeAreaView>
  );
}
