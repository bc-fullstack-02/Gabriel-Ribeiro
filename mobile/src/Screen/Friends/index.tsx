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
  }, [])
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
                <Button title={"Seguir"} onPress={()=> alert(`Você seguiu o usuário ${item.username}`)}/>
                <Spacer/>
                <Button title={"Deixar de seguir"} style={styles.unfollowButton} onPress={()=> alert(`Você deixou de seguir o usuário ${item.username}`)}/>
            </View>
              </View>

          )}
        />
    </View>
    </SafeAreaView>
  );
}
