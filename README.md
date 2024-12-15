# Flask server API voor GoodGarden 🌱

Deze repository is om een API Flask server op te zetten voor de React Native applicatie GoodGarden.

Je hoeft alleen de Python Flask server te starten. De JavaScript bestanden werken niet!

## Installatiehandleiding ⚙️

1. Vereisten
- **Python 3** (voor de Flask API)

### **Installeren van de Flask API**

1. Clone de repository:
```bash
clone https://github.com/6028968/GG_MAD_API
```

2. Ga naar de Flask folder:
```bash
cd GG_MAD_API/
```

3. Maak een virtuele omgeving aan:
```bash
python3 -m venv venv
```

4. Activeer de virtuele omgeving:
```bash
source venv/bin/activate
```

5. Installeer de benodigde Python packages:
```bash
pip install -r requirements.txt
```

6. Start de Flask server:
```bash
python server.py
```

7. De Flask API draait standaard op:
```bash
http://127.0.0.1:3000/fetch-data
```