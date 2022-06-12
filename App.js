import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {View, Text, StyleSheet, Image,ImageBackground,TouchableOpacity, Alert, Pressable, ImagePropTypes, SafeAreaView,Button} from "react-native";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { color } from "react-native-reanimated";
export default App;

function HomePage({navigation}) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  }
  const onPressChicken = () => {
    navigation.navigate("CHICKEN");
  }
  const onPressBeef = () => {
    navigation.navigate("Beef");
  }
  const onPressPork = () => {
    navigation.navigate("Pork");
  }
  const onPressFish = () => {
    navigation.navigate("Fish");
  }
  const onPressVegetable = () => {
    navigation.navigate("Vegetable");
  }
  const onPressTC =() => {
    navigation.navigate("TC");
  }
  const onPressCU =() => {
    navigation.navigate("CU")
  }
  const onPressAb =() => {
    navigation.navigate("Ab")
  }
  return( 
    <View style={styles.logoStyle}>
    <Image style={styles.logo}
          source={require("./assets/logo.png")}/>
          
          <ScrollView>
          <TouchableOpacity onPress={onPressChicken}>
              <Image style={styles.image} source={require("./assets/chicken.jpg")}/>
              <View style={styles.textview}>
                <Text style={styles.imagetext}>CHICKEN</Text>
              </View>
            </TouchableOpacity>
    
             <TouchableOpacity onPress={onPressBeef}>
              <Image style={styles.image} source={require("./assets/beef.jpg")}/>
              <View style={styles.textview}>
                <Text style={styles.imagetext}>BEEF</Text>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={onPressPork}>
              <Image style={styles.image} source={require("./assets/pork.jpg")}/>
              <View style={styles.textview}>
                <Text style={styles.imagetext}>PORK</Text>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={onPressFish}>
              <Image style={styles.image} source={require("./assets/fish.jpg")}/>
              <View style={styles.textview}>
                <Text style={styles.imagetext}>FISH</Text>
              </View>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={onPressVegetable}>
              <Image style={styles.image} source={require("./assets/vegetables.jpg")}/>
              <View style={styles.textview}>
                <Text style={styles.imagetext}>VEGETABLES</Text>
              </View>
            </TouchableOpacity>
  <TouchableOpacity onPress={onPressTC}>
            <View style={styles.body}></View>
            <Text style={styles.footerTC}>Terms and Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressCU}>
            <View style={styles.body}>
              <Text style={styles.footer}>Contact Us</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressAb}>
            <View style={styles.body}>
              <Text style={styles.footer}>About</Text>
            </View>
          </TouchableOpacity>
    
        <View style={styles.body}>
          <Text style={styles.all}>All Rights Reserve 2022</Text> 
        </View>
          </ScrollView>
            
        </View>
        

   
  )
}
function TC ({navigation}){
  return(
    <View style={styles.body}>
      <TouchableWithoutFeedback style={{height:550, width:315, borderRadius: 20, alignSelf:"center", marginTop:50, borderWidth:1, borderColor:"#767676"}}>
      <Text style={{textAlign:"center",color:"white",fontSize:30, marginTop:40, fontFamily: "Cochin", fontWeight:"bold" }}>Terms And Condition</Text>
      <Text style={{marginLeft:30, marginRight:30, fontSize:20, color:"white",marginTop:20,textAlign:"center"}}>
          Your privacy is important to us
and we want to make it easy for you 
to understand.{'\n'}
 We will collect your data in accordance
 with our privacy and policy
and terms & conditions. {'\n'}
Please go through our detailed 
privacy and terms articles 
to understand.{'\n'}{'\n'}
By clicking accept ,
you agree to our terms and conditions.
 
      </Text>
      <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={{marginTop:60, backgroundColor:"#767676",height:38,width:90,borderRadius:10,alignSelf:"center"}}>
      <Text style={{color:"white", fontSize:15,alignSelf:"center",padding:8}}>ACCEPT</Text>
      </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  )
}
function Chickens({navigation}){
  return(
    
    <View style={styles.body}>
      <ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate("AdoboManok")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ADOBONG MANOK</Text>
        </View>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>navigation.navigate("TinolaManok")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>TINOLANG MANOK</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("ChickenCurry")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>CHICKEN CURRY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("CalderetaManok")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>CALDERETANG MANOK</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("RoastedChicken")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ROASTED CHICKEN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("ChickenInasal")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>CHICKEN INASAL</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("PiniyahangManok")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>PININYAHANG MANOK</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("AdidasHumba")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ADIDAS HUMBA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("ChickenAfritada")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>AFRITADA</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>

  )
}
function Beefs({navigation}) {
  return(
    
    <View style={styles.body}>
      <ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate("Bulalo")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>BULALO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Papaitan")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>PAPAITAN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Salpicao")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>SALPICAO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Caldereta")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>CALDERETA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Morcon")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>MORCON</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Tagalog")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>BISTEK TAGALOG</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("TAPA")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>TAPA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("SizzlingBulalo")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>SIZZLING BULALO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Pares")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>PARES</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
    
  )
}
function Porks({navigation}) {
  return(
    
    <View style={styles.body}>
      <ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate("Igado")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>IGADO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Adobo")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ADOBO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Laoya")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>LAOYA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Dinuguan")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>DINUGUAN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Kinilaw")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>KILAWIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Bagnet")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>BAGNET</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Lechon")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>LECHON KAWALI</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Pochero")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>POCHERO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Menudo")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>MENUDO</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
    
  )
}
function Fishes({navigation}) {
  return(
    <View style={styles.body}>
      <ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate("Ginataang Tilapia")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>GINATAANG TILAPIA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Escabeche")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ESCABECHE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Tulingan")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>GINATAANG TULINGAN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("PaksiwBangus")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>SINIGANG NA BANGUS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("RellenoBangus")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>RELLENONG BANGUS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("SisigBangus")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>SISIG BANGUS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Sarciado")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>SARCIADONG ISDA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("AsadoBangus")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ASADONG BANGUS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Daing")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>DAING NA BANGUS</Text>
        </View>
      </TouchableOpacity>
      </ScrollView>
    </View>
    
  )
}
function Vegetables({navigation}) {
  return(
    <View style={styles.body}>
      <TouchableOpacity onPress={()=>navigation.navigate("Ding")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>DINENGDENG</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Pakbet")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>PINAKBET</Text>
        </View>
      </TouchableOpacity >
      <TouchableOpacity onPress={()=>navigation.navigate("Chopsuey")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>CHOPSUEY</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Kare")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>KARE-KARE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Gasado")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>SAYOTE GASADO</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Poque")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>POQUE POQUE</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Sitaw")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>ADOBONG SITAW</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Ampalaya")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>GINISANG AMPALAYA</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Langka")}>
        <View style={styles.menu}>
          <Text style={styles.textbody}>GINATAANG LANGKA</Text>
        </View>
      </TouchableOpacity>
    </View>

  )
}
function CU ({navigation}){
  return(
    <View style={styles.body}>
      <TouchableWithoutFeedback style={{height:550, width:315, borderRadius: 20, alignSelf:"center", marginTop:50, borderWidth:1, borderColor:"#767676"}}>
        <Text style={{textAlign:"center",color:"white",fontSize:30, marginTop:40, fontFamily: "Cochin", fontWeight:"bold" }}>Contact Us</Text>
          <Text style={{marginLeft:30, marginRight:30, fontSize:20, color:"white",marginTop:20,textAlign:"center"}}>Got a question? Get in touch and 
one of our team will get straight 
back to you we'll respond as soon as possible.
      </Text>
              <Image style={{height:35,width:35, marginLeft:30, marginTop:20}} source={require("./assets/telegram.png")}/>
      <Text style={{position:"absolute",left:80, top:210,color:"white",fontSize:15}}>cookwiseph</Text>
      <Image style={{height:35,width:35, marginLeft:30, marginTop:20}} source={require("./assets/facebook.png")}/>
      <Text style={{position:"absolute",left:80, top:265,color:"white",fontSize:15}}>cookwiseph</Text>
      <Image style={{height:35,width:35, marginLeft:30, marginTop:20}} source={require("./assets/gmail.png")}/>
      <Text style={{position:"absolute",left:80, top:320,color:"white",fontSize:15}}>cookwise@gmail.com</Text>
      <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={{marginTop:70, backgroundColor:"#767676",height:38,width:90,borderRadius:10,alignSelf:"center"}}>
      <Text style={{color:"white", fontSize:15,alignSelf:"center",padding:8}}>HOME</Text>
      </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  )
}
function Ab({navigation}){
  return(
    <View style={styles.body}>
      <TouchableWithoutFeedback style={{height:550, width:315, borderRadius: 20, alignSelf:"center", marginTop:50, borderWidth:1, borderColor:"#767676"}}>
      <Text style={{textAlign:"center",color:"white",fontSize:30, marginTop:40, fontFamily: "Cochin", fontWeight:"bold" }}>About Us</Text>
      <Text style={{marginTop:20,color:"white", fontSize:20,marginLeft:30,fontWeight:"bold"}}>Our Vision </Text>
      <Text style={{marginLeft:30, marginRight:30, fontSize:13, color:"white",marginTop:20,textAlign:"center"}}>Our vision is to help the moms and 
beginners in kitchen to make their food ideas 
and cravings into life. CookWise will definitely 
helps in a collaborative and easy way of 
of cooking, we aim to spread and shares our 
idea in our native Filipino dishes.
      </Text>
      <Text style={{marginTop:20,color:"white", fontSize:20,marginLeft:30,fontWeight:"bold"}}>Our Story </Text>
      <Text style={{marginLeft:30, marginRight:30, fontSize:13, color:"white",marginTop:20,textAlign:"center"}}>In partial fulfilment for our project in
Mobile Computing we decided as a group to 
engage ourselves in making an app that will 
enhance our skill and love for cooking.
      </Text>
      <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={{marginTop:70, backgroundColor:"#767676",height:38,width:90,borderRadius:10,alignSelf:"center"}}>
      <Text style={{color:"white", fontSize:15,alignSelf:"center",padding:8}}>HOME</Text>
      </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  )
}


const Stack = createNativeStackNavigator();

