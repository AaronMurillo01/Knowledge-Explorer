// src/types/index.ts

export interface UrlAnalysisResult {
    title: string;
    description: string;
    wordCount: number;
    statusCode: number;
  }
  
  export interface WebSearchResult {
    abstract: string;
    relatedTopics: string[];
  }
  
  export interface PptGenerationResult {
    message: string;
    fileName: string;
  }
  
  export interface ApiError {
    message: string;
  }