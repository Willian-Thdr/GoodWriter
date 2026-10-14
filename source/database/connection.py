import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

DB_PATH = BASE_DIR / "data" / "data.db"

SCHEMA_PATH = BASE_DIR / "database" / "schema.sql"

def connect():
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    
    connected = sqlite3.connect(DB_PATH)
    
    try:
        schema = SCHEMA_PATH.read_text(encoding="utf-8")
        
        connected.executescript(schema)
        connected.commit()
        
        return connected
    
    except Exception:
        connected.close()
        raise