function App () {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cookwise" options={{headerShown:false}} component={HomePage}/>
        
         <Stack.Screen name="CHICKEN" options={{title:"CHICKEN", headerStyle:{backgroundColor:"#3F3F3F"}, 
        headerTintColor:"white",headerTitleStyle:{fontWeight:"bold", fontSize:30},headerTitleAlign:"center"}} component={Chickens}/>
       
        <Stack.Screen name="Beef" options={{title:"BEEF", headerStyle:{backgroundColor:"#3F3F3F"}, 
        headerTintColor:"white",headerTitleStyle:{fontWeight:"bold", fontSize:30},headerTitleAlign:"center"}} component={Beefs}/>   
       
        <Stack.Screen name="Pork" options={{title:"PORK", headerStyle:{backgroundColor:"#3F3F3F"}, 
        headerTintColor:"white",headerTitleStyle:{fontWeight:"bold", fontSize:30},headerTitleAlign:"center"}} component={Porks}/>
        
        <Stack.Screen name="Fish"  options={{title:"FISH", headerStyle:{backgroundColor:"#3F3F3F"}, 
        headerTintColor:"white",headerTitleStyle:{fontWeight:"bold", fontSize:30},headerTitleAlign:"center"}}component={Fishes}/>
       
        <Stack.Screen name="Vegetable" options={{title:"VEGETABLES", headerStyle:{backgroundColor:"#3F3F3F"}, 
        headerTintColor:"white",headerTitleStyle:{fontWeight:"bold", fontSize:30},headerTitleAlign:"center"}} component={Vegetables}/>

        <Stack.Screen name="TC" options={{headerShown:false}} component={TC}/>
        <Stack.Screen name="CU" options={{headerShown:false}} component={CU}/>
        <Stack.Screen name="Ab"  options={{headerShown:false}}  component={Ab}/>


{/*SCREEN FOR CHICKEN MENU*/}
       
       <Stack.Screen name="AdoboManok"  options={{headerShown:false}} component={AdoboManok}/>
       <Stack.Screen name="TinolaManok"  options={{headerShown:false}} component={TinolangManok}/>
       <Stack.Screen name="ChickenCurry"  options={{headerShown:false}} component={ChickenCurry}/>
       <Stack.Screen name="CalderetaManok"  options={{headerShown:false}} component={CalderetaManok}/>
       <Stack.Screen name="RoastedChicken"  options={{headerShown:false}} component={RoastedChicken}/>
       <Stack.Screen name="ChickenInasal"  options={{headerShown:false}} component={ChickenInasal}/>
       <Stack.Screen name="PiniyahangManok"  options={{headerShown:false}} component={PininyahangManok}/>  
       <Stack.Screen name="AdidasHumba" options={{headerShown:false}} component={AdidasHumba}/>
       <Stack.Screen name="ChickenAfritada"  options={{headerShown:false}} component={ChickenAfritada}/>

{/*SCREEN FOR BEEF MENU*/}
        <Stack.Screen name="Bulalo" options={{headerShown:false}} component={BULALO}/>
        <Stack.Screen name="Papaitan" options={{headerShown:false}} component={PAPAITAN}/>
        <Stack.Screen name="Salpicao" options={{headerShown:false}} component={SALPICAO}/>
        <Stack.Screen name="Caldereta"options={{headerShown:false}} component={CALDERETA}/>
        <Stack.Screen name="Morcon" options={{headerShown:false}} component={MORCON}/>
        <Stack.Screen name="Tagalog" options={{headerShown:false}} component={TAGALOG}/>
        <Stack.Screen name="TAPA" options={{headerShown:false}} component={TAPA}/>
        <Stack.Screen name="SizzlingBulalo" options={{headerShown:false}} component={SIZZLINGBULALO}/>
        <Stack.Screen name="Pares" options={{headerShown:false}} component={PARES}/>

{/*screen for pork menu*/}

        <Stack.Screen name="Igado" options={{headerShown:false}} component={IGADO}/>
        <Stack.Screen name="Adobo" options={{headerShown:false}} component={ADOBO}/>
        <Stack.Screen name="Laoya" options={{headerShown:false}} component={LAOYA}/>
        <Stack.Screen name="Dinuguan" options={{headerShown:false}} component={DINUGUAN}/>
        <Stack.Screen name="Kinilaw" options={{headerShown:false}} component={KINILAW}/>
        <Stack.Screen name="Bagnet" options={{headerShown:false}} component={BAGNET}/>
        <Stack.Screen name="Lechon" options={{headerShown:false}} component={LECHON}/>
        <Stack.Screen name="Pochero" options={{headerShown:false}} component={POCHERO}/>
        <Stack.Screen name="Menudo" options={{headerShown:false}} component={MENUDO}/>

{/*screen for fish menu*/}

        <Stack.Screen name="Ginataang Tilapia" options={{headerShown:false}} component={GTILAPIA}/>
        <Stack.Screen name="Escabeche" options={{headerShown:false}} component={ESCABECHE}/>
        <Stack.Screen name="Tulingan" options={{headerShown:false}} component={TULINGAN}/>
        <Stack.Screen name="PaksiwBangus" options={{headerShown:false}} component={PAKSIWBANGUS}/>
        <Stack.Screen name="RellenoBangus"options={{headerShown:false}} component={RELLENOBANGUS}/>
        <Stack.Screen name="SisigBangus"options={{headerShown:false}} component={SISIGBANGUS}/>
        <Stack.Screen name="Sarciado" options={{headerShown:false}} component={SARCIADO}/>
        <Stack.Screen name="AsadoBangus" options={{headerShown:false}} component={ASADOBANGUS}/>
        <Stack.Screen name="Daing" options={{headerShown:false}} component={DAING}/>

{/*screen for vergetable menu*/}

        <Stack.Screen name="Ding" options={{headerShown:false}} component={DING}/>
        <Stack.Screen name="Pakbet" options={{headerShown:false}} component={PAKBET}/>
        <Stack.Screen name="Chopsuey" options={{headerShown:false}} component={CHOPSUEY}/>
        <Stack.Screen name="Kare" options={{headerShown:false}} component={KARE}/>
        <Stack.Screen name="Gasado" options={{headerShown:false}} component={GASADO}/>
        <Stack.Screen name="Poque" options={{headerShown:false}} component={POQUE}/>
        <Stack.Screen name="Sitaw" options={{headerShown:false}} component={SITAW}/>
        <Stack.Screen name="Ampalaya" options={{headerShown:false}} component={AMPALAYA}/>
        <Stack.Screen name="Langka" options={{headerShown:false}} component={LANGKA}/>

</Stack.Navigator>
    </NavigationContainer>

)
  }
  {/*Functions Chicken MENU*/}
