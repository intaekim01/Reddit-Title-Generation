from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import gunicorn
import uvicorn
from pydantic import BaseModel
from model import gen_title

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

class newPost(BaseModel):
    content: str

@app.post("/generate_titles")
async def generate_titles(post: newPost):
    print(post)
    newInput = post.content
    print(newInput)

    result = gen_title(newInput)

    if not result:
        raise HTTPException(status_code=400)
    
    return result