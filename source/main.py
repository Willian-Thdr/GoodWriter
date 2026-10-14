from database import connect

def main():
    connected = connect()
    
    try:
        cursor = connected.cursor()
        
        cursor.execute("""
            SELECT name
            FROM sqlite_master
            WHERE type = 'table'
        """)
        
        table = cursor.fetchall()
        
        print("Table founded:", table)
        
    finally:
        connected.close()
        
if __name__ == "__main__":
    main()