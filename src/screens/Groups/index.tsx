import { Button } from "@components/Button";
import { EmptyList } from "@components/EmptyList";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

interface GroupsData {
  id: string;
  name: string;
}

export function Groups() {
  const [groups, setGroups] = useState<GroupsData[]>([]);

  function generateId() {
    return Math.floor(Math.random() + new Date().getTime()).toString();
  }
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupCard title={item.name} onPress={() => {}} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <EmptyList message="Que tal cadastrar a primeira turma?" />
        }
      />

      <Button text="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
