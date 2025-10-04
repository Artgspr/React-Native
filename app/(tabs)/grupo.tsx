import React, { useState } from "react";
import { ScrollView, Text, TextInput, View, Button, TouchableOpacity } from "react-native";

type Usuario = { id: number; nome: string };
type Grupo = { id: number; nome: string; descricao: string; apostadores: number[] };

export default function GrupoScreen() {
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nomeGrupo, setNomeGrupo] = useState("");
  const [descricaoGrupo, setDescricaoGrupo] = useState("");
  const [novoApostador, setNovoApostador] = useState("");
  const [editandoGrupoId, setEditandoGrupoId] = useState<number | null>(null);
  const [nomeEdit, setNomeEdit] = useState("");
  const [descEdit, setDescEdit] = useState("");

  const criarGrupo = () => {
    if (!nomeGrupo) return;
    const novoGrupo: Grupo = {
      id: Date.now(),
      nome: nomeGrupo,
      descricao: descricaoGrupo,
      apostadores: []
    };
    setGrupos([...grupos, novoGrupo]);
    setNomeGrupo("");
    setDescricaoGrupo("");
  };

  const iniciarEdicao = (grupo: Grupo) => {
    setEditandoGrupoId(grupo.id);
    setNomeEdit(grupo.nome);
    setDescEdit(grupo.descricao);
  };

  const salvarEdicao = (id: number) => {
    setGrupos(grupos.map(g =>
      g.id === id ? { ...g, nome: nomeEdit, descricao: descEdit } : g
    ));
    setEditandoGrupoId(null);
  };

  const removerGrupo = (id: number) => setGrupos(grupos.filter(g => g.id !== id));

  const adicionarApostador = (grupoId: number) => {
    if (!novoApostador) return;
    let usuario = usuarios.find(u => u.nome === novoApostador);
    if (!usuario) {
      usuario = { id: Date.now(), nome: novoApostador };
      setUsuarios([...usuarios, usuario]);
    }
    setGrupos(grupos.map(g =>
      g.id === grupoId && !g.apostadores.includes(usuario!.id)
        ? { ...g, apostadores: [...g.apostadores, usuario!.id] }
        : g
    ));
    setNovoApostador("");
  };

  const removerApostador = (grupoId: number, usuarioId: number) => {
    setGrupos(grupos.map(g =>
      g.id === grupoId
        ? { ...g, apostadores: g.apostadores.filter(id => id !== usuarioId) }
        : g
    ));
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#F0F4F8" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15, color: "#205781", textAlign: "center" }}>Clube de Apostas</Text>

      {/* Criar grupo */}
      <View style={{ flexDirection: "row", marginBottom: 15, gap: 10 }}>
        <TextInput
          style={{ flex: 1, backgroundColor: "#fff", padding: 10, borderRadius: 8 }}
          placeholder="Nome do grupo"
          value={nomeGrupo}
          onChangeText={setNomeGrupo}
        />
        <TextInput
          style={{ flex: 2, backgroundColor: "#fff", padding: 10, borderRadius: 8 }}
          placeholder="Descrição"
          value={descricaoGrupo}
          onChangeText={setDescricaoGrupo}
        />
        <Button title="Criar" color="#2E86C1" onPress={criarGrupo} />
      </View>

      {/* Lista de grupos */}
      {grupos.map(g => (
        <View key={g.id} style={{ backgroundColor: "#fff", padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 }}>
          
          {/* Editar */}
          {editandoGrupoId === g.id ? (
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
              <TextInput style={{ flex: 1, backgroundColor: "#F8F9F9", padding: 8, borderRadius: 5 }} value={nomeEdit} onChangeText={setNomeEdit} />
              <TextInput style={{ flex: 2, backgroundColor: "#F8F9F9", padding: 8, borderRadius: 5 }} value={descEdit} onChangeText={setDescEdit} />
              <Button title="Salvar" color="#1B4F72" onPress={() => salvarEdicao(g.id)} />
            </View>
          ) : (
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1B4F72" }}>{g.nome}</Text>
                <Text>{g.descricao}</Text>
              </View>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Button title="Editar" color="#F1C40F" onPress={() => iniciarEdicao(g)} />
                <Button title="Remover" color="#E74C3C" onPress={() => removerGrupo(g.id)} />
              </View>
            </View>
          )}

          {/* Apostadores */}
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>Apostadores:</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
            {g.apostadores.map(id => {
              const usuario = usuarios.find(u => u.id === id);
              return usuario ? (
                <View key={id} style={{ backgroundColor: "#D5DBDB", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15, flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                  <Text>{usuario.nome}</Text>
                  <TouchableOpacity onPress={() => removerApostador(g.id, id)}>
                    <Text style={{ marginLeft: 5, color: "#C0392B", fontWeight: "bold" }}>x</Text>
                  </TouchableOpacity>
                </View>
              ) : null;
            })}
          </View>

          {/* Adicionar apostador */}
          <View style={{ flexDirection: "row", gap: 10 }}>
            <TextInput
              style={{ flex: 1, backgroundColor: "#fff", padding: 8, borderRadius: 8 }}
              placeholder="Digite o nome do apostador"
              value={novoApostador}
              onChangeText={setNovoApostador}
            />
            <Button title="Adicionar" color="#2E86C1" onPress={() => adicionarApostador(g.id)} />
          </View>

        </View>
      ))}
    </ScrollView>
  );
}
