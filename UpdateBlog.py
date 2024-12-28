import os
import json

postDatapath = "./myweb/src/posts.json"
entry = {
    "title":"my third blog of the day",
    "date":"now",
    "content":"read the title"
}
with open(postDatapath,"r+") as fp:
    data = json.load(fp)

    data["posts"].append(entry)
    fp.seek(0)
    json.dump(data,fp,indent=4)
    