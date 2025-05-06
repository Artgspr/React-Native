// src/types/odds-api.types.ts

export interface Sport {
    key: string;
    active: boolean;
    group: string;
    title: string;
    description: string;
  }
  
  export interface Outcome {
    name: string;
    price: number;
  }
  
  export interface Market {
    key: string;
    outcomes: Outcome[];
  }
  
  export interface Bookmaker {
    key: string;
    title: string;
    markets: Market[];
  }
  
  export interface Odd {
    id: string;
    sport_key: string;
    sport_title: string;
    commence_time: string;
    home_team: string;
    away_team: string;
    bookmakers: Bookmaker[];
  }
  