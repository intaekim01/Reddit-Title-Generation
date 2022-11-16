from fastai.text import *
from fastai import *
from blurr import *
from fastbook import load_learner


tg_model = load_learner('models/bart_reddit_summary_production.pkl')

def gen_title(content):
    result_list = []

    for title_length in [10, 20, 30]:
        outputs = tg_model.blurr_generate(content, early_stopping=False, num_return_sequences=3, min_length=3, max_length=title_length)
        result_list.append(list(outputs[0].values())[0])

    return result_list
