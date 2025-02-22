import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from joblib import dump, load
import logging

logging.basicConfig(level=logging.INFO)

class SDOHModel:
    def __init__(self):
        self.model = RandomForestClassifier(n_estimators=200, max_depth=10)

    def train(self, data_path='data/sdoh_data.csv'):
        logging.info("Training SDOH model...")
        data = pd.read_csv(data_path)
        X = data[['income', 'transport_access', 'housing_stability']]
        y = data['risk_label']
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
        self.model.fit(X_train, y_train)
        score = self.model.score(X_test, y_test)
        logging.info(f"Model accuracy: {score:.2f}")
        dump(self.model, 'sdoh_model.joblib')

    def predict(self, patient_data):
        model = load('sdoh_model.joblib')
        return model.predict_proba([patient_data])[0][1] * 100

if __name__ == "__main__":
    model = SDOHModel()
    model.train()
    score = model.predict([30000, 0, 1])
    print(f"SDOH Risk Score: {score:.2f}")