function AdoboManok({navigation}){
    return(
      <ScrollView>
        <View style={styles.body}>
        <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ADOBONG{'\n'}MANOK</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/ADOBO.jpg")}/>
      <Text style={styles.ingMenu}>INGREDIENTS</Text>
      <Text style={styles.textMenu}>• 2 lbs chicken sliced into serving pieces{'\n'}
• 1 piece Knorr Chicken Cube{'\n'}
• 1 head garlic crushed{'\n'}
• 3/4 cup white vinegar{'\n'}
• 6 tablespoons soy sauce{'\n'}
• 1 1/2 teaspoons whole peppercorn{'\n'}
• 5 pieces dried bay leaves{'\n'}
• 1/2 cup water{'\n'}
• 1 teaspoon sugar{'\n'}
• 4 tablespoons cooking oil{'\n'}
</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. Combine chicken, 1/4 of the total amount of garlic,whole peppercorn, dried bay leaves, soy sauce, vinegar, and water in a cooking pot. Cover and let boil. Stir and make sure that all ingredients are well blended.
2. Add Knorr Chicken Cube and sugar. Stir. Cover the pot and cook for 10 minutes.{'\n'}
3. Turn the chicken over and cook the opposite side for another 10 minutes. Set aside.{'\n'}
4. Heat oil in a clean pan. Saute remaining garlic until it turns light brown.{'\n'}
5. Pan fry the chicken for 1 minute per side. Pour the adobo sauce into the pan. Boil until it reduces to half.{'\n'}
6. Transfer to a serving plate. Serve with warm rice.{'\n'}{'\n'}
</Text>
    </View>
    </ScrollView>
 )
}
function TinolangManok({navigation}){
    return(
      <ScrollView>
      <View style={styles.body}>
      <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>TINOLANG{'\n'}MANOK</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/tinolang-manok.jpg")}/>
      <Text style={styles.ingMenu}>INGREDIENTS</Text>
      <Text style={styles.textMenu}>• 1 whole chicken, cut into serving pieces{'\n'}
• ½ piece green papaya, cut into wedges{'\n'}
• 3 cups water{'\n'}
• 1 table spoon garlic, minced{'\n'}
• 1 medium onion, minced{'\n'}
• 1 thumb ginger, cut into strips{'\n'}
• 2 tablespoons fish sauce (patis){'\n'}
• Salt{'\n'}
</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. Sauté the garlic, onion, and ginger.{'\n'}
2. Put in the chicken and cook until color turns light brown.{'\n'}
3. Add the fish sauce and mix well.{'\n'}
4. Pour the water and simmer for 30 minutes.{'\n'}
5. Add the green papaya / sayote wedges and simmer for 5 minutes.{'\n'}
6. Add the hot pepper leaves.{'\n'}
7. Season with salt and pepper.{'\n'}
</Text>
    </View>
    </ScrollView>
  )
}
function ChickenCurry({navigation}){
      return(
        <ScrollView>
        <View style={styles.body}>
        <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>CHICKEN{'\n'}CURRY</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
        <Image style={styles.imaMenu}
        source={require("./assets/curry.jpg")}/>
        <Text style={styles.ingMenu}>INGREDIENTS</Text>
        <Text style={styles.textMenu}>• 2 tablespoons vegetable oil{'\n'}
• 1/2-1 lbs meat, cut into bite-sized pieces {'\n'}
• 1 yellow onion, diced{'\n'}
• 3 cloves garlic, minced
• 2 teaspoons grated ginger root{'\n'}
• 1/2 to 2 tablespoons of garam masala, curry powder or a combo of both{'\n'}
• 2 cups broth (can use vegetable or chicken){'\n'}
• 2 medium tomatoes, chopped, or 1 (15.5 ounces) can of diced {'\n'}
• 1/2 cup heavy whipping cream, coconut milk or full-fat Greek yogurt{'\n'}</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. Heat the oil in a flameproof casserole dish or large frying pan over a medium heat. {'\n'}
2. Add the onion and a generous pinch of salt and fry for 8-10 mins, or until the onion has turned golden brown and sticky.{'\n'} 
3. Add the garlic and ginger, cooking for a further minute.{'\n'}
4. Chop the chicken into chunky 3cm pieces, add to the pan and fry for 5 mins before stirring through the spice paste and tomatoes, along with 250ml water. {'\n'}
5. Bring to the boil, lower to a simmer and cook on a gentle heat uncovered for 25-30 mins or until rich and slightly reduced.{'\n'}
6. Stir though the yogurt, coriander and ground almonds, season and serve with warm naan or fluffy basmati rice.{'\n'}
</Text>
      </View>
      </ScrollView>
 )
}
function CalderetaManok({navigation}){
        return(
          <ScrollView>
          <View style={styles.body}>
          <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>CALDERETA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
          <Image style={styles.imaMenu}
          source={require("./assets/CALDERETA.jpg")}/>
          <Text style={styles.ingMenu}>INGREDIENTS</Text>
          <Text style={styles.textMenu}>• 1 kg Chicken Legs{'\n'}
• 1/3 cup vinegar{'\n'}
• salt to taste{'\n'}
• 1/2 tsp black peppercorns lightly cracked{'\n'}
• 1/2 Tbsp minced garlic{'\n'}
• 1 medium onion - chopped{'\n'}
• Canola oil for frying{'\n'}
• 500 gm Tomato Sauce{'\n'}
• 185 gm can of Liver Spread{'\n'}
• 2 pcs medium sized Bell Pepper seeded and sliced  {'\n'}
• 1 can of Green Peas you can also use fresh or frozen 1/2 cup{'\n'}
• 250 gm Potatoes - peeled and quartered{'\n'}
• 1/2 cup grated cheddar cheese{'\n'}
</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. In a bowl add the following ingredients vinegar, salt, garlic, and peppercorns, then mix thoroughly.{'\n'}
2. Add the chicken pieces to the mixture and mix well. Marinate chicken for at least 2 hours.{'\n'}
3. In a big pot, heat oil for frying. Fry the potatoes till cooked.{'\n'}
4. Now, Drain the Chicken from marinade and fry briefly in the oil in batches. Set aside.{'\n'}
5. Remove oil from the pot but leave about 2 Tbsp. Heat up again and saute the onion on medium heat until soft and translucent (about 4-5 minutes).{'\n'}
6. Scoop out the garlic and peppercorns from the marinade and add to the onion. Saute for a few minutes.{'\n'}
7. Add in the browned chicken, stir for a minute then add the rest of the marinade, stir and cook for about a minute.{'\n'}
8. Stir in the Tomato Sauce and bell pepper. Bring to boil then turn down the heat.{'\n'}
9. Add the fresh chilli, simmer until meat is almost done, Now add the Liver Spread and mix well to combine.{'\n'}
10. Add potatoes and peas. Simmer until potatoes are cooked.{'\n'}
11. Add grated cheese, mix well until cheese has melted.{'\n'}
12. Taste the Kaldereta sauce and add salt to correct seasonings, you can now add the Hot Chilli Sauce if preferred.{'\n'}
</Text>
        </View>
        </ScrollView>
  )
}
  function RoastedChicken({navigation}){
    return(
      <ScrollView>
<View style={styles.body}>
<TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ROASTED{'\n'}CHICKEN</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/roasted.jpg")}/>
      <Text style={styles.ingMenu}>INGREDIENTS</Text>
      <Text style={styles.textMenu}>•	2-3 lbs chicken wings{'\n'}
•	1 tsp crushed red pepper flakes{'\n'}
•	2 tbsp salt{'\n'}
•	1 tbsp siling labuyo (cayenne or chili pepper), chopped{'\n'}
•	4 cups water{'\n'}
•	¾ cup hot sauce ( I used Frank’s RedHot Wings Buffalo Sauce){'\n'}
•	1 ½ tbsp margarine{'\n'}
</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
  <Text style={styles.ingMenu}>PROCEDURE</Text>
  <Text style={styles.textMenu}>1. Combine the first 5 ingredients in a pot. Boil for 15 minutes.{'\n'}
2. Remove the chicken wings from water and transfer to a lightly greased oven safe container.{'\n'}
3. Bake wings on BROIL for 15-20 minutes turning once.{'\n'}
4. Combine hot sauce and margarine. Microwave for 2 minutes or until margarine is melted. Stir.{'\n'}
5. Remove the chicken wings from the oven.{'\n'}
6. Pour-in the hot sauce mix over the chicken.Transfer to a serving plate.{'\n'}

</Text>

    </View>
    </ScrollView>
  )
}
function ChickenInasal({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>CHICKEN{'\n'}INASAL</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/GrilledInasal.jpg")}/>
      <Text style={styles.ingMenu}>INGRIDIENTS</Text>
      <Text style={styles.textMenu}>• 2 lbs chicken sliced into serving pieces{'\n'}
• 1 piece Knorr Chicken Cube{'\n'}
• 1 head garlic crushed{'\n'}
• 3/4 cup white vinegar{'\n'}
• 6 tablespoons soy sauce{'\n'}
• 1 1/2 teaspoons whole peppercorn{'\n'}
• 5 pieces dried bay leaves{'\n'}
• 1/2 cup water{'\n'}
• 1 teaspoon sugar{'\n'}
• 4 tablespoons cooking oil{'\n'}
</Text>
<TouchableOpacity>
  <View styl={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. In a freezer bag or large bowl, combine chicken, lemongrass, salt, ground black pepper, ginger, garlic, brown sugar, vinegar, lemon-lime soda, and lemon juice.{'\n'}
2. Stir or shake the mixture until every ingredient is well incorporated. Marinade for 1 to 3 hours.{'\n'}
3. In a bowl, combine margarine, annatto oil, salt, and lemon juice then stir. Set aside.{'\n'}
4. Grill the chicken while basting generous amount of the margarine mixture.{'\n'}
5. Transfer the grilled chicken to a serving plate{'\n'}
</Text>
</View>
    </ScrollView>
  )
}
function PininyahangManok({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>PININYAHANG{'\n'}MANOK</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/pininyahang.jpg")}/>
      <Text style={styles.ingMenu}>INGREDIENTS</Text>
      <Text style={styles.textMenu}>•	1 Whole Chicken{'\n'}
•	1 whole onion, chopped{'\n'}
•	1 whole garlic, minced{'\n'}
•	2 tbsp olive oil{'\n'}
•	2 medium size potatoes, peeled and quartered (can be smaller){'\n'}
•	2 medium size carrots peeled cut into 1″ size{'\n'}
•	1 red bell pepper cut into approx 1 square inch{'\n'}
•	2 tbsp patis (fish sauce){'\n'}
•	Dash of pepper{'\n'}
•	2 tbsp pickles{'\n'}
•	1 can (500g) pineapple chunks in syrup{'\n'}
•	¾ cup evaporated milk (or fresh milk, but better results with evap){'\n'}
•	½ cup grated cheese{'\n'}
</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. Chop the chicken into small pieces.{'\n'}
2. Heat a medium dutch oven (or any pan you prefer). When it’s hot, put olive oil and heat it up. Saute garlic until golden brown, add the onion until it becomes transparent.{'\n'}
3. Add the chicken and saute for about a minute, then add patis (add more depending on your taste). Mix then add pepper and pickles. Simmer then cover. Juices will start to come out.{'\n'}
4. Wait until chicken is half cooked then add the pineapple chunks including the syrup.{'\n'}
5. When chicken is cooked, add carrots and potatoes. Simmer until the vegetables are cooked.{'\n'}
6. Add the bell pepper, then stir and bring back to a boil.{'\n'}
7. Add the milk then the cheese until melted.{'\n'}
</Text>
    </View>
    </ScrollView>
  )
}
function AdidasHumba({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ADIDAS{'\n'}HUMBA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/adidas.jpg")}/>
      <Text style={styles.ingMenu}>INGREDIENTS</Text>
      <Text style={styles.textMenu}>•	1/2 kilo chicken feet ( cleaned and fried){'\n'}
•	1/2 teaspoon black pepper{'\n'}
•	1 teaspoon atsuete powder{'\n'}
•	5 cloves garlic{'\n'}
•	1/2 cup vinegar{'\n'}
•	2 tablespoons sugar{'\n'}
•	salt to taste{'\n'}
•	hard boiled eggs ( optional){'\n'}</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. Saute the garlic then add the fried adidas, black pepper, vinegar sugar and atsuete powder then stir and simmer for few minutes.{'\n'}
2. Add the water and simmer until the adidas is really tender, add hard boiled egg if you want season it with salt then simmer until done. Serve with rice.{'\n'}</Text>
    </View>
    </ScrollView>
  )
}
function ChickenAfritada({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>CHICKEN{'\n'}AFRITADA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Chickens")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
      <Image style={styles.imaMenu}
      source={require("./assets/chickenafritada.jpg")}/>
      <Text style={styles.ingMenu}>INGREDIENTS</Text>
      <Text style={styles.textMenu}>•	2 lbs chicken, cut into serving pieces{'\n'}
•	1 large potato, quartered{'\n'}
•	1 large carrot, sliced{'\n'}
•	1 large bell pepper, sliced{'\n'}
•	1 cup green peas{'\n'}
•	8 ounces tomato sauce{'\n'}
•	4 cloves garlic, minced{'\n'}
•	4 pieces hotdogs, sliced{'\n'}
•	1 medium onion, diced{'\n'}
•	1 1/4 cups chicken broth or stock{'\n'}
•	2 pieces dried bay leaves{'\n'}
•	1 teaspoon granulated white sugar{'\n'}
•	4 tablespoons cooking oil{'\n'}
•	Salt and ground black pepper to taste{'\n'}
</Text>
<TouchableOpacity>
  <View style={styles.line}></View>
</TouchableOpacity>
<Text style={styles.ingMenu}>PROCEDURE</Text>
<Text style={styles.textMenu}>1. Pour-in cooking oil in a cooking pot or casserole then apply heat.{'\n'}
2. Pan-fry the chicken until the color turns light brown (about 3 minutes per side).{'\n'}
3. Remove the chicken from the cooking pot.{'\n'}
4. On the same cooking pot, saute garlic and onions.{'\n'}
5. Put-in the sliced hotdogs and pan-fried chicken then cook for a minute.{'\n'}
6. Pour-in tomato sauce and chicken stock then add bay leaves. Simmer for 30 to 40 minutes.{'\n'}
7. Add the potato and carrots then simmer for 7 minutes or until the vegetables are soft.{'\n'}
8. Put-in the bell pepper, green peas, salt, sugar, and ground black pepper then cook for 3 minutes more.{'\n'}
9. Turn-off heat then transfer to a serving plate.{'\n'}
</Text>
    </View>
    </ScrollView>
  )
}

//functions for beef menu
function BULALO({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>BULALO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/beef/Bulalo.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
      • 2 lbs beef shank{'\n'}
      • ½ cabbage whole leaf individually detached{'\n'}
      • 1 bundle bok choy{'\n'}
      • 2 cobs corn each cut into 3 parts{'\n'}
      • 2 Tablespoons whole peppercorn{'\n'}
      • ½ cup green onions cut unto 1 ½ inch pieces{'\n'}
      • 1 onion{'\n'}
      • 34 ounces water{'\n'}
      • Fish sauce to taste optional{'\n'}
      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. In a big cooking pot, pour in water and bring to a boil{'\n'}
    2. Put-in the beef shank followed by the onion and whole pepper corn then simmer for 1.5 hours (30 mins if using a pressure cooker) or until meat is tender.{'\n'}
    3. Add the corn and simmer for another 10 minutes{'\n'}
    4. Add the fish sauce,cabbage, pechay, and green onion (onion leeks){'\n'}
      </Text>
  </View>
  </ScrollView>
)
}
function PAPAITAN({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>PAPAITAN</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/papaitan.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1 lb beef heart cubed{'\n'}
• 1 lb beef small intestine cleaned{'\n'}
• 1 lb beef tripe cleaned{'\n'}
• ½ lb beef liver cubed{'\n'}
• 1 lb beef kidney cubed{'\n'}
• 22 grams Knorr Sinigang sa Sampaloc Mix{'\n'}
• 1 piece onion chopped{'\n'}
• 3 thumbs ginger minced{'\n'}
• 5 cloves garlic crushed{'\n'}
• 3 piece long green pepper sliced{'\n'}
• 7 cups water{'\n'}
• 8 beef bile to taste{'\n'}
• Salt and pepper to taste{'\n'}
• 3 tablespoons cooking oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Wash beef tripe and small intestine. Boil with ginger and dried bay leaves for 45 minutes. Remove from the pot and let it cool down. Slice into bite-size pieces.{'\n'}
2. Heat oil in a pan. Sauté onion, garlic, and ginger until onion softens.{'\n'}
3. Add beef heart and kidney. Sauté until it turns light brown.{'\n'}
4. Put the tripe and small intestines into the pot. Cook for 2 minutes.{'\n'}
5. Pour water into the pot. Let is boil. Adjust heat to low. Continue boiling until beef heart and kidney tenderizes.{'\n'}
6. Add beef liver and bile. Stir. Cook for 15 minutes in medium heat.{'\n'}
7. Add Knorr Sinigang sa Sampaloc Recipe Mix.{'\n'}
8. Put long green peppers into the pot and season with salt and ground black pepper. Stir. Cook for 2 minutes.{'\n'}

      </Text>
  </View>
  </ScrollView>

)
}
function SALPICAO({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>BEEF{'\n'}SALPICAO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/salpicao.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •1 kilo tenderloin beef cut into thin slices Tapa style{"\n"}
•2 tablespoons Oyster sauce{"\n"}
• 2tablespoons Worcestershire sauce{"\n"}
•  tablespoons Soy sauce{"\n"}
• 1/2 spoon sugar{"\n"}
• 1/4 spoon red chili pepper flakes{"\n"}
•  tablespoon olive oil{"\n"}
• mhead garlic peeled and minced{"\n"}
• 1/2 spoon freshly grind black pepper{"\n"}
•1/4 spoon salt{"\n"}
•  tablespoons butter{"\n"}
• anola Oil for frying{"\n"}


      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. e used Tapa sliced beef tenderloin in this recipe, you can request your meat vendor to do the Tapa slice for you.{"\n"}
2. repare all the ingredients and in a large bowl, combine salt, black pepper, half of the garlic, 3 tablespoons of Worcestershire sauce and 1 tablespoon Oyster sauce, mix well then add the beef slices and marinate for about 20 minutes to half an hour.{"\n"}
3. n a small bowl, combine all the remaining ingredients, the brown sugar, Worcestershire sauce, soy sauce, and red chili pepper flakes. Use a whisk to mix the ingredients until the sugar is completely dissolved then set aside.{"\n"}
4. emove the beef from the marinade and drain.{"\n"}
5. sing a large frying pan or wok, apply medium heat, add Canola oil, then fry the remaining garlic until it turns brown, remove the garlic and set aside.{"\n"}
6. dd the beef in the frying pan and fry in batches, do not overcook it just make the outer part turns brown about 2 to 3 minutes on each side.{"\n"}
7. dd Oyster-Soy sauce-Worcestershire mixture and fried garlic, then continue cooking while stirring regularly for about 5 to 7 minutes.{"\n"}
8. erve Hot with steamed rice and your favorite Juice.{"\n"}


      </Text>
  </View>
  </ScrollView>
)
}
function CALDERETA({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>CALDERETA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/BeefCaldereta.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 2 lbs beef, cubed{'\n'}
• 3 -4 cups water{'\n'}
• 1 medium onion, chopped{'\n'}
• 1 garlic clove, crushed{'\n'}
• 1 cup bell pepper, cut into strips{'\n'}
• 1 cup tomato sauce{'\n'}
• 1⁄2 cup tomato paste{'\n'}
• 2⁄3 cup liver, spread{'\n'}
• 1 cup grated cheese{'\n'}
• 1 cup unsweetened pineapple juice{'\n'}
• 1 tablespoon Tabasco sauce (optional){'\n'}
• 3 large bay leaves{'\n'}
• 3 medium potatoes, sliced{'\n'}
• 2 medium carrots, sliced{'\n'}
• salt and pepper{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1.Boil the beef until tender, in the water to make a nice beef broth. Add pineapple juice and onion.{'\n'}
2.In a separate pan sauté garlic until almost brown. Add to beef and broth.{'\n'}
3.Add the tomato sauce and tomato paste and allow to simmer for ten minutes.{'\n'}
4.Add bay leaves, bell pepper, carrots, and potatoes.{'\n'}
5.Simmer until potatoes and carrots are tender, then add cheese and salt and pepper to taste.{'\n'}
6.Add optional Tabasco sauce.{'\n'}
7.Cook until cheese is melted, stir.{'\n'}
8.Remove bay leaves.{'\n'}
9.Add water if the mixture is too thick.{'\n'}

      </Text>
  </View>
  </ScrollView>
)
}
function MORCON({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>MORCON</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/Morcon.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 kilo beef, sliced ¼ inch thick (3 pcs.){'\n'}
•	¼ kilo ground beef liver{'\n'}
•	200 grams sliced sausages or ham{'\n'}
•	200 grams pork fat (cut is strips){'\n'}
•	3 hard boiled eggs, sliced{'\n'}
•	¼ cup green olives – pitted & quartered{'\n'}
•	100 grams cheddar cheese in strips{'\n'}
•	100 grams grated cheddar cheese{'\n'}
•	2 onions, chopped{'\n'}
•	5 bay leaf (laurel){'\n'}
•	½ teaspoon of ground black pepper{'\n'}
•	½ cup vinegar{'\n'}
•	2 teaspoon salt{'\n'}
•	2 cups of water{'\n'}
•	2 meters thread or string (for tying){'\n'}
•	8. Slice the beef morcon, arrange on a platter and top with the sauce/ gravy poured on top.{'\n'}


      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Spread and stretch the sliced beef on your working table.{'\n'}
2. Arrange the filling on the sliced beef: sausage strips, cheese strips, olives, sliced eggs, pork fat and some ground liver.{'\n'}
3. Roll the sliced beef with all the filling inside and secure with a thread or string.{'\n'}
4. Repeat the procedure for the two remaining beef slices.{'\n'}
5. On a pot, place the beef rolls and put the water, the remaining ground liver, grated cheese, chopped onions, bay leaves, ground black pepper and salt.{'\n'}
6. Cover the pot and bring to a boil. Simmer for one hour.{'\n'}
7. Add the vinegar and continue to simmer of another hour or until beef is tender.{'\n'}

      </Text>
  </View>
  </ScrollView>
)
}
function TAGALOG({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>BISTEK{'\n'}TAGALOG</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/Bistek.jpeg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 lb beef sirloin, thinly sliced{'\n'}
•	¼ cup soy sauce{'\n'}
•	1 piece lemon or 3 pieces calamansi{'\n'}
•	½ tsp ground black pepper{'\n'}
•	3 cloves garlic, crushed{'\n'}
•	1 large onion, sliced into rings{'\n'}
•	3 tbsp cooking oil{'\n'}
•	Salt to taste{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Marinade beef in soy sauce, lemon (or calamansi), and ground black pepper for at least 1 hour{'\n'}
2. Heat the cooking oil in a pan then stir fry the onion rings until the texture becomes soft. Set aside{'\n'}
3. In the same pan where the onions were fried, fry the marinated beef (without the marinade) until color turns brown. Set aside{'\n'}
4. Put-in the garlic then saute for a few minutes{'\n'}
5. Pour the marinade and bring to a boil.{'\n'}
6. Put in the fried beef and simmer for 15 to 20 minutes or until meat is tender. Add water as needed.{'\n'}
7. Add the stir-fried onions and some salt to taste.{'\n'}

      </Text>
  </View>
  </ScrollView>
)
}
function TAPA({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>TAPA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/tapa.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	½ kilo Beef sirloin, thinly sliced{'\n'}
•	2 tbsp sugar{'\n'}
•	1 tsp ground black pepper{'\n'}
•	1 cup soy sauce{'\n'}
•	3 tbsp minced garlic{'\n'}
•	1 tsp salt{'\n'}
•	1 Clear plastic bag (we recommend Ziploc){'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    To Marinate:{'\n'}
1. Combine in a container the following ingredients; soy sauce, garlic, salt, pepper, and sugar and mix well then set aside.{'\n'}
2. After mixing all the ingredients place the Beef in the clear plastic bag or Ziploc{'\n'}
3. Pour the mixed seasonings in the Ziploc with meat and mix well.{'\n'}
4. Refrigerate the marinade for a minimum of 12 hours{'\n'}
How to Cook the Beef Tapa:{'\n'}
1. In a pan, place 2 cups of water and bring to a boil{'\n'}
2. Add the marinated beef tapa and cook until the water evaporates.{'\n'}
3. When all the water evaporated add 3 tbsp of cooking oil in the pan then fry the Tapa until done.{'\n'}
4. Serve with rice topped with fried egg and sliced tomatoes.{'\n'}
</Text>
  </View>
  </ScrollView>
)
}
function SIZZLINGBULALO({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>SIZZLING{'\n'}BULALO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/sizbulalo.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 ½ lbs beef shank{'\n'}
•	1 piece cooked sweet corn, cooked{'\n'}
•	10 ounces condensed cream of mushroom soup{'\n'}
•	2 teaspoons garlic powder{'\n'}
•	1 ½ cups fresh white mushrooms, sliced{'\n'}
•	4 tablespoons butter{'\n'}
•	2 teaspoons salt{'\n'}
•	1 teaspoon ground black pepper{'\n'}
•	3 ¾ cups water{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Make the mushroom gravy{'\n'}
1.1. Heat a cooking pot or sauce pan then add the 1 tablespoon butter and melt.{'\n'}
1.2. Put-in the mushroom and saute for 3 minutes{'\n'}
1.3. Add the condensed cream of mushroom soup then stir{'\n'}
1.4. Pour ¾ cup water; add ½ teaspoon salt and ½ teaspoon ground black pepper then stir. Simmer for 5 minutes or until the sauce thickens.{'\n'}
1.5. Set aside.{'\n'}
2. Arrange Beef Shank in a cooking pot then sprinkle 1 teaspoon salt.{'\n'}
3. Pour 3 cups water and apply heat. Let boil and simmer until the beef is tender. Remove from the cooking pot and place in a clean plate. Note: add water as needed.{'\n'}
4. Season both sides of the beef with ½ teaspoon salt, ½ teaspoon ground black pepper, and garlic powder. Set aside.{'\n'}
5. Heat a pan then add 2 tablespoons butter. Let the butter melt.{'\n'}
6. Pan-fry both sides of the beef for at least 2 minutes per side.{'\n'}
7. Heat the sizzling plate (metal plate) then put-in 1 tablespoon butter and let melt.{'\n'}
8. Arrange the pan fried beef on the sizzling plate, top with mushroom gravy, and place the corn on the side.{'\n'}


</Text>
  </View>
  </ScrollView>
)
}
function PARES({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>BEEF{'\n'}PARES</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Beefs")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/pares.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 lb beef (uncut, preferably brisket)
•	¼ cup soy sauce{'\n'}
•	1 tsp ground black pepper{'\n'}
•	¼ cup sugar{'\n'}
•	2 tbsp ginger, minced{'\n'}
•	2 cloves garlic crushed{'\n'}
•	1 medium-sized onion, minced{'\n'}
•	4 cups water{'\n'}
•	1 piece beef cube{'\n'}
•	2 pieces star anise{'\n'}
•	2 tbsp cooking oil{'\n'}
•	3 tbsp scallions or green onions, finely chopped{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Pour the water in a pot and bring to a boil.{'\n'}
2. Put-in the beef cube and beef then boil until the meat is tender (about 1 to 2 hours if slow cooked or 20 mins if using a pressure cooker){'\n'}
3. When the meat is tender, remove from the pot and allow to cool down. Do not throw away the stock used for boiling.{'\n'}
5. Slice the boiled meat in cubes and set aside.{'\n'}
6. Place the oil in a pan then heat-up. Saute the garlic, ginger, and onion.{'\n'}
7. Put-in the sliced meat and saute for about 2 to 3 minutes{'\n'}
8. Add the soy sauce, ground black pepper, sugar, and 1 cup of beef stock (stock used in boiling the meat) then bring to a boil.{'\n'}
9. Put-in the star anise and simmer for 10 to 15 minutes or until the sauce thickens{'\n'}
10. Garnish with scallions on top.{'\n'}
11. Serve with Garlic Fried Rice and soup{'\n'}

</Text>
  </View>
  </ScrollView>
)
}

//functions for pork menu
function IGADO({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>IGADO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/Igado.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1 1/2 lbs. pork belly, cut into 1/2-inch strips{'\n'}
• 1/2 lbs. pork liver, cut into 1/2-inch strips   {'\n'}
• 2 tablespoons of cooking oil{'\n'}
• 5 cloves garlic, peeled and sliced{'\n'}
• 1 small onion, peeled and sliced thinly{'\n'}
• 3 bay leaves{'\n'}
• 1 teaspoon ground black pepper{'\n'}
• 1/2 cup vinegar{'\n'}
• 1/4 cup soy sauce{'\n'}
• 1 red bell pepper, sliced into strips{'\n'}
• 1 small can green peas{'\n'}
• salt to taste{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Make a marinade by combining soy sauce and vinegar.{'\n'}
2. In a bowl, place pork belly along with the marinade. In a separate bowl, also place pork liver along with the marinade.{'\n'}
3. Let it marinate for 30 minutes. Drain marinade from pork belly and liver. Set aside the marinade for later use.{'\n'}
4. Heat oil in pan. Sauté garlic and onion until it turns fragrant and translucent, respectively.{'\n'}
5. Add pork belly, bay leaves, and ground black pepper. Sauté until it starts to render oil.  {'\n'}
6. Add liver and cook for 5 minutes. Season with salt to taste.  {'\n'}
7. Add bell pepper and green peas. Cook for 5 minutes until dish is done.{'\n'}


</Text>
  </View>
  </ScrollView>
  )
}
function ADOBO({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ADOBO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/AdoboBaboy.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1 & ½ lb pork belly, cubed{'\n'}
• 1 & ½ cup beef broth or water{'\n'}
• 5 tbsp soy sauce{'\n'}
• 3 tbsp coconut vinegar{'\n'}
• 1 & ½ teaspoons whole peppercorn{'\n'}
• 5 to 6 pcs dried bay/ laurel leaves{'\n'}
• 6 to 8 cloves garlic, crushed{'\n'}
• Salt, to taste{'\n'}
• 3 tbsp cooking oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Cooking Procedure:{'\n'}
2. In a cooking pot, pour-in and heat the cooking oil.{'\n'}
3. When the oil is hot, add the crushed garlic.{'\n'}
4. Cook until it starts to turn light brown.{'\n'}
5. Add the whole peppercorns and bay leaves.{'\n'}
6. Continue to cook this for about 20 seconds.{'\n'}
7. Put the pork belly in the cooking pot.{'\n'}
8. Stir and cook until it turns light brown{'\n'}
9. At this point, check the garlic and make sure that it does not get burnt  (you may adjust heat if necessary).{'\n'}
10. Pour the soy sauce and the beef broth (or water) and let it boil.{'\n'}
11. Cover and cook in low heat for 40 minutes or until the pork gets tender (add more beef broth or water in case the liquid starts to dry).{'\n'}
12. Pour- in the vinegar and let the liquid re- boil.{'\n'}
13. Stir and cook for another 8 minutes.{'\n'}
14. Taste and add salt if needed.{'\n'}
15. Remove from heat and transfer to a serving plate. Serve and enjoy{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function LAOYA ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>LAOYA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/laoya.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1-2 kg pork knuckle{'\n'}
• 3 medium potatoes{'\n'}
• 3 eggplants{'\n'}
• 3-4 stalks chinese cabbages{'\n'}
• 2 green chilli{'\n'}
• 4-5 pcs star anise{'\n'}
• 1 stalk green beans{'\n'}
• 1 tbsp anatto seeds{'\n'}
• 1 large red onion{'\n'}
• salt{'\n'}
• pepper{'\n'}
• sugar{'\n'}
• fish sauce{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Chop the pork knuckles or let the meat vendor chop it for you about 1 and 1/2 inches thick.{'\n'}
2. Wash and clean the pork knuckles, remove or shave the small hairs if you found any.{'\n'}
3. Then smoke the pork knuckles using the cold smoke process. You can also grill the pork partially to improve the taste if you don't want to smoke it. Set aside.{'\n'}
4. Heat a big wok in medium to strong fire, then add the smoked pork knuckles, let it sizzle for a few seconds then add onion and garlic, potatoes, cabbage, ground black pepper, bay leaves, patis and water. Do not mix or stir.{'\n'}
5. Cook for 2 hours or until the meat becomes tender.{'\n'}
6. Then add sugarcane vinegar or sukang Iloko and cook for another 25 minutes. Again do not mix or stir. Serve hot in a soup plate.{'\n'}
</Text>
  </View>
  </ScrollView>
  )
}
function DINUGUAN ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>DINUGUAN</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/dinuguan.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • ½ kg Pork diced{'\n'}
• ½ Pork innards diced{'\n'}
• 2 Gloves garlic, minced{'\n'}
• 1 medium Onion, diced{'\n'}
• 1/4kg Pork liver, diced{'\n'}
• 2 Tbls Patis{'\n'}
• 1 Tsp salt{'\n'}
• 1 Cup vinegar{'\n'}
• 2 Cups broth{'\n'}
• 2 Cups pig’s blood{'\n'}
• 1 tsp sugar{'\n'}
• 2 Hot banana peppers{'\n'}


      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Cover pork innards with water and simmer for 30 minutes. Removed from broth and dice. Save 1-1/2 cup of broth.{'\n'}
2. Using saucepan, heat oil and sauté garlic and onions for a minutes. Add pork innards, liver , patis , salt. Sauté for 5 min.{'\n'}
3. Add vinegar and bring to boil without stirring. Lower heat and simmer uncovered until most of the liquid has evaporated.{'\n'}
4. Add broth , simmer for 10mins . Stir in blood and sugar; cook until thick, stirring continuously to avoid curding.{'\n'}
5. Add hot peppers and cook 5 more minutes.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function KINILAW ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>KILAWIN</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/kilawin.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1 pounds Tanigue or Tuna skinned and deboned{'\n'}
• 1 cup vinegar{'\n'}
• 4 pieces calamansi or half of a lemon{'\n'}
• 2 thumbs ginger minced{'\n'}
• 1 medium red onion minced{'\n'}
• 2 pieces green chili or Thai chili, cut into thin slices{'\n'}
• Salt{'\n'}
• Fresh ground pepper{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Wash the fish meat and tap dry with paper towels. Cut into 1-inch cubes.{'\n'}
2. Place the fish cubes in a bowl. Pour in the vinegar and the juice from calamansi. Season with salt and pepper. Add the ginger, onion, and chili. Toss gently until well blended.{'\n'}
3. Cover and marinate for an hour or up to 3 hours in the fridge. The fish should lose its translucent and pinkish color and should turn whiter and opaque.{'\n'}
4. Transfer to a serving dish and serve immediately.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function BAGNET ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>BAGNET</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/bagnet.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	2 kilo pork liempo (pork belly), whole cut  {'\n'}
•	½ head garlic{'\n'}
•	1 tsp. Peppercorns{'\n'}
•	2 tbsp salt{'\n'}
•	1 bay leaves{'\n'}
•	Cooking oil for frying{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Wash pork belly, cut into large chunks and place in a large pot.  Add enough water to cover the pork belly.{'\n'}
2. Add in salt, peppercorns, garlic, bay leaves. Cover and bring to a boil, simmer for 30-45 minutes or until tender. Remove all scum that rises.{'\n'}
3. Remove from the pot and place in a colander and let sit for a while so the liquid will drain. Prick the skin many times using the tines of a fork then Dry with paper towels if necessary. Keep refrigerated for several hours.{'\n'}
4. In a large kawali heat enough cooking oil and deep fry pork belly at low heat for 30-45 minutes.{'\n'}
5. Remove pork belly from the kawali and drain oil in a colander or paper towels, allow to cool completely.{'\n'}
6. Reheat the same oil over moderate heat deep fry the pork belly once more for 10-15 minutes or until golden brown, crisp and blisters appear on the skin. Drain on paper towels.{'\n'}
7. Chop bagnet to serving pieces and serve immediately with a selection of sukang Iloko or tomatoes and onions with bagoong isda dip.{'\n'}
</Text>
  </View>
  </ScrollView>
  )
}
function LECHON({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>LECHON{'\n'}KAWALI</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/lechon.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 ½ lbs pork liempo (pork belly){'\n'}
•	3 garlic cloves, crushed{'\n'}
•	2 laurel leaves (bay leaves){'\n'}
•	1 teaspoon peppercorns or ½ teaspoon black pepper{'\n'}
•	Salt{'\n'}
•	Water, for boiling{'\n'}
•	Oil (for frying){'\n'}
•	Sauce:{'\n'}
•	3 tablespoons soy sauce{'\n'}
•	5 tablespoons vinegar{'\n'}
•	1 shallot, minced or 1 small onion, minced{'\n'}
•	1 garlic clove, minced{'\n'}
•	Chili peppers (optional){'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Cut the pork belly into serving pieces then combine with the garlic, peppercorn,laurel leaves, salt and water in a pan.{'\n'}
2. Bring to a boil and simmer for 35-45 minutes or until skin is tender.{'\n'}
3. Drain, cool and air dry.{'\n'}
4. Deep-fry liempo pieces in batches until golden brown and blisters appear on skin.{'\n'}
5. Mix all the sauce ingredients and serve lechon kawali while it’s hot.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function POCHERO ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>POCHERO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/pochero-.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 lb pork belly, chopped{'\n'}
•	2 medium tomatoes, diced{'\n'}
•	1 medium onion, diced{'\n'}
•	1 teaspoon garlic, minced{'\n'}
•	2 to 2 ½ tablespoons patis (fish-sauce){'\n'}
•	1 tablespoon whole pepper corn{'\n'}
•	1 small can tomato sauce{'\n'}
•	1 cup chick peas (garbanzos){'\n'}
•	1 large plaintain banana (ripe), chopped{'\n'}
•	1 medium sized potato, cubed{'\n'}
•	1 small cabbage, quartered{'\n'}
•	¼ lb long green beans{'\n'}
•	1 bunch bok choy (pechay){'\n'}
•	1 cup water{'\n'}
•	2 tablespoons cooking oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Heat cooking oil in a cooking pot.{'\n'}
2. Saute garlic, onions, and tomatoes.{'\n'}
3. Add pork and cook until the color turns light brown.{'\n'}
4. Put-in fish sauce, whole pepper corn, and tomato sauce. Stir.{'\n'}
5. Add water and let boil. Simmer until pork is tender (about 30 to 40 minutes).{'\n'}
6. Put-in potato, plantain, and chick peas. Cook for 5 to 7 minutes.{'\n'}
7. Add cabbage and long green beans. Cook for 5 minutes.{'\n'}
8. Stir-in the bok choy. Cover the pot and turn off the heat.{'\n'}
9. Let the residual heat cook the bok choy (about 5 minutes).{'\n'}
10. Transfer to a serving plate and serve.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function MENUDO ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>MENUDO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Porks")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/menudo.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	600g minced pork{'\n'}
•	1 cup potatoes, chopped{'\n'}
•	1 cup carrots, chopped{'\n'}
•	½ cup raisins{'\n'}
•	½ cup green peas{'\n'}
•	1 large red capsicum, chopped{'\n'}
•	1 ½ cup chicken stock{'\n'}
•	4 tbsp tomato paste{'\n'}
•	2 tbsp white vinegar{'\n'}
•	2 tbsp soy sauce{'\n'}
•	1 large white onion, chopped{'\n'}
•	4 cloves garlic, minced{'\n'}
•	2 pcs bay leaves, 1 tbsp sugar, salt, freshly ground black pepper, oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. In a pot add oil then saute garlic and onions, once onions are soft add minced pork and mix until brown.{'\n'}
2. Add stock, tomato paste, vinegar, soy sauce, sugar, potatoes, carrots and bay leaves. Bring to a boil then simmer for 10 minutes.{'\n'}
2. Add green peas, raisins and capsicum then simmer for 10 more minutes.{'\n'}
3. Season with salt and freshly ground pepper{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}

//FUNCTIONS FOR FISH MENU
function GTILAPIA({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>GINATAANG{'\n'}TILAPIA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/GINATAAN.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 3-4 pcs or ½ kilo fresh Tilapia{'\n'}
• 1 pc large Onion, diced{'\n'}
• 1 tablespoon Ginger, minced{'\n'}
• 1/8 cup vinegar{'\n'}
• 2 pcs Siling Haba, sliced{'\n'}
• 1 tsp shrimp paste (bagoong){'\n'}
• ¾ cup kakang gata (freshly squeezed coconut milk){'\n'}
• 1 tbsp. fish sauce (patis){'\n'}
• Canola Oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. In a frying pan pour Canola oil then sauté garlic, ginger, and onions{'\n'}
2. Add the fish sauce and shrimp paste{'\n'}
3. Pour-in the Coconut milk and stir until natural oil from the coconut cream comes out{'\n'}
4. Add the siling haba and simmer for 2 minutes{'\n'}
5. Lower the heat and add the tilapia and pour vinegar{'\n'}
6. Cover your pan and simmer for 7 to 10 minutes{'\n'}
7. Serve hot with steamed rice.{'\n'}


</Text>
  </View>
  </ScrollView>
  )
} 
function ESCABECHE ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ESCABECHE</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/escabeche.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 large fish (1 to 2 lbs), cleaned and salted{'\n'}
•	1 medium red bell pepper, sliced into strips{'\n'}
•	1 medium red onion, sliced{'\n'}
•	1 cup white vinegar{'\n'}
•	5 cloves garlic, crushed{'\n'}
•	1 teaspoon whole peppercorn{'\n'}
•	½ teaspoon salt{'\n'}
•	¼ cup sugar{'\n'}
•	½ cup cooking oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Heat cooking oil in a frying pan then fry both sides of the fish until a bit crispy. Set aside.{'\n'}
2. Heat a clean pan and pour-in the vinegar. Let boil.{'\n'}
3. Add sugar, whole peppercorn, and galic. Cook for 1 minute.{'\n'}
4. Put-in the onion and red bell pepper. Stir and cook until the vegetables are tender.{'\n'}
5. Sprinkle salt and then stir.{'\n'}
7. Put-in the fried fish. Cook for 2 to 3 minutes.{'\n'}
8. Turn-off heat and transfer to a serving{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function PAKSIWBANGUS({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>SINIGANG NA{'\n'}BANGUS</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/sinigang.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 Big Bangus ( Milkfish ), scaled, cleaned, cut into 6 to 7 slices{'\n'}
•	1 head garlic, crushed{'\n'}
•	1 small onion, quartered{'\n'}
•	1 thumb-sized ginger, crushed{'\n'}
•	2 pcs finger chilies (siling haba){'\n'}
•	3 pcs small, round eggplant, quartered{'\n'}
•	1 cup sugarcane vinegar{'\n'}
•	½ cup water{'\n'}
•	2 Tbsp fish Sauce{'\n'}
•	½ tsp peppercorns{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Wash and clean your bangus. Remove the gills and the scales. Rub them with salt. Let sit for at least 10 minutes.{'\n'}
2. In a large saucepan, put half of the garlic, onion and ginger and some peppercorns.{'\n'}
3. Arrange sliced bangus on top. Add the remaining garlic, onion and ginger.{'\n'}
4. Then add water, vinegar and fish sauce. Sprinkle peppercorns on top. Cover and let it simmer for about fifteen minutes.{'\n'}
5. Add the eggplant and chilli pepper. Continue simmering for another five minutes or until vegetables are cooked.{'\n'}
6. Remove from heat. Serve Paksiw na Bangus with hot rice!{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function RELLENOBANGUS({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>RELLENONG{'\n'}BANGUS</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/relleno.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 large size bangus{'\n'}
•	1 onion, chopped finely{'\n'}
•	4 cloves garlic, minced{'\n'}
•	1 small size carrot, small cubes{'\n'}
•	1 box raisins (optional){'\n'}
•	2 tomatoes, chopped{'\n'}
•	1 raw egg, large{'\n'}
•	1 tsp vetsin (optional){'\n'}
•	1 tsp salt{'\n'}
•	½ tsp Worcestershire sauce{'\n'}
•	1 green bell pepper, chopped finely{'\n'}
•	2 tbsp flour{'\n'}
•	Cooking oil for frying{'\n'}
•	Ham, finely chopped{'\n'}
•	Cooked peas{'\n'}


      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Scrape fish scales. Clean the fish.{'\n'}
2. Gently pound fish to loosen meat from the skin.{'\n'}
3. Use flat side of a knife in pounding.{'\n'}
4. Break the big bone at the nape and on the tail.{'\n'}
5. Insert the end of the handle of an aluminum kitchen turner (sandok) through the fish neck.{'\n'}
6. Gently scrape down the handle between the meat and the skin.{'\n'}
7. Scrape down to the tail, going around and on the other side of the fish.{'\n'}
8. If you feel the meat is entirely separated from the skin, remove the handle, squeeze and push out meat (with the big bone), starting from the tail going out through the head. This way, you will be able to push out the whole meat without cutting an opening on the skin.{'\n'}
9. Marinate skin and head of the fish with soy sauce and calamansi juice. Set aside.{'\n'}
10. Boil fish meat in a little water.{'\n'}
11. Drain. Pick out bones. Flake meat.{'\n'}
12. Saute garlic until brown.{'\n'}
13. Add onion and tomatoes.{'\n'}
14. Stir in fish meat, carrot, and pepper.{'\n'}
15. Season with salt, vetsin, ground pepper, and Worcestershire sauce.{'\n'}
16. Add raisins.{'\n'}
17. Transfer cooked mixture to a plate.{'\n'}
18. Cook, then, add raw egg and flour.{'\n'}
19. Fill in mixture in bangus skin.{'\n'}
20. Wrap bangus in wilted banana leaves or aluminum foil. Fry.{'\n'}
21. Cool before slicing.{'\n'}
22. Garnish with sliced fresh tomato, spring onions or parsley.{'\n'}
23. Serve with catsup.{'\n'}


</Text>
  </View>
  </ScrollView>
  )
}
function SISIGBANGUS({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>SISIG NA{'\n'}BANGUS</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/sisigbangus.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	½ cup finely chopped onions{'\n'}
•	¼ cup vinegar{'\n'}
•	½ tsp. Soy sauce{'\n'}
•	½ tsp. Chili powder{'\n'}
•	Pinch of sugar{'\n'}
•	1 ½ tbsps. Oyster sauce{'\n'}
•	1 ½ cups deboned and diced bangus (Milk Fish){'\n'}
•	½ tsp. Salt{'\n'}
•	½ tsp. Pepper{'\n'}
•	1 ½ tsps. Oil{'\n'}
•	1 tsp. Finely chopped garlic{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Combine onions, vinegar in a pan, simmer until the vinegar is reduced and onions are cooked. Set it aside.{'\n'}
2. In a small bowl, combine soy sauce, chili powder, sugar and oyster sauce.{'\n'}
3. Marinate bangus in mixture for a few hours. Just before cooking, season with salt and pepper.{'\n'}
4. In a pan, heat oil and saute garlic. Add the onions with vinegar and the marinated fish. Simmer until liquid is reduced.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function SARCIADO ({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>SARCIADO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/SARCIADO.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	2 lbs Tilapia, cleaned{'\n'}
•	3 pieces medium-sized tomatoes, diced{'\n'}
•	3 pieces medium-sized onions, diced{'\n'}
•	1 ¾ cups water{'\n'}
•	½ teaspoon ground black pepper{'\n'}
•	½ cup green onions, chopped (optional){'\n'}
•	2 teaspoons garlic, minced{'\n'}
•	3 pieces raw eggs, beaten{'\n'}
•	2 tablespoons fish sauce{'\n'}
•	Cooking oil for frying{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Heat oil in a frying pan then fry the fish. Ensure that salt has been rubbed over the fish before frying.{'\n'}
2. Remove the fish from the frying pan and place in a a plate with paper towels. Set aside.{'\n'}
3. Using a clean pan, heat about 2 teaspoons of cooking oil then saute the garlic, onions, and tomatoes{'\n'}
4. Add the fish sauce and ground black pepper then stir.{'\n'}
5. Put-in the chopped green onions and water then bring to a boil.{'\n'}
6. Add the fried fish and simmer for 3 to 5 minutes.{'\n'}
7. Pour the beaten eggs on the pan. Ensure that it is distributed evenly.{'\n'}
8. Once the eggs curdles or coagulates, you may start stirring the mixture.{'\n'}
9. Simmer for another 2 minutes than transfer to a serving plate.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function ASADOBANGUS({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ASADONG{'\n'}BANGUS</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/asadongbangus.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 Large Milkfish (bangos){'\n'}
•	1/2 Cup soya sauce{'\n'}
•	1 Lemon{'\n'}
•	1 Large white onions{'\n'}
•	6 Cloves garlic{'\n'}
•	Cooking oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Clean fish by removing the scales and gills, slice into serving pieces. In a shallow bowl, combine the soy sauce and lemon juice.{'\n'}
2. Marinate the fish for at least an hour, or overnight in refrigerator for thicker steaks. Heat oil in a frying pan, fry the fish to a light golden brown. Drain and set aside.{'\n'}
3. Saute minced garlic on the same oil (reduced) and frying pan , until golden brown. Add chopped onions and stir fry till the onions are translucent, remove and set aside.{'\n'}
4. In the same frying pan, pour the marinade, fish and simmer for three minutes. Garnish with onion and garlic and serve hot with rice.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function DAING({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>DAING</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/daing.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	2 pcs. Boneless Bangus ( Milkfish ), Butterflied with skin-on{'\n'}
•	2/3 cup vinegar{'\n'}
•	1 tsp. salt{'\n'}
•	1/4 tsp. freshly ground black pepper{'\n'}
•	4 cloves crushed garlic.{'\n'}
•	4 tbsps. of cooking oil{'\n'}


      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    Marinating PROCEDUREs:{'\n'}
1. Flatten Bangus with skin on top and place in baking pan (or any flat surface like baking pan){'\n'}
2. Sprinkle the crushed garlic on all the Bangus surface{'\n'}
3. Now pour in vinegar, then season with pepper and salt.{'\n'}
4. Safely cover and narinate Bangus in the refrigerator overnight to get full flavor.{'\n'}
To Cook:{'\n'}
5. In a hot frying pan, add the 4 tbsps. of cooking oil and heat till it just starts to smoke over medium-high heat.{'\n'}
6. Place the Bangus fillet, skinside down.{'\n'}
7. Lower heat to medium and cook uncovered about 4 minutes each side.{'\n'}
8. Brown the marinade garlic and place it on top of the bangus.{'\n'}
9. Serve Daing na Bangus with rice{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function TULINGAN({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>GINATAANG{'\n'}TULUINGAN</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Fishes")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/relleno.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	3 Small size 1 lbs Skipjack Tuna (Tulingan){'\n'}
•	1 Cup coconut cream{'\n'}
•	1 Onion slice{'\n'}
•	1 Tablespoon grated ginger{'\n'}
•	3 Cloves garlic{'\n'}
•	4 Tablespoon Lemon Zest{'\n'}
•	1 Large eggplant{'\n'}
•	2 Tablespoon fish sauce{'\n'}
•	2 Pieces long chili{'\n'}
•	¼ Cup water{'\n'}
•	Cooking oil{'\n'}


      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Wash the fish with clean running water, rub with salt.{'\n'}
2. Fry the fish until golden brown, remove and set aside.{'\n'}
3. Saute Ginger, garlic and onion with some hot oil.{'\n'}
4. Pour the coconut milk, water and lemon zest, let it boil.{'\n'}
5. Add the fish, eggplant, chili, fish sauce and pepper.{'\n'}
6. Cover and simmer until the sauce reduces and thickens.{'\n'}
7. Adjust the taste by adding salt or fish sauce.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}

//functions for vegetable menu

function DING({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>DINENGDENG</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/dinengdeng.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1 whole milk fish sliced and grilled{'\n'}
• 2 to 3 cups malunggay moringa leaves, cleaned{'\n'}
• 2 cups squash flower{'\n'}
• 12 to 15 pieces small to medium sized okra{'\n'}
• 1 bundle string beans sliced into 3 inch pieces{'\n'}
• 2 pieces medium ampalaya bitter gourd, cored and sliced{'\n'}
• 2 to 3 tablespoons bagoong isda unprocessed fish sauce{'\n'}
• 1 knob ginger sliced{'\n'}
• 2 medium tomato chopped{'\n'}
• 1 medium onion chopped{'\n'}
• 3 cups water{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Bring water to a boil in a large cooking pot.{'\n'}
2. Add the ginger, onion, and tomato. Cook covered for 5 minutes.{'\n'}
3. Pour-in the bagoong isda. Stir.{'\n'}
4. Add okra and string beans. Stir and add the ampalaya. Cook in medium heat for 7 to 10 minutes.{'\n'}
5. Put-in the squash flower and malunggay leaves. Cook for 3 to 5 minutes.{'\n'}
6. Add the grilled milk fish. Let it stay for 3 to 5 minutes to add flavor to the dish.{'\n'}
</Text>
  </View>
  </ScrollView>
  )
}
function PAKBET({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>PINAKBET</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/pinakbet.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1 tablespoon canola oil{'\n'}
• 1 onion, peeled and chopped{'\n'}
• 2 cloves garlic, peeled and minced{'\n'}
• 1/2 pound pork belly, cut into 1-inch cubes{'\n'}
• 1 tablespoon shrimp paste{'\n'}
• 2 Roma tomatoes, chopped{'\n'}
• 2 cups water{'\n'}
• 1/2 small kalabasa, peeled and cut into pieces{'\n'}
• 8 okra, ends trimmed{'\n'}
• 1/2 bunch long beans, ends trimmed and cut into 3-inch lengths{'\n'}
• 1 medium ampalaya (bittermelon), seeded, halved and cut into 1-inch thick{'\n'}
• 1 large eggplant, ends trimmed and cut into 1-inch thick{'\n'}
• salt and pepper to taste{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. In pot over medium heat, heat oil. Add onions and garlic and cook, stirring regularly, until softened.{'\n'}
2. Add pork and cook, stirring occasionally, until lightly browned.{'\n'}
3. Add shrimp paste and continue to cook, stirring occasionally, until it begins to brown.{'\n'}
4. Add tomatoes and cook, mashing with the back of a spoon, until softened and have released juice.{'\n'}
5. Add water and bring to a boil. Lower heat, cover and cook for about 15 to 20 minutes or until meat is tender. Add more water in 1/2 cup increments as needed to maintain about 1 cup of liquid.{'\n'}
6. Add squash and cook for about 2 minutes or until almost tender.{'\n'}
7. Add long beans and continue to cook until tender-crisp.{'\n'}
8. Add ampalaya, eggplant, and okra. Continue to cook for about 4 to 5 minutes or until vegetables are tender yet crisp.{'\n'}
9. Season with salt and pepper to taste. Serve hot.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function CHOPSUEY({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>CHOPSEUY</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/chopseuy.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • 1/4 kilo pork sliced into small pieces{'\n'}
• 1/4 kilo shrimps shelled, deveined and halved{'\n'}
• 1/4 kilo chicken liver and gizzard sliced to small pieces{'\n'}
• 1/4 kilo cauliflower broken to bite size{'\n'}
• 1/4 kilo string beans{'\n'}
• 1/4 kilo snow peas sitsaro{'\n'}
• 1/4 kilo cabbage cut into squares{'\n'}
• 2 stalks of leeks cut into 2" long pieces{'\n'}
• 3 stalks celery cut into 2" long pieces{'\n'}
• 5 cloves garlic diced{'\n'}
• 2 onions diced{'\n'}
• 1 carrot sliced thinly{'\n'}
• 1 piece red bell pepper cut in strips{'\n'}
• 1 piece green bell pepper. cut in strips{'\n'}
• 2 tablespoons of cornstarch dissolved in 1/4 cup of water{'\n'}
• 2 cups chicken stock broth{'\n'}
• 3 tablespoons of sesame oil{'\n'}
• 3 tablespoons of patis fish sauce{'\n'}
• 4 tablespoons of corn oil or vegetable oil{'\n'}
• Salt to taste{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. In a big pan or wok, sauté garlic, onions then add in the pork. chicken liver and gizzard. Add 1 cup of stock, pinch of salt and simmer for 15 minutes or until pork and chicken giblets are cooked.{'\n'}
2. Mix in the shrimp then all the vegetables. Add the remaining 1 cup of stock, patis and the dissolved cornstarch. Cook for about 10 minutes or until the vegetables are done. Add the sesame oil.{'\n'}
3. Salt and pepper to taste.{'\n'}
4. Serve hot with rice.{'\n'}

</Text>

  </View>
  </ScrollView>
  )
}
function KARE({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>KARE-KARE</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/KARE.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    • ½ kg ox tail, cut into serving portions{'\n'}
• ¾ cup water{'\n'}
• 1 1/3 cup eggplant, sliced (optional){'\n'}
• 1 cup sitaw, cut up{'\n'}
• Puso ng saging/banana heart (optional){'\n'}
• 1 bunch pechay Tagalog{'\n'}
• 1 pack DEL MONTE Quick ‘n Easy Kare-Kare Mix (50g){'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Boil oxtail in water and simmer until meat is tender.{'\n'}
2. Add eggplant, sitaw, banana heart, and pechay ang simmer until vegetables are half-cooked.{'\n'}
3. Pour dissolved DEL MONTE Quick ‘n Easy Kare-Kare Mix and simmer for 5 minutes.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function GASADO({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>SAYOTE{'\n'}GASADO</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/GASADO.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	2 large chayote, sliced{'\n'}
•	300g pork belly, cubed{'\n'}
•	½ cup chicken stock{'\n'}
•	4 cloves garlic, minced{'\n'}
•	2 pcs small shallots, finely chopped{'\n'}
•	Fish sauce{'\n'}
•	Freshly ground black pepper{'\n'}
•	Oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. In a wok add oil and fry pork pieces until golden brown and crispy. Remove pork then set aside.{'\n'}
2. Add shallots and garlic then stir fry until shallots becomes soft.{'\n'}
3. Add chayote and stir fry for 1 minute{'\n'}
4. Add chicken stock and pork bring to a boil and simmer for 5 minutes or until chayote is tender.{'\n'}
5. Season with fish sauce and freshly ground black pepper.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function POQUE({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>POQUE{'\n'}POQUE</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/poque.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	3 medium eggplants boil and mash{'\n'}
•	3 clove garlic, minced{'\n'}
•	½ onion, chopped{'\n'}
•	4 medium sized tomatoes, diced{'\n'}
•	3 tbsp cooking oil{'\n'}
•	¾ teaspoon salt ( just add to your taste preference){'\n'}
•	1/8 pepper to taste{'\n'}
•	1/8 teaspoon msg. Or vetsin to taste{'\n'}
•	1 small green bell pepper{'\n'}
•	2 eggs beaten{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Boil or grill the eggplants and peel off skin. Mash the peeled eggplant.{'\n'}
2. In a pan saute garlic, onion, tomatoes in oil.{'\n'}
3. Add salt, msg or vetsin, pepper.{'\n'}
4. Add in the mashed eggplants , green bell pepper and mix well together.{'\n'}
5. Add the beaten egg and stir until the eggs cooked. Serve hot.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function SITAW({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>ADOBONG{'\n'}SITAW</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/adobongsitaw.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 lb string beans (sitaw), cut in 2 inch length{'\n'}
•	¼ lb pork belly, thinly sliced (optional){'\n'}
•	½ cup soy sauce{'\n'}
•	1/3 cup vinegar{'\n'}
•	1 medium-sized onion, thinly sliced lengthwise{'\n'}
•	4 to 6 cloves garlic, crushed{'\n'}
•	½ teaspoon ground black pepper{'\n'}
•	1 cup water{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Heat a frying pan or wok then sear the pork.{'\n'}
2. When oil and juice comes out of the pork, add garlic and onions then cook for 2 minutes.{'\n'}
3. Pour-in the soy sauce, vinegar, and water then bring to a boil.{'\n'}
4. Shake-in the ground black pepper and stir.{'\n'}
5. Cover and simmer for 15 minutes or until the pork is tender.{'\n'}
6. Add the string beans and cook for 3 to 5 minutes.{'\n'}

</Text>
  </View>
  </ScrollView>
  )
}
function AMPALAYA({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>GINISANG{'\n'}AMPALAYA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/ampalaya.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	2 pieces ampalaya, cleaned and cut into thin slices{'\n'}
•	1 tbsp garlic, minced{'\n'}
•	1/2 tsp ground black pepper{'\n'}
•	2 tbsp salt{'\n'}
•	2 raw eggs{'\n'}
•	18 ounces luke warm water{'\n'}
•	1 large tomato, sliced{'\n'}
•	1 large onion, sliced{'\n'}
•	3 tbsp cooking oil{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Place the ampalaya in a large bowl{'\n'}
2. Add salt and luke warm water then leave for 5 minutes{'\n'}
3. Place the ampalaya in a cheese cloth then squeeze tightly until all liquid drips{'\n'}
4. Heat the pan and place the cooking oil{'\n'}
5. Sautee the garlic, onion, and tomato{'\n'}
6. Add the ampalaya mix well with the other ingredients{'\n'}
7. Put-in salt and pepper to taste{'\n'}
8. Beat the eggs and pour over the ampalaya then let the eggs cook partially{'\n'}
9. Mix the egg with the other ingredients{'\n'}
10. Serve hot.{'\n'}
</Text>
  </View>
  </ScrollView>
  )
}
function LANGKA({navigation}){
  return(
    <ScrollView>
    <View style={styles.body}>
    <TouchableOpacity onPress={()=>navigation.popToTop("HomePage")}style={styles.button}>
        <Image style={styles.home} source={require("./assets/home.png")}/>
        </TouchableOpacity>
        <View style={styles.headerText}>
        <Text style={styles.headText}>GINATAANG{'\n'}LANGKA</Text>  
    </View>
       <View style={styles.headBody}>
       <TouchableOpacity onPress={()=>navigation.goBack("Vegetables")}>   
       <Image style={styles.close} source={require("./assets/close.png")}/>
      </TouchableOpacity>
      </View>
    <Image style={styles.imaMenu}
    source={require("./assets/langka.jpg")}/>
    <Text style={styles.ingMenu}>INGREDIENTS</Text>
    <Text style={styles.textMenu}>
    •	1 lb unripe jackfruit; peeled and chopped{'\n'}
•	1 large onion, diced{'\n'}
•	5 cloves crushed garlic{'\n'}
•	3/4 cup tomatoes, diced{'\n'}
•	3 to 5 pieces red chilies{'\n'}
•	3 cups coconut milk{'\n'}
•	3/4 cup water{'\n'}
•	1/2 cup fried dried fish (daing), bones removed{'\n'}

      </Text>
      <TouchableOpacity>
        <View style={styles.line}></View>
      </TouchableOpacity>
      <Text style={styles.ingMenu}>PROCEDURE</Text>
    <Text style={styles.textMenu}>
    1. Heat a wok or a cooking pot and pour-in the coconut milk. Bring to a boil.{'\n'}
2. Add the garlic and onions and cook for 3 to 5 minutes while continuously stirring the mixture.{'\n'}
3. Put-in the tomatoes and red chilies. Continue stirring to prevent lumps from forming.{'\n'}
4. Add the fried dried fish and cook for 5 minutes.{'\n'}
5. Pour-in water and allow re-boiling.{'\n'}
6. Add the chopped jackfruit then mix with the other ingredients. Simmer for 5 to 8 minutes.{'\n'}
7. Put-in the shrimp cube then stir to ensure that the ingredients are properly distributed. Simmer until the liquid dries up.{'\n'}
8. Transfer to a serving plate then serve.{'\n'}
</Text>
  </View>
  </ScrollView>
  )

}
const styles = StyleSheet.create({
 body: {
   flex: 1,
   flexDirection: "column",
   backgroundColor: "#3F3F3F",
  },
  logo: {
    width: 93,
    height: 93,
    margin: 10,
    alignSelf: "center"
  },
  image: {
    width: 450,
    height: 200
  },
  textview: {
    position: "absolute",
    justifyContent: 'center',
    alignItems: "center",
    right:0,
    left:0,
    top: 0,
    bottom: 0
  },
  imagetext: {
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowRadius: 20
  },
  textbody:{
    fontSize: 27,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    padding:12
    
    
  },
  footerTC: {
    fontSize:15,
    fontWeight: "bold",
    textAlign: "center",
  color: "white",
  marginTop: 20,

  },
  footer:{
    fontSize:15,
    fontWeight: "bold",
    textAlign: "center",
  color: "white",
  backgroundColor:"#116530"
  },
  all:{
    fontSize: 8,
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor: "#116530"
  },
  menu:{
    height:60,
    width: 347,
    backgroundColor: "#767676",
    marginBottom: 4,
    marginRight:6, 
    marginLeft:6,
    marginTop:4,
    borderRadius:10,
    marginTop:4
  },
  imaMenu:{
    width: 340,
    height: 210,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 10
    
  }, textMenu:{
    fontSize: 16,
    marginLeft: 30,
    marginTop: 10,
    color: "white",
    marginRight: 30
  },
  ingMenu:{
    fontSize: 27,
    color:"white",
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 30
  },
  line:{
   width:360,
   height:5,
   backgroundColor: "#767676",
   marginTop:15,
   marginBottom:15
  },
 logoStyle:{
  flex: 1,
  flexDirection: "column",
backgroundColor:"#116530"
 },
 home:{
   height:35,
   width:35,
   marginLeft:30,
   marginTop:20,
   marginBottom: 20,
   flexDirection: "row"
 },
 headerText:{
  position: "absolute",
  alignItems: "center",
  right:5,
  left:10,
  top: 15,
  bottom: 10,
 },
 headText:{
  fontSize:30,
  color:"white",
  fontWeight:"bold",
  textAlign:"center",
  marginBottom:15
 },
headBody:{
  flex:1,
  position:"absolute",
  alignItems: "center",
  height:80,
  width:90,
  left:280,
  backgroundColor:"#3f3f3f"
},
close:{
  height:17,
  width:17,
  marginTop:25,
  marginBottom: 20,
  marginRight: 20
},
button: {
  backgroundColor: '#3F3F3F',
  height: 80,
  width:100
},
allr:{
  fontSize: 5,
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor: "#3f3f3f",
    alignContent:"center",
    marginTop:25,
    justifyContent:"center",
    alignItems:"center"
}

})

