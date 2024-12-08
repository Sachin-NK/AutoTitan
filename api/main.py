from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_core.messages import HumanMessage, SystemMessage
from dotenv import load_dotenv

import sys
import os
from rag.rag_conversational import rag_chain


# Specify the path to the .env file explicitly
dotenv_path = os.path.join(os.path.dirname(__file__), "../rag/.env")
load_dotenv(dotenv_path)

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise RuntimeError(f"OPENAI_API_KEY is not set or could not be loaded from the .env file at {dotenv_path}.")


# Import LangChain setup 
# Add the car_rental directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

app = FastAPI()


# Allow CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with specific origins in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory chat history 
chat_history = []

class ChatRequest(BaseModel):
    input: str

class ChatResponse(BaseModel):
    response: str

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    global chat_history
    user_input = request.input
    if not user_input:
        raise HTTPException(status_code=400, detail="Input is required")

    # Process the user input
    result = rag_chain.invoke({"input": user_input, "chat_history": chat_history})
    ai_response = result["answer"]

    # Update the chat history
    chat_history.append(HumanMessage(content=user_input))
    chat_history.append(SystemMessage(content=ai_response))

    return {"response": ai_response}

# To test the API
@app.get("/")
async def root():
    return {"message": "LangChain Chatbot API is running!"}
