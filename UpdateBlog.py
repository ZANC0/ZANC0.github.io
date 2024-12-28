import os
import json
import customtkinter as ctk
import datetime as dt
import time

class Interface(ctk.CTk):
    def __init__(self):
        super().__init__()
        # window configure
        WIDTH = 640
        HEIGHT = 480
        self.title("PMIS (Predictive Medical Imaging Software) by Zanco Farrell")
        self.geometry(f"{WIDTH}x{HEIGHT}")
        self.configure(background="red")
                
        self.default_img = "image-icon.png"
        self.selectedImagePath = "File Path"
        self.uploaded_images = {}

        self.mainframe = ctk.CTkFrame(
            self,
            fg_color="#16213e",
            width=WIDTH,
            height=HEIGHT
        )
        self.titleEntry = ctk.CTkEntry(
            self,
            placeholder_text="Title",
            text_color="gray",
            fg_color="#23335e",
            width=200,
            height=50
        )
        self.contentEntry = ctk.CTkTextbox(
            self,
            text_color="gray",
            fg_color="#23335e",
            width=200,
            height=150,
        )
        self.submit = ctk.CTkButton(
            self,
            text="Post",
            width=100,
            height=50,
            fg_color="black",
            command=self.commitPost
        )
        self.submitConfirm = ctk.CTkButton(
            self,
            width=200,
            height=150,
            fg_color="black",
            text_color="white",
            text="Post Sumbitted!",
            command=self.remove_confirm
        )
        self.dateTime = dt.datetime.now()
        self.mainframe.grid(row=0, column=0)
        self.titleEntry.grid(row=0, column=0, padx=0, pady=5, ipady=0, sticky="nw")
        self.contentEntry.grid(row=0,column=0,padx=0, pady=65, ipady=0, sticky="nw")
        self.submit.grid(row=0, column=0)
        self.submitConfirm.place_forget()

    def getDateTime(self):
        now = dt.datetime.now()
        return now.strftime("%d/%m/%Y, %H:%M")

    def commitPost(self):
        title = self.titleEntry.get()
        content = self.contentEntry.get("1.0", ctk.END)
        date = self.getDateTime()
        newEntry = {
            "title":title,
            "date":date,
            "content":content
        }
        postDatapath = "./myweb/src/posts.json"
        with open(postDatapath,"r+") as fp:
            data = json.load(fp)

            data["posts"].append(newEntry)
            fp.seek(0)
            json.dump(data,fp,indent=4)
            self.confirm()
    
    def confirm(self):
        self.titleEntry.delete(0,ctk.END)
        self.contentEntry.delete('1.0',ctk.END)
        self.submitConfirm.grid(row=0,column=0, padx=0, pady=0, ipady=0)
    def remove_confirm(self):
        self.submitConfirm.destroy()
ui = Interface()
ui.mainloop()


    