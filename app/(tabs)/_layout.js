import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: "#7c3ca1",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          headerTitle: "Bianca Legal",
        }}
      />
      <Tabs.Screen
        name="aulas"
        options={{
          title: "Aulas",
          headerTitle: "Conteúdo",
        }}
      />
      <Tabs.Screen
        name="interface"
        options={{
          title: "interface",
          headerTitle: "Conteúdo",
        }}
      />
      <Tabs.Screen
        name="sobre"
        options={{
          title: "sobre",
          headerTitle: "Sobre mim",
        }}
      />
      <Tabs.Screen
        name="api"
        options={{
          title: "api",
          headerTitle: "Listar API de Livros",
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          title: "post",
          headerTitle: "Criar Livro",
        }}
      />
      <Tabs.Screen
        name="delete"
        options={{
          title: "delete",
          headerTitle: "Excluir Livro",
        }}
      />
    </Tabs>
  );
}
