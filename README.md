#  Run Backend

1. Clone git repository:
    ```sh
    git clone https://github.com/SuccessfulSmell/shop-order.git
    ```
2. Open project repository:
    ```sh
     cd shop-order/
    ```
   
3. Set virtual environment:
    ```sh
    python3 -m venv venv
    ```

4. Activate virtual environment:
    
    MacOS/Linux
    
    ```sh
    source venv/bin/activate
    ```
    
    Windows
    ```sh
    venv\Scripts\activate
    ```

5. Open project repository:
    ```sh
     cd server/
    ```
   
6. Install requirements:

    ```sh
     pip install -r requirements.txt
    ```

7. Run Django makemigrations:

    ```sh
    python manage.py runserver makemigrations 
    ```
   
8. Run Django migrations:

    ```sh
    python manage.py runserver migrate
    ```

9. Run Django app:

    ```sh
    python manage.py runserver 0.0.0.0:8000
    ```
   
#  Run Frontend
 1. Open repository:
    ```sh
    cd frontend/
    ```

2. Install requirements:
    ```sh
    npm install
    ```

3. Activate virtual environment:
    ```sh
    npm start
    ```