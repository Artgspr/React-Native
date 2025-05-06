// src/hooks/useOddsApi.ts

import { useState } from 'react';
import { Sport, Odd } from '../types/odds-api.types';

const API_KEY = '13510463cb78df2b9d4fe4730fdc6547';
const BASE_URL = 'https://api.the-odds-api.com/v4';

interface UseOddsApiReturn {
  sports: Sport[];
  oddsData: Odd[];
  loading: boolean;
  error: string | null;
  fetchSports: () => Promise<void>;
  fetchOdds: (sportKey: string) => Promise<void>;
}

export function useOddsApi(): UseOddsApiReturn {
  const [sports, setSports] = useState<Sport[]>([]);
  const [oddsData, setOddsData] = useState<Odd[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSports = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BASE_URL}/sports?apiKey=${API_KEY}`);
      if (!res.ok) throw new Error('Erro ao buscar esportes');
      const data: Sport[] = await res.json();
      setSports(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchOdds = async (sportKey: string) => {
    setLoading(true);
    setError(null);
    try {
      const url = `${BASE_URL}/sports/${sportKey}/odds?regions=us&markets=h2h&apiKey=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Erro ao buscar odds');
      const data: Odd[] = await res.json();
      setOddsData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { sports, oddsData, loading, error, fetchSports, fetchOdds };
}
