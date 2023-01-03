import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FocusAwareStatusBar } from "../../components/FocusAwareStatusBar";
import api from "../../services/api";
import { getAuthHeader } from "../../services/auth";
import { THEME } from "../../Theme";
import { styles } from "./styles";
import * as SecureStore from "expo-secure-store"
import { UserCircle } from "phosphor-react-native";
import { Button } from "../../components/Button";
import { Spacer } from "../../components/Spacer";

interface ProfileProps{
  _id: string,
  username: string,
  followers : string[]
  followButtonDisabled: boolean
}

export function Friends( ) {
  const [profiles, setProfiles] = useState<ProfileProps[]> ([]);
  const authHeader = getAuthHeader();

  useEffect(()=>{
    const getProfiles = async () =>{
        try {
          const profileID = await SecureStore.getItemAsync("profile") as string;
          const authHeader = await getAuthHeader();
          const response = await api.get('/profiles', authHeader );
          const profiles = response.data.map((profile: ProfileProps) => {
                return {
                    ...profile,
                    followButtonDisabled: profile.followers.includes(profileID)
                };
              });

            setProfiles(profiles)
        } catch (error) {
            console.error(error)
        }
    }
    getProfiles()
  }, []);

  async function handleFollow(userID: string ){
    const profileID =  await SecureStore.getItemAsync("profile") as string
    try {
        await api.post(`/profiles/${userID}/follow`, {id:profileID}, await authHeader);
        changeButtonStatus(userID, true);
    } catch (error:any) {
        console.error(error.response.data);
    }
  }

  async function handleUnfollow(userID: string ){
    try {
      const profileID =  await SecureStore.getItemAsync("profile") as string
        await api.post(`/profiles/${userID}/follow`, {id:profileID}, await authHeader);
        changeButtonStatus(userID, false);
    } catch (error:any) {
        console.error(error.response.data);
    }
  }
  
  function changeButtonStatus(userID: string, buttonDisabled: boolean ) {
    setProfiles((profiles) => {
        const newProfiles = profiles.map((profile) => {

            if (profile._id == userID) {
                profile.followButtonDisabled = buttonDisabled;
            }
            return profile;
        });
        return [ ...newProfiles];
    })
  }

  return (
    <SafeAreaView style={styles.container}>
       <FocusAwareStatusBar barStyle="light-content" backgroundColor={THEME.COLORS.BACKGROUND_800}/>
    <View>
    <Text style={styles.h1}>Amigos</Text>
    <FlatList
          data={profiles}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <View style={styles.li}>
            <View style={styles.container}>
              <UserCircle size={48} weight="thin" color="white" />
              <Text style={styles.text}>{item.username}</Text>
              </View>
              <Spacer/>
            <View style={styles.spacer}>
              {!item.followButtonDisabled &&  <Button title={"Seguir"} onPress={()=>handleFollow(item._id)}/>}
              {item.followButtonDisabled && <Button title={"Deixar de seguir"} style={styles.unfollowButton} onPress={()=>handleUnfollow(item._id)}/>}
            </View>
              </View>

          )}
        />
    </View>
    </SafeAreaView>
  );
}
