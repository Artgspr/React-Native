// src/screens/OddsScreen.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useOddsApi } from '../hooks/useOddsApi';
import { Sport, Odd, Bookmaker, Market, Outcome } from '../types/odds-api.types';

const OddsScreen: React.FC = () => {
  const { sports, oddsData, loading, error, fetchSports, fetchOdds } = useOddsApi();
  const [selectedSport, setSelectedSport] = useState<string>('');

  useEffect(() => {
    fetchSports();
  }, []);

  const handleSearch = () => {
    if (!selectedSport) {
      Alert.alert('Erro', 'Selecione um esporte');
      return;
    }
    fetchOdds(selectedSport);
  };

  const renderItem = ({ item }: { item: Odd }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>
        {item.home_team} vs {item.away_team}
      </Text>
      {item.bookmakers.map((bookmaker: Bookmaker) => (
        <View key={bookmaker.key}>
          <Text style={styles.bookmaker}>{bookmaker.title}</Text>
          {bookmaker.markets.map((market: Market) =>
            market.outcomes.map((outcome: Outcome) => (
              <Text key={outcome.name} style={styles.outcomeText}>
                {outcome.name}: {outcome.price}
              </Text>
            ))
          )}
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Odds</Text>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text style={styles.error}>{error}</Text>}

      <Picker
        selectedValue={selectedSport}
        onValueChange={(itemValue) => setSelectedSport(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um esporte" value="" />
        {sports.map((sport: Sport) => (
          <Picker.Item key={sport.key} label={sport.title} value={sport.key} />
        ))}
      </Picker>

      <Button title="Buscar Odds" onPress={handleSearch} />

      <FlatList
        data={oddsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OddsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#205781' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, color: '#98D2C0' },
  input: { borderWidth: 1, padding: 8, marginBottom: 12, borderRadius: 6 },
  item: { marginBottom: 16 },
  picker: { borderWidth: 1, marginBottom: 12, padding: 10 },
  itemText: { fontSize: 16, fontWeight: '600', color: '#F6F8D5' },
  bookmaker: { fontStyle: 'italic', marginTop: 4, color: '#98D2C0' },
  outcomeText: { color: 'white' },
  error: { color: 'red', marginBottom: 10 },
});
