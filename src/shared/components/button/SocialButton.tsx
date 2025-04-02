import { Image, StyleSheet, Text, View } from 'react-native'
import AppButton from '../button/AppButton'
import TextBetweenLine from '../text/TextBetweenLine'
import facebookIcon from '@/assets/auth/facebook.png';
import googleIcon from '@/assets/auth/google.png';
type Props = {}
const SocialButton = (props: Props) => {
  return (
    <View style={styles.welcomeGroupButton}>
      <TextBetweenLine title='Sign in with' />
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        gap: 30
      }}>
        <AppButton
          title='facebook'
          onPress={() => alert(1)}
          textStyle={{ textTransform: "uppercase" }}
          btnStyle={{ justifyContent: "center", backgroundColor: "#fff", }}
          icons={<Image source={facebookIcon} />}
        />
        <AppButton
          title='google'
          onPress={() => alert(1)}
          textStyle={{ textTransform: "uppercase" }}
          btnStyle={{
            backgroundColor: "#fff",
            justifyContent: "center",
            paddingHorizontal: 22
          }}
          icons={<Image source={googleIcon} />}
        />
      </View>
    </View>
  )
}
export default SocialButton
const styles = StyleSheet.create({
  welcomeGroupButton: {
    flex: 1,
    gap: 30
  }
})