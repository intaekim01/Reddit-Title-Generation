from fastai.text import *
from fastai import *
from blurr import *
from fastbook import load_learner

# import transformers

tg_model = load_learner('models/bart_reddit_summary_production.pkl')

content = "Take your machine learning model out of your desk drawer and show its benefit to the world through a simple API using AWS Lambda and API gateway. This tutorial will bridge the gap between having a machine learning model (e.g. in your Jupyter notebooks) and taking it to a level where others can benefit from it (i.e. through an API)."


def gen_title(content):
    post = content
    outputs = tg_model.blurr_generate(post, early_stopping=False, num_return_sequences=3, min_length=3, max_length=20)

    return list(outputs[0].values())[0]
