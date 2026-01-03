# Local RAG with ChromaDB

A lightweight Retrieval-Augmented Generation (RAG) system built with **TypeScript**, **ChromaDB**, and **Ollama**. This project uses local embeddings and a local LLM to answer questions based on private data in `info.txt`.

## 🚀 Quick Start

### 1. Prerequisites
* **Node.js**: v18 or higher.
* **Ollama**: [Download here](https://ollama.com/) to run models locally.
* **ChromaDB**: Ensure you have a Chroma instance running.

### 2. Setup Models
Pull the required models using Ollama:
```bash
# The LLM (Brain)
ollama pull granite3-dense:2b

# The Embedding Model (Context Search)
ollama pull nomic-embed-text
```

### 3. Installation
```bash
npm install
```

### 4. Data Preparation
Add your knowledge base text to: src/data/info.txt

### 5. Running the Project
```bash
# Start development mode (with auto-reload and path aliases)
npm run dev
```

## 🛠 Project Structure
```bash
├── src/
│   ├── config/          # Database & Client configurations
│   ├── services/        # Logic for embeddings, querying, and LLM calls
│   ├── data/            # Your raw .txt/data files
│   └── index.ts         # Main entry point (Chat Loop)
├── tsconfig.json        # TS configuration with @/ path aliases
└── package.json         # Modern scripts using tsx and tsc-alias
```
