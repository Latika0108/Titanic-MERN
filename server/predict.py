import sys
import joblib

model = joblib.load("model.pkl")

pclass = int(sys.argv[1])
sex = 0 if sys.argv[2] == "male" else 1
age = float(sys.argv[3])
fare = float(sys.argv[4])

prediction = model.predict([[pclass, sex, age, fare]])

if prediction[0] == 1:
    print("Survived")
else:
    print("Not Survived")