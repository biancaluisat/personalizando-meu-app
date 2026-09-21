import { useState } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Pressable,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const API_KEY = 'cv_LtatN28y_LDJGwwqnveCVdAUABBh3Lh5_6xyhMRQVh45T9cH2ZOYBZ9o7VZW0mj9';

const api = axios.create({
    baseURL: 'https://api-ds.codeverse.dev.br',
    headers: {
        'x-api-key': API_KEY,
    },
});

export default function LivrosBuscarScreen() {
    const [id, setId] = useState('');
    const [livro, setLivro] = useState(null);
    const [buscando, setBuscando] = useState(false);
    const [erro, setErro] = useState(null);
    const [naoEncontrado, setNaoEncontrado] = useState(false);

    async function buscarPorId() {
        if (!id.trim()) {
            setErro('Digite um id pra buscar.');
            return;
        }
        
        try {
            const resposta = await api.get(`/api/livros/${id}`);
            setLivro(resposta.data || null);

            if (!resposta.data) {
                setNaoEncontrado(true);
            }
        } catch (e) {
            if (e.response && e.response.status === 404) {
                setNaoEncontrado(true);
            } else {
                console.log('Erro ao buscar livro:', e.response?.data || e.message);
                setErro('Não foi possível buscar o livro. Tenta de novo em instantes.');
            }
        } finally {
            setBuscando(false);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.conteudo}>
                <View style={styles.header}>
                    <Text style={styles.tituloPagina}>Buscar livro</Text>
                </View>

                <Text style={styles.rotulo}>Id do livro</Text>

                <View style={styles.linhaBusca}>
                    <TextInput
                        style={styles.campo}
                        value={id}
                        onChangeText={setId}
                        placeholder="Ex: 1"
                        keyboardType="numeric"
                    />

                    <Pressable style={styles.botao} onPress={buscarPorId} disabled={buscando}>
                        <Text style={styles.botaoTexto}>{buscando ? '...' : 'Buscar'}</Text>
                    </Pressable>
                </View>

                {buscando && <ActivityIndicator style={{ marginVertical: 16 }} />}

                {erro && <Text style={styles.erro}>{erro}</Text>}

                {naoEncontrado && (
                    <Text style={styles.avisoNaoEncontrado}>
                        Nenhum livro encontrado com o id "{id}".
                    </Text>
                )}

                {livro && (
                    <View style={styles.card}>
                        {livro.imageUrl && (
                            <Image source={{ uri: livro.imageUrl }} style={styles.imagem} />
                        )}

                        <View style={styles.info}>
                            <Text style={styles.titulo}>{livro.title}</Text>

                            <Text style={styles.categoria}>
                                {livro.autor} · {livro.genero}
                            </Text>

                            <Text style={styles.categoria}>
                                {livro.ano_publicacao} · {livro.numero_paginas} páginas
                            </Text>
                        </View>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e4e4e4',
    },

    conteudo: {
        padding: 24,
        paddingBottom: 48,
    },

    header: {
        marginBottom: 16,
    },

    tituloPagina: {
        fontSize: 24,
        fontWeight: '800',
        color: '#7c3ca1',
    },

    rotulo: {
        fontSize: 13,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 4,
    },

    linhaBusca: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'flex-start',
    },

    campo: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: 'white',
    },

    botao: {
        backgroundColor: '#7c3ca1',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    botaoTexto: {
        color: 'white',
        fontWeight: '700',
    },

    erro: {
        color: '#c62828',
        marginTop: 12,
    },

    avisoNaoEncontrado: {
        color: '#9a6700',
        marginTop: 16,
        fontStyle: 'italic',
    },

    card: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },

    imagem: {
        width: 88,
        height: 110,
    },

    info: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 12,
        gap: 4,
    },

    titulo: {
        fontSize: 17,
        fontWeight: '700',
        color: '#102542',
    },

    categoria: {
        fontSize: 13,
        color: '#64748b',
    },
});
