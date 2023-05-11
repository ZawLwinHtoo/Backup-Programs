class Voting:
    def __init__(self):
        print("This is special method also known as constructor:")
        self.db: dict={}
        self.id: int = 0
        self.l_id: int = 0
        self.candidate: dict = {0: {"name": "James", "v_mark": 0, "voter": []},
                                1: {"name": "John", "v_mark": 0, "voter": []},
                                2: {"name": "Rooney", "v_mark": 0, "voter": []},
                                3: {"name": "Messi", "v_mark": 0, "voter": []},
                                4: {"name": "Ronaldo", "v_mark": 0, "voter": []}}

    def main_option (self):
        option=0
        try:
            option=int(input("\nPress 1 to register.\nPress 2 to log in.\nPress 3 to exit."))
        except Exception as err:
            print("Error. Please enter integer only!!!", err)

        if option == 1:
            self.registration()
        elif option == 2:
            self.login()
        elif option == 3:
            exit(1)
        else:
            self.main_option()

    def registration(self):
        print("This is registration section")
        pass_match = False
        try:
            r_email = input("Enter your email to register:")
            r_name = input("Enter your name:")
            r_phone = int(input("Enter your phone number:"))
            r_add = input("Enter your address:")
            while pass_match is False:
                r_pass1 = input("Enter your password:")
                r_pass2 = input("Retype your password:")

                if r_pass1 != r_pass2:
                    print("Your password was incorrect!!")

                else:
                    print ("Your password is recorded.")
                    self.id: int = len(self.db)
                    total_data: dict = {self.id: {"email": r_email, "name": r_name, "password": r_pass1,
                                                "phone": r_phone, "addrss": r_add}}
                    self.db.update(total_data)
                    print(self.db)
                    break

        except Exception as err:
            print("Err while registration\n", err)
            self.registration()
        print("Registration succeed, Sir", self.db[self.id]["name"])
        self.main_option()

    def login(self):
        print("THis is log in sector:")
        length = len(self.db)

        try:
            l_email = input("Enter your email to log in:")
            l_password = input("Enter your password:")
            self.l_id = -1
            for i in range(length):
                if self.db[i]["email"] == l_email and self.db[i]["password"] == l_password:
                    self.l_id = i
                    self.user_sector(self.l_id)
                    break

            print("User name or password incorrect:")
            self.login()
        except Exception as err:
            print(err, "Invalid input.")
    def user_sector(self,id):
        print("\nThis is user sector")
        print("Welcome, Sir", self.db[id]["name"],"\n")
        print("Select one!")
        j = 0
        for i in range(len(self.candidate)):
            print("id:{} - Name:{} - currentVote: {}".format(i, self.candidate[i]["name"], self.candidate[i]["v_mark"]))
            j = i
        try:
            v_id = int(input("Enter id number to vote:"))
            if v_id > j:
                print("Id out of bound. Please try again.")
            else:
                self.candidate[v_id]["v_mark"] += 1
                self.candidate[v_id]["voter"].append(self.db[id]["name"])
                print("Congratulation, your voting have succeed!\n")
                print("Candidate {}'s now voting mark is: {}".format(self.candidate[v_id]["name"],
                                                                     self.candidate[v_id]["v_mark"]))

                for i in range(len(self.candidate[v_id]["voter"])):
                    print("Voter:",self.candidate[v_id]["voter"][i])
        except Exception as err:
            print(err)

        while True:
            try:
                option = int(input("\nPress 1 to vote again.\nPress 2 to get back to main option.\nPress 3 to exit"))
                if option == 1:
                    self.user_sector(id)
                    break
                elif option == 2:
                    self.main_option()
                    break
                elif option == 3:
                    exit(1)
                else:
                    print("Invalid option. Please try again!")
            except Exception as err:
                print(err, "\nPlease enter the given option in integer only!")