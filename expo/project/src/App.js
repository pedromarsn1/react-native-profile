import React from "react"
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native'

const gitColor = '#010409'
const gitImage = 'https://avatars.githubusercontent.com/u/80779870?s=400&u=c9b795be5fe3bf7e4f794c6f155ae5d52b812bd3&v=4'
const gitLinkProfile = 'https://github.com/pedromarsn1'

const App = () => {
    const handlePressGoToGitHub = async () => {
        console.log("Verificando o link")
        const response = await Linking.canOpenURL(gitLinkProfile);

        if (response) {
            console.log("Link aprovado")
            console.log("Abrindo link...")
            await Linking.openURL(gitLinkProfile)
        }
    }


    return (
        <SafeAreaView>
            <StatusBar backgroundColor={gitColor} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel="Pedro no fundo cinza" style={style.avatar} source={{ uri: gitImage }} />
                <Text accessibilityLabel="Nome Pedro Nascimento" style={[style.defaultText, style.name]}>Pedro Nascimento</Text>
                <Text accessibilityLabel="Nickname pedromarsn" style={[style.defaultText, style.nickname]}>pedromarsn</Text>
                <Text accessibilityLabel="Descrição Pedro: Software Intern | Web Developer at Sophos7 | @pedromarsn " style={[style.defaultText, style.description]}>Software Intern | Web Developer at Sophos7 | @pedromarsn</Text>


                <Pressable onPress={handlePressGoToGitHub}>
                    <View>
                        <Text style={style.button}>Open
                            in GitHub</Text>
                    </View>
                </Pressable>

            </View>
        </SafeAreaView >
    )
}


export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: gitColor,
        flex: 1,
        justifyContent: "center",
    },
    content: {
        alignItems: "center",
        padding: 20,

    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3
    },
    defaultText: {
        color: 'white',

    },
    name: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'

    },
    nickname: {
        fontSize: 18,
        color: 'black',
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        padding: 15,
        marginTop: 15,
        borderRadius: 20
    }

})